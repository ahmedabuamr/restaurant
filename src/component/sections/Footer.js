import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer>
        <div
          className="footer-area section-bg"
          style={{
            backgroundImage: "url('assets/img/gallery/section_bg02.png')",
          }}
        >
          <div className="container">
            <div className="footer-top footer-padding">
              <div className="row d-flex justify-content-between">
                <div className="col-xl-4 col-lg-4 col-md-5 col-sm-8">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-logo">
                      <Link to="/">
                        <img src="assets/img/logo/logo2_footer.png" alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-5 col-sm-6">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>Navigation</h4>
                      <ul>
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/about">About</Link>
                        </li>
                        <li>
                          <Link to="/menu">Menu</Link>
                        </li>
                        <li>
                          <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contact</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-5 col-sm-6">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>Useful Links</h4>
                      <ul>
                        <li>
                          <span>Registration</span>
                        </li>
                        <li>
                          <span>Login</span>
                        </li>
                        <li>
                          <span>Policy</span>
                        </li>
                        <li>
                          <span>Terms & Conditions</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-5 col-sm-7">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>Instagram Feed</h4>
                    </div>
                    <div className="instagram-gellay">
                      <ul className="insta-feed">
                        <li>
                          <img src="assets/img/gallery/instagram1.png" alt="" />
                        </li>
                        <li>
                          <img src="assets/img/gallery/instagram2.png" alt="" />
                        </li>
                        <li>
                          <img src="assets/img/gallery/instagram3.png" alt="" />
                        </li>
                        <li>
                          <img src="assets/img/gallery/instagram4.png" alt="" />
                        </li>
                        <li>
                          <img src="assets/img/gallery/instagram5.png" alt="" />
                        </li>
                        <li>
                          <img src="assets/img/gallery/instagram6.png" alt="" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-xl-3 col-lg-4">
                  <div className="footer-social f-right">
                    <span>Follow Us</span>
                    <a href="https://twitter.com/Ahmed_Amr_21">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.facebook.com/selmyasdf">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/ahmed-abu-amr-5252a3159/">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://www.instagram.com/ahmed_n_amr/">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
