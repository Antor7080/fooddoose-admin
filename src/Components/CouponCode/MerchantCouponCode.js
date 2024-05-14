import React, { useEffect, useState } from 'react';
import useAxios from '../../Hooks/useAxios';

const MerchantCouponCode = () => {
    const axios = useAxios();
    const [couponCodes, setCouponCodes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get('/couponCode/all-coupon-code?addedBy=2')
            .then(function (response) {
                if (response.status === 200) {
                    setCouponCodes(response.data.couponCode);
                }
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
                setLoading(false);
            });
    }, []);

    const handleStatus = (id, status) => {
        axios.patch(`/couponCode/update/${id}`, { status })
            .then(function (response) {
                if (response.status === 200) {
                    const newCouponCodes = couponCodes.map((data) => {
                        if (data._id === id) {
                            return { ...data, status: status };
                        }
                        return data;
                    });
                    setCouponCodes(newCouponCodes);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const handleDelete = (id) => {
        axios.delete(`/couponCode/delete/${id}`)
            .then(function (response) {
                if (response.status === 200) {
                    const newCouponCodes = couponCodes.filter((data) => data._id !== id);
                    setCouponCodes(newCouponCodes);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const [deleteID, setDeleteID] = useState('');
    return (
        <div>
            <main className="pt-5 mt-5">
                <div className="container px-4">
                    <h4>Coupon Code List</h4>
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

                            <div className="table-responsive">

                                <div className="row">
                                    <div className="col-6 col-lg-3 col-md-4">
                                    </div>
                                </div>
                                <table className="table table-bordered text-center">
                                    <thead style={{ backgroundColor: "#ededed" }}>
                                        <tr style={{ verticalAlign: "top" }}>
                                            <th scope="col">couponCode</th>
                                            <th scope="col">Resturent</th>
                                            <th scope="col">Number</th>
                                            <th scope="col">Discount Type</th>
                                            <th scope="col">Discount</th>
                                            <th scope="col">Used</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        {couponCodes?.length === 0 && (
                                            <p className="text-danger  text-center">No data found!</p>
                                        )}
                                        {couponCodes &&
                                            couponCodes?.map((data) => (
                                                <tr key={data._id}>

                                                    <td>
                                                        {data?.couponCode}
                                                    </td>
                                                    <td>
                                                        {data?.user?.resturentName}
                                                    </td>
                                                    <td>
                                                        {data?.user?.number}
                                                    </td>
                                                   
                                                    <td>
                                                        {data?.disCountType}
                                                    </td>
                                                    <td>
                                                        {data?.discount}
                                                    </td>
                                                    <td>
                                                        {data?.usedUserList?.length}
                                                    </td>
                                                    <td>{data?.status}</td>
                                                    <td className="d-flex align-items-center justify-content-around" style={{ minWidth: "100px" }}>
                                                        <button title="Active" className="btn btn-warning" onClick={() => { handleStatus(data._id, "Active") }}
                                                            disabled={data.status === "Active"}
                                                        >
                                                            <i
                                                                className="bi bi-toggle-on"
                                                                style={{ color: "#660000" }}
                                                            ></i> Active

                                                        </button>
                                                        <button title="Inactive" className="btn btn-warning"
                                                            disabled={data.status === "Inactive"}
                                                            onClick={() => { handleStatus(data._id, "Inactive") }}
                                                        >
                                                            <i
                                                                className="bi bi-toggle-off"
                                                                style={{ color: "#660000" }}
                                                            ></i> Inactive
                                                        </button>


                                                        <button
                                                            title="Delete"
                                                            className="btn btn-danger"
                                                            type="button"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#exampleModal2"
                                                            onClick={() => { setDeleteID(data._id) }}
                                                        >
                                                            {" "}
                                                            <i className="fas fa-trash text-">{" "}</i>
                                                            {" "}  Delate
                                                        </button>

                                                        <div
                                                            className="modal fade"
                                                            id="exampleModal2"
                                                            tabindex="-1"
                                                            aria-labelledby="exampleModalLabel"
                                                            aria-hidden="true"
                                                        >
                                                            <div className="modal-dialog modal-dialog-centered">
                                                                <div className="modal-content ">
                                                                    <div className="modal-header">
                                                                        <h5 className="modal-title" id="exampleModalLabel">
                                                                            Are you want sure to delete?
                                                                        </h5>
                                                                        <button type="button"
                                                                            className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                    </div>

                                                                    <div className="modal-footer border-0">
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-danger border border-danger"
                                                                            data-bs-dismiss="modal" aria-label="Close"
                                                                        >
                                                                            No
                                                                        </button>
                                                                        <button
                                                                            onClick={() => handleDelete(deleteID)}
                                                                            type="button"
                                                                            className="btn btn-primary button-common-color"
                                                                            data-bs-dismiss="modal" aria-label="Close"
                                                                        >
                                                                            Yes
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>

                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default MerchantCouponCode;