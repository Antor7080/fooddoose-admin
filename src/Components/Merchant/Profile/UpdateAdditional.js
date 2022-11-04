import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../layouts/backend/Navbar";
import Sidebar from "../../../layouts/backend/Sidebar";


const UpdateAdditional = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className="mt-5 pt-5">
        <div className="container px-4">
          <div className="d-flex justify-content-between top-content">
            <h4>Update Additional Information</h4>
            <button className="btn btn-success mb-2">
              <Link to="/profile">Profie</Link>
            </button>
          </div>
          <div className="card">
            <form className="p-3">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="b-name">Business Name</label>
                  <input className="form-control" type="text" name="" id="b-name" value="Fooddoose Merchant" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="bkash">Bkash Number</label>
                  <input className="form-control" type="text" name="" id="bkash" value="+88018684747" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="rocket">Rocket Number</label>
                  <input className="form-control" type="text" name="" id="rocket" value="+88018684747" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="nagad">Nagad Number</label>
                  <input className="form-control" type="text" name="" id="nagad" value="+88018684747" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="bank-name">Bank Name</label>
                  <input className="form-control" type="text" name="" id="bank-name" value="Bangladesh Bank" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="a-number">Account Number</label>
                  <input className="form-control" type="text" name="" id="a-number" value="0200003652672" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="a-name">Account Name</label>
                  <input className="form-control" type="text" name="" id="a-name" value="Fooddoose" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="p-method">Payment Method</label>
                  <input className="form-control" type="text" name="" id="p-method" value="Bkash" />
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

export default UpdateAdditional;
