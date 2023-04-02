import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const counter = useSelector((state) => state.count);
  return (
    <div className="container-fluid pt-5">
      <div className="row">
        <div className="col-12 nav-butt">
          <span className="nv-b-item mx-2">
            <strong>
              <NavLink
                style={({ isActive }) =>
                  isActive ? { color: "orange" } : { color: "white" }
                }
                href="#"
              >
                All
              </NavLink>
            </strong>
          </span>
          <span className="nv-b-item mx-2">
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "orange" } : { color: "white" }
              }
              to="/"
            >
              Home
            </NavLink>
          </span>
          <span className="nv-b-item mx-2">
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "orange" } : { color: "white" }
              }
              to="/accessories"
            >
              Accessories
            </NavLink>
          </span>
          <span className="nv-b-item mx-2">
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "orange" } : { color: "white" }
              }
              to="/electronics"
            >
              Electronics
            </NavLink>
          </span>
          <span className="nv-b-item mx-2">
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "orange" } : { color: "white" }
              }
              to="/clothing"
            >
              Clothing
            </NavLink>
          </span>
          <span className="nv-b-item mx-2">
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "orange" } : { color: "white" }
              }
              to="/computer"
            >
              Computer
            </NavLink>
          </span>
          <span className="nv-b-item mx-2">
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "orange" } : { color: "white" }
              }
              to="/fashion"
            >
              Fashion
            </NavLink>
          </span>
          <span className="nv-b-item mx-2">
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "orange" } : { color: "white" }
              }
              to="/grocery"
            >
              Grocery
            </NavLink>
          </span>
          <span className="nv-b-item mx-2">
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "orange" } : { color: "white" }
              }
              to="/mobile"
            >
              Mobile
            </NavLink>
          </span>
          <span className="nv-b-item mx-2">
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "orange" } : { color: "white" }
              }
              to="/videos"
            >
              Videos
            </NavLink>
          </span>
          <span className="nv-b-item mx-2">
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "orange" } : { color: "white" }
              }
              to="tv"
            >
              TV
            </NavLink>
          </span>
          <span className="nv-b-item mx-2">
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "orange" } : { color: "white" }
              }
              to="asd"
            >
              Help
            </NavLink>
          </span>
          <span className="nv-b-item mx-2">
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "orange" } : { color: "white" }
              }
              to="assd"
            >
              Your Amazon.eg
            </NavLink>
          </span>
          {/* <span className="nv-b-item mx-2">
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
          </span> */}
          {/* <span className="nv-b-item mx-2 w-25"><a href="#"><img src='./2PNG.PNG' /></a></span> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
