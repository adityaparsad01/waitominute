import React from "react";
import web from "../src/Img/career.svg";
import Common from "./Component/Common";

const Home = () => {
  return (
    <>
      <Common
        h1="Grow your business with"
        imgsrc={web}
        visit="/about"
        btn="Get Started"
      />
    </>
  );
};
export default Home;
