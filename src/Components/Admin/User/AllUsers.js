import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../layouts/backend/Navbar';
import Sidebar from '../../../layouts/backend/Sidebar';

const AllUsers = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className="mt-5 pt-5">
        <div className="container px-4">
          <div className="d-flex justify-content-between top-content">
            <h4>All Users</h4>
            <button className="btn btn-success mb-2"><Link to="/add-users">Add User</Link></button>
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
                    <th scope="col">Username</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Roll</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th><input type="checkbox" name="" id="" /></th>
                    <th scope="row">1</th>
                    <td>rakib</td>
                    <td>Rakib</td>
                    <td>rakib@gmail.com</td>
                    <td>User</td>
                    <td style={{ minWidth: "100px" }}>
                      <i className="fas fa-edit" style={{ color: "#660000" }}></i>
                      <i className='fas fa-eye mx-2'></i>
                      <i className="fas fa-trash text-danger"></i>
                    </td>
                  </tr>
                  <tr>
                    <th><input type="checkbox" name="" id="" /></th>
                    <th scope="row">1</th>
                    <td>rakib</td>
                    <td>Rakib</td>
                    <td>rakib@gmail.com</td>
                    <td>User</td>
                    <td style={{ minWidth: "100px" }}>
                      <i className="fas fa-edit" style={{ color: "#660000" }}></i>
                      <i className='fas fa-eye mx-2'></i>
                      <i className="fas fa-trash text-danger"></i>
                    </td>
                  </tr>
                  <tr>
                    <th><input type="checkbox" name="" id="" /></th>
                    <th scope="row">1</th>
                    <td>rakib</td>
                    <td>Rakib</td>
                    <td>rakib@gmail.com</td>
                    <td>User</td>
                    <td style={{ minWidth: "100px" }}>
                      <i className="fas fa-edit" style={{ color: "#660000" }}></i>
                      <i className='fas fa-eye mx-2'></i>
                      <i className="fas fa-trash text-danger"></i>
                    </td>
                  </tr>
                  <tr>
                    <th><input type="checkbox" name="" id="" /></th>
                    <th scope="row">1</th>
                    <td>rakib</td>
                    <td>Rakib</td>
                    <td>rakib@gmail.com</td>
                    <td>User</td>
                    <td style={{ minWidth: "100px" }}>
                      <i className="fas fa-edit" style={{ color: "#660000" }}></i>
                      <i className='fas fa-eye mx-2'></i>
                      <i className="fas fa-trash text-danger"></i>
                    </td>
                  </tr>
                  <tr>
                    <th><input type="checkbox" name="" id="" /></th>
                    <th scope="row">1</th>
                    <td>rakib</td>
                    <td>Rakib</td>
                    <td>rakib@gmail.com</td>
                    <td>User</td>
                    <td style={{ minWidth: "100px" }}>
                      <i className="fas fa-edit" style={{ color: "#660000" }}></i>
                      <i className='fas fa-eye mx-2'></i>
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

export default AllUsers;