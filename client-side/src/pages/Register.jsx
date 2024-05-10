import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

function Register() {
  const [input, setInput] = useState({
    email: "",
    password: "",
    fullName: "",
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

    try {
      await axios({
        method: "post",
        url: "http://localhost:3000/register",
        data: input,
      });

      navigate("/");

      Swal.fire({
        text: "User has been successfully added",
        icon: "success",
      });
    } catch (error) {
      Swal.fire({
        text: error.response.data.message,
        icon: "error",
      });
    }
  };
  return (
    <>
      <div className="d-flex align-items-center justify-content-center vh-100">
        <section
          className="container"
          id="login-section">
          <div className="row">
            <div className="col-12 col-lg-8 offset-lg-2 my-5">
              <div className="row">
                <div className="col-12 col-md-6 border-end p-1 text-left">
                  <img
                    src="https://brik.id/_nuxt/icons/512x512.maskable.5a938ee5.png"
                    width="350px"
                    alt="logo"
                  />
                </div>
                <div className="col-12 col-md-6 p-5 text-left">
                  <div className="form-signin m-auto">
                    <form
                      id="login-form"
                      onSubmit={handleSubmit}>
                      <h1 className="h3 mb-3 display-1">
                        Register your account
                      </h1>
                      <div className="mb-3 mt-3">
                        <div className="d-flex justify-content-between">
                          <label htmlFor="register-email">Email</label>
                          <label className="text-danger text-end fw-bold">
                            *
                          </label>
                        </div>
                        <input
                          id="register-email"
                          type="email"
                          name="email"
                          onChange={handleInputChange}
                          className="form-control"
                          placeholder="Enter email address ..."
                        />
                      </div>
                      <div className="mb-4">
                        <div className="d-flex justify-content-between">
                          <label htmlFor="register-password">Password</label>
                          <label className="text-danger text-end fw-bold">
                            *
                          </label>
                        </div>
                        <input
                          id="register-password"
                          type="password"
                          name="password"
                          onChange={handleInputChange}
                          className="form-control"
                          placeholder="Enter your password ..."
                        />
                      </div>
                      <div className="mb-4">
                        <div className="d-flex justify-content-between">
                          <label htmlFor="register-fullname">Full Name</label>
                          <label className="text-danger text-end fw-bold">
                            *
                          </label>
                        </div>
                        <input
                          id="register-fullname"
                          type="text"
                          name="fullName"
                          onChange={handleInputChange}
                          className="form-control"
                          placeholder="Enter your full name ..."
                        />
                      </div>
                      <button
                        className="btn btn-lg btn-outline-dark rounded-pill w-100 p-2"
                        type="submit">
                        Register
                      </button>
                    </form>
                    <p className="mt-3 text-center">
                      Already have an account? <Link to={"/"}>Login</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Register;
