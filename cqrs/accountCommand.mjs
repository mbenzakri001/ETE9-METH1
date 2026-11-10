import { Account } from "./account.mjs";
import { insertAccount, updateAccount } from "./accountCommandDAO.mjs";

export const accountCommand = {
  addAccount(lastName, firstName) {
    const account = new Account(undefined, lastName, firstName);
    return insertAccount(account);
  },

  saveAccount(id, lastName, firstName) {
    return updateAccount(id, lastName, firstName);
  },
};
