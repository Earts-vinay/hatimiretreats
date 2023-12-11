import React, { useState } from "react";
import { ButtonGroup, Button } from 'react-bootstrap';

const ChoosePayment = () => {
  const [paymentMode, setPaymentMode] = useState('creditCard'); // Default payment mode
  const [selectedOption, setSelectedOption] = useState('payNow'); // Initial selection

  const handleButtonClick = (option) => {
    setSelectedOption(option);
  };
  
  const handlePaymentModeChange = (e) => {
    setPaymentMode(e.target.value);
  };

  const handlePayment = () => {
    // Implement logic for payment processing here
    // This function will be called when "Pay Total Amount" button is clicked
    alert("Payment processed successfully!");
  };

  return (
    <div className="container  my-3 text-white">
      <div className="orderform py-5 rounded choose-payment px-5">
      <div className=" "> 
        <p className="m-0" >Choose a Payment method to Pay</p>
        <div className="d-flex align-items-center gap-2">
        <img src="assets/bg/secure.svg" className="img-fluid" alt="image" />
        <p className="text-gold my-1 fs-7">100% safe & secure payments</p></div>
        </div>
        

      <div className="row ">
       
        <div className="col-md-4 p-3 ">
         
          <form className="d-flex flex-column gap-3 my-5">
            <div className="form-check ">
              <input
                className="form-check-input"
                type="radio"
                name="paymentMode"
                value="creditCard"
                checked={paymentMode === 'creditCard'}
                onChange={handlePaymentModeChange}
              />
              <div className="">
              <img src="assets/bg/cardicon.svg" className="img-fluid" alt="image" />
              <label className="form-check-label mx-2">Credit / Debit Card</label>
              </div>
            </div>
        
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="paymentMode"
                value="upi"
                checked={paymentMode === 'upi'}
                onChange={handlePaymentModeChange}
              />
               <img src="assets/bg/upi.svg" className="img-fluid" alt="image" />
              <label className="form-check-label mx-3"> Pay using UPI</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="paymentMode"
                value="netBanking"
                checked={paymentMode === 'netBanking'}
                onChange={handlePaymentModeChange}
              />
               <img src="assets/bg/netbanking.svg" className="img-fluid" alt="image" />
              <label className="form-check-label mx-2">Net Banking</label>
            </div>
            {/* Add more payment modes as needed */}

           
          </form>
        </div>
        <div className="col-md-8 px-5 mobileresponsive">
          <div className="card payment_card text-white mx-5 mobileresponsive">
            <div className="card-body card_details gap-2 d-block">
              {paymentMode === 'creditCard' && (
                <div>
                  <div className=" rightcardicon d-flex  align-items-center gap-3 my-2">
                  <img src="assets/bg/rightcard.svg" className="img-fluid" alt="image" />
                  <p>Add Your Card Details</p>
                  </div>
                 
                  {/* Form fields for credit card details */}
                  <div className="form-group">
                    <label htmlFor="cardNumber">Card Number</label>
                    <input
                      type="text"
                      className="form-control bg-transparent payment_form"
                      id="cardNumber"
                      placeholder="Enter card number"
                     
                    />
                  </div>
                  <div className="d-flex gap-3">
                  <div className="form-group">
                    <label htmlFor="expiry">Expiry Month</label>
                    <input
                      type="text"
                      className="form-control bg-transparent payment_form"
                      id="expiry"
                      placeholder="MM/YYYY"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cvv">CVV</label>
                    <input
                      type="text"
                      className="form-control bg-transparent payment_form"
                      id="cvv"
                      placeholder="CVV"
                    />
                  </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="cardHolder">Card Holder Name</label>
                    <input
                      type="text"
                      className="form-control bg-transparent payment_form"
                      id="cardHolder"
                      placeholder="Cardholder's Name"
                    />
                  </div>
                  {/* Add more card details input fields */}
                </div>
              )}
             
             {paymentMode === 'upi' && (
                <div>
                  <p>Enter UPI</p>
                  {/* UPI input field */}
                  <div className="form-group">
                    <label htmlFor="upi">Enter UPI</label>
                    <input
                      type="text"
                      className="form-control bg-transparent payment_form"
                      id="upi"
                      placeholder="Enter UPI"
                    />
                  </div>
                </div>
              )}
              {paymentMode === 'netBanking' && (
                <div>
                  <p>Select Bank Account</p>
                  {/* Net Banking input fields */}
                  <div className="form-group">
                    <label htmlFor="bank">Select Bank</label>
                    <select className=" bg-transparent payment_form text-white " id="bank">
                      {/* Options for banks */}
                      <option className="bg-dark">Bank A</option>
                      <option className="bg-dark">Bank B</option>
                      <option className="bg-dark">Bank C</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="accountNumber">Enter Net Banking Id</label>
                    <input
                      type="text"
                      className="form-control bg-transparent payment_form"
                      id="accountNumber"
                      placeholder="Enter Net Banking Id"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Enter Password</label>
                    <input
                      type="password"
                      className="form-control bg-transparent payment_form"
                      id="password"
                      placeholder="Enter Password"
                    />
                  </div>
                </div>
              )}
              {/* Add sections for other payment modes */}

              <button className="btn btn-searchbar mt-3" onClick={handlePayment}>
              Pay Total Amount
            </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ChoosePayment;
