import React from "react";
import "./bootstrap.css";
import "./style.css";


const Home = () => {

  return (
    <>
      <section className="container-fluid p-0 ">
        <div
          id="carouselExampleInterval"
          className="carousel slide  "
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="2000">
              <img
                src="Images/home-img1.jpg"
                className="d-block img-slide  "
                alt=""
              />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img
                src="Images/h-img2.jpg"
                className="d-block img-slide"
                alt=""
              />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img
                src="Images/h-img3.jpg"
                className="d-block img-slide "
                alt=""
              />
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <img
                src="Images/h-img4.jpg"
                className="d-block img-slide "
                alt=""
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="container-fluid cardss ">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 mt-5 ">
              <div className="card mb-4 p-3 shadow-sm d-flex  ">
                <div>
                  <h2 className="fw-bold fonte-card ">
                    Try Prime FREE for 30 days and shop Ramadan Sale deals
                  </h2>
                </div>
                <div className="d-flex">
                  <div>
                    <a href="#">
                      <div>
                        <img
                          className="img-fluid me-2  img-card"
                          src="Images/car-1.jpg"
                          alt=""
                        />
                      </div>
                      <span className="card-b fw-bold">
                        Prime exclusive deals
                      </span>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <div>
                        <img
                          className="img-fluid ms-2 img-card  "
                          src="Images/card-2.jpg"
                          alt=""
                        />
                      </div>
                      <span className="card-b ">
                        Extra 10% off* up to 150 EGP
                      </span>
                    </a>
                  </div>
                </div>
                <div className="d-flex ">
                  <div>
                    <a href="#">
                      <div>
                        <img
                          className="img-fluid me-2  img-card"
                          src="Images/card1-3.jpg"
                          alt=""
                        />
                      </div>

                      <span className="card-b fw-bold">
                        FREE shipping on all deals
                      </span>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <div>
                        <img
                          className="img-fluid ms-2 img-card "
                          src="Images/card1-4.jpg"
                          alt=""
                        />
                      </div>
                      <span className="card-b ">
                        Award-winning movies and TV shows
                      </span>
                    </a>
                  </div>
                </div>

                <div>
                  <a href="#" className="card-a text-decoration-none">
                    Try Prime FREE
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mt-5">
              <div className="card mb-4 p-3 shadow-sm d-flex  ">
                <div>
                  <h2 className="fw-bold fonte-card  ">
                    Ramadan Box | Only for EGP 249
                  </h2>
                </div>

                <div className="mt-3">
                  <a href="#">
                    <img
                      className="img-fluid img-card2"
                      src="Images/card2--.jpg"
                      alt=""
                    />
                  </a>
                </div>

                <div className="">
                  <a href="#" className="card-a text-decoration-none">
                    See more
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 mt-5">
              <div className="card mb-4 p-3 shadow-sm d-flex  ">
                <div>
                  <h2 className="fw-bold fonte-card ">
                    Ramadan Sale | Basics | Low Prices
                  </h2>
                </div>
                <div className="d-flex ">
                  <div className="">
                    <a href="#">
                      <div className="">
                        <img
                          className="img-fluid me-2  img-card"
                          src="Images/card3-1.jpg"
                          alt=""
                        />
                      </div>
                      <span className="card-b fw-bold">Men's Underwear</span>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <div>
                        <img
                          className="img-fluid ms-2 img-card  "
                          src="Images/card3-2.jpg"
                          alt=""
                        />
                      </div>
                      <span className="card-b ">Women's Underwear</span>
                    </a>
                  </div>
                </div>
                <div className="d-flex ">
                  <div>
                    <a href="#">
                      <div>
                        <img
                          className="img-fluid me-2  img-card"
                          src="Images/card3-3.jpg"
                          alt=""
                        />
                      </div>

                      <span className="card-b fw-bold ">Men's Pyjamas</span>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <div>
                        <img
                          className="img-fluid ms-2 img-card "
                          src="Images/card3-4.jpg"
                          alt=""
                        />
                      </div>
                      <span className="card-b ">Women's Pyjamas</span>
                    </a>
                  </div>
                </div>

                <div>
                  <a href="#" className="card-a text-decoration-none ">
                    See more
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 mt-5">
              <div className="card mb-4 p-3 shadow-sm d-flex  ">
                <div>
                  <h2 className="fw-bold fonte-card  ">
                    Ramadan Box | Only for EGP 249
                  </h2>
                </div>

                <div className="">
                  <a href="#">
                    <img
                      className="img-fluid img-card2"
                      src="Images/card2--.jpg"
                      alt=""
                    />
                  </a>
                </div>

                <div className="">
                  <a href="#" className="card-a text-decoration-none">
                    Discover more
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 mt-5">
              <div className="card mb-4 p-3 shadow-sm d-flex  ">
                <div>
                  <h2 className="fw-bold fonte-card ">
                    Try Prime FREE for 30 days and shop Ramadan Sale deals
                  </h2>
                </div>
                <div className="d-flex">
                  <div>
                    <a href="#">
                      <div>
                        <img
                          className="img-fluid me-2  img-card"
                          src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Consumer_Electronics/RamadanSale/XCM_Manual_1539807_5406827_186x116_1X._SY116_CB594887177_.jpg"
                          alt=""
                        />
                      </div>
                      <span className="card-b fw-bold">
                        Prime exclusive deals
                      </span>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <div>
                        <img
                          className="img-fluid ms-2 img-card  "
                          src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Consumer_Electronics/RamadanSale/XCM_Manual_1539807_5406840_186x116_1X._SY116_CB594887177_.jpg"
                          alt=""
                        />
                      </div>
                      <span className="card-b ">
                        Extra 10% off* up to 150 EGP
                      </span>
                    </a>
                  </div>
                </div>
                <div className="d-flex ">
                  <div>
                    <a href="#">
                      <div>
                        <img
                          className="img-fluid me-2  img-card"
                          src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Consumer_Electronics/RamadanSale/XCM_Manual_1539807_5406832_186x116_1X._SY116_CB594887177_.jpg"
                          alt=""
                        />
                      </div>

                      <span className="card-b fw-bold">
                        FREE shipping on all deals
                      </span>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <div>
                        <img
                          className="img-fluid ms-2 img-card "
                          src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Consumer_Electronics/RamadanSale/XCM_Manual_1539807_5406833_186x116_1X._SY116_CB594887177_.jpg"
                          alt=""
                        />
                      </div>
                      <span className="card-b ">
                        Award-winning movies and TV shows
                      </span>
                    </a>
                  </div>
                </div>

                <div>
                  <a href="#" className="card-a text-decoration-none">
                    Try Prime FREE
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mt-5">
              <div className="card mb-4 p-3 shadow-sm d-flex  ">
                <div>
                  <h2 className="fw-bold fonte-card  ">
                    Ramadan Box | Only for EGP 249
                  </h2>
                </div>

                <div className="mt-3">
                  <a href="#">
                    <img
                      className="img-fluid img-card2"
                      src="https://images-eu.ssl-images-amazon.com/images/G/42/SL/RMD23/XCM_Manual_1550658_5423940_379x304_1X._SY304_CB595350662_.jpg"
                      alt=""
                    />
                  </a>
                </div>

                <div className="">
                  <a href="#" className="card-a text-decoration-none">
                    See more
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 mt-5">
              <div className="card mb-4 p-3 shadow-sm d-flex  ">
                <div>
                  <h2 className="fw-bold fonte-card ">
                    Ramadan Sale | Basics | Low Prices
                  </h2>
                </div>
                <div className="d-flex ">
                  <div className="">
                    <a href="#">
                      <div className="">
                        <img
                          className="img-fluid me-2  img-card"
                          src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/OHL/RamadanSale/XCM_Manual_1539820_5408384_186x116_1X._SY116_CB594872581_.jpg"
                          alt=""
                        />
                      </div>
                      <span className="card-b fw-bold">Men's Underwear</span>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <div>
                        <img
                          className="img-fluid ms-2 img-card  "
                          src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/OHL/RamadanSale/XCM_Manual_1539820_5408924_186x116_1X._SY116_CB594884775_.jpg"
                          alt=""
                        />
                      </div>
                      <span className="card-b ">Women's Underwear</span>
                    </a>
                  </div>
                </div>
                <div className="d-flex ">
                  <div>
                    <a href="#">
                      <div>
                        <img
                          className="img-fluid me-2  img-card"
                          src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/OHL/RamadanSale/XCM_Manual_1539820_5408375_186x116_1X._SY116_CB594872581_.jpg"
                          alt=""
                        />
                      </div>

                      <span className="card-b fw-bold ">Men's Pyjamas</span>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <div>
                        <img
                          className="img-fluid ms-2 img-card "
                          src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/OHL/RamadanSale/XCM_Manual_1539820_5408388_186x116_1X._SY116_CB594872581_.jpg"
                          alt=""
                        />
                      </div>
                      <span className="card-b ">Women's Pyjamas</span>
                    </a>
                  </div>
                </div>

                <div>
                  <a href="#" className="card-a text-decoration-none ">
                    See more
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 mt-5">
              <div className="card mb-4 p-3 shadow-sm d-flex  ">
                <div>
                  <h2 className="fw-bold fonte-card  ">
                    Ramadan Box | Only for EGP 249
                  </h2>
                </div>

                <div className="">
                  <a href="#">
                    <img
                      className="img-fluid img-card2"
                      src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/OHL/RamadanSale/XCM_Manual_1539814_5409481_379x304_1X._SY304_CB595223404_.jpg"
                      alt=""
                    />
                  </a>
                </div>

                <div className="">
                  <a href="#" className="card-a text-decoration-none">
                    Discover more
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 mt-5">
              <div className="card mb-4 p-3 shadow-sm d-flex  ">
                <div>
                  <h2 className="fw-bold fonte-card  ">
                    Ramadan Box | Only for EGP 249
                  </h2>
                </div>

                <div className="mt-3">
                  <a href="#">
                    <img
                      className="img-fluid img-card2"
                      src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Consumer_Electronics/RamadanSale/XCM_Manual_1539809_5403570_379x304_1X._SY304_CB595037513_.jpg"
                      alt=""
                    />
                  </a>
                </div>

                <div className="">
                  <a href="#" className="card-a text-decoration-none">
                    See more
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 mt-5">
              <div className="card mb-4 p-3 shadow-sm d-flex  ">
                <div>
                  <h2 className="fw-bold fonte-card  ">
                    Ramadan Box | Only for EGP 249
                  </h2>
                </div>

                <div className="mt-3">
                  <a href="#">
                    <img
                      className="img-fluid img-card2"
                      src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Consumer_Electronics/RamadanSale/XCM_Manual_1539809_5389816_379x304_1X._SY304_CB613184199_.jpg"
                      alt=""
                    />
                  </a>
                </div>

                <div className="">
                  <a href="#" className="card-a text-decoration-none">
                    See more
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 mt-5">
              <div className="card mb-4 p-3 shadow-sm d-flex  ">
                <div>
                  <h2 className="fw-bold fonte-card  ">
                    Ramadan Box | Only for EGP 249
                  </h2>
                </div>

                <div className="mt-3">
                  <a href="#">
                    <img
                      className="img-fluid img-card2"
                      src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/OHL/RamadanSale/XCM_Manual_1539814_5414882_379x304_1X._SY304_CB595309813_.jpg"
                      alt=""
                    />
                  </a>
                </div>

                <div className="">
                  <a href="#" className="card-a text-decoration-none">
                    See more
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 mt-5">
              <div className="card mb-4 p-3 shadow-sm d-flex  ">
                <div>
                  <h2 className="fw-bold fonte-card ">
                    Ramadan Sale | Basics | Low Prices
                  </h2>
                </div>
                <div className="d-flex ">
                  <div className="">
                    <a href="#">
                      <div className="">
                        <img
                          className="img-fluid me-2  img-card"
                          src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/OHL/RamadanSale/XCM_Manual_1539820_5408380_186x116_1X._SY116_CB594872572_.jpg"
                          alt=""
                        />
                      </div>
                      <span className="card-b fw-bold">Men's Underwear</span>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <div>
                        <img
                          className="img-fluid ms-2 img-card  "
                          src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/OHL/RamadanSale/XCM_Manual_1539820_5408361_186x116_1X._SY116_CB594872572_.jpg"
                          alt=""
                        />
                      </div>
                      <span className="card-b ">Women's Underwear</span>
                    </a>
                  </div>
                </div>
                <div className="d-flex ">
                  <div>
                    <a href="#">
                      <div>
                        <img
                          className="img-fluid me-2  img-card"
                          src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/OHL/RamadanSale/XCM_Manual_1539820_5408385_186x116_1X._SY116_CB594872572_.jpg"
                          alt=""
                        />
                      </div>

                      <span className="card-b fw-bold ">Men's Pyjamas</span>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <div>
                        <img
                          className="img-fluid ms-2 img-card "
                          src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/OHL/RamadanSale/XCM_Manual_1539820_5408372_186x116_1X._SY116_CB594872572_.jpg"
                          alt=""
                        />
                      </div>
                      <span className="card-b ">Women's Pyjamas</span>
                    </a>
                  </div>
                </div>

                <div>
                  <a href="#" className="card-a text-decoration-none ">
                    See more
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 mt-5 ">
              <div className="card mb-4 p-3 shadow-sm d-flex  ">
                <div>
                  <h2 className="fw-bold fonte-card ">
                    Try Prime FREE for 30 days and shop Ramadan Sale deals
                  </h2>
                </div>
                <div className="d-flex">
                  <div>
                    <a href="#">
                      <div>
                        <img
                          className="img-fluid me-2  img-card"
                          src="Images/car-1.jpg"
                          alt=""
                        />
                      </div>
                      <span className="card-b fw-bold">
                        Prime exclusive deals
                      </span>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <div>
                        <img
                          className="img-fluid ms-2 img-card  "
                          src="Images/card-2.jpg"
                          alt=""
                        />
                      </div>
                      <span className="card-b ">
                        Extra 10% off* up to 150 EGP
                      </span>
                    </a>
                  </div>
                </div>
                <div className="d-flex ">
                  <div>
                    <a href="#">
                      <div>
                        <img
                          className="img-fluid me-2  img-card"
                          src="Images/card1-3.jpg"
                          alt=""
                        />
                      </div>

                      <span className="card-b fw-bold">
                        FREE shipping on all deals
                      </span>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <div>
                        <img
                          className="img-fluid ms-2 img-card "
                          src="Images/card1-4.jpg"
                          alt=""
                        />
                      </div>
                      <span className="card-b ">
                        Award-winning movies and TV shows
                      </span>
                    </a>
                  </div>
                </div>

                <div>
                  <a href="#" className="card-a text-decoration-none">
                    Try Prime FREE
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mt-5">
              <div className="card mb-4 p-3 shadow-sm d-flex  ">
                <div>
                  <h2 className="fw-bold fonte-card  ">
                    Ramadan Box | Only for EGP 249
                  </h2>
                </div>

                <div className="mt-3">
                  <a href="#">
                    <img
                      className="img-fluid img-card2"
                      src="Images/card2--.jpg"
                      alt=""
                    />
                  </a>
                </div>

                <div className="">
                  <a href="#" className="card-a text-decoration-none">
                    See more
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 mt-5">
              <div className="card mb-4 p-3 shadow-sm d-flex  ">
                <div>
                  <h2 className="fw-bold fonte-card ">
                    Ramadan Sale | Basics | Low Prices
                  </h2>
                </div>
                <div className="d-flex ">
                  <div className="">
                    <a href="#">
                      <div className="">
                        <img
                          className="img-fluid me-2  img-card"
                          src="Images/card3-1.jpg"
                          alt=""
                        />
                      </div>
                      <span className="card-b fw-bold">Men's Underwear</span>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <div>
                        <img
                          className="img-fluid ms-2 img-card  "
                          src="Images/card3-2.jpg"
                          alt=""
                        />
                      </div>
                      <span className="card-b ">Women's Underwear</span>
                    </a>
                  </div>
                </div>
                <div className="d-flex ">
                  <div>
                    <a href="#">
                      <div>
                        <img
                          className="img-fluid me-2  img-card"
                          src="Images/card3-3.jpg"
                          alt=""
                        />
                      </div>

                      <span className="card-b fw-bold ">Men's Pyjamas</span>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <div>
                        <img
                          className="img-fluid ms-2 img-card "
                          src="Images/card3-4.jpg"
                          alt=""
                        />
                      </div>
                      <span className="card-b ">Women's Pyjamas</span>
                    </a>
                  </div>
                </div>

                <div>
                  <a href="#" className="card-a text-decoration-none ">
                    See more
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 mt-5">
              <div className="card mb-4 p-3 shadow-sm d-flex  ">
                <div>
                  <h2 className="fw-bold fonte-card  ">
                    Ramadan Box | Only for EGP 249
                  </h2>
                </div>

                <div className="">
                  <a href="#">
                    <img
                      className="img-fluid img-card2"
                      src="Images/card2--.jpg"
                      alt=""
                    />
                  </a>
                </div>

                <div className="">
                  <a href="#" className="card-a text-decoration-none">
                    Discover more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
