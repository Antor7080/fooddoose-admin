import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";
import Navbar from "../../../layouts/backend/Navbar";
import Sidebar from "../../../layouts/backend/Sidebar";

const DeliveryCost = () => {
    const [deliveryCost, setDeliveryCost] = useState([]);
    const [call, setCall] = useState(false);

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
    const form = useRef(null);
    const [errors, setErrors] = useState("");
    const [loading, setLoading] = useState(false);
    const axiosInstance = useAxios();

    useEffect(() => {
        setLoading(true);
        axiosInstance.get('/delivery-cost').then(function (response) {
            if (response.status === 200) {
                setDeliveryCost(response.data.data);
                setLoading(false);
            }
        }).catch(function (error) {
            console.log(error);
            setLoading(false);
        });

    }, [call])


    const submit = async (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);
        setLoading(true);
        await axiosInstance
            .put("delivery-cost/update-delivery-cost/633cdf967f1b5d8f54b61778", formData)
            .then(function (response) {
                setCall(!call)
                if (response.status === 200) {
                    setDeliveryCost(response?.data.data);
                    setErrors("");
                    Toast.fire({
                        icon: "success",
                        title: response?.data?.msg
                    });
                } else if (response.status === 400) {
                    Toast.fire({
                        icon: "error",
                        title: response?.data?.msg,
                    });
                }
                setLoading(false);

            })
            .catch((error) => {
                setErrors(error.response.data.msg);
                Toast.fire({
                    icon: "error",
                    title: error.response.data.msg,
                });
                setLoading(false);
            });
    };

    return (
        <div>
            <Navbar />
            <Sidebar />
            <main className="mt-5 pt-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6 col-sm-12 ">

                            <div className=" shadow">
                                <div
                                    style={{ backgroundColor: "rgb(255, 90, 0, .6)" }}
                                    className="d-flex shadow justify-content-between top-content align-items-center p-2">
                                    <h3 className="px-5 text-white" style={{ color: "#640000" }}>Delivery Cost</h3>{" "}
                                </div>
                                { <div className="d-flex align-items-center pt-5 border  ">

                                        <div className=" d-flex mx-auto my-auto align-items-center w-75 pb-5">
                                            <table className="table pb-5">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Initial Cost</th>
                                                        <th scope="col">{deliveryCost?.initialCost} Taka</th>

                                                    </tr>
                                                    <tr>

                                                        <th scope="col">costPerKm</th>
                                                        <th scope="col">{deliveryCost?.costPerKm} Taka</th>

                                                    </tr>
                                                    <tr>

                                                        <th scope="col">Free Offer</th>
                                                        <th scope="col">{deliveryCost?.noCost === "Active" ? "Running" : "No Offer Running"}</th>

                                                    </tr>
                                                    {
                                                        deliveryCost?.noCost === "Active" && <tr>

                                                            <th scope="col">Offer Day</th>
                                                            <th scope="col">{deliveryCost?.offerDay} Day</th>

                                                        </tr>
                                                    }
                                                </thead>

                                            </table>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 col-sm-12">
                            <div className="shadow">
                                <div
                                    style={{ backgroundColor: "rgb(255, 90, 0, .6)" }}
                                    className="d-flex justify-content-between shadow top-content align-items-center p-2">
                                    <h3 className="text-white px-5" style={{ color: "#640000" }}>Update Cost</h3>{" "}
                                </div>
                                <div className="card-body border rounded">
                                    {loading ? (
                                        <div className="text-center">
                                            <div
                                                className="spinner-border text-center text-danger"
                                                style={{ width: "13rem", height: "13rem" }}
                                                role="status"
                                            >
                                                <span className="sr-only text-danger">Loading...</span>
                                            </div>
                                        </div>
                                    ) : (
                                        <form
                                            ref={form}
                                            onSubmit={submit}
                                            className="add-merchant"
                                            encType="multipart/form-data"
                                        >
                                            <h4 className="text-success mt-2 mb-3">
                                                Cost <span style={{ color: "#640000" }}>Information</span>
                                            </h4>
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
                                                    <label htmlFor="initialCost">Initial cost</label>
                                                    <input
                                                        className="form-control"
                                                        type="number"
                                                        name="initialCost"
                                                        id="initialCost"
                                                        defaultValue={deliveryCost?.initialCost}
                                                        placeholder="Initial Cost"
                                                    />
                                                    <div style={{ color: "red" }}>
                                                        {errors?.initialCost && errors?.initialCost.msg}
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
                                                    <label htmlFor="initialCost">Cost per km</label>
                                                    <input
                                                        className="form-control"
                                                        type="number"
                                                        name="costPerKm"
                                                        id="costPerKm"
                                                        defaultValue={deliveryCost?.costPerKm}
                                                        placeholder="Cost per km"
                                                    />
                                                    <div style={{ color: "red" }}>
                                                        {errors?.initialCost && errors?.initialCost.msg}
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
                                                    <label htmlFor="status">Free offer?</label>
                                                    <select id="status" className="form-control" name="noCost">
                                                        <option value="Active">Active</option>
                                                        <option value="inActive">inActive</option>
                                                    </select>
                                                    <div style={{ color: "red" }}>
                                                        {errors?.status && errors?.status.msg}
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
                                                    <label htmlFor="initialCost">Offer Day</label>
                                                    <input
                                                        className="form-control"
                                                        type="number"
                                                        name="offerDay"
                                                        id="offerDay"
                                                        defaultValue={deliveryCost?.offerDay}
                                                        placeholder="Offer Day"
                                                    />
                                                    <div style={{ color: "red" }}>
                                                        {errors?.initialCost && errors?.initialCost.msg}
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ color: "red" }}>
                                                {errors
                                                }
                                            </div>
                                            <button className="btn btn-success mt-2 common-color">
                                              Update
                                            </button>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default DeliveryCost;