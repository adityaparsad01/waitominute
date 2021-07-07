import React, { lazy, Suspense } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Component/Navbar";
import loading from "./Img/25.svg";
import Footer from "./Component/Footer";
import {ProductProvider} from './ProductContext'


const Home = lazy(() => import("./Pages/Home"));
const Contact = lazy(() => import("./Pages/Contact"));
const About = lazy(() => import("./Pages/About"));
const Service = lazy(() => import("./Pages/Service"));




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
        <ProductProvider>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/products">
            <Service />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Redirect to="/" />
        </Switch>
        </ProductProvider>
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
