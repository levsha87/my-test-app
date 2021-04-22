import { React } from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {
  return (
    <section className={s.dialogs}>
      <section className={s.dialogsItems}>
        <Dialog name='Andrei' adress='1' />
        <Dialog name='Yurii' adress='2' />
        <Dialog name='Vadim' adress='3' />
        <Dialog name='Marina' adress='4' />
        <Dialog name='Denis' adress='5' />
        <Dialog name='Grigory' adress='6' />
      </section>
      <section className={s.messages}>
        <Message message='Hello' />
        <Message message='How are you?' />
        <Message message='I am fine!' />
      </section>
    </section>
  );
};

export default Dialogs;
