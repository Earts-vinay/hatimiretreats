import React from "react";

const Amenities = () => {
  return (
    <div className="container">
      <div className="reviews m-4 p-5 mx-5 mobileresponsive">
        <div className="row d-flex justify-content-center ">
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-10 my-3">
            <div className="counter-single sibling-2 text-center d-flex flex-column hover-border1">
              <div className="counter-icon">
                <img
                  src="assets/bg/outstanding.svg"
                  style={{ width: 65, height: 65 }}
                  alt=""
                />
              </div>
              <div className="coundown d-flex flex-column text-white">
                <div className="d-flex flex-row justify-content-center align-items-center my-3">
                  <h3 >
                    Outstanding <br /> Amenities
                  </h3>
                </div>
                <p className="fs-7 text-start">
                Our Amenities speak louder than words. From breathtaking scenery to impeccable service, experience the magic of a stay at Hatimi Retreats.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-10 my-3">
            <div className="counter-single sibling-2 text-center d-flex flex-column hover-border1">
              <div className="counter-icon">
                <img
                  src="assets/bg/scenic.svg"
                  style={{ width: 65, height: 65 }}
                  alt=""
                />
              </div>
              <div className="coundown d-flex flex-column text-white">
                <div className="d-flex flex-row justify-content-center align-items-center my-3">
                  <h3>
                    Scenic <br /> Destinations
                  </h3>
                </div>
                <p className="fs-7 text-start">
                Admire the stunning day and night views on the scenic drive to our hillside retreats, where morning mist and twinkling nightscapes captivate guests.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-10 my-3">
            <div className="counter-single sibling-2  text-center d-flex flex-column hover-border1">
              <div className="counter-icon">
                <img
                  src="assets/bg/complete.svg"
                  style={{ width: 65, height: 65 }}
                  alt=""
                />
              </div>
              <div className="coundown d-flex flex-column text-white">
                <div className="d-flex flex-row justify-content-center align-items-center my-3">
                  <h3>
                    Complete <br /> Guide Line
                  </h3>
                </div>
                <p className="fs-7 text-start">
                Travel over Hatimi Retreats' through our comprehensive guidelines on our website. Dive into virtual experiences via blogs,& book your stay to bring the experience to life!
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-10 my-3">
            <div className="counter-single sibling-2  text-center d-flex flex-column hover-border1">
              <div className="counter-icon">
                <img
                  src="assets/bg/genuine.svg"
                  style={{ width: 65, height: 65 }}
                  alt=""
                />
              </div>
              <div className="coundown d-flex flex-column text-white">
                <div className="d-flex flex-row justify-content-center align-items-center my-3 ">
                  <h3>
                    Genuine <br /> Ratings
                  </h3>
                </div>
                <p className="fs-7 text-start">
                We proudly uphold our genuine 4.5-star ratings, a reflection of our sincere hospitality. The authentic reviews from our guests speak volumes, showcasing the true essence of who we are.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
