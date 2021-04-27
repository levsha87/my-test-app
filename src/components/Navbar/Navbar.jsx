import { React } from 'react';
import { NavLink } from 'react-router-dom';
import Friends from '../Friends/Friends';
import navStyles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={navStyles.navbar}>
      <div className={navStyles.item}>
        <NavLink to='/profile' activeClassName={navStyles.active}>
          Profile
        </NavLink>
      </div>
      <div className={navStyles.item}>
        <NavLink to='/dialogs' activeClassName={navStyles.active}>
          Message
        </NavLink>
      </div>
      <div className={navStyles.item}>
        <NavLink to='/news' activeClassName={navStyles.active}>
          News
        </NavLink>
      </div>
      <div className={navStyles.item}>
        <NavLink to='/music' activeClassName={navStyles.active}>
          Music
        </NavLink>
      </div>
      <div className={navStyles.item}>
        <NavLink to='/settings' activeClassName={navStyles.active}>
          Settings
        </NavLink>
      </div>
      <div>
        <Friends />
      </div>
    </nav>
  );
};

export default Navbar;
