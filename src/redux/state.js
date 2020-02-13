let state = {
  profilePage: {
    posts: [
      { text: "I love to try!"},
      { text: "Where is my banana!"},
      { text: "My mother tell me 'What is the shit!'"}
    ]
  },
  dialogsPage: {
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

export let addMessage = (message) => {
  let newMessage = {
    id: state.dialogsPage.messages.length + 1,
    text: message
  }

  state.dialogsPage.messages.push(newMessage);
}

export default state;
