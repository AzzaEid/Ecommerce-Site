import React, { useState } from "react";
import signUp from "../../assets/images/sideview.jpg";
import axios from "axios";
import { Bounce, Flip, toast } from "react-toastify";
import { object, string, number, date, InferType } from 'yub';
import { useNavigate } from "react-router-dom";
import Loader from "../../Components/Loader";

function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
    image: "",
  });

  const [Errors, setErrors] = useState([]);
  const [loader,setLoader] =useState(false);
  const handelChange = (e) => {
    //for name,password,email
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handelImageChange = (e) => {
    // for image
    const { name, files } = e.target;
    setUser({
      ...user,
      [name]: files[0],
    });
  };

  const validateData = async () => {
    const RegisterSchema = object({
      userName: string(), //string().min(2).required(),
      email: string().email().required(),
      password: string().min(8).max(16).required(),
      image: string().required()
    });
    try {
      await RegisterSchema.validate(user,{abortEarly:false});
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
        const formData = new FormData();
        formData.append("userName", user.userName);
        formData.append("email", user.email);
        formData.append("password", user.password);
        formData.append("image", user.image);
        const { data } = await axios.post(
          `${import.meta.env.VITE_API}/auth/signup`,
          formData
        );
        console.log("post done");
        setUser({
          userName: "",
          email: "",
          password: "",
          image: "",
        });
        if (data.massage === 'success') {
          console.log("success");
          toast.success(" Account create SUCCESSFULLY !", {
            position: "bottom-left",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
        navigate('/');

      } catch (error) {
        console.log(error.response.data.message);
        if (error.request.status === 409) {
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
        }
        
      }
      finally{
       setLoader(false);
      }
   // }
  };


  return (
    <div className="container py-4">
      <div className="row g-0 align-items-center size     justify-content-space-around">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <div
            className="card cascading-right"
            style={{
              background: "hsla(0, 0%, 100%, 0.55)",
              backdropFilter: "blur(30px)",
            }}
          >
            <div className="card-body p-5 shadow-5 text-center">
              <h2 className="fw-bold mb-5">Sign up</h2>
              <form onSubmit={handelForm}>
                {/**Show errors */}
                {Errors.length > 0
                  ? Errors.map((error) => (
                      <span key={error} style={{ color: "red" }}>
                        {error}
                      </span>
                    ))
                  : ""}
                {/* 2 column grid layout with text inputs for the first and last names */}
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    value={user.userName}
                    name="userName"
                    onChange={handelChange}
                    className="form-control"
                    id="name1input"
                    placeholder="user"
                  />
                  <label htmlFor="floatingInput">User Name</label>
                </div>
                {/* Email input */}

                <div className="form-floating mb-3">
                  <input
                    type="email"
                    value={user.email}
                    name="email"
                    onChange={handelChange}
                    className="form-control"
                    id="emailinput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                {/* Password input */}
                <div className="form-floating">
                  <input
                    type="password"
                    value={user.password}
                    name="password"
                    onChange={handelChange}
                    className="form-control"
                    id="passwordinput"
                    placeholder="Password"
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                {/* Image input */}
                <div className="form-floating">
                  <input
                    type="file"
                    name="image"
                    onChange={handelImageChange}
                    className="form-control"
                    id="imageinput"
                  />
                  <label htmlFor="floatingPassword">Image</label>
                </div>
                {/* Checkbox */}
                <div className="form-check d-flex justify-content-center mb-4">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    defaultValue
                    id="form2Example33"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="form2Example33">
                    Subscribe to our newsletter
                  </label>
                </div>
                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loader?"disabled" :null} 
                  className="btn btn-primary btn-block mb-4">
                  Sign up
                </button>
                {/* Register buttons */}
                <div className='z-4'> {loader?? <Loader/>}  </div>

              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-5 mb-5 mb-lg-0">
          <img src={signUp} className="w-100 rounded-4 shadow-4" />
        </div>
      </div>
    </div>
  );
}


export default Register;
//{/** disabled={loader?"disabled" :null} */ }