import { ACCOUNT_LIST } from "./database.mjs";
import { accountSummaryList } from "./queryDatabase.mjs";

export function insertAccount(account) {
  ACCOUNT_LIST.push(account);
  accountSummaryList.push({
    id: account.id,
    lastName: account.lastName,
    firstName: account.firstName,
  });
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

  const accountSummary = accountSummaryList.find((item) => item.id === id);
  if (accountSummary) {
    accountSummary.lastName = lastName;
    accountSummary.firstName = firstName;
  } else {
    accountSummaryList.push({ id, lastName, firstName });
  }

  console.log(ACCOUNT_LIST);
  return account;
}
