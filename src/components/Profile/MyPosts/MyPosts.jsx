import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postElements = props.state.map((elem) => (
    <Post message={elem.message} likeNumber={elem.likeNumber} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({type:'ADD-POST'});
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = {type:'UPDATE-NEW-POST-TEXT', newText: text};
    props.dispatch(action);
  }

  return (
    <div>
      <h3>My posts</h3>
      <div className={s.addMessage}>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
        </div>
        <div className={s.buttonAdd}>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
