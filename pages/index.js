
import Layout from "../components/Layout";
import GuitarList from "../components/GuitarsList";
import Course from "../components/Course";


export default function Home({guitars, course}) {
 
    return (
        <Layout
        page="Inicio">
            <main className="container">
                <h1 className="heading"> Nuestra colección</h1>
                <GuitarList
                guitars={guitars} />
            </main>
            <Course 
            course={course}
            />
        </Layout>
    );
}

export async function getServerSideProps() {
    
    const urlGuitars = `${process.env.API_URL}/guitars` 
    const urlCourses = `${process.env.API_URL}/course` 

    const [resGuitars, resCourses] = await Promise.all([
        fetch(urlGuitars),
        fetch(urlCourses)
    ])

    const [guitars, course] = await Promise.all([
        resGuitars.json(),
        resCourses.json()
    ])

    return {
        props: {
            guitars,
            course
        }
    }
}
