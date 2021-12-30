import Image from "next/image";
import Layout from "../../components/Layout";
import styles from "../../styles/Guitar.module.css";

const GuitarDetail = ({ guitar }) => {
    const { name, description, image, price } = guitar[0];

    return (
        <Layout page={`Guitarra ${name}`}>
            <div className={styles.guitar}>
                <Image
                    layout="responsive"
                    width={180}
                    height={350}
                    src={image.url}
                    alt={`Imagen guitarra ${name}`}
                />
                <div className={styles.content}>
                    <h3>{name}</h3>
                    <p className={styles.description}>{description}</p>
                    <p className={styles.price}>{price}</p>
                    <form action="" className={styles.form}>
                        <label>Cantidad: </label>
                        <select name="" id="">
                            <option value="">--Seleccione--</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </select>

                        <input type="submit" value="Agregar al carrito" />
                    </form>
                </div>
            </div>
        </Layout>
    );
};

//El parámetro que se pasa es el nombre del archivo que has creado, en este caso [url]
export async function getServerSideProps({ query: { url } }) {
    const urlGuitar = `${process.env.API_URL}/guitars?url=${url}`;
    const response = await fetch(urlGuitar);
    const guitar = await response.json();
    //Esta respuesta de guitar llega en un array ocn un único index.
    return {
        props: {
            guitar,
        },
    };
}

export default GuitarDetail;
