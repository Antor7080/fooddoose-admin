
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";
import Navbar from "../../../layouts/backend/Navbar";
import Sidebar from "../../../layouts/backend/Sidebar";

const AddBanner = (props) => {
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
  const form = useRef(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const axiosInstance = useAxios();

  const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    formData.append("w", 800);
    formData.append("h", 300);
    setLoading(true);
    axiosInstance
      .post("/banner/add-banner", formData)
      .then(function (response) {
        if (response.status === 200) {
          setErrors("");
          Toast.fire({
            icon: "success",
            title: "Banner added successfull!!",
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
        console.log(error);
        setErrors(error.response.data.errors);
        setLoading(false);
      });
  };

  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className="mt-5 pt-5">
        <div className="container-fluid">
          <div
            style={{ backgroundColor: "rgb(255, 90, 0, .6)" }}
            className="d-flex justify-content-between top-content align-items-center p-2"
          >
            <h3 style={{ color: "#640000" }}>Add Banner</h3>{" "}
          </div>
          <div className="card-body border rounded">
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
                ref={form}
                onSubmit={submit}
                className="add-merchant"
                encType="multipart/form-data"
              >
                <h4 className="text-success mt-2 mb-3">
                  Banner <span style={{ color: "#640000" }}>Information</span>
                </h4>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
                    <label htmlFor="image">Upload Banner Image</label>
                    <input
                      className="form-control"
                      type="file"
                      name="image"
                      id="image"
                      placeholder="Image"
                    />
                    <div style={{ color: "red" }}>
                      {errors?.image && errors?.image.msg}
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
                    <label htmlFor="status">Select Status</label>
                    <select id="status" className="form-control" name="status">
                      <option value="Active">Active</option>
                      <option value="Deactive">Deactive</option>
                    </select>
                    <div style={{ color: "red" }}>
                      {errors?.status && errors?.status.msg}
                    </div>
                  </div>
                </div>
                <button className="btn btn-success mt-2 common-color">
                  Add Banner
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddBanner;
