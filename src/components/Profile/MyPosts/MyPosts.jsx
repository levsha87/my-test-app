import { React } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      <h3>My posts</h3>
      <div className={s.addMessage}>
        <div>
          <textarea></textarea>
        </div>
        <div className={s.buttonAdd}>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post message='Hi, how are you?' likeNumber='15' />
        <Post message='Hello, I am fine!' likeNumber='25' />
        <Post message='Hello, I am good!' likeNumber='35' />
      </div>
    </div>
  );
};

export default MyPosts;
