import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";
import Navbar from "../../../layouts/backend/Navbar";
import Sidebar from "../../../layouts/backend/Sidebar";

const AddExtraItem = () => {
  const axiosInstance = useAxios();
  const [call, setCall] = useState(true);
  const form = useRef(null);
  const [foodData, setFoodData] = useState([]);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
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
    axiosInstance
      .get(`/extra-food/`)
      .then((response) => {
        console.log(response);
        setFoodData(response.data?.extraFood);
      })
      .catch((error) => {
        console.log(error);
      });


  }, [call]);

  const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);

    setLoading(true);
    axiosInstance
      .post("/extra-food", formData)
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          setErrors("");
          setData({});
          Toast.fire({
            icon: "success",
            title: "Extra Item added successfull!!",
          });
        } else if (response.status === 400) {
          Toast.fire({
            icon: "error",
            title: response.data.msg,
          });
        }
        setCall(!call);
        setLoading(false);
      })
      .catch((error) => {
        setData(error.response.data.data);
        setErrors(error.response.data.errors)
        setLoading(false);
      });
  };
  const handleDelete = async (id) => {
    const proceed = window.confirm("Are you sure want to delete");
    if (proceed) {
      axiosInstance
        .delete(`/extra-food/${id}`)
        .then((data) => {
          if (data?.data.success === true) {
            const remainFood = foodData.filter((food) => food._id !== id);
            setFoodData(remainFood);
          }
          setCall(!call);
        })
        .catch((error) => {
          console.log("ERROR", error);
        });
    }
  };

  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className="pt-5 mt-5">
        <div className="container px-4">
          <h4>Extra Item</h4>
          <div className="row">
            <div className="col-lg-4 col-md-4">
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
                <form ref={form} onSubmit={submit} className="mt-4">
                  <label htmlFor="itemName">Item Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name="itemName"
                    defaultValue={data?.itemName}
                    id="itemName"
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
                    defaultValue={data?.price}
                    placeholder="Enter Item Price"
                  />
                  <div style={{ color: "red" }}>
                    {errors?.itemName && errors?.price.msg}
                  </div>
                  <button className="btn common-color mt-2">
                    Add Extra Item
                  </button>
                </form>
              )}
            </div>
            <div className="col-lg-8 col-md-8">
              <div className="row">
                <div className="col-md-12 mb-3">
                  <div className="card">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table
                          id="example"
                          className="table table-bordered data-table"
                          style={{ width: "100%" }}
                        >
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Image</th>
                              <th>Price</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {foodData?.map((d) => (
                              <tr key={d.itemName}>
                                <td>{d.itemName}</td>
                                <td className="text-center rounded">
                                  <img
                                    src={`http://localhost:5000/public/uploads/${d.image}`}
                                    alt="img"
                                    width="40"
                                    height="40"
                                  />
                                </td>
                                <td>{d.price}</td>
                                <td className="d-flex align-items-center">
                                  <Link
                                    to={`/merchant/edit-extra-item/${d._id}`}
                                  >
                                    <i
                                      className="fas fa-edit me-2"
                                      style={{ color: "#660000" }}
                                    ></i>
                                  </Link>
                                  <button
                                    className="border-0 bg-light"
                                    onClick={() => handleDelete(d._id)}
                                  >
                                    <i className="fas fa-trash"></i>
                                  </button>
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
export default AddExtraItem;
