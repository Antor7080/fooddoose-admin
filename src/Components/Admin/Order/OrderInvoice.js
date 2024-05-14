import React from "react";
import Navbar from "../../../layouts/backend/Navbar";
import Sidebar from "../../../layouts/backend/Sidebar";

import "./Invoice.css";

const OrderInvoiceMerchant = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className="mt-5 pt-5">
        <div className="container-fluid">
          {/* <div className="d-flex justify-content-between top-content">
            <h4>Expense Page Section</h4>{" "}
            <button className="btn btn-success mb-2"><Link to="/add-merchants">Add Expense Page</Link></button>
            
          </div> */}
          <div className="card-body ">

            <div className="row">
              <div className="col-md-8 ">
                <div className="row ">
                  <div className="d-flex justify-content-between border rounded bg-light p-2 mb-3">
                    <p className="fw-bold">#934648 - 2022 Jan 04 06:03 AM</p>
                    <button type="submit" className="btn btn-success">
                      Print
                    </button>
                  </div>
                  <div className="col">
                    <p className="fw-bold m-0">Restaurant Information</p>
                    <hr className="mt-0" />
                    <p className="fw-bold">Fooddoose Merchant Restaurant</p>
                    <p className="">
                      Phone No: 017415686521 <br />
                      Address: dhaka bangladesh
                    </p>
                  </div>

                  <div className="col">
                    <p className="fw-bold">Client Information</p>
                    <hr />
                    <p>
                      Order ID : 934648 <br /> Shariar Hossain <br /> Phone No:
                      +8801234567890 rk.russed@gmail.com
                    </p>

                  </div>
                  <div className="col mt-4">
                    <hr />
                    <div className="barcode">934648</div>
                    <p>
                      Order Date: 2022 Jan 04 <br />
                      Delivery Address: ভাওয়ার-ভিটি আবদুল্লাহ পূর <br />
                      Payment Method: COD
                    </p>
                  </div>

                  <div>
                    <h5>Items</h5>
                    <table className="table ">
                      <thead style={{ backgroundColor: "#ededed" }}>
                        <tr>
                          <th scope="col">#item</th>
                          <th scope="col">Quantity</th>
                          <th scope="col">Unit Price</th>
                          <th scope="col">Total Price</th>

                        </tr>
                      </thead>
                      <tbody>
                        <tr style={{ backgroundColor: "#ededed" }}>
                          <th scope="row">1 x Yoghurt makhni</th>
                          <th >1pcs </th>
                          <th >৳149</th>
                          <th >৳149</th>
                        </tr>
                        <tr>
                          <th ></th>
                          <th > </th>
                          <th >Subtotal</th>
                          <th >৳149</th>
                        </tr>
                        <tr>
                          <th ></th>
                          <th > </th>
                          <th >Delivary cost</th>
                          <th >৳51</th>
                        </tr>

                        <th ></th>
                        <th > </th>
                        <th >Grand Total</th>
                        <th >৳200</th>

                      </tbody>
                    </table>

                  </div>
                </div>
              </div>

              <div className="col-md-4  p-3">
                <h4>Order Status History</h4>
                <hr />
                <p>
                  Created <br />
                  Status from: 15 <br />
                  13 june 18 <br />
                  Pending <br />
                  Status from: 15 <br />
                  13
                  june 18
                </p>
              </div>
              <h4>comment</h4>
              <hr className="w-50" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrderInvoiceMerchant;
