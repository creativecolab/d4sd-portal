import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
// import Button from './landing/Button';

import logo from "../assets/img/logo_black.png";
import "./style.less";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      isTop: true
    };
  }

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  }

  render() {
    return (
      <div className="Navbar">
        <nav
          className={
            this.state.isTop
              ? "navbar navbar-expand-md navbar-light fixed-top mh-5 bg-white"
              : "navbar navbar-expand-md navbar-light fixed-top mh-5 main-nav"
          }
        >
          <Link className="navbar-brand" to="/home">
            <img src={logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="collapsibleNavbar"
          >
            <ul className="navbar-nav align-items-end">
              <li className="nav-item">
                <NavLink
                  className="nav-link mr-xl-4"
                  to="/home"
                  activeClassName="active"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link mr-xl-4"
                  to="/process"
                  activeClassName="active"
                >
                  Process
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link mr-xl-4"
                  to="/about"
                  activeClassName="active"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link mr-xl-4"
                  to="/getinvolved"
                  activeClassName="active"
                >
                  Get Involved
                </NavLink>
              </li>
              {/** <li className="nav-item">
                <NavLink className="nav-link mr-xl-4" to='/challenge' activeClassName="active">Challenge</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link mr-xl-4" to='/faq' activeClassName="active">FAQ</NavLink>
              </li>* */}
              {/** <li className="nav-item">
                <Link className="nav-link pr-3" to='/challenge'>Challenge</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle pr-3" data-toggle="dropdown">Resources</Link>
                  <div className="dropdown-menu">
                    <Link to='/' className="dropdown-item">Design Tools</Link>
                    <Link to='/' className="dropdown-item">News in the city</Link>
                    <Link to='/solution' className="dropdown-item">Past Solutions</Link>
                  </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link pr-3" to='/faq'>FAQs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link pr-3" to='/events'>Events</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link pr-3" to='/forum'>Forum</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/#'>Log in</Link>
              </li>* */}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
