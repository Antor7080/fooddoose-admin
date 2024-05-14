
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";

const Categories = () => {
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

  const [call, setCall] = useState(true);
  const [categoriesData, setCategoriesData] = useState([]);


  useEffect(() => {
    axiosInstance
      .get(`/category/all-category`)
      .then((response) => {
        setCategoriesData(response.data?.categories);
      })
      .catch((error) => { });
  }, [call, loading]);

  const handleDelete = async (id) => {
    const proceed = window.confirm("Are you sure want to delete");
    if (proceed) {
      axiosInstance
        .delete(`/category/delete/${id}`)
        .then((data) => {
          if (data?.data.success === true) {
            const remainFood = categoriesData.filter((food) => food.id !== id);
            setCategoriesData(remainFood);
          }
          setCall(!call);
        })
        .catch((error) => {
          console.log("ERROR", error);
        });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    formData.append("w", 700)
    formData.append("h", 700)
    setLoading(true);
    axiosInstance
      .post("/category/new-category", formData)
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          setErrors("");
          setData({});
          Toast.fire({
            icon: "success",
            title: "Category added successfull!!",
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
    setCall(!call);
  };
  return (
    <div>
      <main className="pt-5 mt-5">
        <div className="container px-4">
          <h4>Categories</h4>
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <p>Add New Category</p>
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
                  encType="multipart/form-data"
                  ref={form}
                  onSubmit={handleSubmit}
                  className="mt-4"
                >
                  <label htmlFor="categoryName">Category Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name="categoryName"
                    defaultValue={data?.categoryName}
                    id="categoryName"
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
                    defultFile={data.image}
                    id="image"
                  />
                  <div style={{ color: "red" }}>
                    {errors?.image && errors?.image.msg}
                  </div>
                  <label htmlFor="status">Status</label>
                  <select defaultValue={data.status} className="form-control" name="status" id="status">
                    <option>Choose One</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                  <div style={{ color: "red" }}>
                    {errors?.status && errors?.status.msg}
                  </div>
                  <button type="submit" className="btn btn-primary my-3">
                    Add Category
                  </button>
                </form>
              )}
            </div>
            <div className="col-lg-8 col-md-8">
              <div className="row">
                <div className="card">
                  <div className="col-md-12 mb-3">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table
                          id="example"
                          className="table table-bordered data-table"
                          style={{ width: "100%" }}
                        >
                          <thead>
                            <tr>
                              <th>Category Name</th>
                              <th>Status</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {categoriesData.map((d) => (
                              <tr key={d?.categoryName}>
                                <td>{d?.categoryName}</td>
                                <td>{d?.status}</td>
                                <td>
                                  <div className="d-flex justify-content-between action-icon">
                                    <Link
                                      to={`/merchant/categories/edit/${d._id}`}
                                    >
                                      {" "}
                                      <i className="fas fa-edit"></i>
                                    </Link>
                                    <button
                                      className="border-0 bg-light"
                                      onClick={() => handleDelete(d._id)}
                                    >
                                      <i className="fas fa-trash"></i>
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Categories;
