import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useAxios from "../../../Hooks/useAxios";
import Navbar from "../../../layouts/backend/Navbar";
import Sidebar from "../../../layouts/backend/Sidebar";

const OrderDetails = () => {
  const axiosInstance = useAxios();
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(false);
  const [merchant, setMerchant] = useState([]);
  const [displayMerChantData, setDisplayMerChantData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [call, setCall] = useState(true);
  const axios = useAxios();
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axiosInstance.get(`/order/single-order-get-by-id/${id}`).then((res) => {
      const allData = res.data?.data;
      setOrder(allData);
      setLoading(false);
    });
  }, [page, call]);

  const handleApprove = (id) => {
    axiosInstance.put(`/order/approved-order/${id}`);
    setCall(!call);
  };

  const handleReject = (id) => {
    axiosInstance.put(`/order/rejected-order/${id}`);
    setCall(!call);
  };

  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className="mt-5 pt-5">
        <div className="container-fluid">
          <div className="d-flex justify-content-between top-content">
            <h4>Order Details</h4>{" "}
          </div>
          <div className="card-body border rounded">
            {order?.items?.map((data) => {
              return (
                <div className="card br-gray">
                  <div className="card-body">
                    <h5 className="card-title">{data.itemName}</h5>
                    <div className="card-text">
                      <b>Category: </b>
                      {data.categoryName}
                    </div>
                    <div className="card-text">
                      <b>Price: </b>
                      {data.price}
                    </div>
                    <div className="card-text">
                      <b>Quantity: </b>
                      {data.quantity}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrderDetails;
