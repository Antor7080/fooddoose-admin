import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxios from "../../../Hooks/useAxios";
import Navbar from "../../../layouts/backend/Navbar";
import Sidebar from "../../../layouts/backend/Sidebar";

const AllBanner = () => {
  const [allBanner, setAllBanner] = useState([]);

  const [page, setPage] = useState(1);

  const [call, setCall] = useState(true);
  const [modalData, setModalData] = useState({});
  const [loading, setLoading] = useState(false);
  const authAxios = useAxios();

  const handleModalData = (id) => {
    const data = allBanner.filter((food) => food._id === id);
    setModalData(data[0]);
    console.log(modalData);
  };

  useEffect(() => {
    setLoading(true);
    authAxios.get(`/banner/admin-banner?page=${page}`)
      .then((response) => {

        setAllBanner(response.data?.banner);
        setLoading(false);
      })
      .catch((error) => { });

  }, [page, call]);

  console.log(allBanner)
  const handleDelete = async (id) => {
    const proceed = window.confirm("Are you sure want to delete");
    if (proceed) {
      authAxios
        .delete(`/banner/delete/${id}`)
        .then((data) => {
          /*  if (data?.data.success === true) {
             const remainFood = allBanner.filter((food) => food.id !== id);
             setAllBanner(remainFood);
           } */
          setCall(!call);
        })
        .catch((error) => { });
    }
  };
  const handleStatus = async (id, status) => {
    const proceed = window.confirm("Are you sure want to deactive");
    if (proceed) {
      authAxios
        .put(`/banner/status-update/${id}`, { status })
        .then((data) => {
          /*  if (data?.data.success === true) {
             const remainFood = allBanner.filter((food) => food.id !== id);
             setAllBanner(remainFood);
           } */
          setCall(!call);
        })
        .catch((error) => { });
    }
  };
  console.log(loading)
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className="pt-5 mt-5">
        <div className="container px-4">
          <h4>Banner List</h4>
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

              <div className="table-responsive">
                {/* {
                <div className="row g-3">
                  {allBanner?.map((banner) => (<div className="col-6 col-lg-3 col-md-4">
                    <div className="card h-100">
                      <div className="card-body">

                        <img className="img-flui w-100 h-100" src={`http://localhost:5000/public/uploads/${banner.image}`} alt="" srcset="" />

                      </div>
                      <div className="card-foote p-3">
                        <h5 className="text-center">{banner.status}</h5>
                        <div className="d-flex align-items-center justify-content-around" style={{ minWidth: "100px" }}>

                          {
                            (banner?.status === "Active" || banner?.status === "true") ? (<button title="Deactive" className="btn btn-warning" onClick={() => { handleStatus(banner._id) }}>
                              <i
                                className="bi bi-toggle-on"
                                style={{ color: "#660000" }}
                              ></i>
                            </button>
                            ) : (
                              <div><button className="btn btn-secondary" disabled="disabled">
                                <i
                                  className="bi bi-toggle-on"
                                  style={{ color: "#660000" }}
                                ></i> </button></div>
                            )
                          }

                          <button
                            type="button"
                            title="View Image"
                            className="btn btn-success modal-button"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            onClick={() => handleModalData(banner?._id)}
                          >
                            <i className="fas fa-eye mx-2"></i>
                          </button>

                          <div
                            className="modal fade"
                            id="exampleModal"
                            tabIndex="-1"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog  modal-dialog-centered modal-lg">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5
                                    className="modal-title"
                                    id="exampleModalLabel"
                                  >

                                  </h5>
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  ></button>
                                </div>
                                <div className="modal-body">
                                  <div
                                    className="card mb-3"
                                    style={{ maxWidth: "100%" }}
                                  >
                                    <div className="row g-0">
                                      <div className="">
                                        <img
                                          src={`http://localhost:5000/public/uploads/${modalData?.image}`}
                                          className="img-fluid "
                                          alt="..."
                                        />
                                      </div>

                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <button
                            title="Delete"
                            className="btn btn-danger"
                            onClick={() => handleDelete(banner._id)}
                          >
                            {" "}
                            <i className="fas fa-trash text-light"></i>
                          </button>


                        </div>
                      </div>
                    </div>
                  </div>)
                  )}
                </div>
} */}
                <div className="row">
                  <div className="col-6 col-lg-3 col-md-4">
                  </div>
                </div>
                <table className="table table-bordered text-center">
                  <thead style={{ backgroundColor: "#ededed" }}>
                    <tr style={{ verticalAlign: "top" }}>
                      <th scope="col">Image</th>

                      <th scope="col">Status</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody >
                    {allBanner?.length === 0 && (
                      <p className="text-danger  text-center">No data found!</p>
                    )}
                    {allBanner &&
                      allBanner?.map((data) => (
                        <tr key={data._id}>

                          <td>
                            <img
                              width={150}
                              src={`http://localhost:5000/public/uploads/${data.image}`}
                              alt=""
                            />
                          </td>

                          <td>{data?.status}</td>
                          <td className="d-flex align-items-center justify-content-around" style={{ minWidth: "100px" }}>
                            <button title="Deactive" className="btn btn-warning" onClick={() => { handleStatus(data._id, "Active") }}>
                              <i
                                className="bi bi-toggle-on"
                                style={{ color: "#660000" }}
                              ></i> Active
                            </button>
                            {
                              (data?.status === "Active" || data?.status === "true") ? (<button title="Deactive" className="btn btn-warning" onClick={() => { handleStatus(data._id, "Deactivate") }}>
                                <i
                                  className="bi bi-toggle-on"
                                  style={{ color: "#660000" }}
                                ></i> Deactivate
                              </button>
                              ) : (
                                <div><button className="btn btn-secondary" disabled="disabled">
                                  <i
                                    className="bi bi-toggle-on"
                                    style={{ color: "#660000" }}
                                  ></i> Deactivate</button></div>
                              )
                            }
                            {/* <i className="bi bi-toggle-on"></i> */}
                            <button
                              type="button"
                              title="View Image"
                              className="btn btn-success modal-button"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                              onClick={() => handleModalData(data?._id)}
                            >
                              <i className="fas fa-eye mx-2"></i>View
                            </button>

                            <div
                              className="modal fade"
                              id="exampleModal"
                              tabIndex="-1"
                              aria-labelledby="exampleModalLabel"
                              aria-hidden="true"
                            >
                              <div className="modal-dialog  modal-dialog-centered modal-lg">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h5
                                      className="modal-title"
                                      id="exampleModalLabel"
                                    >
                                      View Banner
                                    </h5>
                                    <button
                                      type="button"
                                      className="btn-close"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                    ></button>
                                  </div>
                                  <div className="modal-body">
                                    <div
                                      className="card mb-3"
                                      style={{ maxWidth: "100%" }}
                                    >
                                      <div className="row g-0">
                                        <div className="">
                                          <img
                                            src={`http://localhost:5000/public/uploads/${modalData?.image}`}
                                            className="img-fluid "
                                            alt="..."
                                          />
                                        </div>

                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <button
                              title="Delete"
                              className="btn btn-danger"
                              onClick={() => handleDelete(data._id)}
                            >
                              {" "}
                              <i className="fas fa-trash text-danger"></i>Delate
                            </button>


                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AllBanner;
