import React from 'react';
import styles from './Controls.module.css';

const Controls: React.FC = () => (
  <div className={styles.controls}>
    <button className={styles.approve}>Approve</button>
    <button className={styles.deny}>Deny</button>
  </div>
);

export default Controls;
