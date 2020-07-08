import React from "react";

const Pincard = ({ title, postoffice, state, delivery }) => {
  return (
    <div className="col-md-4 col-10 mx-auto">
      <div className="card text-white bg-dark mb-3">
        <div className="card-body  text-center">
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
