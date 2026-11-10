import { accountCommand } from "./accountCommand.mjs";
import { eventList } from "./eventStore.mjs";

const account = accountCommand.addAccount("Dupont", "Alice");
const account2 = accountCommand.addAccount("Durand", "Bob");

console.log("Created account:", account);
console.log("Created account:", account2);
console.log("Event store:", eventList);
