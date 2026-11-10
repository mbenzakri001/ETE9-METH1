import { accountCommand } from "./accountCommand.mjs";
import { eventList } from "./eventStore.mjs";

const account = accountCommand.addAccount("Dupont", "Alice");

console.log("Created account:", account);
console.log("Event store:", eventList);
