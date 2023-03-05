import React from 'react';
import PropTypes from 'prop-types';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-hot-toast';

import { TiUserDelete } from 'react-icons/ti';
import { KEY } from 'utils/keys';
import { deleteContact } from 'service/contacts.service';
import styles from './ContactList.module.css';

export const ContactList = ({ contacts }) => {
  const queryClient = useQueryClient();
  const mutation = useMutation(KEY.DELETE_CONTACT, deleteContact, {
    onSuccess: () => {
      queryClient.invalidateQueries(KEY.GET_CONTACTS);
    },
  });

  const handleDeleteContact = async id => {
    try {
      await mutation.mutateAsync(id);
      toast.success('Contact deleted successfully!');
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  return (
    <ul className={styles.contactList}>
      {contacts.map(({ id, name, number, email }) => (
        <li key={id} className={styles.contactItem}>
          <h3 className={styles.contactName}>{name}</h3>

          <a className={styles.contactLink} href={`tel:${number}`}>
            {number}
          </a>
          <a className={styles.contactLink} href={`mailto:${email}`}>
            {email}
          </a>

          <button
            type="button"
            className={styles.deleteButton}
            onClick={() => handleDeleteContact(id)}
          >
            <TiUserDelete className={styles.iconBtn} />
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })
  ).isRequired,
};
