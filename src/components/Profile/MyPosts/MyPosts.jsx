import { React } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

let postData = [
  { id: 1, message: 'Hi, how are you?', likeNumber: '15' },
  { id: 1, message: 'Hello, I am fine!', likeNumber: '25' },
  { id: 1, message: 'Hello, I am good!', likeNumber: '35' },
];

let postElements = postData.map((elem) => (
  <Post message={elem.message} likeNumber={elem.likeNumber} />
));

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
      <div className={s.posts}>{ postElements }</div>
    </div>
  );
};

export default MyPosts;
