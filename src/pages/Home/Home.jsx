import { Header } from "../../components/Header/Header";
import styles from './Home.module.css'

export const Home = () => {
    return (
        <div className="container">
            <Header styledLink={styles.link}/>
        </div>
    );
}