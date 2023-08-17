import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
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
        path:"/SignUp",
        element:<SignUp/>
    },
    {
        path:"/Login",
        element:<Login/>
     },
  
   
]}])
export default Routes