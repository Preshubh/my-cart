import { IconButton } from "@mui/material";
import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";

const TabItem = (props) => {
  console.log("11111111111111111111111111111111")
  return (
    <div>
      <div className="item m-1 d-flex">
        <img
          src={props.src}
          className="card-img-top "
          style={{ width: "50px", height: "80px", padding: "1px" }}
        />
        <div style={{ width: "250px" }}>
          <p className="card-title" style={{ color: "white", fontSize: "2" }}>
            {props.title}
          </p>
          <p style={{ color: "grey" }}> Quantity : {props.quantity}</p>
        </div>
        <div className="price m-2">
          <h5 className="card-text d-flex" style={{ color: "yellow" }}>
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
            {props.price}
          </h5>
          <h5 className="card-text d-flex" style={{ color: "yellow" }}>
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
            {parseFloat(`${props.price * props.quantity}`).toFixed(2)}
          </h5>
          <div className="input-group d-flex" style={{ display: "flex" }}>
            <button
              className="btn btn-white btn-minuse"
              style={{ color: "white" }}
              type="button "
              onClick={props.onClickMinus}
              disabled={props.quantity == 1}
            >
              -
            </button>

            <button
              className="btn btn-red btn-pluss"
              style={{ color: "white" }}
              type="button"
              onClick={props.onClickPlus}
              disabled={props.count == 1}
            >
              +
            </button>
          </div>
        </div>
        <IconButton
          color="primary"
          aria-label="add to shopping cart"
          onClick={props.onClickCancel}
        >
          <CancelIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default TabItem;
