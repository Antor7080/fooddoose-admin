import React from "react";
import Navbar from "../../../layouts/backend/Navbar";
import Sidebar from "../../../layouts/backend/Sidebar";


const AddIncome = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <main className="mt-5 pt-5">
        <div className="container-fluid">
          <div className="card-body  ">
            <div className="row g-2">
              <h4>Add Income</h4>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInputGrid"
                    placeholder="income"
                  />
                  <label for="floatingInputGrid">Invoice Id</label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInputGrid"
                    placeholder="Vendor name"
                  />
                  <label for="floatingInputGrid">Invoice to</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInputGrid"
                    placeholder="name@example.com"
                    value="Uttara"
                  />
                  <label for="floatingInputGrid">Address</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInputGrid"
                    placeholder="name@example.com"
                    value="8648"
                  />
                  <label for="floatingInputGrid">Total</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="date"
                    className="form-control"
                    id="floatingInputGrid"
                    placeholder="name@example.com"
                    value="Uttara"
                  />
                  <label for="floatingInputGrid">Invoice Date</label>
                </div>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-success w-25">
                save
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddIncome;
