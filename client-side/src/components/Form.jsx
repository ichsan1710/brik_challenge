import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useEffect } from "react";

function Form({ dataCategories, dataProduct }) {
  const { id } = useParams();

  const [input, setInput] = useState({
    CategoryId: 0,
    categoryName: "",
    sku: "",
    name: "",
    description: "",
    weight: 0,
    image: "",
    price: 0,
  });

  const navigate = useNavigate();

  function handleInputChange(e) {
    const { name, value } = e.target;

    setInput({
      ...input,
      [name]: value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    let config = {
      method: "post",
      url: "http://localhost:3000/products",
      headers: {
        Authorization: "Bearer " + localStorage.access_token,
      },
      data: input,
    };

    if (id) {
      config.method = "put";
      config.url = `http://localhost:3000/products/${id}`;
    }

    try {
      await axios(config);

      navigate("/home");
      if (id) {
        Swal.fire({
          text: "Product has been successfully edited",
          icon: "success",
        });
      } else {
        Swal.fire({
          text: "Product has been successfully added",
          icon: "success",
        });
      }
    } catch (error) {
      Swal.fire({
        text: error.response.data.message,
        icon: "error",
      });
    }
  };

  useEffect(() => {
    if (dataProduct) {
      setInput(dataProduct);
    }
  }, [dataProduct]);
  return (
    <>
      <div className="row">
        <div className="col-12 col-md-6">
          <form
            id="product-form"
            onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="product-name">
                Name <span className="text-danger fw-bold">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="product-name"
                placeholder="Enter product name"
                name="name"
                value={input.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="product-name">
                Category Name <span className="text-danger fw-bold">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="category-name"
                placeholder="Enter category name"
                name="categoryName"
                value={input.categoryName}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="product-category">
                Category <span className="text-danger fw-bold">*</span>
              </label>
              <select
                id="product-category"
                className="form-select"
                onChange={handleInputChange}
                name="CategoryId"
                value={input.CategoryId}>
                <option>-- Select Category --</option>
                {dataCategories.map((item) => (
                  <option
                    value={item.id}
                    key={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="product-desc">
                Description <span className="text-danger fw-bold">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="product-desc"
                placeholder="Enter product description"
                name="description"
                value={input.description}
                onChange={handleInputChange}
              />
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="mb-3">
                  <label htmlFor="product-price">
                    Price <span className="text-danger fw-bold">*</span>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="product-price"
                    placeholder="Enter product price"
                    name="price"
                    value={input.price}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="mb-3">
                  <label htmlFor="product-weight">
                    Weight <span className="text-danger fw-bold">*</span>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="product-weight"
                    placeholder="Enter product weight"
                    name="weight"
                    value={input.weight}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="product-image">
                Image <span className="text-danger fw-bold">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="product-image"
                placeholder="Enter product image url"
                name="image"
                value={input.image}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="product-stock">
                SKU <span className="text-danger fw-bold">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="product-sku"
                placeholder="Enter product sku"
                name="sku"
                value={input.sku}
                onChange={handleInputChange}
              />
            </div>
            <div className="row mt-5 mb-3">
              <div className="col-6">
                <Link to={"/home"}>
                  <button className="btn btn-lg btn-light rounded-pill w-100 p-2">
                    Cancel
                  </button>
                </Link>
              </div>
              <div className="col-6">
                <button
                  className="btn btn-lg btn-outline-dark rounded-pill w-100 p-2"
                  type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
