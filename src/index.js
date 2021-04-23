import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

let dialogsData = [
  { id: 1, name: 'Andrei' },
  { id: 2, name: 'Yurii' },
  { id: 3, name: 'Vadim' },
  { id: 4, name: 'Marina' },
  { id: 5, name: 'Denis' },
  { id: 6, name: 'Grigory' },
];

let messageData = [
  { id: 1, message: 'Hello' },
  { id: 2, message: 'How are you?' },
  { id: 3, message: 'I am fine!' },
  { id: 4, message: 'I am glad to see you' },
  { id: 5, message: 'Are you ready?' },
  { id: 6, message: 'Go!!' },
];

let postData = [
  { id: 1, message: 'Hi, how are you?', likeNumber: '15' },
  { id: 1, message: 'Hello, I am fine!', likeNumber: '25' },
  { id: 1, message: 'Hello, I am good!', likeNumber: '35' },
];

ReactDOM.render(<App dialogsData={dialogsData} messageData ={messageData} postData={postData} />, document.getElementById('root'));

