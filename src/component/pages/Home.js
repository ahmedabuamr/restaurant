import React from "react";
import Header from "../sections/Header";
import Menu from "../sections/Menu";
import OurAbout from "../sections/OurAbout";
import BookTable from "../sections/BookTable";
import Services from "../sections/Services";
import Footer from "../sections/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="slider-area ">
          <div className="slider-active">
            <div className="single-slider slider-height d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-xl-9 col-lg-9 col-md-9">
                    <div className="hero__caption">
                      <span data-animation="fadeInLeft" data-delay=".2s">
                        Discover Your Teste
                      </span>
                      <h1 data-animation="fadeInLeft" data-delay=".4s">
                        We belive good food offer great smile
                      </h1>
                      <p data-animation="fadeInLeft" data-delay=".6s">
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat
                        is aute irure.
                      </p>

                      <div className="hero__btn">
                        <Link
                          to="/"
                          className="btn hero-btn"
                          data-animation="fadeInLeft"
                          data-delay=".8s"
                        >
                          Resurvation
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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

        {/** Menu */}
        <Menu />
        {/** Menu */}

        {/** OurAbout */}
        <OurAbout />
        {/** OurAbout */}

        {/** BookTable */}
        <BookTable />
        {/** BookTable */}

        {/** Services */}
        <Services />
        {/** Services */}

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

        {/**    <!--? Blog Area Start -->*/}
        <section className="blogs-area section-padding30">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-tittle text-center mb-70">
                  <span>Our New Blog News</span>
                  <h2>Our Recnet News</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="single-blogs mb-100">
                  <div className="blog-img">
                    <img src="assets/img/gallery/blog1.png" alt="" />
                  </div>
                  <div className="blog-cap">
                    <span className="color1">23 Dec, 2020</span>
                    <h4>
                      <Link to="/blog">Addiction When Food Plate Becomes</Link>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-blogs mb-100">
                  <div className="blog-img">
                    <img src="assets/img/gallery/blog2.png" alt="" />
                  </div>
                  <div className="blog-cap">
                    <span className="color1">23 Dec, 2020</span>
                    <h4>
                      <Link to="/blog">Addiction When Food Plate Becomes</Link>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-blogs mb-100">
                  <div className="blog-img">
                    <img src="assets/img/gallery/blog3.png" alt="" />
                  </div>
                  <div className="blog-cap">
                    <span className="color1">23 Dec, 2020</span>
                    <h4>
                      <Link to="/blog">Addiction When Food Plate Becomes</Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/**<!-- Blog Area End --> */}
      </main>
      <Footer />
    </>
  );
}
