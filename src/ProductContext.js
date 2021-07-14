import React,{createContext, useState,useEffect} from 'react'

export const ProductContext = createContext()

const API = process.env.REACT_APP_VILAKSHYA_KEY
const BASE = process.env.REACT_APP_VILAKSHYA_BASE

const URL =`https://api.airtable.com/v0/${BASE}/products?api_key=${API}`;

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

