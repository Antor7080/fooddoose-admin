import axios from "axios";
import React, { useState, useRef } from "react";
import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import refresh from "../../../Hooks/refreshToken";
import useAxios from "../../../Hooks/useAxios";
import nphoto from "../../../images/nphoto.png";
import Swal from "sweetalert2";


const EditBanner = () => {
  const form = useRef(null);
  const { id } = useParams();
  const history = useHistory();
  const [data, setData] = useState({});
  const [banner, setBanner] = useState({});
  const authAxios = useAxios();

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

  useEffect(() => {
    authAxios
      .get(`/banner/single-banner/${id}`)
      .then((response) => {
        setBanner(response.data?.banner);
      })
      .catch((error) => { });
  }, []);

  const updateBanner = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    formData.append("w", 800);
    formData.append("h", 300);
    setLoading(true);
    authAxios
      .put(`/banner/update/${banner._id}`, formData)
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
      <main className="pt-5 mt-5">
        <div className="container px-4">
          <h4>Banner</h4>
          <p>Edit Banner</p>
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
              onSubmit={updateBanner}

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
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
                  <label htmlFor="status">Select Status</label>
                  <select id="status" className="form-control" name="status">
                    {banner?.status === "Active" ? (
                      <option value="Active" selected>
                        Active
                      </option>
                    ) : (
                      <option value="Active">Active</option>
                    )}
                    {banner?.status === "Deactive" ? (
                      <option value="Deactive" selected>
                        Deactive
                      </option>
                    ) : (
                      <option value="Deactive">Deactive</option>
                    )}
                  </select>
                </div>
              </div>
              <button className="btn btn-success mt-2 common-color">
                Update Banner
              </button>
            </form>
          )}
        </div>
      </main>
    </div>
  );
};

export default EditBanner;
