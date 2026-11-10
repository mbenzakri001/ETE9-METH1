import { accountCommand } from "./accountCommand.mjs";
import { accountQuery } from "./accountQuery.mjs";
import { ACCOUNT_LIST } from "./database.mjs";
import { accountSummaryList } from "./queryDatabase.mjs";

const account = accountCommand.addAccount("Dupont", "Alice");
console.log("After adding an account:");
console.log("Write database:", ACCOUNT_LIST);
console.log("Query database:", accountSummaryList);
console.log("Account list:", accountQuery.getAccountList());

accountCommand.saveAccount(account.id, "Martin", "Alice");
console.log("After updating the account:");
console.log("Write database:", ACCOUNT_LIST);
console.log("Query database:", accountSummaryList);
console.log("Account list:", accountQuery.getAccountList());
console.log("Retrieved account:", accountQuery.getAccount(account.id));