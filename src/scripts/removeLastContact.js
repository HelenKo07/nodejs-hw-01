import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => {
    try {
        const contact = await readContacts();

        const removedContact = contact[contact.length -1];
        const updateContacts = contact.slice(0, -1);
        
        await writeContacts(updateContacts);

        console.log('Successfully remove last contact');
        console.log(removedContact);
    } catch (error) {
        console.error('Error remove last contact:', error.message);
    }
};

removeLastContact();
