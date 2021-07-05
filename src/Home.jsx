import React from "react";
import web from "../src/Img/career.svg";
import Common from "./Component/Common";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home || WaitOminute</title>
        <meta name="title" content="it all About Information" />
      </Helmet>
      <Common
        h1="Make Love One Happy With"
        imgsrc={web}
        visit="/products"
        btn="Get Started"
      />
    </>
  );
};
export default Home;
