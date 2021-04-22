import { React } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialog.module.css';

const Dialog = (props) => {
  return (
    <div className={s.dialog}>
      <NavLink to={`/dialogs/${props.adress}`}>{props.name}</NavLink>
    </div>
  );
};

export default Dialog;
