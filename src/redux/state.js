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
      ]
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
  }
}

window.store = store;

export default store;
