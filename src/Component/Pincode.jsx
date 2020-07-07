import React, { useState, useEffect } from "react";
import Pincard from "./Pincard";

const Pincode = () => {
  const [pin, setPin] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("110001");

  console.log(pin.pincode);

  useEffect(() => {
    getPIN();
  }, [query]);

  const getPIN = async () => {
    const response = await fetch(
      `https://pincode-api.sarat.dev/api/pincode/${query}`
    );
    const data = await response.json();
    setPin(data.data);
    console.log(data);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <form onSubmit={getSearch} className="my-2 my-lg-0 ">
            <input
              className="form-control mr-sm-2 mt-5"
              type="text"
              value={search}
              onChange={updateSearch}
              placeholder="Enter PinCode For More Details..."
            />
            <button
              className="btn btn-outline-success my-2 my-sm-"
              type="submit"
            >
              submit
            </button>
          </form>
        </div>
        <div>
          {pin.map((pin, i) => {
            return (
              <>
                <div className="items-center">
                  <Pincard
                    key={pin.office_name}
                    title={pin.pincode}
                    postoffice={pin.office_name}
                    state={pin.state_name}
                    delivery={pin.delivery_status}
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Pincode;
