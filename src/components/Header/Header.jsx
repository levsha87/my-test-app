import { React } from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo5N9H84BlUK8bkFMOdtEP6km4nqGKWcLBZQ&usqp=CAU'
            alt='logo'
            />
        </header>
    );
}

export default Header;