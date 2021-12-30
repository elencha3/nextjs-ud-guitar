import BlogList from "../components/BlogList";
import Layout from "../components/Layout";


const Blog = ({ entries }) => {
    return (
        <Layout page="Blog">
            <main className="container">
                <BlogList 
                entries={entries}
                />
            </main>
        </Layout>
    );
};

//Se exporta en esta misma página. Esta función corre en el servidor
export async function getStaticProps() {
    const url = `${process.env.API_URL}/blogs?_sort=created_at:desc` 

    const response = await fetch(url);
    const entries = await response.json();

    return {
        props: {
            entries: entries, //Como se llaman igual, no hace falta key & value
        },
    };
}

export default Blog;
