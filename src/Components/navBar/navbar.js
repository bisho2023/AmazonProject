import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./navbar.css";
import edd from "../images/3eed.jpg";

import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";

const languages = [
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "ar",
    name: "العربية",
    dir: "rtl",
    country_code: "sa",
  },
];

const Navbar = () => {
  //language
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  useEffect(() => {
    console.log("Setting page stuff");
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");
  }, [currentLanguage, t]);

  // const counter = useSelector((state) => state.count);
  return (
    // <div classNameName="container-fluid pt-5">
    //   <div classNameName="row  position-relative">
    //     <div classNameName="col-12 nav-butt">
    //       <span classNameName="nv-b-item mx-2">
    //         <strong>
    //           <NavLink
    //             style={({ isActive }) =>
    //               isActive ? { color: "orange" } : { color: "white" }
    //             }
    //             href="#"
    //           >
    //             {t("all_pages")}
    //           </NavLink>
    //         </strong>
    //       </span>
    //       <span classNameName="nv-b-item mx-2">
    //         <NavLink
    //           style={({ isActive }) =>
    //             isActive ? { color: "orange" } : { color: "white" }
    //           }
    //           to="/"
    //         >
    //           {t("home_page")}
    //         </NavLink>
    //       </span>
    //       <span classNameName="nv-b-item mx-2">
    //         <NavLink
    //           style={({ isActive }) =>
    //             isActive ? { color: "orange" } : { color: "white" }
    //           }
    //           to="/accessories"
    //         >
    //           {t("accessories-page")}
    //         </NavLink>
    //       </span>
    //       <span classNameName="nv-b-item mx-2">
    //         <NavLink
    //           style={({ isActive }) =>
    //             isActive ? { color: "orange" } : { color: "white" }
    //           }
    //           to="/electronics"
    //         >
    //           {t("electronics_page")}
    //         </NavLink>
    //       </span>
    //       <span classNameName="nv-b-item mx-2">
    //         <NavLink
    //           style={({ isActive }) =>
    //             isActive ? { color: "orange" } : { color: "white" }
    //           }
    //           to="/clothing"
    //         >
    //           {t("clothing_Page")}
    //         </NavLink>
    //       </span>
    //       <span classNameName="nv-b-item mx-2">
    //         <NavLink
    //           style={({ isActive }) =>
    //             isActive ? { color: "orange" } : { color: "white" }
    //           }
    //           to="/computer"
    //         >
    //           {t("computer_page")}
    //         </NavLink>
    //       </span>
    //       <span classNameName="nv-b-item mx-2">
    //         <NavLink
    //           style={({ isActive }) =>
    //             isActive ? { color: "orange" } : { color: "white" }
    //           }
    //           to="/fashion"
    //         >
    //           {t("fashion_Page")}
    //         </NavLink>
    //       </span>
    //       <span classNameName="nv-b-item mx-2">
    //         <NavLink
    //           style={({ isActive }) =>
    //             isActive ? { color: "orange" } : { color: "white" }
    //           }
    //           to="/grocery"
    //         >
    //           {t("grocery_Page")}
    //         </NavLink>
    //       </span>
    //       <span classNameName="nv-b-item mx-2">
    //         <NavLink
    //           style={({ isActive }) =>
    //             isActive ? { color: "orange" } : { color: "white" }
    //           }
    //           to="/mobile"
    //         >
    //           {t("mobile_page")}
    //         </NavLink>
    //       </span>
    //       <span classNameName="nv-b-item mx-2">
    //         <NavLink
    //           style={({ isActive }) =>
    //             isActive ? { color: "orange" } : { color: "white" }
    //           }
    //           to="/videos"
    //         >
    //           {t("videos_Page")}
    //         </NavLink>
    //       </span>
    //       <span classNameName="nv-b-item mx-2">
    //         <NavLink
    //           style={({ isActive }) =>
    //             isActive ? { color: "orange" } : { color: "white" }
    //           }
    //           to="tv"
    //         >
    //           {t("tv_page")}
    //         </NavLink>
    //       </span>
    //       <span classNameName="nv-b-item mx-2">
    //         <NavLink
    //           style={({ isActive }) =>
    //             isActive ? { color: "orange" } : { color: "white" }
    //           }
    //           to="assd"
    //         >
    //           {t("help_page")}
    //         </NavLink>
    //       </span>
    //       <span classNameName="nv-b-item mx-2">
    //         <NavLink
    //           style={({ isActive }) =>
    //             isActive ? { color: "orange" } : { color: "white" }
    //           }
    //           to="assd"
    //         >
    //           {t("your_mazon.eg")}
    //         </NavLink>
    //       </span>
    //       <span>
    //         <NavLink
    //           style={({ isActive }) =>
    //             isActive ? { color: "orange" } : { color: "white" }
    //           }
    //           to="assd"
    //         >
    //           <img src={edd} />
    //         </NavLink>
    //       </span>

    //       <span>
    //         <NavLink
    //           style={({ isActive }) =>
    //             isActive ? { color: "orange" } : { color: "white" }
    //           }
    //           to="assd"
    //         >
    //           {/* <img src={edd}  /> */}
    //         </NavLink>
    //       </span>
    //     </div>
    //   </div>
    // </div>
    <nav className="navbar navbar-expand-lg bg-dark ">
      <div className="container-fluid ">
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "orange" } : { color: "white" }
          }
          href="#"
        >
          {t("all_pages")}
        </NavLink>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#bishoy"
          aria-controls="bishoy"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i
              class="fas fa-bars"
              style={{ color: "white", fontSize: "28px" }}
            ></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="bishoy">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                style={({ isActive }) =>
                  isActive ? { color: "orange" } : { color: "white" }
                }
                to="/"
              >
                {t("home_page")}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                style={({ isActive }) =>
                  isActive ? { color: "orange" } : { color: "white" }
                }
                to="/accessories"
              >
                {t("accessories-page")}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                style={({ isActive }) =>
                  isActive ? { color: "orange" } : { color: "white" }
                }
                to="/electronics"
              >
                {t("electronics_page")}
              </NavLink>

            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                style={({ isActive }) =>
                  isActive ? { color: "orange" } : { color: "white" }
                }
                to="/clothing"
              >
                {t("clothing_Page")}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                style={({ isActive }) =>
                  isActive ? { color: "orange" } : { color: "white" }
                }
                to="/computer"
              >
                {t("computer_page")}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                style={({ isActive }) =>
                  isActive ? { color: "orange" } : { color: "white" }
                }
                to="/fashion"
              >
                {t("fashion_Page")}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                style={({ isActive }) =>
                  isActive ? { color: "orange" } : { color: "white" }
                }
                to="/grocery"
              >
                {t("grocery_Page")}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                style={({ isActive }) =>
                  isActive ? { color: "orange" } : { color: "white" }
                }
                to="/mobile"
              >
                {t("mobile_page")}
              </NavLink>
            </li>


            <li className="nav-item">
              <NavLink
                className="nav-link"
                style={({ isActive }) =>
                  isActive ? { color: "orange" } : { color: "white" }
                }
                to="/videos"
              >
                {t("videos_Page")}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                style={({ isActive }) =>
                  isActive ? { color: "orange" } : { color: "white" }
                }
                to="tv"
              >
                {t("tv_page")}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                style={({ isActive }) =>
                  isActive ? { color: "orange" } : { color: "white" }
                }
                to="/help"
              >
                {t("help_page")}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                style={({ isActive }) =>
                  isActive ? { color: "orange" } : { color: "white" }
                }
                to="404"
              >
                {t("amazon.eg")}
              </NavLink>
            </li>
          </ul>
          {/* <li className="nav-item">
            <NavLink className="nav-link eed" to="assd">
              <img src={edd} />
            </NavLink>
          </li> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
