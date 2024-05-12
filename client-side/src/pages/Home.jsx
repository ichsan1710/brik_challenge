import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "../components/SideBar";
import TableItem from "../components/TableItem";
import Swal from "sweetalert2";

function Home() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState();
  const [params, setParams] = useState({});

  function handlePage(number) {
    setParams({
      ...params,
      "page[number]": number,
    });
  }

  let totalPage = [];
  for (let i = 1; i <= page; i++) {
    totalPage.push(i);
  }

  async function fetchData() {
    try {
      const { data } = await axios({
        method: "get",
        url: "http://localhost:3000/products",
        headers: {
          Authorization: "Bearer " + localStorage.access_token,
        },
        params: params,
      });

      setPage(data.totalPage);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [params]);

  async function handleDelete(id) {
    try {
      await axios({
        method: "delete",
        url: `http://localhost:3000/products/${id}`,
        headers: {
          Authorization: "Bearer " + localStorage.access_token,
        },
      });

      fetchData();
      Swal.fire({
        text: "Product has been deleted",
        icon: "success",
      });
    } catch (error) {
      Swal.fire({
        text: error.response.data.message,
        icon: "error",
      });
    }
  }

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
                window.scrollTo(0, 0);
              }}>
              «
            </li>
            {totalPage.map((item) => (
              <li
                className="page-item px-4 py-2"
                key={item}
                onClick={() => {
                  handlePage(item);
                  window.scrollTo(0, 0);
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
                window.scrollTo(0, 0);
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
