const apiHost = process.env.REACT_APP_API_HOST;

export const login = (data) => {
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value);
  });
  return fetch(`${apiHost}/api/v1/login/`, { method: "POST", body: formData });
};
