import React, { useRef, useState } from 'react';
import Swal from 'sweetalert2';
import useAxios from '../../Hooks/useAxios';

const AddCouponCode = () => {
    const axios = useAxios();

    const form = useRef(null);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    console.log(errors)
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
    const submit = async (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);
        setLoading(true);
        axios.post('/couponCode/new-coupon-code', formData)
            .then(function (response) {
                if (response.status === 200) {
                    setErrors("");
                    form.current.reset();
                    Toast.fire({
                        icon: "success",
                        title: "Coupon Code added successfull!!",
                    });
                } else if (response.status === 400) {
                    Toast.fire({
                        icon: "error",
                        title: response.data.msg,
                    });
                }
                setLoading(false);
            })
            .catch((error) => {
                console.log(error.response.data.errors);
                setErrors(error.response.data.errors);
                setLoading(false);
            });

    }

    return (
        <div>
            <main className="mt-5 pt-5">
                <div className="container-fluid">
                    <div
                        style={{ backgroundColor: "rgb(255, 90, 0, .6)" }}
                        className="d-flex justify-content-between top-content align-items-center p-2"
                    >
                        <h3 style={{ color: "#640000" }}>Add Banner</h3>{" "}
                    </div>
                    <div className="card-body border rounded">

                        <form
                            ref={form}
                            onSubmit={submit}
                            className="add-merchant"
                            encType="multipart/form-data"
                        >
                            <h4 className="text-success mt-2 mb-3">
                                Banner <span style={{ color: "#640000" }}>Information</span>
                            </h4>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
                                    <label htmlFor="couponCode">Coupon Code</label>
                                    <input className="form-control" type="text" name="couponCode" id="couponCode" placeholder="Coupon Code" />
                                    <div style={{ color: "red" }}>
                                        {errors?.couponCode && errors?.couponCode.msg}
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
                                    <label htmlFor="minimumAmount">Minimum Amount</label>
                                    <input className="form-control" type="text" name="minimumAmount" id="minimumAmount" placeholder="Minimum Amount" ></input>
                                    <div style={{ color: "red" }}>
                                        {errors?.minimumAmount && errors?.minimumAmount.msg}
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
                                    <label htmlFor="disCountType">Discount Type</label>
                                    <select id="disCountType" className="form-control" name="disCountType" >
                                        <option value="Percentage">Percentage</option>
                                        <option value="Fixed">Fixed</option>
                                    </select>
                                    <div style={{ color: "red" }}>
                                        {errors?.disCountType && errors?.disCountType.msg}
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
                                    <label htmlFor="discount">Discount</label>
                                    <input className="form-control" type="text" name="discount" id="discount" placeholder="Discount" />
                                    <div style={{ color: "red" }}>
                                        {errors?.discount && errors?.discount.msg}
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
                                    <label htmlFor="discount">Maximum Amount</label>
                                    <input className="form-control" type="text" name="maximumAmount" id="maximumAmount" placeholder="maximumAmount" />
                                    <div style={{ color: "red" }}>
                                        {errors?.maximumAmount && errors?.maximumAmount.msg}
                                    </div>
                                </div>
                             

                                <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
                                    <label htmlFor="status">Select Status</label>
                                    <select id="status" className="form-control" name="status">
                                        <option value="Active">Active</option>
                                        <option value="Inactive">Inactive</option>
                                    </select>
                                    <div style={{ color: "red" }}>
                                        {errors?.status && errors?.status.msg}
                                    </div>
                                </div>
                            </div>
                            <button disabled={loading} className="btn btn-success mt-2 common-color">
                                Add Coupon Code
                            </button>
                        </form>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default AddCouponCode;