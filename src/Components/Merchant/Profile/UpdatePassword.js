import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";
import Navbar from "../../../layouts/backend/Navbar";
import Sidebar from "../../../layouts/backend/Sidebar";


const UpdatePassword = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const axiosInstance = useAxios();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState({});
  const [loading, setLoading] = useState(false);
  function isStrong(password) {
    const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return reg.test(password);
  }
  const changePassword = (e) => {
    e.preventDefault();
    setLoading(true);
    //match password
    console.log(password, confirmPassword, oldPassword, error, success, loading)

    if (!password || !confirmPassword || !oldPassword) {
      setLoading(false);
      return setError("All fields are required");
    }
    if (password !== confirmPassword) {
      setLoading(false);
      return setError("Password does not match");
    }
    //check strong password
    const isStrongPassword = isStrong(password);
    if (!isStrongPassword) {
      setLoading(false);  
      return setError("Password must be at least 8 characters, contain at least one uppercase letter, one lowercase letter, and one number");
    }
    console.log(password, confirmPassword, oldPassword, error, success, loading)

    axiosInstance.patch(`/user/change-password`, {
      oldPassword,
      password,
      confirmPassword
    })
      .then((response) => {
      
        setLoading(false);
        setSuccess(response.data.msg);
        Toast.fire({
          icon: "success",
          title: response.data.msg,
        })
        setError('');
        //back to previous page
       window.history.back();
      })
      .catch((error) => {
        setLoading(false);
        setError(error.response.data.msg);
        setSuccess({});
      })
  }

  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className="mt-5 pt-5">
        <div className="container px-4">
          <div className="d-flex justify-content-between top-content">
            <h4>Update Password</h4>
            <button className="btn btn-success mb-2">
              <Link to="/profile">Profie</Link>
            </button>
          </div>
          <div className="card">
            <form className="p-3">
              <div className="col-lg-6 mx-auto">
                <label htmlFor="old-p">Old Password</label>
                <input className="form-control" type="text" name="oldPassword" onChange={(e) => setOldPassword(e.target.value)} id="old-p" placeholder="Old Password" />
                <label htmlFor="new-p">New Password</label>
                <input className="form-control" type="text" onChange={(e) => setPassword(e.target.value)} name="" id="new-p" placeholder="New Password" />

                <label htmlFor="confirm-p">Confirm New Password</label>
                <input className="form-control" type="text" name="" id="confirm-p" onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm New Password" />
                {error && <p className="text-danger">{error}</p>}
                <button onClick={changePassword} disabled={loading} className="btn btn-success mt-2">Update Password</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UpdatePassword;
