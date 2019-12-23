import React from 'react';
import styles from './Note.module.css';
import { Service } from '../types';

interface Props {
  service: Service;
}

const Note = ({ service: { name } }: Props) => (
  <div className={styles.note}>
    <p className={styles.description}>
      Your company is already paying for {name} on a recurring basis.
    </p>
    <p className={styles.owner}>(1 instance owned by John Smith)</p>
  </div>
);

export default Note;
