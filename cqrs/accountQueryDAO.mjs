import { ACCOUNT_LIST } from "./database.mjs";

export function retrieveAccountList() {
  return ACCOUNT_LIST.map(({ id, lastName, firstName }) => ({
    id,
    lastName,
    firstName,
  }));
}

export function retrieveAccount(id) {
  const account = ACCOUNT_LIST.find((item) => item.id === id);
  if (!account) {
    return undefined;
  }

  const { id: accountId, lastName, firstName, creationDate } = account;
  return {
    id: accountId,
    name: `${lastName} ${firstName}`,
    creationDate,
  };
}
