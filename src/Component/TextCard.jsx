import React from "react";

function TextCard({ key, imgsrc, title, info, totalPrice, price }) {
  return (
    <div className="w-full md:w-1/3 px-4 mb-6" key={key}>
      <div className="relative bg-white shadow-md rounded-lg overflow-hidden">
        <div className="relative">
          <a href="/" className="block">
            <div className="w-full h-48 overflow-hidden">
              {imgsrc.map((img, idx) => (
                <img
                  key={idx}
                  src={img.url}
                  alt={img}
                  className="w-full h-full object-cover"
                />
              ))}
            </div>
          </a>
          <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
            <a href="/" className="text-white text-lg font-semibold">
              {title}
            </a>
          </div>
        </div>
        <div className="p-4">
          <h5 className="text-lg font-semibold text-gray-800 capitalize">
            {title}
          </h5>
          <div className="text-gray-600">{info}</div>
          <div className="mt-2">
            <span className="text-blue-500 font-bold">
              ₹{price}
            </span>
            <span className="line-through text-gray-400 ml-2">
              ₹{totalPrice}
            </span>
          </div>
          <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default TextCard;
