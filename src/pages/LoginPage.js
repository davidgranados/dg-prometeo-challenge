import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { login } from "../api/login.service";
import { AuthContext } from "../auth/AuthContext";
import { useForm } from "../hooks/useForm";
import { types } from "../types";

const LoginPage = () => {
  const history = useHistory()
  const { code } = useParams();
  const [formValues, handleInputChange] = useForm({
    username: "",
    password: "",
  });
  const { authDispatch } = useContext(AuthContext);

  const { username, password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ provider: code, username, password })
      .then((res) => res.json())
      .then(({ status, key }) => {
        if (status === "logged_in") {
          authDispatch({
            type: types.login,
            payload: {
              username,
              key,
            },
          });
          history.push("/accounts")
        }
      });
  };
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <form onSubmit={handleSubmit}>
        <input
          className={"form-control"}
          type="text"
          placeholder={"username"}
          autoComplete={"off"}
          name={"username"}
          value={username}
          onChange={handleInputChange}
        />
        <input
          className={"form-control"}
          placeholder={"password"}
          type="password"
          name={"password"}
          value={password}
          onChange={handleInputChange}
        />
        <button type={"submit"} className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};
export default LoginPage;
