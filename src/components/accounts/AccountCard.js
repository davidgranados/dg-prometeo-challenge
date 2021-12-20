import React from "react";

export const AccountCard = ({ id, name, number, currency, balance }) => {
  return (
    <div
      className="card ms-3 animate__animated animate__fadeIn"
      style={{ maxWidth: 540 }}
    >
      <div className="row no-gutters">
        <div className="col-md-12">
          <div className="card-body">
            <h5 className="card-title"> {name} </h5>
            <p className="card-text"> id: {id} </p>
            <p className="card-text"> number: {number} </p>
            <p className="card-text"> currency: {currency} </p>
            <p className="card-text"> balance: {balance} </p>
          </div>
        </div>
      </div>
    </div>
  );
};
