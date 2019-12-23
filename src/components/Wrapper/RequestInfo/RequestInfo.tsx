import React, { Fragment } from 'react';
import styles from './RequestInfo.module.css';
import { Data } from '../types';
import fileIcon from 'assets/icons/excel.svg';

interface Props {
  data: Data;
}

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);

// TODO: File name and icon should be added to api and this function removed.
const getFileName = (url: string) =>
  url
    .split('/')
    .pop()
    ?.split('?')[0];

const RequestInfo = ({
  data: {
    requested_by: { profile_picture, first_name },
    cost,
    renewal_frequency_in_months,
    spend_limit,
    expense_account,
    files,
    description,
  },
}: Props) => {
  return (
    <div className={styles.requestInfo}>
      <div className={styles.row}>
        <div className={styles.titleCol}>
          <span className={styles.title}>Requested by</span>
        </div>
        <div className={styles.value}>
          <img src={profile_picture} alt="Requested by" className={styles.profilePicture} />
          <span>{first_name}</span>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.titleCol}>
          <span className={styles.title}>Cost</span>
        </div>
        <span>{formatCurrency(cost)}</span>
      </div>

      <div className={styles.rowMultipleCols}>
        <div className={styles.titleCol}>
          <span className={styles.title}>Renewal Frequency</span>
        </div>
        <div className={styles.value}>
          <span>
            {renewal_frequency_in_months} {renewal_frequency_in_months === 1 ? 'month' : 'months'}
          </span>
        </div>
        <div className={styles.titleCol}>
          <span className={styles.title}>Annual Cost</span>
        </div>
        <div className={styles.value}>
          <span>{formatCurrency(cost)}</span>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.titleCol}>
          <span className={styles.title}>Expense Account</span>
        </div>
        <span>{expense_account}</span>
      </div>

      <div className={styles.row}>
        <div className={styles.titleCol}>
          <span className={styles.title}>File</span>
        </div>
        <div className={styles.value}>
          {files.map((file, i) => (
            <Fragment key={i}>
              <img src={fileIcon} alt="File icon" className={styles.fileIcon} />
              <span>{getFileName(file)}</span>
            </Fragment>
          ))}
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.titleCol}>
          <span className={styles.title}>Description</span>
        </div>
        <div className={styles.value}>
          <span>{description}</span>
        </div>
      </div>
    </div>
  );
};

export default RequestInfo;
