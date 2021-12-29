import Link from "next/link";
import Image from "next/image";
import { formatDate } from "../helpers";

const BlogEntry = ({ entry }) => {
    console.log(entry);
    const { title, caption, content, image, published_at, id } = entry;

    return (
        <article>

            <Image layout="responsive" width={800} height={600} src={image.url} alt={`imagen blog ${title}`}></Image>
            <div className="">
                <h1>{entry.title}</h1>
                <p>{formatDate(published_at)}</p>
                <p>{caption}</p>
                <Link href={`/blog/${id}`}> Leer Entrada</Link>
            </div>
        </article>
    );
};

export default BlogEntry;
