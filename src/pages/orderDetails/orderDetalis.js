import React from 'react';
import { useAuth } from '../../context/GlobalProvider';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './OrderDetalis.css';
import {
    MDBCard,
    MDBCardBody,
    MDBCardFooter,
    MDBCardHeader,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBProgress,
    MDBProgressBar,
    MDBRow,
    MDBTypography,
  } from "mdb-react-ui-kit";
const OrderDetalis = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const getBasketTotal = (cards) =>
        cards.reduce((amount, item) => {
            return amount + item.price;
        }, 0);
    const dispatch = useDispatch();
    const cards = useSelector((state) => state.card);
    const counter = useSelector((state) => state.count);



    return (
        // <div className="container-fluid ">
        //     <h3>
        //         {t("welcome_message")} {user ? `${user.email}` : "Guest"}
        //     </h3>

        //     {/* <h3 className="hello">Hello ahmed</h3> */}
        //     <h2 className="checkout-title">{t("basket")}</h2>
        //     <hr />
        //     <div className="row ">
        //         <div className="col-lg-8 col-md-6">
        //             {cards.map((prd, index) => {
        //                 return (
        //                     <div className="checkoutProduct">
        //                         <img className="checkoutProduct-image" src={prd.image} />
        //                         <div className="checkoutProduct-info">
        //                             <p className="checkoutProduct-title">
        //                                 {currentLanguageCode === "en"
        //                                     ? `${prd.description}`
        //                                     : `${prd.descriptionar}`}
        //                             </p>
        //                             <p className="checkoutProduct-price">
        //                                 <strong>$ </strong>
        //                                 <strong> {prd.price}</strong>
        //                             </p>

        //                             <button
        //                                 style={{
        //                                     fontSize: "13px",
        //                                     borderWidth: "1px",
        //                                     borderRadius: "8px",
        //                                     borderStyle: "solid",
        //                                     padding: "0 10px 0 11px",
        //                                 }}
        //                                 onClick={() => {
        //                                     let index = cards.findIndex(
        //                                         (ele) => ele.name === prd.name
        //                                     );
        //                                     cards.splice(index, 1);
        //                                     dispatch(changeCards([...cards]));
        //                                     dispatch(changeCounter(counter - 1));
        //                                 }}
        //                             >
        //                                 {t("remove")}
        //                             </button>
        //                         </div>
        //                     </div>
        //                 );
        //             })}
        //         </div>
        //         <div className="col-lg-3 col-md-6">
        //             <div className="subtotal">
        //                 <p>
        //                     {" "}
        //                     {t("subtotal")} <strong>${getBasketTotal(cards)}</strong>
        //                 </p>
        //                 <small className="subtotal__gift">
        //                     <input type="checkbox" /> {t("gift")}
        //                 </small>
        //                 <button
        //                     onClick={() =>
        //                         user ? navigate("/checkout") : navigate("/login")
        //                     }
        //                 >
        //                     {" "}
        //                     {t("proceed")}
        //                 </button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        // <div className="h-100 gradient-custom">
        //     <div className="container py-5 h-100">
        //         <div className="row d-flex justify-content-center align-items-center h-100">
        //             <div className="col-lg-10 col-xl-8">
        //                 <div className="card" style={{borderRadius: "10px;"}}>
        //                     <div className="card-header px-4 py-5">
        //                         <h5 className="text-muted mb-0">Thanks for your Order, <span style={{color: "#a8729a;"}}>Anna</span>!</h5>
        //                     </div>
        //                     <div className="card-body p-4">
        //                         <div className="d-flex justify-content-between align-items-center mb-4">
        //                             <p className="lead fw-normal mb-0" style={{color: "#a8729a;"}}>Receipt</p>
        //                             <p className="small text-muted mb-0">Receipt Voucher : 1KAU9-84UIL</p>
        //                         </div>
        //                         <div className="card shadow-0 border mb-4">
        //                             <div className="card-body">
        //                                 <div className="row">
        //                                     <div className="col-md-2">
        //                                         <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/13.webp"
        //                                             className="img-fluid" alt="Phone"/>
        //                                     </div>
        //                                     <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
        //                                         <p className="text-muted mb-0">Samsung Galaxy</p>
        //                                     </div>
        //                                     <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
        //                                         <p className="text-muted mb-0 small">White</p>
        //                                     </div>
        //                                     <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
        //                                         <p className="text-muted mb-0 small">Capacity: 64GB</p>
        //                                     </div>
        //                                     <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
        //                                         <p className="text-muted mb-0 small">Qty: 1</p>
        //                                     </div>
        //                                     <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
        //                                         <p className="text-muted mb-0 small">$499</p>
        //                                     </div>
        //                                 </div>
        //                                 <hr className="mb-4" style={{backgroundColor:"#e0e0e0" , opacity:" 1;"}}/>
        //                                     <div className="row d-flex align-items-center">
        //                                         <div className="col-md-2">
        //                                             <p className="text-muted mb-0 small">Track Order</p>
        //                                         </div>
        //                                         <div className="col-md-10">
        //                                             <div className="progress" style={{height:" 6px;", borderRadius:" 16px;"}}>
        //                                                 <div className="progress-bar" role="progressbar"
        //                                                     style={{width: "65%;", borderRadius: "16px;", backgroundColor:" #a8729a;"}} aria-valuenow="65"
        //                                                     aria-valuemin="0" aria-valuemax="100"></div>
        //                                             </div>
        //                                             <div className="d-flex justify-content-around mb-1">
        //                                                 <p className="text-muted mt-1 mb-0 small ms-xl-5">Out for delivary</p>
        //                                                 <p className="text-muted mt-1 mb-0 small ms-xl-5">Delivered</p>
        //                                             </div>
        //                                         </div>
        //                                     </div>
        //                             </div>
        //                         </div>
        //                         <div className="card shadow-0 border mb-4">
        //                             <div className="card-body">
        //                                 <div className="row">
        //                                     <div className="col-md-2">
        //                                         <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/1.webp"
        //                                             className="img-fluid" alt="Phone"/>
        //                                     </div>
        //                                     <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
        //                                         <p className="text-muted mb-0">iPad</p>
        //                                     </div>
        //                                     <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
        //                                         <p className="text-muted mb-0 small">Pink rose</p>
        //                                     </div>
        //                                     <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
        //                                         <p className="text-muted mb-0 small">Capacity: 32GB</p>
        //                                     </div>
        //                                     <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
        //                                         <p className="text-muted mb-0 small">Qty: 1</p>
        //                                     </div>
        //                                     <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
        //                                         <p className="text-muted mb-0 small">$399</p>
        //                                     </div>
        //                                 </div>
        //                                 <hr className="mb-4" style="background-color: #e0e0e0; opacity: 1;"/>
        //                                     <div className="row d-flex align-items-center">
        //                                         <div className="col-md-2">
        //                                             <p className="text-muted mb-0 small">Track Order</p>
        //                                         </div>
        //                                         <div className="col-md-10">
        //                                             <div className="progress" style="height: 6px; border-radius: 16px;">
        //                                                 <div className="progress-bar" role="progressbar"
        //                                                     style="width: 20%; border-radius: 16px; background-color: #a8729a;" aria-valuenow="20"
        //                                                     aria-valuemin="0" aria-valuemax="100"></div>
        //                                             </div>
        //                                             <div className="d-flex justify-content-around mb-1">
        //                                                 <p className="text-muted mt-1 mb-0 small ms-xl-5">Out for delivary</p>
        //                                                 <p className="text-muted mt-1 mb-0 small ms-xl-5">Delivered</p>
        //                                             </div>
        //                                         </div>
        //                                     </div>
        //                             </div>
        //                         </div>

        //                         <div className="d-flex justify-content-between pt-2">
        //                             <p className="fw-bold mb-0">Order Details</p>
        //                             <p className="text-muted mb-0"><span className="fw-bold me-4">Total</span> $898.00</p>
        //                         </div>

        //                         <div className="d-flex justify-content-between pt-2">
        //                             <p className="text-muted mb-0">Invoice Number : 788152</p>
        //                             <p className="text-muted mb-0"><span className="fw-bold me-4">Discount</span> $19.00</p>
        //                         </div>

        //                         <div className="d-flex justify-content-between">
        //                             <p className="text-muted mb-0">Invoice Date : 22 Dec,2019</p>
        //                             <p className="text-muted mb-0"><span className="fw-bold me-4">GST 18%</span> 123</p>
        //                         </div>

        //                         <div className="d-flex justify-content-between mb-5">
        //                             <p className="text-muted mb-0">Recepits Voucher : 18KU-62IIK</p>
        //                             <p className="text-muted mb-0"><span className="fw-bold me-4">Delivery Charges</span> Free</p>
        //                         </div>
        //                     </div>
        //                     <div className="card-footer border-0 px-4 py-5"
        //                         style="background-color: #a8729a; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">
        //                         <h5 className="d-flex align-items-center justify-content-end text-white text-uppercase mb-0">Total
        //                             paid: <span className="h2 mb-0 ms-2">$1040</span></h5>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <section
        className="h-100 gradient-custom"
        style={{ backgroundColor: "#eee" }}
      >
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="10" xl="8">
              <MDBCard style={{ borderRadius: "10px" }}>
                <MDBCardHeader className="px-4 py-5">
                  <MDBTypography tag="h5" className="text-muted mb-0">
                    Thanks for your Order,{" "}
                    <span style={{ color: "#a8729a" }}>Anna</span>!
                  </MDBTypography>
                </MDBCardHeader>
                <MDBCardBody className="p-4">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <p
                      className="lead fw-normal mb-0"
                      style={{ color: "#a8729a" }}
                    >
                      Receipt
                    </p>
                    <p className="small text-muted mb-0">
                      Receipt Voucher : 1KAU9-84UIL
                    </p>
                  </div>

                  <MDBCard className="shadow-0 border mb-4">
                    <MDBCardBody>
                      <MDBRow>
                        <MDBCol md="2">
                          <MDBCardImage
                            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/13.webp"
                            fluid
                            alt="Phone"
                          />
                        </MDBCol>
                        <MDBCol
                          md="2"
                          className="text-center d-flex justify-content-center align-items-center"
                        >
                          <p className="text-muted mb-0">Samsung Galaxy</p>
                        </MDBCol>
                        <MDBCol
                          md="2"
                          className="text-center d-flex justify-content-center align-items-center"
                        >
                          <p className="text-muted mb-0 small">White</p>
                        </MDBCol>
                        <MDBCol
                          md="2"
                          className="text-center d-flex justify-content-center align-items-center"
                        >
                          <p className="text-muted mb-0 small">
                            Capacity: 64GB
                          </p>
                        </MDBCol>
                        <MDBCol
                          md="2"
                          className="text-center d-flex justify-content-center align-items-center"
                        >
                          <p className="text-muted mb-0 small">Qty: 1</p>
                        </MDBCol>
                        <MDBCol
                          md="2"
                          className="text-center d-flex justify-content-center align-items-center"
                        >
                          <p className="text-muted mb-0 small">$499</p>
                        </MDBCol>
                      </MDBRow>
                      <hr
                        className="mb-4"
                        style={{ backgroundColor: "#e0e0e0", opacity: 1 }}
                      />
                      <MDBRow className="align-items-center">
                        <MDBCol md="2">
                          <p className="text-muted mb-0 small">Track Order</p>
                        </MDBCol>
                        <MDBCol md="10">
                          <MDBProgress
                            style={{ height: "6px", borderRadius: "16px" }}
                          >
                            <MDBProgressBar
                              style={{
                                borderRadius: "16px",
                                backgroundColor: "#a8729a",
                              }}
                              width={65}
                              valuemin={0}
                              valuemax={100}
                            />
                          </MDBProgress>
                          <div className="d-flex justify-content-around mb-1">
                            <p className="text-muted mt-1 mb-0 small ms-xl-5">
                              Out for delivary
                            </p>
                            <p className="text-muted mt-1 mb-0 small ms-xl-5">
                              Delivered
                            </p>
                          </div>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCard>

                  <MDBCard className="shadow-0 border mb-4">
                    <MDBCardBody>
                      <MDBRow>
                        <MDBCol md="2">
                          <MDBCardImage
                            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/1.webp"
                            fluid
                            alt="Phone"
                          />
                        </MDBCol>
                        <MDBCol
                          md="2"
                          className="text-center d-flex justify-content-center align-items-center"
                        >
                          <p className="text-muted mb-0">iPad</p>
                        </MDBCol>
                        <MDBCol
                          md="2"
                          className="text-center d-flex justify-content-center align-items-center"
                        >
                          <p className="text-muted mb-0 small">Pink rose</p>
                        </MDBCol>
                        <MDBCol
                          md="2"
                          className="text-center d-flex justify-content-center align-items-center"
                        >
                          <p className="text-muted mb-0 small">
                            Capacity: 32GB
                          </p>
                        </MDBCol>
                        <MDBCol
                          md="2"
                          className="text-center d-flex justify-content-center align-items-center"
                        >
                          <p className="text-muted mb-0 small">Qty: 1</p>
                        </MDBCol>
                        <MDBCol
                          md="2"
                          className="text-center d-flex justify-content-center align-items-center"
                        >
                          <p className="text-muted mb-0 small">$399</p>
                        </MDBCol>
                      </MDBRow>
                      <hr
                        className="mb-4"
                        style={{ backgroundColor: "#e0e0e0", opacity: 1 }}
                      />
                      <MDBRow className="align-items-center">
                        <MDBCol md="2">
                          <p className="text-muted mb-0 small">Track Order</p>
                        </MDBCol>
                        <MDBCol md="10">
                          <MDBProgress
                            style={{ height: "6px", borderRadius: "16px" }}
                          >
                            <MDBProgressBar
                              style={{
                                borderRadius: "16px",
                                backgroundColor: "#a8729a",
                              }}
                              width={20}
                              valuemin={0}
                              valuemax={100}
                            />
                          </MDBProgress>
                          <div className="d-flex justify-content-around mb-1">
                            <p className="text-muted mt-1 mb-0 small ms-xl-5">
                              Out for delivary
                            </p>
                            <p className="text-muted mt-1 mb-0 small ms-xl-5">
                              Delivered
                            </p>
                          </div>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCard>

                  <div className="d-flex justify-content-between pt-2">
                    <p className="fw-bold mb-0">Order Details</p>
                    <p className="text-muted mb-0">
                      <span className="fw-bold me-4">Total</span> $898.00
                    </p>
                  </div>

                  <div className="d-flex justify-content-between pt-2">
                    <p className="text-muted mb-0">Invoice Number : 788152</p>
                    <p className="text-muted mb-0">
                      <span className="fw-bold me-4">Discount</span> $19.00
                    </p>
                  </div>

                  <div className="d-flex justify-content-between">
                    <p className="text-muted mb-0">
                      Invoice Date : 22 Dec,2019
                    </p>
                    <p className="text-muted mb-0">
                      <span className="fw-bold me-4">GST 18%</span> 123
                    </p>
                  </div>

                  <div className="d-flex justify-content-between mb-5">
                    <p className="text-muted mb-0">
                      Recepits Voucher : 18KU-62IIK
                    </p>
                    <p className="text-muted mb-0">
                      <span className="fw-bold me-4">Delivery Charges</span>{" "}
                      Free
                    </p>
                  </div>
                </MDBCardBody>
                <MDBCardFooter
                  className="border-0 px-4 py-5"
                  style={{
                    backgroundColor: "#a8729a",
                    borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px",
                  }}
                >
                  <MDBTypography
                    tag="h5"
                    className="d-flex align-items-center justify-content-end text-white text-uppercase mb-0"
                  >
                    Total paid: <span className="h2 mb-0 ms-2">$1040</span>
                  </MDBTypography>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    );
}

export default OrderDetalis;
