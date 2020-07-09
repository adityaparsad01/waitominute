import React from "react";
import Card from "./Component/Card";
import Sdata from "./Component/Sdata";
import { Helmet } from "react-helmet";

const Service = () => {
  return (
    <>
      <Helmet>
        <title>Services || WaitOminute</title>
        <meta
          name="title"
          content="Services Which is provided Bt WaitOminute"
        />
      </Helmet>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Sdata.map((val, i) => {
                return (
                  <Card
                    key={i}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    info={val.info}
                    btnText={val.btnText}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Service;
