import React, { useEffect, useRef, useState } from "react";

import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import useAxios from "../../../Hooks/useAxios";
import Navbar from "../../../layouts/backend/Navbar";
import Sidebar from "../../../layouts/backend/Sidebar";

const UpdateProfile = (props) => {
  const { defaultLocation } = useAuth()
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
  const [prevData, setPrevData] = useState({})



  const axios = useAxios();
  const { id } = useParams();
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    axios.get(`/user/single-user-info/${user.id}`)
      .then((res) => {
        setPrevData(res.data)
      })
    // setDefaultLocation({ lat: res.data.latitude, lng: res.data.longitude })
  }, [])
  console.log(prevData);

  const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    // formData.append("latitude", defaultLocation.lat);
    // formData.append("longitude", defaultLocation.lng);
    setLoading(true);

    axios
      .put(`/user/update/${user.id}`, formData
      )
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          setErrors("");
          localStorage.setItem("user", JSON.stringify(response.data.updateUser));
          setPrevData(response.data.updateUser)
          Toast.fire({
            icon: "success",
            title: "Account update successfull!!",
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
                    Current Loaction: <b>{prevData?.address?.slice(0, 60)} </b>{" "}
                    <i className="fas fa-chevron-down"></i>{" "}
                  </small>{" "}
                </span>{" "}
              </div>



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
                multiple="multiple"
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
                      defaultValue={prevData?.name}
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
                      defaultValue={prevData?.shopName}
                      id="ahopName"
                      placeholder="Shop Name"
                    />
                    <div style={{ color: "red" }}>
                      {errors?.shopName && errors?.shopName.msg}
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
                    <label htmlFor="email">Email</label>
                    <input
                      disabled={true}
                      className="form-control"
                      type="email"
                      name="email"
                      id="email"
                      value={prevData?.email}
                      // placeholder={prevData?.email}
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
                      defaultValue={prevData?.number}
                      name="number"
                      id="number"
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
                      defaultValue={prevData?.openHour}
                      id="openHour"
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
                      defaultValue={prevData?.closeHour}
                      placeholder="Close hour"
                    />
                    <div style={{ color: "red" }}>
                      {errors?.closeHour && errors?.closeHour.msg}
                    </div>
                  </div>

          
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
                      multiple
                      className="form-control"
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
                  Update
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default UpdateProfile;
