import React, { useEffect, useState } from "react";
import { getProviders } from "../api/providers.service";
import ProviderList from "../components/providers/ProviderList";

const ProvidersPage = () => {
  const [providers, setProviders] = useState([]);
  useEffect(() => {
    getProviders()
      .then((res) => res.json())
      .then(({ status, providers }) => {
        if (status === "success") {
          setProviders(providers);
        }
      });
  }, []);
  return (
    <div>
      <h1>Providers</h1>
      <ProviderList list={providers} />
    </div>
  );
};

export default ProvidersPage;
