import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Form from "../components/Form";

function UpdateProduct() {
  const { id } = useParams();

  const [dataProduct, setDataProduct] = useState(null);
  const [dataCategories, setDataCategories] = useState([]);

  async function fetchDataById() {
    try {
      const { data } = await axios({
        method: "get",
        url: `http://localhost:3000/products/${id}`,
        headers: {
          Authorization: "Bearer " + localStorage.access_token,
        },
      });

      setDataProduct(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (id) {
      fetchDataById();
    }
  }, [id]);

  async function fetchData() {
    try {
      const { data } = await axios({
        method: "get",
        url: "http://localhost:3000/categories",
        headers: {
          Authorization: "Bearer " + localStorage.access_token,
        },
      });

      setDataCategories(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <main
            className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
            id="new-product-section">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="display-2">Update Product</h1>
            </div>
            <Form
              dataProduct={dataProduct}
              dataCategories={dataCategories}
            />
          </main>
        </div>
      </div>
    </>
  );
}

export default UpdateProduct;
