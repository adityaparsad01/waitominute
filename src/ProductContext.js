import React,{createContext, useState,useEffect} from 'react'

export const ProductContext = createContext()

// Removed Airtable dependency and replaced API-related code with static data
const products = [
  {
    id: 1,
    name: "Website Development",
    description: "We create stunning websites tailored to your needs.",
  },
  {
    id: 2,
    name: "Web App Development",
    description: "Build scalable and efficient web applications.",
  },
  {
    id: 3,
    name: "Android Application",
    description: "Develop user-friendly Android apps for your business.",
  },
  {
    id: 4,
    name: "Digital Marketing",
    description: "Boost your online presence with our marketing strategies.",
  },
];

export const ProductProvider = ({children})=>{
  
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true); // Add loading state
    const [error, setError] = useState(null); // Add error state

    const getData = async () => {
        setLoading(true); // Start loading
        setError(null); // Reset error
        try {
            // Simulate fetching data
            const data = { records: products };
            // Check if data.records exists and is an array
            if (data && Array.isArray(data.records)) {
                setProduct(data.records);
            } else {
                // Handle cases where records might be missing or not an array
                console.error("Unexpected data structure received:", data);
                setProduct([]); // Set to empty array to prevent map errors
                throw new Error("Unexpected data structure received.");
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

