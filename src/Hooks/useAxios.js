import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";
import useAuth from './useAuth';

const baseURL = "http://localhost:5000";
const useAxios = () => {
    const { logout } = useAuth()
    const history = useHistory()
    let accessToken = localStorage.getItem("token");
    let refreshToken = localStorage.getItem("refreshtoken");
    const axiosInstance = axios.create({
        baseURL,
        headers: { Authorization: accessToken }
    });

    axiosInstance.interceptors.request.use(async request => {
        let Token = ""
        if (!accessToken) {
            accessToken = localStorage.getItem("token") ? localStorage.getItem("token") : null
            request.headers.Authorization = accessToken;
        }
        const { exp } = jwt_decode(accessToken)
        const isExpried = exp < (new Date().getTime() + 1) / 1000;
        if (!isExpried) return request;
        await axios.post(`${baseURL}/user/refreshToken`, { token: refreshToken })
            .then(res => {
                if (res.status === 200) {
                    Token = res.data.accesstoken;
                    localStorage.setItem("token", Token)
                }
            })
            .catch(error => {
                logout(history)
                history.push("/login")
            })
        request.headers.Authorization = Token
        return request
    })

    return axiosInstance
}
export default useAxios;