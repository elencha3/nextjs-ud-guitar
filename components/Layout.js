import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({children, page}) => {
    return (
        <div>
            <Head>
                <title>Guitar App - {page}</title>
                <meta name="description" content="Sitio web de Ventas de Guitarras" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;900&display=swap" rel="stylesheet" />
            </Head>

            <Header />

            {children}

            <Footer />
        </div>
    )
}

export default Layout
