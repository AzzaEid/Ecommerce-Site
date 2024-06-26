import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../Components/Loader";
import { CartContext } from "../../context/CartContextProvider";
import orderImg from "../../assets/images/order.jpg";
import { Flip, toast } from "react-toastify";
import cartEmptyImg from "../../assets/images/catrEmpty.png";

function Cart() {
  const {
    cart,
    getCart,
    loading,
    incraseQuantity,
    decraseQuantity,
    removeItem,
    clearCart,
    cartEmpty,
    getCoupons,
    coupons,
  } = useContext(CartContext);
  const [order, setOrder] = useState({
    couponName: "",
    address: "",
    phone: "",
  });
  const [loader, setLoader] = useState(false);

  const handelChange = (e) => {
    const { name, value } = e.target;
    setOrder({
      ...order,
      [name]: value,
    });
  };
  const token = localStorage.getItem("userToken");
  const handelForm = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_API}/order`, {
        couponName: order.couponName,
        address: order.address,
        phone: order.phone,
      },
      {
        headers: {
          Authorization:`Tariq__${token}`,
        },});
      console.log("post done");
      console.log(data.message);
      setOrder({
        couponName: "",
        address: "",
        phone: "",
      });
      /// token
      if (data.message == "success") {
        console.log(data.message);
        console.log("success=========");
        toast.success("ORDER SUCCESSFULLY !", {
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
      localStorage.setItem("userToken", data.token);

      console.log("999999999999");
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message, {
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
      setLoader(false);
    }
  };

  useEffect(() => {
    getCart();
    getCoupons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [],[]);
  if (loading) {
    return <Loader />;
  }
  console.log(cart);
  return (
    <div className=" container d-flex flex-column  align-items-center">
      <div className="container cart-items   ">
        <h2
          className="rounded-4 text-center p-2 my-5"
          style={{ backgroundColor: "#E7ECFF" }}
        >
          {" "}
          Your Cart
        </h2>
        <div className="d-flex flex-column  align-items-center">
           {(cartEmpty==true) ? (
          <div className="col-6 px-3 align-self-center text-center">
            <h3 > Your Cart is Empty🫣 </h3>
            <img src={cartEmptyImg} alt="" style={{ width: "100%" }} />
          </div>
        ) : (
          <>
          <table className="table text-center  table-hover align-middle col-8">
          <thead>
            <th>#</th> <th>Product</th> <th>Quantity</th> <th>Price</th>
            <th> Sub Total</th> <th>_</th>
          </thead>
          <tbody>
            {cart.map((cartItem, index) => (
              <tr key={cartItem._id}>
                <td scope="col">{index}</td>
                <td scope="col">
                  <Link
                    aria-current="page"
                    to={`/Product/${cartItem.productId}`}
                  >
                    <img
                      height={150}
                      width={150}
                      className="object-fit-contain"
                      src={cartItem.details.mainImage.secure_url}
                    />{" "}
                  </Link>{" "}
                </td>
                <td scope="col">
                  <div
                    className="btn-group btn-group-sm border border-secondary"
                    role="group"
                    aria-label="Small button group"
                  >
                    <button
                      type="button"
                      onClick={() => {
                        decraseQuantity(cartItem.productId);
                      }}
                      className="btn btn-outline-light"
                      disabled={(cartItem.quantity == '1')?"disabled" :null} 
                    >
                      ➖
                    </button>
                    <button
                      type="button"
                      disabled="disabled"
                      className="btn btn-outline-secondary"
                    >
                      {cartItem.quantity}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        incraseQuantity(cartItem.productId);
                      }}
                      className="btn btn-outline-light"
                    >
                      ➕
                    </button>
                  </div>
                </td>
                <td scope="col">{cartItem.details.price}$</td>
                <td>{cartItem.details.finalPrice * cartItem.quantity}$</td>
                <td>
                  <button
                    type="button"
                    onClick={() => removeItem(cartItem.productId)}
                    className="btn-close"
                    aria-label="Close"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
          <div
            className="p-2  btn-add btn-shine  d-flex flex-grow-1 align-items-center  justify-content-center"
            style={{
              width: "fit-content",
              color: "white",
              backgroundColor: "#6C9EFF",
            }}
            onClick={() => {
              clearCart();
            }}
          >
            {" "}
            CLEAR CART
          </div>
          </>
        
        )}
        </div>
       
        {loader ?? <Loader />}
      </div>
      <div className="container">
        <h2
          className="rounded-4 text-center p-2 my-5"
          style={{ backgroundColor: "#E7ECFF" }}
        >
          {" "}
          Order
        </h2>
     
        

        <div className="row d-flex flex-wrap align-items-center justify-content-center">
          <form className="col-md-5 px-3 ">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="CouponInput"
                placeholder=""
                value={order.couponName}
                name="couponName"
                onChange={handelChange}
              />
              <label htmlFor="CouponInput">Coupon Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="addressInput"
                placeholder="Password"
                value={order.address}
                name="address"
                onChange={handelChange}
              />
              <label htmlFor="addressInput">Address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="phoneInput"
                placeholder="Password"
                value={order.phone}
                name="phone"
                onChange={handelChange}
              />
              <label htmlFor="phoneInput">Phone number</label>
            </div>

            <div className="d-flex justify-content-center">
              <div className="btn  m-auto" onClick={handelForm}>
                {" "}
                SUBMET ORDER{" "}
              </div>
            </div>
          </form>
          <div className="col-md-5 px-5">
            <img src={orderImg} alt="" style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
