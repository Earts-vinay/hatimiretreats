import React, { useState } from "react";
import { FaBed, FaCar, FaCat } from "react-icons/fa";
import { MdHotTub } from "react-icons/md";
const ProductDetail = () => {
  // Example array of image objects with URLs and names
  const images = [
    { url: "assets/booking_house.png" },
    { url: "assets/booking_house.png" },
    { url: "assets/booking_house.png" },
    { url: "assets/booking_house.png" },
    { url: "assets/booking_house.png" },
  ];

  const [dates, setDates] = useState({ fromDate: "", toDate: "" });
  const [adults, setAdults] = useState(1);
  const [kids, setKids] = useState(0);

  const handleAdultsChange = (value) => {
    // Handle increment/decrement of adults
    setAdults((prevValue) => Math.max(0, prevValue + value));
  };

  const handleKidsChange = (value) => {
    // Handle increment/decrement of kids
    setKids((prevValue) => Math.max(0, prevValue + value));
  };



  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          {/* Left side - One Image */}
          <div>
            <img
              src={images[0].url}
              alt="Main Product"
              className="img-fluid rounded"
            />
          </div>
        </div>
        <div className="col-md-6">
          {/* Right side - Four Images */}
          <div className="row ">
            {images.slice(1, 5).map((image, index) => (
              <div key={index} className="col-sm-6 mb-3 ">
                <img src={image.url} className="img-fluid rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="row text-white">
          <div className="col-lg-6">
            {/* Left side: Icons */}
            <div className="icon-row text-gold d-flex justify-content-between ">
                <div className="p-3 product_detail_icon_bg rounded">
              <FaBed className=" icon fs-3  " />
              <p className="text-gold">3 bed rooms
              </p>
                </div>
                <div className="p-3 product_detail_icon_bg rounded">
                <MdHotTub className="icon fs-3" />
                <p>2 Bathrooms</p>
                </div>
               
              <div className="p-3 product_detail_icon_bg rounded">
              <FaCar className="icon fs-3" />
              <p>3 Cars/2 Bikes</p>
              </div>
             
              <div className="p-3 product_detail_icon_bg rounded">
              <FaCat className="icon fs-3" />
              <p>0 Pets Allowed</p>
              </div>

            </div>

            {/* Product Description */}
            <div className="product-description text-white py-5">
              <p>Product Description</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci facere, voluptatem magnam possimus repellendus laudantium perspiciatis aliquid officiis numquam maiores. Consequatur voluptatem hic blanditiis laudantium illo neque laboriosam dolorum ducimus.</p>
            </div>
          </div>

          <div className="col-lg-6 product_detail_icon_bg rounded p-3 ">
            {/* Right side: Billing Details */}
            <div className="billing-details p-3">
              <p>Booking Details</p>
            
              <div className="quantity d-flex justify-content-between align-items-center p-0">
                <h6 className="mb-1">Adults:</h6>
                <h6 className="d-flex gap-2 product_detail_increment p-2 rounded-3">
                  <h6
                    className="mb-0"
                    onClick={() => handleAdultsChange(-1)}
                  >
                    -
                  </h6>
                  <span className="quantity-value">{adults}</span>
                  <h6
                    className=""
                    onClick={() => handleAdultsChange(1)}
                  >
                    +
                  </h6>
                  </h6>
                </div>

                <div className="quantity d-flex justify-content-between align-items-center">
                <p className="mb-1">Kids:</p>
               <p className="d-flex gap-2 product_detail_increment p-2 rounded-3 ">
                  <p
                    className="mb-0"
                    onClick={() => handleAdultsChange(-1)}
                  >
                    -
                  </p>
                  <span className="quantity-value">{adults}</span>
                  <p
                    className=""
                    onClick={() => handleAdultsChange(1)}
                  >
                    +
                  </p>
                  </p>
                </div>
              
                <div className="quantity d-flex justify-content-between align-items-center">
                <p className="mb-1">Rooms:</p>
               <p className="d-flex gap-2 product_detail_increment p-2 rounded-3 ">
                  <p
                    className="mb-0"
                    onClick={() => handleAdultsChange(-1)}
                  >
                    -
                  </p>
                  <span className="quantity-value">{adults}</span>
                  <p
                    className=""
                    onClick={() => handleAdultsChange(1)}
                  >
                    +
                  </p>
                  </p>
                </div>
              
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
