import axios from 'axios';

axios.defaults.baseURL = 'https://6251bfb67f7fa1b1ddde85d8.mockapi.io/api';
const endpoint = '/contacts';

// GET /contacts
export const getContacts = async () => {
  const { data } = await axios.get(endpoint);

  return data;
};

// POST /contacts
export const addContact = async contact => {
  const { data } = await axios.post(endpoint, contact);

  return data;
};
