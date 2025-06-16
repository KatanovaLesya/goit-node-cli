import { program } from "commander";
import { listContacts, getContactById, addContact, removeContact } from "./contacts.js";

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(); //читаємо, робимо з масиву обʼєкт, але нічого не повертаємо

const options = program.opts(); // повертає обʼєкт 
console.log(options);

async function invokeAction({action, id, ...data}) {
  switch (action) {
    case "list":
      const allContacts = await listContacts();
      return console.table(allContacts);

    case "get":
      const oneContact = await getContactById(id);
      return console.log(oneContact);

    case "add":
      const newContact = await addContact(data);
      return console.log(newContact);
    
    //case "updateById":
      //const updatedContact = await updateContactById(id, data);
      //return console.log(updatedContact);
      

    case "remove":
      const deletedContact = await removeContact(id);
      return console.log(deletedContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}
//invokeAction({action: "list"});
//invokeAction({action: "get", id: "AeHIrLTr6JkxGE6SN-0Rw1"});
//invokeAction({action: "add", name: "Igor2", email: "igor@gmail.com", phone: "+380663456789"});
//invokeAction({action: "updateById", id: "YwrYjnKcgVB-p7CsEOpa1", name: "Igor3", email: "igor@gmail.com", phone: "+380663456789"});
//invokeAction({action: "updateById", id: "YwrYjnKcgVB-p7CsEOpa1", name: "Igor4"});
//invokeAction({action: "remove", id: "nNo1az-c8LLYVzaEK5uu4"});
invokeAction(options);