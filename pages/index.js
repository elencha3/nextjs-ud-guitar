import Layout from "../components/Layout";
import GuitarList from "../components/GuitarsList";
import Course from "../components/Course";
import BlogList from "../components/BlogList";

export default function Home({ guitars, course, entries }) {
    console.log(entries)
    return (
        <Layout page="Inicio">
            <main className="container">
                <h1 className="heading"> Nuestra colección</h1>
                <GuitarList guitars={guitars} />
            </main>
            <Course course={course} />
            <section className="container">
            <BlogList
            entries={entries}
            />
            </section>
        </Layout>
    );
}

export async function getServerSideProps() {
    const urlGuitars = `${process.env.API_URL}/guitars`;
    const urlCourses = `${process.env.API_URL}/course`;
    const urlBlog = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc`;

    const [resGuitars, resCourses, resBlog] = await Promise.all([
        fetch(urlGuitars),
        fetch(urlCourses),
        fetch(urlBlog),
    ]);

    const [guitars, course, entries] = await Promise.all([
        resGuitars.json(),
        resCourses.json(),
        resBlog.json(),
    ]);

    return {
        props: {
            guitars,
            course,
            entries,
        },
    };
}
