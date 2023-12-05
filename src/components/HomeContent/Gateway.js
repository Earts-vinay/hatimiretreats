import React from "react";
import CountUp from 'react-countup';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons

const Gateway = () => {
  return (
    <div className="container">
      <div className="row justify-content-center text-center text-white ">
      
        <div className="col-lg-8">
          <span>WELCOME TO HATIMI RETREATS</span>
          <div className='d-flex justify-content-start align-items-center'>
        <img src="assets/bg/line.svg" className="linehome mx-4" alt="image" />
        <h1>Gateway of Serenity</h1>
        </div>
          
          <div className="paraconternt my-4 mx-3">
            <p>
              Discover the peacefulness and spirituality of Hatimi Retreats
              properties, where the past meets the present, and guests are
              invited to share in the sacred history.
            </p>

            <p>
              At Hatimi Retreats, we proudly present our properties, each
              holding a unique and profound significance. These places have a
              special connection to His Holiness, Aali Qadr Mufaddal Saifuddin,
              making them a cherished part of our community's heritage. His
              Holiness has owned, often visited, or even called these places
              home at some point in his life, with Panchgani being the oldest
              and dearest.
            </p>
            <button type="submit" className="eg-btn btn btn-searchbar my-2 ">
            know More
          </button>
          </div>
       
        </div>

        <div className="reviews my-5">
           <div className="row d-flex justify-content-center">
           <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-10">
          <div className="counter-single sibling-2 text-center d-flex flex-column hover-border1">
            <div className="counter-icon">
              <img src="assets/bg/StellarReviews.svg" style={{width:65,height:65}}alt="" />
            </div>
            <div className="coundown d-flex flex-column">
            <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                <h3 className="odometer" data-odometer-final={28000}><CountUp end={28000} duration ={5} /></h3><i className="bi bi-plus-lg" />
              </div>
              <p>Reviews</p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-10">
          <div className="counter-single sibling-2 text-center d-flex flex-column hover-border1">
            <div className="counter-icon">
       
              <img src="assets/bg/Ratings.svg" style={{width:65,height:65}}alt="" />
            </div>
            <div className="coundown d-flex flex-column">
            <div className="d-flex flex-row justify-content-center align-items-center gap-2">
              <h3>4.5</h3>
               
              </div>
              <p>Stellar Ratings</p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-10">
          <div className="counter-single sibling-2  text-center d-flex flex-column hover-border1">
            <div className="counter-icon">
              <img src="assets/bg/Breathtaking.svg" style={{width:65,height:65}}alt="" />
            </div>
            <div className="coundown d-flex flex-column">
            <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                <h3 className="odometer" data-odometer-final={500}><CountUp end={3} duration ={2} /></h3><i className="bi bi-plus-lg" />
              </div>
              <p>Breathtaking Destinations</p>
            </div>
          </div>
        </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Gateway;
