import React from "react";
import Assets from "../../../constants/images";
import "./styles.css";

export default function MockOneFooter() {
  return (
    <footer className="footer-area footer--light">
      <div className="footer-big">
        {/* <!-- start .container --> */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 col-sm-12">
              <div className="footer-widget">
                <div className="widget-about">
                  <img
                    src={Assets.appLogoWithoutBg}
                    alt=""
                    className="img-fluid"
                  />
                  <ul className="contact-details">
                    <li>
                      <a href="mailto:info@salaamtakaful.com">
                        info@salaamtakaful.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:+92-21-111-875-111">+92-21-111-875-111</a>
                    </li>
                    <li>
                      <a
                        href="https://www.google.com/maps/place/Salaam+Takaful+Limited/@24.8611693,67.0657314,17z/data=!3m1!4b1!4m5!3m4!1s0x3eb33e9f3ab9cef5:0x126591be62783ef4!8m2!3d24.8611693!4d67.0679201"
                        target="_blank"
                        rel="noreferrer"
                      >
                        6th Floor, Business Centre, Plot No. 19-1-A, Block - 6,
                        P.E.C.H.S., Shahrah -e - Faisal, Karachi.
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- Ends: .footer-widget --> */}
            </div>
            {/* <!-- end /.col-md-4 --> */}
            <div className="col-md-3 col-sm-4">
              <div className="footer-widget">
                <div className="footer-menu footer-menu--1">
                  <h4 className="footer-widget-title">Quick Links</h4>
                  <ul>
                    <li className="py-2">
                      <a href="#">Claim Forms</a>
                    </li>
                    <li className="py-2">
                      <a href="#">Proposal Forms</a>
                    </li>
                    <li className="py-2">
                      <a href="#">Certificate Verification</a>
                    </li>
                    <li className="py-2">
                      <a href="#">Careers</a>
                    </li>
                  </ul>
                </div>
                {/* <!-- end /.footer-menu --> */}
              </div>
              {/* <!-- Ends: .footer-widget --> */}
            </div>
            {/* <!-- end /.col-md-3 --> */}

            <div className="col-md-3 col-sm-4">
              <div className="footer-widget">
                <div className="footer-menu">
                  <h4 className="footer-widget-title">Support</h4>
                  <ul>
                    <li className="py-2">
                      <a href="#">{"Help & FAQ's"}</a>
                    </li>
                    <li className="py-2">
                      <a href="#">Contact Us</a>
                    </li>
                    <li className="py-2">
                      <a href="#">Claim Resolution</a>
                    </li>
                    <li className="py-2">
                      <a href="#">Complaint Box</a>
                    </li>
                  </ul>
                </div>
                {/* <!-- end /.footer-menu --> */}
              </div>
              {/* <!-- Ends: .footer-widget --> */}
            </div>
            <div className="col-md-3 col-sm-4">
              <div className="footer-widget">
                <div className="widget-social">
                  <img src={Assets.footerImage} alt="" className="img-fluid" />
                  <img src={Assets.footerImage2} alt="" className="img-fluid" />
                  <div className="widget-social-links">
                    <span className="px-2">
                      <i className="fab fa-facebook icon-size"></i>
                    </span>
                    <span className="px-2">
                      <i className="fab fa-twitter icon-size"></i>
                    </span>
                    <span className="px-2">
                      <i className="fab fa-linkedin icon-size"></i>
                    </span>
                    <span className="px-2">
                      <i className="fab fa-youtube icon-size"></i>
                    </span>
                    <span className="px-2">
                      <i className="fab fa-instagram icon-size"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end /.col-lg-3 --> */}
          </div>
          {/* <!-- end /.row --> */}
        </div>
        {/* <!-- end /.container --> */}
      </div>
      {/* <!-- end /.footer-big --> */}

      <div className="mini-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="copyright-text">
                <p>
                  © 2022 | <a href="#">Salaam Takaful Limited</a> | All rights
                  reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
