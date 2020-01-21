import React from 'react';
import Css from './Navbar.module.css';

function Navbar() {
  return(
    <nav className={Css.nav}>
      <ul>
        <li><a href="#">My Profile</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">Messages</a></li>
        <li><a href="#">Music</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;  
