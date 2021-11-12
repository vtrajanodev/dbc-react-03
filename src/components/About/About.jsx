import styles from './About.module.css'

export const About = () => {
    return (
        <div className={styles.flex}>
            <h2>Sobre a DBC</h2>
            <iframe width="692" height="389" src="https://www.youtube.com/embed/lq5hlLaa16s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
}