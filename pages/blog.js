import Layout from "../components/Layout";
import BlogEntry from "../components/BlogEntry";

const Blog = ({ entries }) => {
   
    return (
        <Layout page="Blog">
            <main className="container">
                <h2 className="heading">Blog</h2>
                <div>
                    {entries.map(entry => (
                    <BlogEntry
                    key={entry.id}
                    entry={entry}
                    />
                    ))}
                </div>
            </main>
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
