import Layout from "../components/Layout";
import Link from "next/link";
import styles from "../styles/NotFound.module.css";

const NotFound = () => {
    return (
        <Layout>
            <div className={styles.not_found}>
                <h1 className="heading">Página no encontrada</h1>
                <Link href="/"> Volver al inicio</Link>
            </div>
        </Layout>
    );
};

export default NotFound;
