import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
const useFunctions = () => {

  const [address, setAddress] = useState("");
  const [getLocation, setGetLocation] = useState(address);
  const [errors, serErrors] = useState("");
  const [user, setUser] = useState({});
  const [user1, setUser1] = useState({});
  const [defaultLocation, setDefaultLocation] = useState(0, 0);

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
  const loginUser = (items) => {
    axios
      .post("http://localhost:5000/user/login", items)
      .then((response) => {
        if (response.status === 200) {
          Toast.fire({
            icon: "success",
            title: "Login Successfull",
          });

          console.log(response.data.userData);
          localStorage.setItem("user", JSON.stringify(response.data.userData));
          localStorage.setItem("token", response.data.accesstoken);
          localStorage.setItem("refreshtoken", response.data.refreshtoken);
          setUser1(JSON.stringify(response.data.userData));
          if (response.data.userData.role === 3) {
            items.history.push("admin/dashboard");
          } else if (response.data.userData.role === 2) {
            items.history.push("merchant/dashboard");
          } else {
            localStorage.removeItem("token");
            localStorage.removeItem("user_name");
            Toast.fire({
              icon: "error",
              title: "You have no permission to login",
            });
          }
        }
      })
      .catch((error) => {
        console.log("ERROR:: ", error.response.data);
        // serErrors(error.response.data.errors);
        Toast.fire({
          icon: "error",
          title: error.response.data.msg,
        });
        if (error.response.data.errors) {
          serErrors(error.response.data.errors);
        } else {
          serErrors("");
        }
      });
  };

  const logout = (history) => {
    axios.post("http://localhost:5000/user/logout", { rf: localStorage.getItem("refreshtoken") }).then((res) => {
      console.log(res);
      if (res.status === 200) {
        window.location.reload();
        Toast.fire({
          icon: "success",
          title: res.data.msg,
        });

        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("refreshtoken");
        history.push("/login");
        window.location.reload();
      }
    });
  };

  return {
    logout,
    loginUser,
    errors,
    user,
    address, setAddress,
    // location, setLocation,
    defaultLocation, setDefaultLocation,
    // DefaultLocation,
    getLocation, setGetLocation

  };
};
export default useFunctions;
