import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

const Bookinginfo = () => {
  return (
    <div className="container bootdey">
    <div className="col-md-12 container">
      <section className="panel my-5 mx-5  px-5 mobileresponsive" >
        <div className="panel-body row p-3 rounded">
          <h2 className="text-white">Booking Info</h2>
          <div className="col-md-4">
            <div className="pro-img-details p-3 ">
              <img
                src="assets/booking_house.png"
                className="w-100 rounded"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-8 p-3">
            <h2 className="pro-d-title text-gold m-0">Room Name/type</h2>
            <p className="text-white mb-1">
             <p className="m-0">Maimoon villa</p> <p className="d-flex align-items m-0">{<FaLocationDot />} Matheran</p> 
            </p>
            <div className="product_meta row">
              <div className="col-6 text-white ">
                {" "}
                <p className="d-flex align-items-center gap-2">
                  {" "}
                <p className="dark p-1 rounded d-flex align-items-center justify-content-center px-2"> 4.6 {" "} <FaStar className="text-gold mx-1" /></p> 
                   <p>( 29 ratings ){" "}
                  Excellent</p>
                </p>
              </div>

              <div className="row text-white pt-4 d-flex justify-content-center">
                  <div className="checkin  col-3 border-right text-center">
                    <p >Check in</p>
                    <p >Wed 8th Nov</p>
                  </div>
                  <div className="checkout  col-3 border-right text-center">
                      <p >Check out</p>
                      <p >Sun 12th Nov</p>
                  </div>
                  <div className="rooms col-3 border-right text-center">
                      <p >Room</p>
                      <p >1 Room</p>

                  </div>
                  <div className="guest col-3  text-center">
                      <p className="m-0">Guest</p>
                      <p className="m-0">2A,2C</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  )
}

export default Bookinginfo