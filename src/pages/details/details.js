import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import "./details.css";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import edd from "../images/04.jpg";
import { useDispatch, useSelector } from "react-redux";
import changeCards, { changeCounter } from "../../store/action";
import { t } from "i18next";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";

const Details = () => {
    //language
    const currentLanguageCode = Cookies.get("i18next") || "en";
    const { t } = useTranslation();

  const { name } = useParams();
  const [product, setProduct] = useState([]);
  const productsRef = collection(db, "products");
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.card);
  const counter = useSelector((state) => state.count);
  const fetchPost = async () => {
    const q = query(productsRef, where("name", "==", name));

    const querySnapshot = await getDocs(q);

    const products = [];

    querySnapshot.forEach((doc) => {
      products.push(doc.data());
    });

    setProduct(products);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="container-fluid">
      {product.map((prd, index) => {
        return (
          <div className="row mt-5" key={index}>
            <div className="col-md-4">
              <img className="w-100" src={prd.image}></img>
            </div>
            <div className="col-md-4 ">
              <h1 className="name">{currentLanguageCode==='en' ? `${prd.name}` : `${prd.namear}`}</h1>
              <p className="lead desc">{currentLanguageCode === "en"
                        ? `${prd.description}`
                        : `${prd.descriptionar}`}</p>
              <p>
                <strong>
                <h3>{t("price")} {prd.price}  <span>  {currentLanguageCode === "en"
                      ? "LE"
                      : "ج.م"}</span> </h3>
                </strong>
              </p>
            </div>
            <div className="col-md-3 menu">
              <h1></h1>
              <p>
                <strong>
                {t("price")}  <span className="price">${prd.price}</span>
                </strong>
              </p>
              <a href="">{currentLanguageCode === "en"
                      ? "FREE Returns"
                      : "شحن مجاني"}  </a> <br></br>
              <a href=""> {currentLanguageCode === "en"
                      ? "FREE Returns "
                      : "استرجاع مجاني"}</a> <strong>May 4-6</strong> <br></br>
              <p>{currentLanguageCode === "en"
                      ? "Or fastest delivery Tomorrow, "
                      : "أو يمكنك الشحن السريع غدأ"}
                 <br></br>{currentLanguageCode === "en"
                      ? "May 4. Order within 22 hrs 33 mins"
                      : "الوصول غدا بعد 22 ساعه من الان"} 
              </p>
              <button
                style={{
                  fontSize: "14px",
                  borderWidth: "3px",
                  borderRadius: "10px",
                  borderStyle: "solid",
                  padding: "0 20px 0 20px",
                  marginTop: "1.2rem",
                  marginLeft: "4rem",
                  // position: "absolute",
                  // left: "30%",
                  // bottom: "0",
                  // marginBottom: "1rem",
                }}
                className="btn btn-warning"
                onClick={() => {
                  dispatch(changeCards([...cards, prd]));
                  dispatch(changeCounter(counter + 1));
                }}
              >
                {t("addcart")}
              </button>
              <div className="row mt-3">
                <div className="col-sm-6 pp">{currentLanguageCode === "en"
                      ? "Payment"
                      : "طريقه الدفع"}</div>
                <div className="col-sm-6 ">
                  <a href="" className="l">
                  {currentLanguageCode === "en"
                      ? "Secure transaction "
                      : "عند الاستلام"}
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 pp">{currentLanguageCode === "en"
                      ? "Ships from "
                      :"الشحن من"}</div>
                <div className="col-sm-6">{currentLanguageCode === "en"
                      ? "Amazon.eg "
                      : "امازون"}</div>
              </div>
              <div className="row">
                <div className="col-sm-6 pp">{currentLanguageCode === "en"
                      ? "Sold by"
                      : "البائع"}</div>
                <div className="col-sm-6">{currentLanguageCode === "en"
                      ? "Amazon.eg "
                      : "امازون"}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Details;
