import { accountCommand } from "./accountCommand.mjs";
import { accountQuery } from "./accountQuery.mjs";

const account = accountCommand.addAccount("Dupont", "Alice");
console.log("Account list:", accountQuery.getAccountList());

accountCommand.saveAccount(account.id, "Martin", "Alice");
console.log("Updated account:", accountQuery.getAccount(account.id));