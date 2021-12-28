import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({children, page}) => {
    return (
        <div>
            <Head>
                <title>Guitar App - {page}</title>
                <meta name="description" content="Sitio web de Ventas de Guitarras" />
            </Head>

            <Header />

            {children}

            <Footer />
        </div>
    )
}

export default Layout
