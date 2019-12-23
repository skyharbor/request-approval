import React from 'react';
import styles from './ServiceHeader.module.css';
import { Service } from '../types';

interface Props {
  service: Service;
}

const ServiceHeader = ({ service: { name, usage_count, logo } }: Props) => {
  return (
    <div className={styles.serviceHeader}>
      <img src={logo} alt="Service logo" className={styles.logo} />
      <p className={styles.text}>
        Request for {name} (#{usage_count})
      </p>
    </div>
  );
};

export default ServiceHeader;
