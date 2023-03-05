import { useState, useEffect } from 'react';
import { getContacts } from 'service/contacts.service';

import styles from './App.module.css';

export const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts().then(data => setContacts(data));
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1>Contacts</h1>

        <ul
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '16px',
          }}
        >
          {contacts.map(({ id, name, number, email }) => (
            <li
              key={id}
              style={{
                display: 'grid',
                gridTemplateRows: '1fr 1fr 1fr',
                gap: '6px',
                border: '1px solid gray',
                padding: '10px',
                borderRadius: '6px',
                boxShadow:
                  '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
                backgroundColor: 'white',
              }}
            >
              <p>{name}</p>
              <p>{number}</p>
              <p>{email}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
