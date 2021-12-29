import Image from "next/image";
import Layout from "../../components/Layout";
import {formatDate} from "../../helpers"
import styles from "../../styles/BlogEntry.module.css"

const EntryId = ({ entry }) => {
    const { title, content, image, published_at } = entry;
    return (
        <Layout>
            <main className="container">
                <h1 className="heading">{title}</h1>
                <article className={styles.entry}>
                    <Image layout="responsive" width={800} height={600} src={image.url} alt={`Imagen entrada ${title}`} />
                    <div className={styles.content}>
                        <p className={styles.date}>{formatDate(published_at)}</p>
                        <p className={styles.text}>{content}</p>
                    </div>
                </article>
            </main>
        </Layout>
    );
};

//Con Routing dinámico se requiere static paths

export async function getStaticPaths() {
    const url = `${process.env.API_URL}/blogs`;
    const response = await fetch(url);
    const entries = await response.json();

    const paths = entries.map((entry) => ({
        params: { id: entry.id.toString() },
    }));

    return {
        paths,
        fallback: false, //Muchas entradas -true, pocas entradas- false
    };
}

export async function getStaticProps({ params: { id } }) {
    //Si corre del lado del servidor, puedes nombrar la variable de como quieras pero si es en el client, NEXT_PUBLIC_
    const url = `${process.env.API_URL}/blogs/${id}`;
    const response = await fetch(url);

    const entry = await response.json();
    return {
        props: {
            entry,
        },
    };
}

// export async function getServerSideProps({ query: { id } }) {
//    const url = `${process.env.API_URL}/blogs/${id}`
//     const response = await fetch(url);
//     const entry = await response.json();
//     return {
//         props: {
//             entry,
//         },
//     };
// }

export default EntryId;
