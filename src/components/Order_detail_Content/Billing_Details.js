import React, { useState } from "react";

const Billing_Details = () => {
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
  )
}

export default Billing_Details