import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "../components/SideBar";
import TableItem from "../components/TableItem";
import Swal from "sweetalert2";

function Home() {
  const [products, setProducts] = useState([]);

  async function fetchData() {
    try {
      const { data } = await axios({
        method: "get",
        url: "http://localhost:3000/products",
        headers: {
          Authorization: "Bearer " + localStorage.access_token,
        },
      });

      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

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
          {/* <TableItem
            products={products}
            handleDelete={handleDelete}
          /> */}
        </main>
      </div>
    </div>
  );
}

export default Home;
