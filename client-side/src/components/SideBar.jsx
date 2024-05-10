import { Link, useNavigate } from "react-router-dom";

function SideBar() {
  const navigate = useNavigate();
  return (
    <>
      <nav
        className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
        id="sidebar-menu">
        <div className="position-sticky pt-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link
                to={"/home"}
                className="nav-link"
                href=""
                id="nav-product">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/categories"}
                className="nav-link"
                href=""
                id="nav-category">
                Categories
              </Link>
            </li>
          </ul>
          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
            <span>Account</span>
          </h6>
          <ul className="nav flex-column mb-2">
            <li className="nav-item">
              <button
                onClick={() => {
                  localStorage.removeItem("access_token");
                  navigate("/");
                }}
                className="nav-link"
                href=""
                id="nav-logout">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default SideBar;
