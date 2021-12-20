import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Navbar } from "../ui/Navbar";
import AccountsPage from "../../pages/AccountsPage";

const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <section className={"container mt-2"}>
        <Switch>
          <Route exact path="/accounts" component={AccountsPage} />
          <Redirect to="/providers" />
        </Switch>
      </section>
    </>
  );
};

export default DashboardRoutes;
