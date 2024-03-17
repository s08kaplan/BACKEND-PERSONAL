import { createContext, useContext,  useState, useEffect } from "react"
import useProducts from "../custom-hooks/useProducts"

const ProductContext = createContext()

const ProductsProvider = ({ children }) => {
const { getAllProducts } = useProducts()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

useEffect(() => {
  const fetchData = async () => {
    try {
      setLoading(true)
      const {data}  = await getAllProducts()
      console.log(data);
      setProducts(data)
    } catch (error) {
      console.log("Error occured while catching/chasing/fetching  data",error);
    }finally{
      setLoading(false)
    }
  }
fetchData()
}, [])

  return <ProductContext.Provider value={{loading, products }}> { children } </ProductContext.Provider>
}

  
export default ProductsProvider

export const useProductContext = () => {
  return useContext(ProductContext)
}