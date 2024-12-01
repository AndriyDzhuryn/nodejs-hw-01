import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const contactsList = await readContacts();
  const newContactsList = Array(number).fill(0).map(createFakeContact);
  const allContactsList = [...contactsList, ...newContactsList];
  await writeContacts(allContactsList);
};

generateContacts(5);
