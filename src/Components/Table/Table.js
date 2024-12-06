import React from "react";
import { BuyersMarket } from "../../mock/BuyersMarket";

const Table = () => {
  return (
    <div className="container mb-5">
      <table className="table align-middle mb-0 bg-white">
        <thead className="bg-light">
          <tr>
            <th>Name</th>
            <th>Phone & Mobile</th>
            <th>Status</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {BuyersMarket.map((buyer, index) => (
            <tr key={index}>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src={buyer.img || "placeholder.jpg"} // صورة افتراضية إذا كانت الصورة غير موجودة
                    alt={`${buyer.name || "User"}'s profile`}
                    style={{ width: "45px", height: "45px" }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">{buyer.name || "N/A"}</p>
                    <p className="text-muted mb-0">{buyer.email || "N/A"}</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="fw-normal mb-1">{buyer.mobile || "N/A"}</p>
                <p className="text-muted mb-0">{buyer.phone || "N/A"}</p>
              </td>
              <td>
                <span
                  className={`badge rounded-pill d-inline ${
                    buyer.status === "Active"
                      ? "badge-success"
                      : buyer.status === "Waiting"
                      ? "badge-warning"
                      : buyer.status === "Inactive"
                      ? "badge-danger"
                      : "badge-secondary"
                  }`}
                >
                  {buyer.status || "Unknown"}
                </span>
              </td>
              <td>{buyer.address || "N/A"}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-link btn-sm btn-rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
