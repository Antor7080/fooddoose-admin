import axios from "axios";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import Navbar from "../../../layouts/backend/Navbar";
import Sidebar from "../../../layouts/backend/Sidebar";

import Maps2 from "../../Maps/Maps2";
const AddMerchants = (props) => {
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
  const [data, setData] = useState({});

  const { address, defaultLocation, setDefaultLocation } = useAuth()

  const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    formData.append("address", address)
    formData.append("latitude", defaultLocation.lat);
    formData.append("longitude", defaultLocation.lng);

    setLoading(true);
    axios
      .post("http://localhost:5000/user/register", formData)
      .then(function (response) {
        if (response.status === 200) {
          setErrors("");
          setData({});
          Toast.fire({
            icon: "success",
            title: "Account create successfull!!",
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
        setData(error.response.data.data);
        setErrors(error.response.data.errors);
        setLoading(false);
      });
  };

  function Location() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  function showPosition(position) {
    setDefaultLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
    console.log(position.coords);

  }

  return (
    <div onLoad={Location} >
      <Navbar />
      <Sidebar />
      <main className="mt-5 pt-5">
        <div className="container-fluid">
          <div
            style={{ backgroundColor: "rgb(255, 90, 0, .6)" }}
            className="d-flex justify-content-between top-content align-items-center p-2"
          >
            <h3 style={{ color: "#640000" }}>Add Merchants</h3>{" "}
            <button className="btn btn-success">
              <Link to="/admin/all-merchants">All Merchant</Link>
            </button>
          </div>
          <div className="card-body border rounded">
            <div className="border">
              <div
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className="btn"
              >
                <i
                  style={{ color: "#f37032" }}
                  className="fas fa-map-marker-alt"
                ></i>{" "}
                <span>
                  <small>
                    Current Loaction: <b>{address.slice(0, 60)} </b>{" "}
                    <i className="fas fa-chevron-down"></i>{" "}
                  </small>{" "}
                </span>{" "}
              </div>
              {/* MODAL LOCATION */}


              <div style={{ width: "180%" }}>
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">
                      <div className="d-flex justify-content-between">
                        <button
                          type="button"
                          className="btn-close text-end m-3"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                        <h2 className="fw-bold fd-primary-text pt-3 pe-5">
                          Choose Your Location
                        </h2>
                      </div>

                      <div
                        className="P-1 p-md-5 modal-body"
                        style={{ height: "70vh" }}
                      >
                        <Maps2></Maps2>
                        {/* <Maps2></Maps2> */}
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* MODAL LOCATION */}

            </div>
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
                  Merchant <span style={{ color: "#640000" }}>Information</span>
                </h4>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
                    <label htmlFor="mName">Merchant Name</label>
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      id="mName"
                      defaultValue={data?.name}
                      placeholder="Merchant Name"
                    />
                    <div style={{ color: "red" }}>
                      {errors?.name && errors?.name.msg}
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
                    <label htmlFor="shopName">Shop Name</label>
                    <input
                      className="form-control"
                      type="text"
                      name="shopName"
                      id="ahopName"
                      defaultValue={data?.shopName}
                      placeholder="Shop Name"
                    />
                    <div style={{ color: "red" }}>
                      {errors?.shopName && errors?.shopName.msg}
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
                    <label htmlFor="email">Email</label>
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      id="email"
                      defaultValue={data?.email}
                      placeholder="Email"
                    />
                    <div style={{ color: "red" }}>
                      {errors?.email && errors?.email.msg}
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
                    <label htmlFor="number">Number</label>
                    <input
                      className="form-control"
                      type="text"
                      name="number"
                      id="number"
                      defaultValue={data?.number}
                      placeholder="Number"
                    />
                    <div style={{ color: "red" }}>
                      {errors?.number && errors?.number.msg}
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
                    <label htmlFor="openHour">Open Hour</label>
                    <input
                      className="form-control"
                      type="time"
                      name="openHour"
                      id="openHour"
                      defaultValue={data?.openHour}
                      placeholder="Open hour"
                    />
                    <div style={{ color: "red" }}>
                      {errors?.openHour && errors?.openHour.msg}
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
                    <label htmlFor="closeHour">Close Hour</label>
                    <input
                      className="form-control"
                      type="time"
                      name="closeHour"
                      id="closeHour"
                      defaultValue={data?.closeHour}
                      placeholder="Close hour"
                    />
                    <div style={{ color: "red" }}>
                      {errors?.closeHour && errors?.closeHour.msg}
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
                    <label htmlFor="password">Password</label>
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      id="password"
                      defaultValue={data?.password}
                      placeholder="Password"
                    />
                    <div style={{ color: "red" }}>
                      {errors?.password && errors?.password.msg}
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                      className="form-control"
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      defaultValue={data?.confirmPassword}
                      placeholder="Confirm Password"
                    />

                    <div style={{ color: "red" }}>
                      {errors?.confirmPassword && errors?.confirmPassword.msg}
                    </div>
                  </div>
                  <input
                    className="form-control"
                    hidden
                    type="number"
                    name="role"
                    id="role"
                    defaultValue="2"
                  />
                  <input
                    className="form-control"
                    hidden
                    type="text"
                    name="status"
                    id="status"
                    defaultValue="Pending"
                  />
                  <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
                    <label htmlFor="image">Upload Shop Image</label>
                    <input
                      multiple
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
                    <label htmlFor="logo">Upload Logo</label>
                    <input
                      className="form-control"
                      multiple
                      type="file"
                      name="logo"
                      id="logo"
                      placeholder="Logo"
                    />
                    <div style={{ color: "red" }}>
                      {errors?.logo && errors?.logo.msg}
                    </div>
                  </div>
                </div>
                <button className="btn btn-success mt-2 common-color">
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

export default AddMerchants;
