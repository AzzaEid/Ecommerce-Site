import axios from "axios";
import { createContext, useState } from "react";
import { Flip, toast } from "react-toastify";

export const CartContext = createContext(null);

// eslint-disable-next-line react/prop-types
const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cartEmpty, setcartEmpty] = useState(true);
  const [coupons,setCoupons] =useState([]);
  const token = localStorage.getItem("userToken");

  
  const getCart = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API}/cart`, {
        headers: {
          Authorization:`Tariq__${token}`,
        },
      });
      if (data.message == "success") {
        setCart(data.products);
        (cart.length == '0')?  setcartEmpty(true): setcartEmpty(false);
      }
    } catch (error) {
      toast.error(error.response.data.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (productId) => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API}/cart`,
        { productId },
        {
          headers: {
            Authorization:`Tariq__${token}`,
          },
        }
      );
      if (data.message == "success") {
        getCart(); // refresh cart
        localStorage.setItem('cartNum',data.cart.products)
        toast.success("Added to cart",{
            position: "bottom-left",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Flip,
          }); 
      }
    } catch (error) {
      toast.error(error.response.data.message || "Please login first 😊",{
        position: "bottom-left",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
      }); 
    } finally {
      setLoading(false);
    }
  };

  const removeItem =async (id) => {
    setLoading(true);
    try {
      const { data } = await axios.patch(
        `${import.meta.env.VITE_API}/cart/removeItem`,
        {productId:id},
        {
          headers: {
            Authorization:`Tariq__${token}`,
          },
        }
      );
      if (data.message == "success") {
      getCart(); // refresh cart

        toast.success("Removed done",{
            position: "bottom-left",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Flip,
          }); 
      }
    } catch (error) {
      toast.error(error.response.data.message || "There's Problem😢",{
        position: "bottom-left",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
      }); 
    } finally {
      setLoading(false);
    }
  };
  const clearCart =async () => {
    setLoading(true);
    try {
      const { data } = await axios.patch(`${import.meta.env.VITE_API}/cart/clear`,null, {
        headers: {
          Authorization: `Tariq__${token}`
        },
      });
      if (data.message == "success") {
        setCart([]);
        setcartEmpty(true);
       toast.success("Removed done",{
        position: "bottom-left",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true, 
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
      }); 
      }
    } catch (error) {
      toast.error(error.response.data.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const incraseQuantity =async (productId) => {
    try {
      const { data } = await axios.patch(
        `${import.meta.env.VITE_API}/cart/incraseQuantity`,
        { productId },
        {
          headers: {
            Authorization:`Tariq__${token}`,
          },
        }
      );
      if (data.message == "success") {
        console.log("sssssss")
        getCart(); // refresh cart
        toast.success("+",{
            position: "bottom-left",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Flip,
          }); 
      }
    } catch (error) {
      toast.error(error.response.data.message || "There's Problem😢",{
        position: "bottom-left",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
      }); 
    } 
  };
  const decraseQuantity =async (productId) => {
    try {
      const { data } = await axios.patch(
        `${import.meta.env.VITE_API}/cart/decraseQuantity`,
        {productId:productId},
        {
          headers: {
            Authorization:`Tariq__${token}`,
          },
        }
      );
      if (data.message == "success") {
        getCart(); // refresh cart
        toast.success("-",{
            position: "bottom-left",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Flip,
          }); 
      }
    } catch (error) {
      toast.error(error.response.data.message || "There's Problem😢",{
        position: "bottom-left",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
      }); 
    } finally {
      setLoading(false);
    }
  };
  const getCoupons = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API}/coupon`, 
    );
      if (data.message == "success") {
        console.log(data);
        setCoupons(data.coupons);
      }
    } catch (error) {
      toast.error(error.response.data.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        getCart,
        loading,
        setLoading,
        addToCart,
        removeItem,
        clearCart,
        incraseQuantity,
        decraseQuantity,
        cartEmpty,
        getCoupons,
        coupons,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
