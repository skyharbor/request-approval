import React from 'react';
import styles from './Wrapper.module.css';
import ServiceHeader from './ServiceHeader/ServiceHeader';
import { Data } from './types';
import RequestInfo from './RequestInfo/RequestInfo';
import Note from './Note/Note';
import Controls from './Controls/Controls';
import ApproversInfo from './ApproversInfo/ApproversInfo';

interface Props {
  data: Data;
}

const Wrapper = ({ data: { service, approvers }, data }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <ServiceHeader service={service} />
      </div>
      <div className={styles.requestArea}>
        <RequestInfo data={data} />
        <Note service={service} />
      </div>
      <div className={styles.approversArea}>
        <ApproversInfo approvers={approvers} />
      </div>
      <div className={styles.controlsArea}>
        <Controls />
      </div>
    </div>
  );
};

export default Wrapper;
