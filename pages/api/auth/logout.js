import { serialize } from "cookie"

export default async function (req, res) {
    const { cookies } = req
    const jwt = cookies.auth

    if (!jwt) {
        return res.json({ message: "Not authorized" })
    } else {
        const cookie = serialize("auth", null, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: -1,
            path: "/",
        })

        res.setHeader("Set-Cookie", cookie)
        res.status(200).json({ message: "Successfully logged out!" })
    }
}