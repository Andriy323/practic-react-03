import React from 'react';
import { useForm } from 'react-hook-form';

import styles from './Form.module.css';

export const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = value => {
    console.log(value);

    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(handleFormSubmit)}>
      <div className={styles.labelWrapper}>
        <label className={styles.label}>
          <span className={styles.labelText}> Name</span>
          <input
            className={styles.input}
            {...register('name', {
              required: {
                value: true,
                message: 'Name is required',
              },
              minLength: 3,
            })}
            type="text"
            placeholder="Enter name"
          />

          {errors.name && (
            <span className={styles.error}>{errors.name.message}</span>
          )}
        </label>
      </div>

      <div className={styles.labelWrapper}>
        <label className={styles.label}>
          <span className={styles.labelText}> Email</span>
          <input
            className={styles.input}
            {...register('email', {
              required: {
                value: true,
                message: 'Email is required',
              },
            })}
            type="email"
            placeholder="Enter email"
          />
          {errors.email && (
            <span className={styles.error}>{errors.email.message}</span>
          )}
        </label>
      </div>

      <div className={styles.labelWrapper}>
        <label className={styles.label}>
          <span className={styles.labelText}> Number</span>
          <input
            className={styles.input}
            {...register('number', {
              required: {
                value: true,
                message: 'Number is required',
              },
            })}
            type="tel"
            placeholder="Enter tel"
          />
          {errors.number && (
            <span className={styles.error}>{errors.number.message}</span>
          )}
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
