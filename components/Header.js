import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.bar}>
                    <Link href="/" passHref>
                        <Image
                            width={400}
                            height={100}
                            alt="Imagen logo"
                            src="/img/logo.svg"
                        />
                    </Link>
                    <nav className={styles.navigation}>
                        <Link href="/">Inicio</Link>
                        <Link href="/nosotros">Nosotros</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/tienda">Tienda</Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
