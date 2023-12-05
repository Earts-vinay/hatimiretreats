import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Booking_card = () => {
    const [dates, setDates] = useState({ fromDate: "", toDate: "" });
    const [adults, setAdults] = useState(0);
    const [kids, setKids] = useState(0);
    const [room, setRoom] = useState(0);
    const [bedsCount, setBedsCount] = useState(0);
    const [pillowsCount, setPillowsCount] = useState(0);
    const [blanketsCount, setBlanketsCount] = useState(0);
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

  const handleAdultsChange = (value) => {
    // Handle increment/decrement of adults
    setAdults((prevValue) => Math.max(0, prevValue + value));
  };

  const handleKidsChange = (value) => {
    // Handle increment/decrement of kids
    setKids((prevValue) => Math.max(0, prevValue + value));
  };

  const handleRoomChange = (value) => {
    // Handle increment/decrement of kids
    setRoom((prevValue) => Math.max(0, prevValue + value));
  };

  const handleBedsChange = (value) => {
    setBedsCount((prevCount) => Math.max(0, prevCount + value));
  };

  const handlePillowsChange = (value) => {
    setPillowsCount((prevCount) => Math.max(0, prevCount + value));
  };

  const handleBlanketsChange = (value) => {
    setBlanketsCount((prevCount) => Math.max(0, prevCount + value));
  };

  return (
    <div className="col-lg-5 ps-3 pe-0   ">
    {/* Right side: Billing Details */}
    <div className="billing-details product_detail_icon_bg rounded px-5 py-3">
      <p className="text-center py-3 fs-4">Booking Details</p>
<div >
      <div className="quantity d-flex justify-content-between align-items-center mb-1">
        <p className="mb-1">Adults:</p>
        <p className="d-flex gap-2 product_detail_increment p-2 rounded-3">
          <p className="m-0" onClick={() => handleAdultsChange(-1)}>
            -
          </p>
          <span className="quantity-value">{adults}</span>
          <p className="m-0" onClick={() => handleAdultsChange(1)}>
            +
          </p>
        </p>
      </div>

      <div className="quantity d-flex justify-content-between align-items-center mb-1">
        <p className="mb-1">Kids:</p>
        <p className="d-flex gap-2 product_detail_increment p-2 rounded-3 ">
          <p className="m-0" onClick={() => handleKidsChange(-1)}>
            -
          </p>
          <span className="quantity-value">{kids}</span>
          <p className="m-0" onClick={() => handleKidsChange(1)}>
            +
          </p>
        </p>
      </div>

      <div className="quantity d-flex justify-content-between align-items-center mb-1">
        <p className="mb-1">Rooms:</p>
        <p className="d-flex gap-2 product_detail_increment p-2 rounded-3 ">
          <p className="m-0" onClick={() => handleRoomChange(-1)}>
            -
          </p>
          <span className="quantity-value">{room}</span>
          <p className="m-0" onClick={() => handleRoomChange(1)}>
            +
          </p>
        </p>
      </div>
      </div>
      {/* Addons */}
      <div className="my-3">
        <h5>Addons</h5>
        <div className="quantity d-flex justify-content-between align-items-center mb-1">
          <p className="mb-1">Extra Beds </p>
          <p className="d-flex gap-2 product_detail_increment p-2 rounded-3 ">
            <p className="m-0" onClick={() => handleBedsChange(-1)}>
              -
            </p>
            <span className="quantity-value">{bedsCount}</span>
            <p className="m-0" onClick={() => handleBedsChange(1)}>
              +
            </p>
          </p>
        </div>

        <div className="quantity d-flex justify-content-between align-items-center mb-1">
          <p className="mb-1">Extra Blankets </p>
          <p className="d-flex gap-2 product_detail_increment p-2 rounded-3 ">
            <p className="m-0" onClick={() => handleBlanketsChange(-1)}>
              -
            </p>
            <span className="quantity-value">{blanketsCount}</span>
            <p className="m-0" onClick={() => handleBlanketsChange(1)}>
              +
            </p>
          </p>
        </div>

        <div className="quantity d-flex justify-content-between align-items-center mb-1">
          <p className="mb-1">Extra Pillows </p>
          <p className="d-flex gap-2 product_detail_increment p-2 rounded-3 ">
            <p className="m-0" onClick={() => handlePillowsChange(-1)}>
              -
            </p>
            <span className="quantity-value">{pillowsCount}</span>
            <p className="m-0" onClick={() => handlePillowsChange(1)}>
              +
            </p>
          </p>
        </div>
      </div>

      <div className=" orderform rounded">
        <h5 className="text-white py-3 ">Billing Details</h5>
        <div className="mb-3 d-flex ">
          <input
            type="text"
            className="orderforminput bg-transparent"
            id="couponInput"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
          />
          <button onClick={applyCoupon} className="btn btn-searchbar">
            Apply
          </button>
        </div>
        <div className="mb-3 text-white py-3">
          <div className="d-flex justify-content-between mb-2">
            <p>Room price for 4Nights x 4Guests </p> <p>₹7998</p>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <p>Add ons</p> <p>₹7998</p>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <p>Taxes & Service Fees</p> <p>₹753</p>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <p>Hotel GST</p> <p>₹350</p>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <p>Coupon discount</p> <p>₹1245</p>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <p>Total Amount: </p> <p>₹{totalAmount}</p>
          </div>
        </div>
        <div className="d-flex justify-content-between text-white  fs-4">
          {" "}
          <p>Payable Amount: </p> <p>₹{payableAmount}</p>
        </div>
      </div>

      <div className="gap-3 d-flex justify-content-center mt-3">
        <button
          className="btn btn-round btn-light text-white w-50"
          type="button"
        >
          <NavLink className="nav-link" to="/">
            Chat with us
          </NavLink>
        </button>
        <button className="eg-btn btn btn-searchbar w-50 ">
          {" "}
          <NavLink className="nav-link" to="/orderdetail">
            {" "}
            Book Now
          </NavLink>
        </button>
      </div>
    </div>
  </div>
  )
}

export default Booking_card