import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import Choose_Payment from "./Order_detailContent/Choose_Payment";

const Order_detail = () => {
  // State for registration form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [gstNumber, setGstNumber] = useState('');
  const [companyName, setCompanyName] = useState('');

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
      <div>
        <div className="container bootdey">
          <div className="col-md-12 container">
            <section className="panel my-5">
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
                  <h2 className="pro-d-title text-gold">Room Name/type</h2>
                  <p className="text-white ">
                   <p className="m-0">Maimoon villa</p> <p className="d-flex align-items m-0">{<FaLocationDot />} Matheran</p> 
                  </p>
                  <div className="product_meta row">
                    <div className="col-6 text-white ">
                      {" "}
                      <p className="d-flex align-items-center gap-2">
                        {" "}
                      <p className="dark p-1 rounded d-flex align-items-center"> 4.6 {" "} <FaStar className="text-gold" /></p> 
                         <p>( 29 ratings ){" "}
                        Excellent</p>
                      </p>
                    </div>

                    <div className="row text-white d-flex justify-content-center">
                        <div className="checkin  col-3 border-right text-center">
                          <p>check in</p>
                          <p>08 sun 2023</p>
                        </div>
                        <div className="checkout  col-3 border-right text-center">
                            <p>check out</p>
                            <p>09 mon 2023</p>
                        </div>
                        <div className="rooms col-3 border-right text-center">
                            <p>Room</p>
                            <p>1Room</p>

                        </div>
                        <div className="guest col-3 border-right text-center">
                            <p>Guest</p>
                            <p>2A,2C</p>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div>

      <div className="container mt-4  ">
      <div className="row ">
        {/* Left side: Registration Form */}
        <div className="col-md-6   ">
         <div className="orderform p-3 rounded">
         <p className="text-white">Guest Details</p>
          <form>
            <div className="mb-3">
              <label htmlFor="nameInput" className="form-label text-white">Name</label>
              <input
                type="text"
                className="form-control bg-transparent  payment_form  payment_form"
                id="nameInput"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="emailInput" className="form-label text-white">Email</label>
              <input
                type="email"
                className="form-control bg-transparent  payment_form"
                id="emailInput"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="mobileInput" className="form-label text-white">Mobile Number</label>
              <input
                type="text"
                className="form-control bg-transparent  payment_form"
                id="mobileInput"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="gstInput" className="form-label text-white">GST Number</label>
              <input
                type="text"
                className="form-control bg-transparent  payment_form"
                id="gstInput"
                value={gstNumber}
                onChange={(e) => setGstNumber(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="companyInput" className="form-label text-white">Company Name</label>
              <input
                type="text"
                className="form-control bg-transparent  payment_form"
                id="companyInput"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
              />
            </div>
          </form>
         </div>
        </div>

        {/* Right side: Billing Details */}
        <div className="col-md-6 orderform p-3 rounded" >
          <p className="text-white px-3">Billing Details</p>
          <div className="mb-3 d-flex p-3"> 
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
            <div className="d-flex justify-content-between"><p>Room price for 4Nights x 4Guests </p> <p>₹7998</p></div>
            <div className="d-flex justify-content-between"><p>Add ons</p> <p>₹7998</p></div>
            <div className="d-flex justify-content-between"><p>Taxes & Service Fees</p> <p>₹753</p></div>
            <div className="d-flex justify-content-between"><p>Hotel GST</p> <p>₹350</p></div>
            <div className="d-flex justify-content-between"><p>Coupon discount</p> <p>₹1245</p></div>
            <div className="d-flex justify-content-between"><p >Total Amount: </p> <p>₹{totalAmount}</p></div>    
          </div>
          <div className="d-flex justify-content-between text-white px-3 fs-4"> <p>Payable Amount: </p> <p>₹{payableAmount}</p></div>
        </div>
      </div>
    </div>
      </div>

      <div>
      <Choose_Payment/>
      </div>
    </>
  );
};

export default Order_detail;
