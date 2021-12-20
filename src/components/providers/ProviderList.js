import React from "react";
import { ProviderCard } from "./ProviderCard";

const ProviderList = ({ list }) => {
  return (
    <div className={"row row-cols-1 row-cols-md-2 g-4"}>
      {list.map((provider) => (
        <ProviderCard key={provider.code} {...provider} />
      ))}
    </div>
  );
};

export default ProviderList;
