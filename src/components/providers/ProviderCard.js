import React from "react";
import { Link } from "react-router-dom";

export const ProviderCard = ({ code, name, country }) => {
  return (
    <div
      className="card ms-3 animate__animated animate__fadeIn"
      style={{ maxWidth: 540 }}
    >
      <div className="row no-gutters">
        <div className="col-md-12">
          <div className="card-body">
            <h5 className="card-title"> {name} </h5>
            <p className="card-text"> {code} </p>

            <p className="card-text">
              <small className="text-muted"> {country} </small>
            </p>
            {code === "test" && <Link to={`/login/${code}`}>Login...</Link>}
          </div>
        </div>
      </div>
    </div>
  );
};
