import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ key, imgsrc, title, info, totalPrice, price }) => {
  return (
    <div className="w-full md:w-1/3 px-4 mb-6" key={key}>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {imgsrc.map((img, idx) => (
          <img
            key={idx}
            src={img.url}
            className="w-full h-48 object-cover"
            alt={img}
          />
        ))}
        <div className="p-4 text-center">
          <h5 className="text-lg font-semibold text-gray-800 capitalize">
            {title}
          </h5>
          <NavLink
            to="/contact"
            className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            {price}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Card;
