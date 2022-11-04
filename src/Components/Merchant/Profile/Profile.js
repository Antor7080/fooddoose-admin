import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxios from "../../../Hooks/useAxios";
import Navbar from "../../../layouts/backend/Navbar";
import Sidebar from "../../../layouts/backend/Sidebar";

const Profile = () => {
  const axiosInstance = useAxios();

  const [user, setUser] = useState({});

  useEffect(() => {
    axiosInstance
      .get(`/user/single-user-info`)
      .then((response) => {
        console.log(response);
        setUser(response?.data);
      })
      .catch((error) => {});
  }, []);

  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className="mt-5 pt-5">
        <div className="container px-4">
          <div className="d-flex justify-content-between top-content">
            <h4>Profile Management</h4>{" "}
            <button className="btn btn-success mb-2">
              <Link to="/update-password">Change Password</Link>
            </button>
          </div>
          <div className="card py-3">
            <div className="col-lg-6 mx-auto">
              <div className="text-center">
                <img
                  src="https://app.fooddoose.com/frontend_upload_asset/upload_assets/merchantphoto/202112301019WhatsApp%20Image%202021-12-25%20at%204.22.11%20PM.jpeg"
                  alt=""
                  width="100"
                />
                <h2>Merchant</h2>
                <h5>Merchant</h5>
                <div className="border p-3 mb-3">
                  <div className="d-flex justify-content-between border-bottom mb-2">
                    <h5>
                      <b>Name</b>
                    </h5>
                    <h5>{user.name}</h5>
                  </div>
                  <div className="d-flex justify-content-between border-bottom mb-2">
                    <h5>
                      <b>Email</b>
                    </h5>
                    <h5>{user.email}</h5>
                  </div>
                  <div className="d-flex justify-content-between border-bottom mb-2">
                    <h5>
                      <b>Mobile</b>
                    </h5>
                    <h5>{user.number}</h5>
                  </div>
                </div>
                <div className="d-flex justify-content-between update-button">
                  <button className="btn btn-success me-1 mb-1">
                    <Link to="/update-info">Update Additional Information</Link>
                  </button>
                  <button className="btn btn-info ms-1 mb-1">
                    <Link to="/update-profile">Update Profile</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
