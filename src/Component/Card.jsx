import React from "react";
import web from "../Img/about.svg";
import { NavLink } from "react-router-dom";

const Card = () => {
  return (
    <>
      <div className="container-fluid mb-5 ">
        <div className="row">
          <div className="col-10 mx-auto my-5">
            <div className="row gy-4">
              <div className="col-md-4 col-10 mx-auto">
                <div className="card text-center">
                  <img src={web} className="card-img-top my-2" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <NavLink to="/" className="btn btn-primary">
                      Go somewhere
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
