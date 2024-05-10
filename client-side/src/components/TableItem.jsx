import { Link } from "react-router-dom";

function TableItem({ products, handleDelete }) {
  return (
    <div className="table-responsive">
      <table className="table table-bordered align-middle">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th
              scope="col"
              width="180px">
              Image
            </th>
            <th
              scope="col"
              width="250px">
              Description
            </th>
            <th scope="col">Stock</th>
            <th scope="col">Price</th>
            <th scope="col">Author</th>
            <th
              scope="col"
              width="50px">
              Actions
            </th>
          </tr>
        </thead>
        <tbody id="table-product">
          {products &&
            products.map((item, index) => (
              <tr key={item.id}>
                <td scope="row">{index + 1}</td>
                <td className="fw-bold">{item.name}</td>
                <td>
                  <img
                    src={item.imgUrl}
                    className="img-fluid"
                    alt={item.name}
                  />
                </td>
                <td>{item.description}</td>
                <td>{item.stock}</td>
                <td className="fw-bold">Rp{item.price.toLocaleString()}</td>
                <td>{item.User.role}</td>
                <td>
                  <div className="container">
                    <span
                      onClick={() => {
                        handleDelete(item.id);
                      }}
                      className="ms-3 text-danger"
                      style={{ cursor: "pointer" }}>
                      <span className="material-icons">delete</span>
                    </span>
                    <Link
                      to={`/edit/${item.id}`}
                      className="ms-3 text-danger">
                      <span className="material-icons">edit</span>
                    </Link>
                    <Link
                      to={`/edit-img/${item.id}`}
                      className="ms-3 text-danger">
                      <span className="material-icons">image</span>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableItem;
