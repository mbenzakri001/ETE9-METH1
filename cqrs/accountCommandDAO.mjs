import { ACCOUNT_LIST } from "./database.mjs";

export function insertAccount(account) {
  ACCOUNT_LIST.push(account);
  console.log(ACCOUNT_LIST);
  return account;
}

export function updateAccount(id, lastName, firstName) {
  const account = ACCOUNT_LIST.find((item) => item.id === id);
  if (!account) {
    throw new Error(`Account with id "${id}" not found`);
  }

  account.lastName = lastName;
  account.firstName = firstName;
  console.log(ACCOUNT_LIST);
  return account;
}
