import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";

function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  function handleInputChange(e) {
    const { name, value } = e.target;

    const newInput = {
      ...input,
    };

    newInput[name] = value;

    setInput(newInput);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios({
        method: "post",
        url: "http://localhost:3000/login",
        data: input,
      });
      localStorage.access_token = data.access_token;

      navigate("/home");
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
                        Log in to your account
                      </h1>
                      <div className="mb-3 mt-3">
                        <div className="d-flex justify-content-between">
                          <label htmlFor="login-email">Email</label>
                          <label className="text-danger text-end fw-bold">
                            *
                          </label>
                        </div>
                        <input
                          id="login-email"
                          type="email"
                          name="email"
                          onChange={handleInputChange}
                          className="form-control"
                          value={input.email}
                          placeholder="Enter email address ..."
                        />
                      </div>
                      <div className="mb-4">
                        <div className="d-flex justify-content-between">
                          <label htmlFor="login-password">Password</label>
                          <label className="text-danger text-end fw-bold">
                            *
                          </label>
                        </div>
                        <input
                          id="login-password"
                          type="password"
                          name="password"
                          onChange={handleInputChange}
                          className="form-control"
                          value={input.password}
                          placeholder="Enter your password ..."
                        />
                      </div>
                      <button
                        className="btn btn-lg btn-outline-dark rounded-pill w-100 p-2"
                        type="submit">
                        Log In
                      </button>
                    </form>
                    <p className="mt-3 text-center">
                      Don't have an account yet?{" "}
                      <Link to={"/register"}>Register</Link>
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

export default Login;
