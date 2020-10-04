import React from "react";

export default function BookTable() {
  return (
    <div
      className="booking-area section-bg pt-120 pb-130"
      style={{ backgroundImage: "url('assets/img/gallery/section_bg04.png')" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="cl-xl-7 col-lg-8 col-md-10">
            <div className="section-tittle text-center mb-40">
              <span>About Our Restaurant</span>
              <h2>Book A Table</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12">
            <form action="#">
              <div className="booking-wrap d-flex justify-content-between align-items-center">
                <div className="single-select-box mb-30">
                  <div className="select-this">
                    <div className="select-itms">
                      <div className="select-icon">
                        <i className="ti-user"></i>
                      </div>
                      <select name="select" id="select1">
                        <option value="">Person</option>
                        <option value="">Person 2</option>
                        <option value="">Person 3</option>
                        <option value="">Person 4</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="single-select-box mb-30">
                  <div className="boking-datepicker">
                    <input id="datepicker1" placeholder="Date" />
                  </div>
                </div>

                <div className="single-select-box mb-30">
                  <div className="boking-datepicker">
                    <input id="timepicker" placeholder="Time" />
                  </div>
                </div>

                <div className="single-select-box mb-30">
                  <button className="btn select-btn">Book Now</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
