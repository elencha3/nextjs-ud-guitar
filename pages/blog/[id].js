import { useRouter } from "next/router";

const EntryId = ({entry}) => {
    return (
    <div>
        <h1>{entry.title}</h1>
    </div>);
};

export async function getServerSideProps({ query: { id } }) {
    const url = `http://localhost:1337/blogs/${id}`;
    const response = await fetch(url);
    const entry = await response.json();
    return {
        props: {
            entry,
        },
    };
}

export default EntryId;
