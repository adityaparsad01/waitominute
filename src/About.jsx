import React from "react";
import Aboutimg from "./Img/about.svg";
import Common from "./Component/Common";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us || WaitOminute</title>
        <meta name="title" content="it all About Information" />
      </Helmet>
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
