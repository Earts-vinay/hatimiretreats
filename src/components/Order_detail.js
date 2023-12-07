import React, { useState } from "react";
import Choose_Payment from "./Order_detail_Content/Choose_Payment";
import Guest_Details_form from "./Order_detail_Content/Guest_Details_form";
import Bookinginfo from "./Order_detail_Content/Bookinginfo";
import Billing_Details from "./Order_detail_Content/Billing_Details";

const Order_detail = () => {

  return (
    <>
    <div className="py-5">
     <Bookinginfo/>
      <div className="container mt-4  ">
      <div className="row  mx-5 px-5 mobileresponsive ">
        {/* Left side: Registration Form */}
        <div className="col-md-7 px-1">
         <Guest_Details_form/>
        </div>
        {/* Right side: Billing Details */}
        <div className="col-md-5  px-1" >
        <Billing_Details/>
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
