import { PATH_DB } from "../contacts/contacts.js";
import * as fs from 'node:fs/promises';

export const writeContacts = async (updateContacts) => {
try {
const json = JSON.stringify(updateContacts, undefined, 2);
await fs.writeFile(PATH_DB, json, {encoding: 'utf-8'});

} catch (error) {
console.error('Error write to file:', error.message);
}
};
