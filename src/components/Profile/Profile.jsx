import { React } from 'react';
import MyPost from './MyPosts/MyPost';
import profileStyles from './Profile.module.css';

const Profile = () => {
  return (
    <div className={profileStyles.content}>
      <img
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIbqmh9o5zM2evuxUUp3RrVhe2JzgfAFMoNw&usqp=CAU'
        alt='nature'
      />
      <MyPost />
    </div>
  );
};

export default Profile;
