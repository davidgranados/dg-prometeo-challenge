import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import DashboardRoutes from "./DashboardRoutes";
import { PrivateRoute } from "../../routers/PrivateRoute";
import { PublicRoute } from "../../routers/PublicRoute";
import ProvidersPage from "../../pages/ProvidersPage";
import LoginPage from "../../pages/LoginPage";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute exact path="/providers" component={ProvidersPage} />
          <PublicRoute exact path="/login/:code" component={LoginPage} />
          <PrivateRoute path="/" component={DashboardRoutes} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
