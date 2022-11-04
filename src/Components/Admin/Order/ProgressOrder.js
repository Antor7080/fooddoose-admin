import GetOrders from '../../../Hooks/GetOrders';
import Navbar from '../../../layouts/backend/Navbar';
import Sidebar from '../../../layouts/backend/Sidebar';

const ProgressOrder = () => {
  const { order, page = 1, setPage, pageCount, loading } = GetOrders("Progressing");
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className="mt-5 pt-5">
        <div className="container-fluid">
          <div className="d-flex justify-content-between top-content">
            <h4>All Order page section</h4>{" "}
          </div>
          <div className="card-body border rounded">
            <div className="d-flex justify-content-between table-top">
              <input
                className="form-control mb-3"
                style={{ width: "30%" }}
                type="text"
                name=""
                id=""
                placeholder="Search"
              />

              <div
                className="btn-group mb-3"
                role="group"
                aria-label="Basic example"
              >
                <button type="button" className="btn btn-success">
                  Copy
                </button>
                <button type="button" className="btn btn-success">
                  CSV
                </button>
                <button type="button" className="btn btn-success">
                  Excel
                </button>
                <button type="button" className="btn btn-success">
                  PDF
                </button>
                <button type="button" className="btn btn-success">
                  Print
                </button>
              </div>
            </div>
            {loading ? <div className="text-center">
              <div className="spinner-border text-center text-danger" style={{ width: "13rem", height: '13rem' }} role="status">
                <span className="sr-only text-danger">Loading...</span>
              </div>
            </div> : <div className="table-responsive">
              <table className="table table-bordered text-center">
                <thead style={{ backgroundColor: "#ededed" }}>
                  <tr style={{ verticalAlign: "top" }}>

                    <th scope="col">Order ID</th>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Restaurant name</th>
                    <th scope="col">Contact No</th>
                    <th scope="col">Total Price</th>
                    <th scope="col">Food Price</th>
                    <th scope="col">Delivery Price</th>
                    <th scope="col">Delivery Location</th>
                    <th scope="col">Payment</th>
                    <th scope="col">Order Date</th>
                    <th scope="col">Status</th>
                    {/* <th scope="col">Action</th> */}
                  </tr>
                </thead>
                <tbody className="text-center">
                  {order.length === 0 && (
                    <p className="text-danger text-center">No data found!</p>
                  )}
                  {order && order?.map((data) => {
                    return (
                      <tr>

                        <th scope="row">{data?.orderId}</th>
                        <td>{data?.name}</td>
                        <td>{data?.items[0]?.shopName}</td>
                        <td>{data?.phone}</td>
                        <td>
                          {parseInt(data?.cartTotal) +
                            parseInt(data?.deliveryCost)}
                        </td>
                        <td>{data?.cartTotal}</td>
                        <td>{data?.deliveryCost}</td>
                        <td>{data?.address}</td>
                        <td>Cash on delivery</td>
                        <td>
                          {new Date(data?.createdAt).toLocaleDateString("en-GB")}
                        </td>
                        <td>{data?.status}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>}
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">

                  <a
                    type="button"
                    onClick={() => setPage(page - 1)}
                    className={
                      page === 1 ? "page-link btn disabled" : "page-link btn"
                    }
                    href
                  >
                    Previous
                  </a>
                </li>

                {[...Array(pageCount).keys()].map((number) => (
                  <li className="page-item" key={number}>

                    <button
                      onClick={() => setPage(number + 1)}
                      className={
                        page === number + 1
                          ? " btn pagination-btn btn-success"
                          : "page-link btn pagination-btn"
                      }
                    >
                      {number + 1}
                    </button>
                  </li>
                ))}

                <li className="page-item">
                  <a
                    onClick={() => setPage(page + 1)}
                    className={
                      page === (pageCount || 1)
                        ? "page-link btn disabled"
                        : "page-link btn"
                    }
                    href
                  >
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </main>
    </div>
  );
};
export default ProgressOrder;