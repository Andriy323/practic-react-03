import React from 'react';
import styles from './Form.module.css';

export const Form = () => {
  const handleFormSubmit = e => {
    e.preventDefault();
  };
  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <div className={styles.labelWrapper}>
        <label className={styles.label}>
          <span className={styles.labelText}> Name</span>
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Enter name"
          />
        </label>
      </div>

      <div className={styles.labelWrapper}>
        <label className={styles.label}>
          <span className={styles.labelText}> Email</span>
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Enter email"
          />
        </label>
      </div>

      <div className={styles.labelWrapper}>
        <label className={styles.label}>
          <span className={styles.labelText}> Number</span>
          <input
            className={styles.input}
            type="tel"
            name="tel"
            placeholder="Enter tel"
          />
        </label>
      </div>

      <div className={styles.labelWrapper}>
        <button className={styles.button} type="submit">
          Add contact
        </button>
      </div>
    </form>
  );
};
