import "./App.css";
import logo from "./images/logo.png";
const Navbar = () => {
  return (
    <div class="header d-none d-md-block">
      <div class="header-content">
        <a href="">
          <img src="./assets/images/app-images/notification.svg" alt="" />
        </a>
        <div class="dropdown show ml-3 user-menu">
          <a
            class="dropdown-toggle"
            href="#"
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
            <a class="dropdown-item" href="#">
              Action
            </a>
            <a class="dropdown-item" href="#">
              Another action
            </a>
            <a class="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
