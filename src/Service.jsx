import React,{useState,useEffect} from "react";
import Card from "./Component/Card";
import { Helmet } from "react-helmet";

const URL ="https://api.airtable.com/v0/appZMUOKDaPymOc6w/products?api_key=keyPPTmvOpAtkL49Q";

const Service = () => {
  const [productsList, setProductsList] = useState([])


  const getData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setProductsList(data.records);
  };

  console.log()


  const field = []
  productsList.map((item,idx)=>(
    field.push(item.fields)
  ))

 
  field.map((item,idx)=>(
    (item.Attachments)
  ))

  useEffect(() => {
    getData()
  }, [])


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
        <h1 className="text-center">Our Products</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {field.map((val, i) => {
                return (
                  <Card
                    key={i}
                    imgsrc={val.Name}
                    title={val.Name}
                    info={val.Name}
                    btnText={val.price}
                  />
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
