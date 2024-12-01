import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const contactsList = await readContacts();
  const contact = await createFakeContact(1);
  const allContactsList = [...contactsList, contact];
  await writeContacts(allContactsList);
};

addOneContact();
