import React from 'react';
import Css from './Profile.module.css';
import Posts from './Posts/Posts';

function Profile() {
  return(
    <div className={Css.content}>
      <div>
        <img src="" alt="" srcset=""/>
      </div>
      <Posts />
    </div>
  );
};

export default Profile;
