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

const Details = () => {
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
              <h1 className="name">{prd.name}</h1>
              <p className="lead desc">{prd.description}</p>
              <p>
                <strong>
                  Price : <span className="price">${prd.price}</span>
                </strong>
              </p>
            </div>
            <div className="col-md-3 menu">
              <h1></h1>
              <p>
                <strong>
                  Price : <span className="price">${prd.price}</span>
                </strong>
              </p>
              <a href="">FREE Returns </a> <br></br>
              <a href="">FREE Returns </a> <strong>May 4-6</strong> <br></br>
              <p>
                Or fastest delivery Tomorrow, <br></br>May 4. Order within 22
                hrs 33 mins
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
                <div className="col-sm-6 pp">Payment</div>
                <div className="col-sm-6 ">
                  <a href="" className="l">
                    Secure transaction
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 pp">Ships from</div>
                <div className="col-sm-6">Amazon.eg</div>
              </div>
              <div className="row">
                <div className="col-sm-6 pp">Sold by</div>
                <div className="col-sm-6">Amazon.eg</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Details;
