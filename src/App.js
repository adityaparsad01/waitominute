import React, { lazy, Suspense } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Component/Navbar";
import loading from "./Img/25.svg";
import Footer from "./Footer";

const Home = lazy(() => import("./Home"));
const Contact = lazy(() => import("./Contact"));
const About = lazy(() => import("./About"));
const Service = lazy(() => import("./Service"));
const Test = lazy(() => import("./Test"));

const App = () => {
  return (
    <>
      <Navbar />
      <Suspense
        fallback={
          <div className="container-fluid mx-auto text-center">
            <img src={loading} alt={loading} />
          </div>
        }
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/products" component={Service} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/test" component={Test} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
