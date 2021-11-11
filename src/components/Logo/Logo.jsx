import logo from '../../assets/cogumelo.jpeg'
import styles from './Logo.module.css'

export const Logo = () => {
    return (
        <>
            <img className={styles.logo}  src={logo} alt="Imagem cogumelo" />
        </>
    );
}