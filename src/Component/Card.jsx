import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card text-center">
          <img src={props.imgsrc} className="card-img-top my-2" alt="..." />
          <div className="card-body">
            <h5 className="card-title font-weight-bold text-capitalize">
              {props.title}
            </h5>
            <p className="card-text">{props.info}</p>
            <NavLink to="/" className="btn btn-primary">
              {props.btnText}
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
