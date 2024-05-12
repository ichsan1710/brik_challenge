import { useEffect } from "react";
import Form from "../components/Form";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../features/categorySlice";

function AddProduct() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.list);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <main
          className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
          id="new-product-section">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="display-2">New Product</h1>
          </div>
          <Form dataCategories={categories} />
        </main>
      </div>
    </div>
  );
}

export default AddProduct;
