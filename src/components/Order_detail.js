import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import Choose_Payment from "./Order_detail_Content/Choose_Payment";
import Guest_Details_form from "./Order_detail_Content/Guest_Details_form";

const Order_detail = () => {

  // State for billing details
  const [coupon, setCoupon] = useState("");
  const [totalAmount, setTotalAmount] = useState(100); // Example initial total amount
  const [payableAmount, setPayableAmount] = useState(totalAmount);

  // Function to handle applying a coupon
  const applyCoupon = () => {
    // Simulate coupon validation or calculation
    if (coupon === "DISCOUNT20") {
      const discount = totalAmount * 0.2; // 20% discount
      setPayableAmount(totalAmount - discount);
    } else {
      // If the coupon is invalid
      alert("Invalid coupon code");
    }
  };

  return (
    <>
    <div className="py-5">
        <div className="container bootdey">
          <div className="col-md-12 container">
            <section className="panel my-5 mx-5 px-5">
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
                          <p >check in</p>
                          <p >Wed 8th Nov</p>
                        </div>
                        <div className="checkout  col-3 border-right text-center">
                            <p >check out</p>
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

      <div className="container mt-4  ">
      <div className="row  mx-5 px-5 ">
        {/* Left side: Registration Form */}
        <div className="col-md-7 px-1">
         <Guest_Details_form/>
        </div>

        {/* Right side: Billing Details */}
        <div className="col-md-5  px-1" >
         <div className="orderform rounded p-4">
          <p className="text-white px-3">Billing Details</p>
          <div className="my-3 d-flex p-3"> 
            <input
              type="text"
              className="orderforminput bg-transparent"
              id="couponInput"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            />
            <button onClick={applyCoupon} className="btn btn-searchbar">Apply</button>
          </div>
          <div className="mb-3 text-white p-3">
            <div className="d-flex justify-content-between mb-3"><p>Room price for 4Nights x 4Guests </p> <p>₹7998</p></div>
            <div className="d-flex justify-content-between mb-3"><p>Add ons</p> <p>₹7998</p></div>
            <div className="d-flex justify-content-between mb-3"><p>Taxes & Service Fees</p> <p>₹753</p></div>
            <div className="d-flex justify-content-between mb-3"><p>Hotel GST</p> <p>₹350</p></div>
            <div className="d-flex justify-content-between mb-3"><p>Coupon discount</p> <p>₹1245</p></div>
            <div className="d-flex justify-content-between mb-3"><p >Total Amount: </p> <p>₹{totalAmount}</p></div>    
          </div>
          <div className="d-flex justify-content-between text-white px-3 fs-4"> <p className="my-1">Payable Amount: </p> <p className="my-1">₹{payableAmount}</p></div>
        </div>
        </div>
      </div>
    </div>
  
      <div>
      <Choose_Payment/>
      </div>
      </div>
    </>
  );
};

export default Order_detail;
