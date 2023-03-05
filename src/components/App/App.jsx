import { useQuery } from 'react-query';
import { Toaster } from 'react-hot-toast';

import { getContacts } from 'service/contacts.service';
import { KEY } from 'utils/keys';

import { Form } from 'components/Form';
import styles from './App.module.css';
import { ContactList } from 'components/ContactList';

export const App = () => {
  const {
    isLoading,
    isError,
    data: contacts,
    error,
  } = useQuery(KEY.GET_CONTACTS, getContacts);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <section className={styles.section}>
        <div className={styles.form}>
          <h2>Form</h2>
          <Form />
        </div>

        <div className={styles.contacts}>
          <h2>Contacts</h2>

          <ContactList contacts={contacts} />
        </div>
      </section>

      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};
