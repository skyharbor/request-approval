import React from 'react';
import styles from './Message.module.css';
import padlock from 'assets/icons/padlock.svg';

const Message: React.FC = () => (
  <p className={styles.message}>
    <img src={padlock} alt="padlock" />
    <span className={styles.messageType}>Security Message</span>
    <span className={styles.messageText}>
      Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta
      gravida at eget metus.
    </span>
  </p>
);

export default Message;
