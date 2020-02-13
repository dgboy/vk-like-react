import React from 'react';
import { NavLink } from 'react-router-dom';
import Css from './Dialogs.module.css';

const DialogItem = props => {
  return(
    <div className={Css.dialogItem}>
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
