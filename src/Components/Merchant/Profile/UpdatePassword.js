import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../layouts/backend/Navbar";
import Sidebar from "../../../layouts/backend/Sidebar";


const UpdatePassword = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className="mt-5 pt-5">
        <div className="container px-4">
          <div className="d-flex justify-content-between top-content">
            <h4>Update Password</h4>
            <button className="btn btn-success mb-2">
              <Link to="/profile">Profie</Link>
            </button>
          </div>
          <div className="card">
            <form className="p-3">
              <div className="col-lg-6 mx-auto">
                <label htmlFor="old-p">Old Password</label>
                <input className="form-control" type="text" name="" id="old-p" placeholder="Old Password" />
                <label htmlFor="new-p">New Password</label>
                <input className="form-control" type="text" name="" id="new-p" placeholder="New Password" />
                <label htmlFor="confirm-p">Confirm New Password</label>
                <input className="form-control" type="text" name="" id="confirm-p" placeholder="Confirm New Password" />
                <button className="btn btn-success mt-2">Update Password</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UpdatePassword;
