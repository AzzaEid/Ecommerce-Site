/*
import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const UserContext = createContext(null);
// eslint-disable-next-line react/prop-types
const UserContextProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(localStorage.getItem("userToken"));
  const [userName, setUserName] = useState(null);

  const getUserData = () => {
    if (userToken != null) {
      const decoded = jwtDecode(userToken);
      setUserName(decoded.userName);
    }
  };

  useEffect(() => {
    getUserData();
  }, [userToken]);

  return (
    <UserContext.Provider value={(setUserToken, userName, setUserName)}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
*/
import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { Flip, toast } from "react-toastify";
import axios from "axios";


export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
const UserContextProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(
    localStorage.getItem("userToken")
  );
  const [num, setNumber] = useState(localStorage.getItem("num"));
  const [profile, setProfile] = useState(null);
  const [userName, setUserName] = useState(null);

  const getUserData = () => {
    if (userToken != null) {
      const decoded = jwtDecode(userToken);
      setUserName(decoded.userName);
      console.log(userToken);
    }
  };
  const getProfile= async ()=>{
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API}/user/profile`,
        {
          headers: {
            Authorization:`Tariq__${userToken}`,
          },
        }
      );
      console.log(data.user);

      if (data.message == "success") {
        
       // getCart(); // refresh cart
       setProfile(data.user);
       console.log(profile);
        
      }
    } catch (error) {
      toast.error( "There's Problem😢",{
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
  useEffect(() => {
    getUserData();
    getProfile();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [],"");
  return (
    <UserContext.Provider
      value={{
        setUserToken,
        userName,
        setUserName,

        num,
        setNumber,

        profile,
        setProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
