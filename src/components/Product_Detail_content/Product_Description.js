import React from 'react'
import { FaBed, FaCar, FaCat, FaStar } from "react-icons/fa";
import { MdHotTub } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { FaUtensils, FaSnowflake, FaTv, FaWifi, FaSun } from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai";
import {
  FaBroom,
  FaSprayCan,
  FaFireExtinguisher,
  FaExclamationTriangle,
} from "react-icons/fa"; // Import necessary icons

const Product_Description = () => {
    const reviewItems = [
        { name: "Amenities", rating: 4 }, // Example ratings (you can adjust these)
        { name: "Communication", rating: 5 },
        { name: "Value for Money", rating: 3 },
        { name: "Hygiene", rating: 5 },
        { name: "Location of Property", rating: 4 },
      ];
    
      const renderProgressBar = (rating) => {
        const percentage = (rating / 5) * 100;
        return (
          <div className="progress">
            <div
              className="progress-bar bg-gold"
              role="progressbar"
              style={{ width: `${percentage}%` }}
              aria-valuenow={rating}
              aria-valuemin="0"
              aria-valuemax="5"
            ></div>
          </div>
        );
      };
    
      const reviews = [
        {
          id: 1,
          userName: "John Doe",
          date: "11-10-2021",
          userProfileIcon: "https://via.placeholder.com/50", // Replace with actual image URL
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et justo at ante malesuada ultrices.",
        },
        {
          id: 2,
          userName: "Jane Smith",
          date: "11-10-2021",
          userProfileIcon: "https://via.placeholder.com/50", // Replace with actual image URL
          description:
            "Vestibulum et nisi vitae tortor varius eleifend. Proin non bibendum magna, sit amet congue augue.",
        },
        // Add more reviews as needed
      ];
    
      const amenityIcons = {
        Kitchen: FaUtensils,
        "Air Conditioner": FaSnowflake,
        Washer: AiOutlineCheckCircle,
        "Television with Netflix": FaTv,
        "Free Wireless Internet": FaWifi,
        "Balcony or Patio": FaSun,
        // Add more amenities and icons as needed
      };
    
      const amenities = Object.keys(amenityIcons);
    
      const renderAmenitiesGroup = (startIndex) => {
        return amenities.slice(startIndex, startIndex + 3).map((amenity, index) => (
          <div className="col-12" key={index}>
            <p>
              {React.createElement(amenityIcons[amenity], {
                size: 20,
                style: { marginRight: "5px" },
              })}
              {amenity}
            </p>
          </div>
        ));
      };
    
      const rules = [
        "No smoking allowed inside the premises",
        "Pets are not allowed",
        "Keep noise levels down after 10 PM",
        "Follow the designated parking areas",
        // Add more rules as needed
      ];

  return (
    <div className="col-lg-7 pe-2 ps-0">
            <div className="icon-row text-gold d-flex justify-content-between ">
              <div className="p-4 d-flex flex-column gap-3 product_detail_icon_bg rounded">
                <FaBed className=" icon fs-3  " />
                <p className="text-gold">3 bed rooms</p>
              </div>
              <div className="p-4 d-flex flex-column gap-3 product_detail_icon_bg rounded">
                <MdHotTub className="icon fs-3" />
                <p>2 Bathrooms</p>
              </div>

              <div className="p-4 d-flex flex-column gap-3 product_detail_icon_bg rounded">
                <FaCar className="icon fs-3" />
                <p>3 Cars/2 Bikes</p>
              </div>

              <div className="p-4 d-flex flex-column gap-3 product_detail_icon_bg rounded">
                <FaCat className="icon fs-3" />
                <p>0 Pets Allowed</p>
              </div>
            </div>

            {/* Product Description */}
            <div className="product-description text-white py-5">
              <p className='py-2'>Product Description</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Adipisci facere, voluptatem magnam possimus repellendus
                laudantium perspiciatis aliquid officiis numquam maiores.
                Consequatur voluptatem hic blanditiis laudantium illo neque
                laboriosam dolorum ducimus.
              </p>
            </div>

            {/* offered amenities */}
            <div className=" col-12">
              Offered Amenities
              <div className="row my-3">
                <div className=" col-6">{renderAmenitiesGroup(0)}</div>
                <div className="col-6">{renderAmenitiesGroup(3)}</div>
              </div>
              <button className="eg-btn btn btn-searchbar  ">
                {" "}
                <NavLink className="nav-link" to="/orderdetail">
                  {" "}
                  Show all 10 Amenities
                </NavLink>
              </button>
            </div>

            {/* Safety and Hygiene */}
            <div className="my-5">
              <p>Safety and Hygiene</p>
              <div className="row my-3 ">
                <div className="col-6">
                  <div className="d-flex mb-3">
                    <FaBroom size={20} style={{ marginRight: "5px" }} />
                    <p>Daily Cleaning</p>
                  </div>
                  <div className="d-flex">
                    <FaSprayCan size={20} style={{ marginRight: "5px" }} />
                    <p>Disinfections and Sterilizations</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex mb-3">
                    <FaFireExtinguisher
                      size={20}
                      style={{ marginRight: "5px" }}
                    />
                    <p>Fire Extinguishers</p>
                  </div>
                  <div className="d-flex">
                    <FaExclamationTriangle
                      size={20}
                      style={{ marginRight: "5px" }}
                    />
                    <p>Smoke Detectors</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Near by Services */}
            <div className="my-3">
              <p className='mb-3'>Nearby Services</p>
              <div
                id="map-container-google-2"
                class="z-depth-1-half map-container w-100 rounded "
              >
                <iframe
                  src="https://maps.google.com/maps?q=chicago&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  className="w-100 h-100 rounded"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="icon-row text-gold d-flex justify-content-between my-5">
                <div className="px-4 py-3 product_detail_icon_bg rounded">
                  <h5>Mandi House </h5>
                  <p className="text-white">100 meters away</p>
                </div>
                <div className="px-4 py-3 product_detail_icon_bg rounded">
                  <h5> Grill Restro</h5>
                  <p className="text-white">200 meters away</p>
                </div>
                <div className="px-4 py-3 product_detail_icon_bg rounded">
                  <h5> ABCED Mall</h5>
                  <p className="text-white">300 meters away</p>
                </div>
              </div>
            </div>

            {/* Venue Rules */}
            <div className="my-3">
              <p> Venue Rules</p>
              <ul>
                {rules.map((rule, index) => (
                  <li key={index}>{rule}</li>
                ))}
              </ul>
            </div>

            {/* Reviews */}
            <div className="my-5">
              <p className='mb-3'>
                Reviews <FaStar className="text-gold" /> 5.0
              </p>
              {reviewItems.map((item, index) => (
                <div key={index} className="d-flex gap-3 align-items-center">
                  <p>{item.name}</p>

                  <p className="w-25">{renderProgressBar(item.rating)}</p>
                </div>
              ))}
            </div>

            <div className="row">
              {reviews.map((review) => (
                <div key={review.id} className="col-md-6">
                  <div className="card mb-3 bg-transparent text-white">
                    <div className="card-body ">
                      <div className="d-flex align-items-center mb-3 gap-3">
                        <img
                          src={review.userProfileIcon}
                          alt="User Profile"
                          className="rounded-circle mr-3"
                          style={{ width: "60px", height: "60px" }}
                        />
                        <div className="d-flex flex-column align-items-center ">
                          <h5 className="card-title">{review.userName}</h5>
                          <p>{review.date}</p>
                        </div>
                      </div>
                      <p className="card-text">{review.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
  )
}

export default Product_Description