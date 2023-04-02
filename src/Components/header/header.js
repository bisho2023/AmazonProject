import React, { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import "./header.css";
import { useSelector } from "react-redux";

const Header = () => {
  const [search, setsearch] = useState("");
  const navigate = useNavigate();
  const counter = useSelector((state) => state.count);
  const handelSubmit = (e) =>{
    e.preventDefault();
    navigate(`/search?name=${search}`);
    setsearch("");
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-darke shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="./1.png" alt="" />
          </a>
          <i className="fa fa-location-dot deliver-icon mr-1"></i>
          <a className="navbar-brand deliver" href="#">
            Deliver to
            <br /> <strong>ASSIUT</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="form-inline my-2 my-lg-0" style={{ width: "68%" }} onSubmit={handelSubmit}>
              <input
                className="form-control mr-sm-2 w-75"
                type="text"
                placeholder="Search Name..."
                aria-label="Search"
                style={{ width: "90% !important" }}
                onChange={(e)=>setsearch(e.target.value)}
                value={search}
              />
              <button
                className="btn shadow my-2 my-sm-0 bg-warning"
              >
                <i className="fa fa-search"></i>
              </button>
            </form>

            <ul className="navbar-nav mr-auto">
              <li
                className="nav-item "
                style={{ display: "grid", placeItems: "center" }}
              >
                <a
                  id="noLogin"
                  className="navbar-brand deliver"
                  href="/signup"
                >
                  Hello Sign in <br />
                  <b style={{ lineHeight: " 1.5" }}>Accounts & Lists</b>
                </a>
                <a id="logged" className="navbar-brand deliver" href="#"></a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  <strong>Orders</strong>
                </a>
              </li>
              <li>
              <span className="nv-b-item mx-2">
            <NavLink className="nav-item" to="/cards">
              <a className="nav-link text-white" href="cart.html">
                <i
                  className="fas fa-shopping-cart"
                  style={{ fontSize: " 19pt;" }}
                ></i>
                Cart{" "}
                <sup>
                  <span
                    className="badge badge-warning p-1 font-weight-bold"
                    id="cartCounter"
                  >
                    {counter}
                  </span>
                </sup>
              </a>
            </NavLink>
          </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
