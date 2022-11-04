import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import useAxios from "../../../Hooks/useAxios";
import Navbar from "../../../layouts/backend/Navbar";
import Sidebar from "../../../layouts/backend/Sidebar";
import Swal from "sweetalert2";

const AddExtraItem = () => {
  const form = useRef(null);
  const { id } = useParams();
  const history = useHistory();
  const [data, setData] = useState({});
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

  useEffect(() => {
    async function fetchData() {
      axiosInstance
        .get(`/food/extra-foods-single-item/${id}`)
        .then((response) => {
          setFetchData(response?.data.food);
        })
        .catch((error) => { });
    }
    fetchData();
  }, []);

  const updateFood = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    setLoading(true);
    axiosInstance
      .put(`/food/update-extra-food/${fetchData._id}`, formData)
      .then(function (response) {
        console.log(response);
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
      <Navbar />
      <Sidebar />
      <main className="pt-5 mt-5">
        <div className="container px-4">
          <h4>Extra Item</h4>
          <div className="col-lg-6 col-md-6 m-auto card p-3 shadow">
            <p>Add Extra Item</p>
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
              <form ref={form} onSubmit={updateFood} className="mt-4">
                <label htmlFor="itemName">Item Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="itemName"
                  id="itemName"
                  defaultValue={fetchData.itemName}
                  placeholder="Enter Item Name"
                />
                <div style={{ color: "red" }}>
                  {errors?.itemName && errors?.itemName.msg}
                </div>
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
                <label htmlFor="price">Item Price</label>
                <input
                  className="form-control"
                  type="number"
                  name="price"
                  id="price"
                  defaultValue={fetchData.price}
                  placeholder="Enter Item Price"
                />
                <div style={{ color: "red" }}>
                  {errors?.itemName && errors?.price.msg}
                </div>
                <button className="btn common-color mt-2">Update</button>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};
export default AddExtraItem;
