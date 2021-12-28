import Head from "next/head"
import Header from "./Header"

const Layout = ({children, page}) => {
    return (
        <div>
            <Head>
                <title>Guitar App - {page}</title>
                <meta name="description" content="Sitio web de Ventas de Guitarras" />
            </Head>

            <Header />

            
            {children}
        </div>
    )
}

export default Layout
