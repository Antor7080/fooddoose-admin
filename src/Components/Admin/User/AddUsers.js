import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Header";

const AddUsers = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className="mt-5 pt-5">
        <div className="container-fluid">
          <div className="d-flex justify-content-between top-content">
            <h4>Add New User</h4>
            <button className="btn btn-success mb-2">
              <Link to="/all-users">All Users</Link>
            </button>
          </div>
          <div className="card-body border rounded">
            <form className="add-merchant">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="u-name">Username</label>
                  <input
                    className="form-control"
                    type="text"
                    name=""
                    id="u-name"
                    placeholder="Username"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="m-email">Email</label>
                  <input
                    className="form-control"
                    type="email"
                    name=""
                    id="m-email"
                    placeholder="Email"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="f-name">First Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name=""
                    id="f-name"
                    placeholder="First Name"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="l-name">Last Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name=""
                    id="l-name"
                    placeholder="Last Name"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="website">Website</label>
                  <input
                    className="form-control"
                    type="text"
                    name=""
                    id="website"
                    placeholder="Website"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="password">Password</label>
                  <input
                    className="form-control"
                    type="password"
                    name=""
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="role">Role</label>
                  <select className="form-control" name="" id="">
                    <option value="0">Select Role</option>
                    <option value="1">Admin</option>
                    <option value="2">User</option>
                  </select>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <p className="mt-1">Send User Notification</p>
                  <input className="me-2" type="checkbox" name="" id="notification" />
                  <label htmlFor="notification">Send User Notification</label>
                </div>
              </div>

              <button className="btn btn-success mt-2 common-color">Add</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddUsers;
