import React,{createContext, useState,useEffect} from 'react'

export const ProductContext = createContext()

const URL ="https://api.airtable.com/v0/appZMUOKDaPymOc6w/products?api_key=keyPPTmvOpAtkL49Q";
export const ProductProvider = ({children})=>{
    const [product, setProduct] = useState([])

    const getData = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setProduct(data.records);
      };

      useEffect(() => {
        getData();
      }, []);

    return(
        <ProductContext.Provider value={product}>
            {children}
        </ProductContext.Provider>
    )
}

