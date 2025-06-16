import { program } from "commander";
import { getContacts, getContactById, addContact, updateContactById, deleteContactById } from "./contacts.js";

program
  .option("-a, --action <type>")
  .option("-i, --id <type>")
  .option("-n, --name <type>")
  .option("-e, --email <type>")
  .option("-p, --phone <type>");

program.parse(); //читаємо, робимо з масиву обʼєкт, але нічого не повертаємо

const options = program.opts(); // повертає обʼєкт 
console.log(options);

async function invokeAction({action, id, ...data}) {
  switch (action) {
    case "list":
      const allContacts = await getContacts();
      return console.table(allContacts);

    case "getById":
      const oneContact = await getContactById(id);
      return console.log(oneContact);

    case "addContact":
      const newContact = await addContact(data);
      return console.log(newContact);
    
    case "updateById":
      const updatedContact = await updateContactById(id, data);
      return console.log(updatedContact);
      

    case "deleteById":
      const deletedContact = await deleteContactById(id);
      return console.log(deletedContact);

    default:
      //console.warn("\x1B[31m Unknown action type!");
      console.log("немає");
  }
}
//invokeAction({action: "list"});
//invokeAction({action: "getById", id: "AeHIrLTr6JkxGE6SN-0Rw1"});
//invokeAction({action: "addContact", name: "Igor", email: "igor@gmail.com", phone: "+380663456789"});
//invokeAction({action: "updateById", id: "YwrYjnKcgVB-p7CsEOpa1", name: "Igor3", email: "igor@gmail.com", phone: "+380663456789"});
//invokeAction({action: "updateById", id: "YwrYjnKcgVB-p7CsEOpa1", name: "Igor4"});
//invokeAction({action: "deleteById", id: "YwrYjnKcgVB-p7CsEOpa1"});
invokeAction(options);