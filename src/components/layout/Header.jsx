import React from "react";
import { Link } from "react-router-dom";
import { IoFastFoodOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const NavItem = (props) => {
  const { name, path } = props;
  return (
    <li className="nav-item">
      <Link className="nav-link" to={path}>
        {name}
      </Link>
    </li>
  );
};

const Header = () => {
  const bugers = useSelector((state) => state.burgerReducer.burgers);
  const cartCount = bugers.length;
  const pages = [
    { name: "Accueil", path: "/" },
    { name: "A propos", path: "/about" },
    { name: "Menus", path: "/menu" },
    { name: "Nous Contacter", path: "/contact" },
    { name: "Se Connecter", path: "/login" },
  ];
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link class="navbar-brand ms-5" to="/">
            <IoFastFoodOutline style={{ fontSize: "50px", color: "blue" }} />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse navbar-nav justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div class="navbar-nav">
              <ul className="navbar-nav">
                {pages.map((item, index) => (
                  <NavItem key={index} name={item.name} path={item.path} />
                ))}
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="menu-right">
              <Link to="/cart">
                <i class="fas fa-shopping-bag fa-2x grey"></i>
                <span class="badge badge-pill badge-success">{cartCount}</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
