import React from "react";
import Navbar from "../../layouts/backend/Navbar";
import Sidebar from "../../layouts/backend/Sidebar";


const DashboardMerchant = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className="mt-5 pt-5">
        <div className="container px-4">
          <h3>Dashboard</h3>

          <div className="row g-4">
            <div className="col-md-3 col-lg-3 col-sm-6 col-6">
              <div className="p-3 shadow  h-100">
                <div className="d-flex justify-content-between">
                  <h1 className="text-danger">
                    <i className="fas fa-utensils"></i>
                  </h1>
                  <div className="text-end">
                    <small>Today Order</small>
                    <h4>550</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 col-sm-6 col-6">
              <div className="p-3 shadow  h-100">
                <div className="d-flex justify-content-between">
                  <h1 className="text-warning">
                    <i className="fas fa-utensils"></i>
                  </h1>
                  <div className="text-end">
                    <small>Yeterday Order</small>
                    <h4>656</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 col-sm-6 col-6">
              <div className="p-3 shadow  h-100">
                <div className="d-flex justify-content-between">
                  <h1 className="text-success">
                    <i className="fas fa-utensils"></i>
                  </h1>
                  <div className="text-end">
                    <small>This Month Order</small>
                    <h4>656</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 col-sm-6 col-6">
              <div className="p-3 shadow  h-100">
                <div className="d-flex justify-content-between">
                  <h1 className="text-primary">
                    <i className="fas fa-utensils"></i>
                  </h1>
                  <div className="text-end">
                    <small>All Order</small>
                    <h4>62,50</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* pending  */}
            <div className="col-md-3 col-lg-3 col-sm-6 col-6">
              <div className="p-3 shadow  h-100">
                <div className="d-flex justify-content-between">
                  <h1 className="text-danger">
                    <i className="fab fa-jedi-order"></i>
                  </h1>
                  <div className="text-end">
                    <small>Pending Order</small>
                    <h4>50</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 col-sm-6 col-6">
              <div className="p-3 shadow  h-100">
                <div className="d-flex justify-content-between">
                  <h1 className="text-warning">
                    <i className="fab fa-jedi-order"></i>
                  </h1>
                  <div className="text-end">
                    <small>Progess Order</small>
                    <h4>6</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 col-sm-6 col-6">
              <div className="p-3 shadow  h-100">
                <div className="d-flex justify-content-between">
                  <h1 className="text-success">
                    <i className="fab fa-jedi-order"></i>
                  </h1>
                  <div className="text-end">
                    <small>Returning Order</small>
                    <h4>656</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 col-sm-6 col-6">
              <div className="p-3 shadow  h-100">
                <div className="d-flex justify-content-between">
                  <h1 className="text-primary">
                    <i className="fab fa-jedi-order"></i>
                  </h1>
                  <div className="text-end">
                    <small>Rejected Order</small>
                    <h4>62</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Amount  */}

            <div className="col-md-3 col-lg-3 col-sm-6 col-6">
              <div className="p-3 shadow  h-100">
                <div className="d-flex justify-content-between">
                  <h1 className="text-danger">
                    <i className="fab fa-jedi-order"></i>
                  </h1>
                  <div className="text-end">
                    <small>Today Order Amount</small>
                    <h4>65,557540</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 col-sm-6 col-6">
              <div className="p-3 shadow  h-100">
                <div className="d-flex justify-content-between">
                  <h1 className="text-warning">
                    <i className="fab fa-jedi-order"></i>
                  </h1>
                  <div className="text-end">
                    <small>Unpaid Order Amount</small>
                    <h4>65687</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 col-sm-6 col-6">
              <div className="p-3 shadow  h-100">
                <div className="d-flex justify-content-between">
                  <h1 className="text-success">
                    <i className="fab fa-jedi-order"></i>
                  </h1>
                  <div className="text-end">
                    <small>Unpaid Order Amount</small>
                    <h4>656</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 col-sm-6 col-6">
              <div className="p-3 shadow  h-100">
                <div className="d-flex justify-content-between">
                  <h1 className="text-primary">
                    <i className="fab fa-jedi-order"></i>
                  </h1>
                  <div className="text-end">
                    <small>Total Order Amount</small>
                    <h4>62,500</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardMerchant;
