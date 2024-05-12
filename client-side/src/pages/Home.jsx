import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "../components/SideBar";
import TableItem from "../components/TableItem";
import { deleteProductById, fetchData } from "../features/productSlice";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const [params, setParams] = useState({});

  const products = useSelector((state) => state.products.list);
  const page = useSelector((state) => state.products.page);
  const dispatch = useDispatch();

  const handlePage = (number) => {
    setParams({
      ...params,
      "page[number]": number,
    });
  };

  let totalPage = [];
  for (let i = 1; i <= page; i++) {
    totalPage.push(i);
  }

  useEffect(() => {
    dispatch(fetchData(params));
  }, [params]);

  const handleDelete = (id) => {
    dispatch(deleteProductById(id));
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <SideBar />
        <main
          className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
          id="product-section">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="display-2">Products</h1>
            <Link to={"/add"}>
              <button
                className="btn btn-outline-dark rounded-pill"
                id="new-product">
                New Product
              </button>
            </Link>
          </div>
          <TableItem
            products={products.data}
            handleDelete={handleDelete}
          />
          <ul className="pagination mb-5 mt-3 justify-content-center">
            <li
              className="page-item px-4 py-2 rounded-start"
              style={{ cursor: "pointer" }}
              onClick={() => {
                handlePage(1);
              }}>
              «
            </li>
            {totalPage.map((item) => (
              <li
                className="page-item px-4 py-2"
                key={item}
                onClick={() => {
                  handlePage(item);
                }}
                name="page[number]"
                style={{ cursor: "pointer" }}>
                {item}
              </li>
            ))}
            <li
              className="page-item px-4 py-2 rounded-end"
              style={{ cursor: "pointer" }}
              onClick={() => {
                handlePage(totalPage.length);
              }}>
              »
            </li>
          </ul>
        </main>
      </div>
    </div>
  );
}

export default Home;
