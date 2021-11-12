import { Logo } from '../Logo/Logo';
import styles from './Card.module.css'

export const Card = ({ name }) => {
    return (
        <div className={styles.card}>
            <div className={styles.flexCard}>
                <Logo />
                <h4>{name}</h4>
            </div>
        </div>
    );
}