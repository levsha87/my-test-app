import { React } from 'react';
import MyPost from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={s.main}>
      <ProfileInfo />
      <MyPost state={props.state.posts}/>
    </div>
  );
};

export default Profile;
