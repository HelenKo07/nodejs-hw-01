import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
    try {
        const contacts = await readContacts();
        const count = contacts.length;
        console.log('Sum contacts:');
        return count;
    } catch (error) {
        console.error('Error count contacts:', error.message);
    }
};

console.log(await countContacts());
