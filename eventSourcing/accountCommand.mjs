import { Account } from "./account.mjs";
import { updateAccount } from "./accountCommandDAO.mjs";
import { accountCache } from "./cache.mjs";
import { Event } from "./event.mjs";
import { addEvent } from "./eventStore.mjs";

export const accountCommand = {
  addAccount(lastName, firstName) {
    const account = new Account(undefined, lastName, firstName);
    addEvent(new Event("accountAdded", account.id, account));
    accountCache[account.id] = {
      name: `${account.lastName} ${account.firstName}`,
    };
    return account;
  },

  saveAccount(id, lastName, firstName) { 
    // on peut ajouter ici la reconstitution de l'état de l'account à partir des events pour vérifier 
    // si les données sont cohérentes avant de faire la mise à jour
    const account = updateAccount(id, lastName, firstName); 
    accountCache[id] = {
      name: `${account.lastName} ${account.firstName}`,
    };
    return account;
  },
};
