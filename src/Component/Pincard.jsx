import React from "react";

const Pincard = ({ title, postoffice, state, delivery }) => {
  return (
    <div className="card mt-4">
      <div className="card-body">
        <h5>{state}</h5>
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{postoffice}</h6>
        <p className="card-text">
          This Place has <strong>{delivery}</strong> Status{" "}
        </p>
      </div>
    </div>
  );
};

export default Pincard;
