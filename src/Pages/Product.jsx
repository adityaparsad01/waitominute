import React, {useContext} from "react";
import Card from "../Component/Card";
import { Helmet } from "react-helmet";
import {ProductContext} from '../ProductContext'


const Service = () => {
  const productsList = useContext(ProductContext)

  const field = [];
  productsList.map((item, idx) => field.push(item.fields));

  field.map((item, idx) => item.Attachments);

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
              {field.map((val, i) => {
                return (
                  <>
                    <Card
                      key={i}
                      imgsrc={val.Name}
                      title={val.Name}
                      info={val.Name}
                      btnText={val.price}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Service;
