import { accountCache } from "./cache.mjs";
import { accountSummaryList } from "./queryDatabase.mjs";

export function retrieveAccountList() {
  return accountSummaryList.map(({ id, lastName, firstName }) => ({
    id,
    lastName,
    firstName,
  }));
}

export function retrieveAccount(id) {
  return accountCache[id];
}
