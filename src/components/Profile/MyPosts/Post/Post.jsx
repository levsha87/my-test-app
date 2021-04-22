import { React } from 'react';
import s from './Post.module.css';
import image from './../../../../images/user-icon.jpg'

const Post = (props) => {
  return (
    <div className={s.item}>
      <div className={s.item_mess}>
        <img
          src={image}
          alt='userFoto'
        />
        {props.message}
      </div>

      <div className={s.like}>
        <span>like</span> {props.likeNumber} 
      </div>
    </div>
  );
};

export default Post;
