import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import { AuthContext } from "../auth/AuthContext";

export const PrivateRoute = ({
  component: Component,
  ...rest
}) => {
  const {
    authState: { logged },
  } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      component={(props) =>
        logged ? <Component {...props} /> : <Redirect to="/providers" />
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};
