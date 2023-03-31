import React from 'react';

const Footer = () => {
    return (
        <div className="container-fluid p-0">
            <div className="bg-ligh p-0">
                <a href="#top" className="Topc">
                    <h5 className="text-center m-0 py-3 text-light" id="goUp">Back to Top</h5>
                </a>
            </div>

            <div className="bg-darker pt-2">
                <div className="container">
                    <div className="row py-3 mt-3">
                        <div className="col-md-2 col-sm-6">
                            <a href="#"><img className="footerlogo w-75" src="images/amazon_PNG11.png" alt=""/></a>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <h6><b>NEW TO AMAZON?</b></h6>
                            <p><small>Subscribe to our newsletter to get updates on our latest offers!</small></p>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Enter Email Address" aria-label="Search"/>
                                    <button type="button" className="btn btn-outline-light mr-2">Male</button>
                                    <button type="button" className="btn btn-outline-light">Female</button>
                            </form>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <h6><b>DOWNLOAD AMAZON FREE APP</b></h6>
                            <p><small>Get access to exclusive offers!</small></p>

                            <button type="button" className="btn btn-outline-light mr-2"><i className="fab fa-app-store"></i> App
                                Store</button>
                            <button type="button" className="btn btn-outline-light"><i className="fab fa-google-play"> </i> Google
                                Play</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-darke text-white pt-2">
                <div className="container">
                    <div className="row py-3">
                        <div className="col-md-3 col-sm-6">
                            <h6><b> LET US HELP YOU</b></h6>
                            <ul className="p-0">
                                <a href="#">
                                    <li className="f-li"></li>
                                </a>
                                <a href="#">
                                    <li className="f-li">Help Center</li>
                                </a>
                                <a href="#">
                                    <li className="f-li">Contact us</li>
                                </a>
                                <a href="#">
                                    <li className="f-li">How to buy on Amazon?</li>
                                </a>
                                <a href="#">
                                    <li className="f-li">How to pay on Amazon?</li>
                                </a>
                                <a href="#">
                                    <li className="f-li">Delivery timelines</li>
                                </a>
                                <a href="#">
                                    <li className="f-li">Return Policy</li>
                                </a>
                                <a href="#">
                                    <li className="f-li">Corporate Services</li>
                                </a>
                                <a href="#">
                                    <li className="f-li">Report a Product</li>
                                </a>
                            </ul>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <h6><b> ABOUT AMAZON EGYPT</b></h6>
                            <ul className="p-0">
                                <li className="f-li"> </li>
                                <a href="#">
                                    <li className="f-li"> How to pay on Amazon?</li>
                                </a>
                                <a href="#">
                                    <li className="f-li"> Delivery timelines</li>
                                </a>
                                <a href="#">
                                    <li className="f-li"> Return Policy</li>
                                </a>
                                <a href="#">
                                    <li className="f-li"> Help Center</li>
                                </a>
                                <a href="#">
                                    <li className="f-li"> Contact us</li>
                                </a>
                                <a href="#">
                                    <li className="f-li"> How to buy on Amazon?</li>
                                </a>
                                <a href="#">
                                    <li className="f-li"> Corporate Services</li>
                                </a>
                            </ul>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <h6><b> MAKE MONEY WITH AMAZON</b></h6>
                            <ul className="p-0">
                                <a href="#">
                                    <li className="f-li">Sell on Amazon</li>
                                </a>
                                <a href="#">
                                    <li className="f-li"> Become a Logistics Service Partner</li>
                                </a>
                                <a href="#">
                                    <li className="f-li">Become a Sales Consultant (J-Force )</li>
                                </a>
                            </ul>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <h6><b> AMAZON INTERNATIONAL</b></h6>
                            <ul className="p-0">
                                <li className="f-li"> </li>
                                <a href="#"></a>
                                <li className="f-li"> Algeria</li>
                                <a href="#">
                                    <li className="f-li"> Ghana</li>
                                </a>
                                <a href="#">
                                    <li className="f-li"> Kenya</li>
                                </a>
                                <a href="#">
                                    <li className="f-li"> Morocco</li>
                                </a>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h6><b>JOIN US ON</b></h6>
                            <p>
                                <a href="#" className=" text-white rounded-circle px-2 py-1"><i className="fab fa-facebook"></i></a>
                                <a href="#" className=" text-white rounded-circle px-2 py-1"><i className="fab fa-twitter"></i></a>
                                <a href="#" className=" text-white rounded-circle px-2 py-1"><i className="fab fa-youtube"></i></a>
                                <a href="#" className=" text-white rounded-circle px-2 py-1"><i className="fab fa-instagram"></i></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
