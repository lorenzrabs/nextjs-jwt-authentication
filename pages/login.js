import axios from "axios"
import Head from "next/head"
import { useRouter } from "next/router"
import { useState } from "react"
import Footer from "../components/Footer"


export default function Login() {
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const credentials = { password }

    const user = await axios.post('/api/auth/login', credentials)

    if (user.status === 200) {
      router.push('/')
    }
  }

  return (
    <>
      <Head>
        <title>Next.js Auth</title>
        <meta name="description" content="Next.js Auth" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Login</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <Footer />
    </>
  )
}
