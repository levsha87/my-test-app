import { React } from 'react';
import navStyles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={navStyles.navbar}>
        <div>
          <a href='/'>Profile</a>
        </div>
        <div>
          <a href='/'>Message</a>
        </div>
        <div>
          <a href='/'>News</a>
        </div>
        <div>
          <a href='/'>Music</a>
        </div>
        <div>
          <a href='/'>Settings</a>
        </div>
      </nav>
    );
}

export default Navbar;