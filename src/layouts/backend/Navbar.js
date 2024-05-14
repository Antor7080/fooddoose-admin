import { Link, useHistory } from "react-router-dom";
import useAuth from '../../Hooks/useAuth';
import logo from "../../images/logo.png";

export default function Navbar() {
    const history = useHistory()
    const { logout } = useAuth()
    const userInfo = JSON.parse(localStorage.getItem('user'))
    return (
        <nav className="navbar navbar-expand-lg navbar-light py-3   navStyle fixed-top sticky">
            <div className="container-fluid ">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#sidebar"
                    aria-controls="offcanvasExample"
                >
                    <span
                        className="navbar-toggler-icon"
                        data-bs-target="#sidebar"
                    ></span>
                </button>
                <Link
                    className="navbar-brand me-auto ms-lg-0 ms-3 text-uppercase fw-bold"
                    to="#"
                >
                    <img
                        width="200"
                        src={logo}
                        alt=""
                    />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#topNavBar"
                    aria-controls="topNavBar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="topNavBar">
                    <form className="d-flex ms-auto my-3 my-lg-0">
                        <div className="input-group">
                            <input
                                className="form-control"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-primary" type="submit">
                                <i className="bi bi-search"></i>
                            </button>
                        </div>
                    </form>
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle ms-2"
                                to="/"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="bi bi-person-fill"></i>
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end">

                                <li>
                                    <Link className="dropdown-item" to={userInfo?.role === 2 ? "/merchant/profile" : "/admin/profile"}>
                                        <i className="fas fa-user-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                        Profile
                                    </Link>
                                </li>
                                <li>
                                    <button onClick={() => { logout(history) }} className="dropdown-item" to="#">
                                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
