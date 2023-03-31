import React from "react";
import { useDispatch, useSelector } from "react-redux";
import changeCards from "../../store/action";
import { changeCounter } from "../../store/action";

const Cards = () => {
  const cards = useSelector((state) => state.card);
  const counter = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container ">
        <div className="row ">
          {cards.map((prd,index) => {
            return (
              <div className=" col-4 " key={index}>
                <div className="card ">
                  <img
                    className="card-img-top "
                    src={prd.image}
                    alt="Card image cap"
                    style={{height:"50%"}}
                  />
                  <div className="card-body">
                    
                    <h5 className="card-title">{prd.name}</h5>
                    <p className="card-text">{prd.description}</p>
                    <h3>Price : {prd.price}</h3>
                    <i
                      onClick={() => {
                        let index = cards.findIndex(
                          (ele) => ele.id === cards.id
                        );
                        cards.splice(index, 1);
                        dispatch(changeCards([...cards]));
                        dispatch(changeCounter(counter - 1));
                      }}
                      className={"fa-solid fa-trash trash mt-2"}
                    ></i>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cards;
