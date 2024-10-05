import { Component } from "react";import { Link } from "react-router-dom";
import Cart from "./Cart";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <nav className="container-fluid row">
          <ul>
            <li>
              <img src="/images/icons/menu.svg" alt="menu" />
            </li>
            <li>
              <img src="/images/brand.svg" alt="brand" />
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
          <ul>
            <li className="circle-icon row">
              <img src="/images/icons/search.svg" alt="search" />
            </li>
            <Cart />
            <li className="circle-icon row">
              <img src="/images/icons/user.svg" alt="user" />
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
