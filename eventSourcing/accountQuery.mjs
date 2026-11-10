import {
  retrieveAccount,
  retrieveAccountList,
} from "./accountQueryDAO.mjs";

export const accountQuery = {
  getAccountList() {
    return retrieveAccountList();
  },

  getAccount(id) {
    return retrieveAccount(id);
  },
};
