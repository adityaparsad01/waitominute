import React from "react";
import Card from "./Component/Card";
import Sdata from "./Component/Sdata";

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our</h1>
      </div>
      {Sdata.map((val, i) => {
        return <Card key={i} imgsrc={val.imgsrc} title={val.title} />;
      })}
    </>
  );
};
export default Service;
