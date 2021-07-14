import React, {useContext} from "react";
import Card from "../Component/Card";
import TestCard from "../Component/TextCard"
import { Helmet } from "react-helmet";
import {ProductContext} from '../ProductContext'


const Service = () => {
  const productsList = useContext(ProductContext)
  console.log(productsList)

 


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
            {productsList.map((val, idx) => 
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
              )}
              
              {/* {productsList.map((val, idx) => 
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
