// const apiHost = process.env.API_HOST;
const apiHost = "http://localhost:8009";

export const getAccounts = (key) => {
  return fetch(`${apiHost}/api/v1/accounts/`, { headers: { "x-key": key } });
};
