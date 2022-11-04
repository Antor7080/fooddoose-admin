import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAxios from "../../../Hooks/useAxios";
import Navbar from "../../../layouts/backend/Navbar";
import Sidebar from "../../../layouts/backend/Sidebar";

const PendingOrderMerchant = () => {
  const axiosInstance = useAxios();
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [call, setCall] = useState(false);

  useEffect(() => {
    setLoading(true);
    axiosInstance.get(`/order/merchant-order/?page=${page}&status=Pending`).then((res) => {
      console.log(res.data);
      const allData = res.data?.orders;
      const count = res.data?.total;
      const pageNumber = Math.ceil(count / 50);
      setPageCount(pageNumber);
      setLoading(false)
      setOrder(allData);
      setLoading(false);
    });
    // eslint-disable-neaxt-line react-hooks/exhaustive-deps
  }, [page, call]);

  const handleStatus = (id, status) => {
    axiosInstance.put(`/order/upadte/${id}`, { status }).then((res) => {
      console.log(res)
    });
    setCall(!call);
  };
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className="mt-5 pt-5">
        <div className="container-fluid">
          <div className="d-flex justify-content-between top-content">
            <h4>All Order page section</h4>{" "}
          </div>
          {
            loading ? <div className="text-center">Loading...</div> : <div className="card-body border rounded">
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
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead style={{ backgroundColor: "#ededed" }}>
                    <tr style={{ verticalAlign: "top", textAlign: "center" }}>

                      <th scope="col">ID</th>
                      <th scope="col">Name</th>
                      <th scope="col">Restaurant</th>
                      <th scope="col">Number</th>
                      <th scope="col">Total</th>
                      <th scope="col">Price</th>
                      <th scope="col">Delivery</th>
                      <th scope="col">Location</th>
                      <th scope="col">Comments</th>
                      <th scope="col">Payment</th>
                      <th scope="col">Date</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order?.map((data) => {
                      return (
                        <tr>
                          <th scope="row">{data?.orderId}</th>
                          <td>{data?.name}</td>
                          <td>{data?.items[0]?.shopName}</td>
                          <td>{data?.phone}</td>
                          <td>
                            {parseInt(data?.cartTotal) +
                              parseInt(data?.deliveryCost)}
                          </td>
                          <td>{data?.cartTotal}</td>
                          <td>{data?.deliveryCost}</td>
                          <td>{data?.address}</td>
                          <td>{data?.message}</td>

                          <td>Cash on delivery</td>
                          <td>
                            {new Date(data.createdAt).toLocaleDateString("en-GB")}
                          </td>
                          <td>{data.status}</td>
                          <td className="d-flex justify-content-center align-items-center">
                            <button
                              onClick={() => handleStatus(data?._id, "Processing")}
                              className="btn btn-primary"
                            >
                              Approve
                            </button>
                            <Link to={`/order-details/${data._id}`}>
                              <button className="btn btn-secondary">View</button>
                            </Link>

                            <button
                              onClick={() => handleStatus(data?._id, "Cancelled")}
                              className="btn btn-danger"
                            >
                              Reject
                            </button>
                            {/*    <button
                          onClick={() => handleStatus(data?._id, "Completed")}
                          className="btn btn-primary"
                        >
                          Complete
                        </button> */}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
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
            </div>
          }
        </div>
      </main>
    </div>
  );
};

export default PendingOrderMerchant;