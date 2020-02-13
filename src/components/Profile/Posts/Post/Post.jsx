import React from 'react';
import Css from './Post.module.css';

function Post(props) {
  //debugger;

  return(
    <div className={Css.Post}>
      <img src="https://sun9-33.userapi.com/c205528/v205528079/281c3/iujjqeo-5vQ.jpg" alt=""/>
      <h4>Daniil Gorbunov</h4>
      <small>{Date()}</small>
      <p>{props.text}</p>
    </div>
  );
};

export default Post;
