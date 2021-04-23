import { React } from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {
  let dialogsElements = props.dialogsData.map((elem) => (
    <Dialog name={elem.name} adress={elem.id} />
  ));
  let messageElements = props.messageData.map((elem) => (
    <Message message={elem.message} />
  ));
  
  return (
    <section className={s.dialogs}>
      <section className={s.dialogsItems}>{dialogsElements}</section>
      <section className={s.messages}>{messageElements}</section>
    </section>
  );
};

export default Dialogs;
