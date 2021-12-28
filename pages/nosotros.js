import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Nosotros.module.css";

const Nosotros = () => {
    return (
        <Layout page="Nosotros">
            <main className="container">
                <h2 className="heading">Sobre Nosotros</h2>
                <div className={styles.content}>
                    <Image
                        layout="responsive"
                        width={600}
                        height={450}
                        src="/img/nosotros.jpg"
                        alt="Imagen sobre nosotros"
                    />
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolorem excepturi, sint iure facilis facere
                            hic iusto consectetur, saepe, totam dignissimos ex
                            aspernatur nisi adipisci cumque quo omnis ea dicta.
                            Nisi! Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Dolorem excepturi, sint iure
                            facilis facere hic iusto consectetur, saepe, totam
                            dignissimos ex aspernatur nisi adipisci cumque quo
                            omnis ea dicta. Nisi!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolorem excepturi, sint iure facilis facere
                            hic iusto consectetur, saepe, totam dignissimos ex
                            aspernatur nisi adipisci cumque quo omnis ea dicta.
                            Nisi! Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Dolorem excepturi, sint iure
                            facilis facere hic iusto consectetur, saepe, totam
                            dignissimos ex aspernatur nisi adipisci cumque quo
                            omnis ea dicta. Nisi!
                        </p>
                    </div>
                </div>
            </main>
        </Layout>
    );
};

export default Nosotros;
