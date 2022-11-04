import React from "react";
import Header from "../../Header";
import "./Invoice.css";

const Invoice = () => {

  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className="mt-5  pt-5">
        <div className="container ">

          <div className=" container-fluid pe-5 pt-3  text-end">
            <button className="btn btn-success px-5 me-4 fw-bold" type="submit">Print</button>
          </div>
          <div className="card-body border overflow-hidden position-absolute ">
            <h2 className="unpaid bg-danger border border-secondary border-3 text-white text-center ">
              UNPAID
            </h2>
            <div className="row px-5 pt-3">
              <div className="col-md-6">
                <img className="w-75  pt-2" src="https://payrasoft.com/wp-content/uploads/2021/12/payrasoft-vertical-logo-1024x128.png" alt="" />
              </div>
              <div className="col-md-6 mb-5 pb-3">

              </div>




              <div className="col-md-6"></div>
              <div className="col-md-6 text-end mt-1">
                <h5>Host Dokan</h5>
                <p>Agrani Super Market(3rd Floor) Kalukhali,Rajbari.</p>
                <p>
                  +880 1929 79 77 35 <br />
                  email: support@hostdokan.com
                </p>
              </div>
              <div className="bg-light p-2">
                <h4 className="bg-light">Invoice #5992</h4>
                <p>Invoice Date: Wednesday, November 24th, 2021</p>
              </div>
              <div className="py-2">
                <p className="fw-bold">Invoiced To</p>
                <p>
                  Payra Soft <br />
                  ATTN: Payra Soft <br />
                  2/2 C Purana Polton <br />
                  Dhaka, Bangladesh, 1200 <br />
                  Tax ID:
                </p>
              </div>

              <table className="table table-bordered">
                <thead style={{ backgroundColor: "#ededed" }}>
                  <tr>
                    <th className="col-8 text-center">Description</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Domain Renewal - iconmedicalbd.com - 1 Year/s (10/25/2021
                      - 10/24/2022) + DNS Management + Email Forwarding
                    </td>
                    <th>Tk 800.00BDT</th>
                  </tr>
                  <tr style={{ backgroundColor: "#ededed" }}>
                    <th className="text-end">Subtotal</th>
                    <th>Tk 800.00BDT</th>
                  </tr>
                  <tr style={{ backgroundColor: "#ededed" }}>
                    <th className="text-end">Credit</th>
                    <th>Tk 00.00BDT</th>
                  </tr>

                  <tr style={{ backgroundColor: "#ededed" }}>
                    <th className="text-end">Total</th>
                    <th>Tk 800.00BDT</th>
                  </tr>
                </tbody>
              </table>

              <h5>Transactions</h5>
              <table className="table ">
                <thead style={{ backgroundColor: "#ededed" }}>
                  <tr>
                    <th scope="col">Transaction Date</th>
                    <th scope="col">Gateway </th>
                    <th scope="col">Transaction ID</th>
                    <th scope="col">Amount</th>

                  </tr>
                </thead>
                <tbody>
                  <tr >
                    <th></th>
                    <th className='text-end' >No Related Transactions Found</th>
                  </tr>
                  <tr style={{ backgroundColor: "#ededed" }}>
                    <th></th>
                    <th></th>
                    <th className="" >Balance</th>
                    <th >Tk 800.00BDT</th>
                  </tr>



                </tbody>
              </table>
            </div>

            {/* <div className="row">
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
                    <hr  />
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
                <thead style={{backgroundColor:"#ededed"}}>
                  <tr>
                    <th scope="col">#item</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Unit Price</th>
                    <th scope="col">Total Price</th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr style={{backgroundColor:"#ededed"}}>
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
            </div> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Invoice;
