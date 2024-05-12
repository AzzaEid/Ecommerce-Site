import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContextProvider";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { IoLogOutOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { LiaShoppingBagSolid } from "react-icons/lia";

function Profile() {
  const { setUserToken, userName, setUserName, profile } = useContext(UserContext);
  const navigate = useNavigate();
  const token = localStorage.getItem(`userToken`);
  const [orders, setOrders] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener('resize', function(event){
    setWidth(window.innerWidth)
})
  const logout = () => {
    localStorage.removeItem("userToken");

    setUserName(null);
    navigate("/");
    setUserToken(null);
  };

  ///get orders
  const getOrders = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API}/order`, {
      headers: {
        Authorization: `Tariq__${token}`,
      },
    });
    console.log(data);
    setOrders(data.orders);
    console.log(data.orders);
  };
  const cancel = async (id) => {
    const token = localStorage.getItem(`userToken`);
    console.log("hi1");
    const { data } = await axios.patch(
      `${import.meta.env.VITE_API}/order/cancel/${id}`,
      {},
      {
        headers: {
          Authorization: `Tariq__${token}`,
        },
      }
    );
    getOrders();
    toast("the order cancel");
  };
  
  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className="container">
      <div className={width>770?"row my-4":""}>
        <div className={width>770?"col-3":""}>
          <nav
            id="simple-list-example"
            className={width>770?"d-flex flex-column gap-3 nav  nav-pills simple-list-example-scrollspy align-items-stretch"  
            : " navbar navbar-expand-lg  sticky-top  bg-body-tertiary px-3 mb-3 d-flex  "}
          >
            <nav className="nav nav-pills">
               <a className="nav-link p-1 rounded " href="#item-1">
              <FaRegUser
                style={{ width: "20px", height: "20px", marginRight: "5px",fill:"pink" }}
                
              />
              Profile
            </a>

            </nav>
           <nav className="nav nav-pills">
            <a className=" nav-link nav-pills p-1 rounded" href="#item-2">
              <LiaShoppingBagSolid
                style={{ width: "20px", height: "20px", marginRight: "5px" ,fill:"pink"}}
                
              />
              Orders
            </a>
           </nav>
            <nav className="nav nav-pills">
              <a className="nav-link nav-pills p-1 rounded" href="#item-3">
              <IoLogOutOutline
                style={{ width: "20px", height: "20px", marginRight: "5px" ,fill:"pink", color:'pink'}}
                
              />
              Log Out
            </a>
            </nav>
            
          </nav>
        </div>
        <div className={width>770?"col-8":""}>
          <div
            data-bs-spy="scroll"
            data-bs-target="#simple-list-example"
            data-bs-offset={0}
            data-bs-smooth-scroll="true"
            className="scrollspy-example"
            tabIndex={0}
          >
            <div id="item-1">
              <h4 style={{ backgroundColor: "#F3EFFA" }}>Profile</h4>
              <div className="card my-4" style={{ maxWidth: "70%" }}>
                <div className="row g-0 ">
                  <div className="col-md-4 ">
                    <img
                      src={profile.image.secure_url}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>

                  <div className="col-md-8">
                    <div className="card-body">
                      <h5
                        className="card-title my-2"
                        style={{ backgroundColor: "#F3EFFA" }}
                      >
                        {" "}
                        Hi {userName} 👋{" "}
                      </h5>
                      <h5 className="card-text py-2">
                        {" "}
                        Your email: {<br />} {profile.email}{" "}
                      </h5>
                      <h5 className="card-text py-2">
                        Account created at:{<br />} {profile.createdAt}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="item-2">
              <h4 style={{ backgroundColor: "#F3EFFA" }}>
                Your Orders detalis
              </h4>
              <table className="  table text-center  table-hover align-middle col-8 my-4">
                <thead>
                  <th>#</th> <th>Order ID</th> <th>Order Date</th>
                  <th>Order Status</th> <th> Order Total</th> <th>-</th>
                </thead>
                <tbody>
                  {orders.map((order, index) => (
                    <tr key={order._id}>
                      <td scope="col">{index}</td>
                      <td scope="col">{order._id}</td>
                      <td scope="col">{order.date}</td>
                      <td scope="col">{order.status}</td>
                      <td>{order.finalPrice}$</td>
                      <td>
                        <button
                          type="button"
                          onClick={() => cancel(order._id)}
                          className="btn-close"
                          aria-label="Close"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div id="item-3">
              <h4 style={{ backgroundColor: "#F3EFFA" }}>Log Out</h4>
              <button
                className="btn my-4"
                onClick={logout}
              >
                <Link
                  className="nav-link active  me-md-2 "
                  aria-current="page"
                  to="/Login"
                >
                  LogOUT
                </Link>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
