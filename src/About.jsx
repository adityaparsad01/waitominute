import React from "react";
import Aboutimg from "./Img/about.svg";
import Common from "./Component/Common";

const About = () => {
  return (
    <>
      <Common
        h1="Welcome to about page"
        imgsrc={Aboutimg}
        visit="/service"
        btn="CheckOut"
      />
    </>
  );
};
export default About;
