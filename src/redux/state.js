let state = {
  dialogsPage: {
    dialogs: [
      { id: 1, name: 'Andrei' },
      { id: 2, name: 'Yurii' },
      { id: 3, name: 'Vadim' },
      { id: 4, name: 'Marina' },
      { id: 5, name: 'Denis' },
      { id: 6, name: 'Grigory' },
    ],
    messages: [
      { id: 1, message: 'Hello' },
      { id: 2, message: 'How are you?' },
      { id: 3, message: 'I am fine!' },
      { id: 4, message: 'I am glad to see you' },
      { id: 5, message: 'Are you ready?' },
      { id: 6, message: 'Go!!' },
    ],
  },
  profilePage: {
    posts: [
      { id: 1, message: 'Hi, how are you?', likeNumber: '15' },
      { id: 1, message: 'Hello, I am fine!', likeNumber: '25' },
      { id: 1, message: 'Hello, I am good!', likeNumber: '35' },
    ],
  },
};

export default state;
