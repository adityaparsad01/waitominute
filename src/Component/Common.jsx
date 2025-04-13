import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <section className="flex items-center h-screen bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold text-gray-800">
              {props.h1}
              <span className="text-blue-500"> waitominute</span>
            </h1>
            <h2 className="mt-4 text-lg text-gray-600">
              We are Selling Artificial Products in India
            </h2>
            <div className="mt-6">
              <NavLink
                to={props.visit}
                className="inline-block bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600"
              >
                {props.btn}
              </NavLink>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={props.imgsrc}
              className="w-full h-auto object-cover"
              alt="Home page"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Common;
