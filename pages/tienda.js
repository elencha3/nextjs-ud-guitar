import Layout from "../components/Layout";
import GuitarsList from "../components/GuitarsList";

const Tienda = ({guitars}) => {
    return (
        <Layout page="Tienda">
            <main className="container">
                <h1 className="heading">Nuestra Colección</h1>
                <GuitarsList 
                guitars={guitars}
                />
            </main>
        </Layout>
    );
};

//Estas funciones de consultas a APIS solo pueden ser ejecutadas en páginas y urls dinámicas, no en componentes
export async function getServerSideProps() {
    const url = `${process.env.API_URL}/guitars` 

    const response = await fetch(url);
    const guitars = await response.json();

    return {
        props: {
            guitars
        }
    }
}

export default Tienda;
