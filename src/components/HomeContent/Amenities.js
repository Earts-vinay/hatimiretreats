import React from "react";

const Amenities = () => {
  return (
    <div className="container">
      <div className="reviews m-4 p-5 mobileparagraph">
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
                  <h3>
                    Outstanding <br /> Amenities
                  </h3>
                </div>
                <p className="fs-7 text-start">
                  Hatimi Retreats: where Amenities speak louder than words.
                  Elevating everyday offerings into extraordinary experiences,
                  our amenities serving as the cornerstone for lifelong memories
                  represent the spirit of a magical stay at Hatimi Retreats. has
                  context menu
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
                Admire the dramatic roads driving to our hillside retreats offering stunning scenery day and night. Be captivated by the morning mist and twinkling night views that never fail to mesmerize our guests.
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
                Travel over Hatimi Retreats' through our comprehensive guidelines on our website. Dive into our blogs to virtually experience the essence of Hatimi Retreats. Study the complete guide and book your stay now to bring the experience to life!
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
