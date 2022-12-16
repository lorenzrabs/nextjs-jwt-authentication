import Head from "next/head"
import LogoutButton from "./LogoutButton"

function Header() {
    return (
        <>
            <Head>
                <title>Next.js Auth</title>
                <meta name="description" content="Next.js Auth" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>Header</div>
            <LogoutButton />
        </>

    )
}

export default Header