import React from "react";
// import facebookIcon from "../../../images/SubPages/Footer/facebookIcon.webp";
// import twitterIcon from "../../../images/SubPages/Footer/twitterIcon.webp";
// import linkdinIcon from "../../../images/SubPages/Footer/linkdinIcon.webp";
// import { PopupButton } from "react-calendly";
// import insta from "../../../images/logo/insta.webp";
// import github from "../../../images/logo/logo_github (2).webp";
// import hello from "../../../images/SubPages/Footer/hello.webp";
import { BrowserRouter as Router, Route, Link, Routes, useLocation } from "react-router-dom";
import "./Footer.css";
import { Location } from "react-router-dom";
// import Logo from "../../../images/logo/logo_lakebrains.webp";
// import call from "../../../images/footer/call.webp";
// import 'rsuite/dist/rsuite.min.css';
// import Dropdown from 'rsuite/Dropdown';


export default function Footer() {
  const Location=useLocation();
  // alert(Location.pathname)
  return (
    <div className="footer container-fluid p-0">
      <div className={Location.pathname === "/products" ? "footerwave-product footerWave" : "footerWave"}>
      </div>
      <div className="Footer-wrapper pb-2">
        <div className="container ">
          <div className="logo-wrpapper mb-5">
            <div className="footer-img-wrapper">
              <img src="./images/logo.webp" alt="Lakebrains Technologies" />
            </div>
          </div>
          <div className="row  Footer-sub-wrapper-01 ">

            {/* start div */}
            <div className="col-sm-4 col-md-4 mx-auto text-center">
              <div>
                <div className="LakeComm-footer-Address">
                  <div className="heading-wrapper mb-4 ">
                    <div className="d-flex align-items-center mb-1 justify-content-center">
                      <h6>Address</h6>
                    </div>
                    <p>
                      103,krishi upaj mandi, udaipur (rajasthan)india (313002)
                    </p>
                  </div>
                  {/* <div className="heading-wrapper mb-4 mb-sm-0">
                    <div className="d-flex align-items-center mb-1">
                      <h6>US Office</h6>
                      <div className="call-logo ml-2">
                        <a href="tel:+1614-325-5856">
                          <img src="./images/call.webp" className="w-100" alt="" />
                        </a>
                      </div>
                    </div>
                    <p>4200 Regent StreetSuite 200 , Columbus , Ohio 43219</p>
                  </div> */}
                </div>
                {/* Social Media */}
              </div>
            </div>

            {/* mid div */}
            <div className="col-sm-4 col-md-4 text-center  ">
              <div className="LakeComm-footer-Address">
              <div className="heading-wrapper mb-4 ">
                <div className="d-flex align-items-center mb-1 justify-content-center">
                  <h6>Contact Us </h6>
                  
                  <div className="call-logo ml-2">
                    <a href="tel:+919664353500">
                      <img src="./images/call.webp" className="w-100" alt="" />
                    </a>
                  </div>
                   
                </div>
                  {/* <p className="my-1">Jitesh Dembla </p> */}
                <p>
                    <a href="tel:+919414160724" className="phoneNumber-footer">+(91) 9414160724</a>
                    <br />
                    <a href="tel:+919829072750" className="phoneNumber-footer">+(91) 9829072750</a>
                    <p className="my-0 py-0">Gmail : <a href="mailto:jiteshdembla.jd@gmail.com" className="mail-footer">jiteshdembla.jd@gmail.com</a></p>
                </p>
                  
              </div>
              </div>

              
              {/* follow us */}
              <div className="font-w-600 font-s-16 mt-4">Follow us</div>
              <div className="row justify-content-center">
                <a href="/">
                  {" "}
                  <button className="footer-social-btn ">
                    <img
                      className="facebooklogo"
                      src="./images/facebookIcon.webp"
                      alt="twiiter"
                      height="auto"
                      width="auto"
                    />
                  </button>
                </a>
              </div>
            </div>

            {/* end div */}
            <div className="col-sm-4 col-md-4 LakeComm-footer-Address  ">
              <div className="row  lakeCom-service-0 justify-content-center">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1814.469375620501!2d73.70332528922633!3d24.55677859266014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967ef768a0a7151%3A0x187435484bbc3bae!2sRaj%20Traders%20Krishi%20Mandi!5e0!3m2!1sen!2sin!4v1676116242720!5m2!1sen!2sin"  allowfullscreen="" loading="lazy " className="googleMap" referrerpolicy="no-referrer-when-downgrade"></iframe>

               
              </div>
            </div>
          </div>
        </div>
        <hr />
        <p className="container text-center text-md-left">
          © 2023,{" "}
          <Link to="/" className="font-w-700">
            Raj Traders
          </Link>
          . All rights reserved.
        </p>
      </div>
    </div>
  )
}
