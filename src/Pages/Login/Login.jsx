import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import signIn from "../../assets/images/sideimage2.jpg";
import { object, string, number, date, InferType } from "yub";
import { Flip, toast } from "react-toastify";
import { UserContext } from "../../context/UserContextProvider";
import Loader from "../../Components/Loader";
import lineBG from '../../assets/images/topographic-tile-11.png'
import { CartContext } from "../../context/CartContextProvider";

function Login() {

  const navigate = useNavigate();
  const {setUserToken,getUserData} = useContext(UserContext);
  const { cart , getCart} = useContext(CartContext);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);
  const [loader, setLoader] = useState(false);

  const handelChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const validateData = async () => {
    const LoginSchema = object({
      email: string().email().required(),
      password: string().min(8).max(16).required(),
    });
    try {
      await LoginSchema.validate(user, { abortEarly: false });
      return true;
    } catch (error) {
      console.log("validation error", error.errors);
      setErrors(error.errors);
      setLoader(false);
      return false;
    }
  };

  const handelForm = async (e) => {
    e.preventDefault();
    setLoader(true);
    // if (await validateData()) {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API}/auth/signin`,
        {
          email: user.email,
          password: user.password,
        }
      );
      console.log("post done");
      console.log(data.message);
      setUser({
        email: "",
        password: "",
      });
      /// token
      if (data.message == 'success') {
       
      
        console.log(data.message);
        console.log("success=========");
        toast.success("Login SUCCESSFULLY !", {
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
        localStorage.setItem('userToken',data.token);
        getUserData();
      console.log("999999999999");
      navigate('/');    
      setUserToken(data.token); 
      getCart();
      
      }
       
    } catch (error) {
      console.log(error.response.data.message);
        toast.error(error.response.data.message , {
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
      //   }
    }
  };

  return (
    <div className="pt-35 "  style= {{  }}>
      <div className="container p-2  mt-5" style={{backgroundColor:'white'}} >
      <div className="row align-item-center">
        <div className="col-lg-6 mb-5 mb-lg-0 d-flex flex-column gap-2">
        <div
              className="card  px-5 py-4  rounded-4  "
              style={{
              
                 backgroundColor:"#267DFF" ,
                 backgroundSize:"cover",
                color: "#ffffff",
                border:" 1px solid #267DFF"
              }}
            >
              <h2 className="card-title "> Don't have account yet?</h2>
              
                <Link className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover " aria-disabled="true" to="/Register">
                <h2 > Sign UP  </h2>  
                </Link>
             
            </div>
          <div
            className="card cascading-right"
            style={{
              background: "hsla(0, 0%, 100%, 0.55)",
              backdropFilter: "blur(30px)",
            }}
          >
            <div className="card-body p-5 shadow-5 text-center rounded-4">

              <h2 className="fw-bold mb-5">Log In</h2>
              <form onSubmit={handelForm}>
                {/**Show errors */}
                {errors.length > 0
                  ? errors.map((error) => (
                      <span key={error} style={{ color: "red" }}>
                        {error}
                      </span>
                    ))
                  : ""}
                {/* Email input */}
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    value={user.name}
                    name="email"
                    onChange={handelChange}
                    className="form-control"
                    id="email-input"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="email-input">Email address</label>
                </div>
                {/**className="form-label" */}

                {/* Password input */}

                <div className="form-floating">
                  <input
                    type="password"
                    value={user.password}
                    name="password"
                    onChange={handelChange}
                    className="form-control"
                    id="password-input"
                    placeholder="Password"
                  />
                  <label htmlFor="password-input">Password</label>
                </div>

                {/* 2 column grid layout for inline styling */}
                <div className="row my-4">
                  <div className="col d-flex justify-content-center">
                    {/* Checkbox */}
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="form2Example31"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="form2Example31"
                      >
                        {" "}
                        Remember me{" "}
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    {/* Simple link */}
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/ForgetPass"
                    >
                      Forgot password?
                    </Link>
                  </div>
                </div>
                {/* Submit button */}
                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4 m-auto"
                  disabled={loader ? "disabled" : null}
                >
                  Sign in
                </button>
                {/* Register buttons */}
                <div className="text-center">
                  
                </div>
                <div className="z-4"> {loader ?? <Loader />} </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-5 mb-lg-0">
          <img src={signIn} className="w-100 rounded-4 shadow-4" />
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default Login;
