import { Logo } from '../Logo/Logo';
import { Menu } from '../Menu/Menu';
import styles from './Header.module.css'


export const Header = () => {
    return (
        <div className={styles.flex}>
            <Menu />
            <Logo />
        </div>
    );
}