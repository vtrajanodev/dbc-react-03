import { Logo } from '../Logo/Logo';
import { Menu } from '../Menu/Menu';
import styles from './Header.module.css'


export const Header = ({ styledLink }) => {
    return (
        <div className={styles.flex}>
            <Menu styledLink={styledLink}/>
            <Logo />
        </div>
    );
}