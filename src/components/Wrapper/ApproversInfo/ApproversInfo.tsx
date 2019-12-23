import React from 'react';
import styles from './ApproversInfo.module.css';
import checkmark from 'assets/icons/checkmark.svg';
import uncheck from 'assets/icons/uncheck.svg';
import { Approver } from 'components/Wrapper/types';

interface Props {
  approvers: Approver[];
}

const formatDate = (date: string) => {
  const dateTime = new Date(date);
  const options = { year: 'numeric', month: 'short', day: 'numeric' };

  return new Intl.DateTimeFormat('en-US', options).format(dateTime);
};

const ApproversInfo = ({ approvers }: Props) => {
  const approversByStatus = approvers.reduce(
    (o: any, entry: Approver) => ({
      ...o,
      [entry.status]: o[entry.status] ? [...o[entry.status], entry] : [entry],
    }),
    {}
  );

  return (
    <div className={styles.approversInfo}>
      {Object.keys(approversByStatus).map(status => (
        <div className={styles.statusBlock} key={status}>
          <span className={styles.status}>{status}</span>

          {approversByStatus[status].map((entry: Approver, i: string) => {
            const { profile_picture, first_name, last_name, email } = entry.approver;

            return (
              <div className={styles.entry} key={`entry-${i}`}>
                <span className={styles.index}>{i + 1}</span>
                <img src={profile_picture} alt="Avatar" className={styles.avatar} />
                <div>
                  <div className={styles.nameBlock}>
                    <span className={styles.name}>
                      {first_name} {last_name}
                    </span>
                    <span className={styles.email}>({email})</span>
                  </div>
                  <span className={styles.date}>
                    {status === 'accepted'
                      ? `Approved ${formatDate(entry.created_date)}`
                      : `Last notified ${formatDate(entry.last_notified_time)}`}
                  </span>
                </div>
                <img
                  className={styles.checkmark}
                  src={status === 'accepted' ? checkmark : uncheck}
                  alt="checkmark"
                />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default ApproversInfo;
