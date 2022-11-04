import React, { useState, useRef } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import useAxios from "../../../Hooks/useAxios";
import Swal from "sweetalert2";

const EditAllFood = () => {
  const form = useRef(null);
  const { id } = useParams();
  const history = useHistory();
  const [data, setData] = useState({});
  const [categoryInput, setCategory] = useState([]);
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
  const [fetchData, setFetchData] = useState({});
  const [discount, setDiscount] = useState(false);
  const [categoriesData, setCategoriesData] = useState([]);
  const [extraFood, setExtraFood] = useState([]);

  const discountChange = () => {
    setDiscount((discount) => !discount);
  };

  useEffect(() => {
    axiosInstance
      .get(`/food/single-item/${id}`)
      .then((response) => {
        setFetchData(response?.data.food);
      })
      .catch((error) => { });

    axiosInstance
      .get(`/category/all-category`)
      .then((response) => {
        setCategoriesData(response.data?.categories);
      })
      .catch((error) => { });
  }, []);
  useEffect(() => {
    axiosInstance
      .get(`/extra-food/`)
      .then((response) => {
        setExtraFood(response.data?.extraFood);
      })
      .catch((error) => { });
  }, []);
  const updateFood = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    //console(formData.get("itemName"));
    setLoading(true);
    axiosInstance
      .put(`/food/update/${fetchData._id}`, formData)
      .then(function (response) {
        if (response.status === 200 || response.status === 201) {
          setErrors("");
          setData({});
          Toast.fire({
            icon: "success",
            title: "Updated successfull!!",
          });
          history.goBack();
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

  return (
    <div>
      <main className="pt-5 mt-5">
        <div className="container px-4">
          <h4>Food</h4>
          <p>Edit Food</p>
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
              // method="post"
              encType="multipart/form-data"
              ref={form}
              onSubmit={updateFood}
              className="p-3"
            >
              <div className="row">
                <div className="col-md-6 col-lg-6 col-sm-6 mb-3">
                  <label htmlFor="itemName">Item Name</label>
                  <input
                    className="form-control"
                    type="text"
                    defaultValue={fetchData?.itemName}
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
                    defaultValue={fetchData?.categoryName}
                  >
                    <option value={fetchData?.categoryName}>{fetchData?.categoryName}</option>
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
                    defaultValue={fetchData?.quantity}
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
                    defaultValue={fetchData?.withOutDiscountPrice}
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
                      defaultValue={fetchData?.deliveryTime}
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
                        defaultValue={fetchData?.discountType}
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
                        defaultValue={fetchData?.discountPrice}
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
                  defaultValue={fetchData?.extraFood?._id}
                >
                  <option value={fetchData?.extraFood?._id}>{fetchData?.extraFood?.itemName}</option>
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
                  {errors?.extraFood && errors?.extraFood.msg}
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
                  defaultValue={fetchData?.shortDescription}
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
                  defaultValue={fetchData?.longDescription} cols="30"
                  rows="5"
                  placeholder="Long Description"
                ></textarea>
                <div style={{ color: "red" }}>
                  {errors?.longDescription && errors?.longDescription.msg}
                </div>
              </div>
              <label htmlFor="status">Status</label>
              <select className="form-control" name="status" id="status">
                <option defaultValue={fetchData?.status}>{fetchData?.status}</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
              <button type="submit" className="btn btn-success px-5 mt-3">
                Update
              </button>
            </form>
          )}
        </div>
      </main>
    </div>
  );
};

export default EditAllFood;
