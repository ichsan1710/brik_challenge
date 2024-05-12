import { useState } from "react";
import { Link } from "react-router-dom";

function TableItem({ products, handleDelete }) {
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);

  const confirmDelete = (productId) => {
    handleDelete(productId);
  };
  return (
    <div className="table-responsive">
      <table className="table table-bordered align-middle">
        <thead>
          <tr>
            <th
              scope="col"
              className="text-center">
              #
            </th>
            <th
              scope="col"
              className="text-center">
              Name
            </th>
            <th
              scope="col"
              className="text-center">
              Category
            </th>
            <th
              scope="col"
              width="180px"
              className="text-center">
              Image
            </th>
            <th
              scope="col"
              width="250px"
              className="text-center">
              Description
            </th>
            <th
              scope="col"
              className="text-center">
              SKU
            </th>
            <th
              scope="col"
              className="text-center">
              Price
            </th>
            <th
              scope="col"
              className="text-center">
              Weight
            </th>
            <th
              scope="col"
              width="50px"
              className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody id="table-product">
          {products &&
            products.map((item, index) => (
              <tr key={item.id}>
                <td
                  scope="row"
                  className="text-center">
                  {index + 1}
                </td>
                <td className="fw-bold text-center">{item.name}</td>
                <td className="text-center">{item.categoryName}</td>
                <td>
                  <img
                    src={item.image}
                    className="img-fluid mx-auto d-block"
                    alt={item.name}
                    style={{ maxWidth: "200px", maxHeight: "200px" }}
                  />
                </td>
                <td>{item.description}</td>
                <td className="text-center">{item.sku}</td>
                <td className="fw-bold text-center">
                  Rp {item.price.toLocaleString()}
                </td>
                <td className="text-center">{item.weight} g</td>
                <td>
                  <div className="container">
                    <span
                      onClick={() => setConfirmDeleteId(item.id)}
                      className="ms-3 text-danger"
                      style={{ cursor: "pointer" }}>
                      <span className="material-icons">delete</span>
                    </span>
                    <Link
                      to={`/edit/${item.id}`}
                      className="ms-3 text-danger">
                      <span className="material-icons">edit</span>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {confirmDeleteId && (
        <div
          className="modal fade show"
          style={{ display: "block" }}
          tabIndex="-1"
          role="dialog">
          <div
            className="modal-dialog"
            role="document">
            <div className="modal-content">
              <div className="modal-header bg-black text-white">
                <h5 className="modal-title">Confirm Delete</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setConfirmDeleteId(null)}></button>
              </div>
              <div className="modal-body bg-black text-white">
                Are you sure you want to delete this item?
              </div>
              <div className="modal-footer bg-black text-white">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setConfirmDeleteId(null)}>
                  No
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    confirmDelete(confirmDeleteId);
                    setConfirmDeleteId(null);
                  }}>
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TableItem;
