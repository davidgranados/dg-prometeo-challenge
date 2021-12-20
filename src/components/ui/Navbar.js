import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types";

export const Navbar = () => {
  const {
    authState: { username, logged },
    authDispatch,
  } = useContext(AuthContext);
  const history = useHistory();
  const handleLogout = () => {
    authDispatch({ type: types.logout });
    history.replace("/providers");
  };
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Banking App
      </Link>
      <div className="container-fluid"></div>
      <div className="navbar-collapse collapse">
        <ul className="navbar-nav ml-auto">
          {logged && username && (
            <span className={"nav-item nav-link text-info"}>{username}</span>
          )}
          <button className="nav-item nav-link btn" onClick={handleLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
