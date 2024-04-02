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

export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
const UserContextProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(
    localStorage.getItem("userToken")
  );
  const [price, setPraic] = useState(0);

  const [cartNum, setcartNumber] = useState(localStorage.getItem("cartNum"));

  const [num, setNumber] = useState(localStorage.getItem("num"));
  const [profil, setProfile] = useState(null);
  const [userName, setUserName] = useState(null);

  const getUserData = () => {
    if (userToken != null) {
      const decoded = jwtDecode(userToken);
      setUserName(decoded.userName);
      console.log(userToken);
    }
  };
  useEffect(() => {
    getUserData();
  }, [userToken]);
  return (
    <UserContext.Provider
      value={{
        setUserToken,
        userName,
        setUserName,
        cartNum,
        setcartNumber,
        num,
        setNumber,
        price,
        setPraic,
        profil,
        setProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
