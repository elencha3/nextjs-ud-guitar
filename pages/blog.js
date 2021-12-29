import Layout from "../components/Layout";

const Blog = ({entries}) => {

    console.log(entries)
    return (
        <Layout page="Blog">
            <h1>Desde Blog</h1>
        </Layout>
    );
};

//Se exporta en esta misma página. Esta función corre en el servidor
export async function getStaticProps() {
    const url = "http://localhost:1337/blogs";
    const response = await fetch(url);
    const entries = await response.json();

    return {
        props: {
            entries: entries, //Como se llaman igual, no hace falta key & value
        },
    };
}

export default Blog;
