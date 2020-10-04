import React from "react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="our-services section-padding30">
      <div className="container">
        <div className="row justify-content-sm-center">
          <div className="cl-xl-7 col-lg-8 col-md-10">
            <div className="section-tittle text-center mb-70">
              <span>Servicees We Offer</span>
              <h2>Our Best Services</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className=" col-lg-4 col-md-6 col-sm-6">
            <div className="single-services text-center mb-30">
              <div className="services-ion">
                <span className="flaticon-restaurant"></span>
              </div>
              <div className="services-cap">
                <h5>
                  <Link to="/blog">Best Chef</Link>
                </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>
          </div>
          <div className=" col-lg-4 col-md-6 col-sm-6">
            <div className="single-services active text-center mb-30">
              <div className="services-ion">
                <span className="flaticon-tools-and-utensils-1"></span>
              </div>
              <div className="services-cap">
                <h5>
                  <Link to="/blog">Quality Food</Link>
                </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>
          </div>
          <div className=" col-lg-4 col-md-6 col-sm-6">
            <div className="single-services text-center mb-30">
              <div className="services-ion">
                <span className="flaticon-restaurant"></span>
              </div>
              <div className="services-cap">
                <h5>
                  <Link to="/blog">Perfect Cook</Link>
                </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
