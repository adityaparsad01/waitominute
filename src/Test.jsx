import React from "react";

const f = 5;
const y = 6;

const fData = () => {
  return (
    <>
      <h1>i AM {f}</h1>
    </>
  );
};
const yData = () => {
  return (
    <>
      <h1>i AM {y}</h1>
    </>
  );
};

const Test = () => {
  if (fData > yData) {
    return <yData />;
  } else {
    return <fData />;
  }
};

export default Test;
