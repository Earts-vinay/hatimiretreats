import React, { useState } from "react";

const ChoosePayment = () => {
  const [paymentMode, setPaymentMode] = useState('creditCard'); // Default payment mode

  const handlePaymentModeChange = (e) => {
    setPaymentMode(e.target.value);
  };

  const handlePayment = () => {
    // Implement logic for payment processing here
    // This function will be called when "Pay Total Amount" button is clicked
    alert("Payment processed successfully!");
  };

  return (
    <div className="container orderform p-5 rounded my-3 text-white">
      <div className=""> 
        <p >Choose a Payment method to Pay</p>
      <p className="text-gold">100% safe & secure payments</p></div>

      <div className="row">
       
        <div className="col-md-6 p-3">
        <div className="my-3">
          <button className="btn btn-primary mr-2">Pay at Hotel</button>
          <button className="btn btn-primary">Pay Now</button>
          </div>
          <form>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="paymentMode"
                value="creditCard"
                checked={paymentMode === 'creditCard'}
                onChange={handlePaymentModeChange}
              />
              <label className="form-check-label">Credit Card</label>
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
              <label className="form-check-label">UPI</label>
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
              <label className="form-check-label">Net Banking</label>
            </div>
            {/* Add more payment modes as needed */}

           
          </form>
        </div>
        <div className="col-md-6">
          <div className="card payment_card text-white">
            <div className="card-body card_details gap-2 d-block">
              {paymentMode === 'creditCard' && (
                <div>
                  <p>Add Your Card Details</p>
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
                    <select className="form-control bg-transparent payment_form" id="bank">
                      {/* Options for banks */}
                      <option>Bank A</option>
                      <option>Bank B</option>
                      <option>Bank C</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="accountNumber">Enter Account Number</label>
                    <input
                      type="text"
                      className="form-control bg-transparent payment_form"
                      id="accountNumber"
                      placeholder="Enter Account Number"
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

              <button className="btn btn-primary mt-3" onClick={handlePayment}>
              Pay Total Amount
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoosePayment;