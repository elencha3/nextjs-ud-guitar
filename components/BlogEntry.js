import Link from "next/link";
import Image from "next/image";
import { formatDate } from "../helpers";
import styles from "../styles/BlogEntry.module.css";

const BlogEntry = ({ entry }) => {
    const { title, caption, content, image, published_at, id } = entry;

    return (
        <article>
            <Image
                priority="true"
                layout="responsive"
                width={800}
                height={600}
                src={image.url}
                alt={`imagen blog ${title}`}
            ></Image>
            <div className={styles.content}>
                <h3>{entry.title}</h3>
                <p className={styles.date}>{formatDate(published_at)}</p>
                <p className={styles.caption}>{caption}</p>
                <Link href={`/blog/${id}`}>
                    
                    <a className={styles.link}> Leer Entrada </a>
                </Link>
            </div>
        </article>
    );
};

export default BlogEntry;
