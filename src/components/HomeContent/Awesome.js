import React from "react";

const Awesome = () => {
  return (
    <div className="background-container">
      <div className="bg-image d-flex align-items-center py-5">
        {/* Heading and Description */}
        <div className="container text-white">
          <div className="row">
            <div className="col-lg-9">
              <span className="px-5 mx-5">WHY WE ARE AWESOME!</span>
              <div className='d-flex justify-content-start align-items-start '>
        <img src="assets/bg/line.svg" className="img-fluid mx-3 mt-4 pt-3" alt="image" />
        <h2 className="display-4">
                Experience the never-before trip at our Retreats
              </h2>
        </div>
              
              <p className="mx-5 px-5">
                Step into our Villas, where we set a new standard for excellence.
                Immerse yourself in unforgettable moments, enveloped in comfort and
                tranquility. We offer outstanding amenities, exceptional service,
                and scenic destinations, turning your ideal vacation into a reality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awesome;
