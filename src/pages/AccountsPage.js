import React, { useEffect, useState, useContext } from "react";
import { getAccounts } from "../api/accounts.service";
import { AuthContext } from "../auth/AuthContext";
import AccountList from "../components/accounts/AccountList";

const AccountsPage = () => {
  const {
    authState: { key },
  } = useContext(AuthContext);
  const [accounts, setAccounts] = useState([]);
  useEffect(() => {
    if (key) {
      getAccounts(key)
        .then((res) => res.json())
        .then(({ status, accounts }) => {
          if (status === "success") {
            setAccounts(accounts);
          }
        });
    }
  }, [key]);
  return (
    <div>
      <h1>Accounts</h1>
      <AccountList list={accounts} />
    </div>
  );
};

export default AccountsPage;
