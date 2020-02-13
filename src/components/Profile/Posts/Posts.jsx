import React from 'react';
import Css from './Posts.module.css';
import Post from './Post/Post';

const Posts = props => {
  let postsElem = props.state.map(p => <Post text={p.text} />);

  return(
    <div className={Css.posts}>
      { postsElem }
    </div>
  );
};

export default Posts;
