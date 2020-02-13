import React from 'react';
import Css from './Dialogs.module.css';

const MessageItem = props => {
  return(
    <div className={Css.messageItem}>
        <p>{props.text}</p>
    </div>
  );
};

export default MessageItem;
