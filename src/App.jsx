import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Categories from "./Pages/Categories/Categories.jsx";
import Products from "./Pages/Products/Products.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import ForgetPass from "./Pages/forget/ForgetPass.jsx";
import Root  from "./routes/Root.jsx";
import './App.css'
import Items from "./Pages/Items/Items.jsx";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Product from "./Pages/Product/Product.jsx";
import UserContextProvider from "./context/UserContextProvider.jsx";
import Profile from "./Pages/Profile/Profile.jsx";
import ProtectedRoutes from "./Components/ProtectedRoutes.jsx";
  


const currency="$";

function App() {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Categories />,

      },
      {
        path: "/Products",
        element: <Products />,
      },
      {
        path:"/Product/:id",
        element: <Product />
      },
      {
        path: "/Cart",
        element: <ProtectedRoutes>
        <Cart />
         </ProtectedRoutes>
       ,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Register",
        element: <Register />,
      },
      {
        path: "/Items/:Cat_id",
        element: <Items />,
      },
      {
        path:"/ForgetPass",
        element: <ForgetPass />
      }
      ,{
        path:"/Profile",
        element: <Profile/>
      }
    ],
  },
]);

  return (
    <>
       <UserContextProvider >
          <RouterProvider router={router} />

      </UserContextProvider>
      
   
    
      <ToastContainer/>
    </>
  );
}

export default App;
