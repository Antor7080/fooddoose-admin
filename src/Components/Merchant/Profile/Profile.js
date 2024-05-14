import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useAxios from "../../../Hooks/useAxios";
import Navbar from "../../../layouts/backend/Navbar";
import Sidebar from "../../../layouts/backend/Sidebar";

const Profile = () => {
  const axiosInstance = useAxios();

  // const [user, setUser] = useState({});
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    axiosInstance
      .get(`/user/single-user-info/`)
      .then((response) => {
        console.log(response);
        // setUser(response?.data);
      })
      .catch((error) => { });
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
              <Link to="/merchant/update-password">Change Password</Link>
            </button>
          </div>
          <div className="card py-3">
            <div className="col-lg-6 mx-auto">
              <div className="text-center">
                <img
                  src={`http://localhost:5000/public/uploads/${user?.logo}`}
                  alt=""
                  width="100"
                />
                <h2>{user.shopName}</h2>

                <div className="border p-3 mb-3">
                  <div className="d-flex justify-content-between border-bottom mb-2">
                    <h5>
                      <b>Restaurant Name</b>
                    </h5>
                    <h5>{user.shopName}</h5>
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
                  <div className="d-flex justify-content-between border-bottom mb-2">
                    <h5>
                      <b>Address</b>
                    </h5>
                    <h5>{user.address}</h5>
                  </div>
                  <div className="d-flex justify-content-between border-bottom mb-2">
                    <h5>
                      <b>Open Hour</b>
                    </h5>
                    <h5>{user.openHour}</h5>
                  </div>

                  <div className="d-flex justify-content-between border-bottom mb-2">
                    <h5>
                      <b>Close Hour</b>
                    </h5>
                    <h5>{user.closeHour}</h5>
                  </div>
                </div>
                <div className="d-flex justify-content-between update-button">
                  {/*   <button className="btn btn-success me-1 mb-1">
                    <Link to="/merchant/update-info">Update Additional Information</Link>
                  </button> */}
                  <Link to="/merchant/update-profile">  <button className="btn text-white btn-info ms-1 mb-1">
                    Update Profile
                  </button></Link>

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
