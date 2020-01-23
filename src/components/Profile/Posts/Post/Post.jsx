import React from 'react';
import Css from './Post.module.css';

function Post(props) {
  //debugger;

  return(
    <div className={Css.Post}>
      <img src="https://sun9-33.userapi.com/c205528/v205528079/281c3/iujjqeo-5vQ.jpg" alt=""/>
      <div>Daniil Gorbunov</div>
      <div>{Date()}</div><br/>
      <div>{props.text}</div>
    </div>
  );
};

export default Post;
