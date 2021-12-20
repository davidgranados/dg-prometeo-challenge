// const apiHost = process.env.API_HOST;
const apiHost = "http://localhost:8009";

export const login = (data) => {
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value);
  });
  return fetch(`${apiHost}/api/v1/login/`, { method: "POST", body: formData });
};
