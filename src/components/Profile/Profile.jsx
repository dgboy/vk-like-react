import React from 'react';
import Css from './Profile.module.css';
import Posts from './Posts/Posts';

const Profile = props => {
  return(
    <div className={Css.content}>
      <Posts state={props.state.posts} />
    </div>
  );
};

export default Profile;
