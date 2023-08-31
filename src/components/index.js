import About from "../pages/about/About";
import Cart from "../pages/cart/Cart";

import Contact from "../pages/contact/Contact";
import Home from "./home/Home";
import Menu from "../pages/menu/Menu";
import Login from "../pages/login/Login";
import { Checkout } from "./Checkout/Checkout";
import Shipping from "../pages/Shipping/Shipping";

export { About, Cart, Contact, Home, Login, Menu };

export const paths = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "*",
    component: Home,
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/menu",
    component: Menu,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    component: Shipping,
    path: "/shipping",
  },
  {
    component: Checkout,
    path: "/checkout",
  },
];
