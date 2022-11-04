import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../layouts/backend/Navbar";
import Sidebar from "../../../layouts/backend/Sidebar";


const UpdateProfile = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className="mt-5 pt-5">
        <div className="container px-4">
          <div className="d-flex justify-content-between top-content">
            <h4>Update Profile</h4>{" "}
            <button className="btn btn-success mb-2">
              <Link to="/profile">Profile</Link>
            </button>
          </div>
          <div className="card">
            <form className="p-3">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="name">Name</label>
                  <input className="form-control" type="text" name="" id="name" value="Name" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="mobile">Mobile Number</label>
                  <input className="form-control" type="text" name="" id="mobile" value="+88018684747" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="address">Address</label>
                  <input className="form-control" type="text" name="" id="address" value="Dhaka, Bangladesh" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="photo">Photo</label>
                  <input className="form-control" type="file" name="" id="photo" />
                </div>

              </div>
              <button className="btn btn-success mt-2">Update</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UpdateProfile;
