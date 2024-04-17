import axios from "axios";
import { createContext, useState } from "react";
import { Flip, toast } from "react-toastify";

export const ProductItems = createContext(null);

// eslint-disable-next-line react/prop-types
const ProductItemsProvider = ({ children }) => {
  const [productsLink, setProductsLink] = useState("");
  const [productsP,setProductsP] = useState([]);
  const token = localStorage.getItem("userToken");

  const getProducts = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API}${productsLink}`, {
        headers: {
          Authorization: `Tariq__${token}`,
        },
      });
      if (data.message == "success") {
        toast.success("Done");
        setProductsP(data.products)
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
      }}
    >
      {children}
    </ProductItems.Provider>
  );
};
export default ProductItemsProvider;
