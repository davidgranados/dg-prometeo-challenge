const apiHost = process.env.REACT_APP_API_HOST;

export const getProviders = () => {
  return fetch(`${apiHost}/api/v1/providers/`);
};
