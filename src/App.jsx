import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Categories from "./Pages/Categories/Categories.jsx";
import Products from "./Pages/Products/Products.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import ForgetPass from "./Pages/forget/ForgetPass.jsx";
import Root  from "./routes/Root.jsx";
import './App.css'
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
        path: "/Cart",
        element: <Cart />,
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
        path:"/ForgetPass",
        element: <ForgetPass />
      }
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
