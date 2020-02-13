import React from 'react';
import Css from './Dialogs.module.css';
import DialogItem from './DialogItem';
import MessageItem from './MessageItem';


const Dialogs = props => {
  let newMessageElem = React.createRef();

  let addMessage = () => {
    let msg = newMessageElem.current.value;
    props.addMessage(msg);
  };

  let dialogElems = props.state.dialogs.map(elem => <DialogItem id={elem.id} name={elem.name} />);
  let messageElems = props.state.messages.map(elem => <MessageItem id={elem.id} text={elem.text} />);
  return (
    <div className={Css.dialogs}>
      <div>
        {dialogElems}
      </div>

      <div className={Css.messages}>
        {messageElems}
        <div className="add-message">
          <textarea ref={newMessageElem} cols="60" rows="10"></textarea>
          <button onClick={addMessage}>Send message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
