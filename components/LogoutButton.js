import axios from "axios"
import { useRouter } from "next/router"

function LogoutButton() {

    const router = useRouter()

    const handleLogout = async (e) => {
        e.preventDefault()
        const user = await axios.get('/api/auth/logout')

        if (user.status === 200) {
            router.push('/')
        }
    }

    return (
        <button onClick={(e) => handleLogout(e)}>Logout</button>
    )
}

export default LogoutButton