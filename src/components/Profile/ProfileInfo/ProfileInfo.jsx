import { React } from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div className={s.main}>
      <div>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIbqmh9o5zM2evuxUUp3RrVhe2JzgfAFMoNw&usqp=CAU'
          alt='nature'
        />
      </div>
      <div>description</div>
    </div>
  );
};

export default ProfileInfo;
