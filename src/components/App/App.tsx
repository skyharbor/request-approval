import React from 'react';
import styles from './App.module.css';
import logo from 'assets/icons/logo.svg';
import Message from 'components/Message/Message';
import Wrapper from 'components/Wrapper/Wrapper';
import data from 'assets/sampleData.json';

const App: React.FC = () => (
  <div className={styles.app}>
    <div className={styles.header}>
      <img src={logo} alt="logo" className={styles.logo} />
      <Message />
    </div>
    <Wrapper data={data} />
  </div>
);

export default App;
