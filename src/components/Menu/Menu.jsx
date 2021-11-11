import { Link } from 'react-router-dom';
import styles from './Menu.module.css'

export const Menu = ({ styledLink }) => {
    return (
        <>
            <ul className={styles.flex}>
                <li>
                    <Link className={styledLink} to="/">Home</Link>
                </li>
                <li>
                    <Link className={styledLink} to="/">Sobre</Link>
                </li>
                <li>
                    <Link className={styledLink} to="/">Contato</Link>
                </li>
            </ul>
        </>
    );
}