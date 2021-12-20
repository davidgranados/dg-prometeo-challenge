import React from "react";
import { AccountCard } from "./AccountCard";

const AccountList = ({ list }) => {
  return (
    <div className={"row row-cols-1 row-cols-md-2 g-4"}>
      {list.map((account) => (
        <AccountCard key={account.id} {...account} />
      ))}
    </div>
  );
};

export default AccountList;
