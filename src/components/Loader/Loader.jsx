import React from 'react';
import styles from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
    </div>
  );
};
