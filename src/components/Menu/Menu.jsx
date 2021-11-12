import { Link } from 'react-router-dom';
import styles from './Menu.module.css'

export const Menu = () => {
    return (
        <>
            <ul className={styles.flex}>
                <li>    
                    <Link className="link" to="/">Home</Link>
                </li>
                <li>
                    <Link className="link" to="/sobre">Sobre</Link>
                </li>
                <li>
                    <Link className="link" to="/Contato">Contato</Link>
                </li>
            </ul>
        </>
    );
}