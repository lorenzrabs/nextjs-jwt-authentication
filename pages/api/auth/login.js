// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// api/auth/login.js

import { serialize } from "cookie"
import { sign } from "jsonwebtoken"

const SECRET_KEY = process.env.SECRET_KEY

export default async function (req, res) {

  const { password } = req.body;

  if (password === process.env.PASSWORD) {
    const token = sign({
      password
    }, SECRET_KEY, {
      expiresIn: "30d",
    })

    const cookie = serialize("auth", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 2592000,
      path: "/",
    })

    res.setHeader("Set-Cookie", cookie)
    return res.status(200).json({ message: "Success" })
  }

  res.json({ message: "Invalid password" })
}
