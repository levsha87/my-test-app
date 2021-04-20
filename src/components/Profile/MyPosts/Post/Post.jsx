import { React } from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <div className={s.item_mess}>
        <img
          src='https://lh3.googleusercontent.com/proxy/XcR4DgU3_7BK2AFBdnXmXsR3osJfPX0ic46hu8kLR6lTsYX75Ff5OTPFKKQJQAnBeK5P3_3OsBrZW9N_lgSbkh1pnssHn4uEph0312PAi55U9qqP3jSGR2LJNxsePzxkTpBVaJMOJHQflFBBJcPVqjHrrhmJ9tOVD8M2P7QbHw'
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
