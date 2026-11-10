import { Account } from "./account.mjs";
import { insertAccount, updateAccount } from "./accountCommandDAO.mjs";
import { accountCache } from "./cache.mjs";

export const accountCommand = {
  addAccount(lastName, firstName) {
    const account = new Account(undefined, lastName, firstName);
    insertAccount(account);
    accountCache[account.id] = {
      name: `${account.lastName} ${account.firstName}`,
    };
    return account;
  },

  saveAccount(id, lastName, firstName) {
    const account = updateAccount(id, lastName, firstName);
    accountCache[id] = {
      name: `${account.lastName} ${account.firstName}`,
    };
    return account;
  },
};
