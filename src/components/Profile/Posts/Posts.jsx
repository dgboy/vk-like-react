import React from 'react';
import Css from './Posts.module.css';
import Post from './Post/Post';

function Posts() {
  return(
    <div className={Css.posts}>
      <Post text="I love to try!"/>
      <Post text="Where is my banana!"/>
      <Post text="My mother tell me 'What!'."/>
    </div>
  );
};

export default Posts;
