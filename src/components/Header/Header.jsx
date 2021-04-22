import { React } from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <img
            src='https://image.freepik.com/free-vector/leaf-logo-template_93835-866.jpg'
            alt='logo'
            />
        </header>
    );
}

export default Header;