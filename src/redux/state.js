import { rerenderEntireTree } from './../render';

let state = {
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
}

window.state = state;

export let addMessage = () => {
  let newMessage = {
    id: state.dialogsPage.messages.length + 1,
    text: state.dialogsPage.newMessage
  }

  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessage = '';
  rerenderEntireTree(state);
}

export let updateNewMessage = (text) => {
  state.dialogsPage.newMessage = text;
  rerenderEntireTree(state);
}

export default state;
