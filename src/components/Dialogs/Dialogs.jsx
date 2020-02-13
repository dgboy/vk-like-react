import React from 'react';
import Css from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const MessageItem = props => {
  return(
    <div className={Css.message}>{props.message}</div>
  );
};
const DialogItem = props => {
  return(
    <div className={Css.dialogItem}>
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};
const Dialogs = props => {
  let dialogsData = [
    { id: "1", name: "Kolya"},
    { id: "2", name: "Nikita"},
    { id: "3", name: "Sasha"}
  ];

  let dialogsElem = dialogsData.map(d => <DialogItem id={d.id} name={d.name} />);


  return(
    <div className={Css.dialogs}>
      <div>
        { dialogsElem }
      </div>

      <div className={Css.messages}>
        <MessageItem message="Jamba, where are you? I miss you" />
        <MessageItem message="I'm under ground" />
        <MessageItem message="What are you forget there?" />
      </div>
    </div>
  );
};

export default Dialogs;


{/* + ' active'*/}
{/*
  <div className={Css.dialogsItems}>
    <div className={Css.dialog}>
      <NavLink to="/dialogs/1">Kolya</NavLink>
    </div>
    <div className={Css.dialog}>
      <NavLink to="/dialogs/2">Nikita</NavLink>
    </div>
    <div className={Css.dialog}>
      <NavLink to="/dialogs/3">Sasha</NavLink>
    </div>
  </div>
  <div className={Css.messagesItems}>
    <div className={Css.message}>Jamba, where are you? I miss you</div>
    <div className={Css.message}>I'm under ground</div>
    <div className={Css.message}>What are you forget there?</div>
  </div> 
*/}
