import React from "react";
import { Map } from "react-feather";
import { NavLink } from "react-router-dom";

const Pincard = ({ title, postoffice, state, delivery, id }) => {
  return (
    <div className="col-md-4 col-sm-12 col-10 mx-auto">
      <div key={id} className="card text-white bg-dark mb-3">
        <div className="card-body  text-center">
          <NavLink to="/">
            <Map />
          </NavLink>
          <h5>{state}</h5>
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2">{postoffice}</h6>
          <p className="card-text">
            This Place has <strong>{delivery}</strong> Status{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pincard;
