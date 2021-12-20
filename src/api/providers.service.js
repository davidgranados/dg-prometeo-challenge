const apiHost = process.env.API_HOST;

export const getProviders = () => {
  return fetch(`${apiHost}/api/v1/providers/`);
};
