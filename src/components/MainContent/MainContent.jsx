import { Card } from '../Card/Card';
import { TextContent } from '../TextContent/TextContent';
import styles from './MainContent.module.css'

export const MainContent = () => {
    return (
        <>
            <h1>Estamos aprendendo React com o melhor professor de todos :)</h1>
            
            <div className={styles.flex}>
                <Card name="Cogumelo bacana" />
                <Card name="Cogumelo legal" />
                <Card name="Cogumelo descolado" />
            </div>

            <TextContent />

            <div className={styles.adress}>
                <h2>Endereço da DBC</h2>

                <iframe title="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.7200844760882!2d-51.17087028504266!3d-30.01619288189254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951977775fc4c071%3A0x6de693cbd6b0b5e5!2sDBC%20Company!5e0!3m2!1spt-BR!2sbr!4v1636724730878!5m2!1spt-BR!2sbr"></iframe>
            </div>
        </>
    );  
}