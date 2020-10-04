import React from "react";
import Header from "../sections/Header";
import OurAbout from "../sections/OurAbout";
import BookTable from "../sections/BookTable";
import Services from "../sections/Services";
import Footer from "../sections/Footer";

export default function About() {
  return (
    <>
      <Header />
      <main>
        <div className="slider-area">
          <div className="slider-height2 d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap hero-cap2">
                    <h2>About US</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/** OurAbout */}
        <OurAbout />
        {/** OurAbout */}

        {/** BookTable */}
        <BookTable />
        {/** BookTable */}

        {/**<!-- About Area End --> */}
        <div className="about-low-area section-padding30">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="about-caption mb-50">
                  <div className="section-tittle mb-35">
                    <span>Discover Your Test</span>
                    <h2>We Provide Good Food For Your Family!</h2>
                  </div>
                  <p>
                    Ut enim acgsd minim veniam, quxcis nostrud exercitation
                    ullamco laboris nisi ufsit aliquip ex ea commodo consequat
                    is aute irure m, quis nostrud exer.
                  </p>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-10">
                    <div className="single-caption mb-20">
                      <div className="caption-icon">
                        <span className="flaticon-restaurant"></span>
                      </div>
                      <div className="caption">
                        <p>Ut enim ad minim veniam, quis nostrud exer.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-10">
                    <div className="single-caption mb-20">
                      <div className="caption-icon">
                        <span className="flaticon-tools-and-utensils-1"></span>
                      </div>
                      <div className="caption">
                        <p>Ut enim ad minim veniam, quis nostrud exer.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-10">
                    <div className="single-caption mb-20">
                      <div className="caption-icon">
                        <span className="flaticon-hat"></span>
                      </div>
                      <div className="caption">
                        <p>Ut enim ad minim veniam, quis nostrud exer.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-10">
                    <div className="single-caption mb-20">
                      <div className="caption-icon">
                        <span className="flaticon-restaurant"></span>
                      </div>
                      <div className="caption">
                        <p>Ut enim ad minim veniam, quis nostrud exer.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="about-img ">
                  <img src="assets/img/gallery/about.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/**<!-- About Area End --> */}

        {/** <!-- About-3 End -->*/}
        <div
          className="about-area3 pt-180 pb-170 section-bg"
          style={{
            backgroundImage: "url('assets/img/gallery/section_bg03.png')",
          }}
        >
          <div className="container">
            <div className="row justify-content-end">
              <div className="col-xl-6 col-lg-6 col-md-9 col-sm-11">
                <div className="section-tittle section-tittle2 mb-40">
                  <span>About Our Restaurant</span>
                  <h2>We Provide Good Food For Your Family!</h2>
                  <p>
                    Ut enim acgsd minim veniam, quxcis nostrud exercitation
                    ullamco laboris nisi ufsit aliquip ex ea commodo consequat
                    is aute irure m, quis nostrud exer.
                  </p>
                </div>

                <form action="#" className="search-box">
                  <div className="input-form">
                    <input type="text" placeholder="Your Email" />
                  </div>
                  <div className="search-form">
                    <button>Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/** <!-- About-3 End -->*/}

        {/** Services */}
        <Services />
        {/** Services */}
      </main>

      {/** Services */}
      <Footer />
      {/** Services */}
    </>
  );
}
