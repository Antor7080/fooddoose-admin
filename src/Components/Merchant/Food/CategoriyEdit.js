import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";
import useAxios from "../../../Hooks/useAxios";
import Swal from "sweetalert2";

const CategoriyEdit = () => {
  const history = useHistory();
  const { id } = useParams();
  const [categoryData, setCategoryData] = useState({});
  const axiosInstance = useAxios();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const form = useRef(null);
  const [data, setData] = useState({});

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

  useEffect(() => {
    axiosInstance.get(`category/single-category/${id}`).then((res) => {
      if (res.status === 200) {
        setCategoryData(res.data?.category);
      }
    });
  }, []);

  const updateCategory = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    formData.append("w", 700)
    formData.append("h", 700)
    console.log(formData.get("status"));
    setLoading(true);
    axiosInstance
      .put(`/category/update/${categoryData._id}`, formData)
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
          <h4>Category</h4>
          <p>Edit Category</p>
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
              onSubmit={updateCategory}
              className="mt-4"
            >
              <label htmlFor="categoryName">Category Name</label>
              <input
                className="form-control"
                type="text"
                name="categoryName"
                id="categoryName"
                defaultValue={categoryData?.categoryName}
                aria-describedby="categoryName"
              />
              <div style={{ color: "red" }}>
                {errors?.categoryName && errors?.categoryName.msg}
              </div>
              <div id="name" className="form-text mb-3">
                The name is how it appears on your site.
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
              <label htmlFor="status">Status</label>
              <select className="form-control" name="status" id="status">
                <option value="">Choose One</option>
                {categoryData?.status === "Active" ? (
                  <option value="Active" selected>
                    Active
                  </option>
                ) : (
                  <option value="Active">Active</option>
                )}
                {categoryData?.status === "Inactive" ? (
                  <option value="Inactive" selected>
                    Inactive
                  </option>
                ) : (
                  <option value="Inactive">Inactive</option>
                )}
              </select>
              <div style={{ color: "red" }}>
                {errors?.categoryName && errors?.categoryName.msg}
              </div>
              <button type="submit" className="btn btn-primary my-3">
                Update Category
              </button>
            </form>
          )}
        </div>
      </main>
    </div>
  );
};

export default CategoriyEdit;
