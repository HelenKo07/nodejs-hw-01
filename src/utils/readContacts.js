import { PATH_DB } from "../contacts/contacts.js";
import * as fs from 'node:fs/promises';


export const readContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
        return JSON.parse(data);

    } catch (error) {
       console.error('Error read file:', error.message);
       throw error;
    }
};


