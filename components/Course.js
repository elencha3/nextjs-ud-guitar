import styles from "../styles/Course.module.css"

const Course = ({ course }) => {
    const { content, title, image } = course;
    return (
        <section >
            <div className={`container ${styles.grid}`}>
                <div className={styles.content}>
                    <h2 className="heading">{title}</h2>
                    <p className={styles.text}>{content}</p>
                    <a href="#" className={styles.link}>Más información</a>
                </div>
            </div>
            <style jsx> {`
                section {
                    padding: 10rem 0;
                    margin-top: 10rem;
                    background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 /.7)), url(${image.url});
                    background-size: cover;
                    background-position: center; 
                }
            `}

            </style>
        </section>
    );
};

export default Course;
