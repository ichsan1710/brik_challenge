import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";

function Categories() {
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const { data } = await axios({
        method: "get",
        url: "http://localhost:3000/categories",
        headers: {
          Authorization: "Bearer " + localStorage.access_token,
        },
      });

      setData(data);
    } catch (error) {
      Swal.fire({
        text: error.response.data.message,
        icon: "error",
      });
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
              <h1 className="display-2">Categories</h1>
            </div>
            <div className="row">
              <div className="col-3">
                <div className="table-responsive">
                  <table className="table table-bordered align-middle">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="text-center">
                          #
                        </th>
                        <th scope="col">Name</th>
                      </tr>
                    </thead>
                    <tbody id="table-category">
                      {data.map((item, index) => (
                        <tr key={item.id}>
                          <td
                            scope="row"
                            className="text-center">
                            {index + 1}
                          </td>
                          <td className="fw-bold">{item.name}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Categories;
