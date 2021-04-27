import React from 'react';
import MyPost from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  console.log(props);

  return (
    <div className={s.main}>
      <ProfileInfo />
      <MyPost
        state={props.state.posts}
        newPostText={props.state.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profile;
