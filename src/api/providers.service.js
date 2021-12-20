// const apiHost = process.env.API_HOST;
const apiHost = "http://localhost:8009";

export const getProviders = () => {
  return fetch(`${apiHost}/api/v1/providers/`);
};
