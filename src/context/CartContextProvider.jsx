import axios from "axios";
import { createContext, useState } from "react";
import { Flip, toast } from "react-toastify";

export const CartContext = createContext(null);

// eslint-disable-next-line react/prop-types
const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("userToken");
  const [cartNum,setCartNum]=useState(localStorage.getItem('cartNum'));
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
    setLoading(true);
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
       // getCart(); // refresh cart
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
  const decraseQuantity =async (productId) => {
    setLoading(true);
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
