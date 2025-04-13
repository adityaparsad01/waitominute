import React,{createContext, useState,useEffect} from 'react'

export const ProductContext = createContext()

const API = process.env.REACT_APP_VILAKSHYA_KEY
const BASE = process.env.REACT_APP_VILAKSHYA_BASE

const URL =`https://api.airtable.com/v0/${BASE}/products?api_key=${API}`;

export const ProductProvider = ({children})=>{
  
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true); // Add loading state
    const [error, setError] = useState(null); // Add error state

    const getData = async () => {
        setLoading(true); // Start loading
        setError(null); // Reset error
        try {
            const response = await fetch(URL);
            if (!response.ok) { // Check for HTTP errors
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            // Check if data.records exists and is an array
            if (data && Array.isArray(data.records)) {
                setProduct(data.records);
            } else {
                // Handle cases where records might be missing or not an array
                console.error("Unexpected data structure received:", data);
                setProduct([]); // Set to empty array to prevent map errors
                throw new Error("Unexpected data structure received from API.");
            }
        } catch (e) {
            console.error("Failed to fetch products:", e);
            setError(e.message); // Set error state
            setProduct([]); // Ensure product is an empty array on error
        } finally {
            setLoading(false); // End loading regardless of outcome
        }
      };

      useEffect(() => {
        getData();
      }, []);

    return(
        // Provide loading and error states along with product
        <ProductContext.Provider value={{ product, loading, error }}>
            {children}
        </ProductContext.Provider>
    )
}

