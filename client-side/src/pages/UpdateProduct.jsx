import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataById } from "../features/productSlice";
import { fetchData } from "../features/categorySlice";
import Form from "../components/Form";

function UpdateProduct() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const productById = useSelector((state) => state.products.list);
  const categories = useSelector((state) => state.categories.list);

  useEffect(() => {
    if (id) {
      dispatch(fetchDataById(id));
    }
  }, [id]);

  useEffect(() => {
    dispatch(fetchData());
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
              dataProduct={productById}
              dataCategories={categories}
            />
          </main>
        </div>
      </div>
    </>
  );
}

export default UpdateProduct;
