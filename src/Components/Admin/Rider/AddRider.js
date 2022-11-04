import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Header";

const AddRider = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className="mt-5 pt-5">
        <div className="container px-4">
          <div className="d-flex justify-content-between top-content">
            <h4>Add Rider</h4>{" "}
            <button className="btn btn-success mb-2">
              <Link to="/all-rider">All Rider</Link>
            </button>
          </div>
          <div className="card">
            <form className="p-3">
              <div className="row">
                <div className="col-md-6 xol-lg-6 col-sm-6">
                  <label htmlFor="name">Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name=""
                    id="name"
                    placeholder="Name"
                  />
                </div>
                <div className="col-md-6 xol-lg-6 col-sm-6">
                  <label htmlFor="email">Email</label>
                  <input
                    className="form-control"
                    type="email"
                    name=""
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="col-md-6 xol-lg-6 col-sm-6">
                  <label htmlFor="mobile">Mobile</label>
                  <input
                    className="form-control"
                    type="number"
                    name=""
                    id="mobile"
                    placeholder="Mobile"
                  />
                </div>
                <div className="col-md-6 xol-lg-6 col-sm-6">
                  <label htmlFor="status">Status</label>
                  <select className="form-control" name="" id="status">
                    <option value="0">Select Status</option>
                    <option value="1">Approved</option>
                    <option value="2">Pending</option>
                    <option value="3">Reject</option>
                  </select>
                </div>
                <div className="col-md-6 xol-lg-6 col-sm-6">
                  <label htmlFor="address">Address</label>
                  <input
                    className="form-control"
                    type="text"
                    name=""
                    id="address"
                    placeholder="Address"
                  />
                </div>
                <div className="col-md-6 xol-lg-6 col-sm-6">
                  <label htmlFor="image">Image</label>
                  <input
                    className="form-control"
                    type="file"
                    name=""
                    id="image"
                  />
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

export default AddRider;
