import { readContacts } from "../utils/readContacts.js";

export const getAllContacts = async () => {
    try {
        const returnContacts = await readContacts();
        console.log('Contacts list');
        return returnContacts;
    } catch (error) {
        console.error('Error return contacts:', error.message);
    }
};

console.log(await getAllContacts());
