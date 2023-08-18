import axios from "axios";
import React, { useEffect, useState, Suspense, lazy } from "react";
import { setaddCart } from "../../Redux/Slice/Slice";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Rating,
  Slider,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "../../Core/Profile";
import LazyloadingData from "../../Core/LazyloadingData";
import Tab from "../../Core/Tab";

const Card = lazy(() => import("../../Core/Card"));

const DashBoard = () => {
  const loginId = useSelector((state) => state.Product.value.loginData);
  const LoginName = JSON.parse(localStorage.getItem("login"));
  const [productList, setProductList] = useState([]);
  const [filterProductList, setFilterProductList] = useState([]);
  const [filterTitle, setFilterTitle] = useState("");
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (productList.length > 0) {
      setLoading(false);
    }
  }, [productList]);

  const clearFilter = {
    price_range: [0, 1000],
    cetegory: [],
    rating: "",
  };

  const [filterObj, setFilterObj] = useState({
    price_range: [0, 1000],
    cetegory: [],
    rating: "",
  });

  const apiData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setProductList(response.data);
  };

  useEffect(() => {
    filterProduct();
  }, [productList.length > 0, filterObj]);

  const rangeHandleChange = (event, newValue) => {
    setFilterObj((preValue) => ({ ...preValue, price_range: newValue }));
  };

  const rateHandleChange = (event, newValue) => {
    setFilterObj((preValue) => ({ ...preValue, rating: newValue }));
  };

  const handleCetegorySelect = (e) => {
    const selectedCategory = e.target.value;
    if (e.target.checked) {
      setFilterObj((preValue) => ({
        ...preValue,
        cetegory: [...filterObj.cetegory, selectedCategory],
      }));
    } else {
      const filteredData = filterObj.cetegory.filter(
        (item) => item !== selectedCategory
      );
      setFilterObj((preValue) => ({
        ...preValue,
        cetegory: filteredData,
      }));
    }
  };

  const filterProduct = () => {
    if (
      filterObj.cetegory.length === 0 &&
      filterObj.price_range[0] === 0 &&
      filterObj.price_range[1] === 1000 &&
      filterObj.rating === ""
    ) {
      setFilterProductList(productList);
    } else {
      let newFilterProductList;
      const rangeSlectedProduct = productList.filter((item) =>
        filterObj.rating !== ""
          ? item.price >= filterObj.price_range[0] &&
            item.price <= filterObj.price_range[1] &&
            Math.round(item.rating.rate) === filterObj.rating
          : item.price >= filterObj.price_range[0] &&
            item.price <= filterObj.price_range[1]
      );

      if (filterObj.cetegory.length > 0) {
        newFilterProductList = rangeSlectedProduct.filter((items) =>
          filterObj.cetegory.includes(items.category)
        );
      } else {
        newFilterProductList = rangeSlectedProduct;
      }

      setFilterProductList(newFilterProductList);
    }
  };

  const search = (e) => {
    setFilterTitle(e.target.value);
  };

  const addItem = (item) => {
    const userId = loginId.Id;

    dispatch(setaddCart({ item, userId }));

    toast.success("successfully Add Product To Cart ");
  };

  const clearAllFilter = () => {
    setFilterObj(clearFilter);
    setFilterTitle("");
  };

  useEffect(() => {
    apiData();
  }, []);

  return (
    <div style={{ height: "100vh" }}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div style={{ width: "100%" }}>
          <div className="collapse navbar-collapse" id="navbarButtonsExample">
            <div style={{ color: "white", width: "20%" }}>
              <h3>E-Card</h3>
            </div>
            <input
              type="search"
              className="form-control m-2"
              placeholder="Search"
              aria-label="Category"
              aria-describedby="basic-addon1"
              style={{ width: "60%" }}
              onChange={search}
            />
            <div
              className="d-flex align-items-end"
              style={{ width: "20%", justifyContent: "flex-end" }}
            >
              <div
                style={{
                  marginRight: "30px",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Tab />

                {LoginName != null ? (
                  <Profile ProfileName={LoginName[0].FirstName} />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div
        className="Dashboard d-flex position-relative"
        style={{ height: "100vh", overflowY: "scroll" }}
      >
        <div className="filter-area m-2" style={{ width: "20%" }}>
          <div
            className="category"
            style={{
              float: "start",
              marginTop: 80,
              width: "100%",
              paddingLeft: "10px",
            }}
          >
            <FormGroup>
              <h5>Category</h5>

              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleCetegorySelect}
                    value="men's clothing"
                    checked={filterObj.cetegory.includes("men's clothing")}
                  ></Checkbox>
                }
                label="men's clothing"
              ></FormControlLabel>

              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleCetegorySelect}
                    value="women's clothing"
                    checked={filterObj.cetegory.includes("women's clothing")}
                  ></Checkbox>
                }
                label="women's clothing"
              ></FormControlLabel>

              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleCetegorySelect}
                    value="electronics"
                    checked={filterObj.cetegory.includes("electronics")}
                  ></Checkbox>
                }
                label="electronics"
              ></FormControlLabel>

              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleCetegorySelect}
                    value="jewelery"
                    checked={filterObj.cetegory.includes("jewelery")}
                  ></Checkbox>
                }
                label="jewelery"
              ></FormControlLabel>
            </FormGroup>
          </div>

          <div style={{ marginTop: "20px" }}>
            <h5> price Range</h5>

            <div
              style={{
                paddingLeft: 20,
                paddingRight: 20,
              }}
            >
              <Slider
                value={filterObj.price_range}
                onChange={rangeHandleChange}
                min={0}
                max={1000}
                valueLabelDisplay="auto"
              />
            </div>
          </div>

          <div style={{ marginTop: "20px" }}>
            <h5>Rating</h5>
            <Rating
              name="simple-controlled"
              value={filterObj.rating}
              onChange={rateHandleChange}
            />
          </div>

          <div>
            <Button
              onClick={() => {
                clearAllFilter();
              }}
            >
              clearFilter
            </Button>
          </div>
        </div>

        <div
          className="HomeDiv  d-flex flex-wrap"
          style={{
            width: "80%",
            background: "white",
            //  paddingLeft: "20px",
            //  paddingRight: "20px",
            paddingTop: "80px",
          }}
        >
          {filterProductList.length === 0 ? (
            <h4 style={{}}>Not available</h4>
          ) : (
            filterProductList &&
            filterProductList
              .filter((data) =>
                filterTitle !== ""
                  ? data.title.toLowerCase().includes(filterTitle.toLowerCase())
                  : data
              )
              .map((item) => (
                <Suspense
                  fallback={
                    <div>
                      <LazyloadingData />
                    </div>
                  }
                >
                  <Card
                    Title={item.title}
                    src={item.image}
                    Price={item.price}
                    Rating={item.rating.rate}
                    onClick={() => addItem(item)}
                    value={item.id}
                  />
                </Suspense>
              ))
          )}
        </div>

        <ToastContainer theme="colored" />
      </div>
      <footer className="bg-dark text-white text-center py-3 fixed-bottom-sticky">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DashBoard;
