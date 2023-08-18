import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

const Routes = createBrowserRouter([
   { path: "/",
    element: (
      <PrivateRoute>
        <Layout/>
      </PrivateRoute>
    ),
    children: [
    {
        path:"/",
        element:<Home/>
    },
    
    {
        path:"/signup",
        element:<SignUp/>
    },
    {
        path:"/login",
        element:<Login/>
     },
  
   
]}])
export default Routes