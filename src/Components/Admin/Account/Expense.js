import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../layouts/backend/Navbar';
import Sidebar from '../../../layouts/backend/Sidebar';

const Expense = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className="mt-5 pt-5">
        <div className="container-fluid">
          <div className="d-flex justify-content-between top-content">
            <h4>Expense Page Section</h4>{" "}

            <Link to="/add-expense"><button type="submit" className="btn btn-success">Add Expense Page</button></Link>
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
                    <th scope="col">
                      <input
                        className="form-check-input mt-0"
                        type="checkbox"
                        value=""
                        aria-label="Checkbox for following text input"
                      />
                    </th>
                    <th scope="col">Order ID</th>
                    <th scope="col"> way</th>
                    <th scope="col">Vendor</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Income Date</th>
                    <th scope="col">Created At</th>
                    <th scope="col">Update At</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>

                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="col">
                      <input
                        className="form-check-input mt-0"
                        type="checkbox"
                        value=""
                        aria-label="Checkbox for following text input"
                      />
                    </th>
                    <th scope="row">01</th>
                    <td>Billal Farabi</td>
                    <td>Hotel seraton</td>
                    <td>640.00</td>
                    <td>2021-12-25 </td>
                    <td>2021-12-25 01:33:22</td>
                    <td>2021-12-25 01:33:22</td>


                    <td>Pending</td>
                    <td className="d-flex justify-content-center align-items-center">

                      <Link to='/edit'> <i className="fas fa-edit " style={{ color: "#660000" }}></i></Link>
                      <Link to='/invoice'> <i className="fas fa-eye m-1 " ></i></Link>
                      <i className="fas fa-trash text-danger "></i>
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

export default Expense;