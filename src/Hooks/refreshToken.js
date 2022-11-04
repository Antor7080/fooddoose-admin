import axiosInstance from "./axios";
const refresh = (refreshToken) => {
  return new Promise((resolve, reject) => {
    axiosInstance.post("/user/refreshToken", { token: refreshToken }).then((data) => {
      if (data.data.success === false) {
        resolve(false);
      } else {
        const { accessToken } = data.data;
        resolve(accessToken);
      }
    });
  });
};

export default refresh;
