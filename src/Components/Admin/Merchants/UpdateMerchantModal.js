
import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import useAxios from '../../../Hooks/useAxios';

const UpdateMerchantModal = ({ data, call, setCall }) => {
    const custoAxios = useAxios();
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const handleDelete = (e) => {
        const status = { status: 'Rejected' }
        e.preventDefault();
        custoAxios.patch(`/user/update/${data._id}`, status)
            .then(function (response) {
                if (response.status === 200) {
                    setCall(!call);
                    Toast.fire({
                        icon: "success",
                        title: response.data.msg,
                    });
                }
                else if (response.status === 400) {
                    Toast.fire({
                        icon: "error",
                        title: response.data.msg,
                    });
                    console.log(response);
                }
            })
            .catch((error) => {
                console.log("ERROR:: ", error.response?.data);
                // serErrors(error.response.data.errors);
                Toast.fire({
                    icon: "error",
                    title: error.response.data.msg,
                });

            });
    }
    useEffect(() => { }, [])
    return (
        <div>
            <>

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
                                    onClick={handleDelete}
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
            </>
        </div>
    );
};

export default UpdateMerchantModal;