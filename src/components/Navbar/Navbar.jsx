import React from 'react';
import { NavLink } from 'react-router-dom';
import Css from './Navbar.module.css';

function Navbar() {
  return(
    <nav className={Css.nav}>
      <ul>
        <li><NavLink to="/profile" activeClassName={Css.active}>Мой профиль</NavLink></li>
        <li><NavLink to="/news" activeClassName={Css.active}>Новости</NavLink></li>
        <li><NavLink to="/dialogs" activeClassName={Css.active}>Сообщения</NavLink></li>
        <li><NavLink to="/friends" activeClassName={Css.active}>Друзья</NavLink></li>
        <li><NavLink to="/groups" activeClassName={Css.active}>Группы</NavLink></li>
        <li><NavLink to="/photos" activeClassName={Css.active}>Фото</NavLink></li>
        <li><NavLink to="/music" activeClassName={Css.active}>Музыка</NavLink></li>
        <li><NavLink to="/music" activeClassName={Css.active}>Видео</NavLink></li>
        <li><NavLink to="/music" activeClassName={Css.active}>Игры</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
