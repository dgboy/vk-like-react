const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

export const addMsgActionCreater = () => ({type: ADD_MESSAGE});
export const updateNewMsgActionCreater = text => ({type: UPDATE_NEW_MESSAGE_TEXT, text: text});

let store = {
  _state: {
    profilePage: {
      posts: [
        { text: "I love to try!"},
        { text: "Where is my banana!"},
        { text: "My mother tell me 'What is the shit!'"}
      ]
    },
    dialogsPage: {
      newMessage: '',
      dialogs: [
        { id: 1, name: "Kolya"},
        { id: 2, name: "Nikita"},
        { id: 3, name: "Sasha"}
      ],
      messages: [
        { id: 1, text: "Jamba, where are you? I miss you"},
        { id: 2, text: "I'm under ground"},
        { id: 3, text: "What are you forget there?"}
      ],
      newMessageBody: ''
    }
  },
  _callSubscriber() {
    console.log("_state was chanded");
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  },
  addMessage() {
    let message = {
      id: this._state.dialogsPage.messages.length + 1,
      text: this._state.dialogsPage.newMessage
    }
  
    this._state.dialogsPage.messages.push(message);
    this._state.dialogsPage.newMessage = '';
    this._callSubscriber(this._state);
  },
  updateNewMessage(text) {
    this._state.dialogsPage.newMessage = text;
    this._callSubscriber(this._state);
  },
  dispatch(action) {
    if (action.type === ADD_MESSAGE) {
      let message = {
        id: this._state.dialogsPage.messages.length + 1,
        text: this._state.dialogsPage.newMessage
      }
    
      this._state.dialogsPage.messages.push(message);
      this._state.dialogsPage.newMessage = '';
      this._callSubscriber(this._state);

    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessage = action.text;
      this._callSubscriber(this._state);

    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    }
  } 
}



window.store = store;

export default store;
