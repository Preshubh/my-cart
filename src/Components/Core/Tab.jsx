import React, { useEffect, useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import CancelIcon from "@mui/icons-material/Cancel";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import TabItem from "./TabItem";
import { setDeleteCart, setsubCart } from "../Redux/Slice/Slice";
import { setaddCart } from "../Redux/Slice/Slice";
import { lazy, Suspense } from "react";
import LazyloadingData from "./LazyloadingData";
import Checkout from "./Checkout";
//  const TabItem = lazy(()=> import('./TabItem'))

export default function TemporaryDrawer() {
  const LoginId = JSON.parse(localStorage.getItem("login"))[0]?.Id;

  const [state, setState] = React.useState({
    right: false,
  });
  const [productamount, setProductamount] = useState(0);

  const cartData = useSelector((state) => state.Product.value.addCart);

  const dispatch = useDispatch();

  const filterById =
    cartData &&
    cartData.filter((data) =>
      LoginId !== "" ? data.LoginId === LoginId : data
    );

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  useEffect(() => {
    let arr = [];
    filterById &&
      filterById.forEach((item) => {
        arr.push(item.product.price * item.quantity);
      });
    let sum = 0;
    arr.forEach((num) => {
      sum += num;
    });
    setProductamount(parseFloat(sum).toFixed(2));
  }, [filterById]);
  console.log("lazyLoading");
  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <div class="btn btn-dark" onClick={toggleDrawer(anchor, true)}>
            <ShoppingCartOutlinedIcon />
            <span
              className="badge badge-warning  translate-middle  rounded-circle bg-warning"
              style={{ color: "black" }}
            >
              {filterById.length}
            </span>
          </div>
          <Drawer
            PaperProps={{ style: { width: "25%",overflowX:'hidden' } }}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <div className="cart bg-dark " style={{ width: "100%" }}>
              <div
                className="overflow-auto"
                style={{ minHeight: "20%", maxHeight: "100%" }}
              >
                <IconButton
                  color="warning"
                  aria-label="add to shopping cart"
                  onClick={toggleDrawer(anchor, false)}
                >
                  <CancelIcon />
                </IconButton>
                <div className="icon mb-5">
                  <AddShoppingCartIcon sx={{ color: "white" }} />
                  <span
                    className="badge badge-warning  translate-middle   rounded-circle bg-warning m-2"
                    style={{ color: "black" }}
                  >
                    {filterById.length}
                  </span>
                  <span style={{ color: "white" }}>Cart</span>
                </div>

                {filterById === "" ? (
                  <h4 style={{ marginLeft: "80px", color: "white" }}>
                    Add some products in the cart
                  </h4>
                ) : (
                  filterById &&
                  filterById.map((item) => {
                    return (
                      //  <Suspense fallback={<div><LazyloadingData/></div>}>

                      <TabItem
                        title={item.product.title}
                        src={item.product.image}
                        price={item.product.price}
                        quantity={item.quantity}
                        onClickMinus={() => dispatch(setsubCart(item.product))}
                        onClickPlus={() =>
                          dispatch(
                            setaddCart({ item: item.product, userId: LoginId })
                          )
                        }
                        onClickCancel={() =>
                          dispatch(setDeleteCart(item.product))
                        }
                        count={item.product.count}
                      />
                      // </Suspense>
                    );
                  })
                )}
              </div>
            </div>

            <div
              className="checkout "
              style={{ width: "100%", background: "rgb(73, 70, 70)" }}
            >
              <div style={{ display: "flex" }}>
                <h4
                  style={{
                    color: "grey",
                    marginTop: "20px",
                    marginLeft: "20px",
                  }}
                >
                  SUBTOTAL
                </h4>
                <h4
                  style={{
                    color: "yellow",
                    marginTop: "20px",
                    marginLeft: "200px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-currency-rupee"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                  </svg>
                  {parseFloat(`${productamount}`).toFixed(2)}
                </h4>
              </div>

              <Checkout Subtotal={parseFloat(`${productamount}`).toFixed(2)} />
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
