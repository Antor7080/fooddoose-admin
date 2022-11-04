import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxios from "../../../Hooks/useAxios";
import Navbar from "../../../layouts/backend/Navbar";
import Sidebar from "../../../layouts/backend/Sidebar";

const AllFood = () => {
  const [allFood, setAllFood] = useState([]);
  const [allDisplayFood, setAllDisplayFood] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [call, setCall] = useState(true);
  const axiosInstance = useAxios();
  const [modalData, setModalData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleModalData = (id) => {
    const data = allFood.filter((food) => food._id === id);
    setModalData(data[0]);

  };

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get(`/food/all?page=${page}`)
      .then((response) => {
        setAllFood(response.data?.allFoods);
        setAllDisplayFood(response.data?.allFoods);
        const count = response.data?.total;
        const pageNumber = Math.ceil(count / 50);
        setPageCount(pageNumber);
        setLoading(false)
      })
      .catch((error) => { });
    setLoading(false);
  }, [page, call]);

  const handleSearch = (e) => {
    const searchText = e.target.value;
    const matchedProducts = allFood.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setAllDisplayFood(matchedProducts);
  };

  const handleDelete = async (id) => {
    const proceed = window.confirm("Are you sure want to delete");
    if (proceed) {
      axiosInstance
        .delete(`/food/delete/${id}`)
        .then((data) => {
          if (data?.data.success === true) {
            const remainFood = allFood.filter((food) => food.id !== id);
            setAllFood(remainFood);
          }
          setCall(!call);
        })
        .catch((error) => {
        });
    }
  };
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className="pt-5 mt-5">
        <div className="container px-4">
          <h4>Food List</h4>
          <div className="card-body border rounded">
            <div className="d-flex justify-content-between table-top">
              <input
                className="form-control mb-3"
                style={{ width: "30%" }}
                type="text"
                name=""
                id=""
                onChange={handleSearch}
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
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead style={{ backgroundColor: "#ededed" }}>
                    <tr style={{ verticalAlign: "top" }}>

                      <th scope="col">Image</th>
                      <th scope="col">Food Item Name</th>
                      <th scope="col">Catgory Id</th>
                      <th scope="col">Price</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allDisplayFood?.length === 0 && (
                      <p className="text-danger text-center">No data found!</p>
                    )}
                    {allDisplayFood &&
                      allDisplayFood?.map((food) => (
                        <tr key={food.id}>
                          <td className="text-center">
                            <img
                              className="img-fluid text-center"
                              width={40}
                              src={`http://localhost:5000/public/uploads/${food.image}`}
                              alt=""
                            />
                          </td>
                          <td>{food?.itemName}</td>
                          <td>{food?.categoryName}</td>
                          <td>{food?.price}৳</td>
                          <td> {food?.status}</td>
                          <td style={{ minWidth: "100px" }}>
                            <Link to={`/merchant/all-food/edit/${food._id}`}>
                              <i
                                className="fas fa-edit"
                                style={{ color: "#660000" }}
                              ></i>
                            </Link>

                            <button
                              type="button"
                              className="btn modal-button m-0 p-0"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                              onClick={() => handleModalData(food?._id)}
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
                                      View Food
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
                                        <div className="col-md-4">
                                          <img
                                            src={`http://localhost:5000/public/uploads/${modalData?.image}`}
                                            className="img-fluid rounded-start"
                                            alt="..."
                                          />
                                        </div>
                                        <div className="col-md-8">
                                          <div className="card-body">
                                            <h5 className="card-title">
                                              {modalData?.itemName}
                                            </h5>
                                            <p className="card-text">
                                              {modalData?.shortDescription}
                                            </p>
                                            <p className="card-text">
                                              <small className="text-muted">
                                                {/* updated 3 mins ago */}
                                              </small>
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <button
                              className="border-0 bg-light"
                              onClick={() => handleDelete(food._id)}
                            >
                              {" "}
                              <i className="fas fa-trash text-danger"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
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
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AllFood;
