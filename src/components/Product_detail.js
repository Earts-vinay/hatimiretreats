import React, { useState, useEffect } from "react";
import Topimages from "./Product_Detail_content/Topimages";
import Other_Rooms from "./Product_Detail_content/Other_Rooms";
import Booking_card from "./Product_Detail_content/Booking_card";
import Product_Description from "./Product_Detail_content/Product_Description";

const ProductDetail = () => {
  return (
    <div className="container">
      {/* Topimages */}
      <Topimages />

      {/* Leftside icons */}
      <div>
        <div className="row text-white ">
          {/* Left Description */}
          <Product_Description />

          {/* rightside Bookings */}
          <Booking_card />
        </div>
      </div>

      {/* Other Rooms */}
      <div className="">
        <Other_Rooms />
      </div>
    </div>
  );
};

export default ProductDetail;
