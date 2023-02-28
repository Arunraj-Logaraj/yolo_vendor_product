import { useNavigate } from "react-router-dom";
import "./App.css";
import logoPng from "./images/logo.png";
import logoSvg from "./images/logo.svg";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div class="wrapper">
      <div class="mobile-menu">
        <nav class="navbar navbar-expand-lg">
          <a class="sidebar-logo mb-5 d-none" href>
            <img src={logoPng} alt="" />
          </a>
          <button
            class="navbar-toggler p-0"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="icon-hamburger text-primary menu-icon"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <div>
              <div class="mobile-menu-header">
                <button type="button" class="close-btn" id="c_lose">
                  <i class="icon-l-arrow"></i>
                </button>
              </div>
            </div>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href>
                  {" "}
                  <img class="mr-3" src="images/icons/dashboard.svg" alt="" />
                  Dashboard
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active"
                  data-toggle="collapse"
                  href="#collapseExample"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <img class="mr-3" src="images/icons/cart.svg" alt="" />
                  My Products
                </a>
                <div class="collapse" id="collapseExample">
                  <div class="card card-body">
                    <div class="sub-menu">
                      <a
                        class="nav-link"
                        href
                        onClick={() => {
                          navigate("/addproduct");
                        }}
                      >
                        View Product
                      </a>
                      <a
                        class="nav-link"
                        href
                        onClick={() => {
                          navigate("/addproduct");
                        }}
                      >
                        Add Product
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href>
                  <img class="mr-3" src="images/icons/cart.svg" alt="" />
                  My Orders
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href>
                  <img class="mr-3" src="images/icons/profile.svg" alt="" />
                  My Profile
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href>
                  <img class="mr-3" src="images/icons/profile.svg" alt="" />
                  Settings
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <nav class="navbar ml-auto user-menu">
          <div class="dropdown show ml-3">
            <a
              class="dropdown-toggle"
              href
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img class="mr-1 user-img" src="images/user.png" alt="" />
              <div class="header-name">Jessia Rose</div>
            </a>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a class="dropdown-item" href>
                Action
              </a>
              <a class="dropdown-item" href>
                Another action
              </a>
              <a class="dropdown-item" href>
                Something else here
              </a>
            </div>
          </div>
        </nav>
      </div>

      <div class="side-bar d-none d-md-block">
        <nav class="navbar navbar-expand-lg">
          <a class="sidebar-logo mb-5" href>
            <img src={logoSvg} alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="icon-hamburger text-dark"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a
                  class="nav-link"
                  href
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  {" "}
                  <img class="mr-3" src="images/icons/dashboard.svg" alt="" />
                  Dashboard
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link"
                  href
                  onClick={() => {
                    navigate("/productlist");
                  }}
                >
                  <img class="mr-3" src="images/icons/cart.svg" alt="" /> View
                  Product
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href
                  onClick={() => {
                    navigate("/addproduct");
                  }}
                >
                  <img class="mr-3" src="images/icons/cart.svg" alt="" /> Add
                  Product
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href>
                  <img class="mr-3" src="images/icons/cart.svg" alt="" />
                  My Orders
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href>
                  <img class="mr-3" src="images/icons/profile.svg" alt="" />
                  My Profile
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href>
                  <img class="mr-3" src="images/icons/profile.svg" alt="" />
                  Settings
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div class="main-content">
        <div class="header d-none d-md-block">
          <div class="header-content">
            <a href>
              <img src="./assets/images/app-images/notification.svg" alt="" />
            </a>
            <div class="dropdown show ml-3 user-menu">
              <a
                class="dropdown-toggle"
                href
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img class="mr-1" src="images/user.png" alt="" />
                <div class="header-name">Jessia Rose</div>
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" href>
                  Action
                </a>
                <a class="dropdown-item" href>
                  Another action
                </a>
                <a class="dropdown-item" href>
                  Something else here
                </a>
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
