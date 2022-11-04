import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Header";

const AllRider = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className="mt-5 pt-5">
        <div className="container px-4">
          <div className="d-flex justify-content-between top-content">
            <h4>All Rider</h4>{" "}
            <button className="btn btn-success mb-2">
              <Link to="/add-rider">Add Rider</Link>
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
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead style={{ backgroundColor: "#ededed" }}>
                  <tr>
                    <th><input type="checkbox" name="" id="" /></th>
                    <th scope="col">ID</th>
                    <th scope="col">Image</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">Area</th>
                    <th scope="col">Total Delivery</th>
                    <th scope="col">Total Salary</th>
                    <th scope="col">Joining Date</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th><input type="checkbox" name="" id="" /></th>
                    <th scope="row">1</th>
                    <td>Image</td>
                    <td>Rider Name</td>
                    <td>+01836288648</td>
                    <td>rider@gmail.com</td>
                    <td>Paltan, Dhaka</td>
                    <td className="text-center">130</td>
                    <td className="text-center">13000</td>
                    <td>Active</td>
                    <td>2021-12-25</td>
                    <td style={{ minWidth: "100px" }}>
                      <i
                        className="fas fa-edit"
                        style={{ color: "#660000" }}
                      ></i>
                      <i className="fas fa-eye mx-2"></i>
                      <i className="fas fa-trash text-danger"></i>
                    </td>
                  </tr>
                  <tr>
                    <th><input type="checkbox" name="" id="" /></th>
                    <th scope="row">1</th>
                    <td>Image</td>
                    <td>Rider Name</td>
                    <td>+01836288648</td>
                    <td>rider@gmail.com</td>
                    <td>Paltan, Dhaka</td>
                    <td className="text-center">130</td>
                    <td className="text-center">13000</td>
                    <td>Active</td>
                    <td>2021-12-25</td>
                    <td style={{ minWidth: "100px" }}>
                      <i
                        className="fas fa-edit"
                        style={{ color: "#660000" }}
                      ></i>
                      <i className="fas fa-eye mx-2"></i>
                      <i className="fas fa-trash text-danger"></i>
                    </td>
                  </tr>
                  <tr>
                    <th><input type="checkbox" name="" id="" /></th>
                    <th scope="row">1</th>
                    <td>Image</td>
                    <td>Rider Name</td>
                    <td>+01836288648</td>
                    <td>rider@gmail.com</td>
                    <td>Paltan, Dhaka</td>
                    <td className="text-center">130</td>
                    <td className="text-center">13000</td>
                    <td>Active</td>
                    <td>2021-12-25</td>
                    <td style={{ minWidth: "100px" }}>
                      <i
                        className="fas fa-edit"
                        style={{ color: "#660000" }}
                      ></i>
                      <i className="fas fa-eye mx-2"></i>
                      <i className="fas fa-trash text-danger"></i>
                    </td>
                  </tr>
                  <tr>
                    <th><input type="checkbox" name="" id="" /></th>
                    <th scope="row">1</th>
                    <td>Image</td>
                    <td>Rider Name</td>
                    <td>+01836288648</td>
                    <td>rider@gmail.com</td>
                    <td>Paltan, Dhaka</td>
                    <td className="text-center">130</td>
                    <td className="text-center">13000</td>
                    <td>Active</td>
                    <td>2021-12-25</td>
                    <td style={{ minWidth: "100px" }}>
                      <i
                        className="fas fa-edit"
                        style={{ color: "#660000" }}
                      ></i>
                      <i className="fas fa-eye mx-2"></i>
                      <i className="fas fa-trash text-danger"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AllRider;
