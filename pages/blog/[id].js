import { useRouter } from "next/router";

const EntryId = ({ entry }) => {
    return (
        <div>
            <h1>{entry.title}</h1>
        </div>
    );
};

//Con Routing dinámico se requiere static paths

export async function getStaticPaths() {
    const url = "http://localhost:1337/blogs";
    const response = await fetch(url);
    const entries = await response.json();

    const paths = entries.map((entry) => ({
        params: { id: entry.id.toString() },
    }));

    return {
        paths,
        fallback: false //Muchas entradas -true, pocas entradas- false
    };
}

export async function getStaticProps({ params: { id } }) {
    const url = `http://localhost:1337/blogs/${id}`;
    const response = await fetch(url);
    const entry = await response.json();
    return {
        props: {
            entry,
        },
    };
}

// export async function getServerSideProps({ query: { id } }) {
//     const url = `http://localhost:1337/blogs/${id}`;
//     const response = await fetch(url);
//     const entry = await response.json();
//     return {
//         props: {
//             entry,
//         },
//     };
// }

export default EntryId;
