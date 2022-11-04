import React, { useEffect, useState } from "react";
import Navbar from "../../../layouts/backend/Navbar";
import Sidebar from "../../../layouts/backend/Sidebar";
import { useParams } from "react-router-dom";
import useAxios from "../../../Hooks/useAxios";



const ViewMerchant = () => {
  const custoAxios = useAxios()
  const { id } = useParams()
  const [merchantData, setMerchantData] = useState([]);
  useEffect(() => {
    custoAxios.get(`/user/single-user-info/${id}`)
      .then(res => setMerchantData(res.data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);



  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className="mt-5 pt-5  ">
        <section className="container px-4">
          <div className="container-fluid pt-3">
            <div className="row g-2 mb-2">
              <div className="col-lg-5 col-md-5">
                <div className="p-2 view-top">
                  <div className="d-flex align-middle align-items-center justify-content-between">
                    <div className="me-3">
                      <img
                        src={`http://localhost:5000/public/uploads/${merchantData.image}`}
                        alt=""
                        style={{ height: "100px", width: "100px" }}
                      />
                    </div>
                    <div className="">
                      <h4>{merchantData.name}</h4>
                      <h6>{merchantData.user_address}</h6>
                    </div>
                  </div>
                </div>
              </div>
              {/*     <div className="col-lg-3 col-md-3">
                <div className="p-2 view-top">
                  <h4>Today Balance</h4>
                  <p>12000</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-2">
                <div className="p-2 view-top">
                  <h4>Total Transaction</h4>
                  <p>20</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-2">
                <div className="p-2 view-top">
                  <h4>Total Income</h4>
                  <p>12000</p>
                </div>
              </div> */}
            </div>
            <h4 className="text-center">Merchant Info</h4>
            <div className="row g-2 view-bottom">

              <div className="col-lg-6 col-md-6">
                <div className="p-2 view-bottom-left">

                  <table className="table table-borderless">
                    <tbody>
                      <tr>
                        <td>Merchant Name</td>
                        <td>{merchantData.name}</td>
                      </tr>
                      <tr>
                        <td>Username</td>
                        <td>{merchantData.email}</td>
                      </tr>
                      <tr>
                        <td>Mobile Number</td>
                        <td>{merchantData.number}</td>
                      </tr>
                      <tr>
                        <td>user address</td>
                        <td>{merchantData.address}</td>
                      </tr>
                      <tr>
                        <td>shop name</td>
                        <td>{merchantData.shopName}</td>
                      </tr>
                      <tr>
                        <td>openHour</td>
                        <td>{merchantData.openHour}</td>
                      </tr>
                      <tr>
                        <td>closeHour </td>
                        <td>{merchantData.closeHour}</td>
                      </tr>


                    </tbody>
                  </table>

                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
};

export default ViewMerchant;
