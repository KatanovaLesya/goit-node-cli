import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { nanoid } from 'nanoid';

const contactsPath = path.resolve("src", "db", "contacts.json");

const updateContact = contacts => fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

console.log(contactsPath);

export const getContacts = async () => {
    const data = await fs.readFile(contactsPath, 'utf-8');
    return JSON.parse(data);
}

export const getContactById = async (id) => {
    const contact = await getContacts();
    const result = contact.find(item => item.id === id);
    return result || null;
    
}

export const addContact = async data => {
    const contacts = await getContacts();
    const newContact = {
        id: nanoid(),
        ...data,
    };
    contacts.push(newContact);
    await updateContact(contacts);
    return newContact;
}

export const updateContactById = async (id, data) => {
    const contacts = await getContacts();
    const index = contacts.findIndex(item => item.id === id);
    if (index === -1) return null;
    contacts[index] = {...contacts[index],...data,};
    await updateContact(contacts);
    return contacts[index];
}

export const deleteContactById = async id => {
    const contacts = await getContacts();
    const index = contacts.findIndex(item => item.id === id);
    if (index === -1) return null;
    const [deletedContact] = contacts.splice(index, 1);
    await updateContact(contacts);
    return deletedContact;

}
