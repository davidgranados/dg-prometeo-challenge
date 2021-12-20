const apiHost = process.env.API_HOST;

export const getAccounts = (key) => {
  return fetch(`${apiHost}/api/v1/accounts/`, { headers: { "x-key": key } });
};
