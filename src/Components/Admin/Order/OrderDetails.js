import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../../../Hooks/useAxios";
import logo from "../../../images/logoCircle.png";
import Navbar from "../../../layouts/backend/Navbar";
import Sidebar from "../../../layouts/backend/Sidebar";
import { useReactToPrint } from "react-to-print";

const OrderDetails = () => {
  const axiosInstance = useAxios();
  const [orderData, setOrderData] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axiosInstance.get(`/order/single-order-get-by-id/${id}`).then((res) => {
      const allData = res.data?.data;
      setOrderData(allData);
      setLoading(false);
    });
  }, [id]);

  const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: "Order Invoice",
        onafterprint: () => alert("Printed"),
    });

  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className="mt-5 pt-5">
        <div className="container-fluid">
          <div className="d-flex justify-content-between top-content">
            <h4>Order Details</h4>{" "}
            <button className="btn btn-primary" onClick={handlePrint}>Print</button>
          </div>
          <div className="text-center d-flex justify-content-center">
            <div className=" shadow  text-center p-5 m-5">
              <div className="invoice-box ">
                <table className="" cellPadding="0" cellSpacing="0">
                  <tbody>
                    <tr className="top">
                      <td className="" colSpan="2">
                        <div className="">
                          <table className="">
                            <tbody>
                              <tr>
                                <td className="title">
                                  <img src={logo} style={{ width: "100%", maxWidth: "150px" }} alt="" />
                                </td>

                                <td>
                                  Invoice #: {orderData?._id}<br />
                                  Created: {new Date(orderData?.createdAt).toLocaleString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}<br />
                                  Time: {new Date(orderData?.createdAt).getHours()} : {new Date(orderData?.createdAt).getMinutes()} : {new Date(orderData?.createdAt).getSeconds()}<br />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </td>
                    </tr>
                  </tbody>

                  <tbody>
                    <tr className="information">
                      <td colSpan="2">
                        <table>
                          <thead>
                            <tr>
                              <td className="pe-5">
                                {orderData?.merchant?.shopName}<br />
                                {orderData?.merchant?.address ? orderData?.merchant?.address : "Unknown Location"}<br />
                                {orderData?.merchant?.number}
                              </td>

                              <td>
                                {orderData?.name}<br />
                                {orderData?.address}<br />
                                {orderData?.phone ? orderData?.phone : "Unknown Number"}
                              </td>
                            </tr>
                          </thead>
                        </table>
                      </td>
                    </tr>
                  </tbody>


                </table>
                <table className="table text-center ">
                  <thead className='thead-light'>
                    <tr>
                      <th scope="col">Item Name</th>
                      <th scope="col">Previous Price</th>
                      <th scope="col">Discount</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Price</th>
                      <th scope="col">Food Price </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      orderData?.items?.map((item) => (
                        <tr>
                          <th className='text-left' scope="row">{item?.itemName}</th>
                          <td className='text-center'>{item?.withOutDiscountPrice}</td>
                          <td>{item?.discountPrice}</td>
                          <td>{item?.quantity}</td>
                          <td>{item?.price}</td>
                          <td className='text-end'>{item?.price * item?.quantity}</td>
                        </tr>
                      ))
                    }

                    <tr className='thead-light'>
                      <td></td>
                      <td>Delivery Cost</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td className='text-end'>{orderData?.deliveryCost} </td>
                    </tr>

                    <tr className='thead-light'>
                      <td></td>
                      <td>Coupon Discount</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td className='text-end'> -{orderData?.discount} </td>
                    </tr>
                    <tr className='bg-secondary text-light fw-bold'>
                      <td></td>
                      <td>Total: </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td className='text-end'>{parseInt(orderData?.cartTotal) + parseInt(orderData?.deliveryCost)} </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div></div>

        </div>
      </main>
    </div>
  );
};

export default OrderDetails;
