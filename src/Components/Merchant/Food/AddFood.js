import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import Navbar from "../../../layouts/backend/Navbar";
import Sidebar from "../../../layouts/backend/Sidebar";
import { Link } from "react-router-dom";
import useAxios from "../../../Hooks/useAxios";

const AddFood = () => {
  const axiosInstance = useAxios();
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const form = useRef(null);
  const [discount, setDiscount] = useState(false);
  const [categoriesData, setCategoriesData] = useState([]);
  const [extraFood, setExtraFood] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(`/extra-food/`)
      .then((response) => {
        setExtraFood(response.data?.extraFood);
      })
      .catch((error) => { });
  }, []);
  useEffect(() => {
    axiosInstance
      .get(`/category/all-category`)
      .then((response) => {
        setCategoriesData(response.data?.categories);
      })
      .catch((error) => { });
  }, []);

  const discountChange = () => {
    setDiscount((discount) => !discount);
  };

  const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    setLoading(true);
    axiosInstance
      .post("/food/", formData)
      .then(function (response) {
        if (response.status === 200) {
          setErrors("");
          setData({});
          Toast.fire({
            icon: "success",
            title: "Food added successfull!!",
          });
        } else if (response.status === 400) {
          Toast.fire({
            icon: "error",
            title: response.data.msg,
          });
        }
        setLoading(false);
      })
      .catch((error) => {
        setData(error.response?.data.data);
        setErrors(error.response?.data.errors);
        setLoading(false);
      });
  };
  console.log(extraFood);
  return (
    <div>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <main className="pt-5 mt-5">
        <div className="container px-4">
          <div
            style={{ backgroundColor: "rgb(255, 90, 0, .6)" }}
            className="d-flex justify-content-between top-content align-items-center p-2"
          >
            <h3 style={{ color: "#640000" }}>Add New Food</h3>{" "}
          </div>
          <div className="card">
            {loading ? (
              <div className="text-center">
                <div
                  className="spinner-border text-center text-danger"
                  style={{ width: "13rem", height: "13rem" }}
                  role="status"
                >
                  <span className="sr-only text-danger">Loading...</span>
                </div>
              </div>
            ) : (
              <form
                method="post"
                encType="multipart/form-data"
                ref={form}
                onSubmit={submit}
                className="p-3"
              >
                <div className="row">
                  <div className="col-md-6 col-lg-6 col-sm-6 mb-3">
                    <label htmlFor="itemName">Item Name</label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue={data?.itemName}
                      name="itemName"
                      id="itemName"
                      placeholder="Enter Item Name"
                    />
                    <div style={{ color: "red" }}>
                      {errors?.itemName && errors?.itemName.msg}
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-sm-6 mb-3">
                    <label htmlFor="categoryName">Category Name</label>
                    <select
                      className="form-control"
                      name="categoryName"
                      id="categoryName"
                      defaultValue={data?.categoryName}
                    >
                      <option value="">Choose One</option>
                      {categoriesData.map(
                        (data) =>
                          data.status === "Active" && (
                            <option value={data.categoryName}>
                              {data.categoryName}
                            </option>
                          )
                      )}
                    </select>
                    <div style={{ color: "red" }}>
                      {errors?.categoryName && errors?.categoryName.msg}
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-4 mb-3">
                    <label htmlFor="quantity">Quantity</label>
                    <input
                      className="form-control"
                      type="number"
                      name="quantity"
                      id="quantity"
                      placeholder="Enter Quantity"
                    />
                    <div style={{ color: "red" }}>
                      {errors?.quantity && errors?.quantity.msg}
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 mb-3">
                    <label htmlFor="price">Price</label>
                    <input
                      className="form-control"
                      type="number"
                      name="withOutDiscountPrice"
                      defaultValue={data?.withOutDiscountPrice}
                      id="withOutDiscountPrice "
                      placeholder="Enter Price"
                    />
                    <div style={{ color: "red" }}>
                      {errors?.withOutDiscountPrice && errors?.withOutDiscountPrice.msg}
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-4 mb-3">
                    <label htmlFor="deliveryTime">Delivery Time</label>
                    <div className="input-group">
                      <input
                        id="deliveryTime"
                        type="number"
                        min="0"
                        name="deliveryTime"
                        defaultValue={data?.deliveryTime}
                        className="form-control"
                        aria-label="Dollar amount (with dot and two decimal places)"
                        placeholder="Enter Delivery Time"
                      />

                      {/* <span className="input-group-text">00:00 AM/PM</span> */}
                      <div style={{ color: "red" }}>
                        {errors?.deliveryTime && errors?.deliveryTime.msg}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <input
                    onChange={discountChange}
                    className="me-2"
                    type="checkbox"
                    name="hasDiscount"
                    id="discount"
                  />

                  <label htmlFor="discount">
                    <b>Discount</b>
                  </label>
                  {discount && (
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
                        <label htmlFor="discountType">Dicount Type</label>
                        <select
                          className="form-control"
                          name="discountType"
                          defaultValue={data?.discountType}
                          id="discountType"
                        >
                          <option value="0">Choose One</option>
                          <option value="1">Fixed</option>
                          <option value="2">Percentage</option>
                        </select>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
                        <label htmlFor="discountPrice">Dicount Price or Percentage</label>
                        <input
                          className="form-control"
                          type="number"
                          defaultValue={data?.discountPrice}
                          name="discountPrice"
                          id="discountPrice"
                          placeholder="00"
                        />
                      </div>
                    </div>
                  )}
                </div>
                <div className="col-md-6 col-lg-6 col-sm-6 mb-3">
                  <label htmlFor="categoryName">Select Extra Food</label>
                  <select
                    className="form-control"
                    name="extraFood"
                    id="extraFood"
                    defaultValue={data?.extraFood}
                  >
                    <option value="">Choose One</option>
                    {extraFood.map(
                      (data) =>
                      (
                        <option value={data._id}>
                          {data.itemName}
                        </option>
                      )
                    )}
                  </select>
                  <div style={{ color: "red" }}>
                    {errors?.categoryName && errors?.categoryName.msg}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 col-lg-12 col-sm-6 mb-3">
                    <label htmlFor="image">Image</label>
                    <input
                      className="form-control"
                      type="file"
                      name="image"
                      id="image"
                    />
                    <div style={{ color: "red" }}>
                      {errors?.image && errors?.image.msg}
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="shortDescription">Short Description</label>
                  <input
                    className="form-control"
                    type="text"
                    name="shortDescription"
                    id="shortDescription"
                    defaultValue={data?.shortDescription}
                    placeholder="Short Description"
                  />
                  <div style={{ color: "red" }}>
                    {errors?.shortDescription && errors?.shortDescription.msg}
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="longDescription">Long Description</label>
                  <textarea
                    className="form-control"
                    name="longDescription"
                    id="longDescription"
                    defaultValue={data?.longDescription} cols="30"
                    rows="5"
                    placeholder="Long Description"
                  ></textarea>
                  <div style={{ color: "red" }}>
                    {errors?.longDescription && errors?.longDescription.msg}
                  </div>
                </div>
                <button type="submit" className="btn btn-success px-5 mt-3">
                  Add
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddFood;
