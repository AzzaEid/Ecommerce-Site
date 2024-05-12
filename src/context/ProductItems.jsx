import axios from "axios";
import { createContext, useState } from "react";
import { Flip, toast } from "react-toastify";

export const ProductItems = createContext(null);

// eslint-disable-next-line react/prop-types
const ProductItemsProvider = ({ children }) => {
  const [productsLink, setProductsLink] = useState("");
  const [productsP,setProductsP] = useState([]);
  const [currentPage,setCurrentPage] = useState(1);
  const token = localStorage.getItem("userToken");
  const [pageEmpty, setPageEmpty] = useState(false);

 

  const getProducts = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API}/products?page=${currentPage}&limit=12${productsLink}`, {
        headers: {
          Authorization: `Tariq__${token}`,
        },
      });
      if (data.message == "success") {
        setProductsP(data.products)
        (productsP.length == '0')?  setPageEmpty(true): setPageEmpty(false);

      }
    } catch (error) {
      toast.error(error.response.data.message || "Something went wrong");
    } 
  };


  return (
    <ProductItems.Provider
      value={{
        productsLink,
        setProductsLink,
        getProducts,
        productsP,
        currentPage,
        setCurrentPage,
        pageEmpty,
      }}
    >
      {children}
    </ProductItems.Provider>
  );
};
export default ProductItemsProvider;
