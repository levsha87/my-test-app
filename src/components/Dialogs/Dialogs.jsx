import { React } from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

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

let dialogsElements = dialogsData.map((elem) => <Dialog name={elem.name} adress={elem.id} />);
let messageElements = messageData.map((elem) => <Message message={elem.message} />);

const Dialogs = (props) => {
  return (
    <section className={s.dialogs}>
      <section className={s.dialogsItems}>
        {dialogsElements}
      </section>
      <section className={s.messages}>
        {messageElements}
      </section>
    </section>
  );
};

export default Dialogs;
