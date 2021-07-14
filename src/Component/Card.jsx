import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({key,imgsrc,title,info,totalPrice,price}) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto" key={key}>
        <div className="card text-center">
          {imgsrc.map((img,idx)=>
            (
            <img
            key={idx}
            src={img.url}
            className="card-img-top my-2"
            alt={img}
          />
          ))}
          <div className="card-body">
            <h5 className="card-title font-weight-bold text-capitalize">
              {title}
            </h5>
            <div>
            </div>
            <NavLink to="/contact" className="btn btn-primary">
              {price}
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
