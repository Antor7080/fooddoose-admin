import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const userInfo = localStorage.getItem("user");
  const userData = JSON.parse(userInfo);
  return (
    <div>
      <div
        className="offcanvas offcanvas-start offcanv sidebar-nav bg-light"
        tabIndex="-1"
        id="sidebar"
      >
        <div className="offcanvas-body p-0">
          <nav className="navbar-light">
            <ul className="navbar-nav">
              {userData.role === 2 && (
                <>
                  <li>
                    <Link
                      to="/merchant/dashboard"
                      className="nav-link px-3 active"
                    >
                      <span className="me-2">
                        <i className="fas fa-home"></i>
                      </span>
                      <span>Dashboard Merchant</span>
                    </Link>
                  </li>

                  {/* Merchant  */}
                  <li>
                    <Link
                      className="nav-link px-3 sidebar-link"
                      data-bs-toggle="collapse"
                      to="#food"
                    >
                      <span className="me-2">
                        <i className="fa fa-hamburger"></i>
                      </span>
                      <span>Food</span>
                      <span className="ms-auto">
                        <span className="right-icon">
                          <i className="bi bi-chevron-down"></i>
                        </span>
                      </span>
                    </Link>
                    <div className="collapse" id="food">
                      <ul className="navbar-nav ps-3">
                        <li>
                          <Link
                            to="/merchant/add-food"
                            className="nav-link px-3"
                          >
                            <span className="me-2">
                              <i className="fas fa-list-ul"></i>
                            </span>
                            <span>Add Food</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/merchant/categories"
                            className="nav-link px-3"
                          >
                            <span className="me-2">
                              <i className="fas fa-list-ul"></i>
                            </span>
                            <span>Categories</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/merchant/all-food"
                            className="nav-link px-3"
                          >
                            <span className="me-2">
                              <i className="fas fa-list-ul"></i>
                            </span>
                            <span>All Food</span>
                          </Link>
                        </li>

                        <li>
                          <Link
                            to="/merchant/add-extra-item"
                            className="nav-link px-3"
                          >
                            <span className="me-2">
                              <i className="fas fa-list-ul"></i>
                            </span>
                            <span>Extra Food</span>
                          </Link>
                        </li>

                      </ul>
                    </div>
                  </li>
                  {/* Order */}
                  <li>
                    <a
                      className="nav-link px-3 sidebar-link"
                      data-bs-toggle="collapse"
                      href="#order-merchant"
                    >
                      <span className="me-2">
                        <i className="fab fa-jedi-order"></i>
                      </span>
                      <span>Order</span>
                      <span className="ms-auto">
                        <span className="right-icon">
                          <i className="bi bi-chevron-down"></i>
                        </span>
                      </span>
                    </a>
                    <div className="collapse" id="order-merchant">
                      <ul className="navbar-nav ps-3">
                        <li>
                          <Link
                            to="/merchant/all-order"
                            className="nav-link px-3"
                          >
                            <span className="me-2">
                              <i className="fas fa-list-ul"></i>
                            </span>
                            <span>All Order</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/merchant/pending-order"
                            className="nav-link px-3"
                          >
                            <span className="me-2">
                              <i className="fas fa-list-ul"></i>
                            </span>
                            <span>New Order</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/merchant/rejected-order"
                            className="nav-link px-3"
                          >
                            <span className="me-2">
                              <i className="fas fa-list-ul"></i>
                            </span>
                            <span>Rejected Order</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/merchant/progress-order"
                            className="nav-link px-3"
                          >
                            <span className="me-2">
                              <i className="fas fa-list-ul"></i>
                            </span>
                            <span>Progress Order</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/merchant/returning-order"
                            className="nav-link px-3"
                          >
                            <span className="me-2">
                              <i className="fas fa-list-ul"></i>
                            </span>
                            <span>Returning Order</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  {/* Accounts */}
                  <li>
                    <a
                      className="nav-link px-3 sidebar-link"
                      data-bs-toggle="collapse"
                      href="#accounts-merchant"
                    >
                      <span className="me-2">
                        <i className="fas fa-user-circle"></i>
                      </span>
                      <span>Accounts</span>
                      <span className="ms-auto">
                        <span className="right-icon">
                          <i className="bi bi-chevron-down"></i>
                        </span>
                      </span>
                    </a>
                    <div className="collapse" id="accounts-merchant">
                      <ul className="navbar-nav ps-3">
                        <li>
                          <Link to="/merchant/income" className="nav-link px-3">
                            <span className="me-2">
                              <i className="fas fa-list-ul"></i>
                            </span>
                            <span>Income</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/merchant/expense"
                            className="nav-link px-3"
                          >
                            <span className="me-2">
                              <i className="fas fa-list-ul"></i>
                            </span>
                            <span>Expense</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/merchant/paid-invoice"
                            className="nav-link px-3"
                          >
                            <span className="me-2">
                              <i className="fas fa-list-ul"></i>
                            </span>
                            <span>Paid Inovice</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/merchant/unpaid-invoice"
                            className="nav-link px-3"
                          >
                            <span className="me-2">
                              <i className="fas fa-list-ul"></i>
                            </span>
                            <span>UNPAID Invoice</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/merchant/make-salary"
                            className="nav-link px-3"
                          >
                            <span className="me-2">
                              <i className="fas fa-list-ul"></i>
                            </span>
                            <span>Make Salary</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  {/* Settings */}
                  <li>
                    <a
                      className="nav-link px-3 sidebar-link"
                      data-bs-toggle="collapse"
                      href="#settings-merchant"
                    >
                      <span className="me-2">
                        <i className="fas fa-cog"></i>
                      </span>
                      <span>Settings</span>
                      <span className="ms-auto">
                        <span className="right-icon">
                          <i className="bi bi-chevron-down"></i>
                        </span>
                      </span>
                    </a>
                    <div className="collapse" id="settings-merchant">
                      <ul className="navbar-nav ps-3">
                        <li>
                          <Link
                            to="/merchant/profile"
                            className="nav-link px-3"
                          >
                            <span className="me-2">
                              <i className="fas fa-list-ul"></i>
                            </span>
                            <span>Profile Settings</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a
                      className="nav-link px-3 sidebar-link"
                      data-bs-toggle="collapse"
                      href="#Settings"
                    >
                      <span className="me-2">
                        <i className="fas fa-cog"></i>
                      </span>
                      <span>Banner</span>
                      <span className="ms-auto">
                        <span className="right-icon">
                          <i className="bi bi-chevron-down"></i>
                        </span>
                      </span>
                    </a>
                    <div className="collapse" id="Settings">
                      <ul className="navbar-nav ps-3">
                        <li>
                          <Link
                            to="/merchant/add-banner"
                            className="nav-link px-3"
                          >
                            <span className="me-2">
                              <i className="fas fa-list-ul"></i>
                            </span>
                            <span>Add Banner</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/merchant/all-banner"
                            className="nav-link px-3"
                          >
                            <span className="me-2">
                              <i className="fas fa-list-ul"></i>
                            </span>
                            <span>All Banner</span>
                          </Link>
                        </li>
                        <li>
                        </li>
                       {/*  <li className="mb-5">
                          <Link
                            to="/admin/rejected-merchants"
                            className="nav-link px-3"
                          >
                            <span className="me-2">
                              <i className="fas fa-list-ul"></i>
                            </span>
                            <span>All Pages</span>
                          </Link>
                        </li> */}
                      </ul>
                    </div>
                  </li>
                </>
              )}
              {/* Admin  */}

              {userData.role === 3 && (
                <>
                  <li>
                    <Link
                      to="/admin/dashboard"
                      className="nav-link px-3 active"
                    >
                      <span className="me-2">
                        <i className="fas fa-home"></i>
                      </span>
                      <span>Dashboard</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-link px-3 sidebar-link"
                      data-bs-toggle="collapse"
                      to="#merchants"
                    >
                      <span className="me-2">
                        <i className="fa fa-balance-scale"></i>
                      </span>
                      <span>Merchants</span>
                      <span className="ms-auto">
                        <span className="right-icon">
                          <i className="bi bi-chevron-down"></i>
                        </span>
                      </span>
                    </Link>
                    <div className="collapse" id="merchants">
                      <ul className="navbar-nav ps-3">
                        <li>
                          <Link
                            to="/admin/all-merchants"
                            className="nav-link px-3"
                          >
                            <span className="me-2">
                              <i className="fas fa-list-ul"></i>
                            </span>
                            <span>All Merchants</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/admin/pending-merchants"
                            className="nav-link px-3"
                          >
                            <span className="me-2">
                              <i className="fas fa-list-ul"></i>
                            </span>
                            <span>Pending Merchants</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/admin/rejected-merchants"
                            className="nav-link px-3"
                          >
                            <span className="me-2">
                              <i className="fas fa-list-ul"></i>
                            </span>
                            <span>Rjected Merchants</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  {/* Order */}

                  <li>
                    <a
                      className="nav-link px-3 sidebar-link"
                      data-bs-toggle="collapse"
                      href="#order"
                    >
                      <span className="me-2">
                        <i className="fab fa-jedi-order"></i>
                      </span>
                      <span>Order</span>
                      <span className="ms-auto">
                        <span className="right-icon">
                          <i className="bi bi-chevron-down"></i>
                        </span>
                      </span>
                    </a>
                    <div className="collapse" id="order">
                      <ul className="navbar-nav ps-3">
                        <li>
                          <Link to="/admin/all-order" className="nav-link px-3">
                            <span className="me-2">
                              <i className="fas fa-list-ul"></i>
                            </span>
                            <span>All Order</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/admin/pending-order"
                            className="nav-link px-3"
                          >
                            <span className="me-2">
                              <i className="fas fa-list-ul"></i>
                            </span>
                            <span>Pending Order</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/admin/rejected-order"
                            className="nav-link px-3"
                          >
                            <span className="me-2">
                              <i className="fas fa-list-ul"></i>
                            </span>
                            <span>Rejected Order</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/admin/progress-order"
                            className="nav-link px-3"
                          >
                            <span className="me-2">
                              <i className="fas fa-list-ul"></i>
                            </span>
                            <span>Progress Order</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/admin/returning-order"
                            className="nav-link px-3"
                          >
                            <span className="me-2">
                              <i className="fas fa-list-ul"></i>
                            </span>
                            <span>Returning Order</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  {/* Rider */}

                  <li>
                    <a
                      className="nav-link px-3 sidebar-link"
                      data-bs-toggle="collapse"
                      href="#rider"
                    >
                      <span className="me-2">
                        <i className="fas fa-biking"></i>
                      </span>
                      <span>Rider</span>
                      <span className="ms-auto">
                        <span className="right-icon">
                          <i className="bi bi-chevron-down"></i>
                        </span>
                      </span>
                    </a>
                    <div className="collapse" id="rider">
                      <ul className="navbar-nav ps-3">
                        <li>
                          <Link to="/admin/all-rider" className="nav-link px-3">
                            <span className="me-2">
                              <i className="fas fa-list-ul"></i>
                            </span>
                            <span>All Rider</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/admin/pending-rider"
                            className="nav-link px-3"
                          >
                            <span className="me-2">
                              <i className="fas fa-list-ul"></i>
                            </span>
                            <span>Pending Rider</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/admin/rejected-rider"
                            className="nav-link px-3"
                          >
                            <span className="me-2">
                              <i className="fas fa-list-ul"></i>
                            </span>
                            <span>Rejected Rider</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  {/* Accounts */}

                  <li>
                    <a
                      className="nav-link px-3 sidebar-link"
                      data-bs-toggle="collapse"
                      href="#accounts-admin"
                    >
                      <span className="me-2">
                        <i className="fas fa-user-circle"></i>
                      </span>
                      <span>Accounts</span>
                      <span className="ms-auto">
                        <span className="right-icon">
                          <i className="bi bi-chevron-down"></i>
                        </span>
                      </span>
                    </a>
                    <div className="collapse" id="accounts-admin">
                      <ul className="navbar-nav ps-3">
                        <li>
                          <Link to="/admin/income" className="nav-link px-3">
                            <span className="me-2">
                              <i className="fas fa-list-ul"></i>
                            </span>
                            <span>Income</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/admin/expense" className="nav-link px-3">
                            <span className="me-2">
                              <i className="fas fa-list-ul"></i>
                            </span>
                            <span>Expense</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/admin/paid-invoice"
                            className="nav-link px-3"
                          >
                            <span className="me-2">
                              <i className="fas fa-list-ul"></i>
                            </span>
                            <span>Paid Invoice</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/admin/unpaid-invoice"
                            className="nav-link px-3"
                          >
                            <span className="me-2">
                              <i className="fas fa-list-ul"></i>
                            </span>
                            <span>UNPAID Invoice</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/admin/make-salary"
                            className="nav-link px-3"
                          >
                            <span className="me-2">
                              <i className="fas fa-list-ul"></i>
                            </span>
                            <span>Make Salary</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  {/* Delivery Area */}

                  <li>
                    <a
                      className="nav-link px-3 sidebar-link"
                      data-bs-toggle="collapse"
                      href="#delivery"
                    >
                      <span className="me-2">
                        <i className="fas fa-caravan"></i>
                      </span>
                      <span>Delivery Area</span>
                      <span className="ms-auto">
                        <span className="right-icon">
                          <i className="bi bi-chevron-down"></i>
                        </span>
                      </span>
                    </a>
                    <div className="collapse" id="delivery">
                      <ul className="navbar-nav ps-3">
                        <li>
                          <Link to="/admin/add-area" className="nav-link px-3">
                            <span className="me-2">
                              <i className="fas fa-list-ul"></i>
                            </span>
                            <span>Add Area</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/admin/manage-area"
                            className="nav-link px-3"
                          >
                            <span className="me-2">
                              <i className="fas fa-list-ul"></i>
                            </span>
                            <span>Manage Area</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  {/* notice board  */}

                  <li>
                    <a
                      className="nav-link px-3 sidebar-link"
                      data-bs-toggle="collapse"
                      href="#notice"
                    >
                      <span className="me-2">
                        <i className="far fa-clipboard"></i>
                      </span>
                      <span>Notice Borad</span>
                      <span className="ms-auto">
                        <span className="right-icon">
                          <i className="bi bi-chevron-down"></i>
                        </span>
                      </span>
                    </a>
                    <div className="collapse" id="notice">
                      <ul className="navbar-nav ps-3">
                        <li>
                          <Link
                            to="/admin/add-notice"
                            className="nav-link px-3"
                          >
                            <span className="me-2">
                              <i className="fas fa-list-ul"></i>
                            </span>
                            <span>Add Notice</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/admin/all-notice"
                            className="nav-link px-3"
                          >
                            <span className="me-2">
                              <i className="fas fa-list-ul"></i>
                            </span>
                            <span>All Notice</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li>
                    <a
                      className="nav-link px-3 sidebar-link"
                      data-bs-toggle="collapse"
                      href="#DeliveryCost"
                    >
                      <span className="me-2">
                        <i className="fas fa-DeliveryCost"></i>
                      </span>
                      <span>DeliveryCost</span>
                      <span className="ms-auto">
                        <span className="right-icon">
                          <i className="bi bi-chevron-down"></i>
                          <i className="bi bi-currency-dollar"></i>
                        </span>
                      </span>
                    </a>
                    <div className="collapse" id="DeliveryCost">
                      <ul className="navbar-nav ps-3">
                        <li>
                          <Link to="/admin/DeliveryCost" className="nav-link px-3">
                            <span className="me-2">
                              <i className="fas fa-list-ul"></i>
                            </span>
                            <span>DeliveryCost</span>
                          </Link>
                        </li>
                        
                      </ul>
                    </div>
                  </li>

                  {/* Settings */}

                  <li>
                    <a
                      className="nav-link px-3 sidebar-link"
                      data-bs-toggle="collapse"
                      href="#Settings"
                    >
                      <span className="me-2">
                        <i className="fas fa-cog"></i>
                      </span>
                      <span>Banner</span>
                      <span className="ms-auto">
                        <span className="right-icon">
                          <i className="bi bi-chevron-down"></i>
                        </span>
                      </span>
                    </a>
                    <div className="collapse" id="Settings">
                      <ul className="navbar-nav ps-3">
                        <li>
                          <Link
                            to="/admin/add-banner"
                            className="nav-link px-3"
                          >
                            <span className="me-2">
                              <i className="fas fa-list-ul"></i>
                            </span>
                            <span>Add Banner</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/admin/merchant-banner"
                            className="nav-link px-3"
                          >
                            <span className="me-2">
                              <i className="fas fa-list-ul"></i>
                            </span>
                            <span>Merchant Banner</span>
                          </Link>
                        </li>
                        <li>
                        </li>
                        <li className="mb-5">
                          <Link
                            to="/admin/admin-banner"
                            className="nav-link px-3"
                          >
                            <span className="me-2">
                              <i className="fas fa-list-ul"></i>
                            </span>
                            <span>Admin Banner</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
