import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css";

const Header = ({ guitar }) => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.bar}>
                    <Link href="/" passHref>
                        <a>
                            <Image
                                width={400}
                                height={100}
                                alt="Imagen logo"
                                src="/img/logo.svg"
                            />
                        </a>
                    </Link>
                    <nav className={styles.navigation}>
                        <Link href="/">Inicio</Link>
                        <Link href="/nosotros">Nosotros</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/tienda">Tienda</Link>
                    </nav>
                </div>
                {guitar && (
                    <div className={styles.model}>
                        <h2>Modelo: {guitar.name}</h2>
                        <p>{guitar.description}</p>
                        <p className={styles.price}>{guitar.price}€</p>
                        <Link href={`/guitars/${guitar.url}`}>
                        <a className={styles.link} href="">Ver Producto</a>
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
