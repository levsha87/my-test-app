import { React } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postElements = props.state.map((elem) => (
    <Post message={elem.message} likeNumber={elem.likeNumber} />
  ));
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
      <div className={s.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
