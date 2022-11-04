import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxios from "../../../Hooks/useAxios";
import Navbar from "../../../layouts/backend/Navbar";
import Sidebar from "../../../layouts/backend/Sidebar";

const RejectedMerchants = () => {
  const axiosInstance = useAxios();
  const [loading, setLoading] = useState(false);
  const [merchant, setMerchant] = useState([]);
  const [displayMerChantData, setDisplayMerChantData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [call, setCall] = useState(true);
  const axios = useAxios();
  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get(`/user/all-user?status=Rejected&page=${page}`)
      .then((res) => {
        const allData = res.data?.user;
        const remainData = allData.filter((data) => data.status !== "Admin");
        setDisplayMerChantData(remainData);
        console.log(res);
        const count = res.data?.total;
        const pageNumber = Math.ceil(count / 10);
        setPageCount(pageNumber);
        setLoading(false);
      });
  }, [page, call]);

  const handleApprove = async (id) => {
    const proceed = window.confirm("Are you sure want to approve");
    if (proceed) {
      axios.patch(`/user/update/${id}`, { status: "Approved" }).then((data) => {
        setCall(!call);
      });
    }
  };

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
                        <th scope="col">Marchants Name</th>
                        <th scope="col">Shop Name</th>
                        <th scope="col">Balance</th>
                        <th scope="col">Contact Number</th>
                        <th scope="col">Updated At</th>

                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {displayMerChantData?.length === 0 && (
                        <p className="text-danger text-center">
                          No data found!
                        </p>
                      )}
                      {displayMerChantData &&
                        displayMerChantData?.map((data) => (
                          <tr key={data?.id}>
                            <td>{data?.id}</td>
                            <td>{data?.name}</td>

                            <td>{data.shopeName}</td>
                            <td>{data?.amount}</td>
                            <td>{data?.number}</td>
                            <td>
                              {new Date(data?.updatedAt).toLocaleDateString(
                                "en-GB"
                              )}
                            </td>

                            <td>{data.status}</td>
                            <td>
                              <div className="d-flex align-items-center text-center pending-button">
                                <Link to={`/admin/edit-merchant/${data?._id}`}>
                                  {" "}
                                  <button type="button" className="btn btn-success">
                                    Edit
                                  </button>
                                </Link>
                                <Link to={`/admin/view-merchant/${data?._id}`}>
                                  {" "}
                                  <button type="button" className="btn btn-primary">
                                    view
                                  </button>
                                </Link>

                                <button
                                  onClick={() => handleApprove(data._id)}
                                  type="button"
                                  className="btn btn-danger"
                                >
                                  Approve
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
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
                          page === pageCount
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

export default RejectedMerchants;
