import React, { useState } from "react";
import { Link } from "react-router-dom";
import GetMerChant from "../../../Hooks/GetMerChant";
import useAxios from "../../../Hooks/useAxios";
import Navbar from "../../../layouts/backend/Navbar";
import Sidebar from "../../../layouts/backend/Sidebar";
import UpdateMerchantModal from "./UpdateMerchantModal";

const AllMerchants = () => {
  const axiosInstance = useAxios();
  // const [call, setCall] = useState(true);
  const { merchant, page = 1, setPage, pageCount, loading, call, setCall } = GetMerChant("Approved");
  const [data, setData] = useState({});
  const handleDelete = async (id) => {
    axiosInstance.get(`/user/single-user-info/${id}`).then((res) => {
      setData(res.data);
    });
  }
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className="mt-5 pt-5">
        <div className="container px-4">
          <div className="d-flex justify-content-between top-content">
            <h4>All Merchants</h4>{" "}
            <button className="btn btn-success mb-2">
              <Link to="/admin/add-merchants">Add Merchant</Link>
            </button>
          </div>
          <div className="card-body border rounded">
            <div className="d-flex justify-content-between table-top">
              <input
                className="form-control mb-3"
                style={{ width: "30%" }}
                type="text"
                name=""
                id=""
                placeholder="Search"
              />

              <div
                className="btn-group mb-3"
                role="group"
                aria-label="Basic example"
              >
                <button type="button" className="btn btn-success">
                  Copy
                </button>
                <button type="button" className="btn btn-success">
                  CSV
                </button>
                <button type="button" className="btn btn-success">
                  Excel
                </button>
                <button type="button" className="btn btn-success">
                  PDF
                </button>
                <button type="button" className="btn btn-success">
                  Print
                </button>
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
              <div className=" card table-responsive">
                <div className="table-responsive">
                  <table className="table table-bordered text-center">
                    <thead style={{ backgroundColor: "#ededed" }}>
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Shop</th>
                        <th scope="col">Balance</th>
                        <th scope="col">Contact Number</th>
                        <th scope="col">Updated At</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {merchant?.length === 0 && (
                        <p className="text-danger text-center">
                          No data found!
                        </p>
                      )}
                      {merchant &&
                        merchant?.map((data) => (
                          <tr key={data?.id}>
                            <td>{data?.id}</td>
                            <td>{data?.name}</td>
                            <td>{data.shopName}</td>
                            <td>{data?.amount}</td>
                            <td>{data?.number}</td>
                            <td>
                              {new Date(data?.updatedAt).toLocaleDateString(
                                "en-GB"
                              )}
                            </td>

                            <td>{data.status}</td>
                            <td>
                              <div className="d-flex align-items-center justify-content-around text-center pending-button">
                              {/*   <Link to={`/admin/edit-merchant/${data?._id}`}>
                                  {" "}
                                  <button type="button" className="btn btn-success">
                                    Edit
                                  </button>
                                </Link> */}
                                <Link to={`/admin/view-merchant/${data?._id}`}>
                                  {" "}
                                  <button type="button" className="btn btn-primary">
                                    view
                                  </button>
                                </Link>

                                <button

                                  type="button"
                                  className="btn btn-danger"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal2"
                                  onClick={() => handleDelete(data?._id)}
                                >
                                  Delete
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                  <UpdateMerchantModal data={data} call={call} setCall={setCall}></UpdateMerchantModal>
                </div>

                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <a
                        type="button"
                        onClick={() => setPage(page - 1)}
                        className={
                          page === 1
                            ? "page-link btn disabled"
                            : "page-link btn"
                        }
                        href
                      >
                        Previous
                      </a>
                    </li>

                    {[...Array(pageCount).keys()].map((number) => (
                      <li className="page-item" key={number}>
                        <button
                          onClick={() => setPage(number + 1)}
                          className={
                            page === number + 1
                              ? " btn pagination-btn btn-success"
                              : "page-link btn pagination-btn"
                          }
                        >
                          {number + 1}
                        </button>
                      </li>
                    ))}

                    <li className="page-item">
                      <a
                        onClick={() => setPage(page + 1)}
                        className={
                          (pageCount === 1) || (pageCount === 0)
                            ? "page-link btn disabled"
                            : "page-link btn"
                        }
                        href
                      >
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>

              </div>

            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AllMerchants;
