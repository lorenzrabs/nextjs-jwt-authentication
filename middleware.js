import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

const SECRET_KEY = process.env.SECRET_KEY;

export default async function middleware(req) {
    const jwt = req.cookies.get('auth');

    if (!jwt) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    if (req.nextUrl.pathname === '/login') {
        return NextResponse.redirect(new URL("/", req.url));
    }

    try {
        const { payload } = await jwtVerify(jwt.value, new TextEncoder().encode(SECRET_KEY));
        return NextResponse.next();
    } catch (error) {
        console.log(error);
        return NextResponse.redirect(new URL("/login", req.url));
    }
}

export const config = {
    matcher: ['/', '/en/:path*']
};