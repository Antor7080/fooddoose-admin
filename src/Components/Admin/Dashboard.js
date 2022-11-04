import React from "react";


const Dashboard = () => {
  return (
    <div>
      
      <main className="mt-5 pt-5">
        <div className="container-fluid">
          <h3>Dashboard</h3>
          <div className="container">
            <div className="row g-4">
              <div className="col-md-3 col-lg-3 col-sm-6 col-6">
                <div className="p-3 shadow  h-100">
                  <div className="d-flex justify-content-between">
                    <h1 className="text-danger">
                      <i className="fas fa-utensils"></i>
                    </h1>
                    <div className="text-end">
                      <small>Total Restaurant</small>
                      <h4>65,550</h4>
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
                      <small>Total Customer</small>
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
                      <small>Total Order</small>
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
                      <small>Totar Rider</small>
                      <h4>62,500+</h4>
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
                      <small>Today Order</small>
                      <h4>65,550</h4>
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
                      <small>Yesterday Order</small>
                      <h4>656</h4>
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
                      <i className="fab fa-jedi-order"></i>
                    </h1>
                    <div className="text-end">
                      <small>All Order</small>
                      <h4>62</h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* order  */}

              <div className="col-md-3 col-lg-3 col-sm-6 col-6">
                <div className="p-3 shadow  h-100">
                  <div className="d-flex justify-content-between">
                    <h1 className="text-danger">
                      <i className="fab fa-jedi-order"></i>
                    </h1>
                    <div className="text-end">
                      <small>Pending Order</small>
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
                      <small>Progress Order</small>
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
                      <h4>62,500</h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* account information  */}

              <div className="col-md-3 col-lg-3 col-sm-6 col-6">
                <div className="p-3 shadow  h-100">
                  <div className="d-flex justify-content-between">
                    <h1 className="text-danger">
                      <i className="fas fa-dollar-sign"></i>
                    </h1>
                    <div className="text-end">
                      <small>Today Order Amount</small>
                      <h4>65,550</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3 col-sm-6 col-6">
                <div className="p-3 shadow  h-100">
                  <div className="d-flex justify-content-between">
                    <h1 className="text-warning">
                      <i className="fas fa-dollar-sign"></i>
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
                    <h1 className="text-success">
                      <i className="fas fa-dollar-sign"></i>
                    </h1>
                    <div className="text-end">
                      <small>Paid Order Amount</small>
                      <h4>656</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3 col-sm-6 col-6">
                <div className="p-3 shadow  h-100">
                  <div className="d-flex justify-content-between">
                    <h1 className="text-primary">
                      <i className="fas fa-dollar-sign"></i>
                    </h1>
                    <div className="text-end">
                      <small>Total Order Amount</small>
                      <h4>62,50</h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* delivery */}

              <div className="col-md-3 col-lg-3 col-sm-6 col-6">
                <div className="p-3 shadow  h-100">
                  <div className="d-flex justify-content-between">
                    <h1 className="text-danger">
                      <i className="fas fa-truck"></i>
                    </h1>
                    <div className="text-end">
                      <small>Today Delivery Fee</small>
                      <h4>65,550</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3 col-sm-6 col-6">
                <div className="p-3 shadow  h-100">
                  <div className="d-flex justify-content-between">
                    <h1 className="text-warning">
                      <i className="fas fa-truck"></i>
                    </h1>
                    <div className="text-end">
                      <small>UnPaid Delivery Fee</small>
                      <h4>656</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3 col-sm-6 col-6">
                <div className="p-3 shadow  h-100">
                  <div className="d-flex justify-content-between">
                    <h1 className="text-success">
                      <i className="fas fa-truck"></i>
                    </h1>
                    <div className="text-end">
                      <small>Paid Delivery Fee</small>
                      <h4>656</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3 col-sm-6 col-6">
                <div className="p-3 shadow  h-100">
                  <div className="d-flex justify-content-between">
                    <h1 className="text-primary">
                      <i className="fas fa-truck"></i>
                    </h1>
                    <div className="text-end">
                      <small>Total Delivery Fee</small>
                      <h4>62,500+</h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* marchent  */}

              <div className="col-md-3 col-lg-3 col-sm-6 col-6">
                <div className="p-3 shadow  h-100">
                  <div className="d-flex justify-content-between">
                    <h1 className="text-danger">
                      <i className="fas fa-dollar-sign"></i>
                    </h1>
                    <div className="text-end">
                      <small>Marchant Unpaid Amount</small>
                      <h4>65,550</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3 col-sm-6 col-6">
                <div className="p-3 shadow  h-100">
                  <div className="d-flex justify-content-between">
                    <h1 className="text-warning">
                      <i className="fas fa-dollar-sign"></i>
                    </h1>
                    <div className="text-end">
                      <small>Marchant Paid Amount</small>
                      <h4>656</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3 col-sm-6 col-6">
                <div className="p-3 shadow  h-100">
                  <div className="d-flex justify-content-between">
                    <h1 className="text-success">
                      <i className="fas fa-dollar-sign"></i>
                    </h1>
                    <div className="text-end">
                      <small>Hum Manager Fee</small>
                      <h4>656</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3 col-sm-6 col-6">
                <div className="p-3 shadow  h-100">
                  <div className="d-flex justify-content-between">
                    <h1 className="text-primary">
                      <i className="fas fa-dollar-sign"></i>
                    </h1>
                    <div className="text-end">
                      <small>Rider Fee</small>
                      <h4>62,500+</h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* expenses and income  */}

              <div className="col-md-3 col-lg-3 col-sm-6 col-6">
                <div className="p-3 shadow  h-100">
                  <div className="d-flex justify-content-between">
                    <h1 className="text-danger">
                      <i className="fas fa-sort-amount-up-alt"></i>
                    </h1>
                    <div className="text-end">
                      <small>Office Expenses</small>
                      <h4>65,550</h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-lg-3 col-sm-6 col-6">
                <div className="p-3 shadow  h-100">
                  <div className="d-flex justify-content-between">
                    <h1 className="text-warning">
                      <i className="fas fa-sort-amount-up-alt"></i>
                    </h1>
                    <div className="text-end">
                      <small>Other expenses</small>
                      <h4>656</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3 col-sm-6 col-6">
                <div className="p-3 shadow  h-100">
                  <div className="d-flex justify-content-between">
                    <h1 className="text-success">
                      <i className="fas fa-sort-amount-up-alt"></i>
                    </h1>
                    <div className="text-end">
                      <small>Total expenses</small>
                      <h4>656</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3 col-sm-6 col-6">
                <div className="p-3 shadow  h-100">
                  <div className="d-flex justify-content-between">
                    <h1 className="text-primary">
                      <i className="fas fa-sort-amount-up-alt"></i>
                    </h1>
                    <div className="text-end">
                      <small>Total Income</small>
                      <h4>62,500+</h4>
                    </div>
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

export default Dashboard;
