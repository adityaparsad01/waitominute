import React, {useContext} from "react";
import Card from "../Component/Card";
import TestCard from "../Component/TextCard"
import { Helmet } from "react-helmet";
import {ProductContext} from '../ProductContext'


const Service = () => {
  // Destructure loading and error states from context
  const { product: productsList, loading, error } = useContext(ProductContext)
  // console.log(productsList) // Keep for debugging if needed

  return (
    <>
      <Helmet>
        <title>Products || Vilakshya</title>
        <meta
          name="title"
          content="Services Which is provided Bt WaitOminute"
        />
      </Helmet>
      <div className="my-5">
        <h1 className="text-center">Our Product</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
            {/* Conditional Rendering based on loading and error states */}
            {loading && <p className="text-center">Loading products...</p>}
            {error && <p className="text-center text-danger">Error loading products: {error}</p>}
            {!loading && !error && productsList && productsList.length > 0 ? (
                productsList.map((val, idx) => 
                 (
                  <>
                   <TestCard
                      key={idx}
                      imgsrc={val.fields.Attachments}
                      title={val.fields.Name}
                      info={val.fields.Name}
                      price={val.fields.price}
                      totalPrice={val.fields.mainprice}
                    />
                  </>
                )
              )
            ) : (
              // Show message if not loading, no error, but no products
              !loading && !error && <p className="text-center">No products found.</p>
            )}
              
              {/* {productsList.map((val, idx) => // Original commented out code
                 (
                  <>
                    <Card
                      key={idx}
                      imgsrc={val.fields.Attachments}
                      title={val.fields.Name}
                      info={val.fields.Name}
                      btnText={val.fields.price}
                    />
                  </>
                )
              )} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Service;
