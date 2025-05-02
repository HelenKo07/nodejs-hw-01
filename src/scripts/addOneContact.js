import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => {
    try {
        const contacts = await readContacts();
        const addOneContact = createFakeContact();
        const updateContacts = [...contacts, addOneContact];
        await writeContacts(updateContacts);
        console.log('New contact successfully added.');

    } catch (error) {
        console.error('Error to add new contact:', error.message);
    }
};

addOneContact();
