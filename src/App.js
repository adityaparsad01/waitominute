import React, { lazy, Suspense } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// import Home from "./Home";
// import Contact from "./Contact";
// import About from "./About";
// import Service from "./Service";
// import Axios from "./Axios";
// import Pincode from "./Component/Pincode";
// import Test from "./Test";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

const Home = lazy(() => import("./Home"));
const Contact = lazy(() => import("./Contact"));
const About = lazy(() => import("./About"));
const Service = lazy(() => import("./Service"));
const Axios = lazy(() => import("./Axios"));
const Pincode = lazy(() => import("./Pincode"));
const Test = lazy(() => import("./Test"));

const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/service" component={Service} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/axios" component={Axios} />
          <Route exact path="/pincode" component={Pincode} />
          <Route exact path="/test" component={Test} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
