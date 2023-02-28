import "./App.css";
import { useNavigate } from "react-router-dom";

const SideNavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="side-bar d-none d-md-block">
      <nav className="navbar navbar-expand-lg">
        <a className="sidebar-logo mb-5" href>
          <img src="images/logo.svg" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="icon-hamburger text-dark" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                {" "}
                <img className="mr-3" src="images/icons/dashboard.svg" alt="" />
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                data-toggle="collapse"
                href="#collapseExample1"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample1"
              >
                <img className="mr-3" src="images/icons/cart.svg" alt="" />
                My Products
              </a>
              <div className="collapse" id="collapseExample1">
                <div className="card card-body">
                  <div className="sub-menu">
                    <a className="nav-link" href onClick={() => {
              navigate("/addproduct");
            }}>
                      View Product
                    </a>
                    <a className="nav-link"  href onClick={() => {
              navigate("/addproduct");
            }}>
                      Add Product
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img className="mr-3" src="images/icons/cart.svg" alt="" />
                My Orders
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img className="mr-3" src="images/icons/profile.svg" alt="" />
                My Profile
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default SideNavBar;
