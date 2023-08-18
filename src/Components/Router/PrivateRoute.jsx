import React from "react";
import DashBoard from "../Pages/DashBoard/DashBoard";
import { useSelector } from "react-redux";

const PrivateRoute = (props) => {
  const isUser = useSelector((state) => state.Product.value.userLogin);

  //console.log(isUser,'isusers')
  if (isUser == "false") {
    return <div> {props.children}</div>;
  }

  return <DashBoard />;
};

export default PrivateRoute;
