import React, { useState } from "react";
import SearchBar from "./HomeContent/SearchBar";
import "../App.css";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import {
  FaUtensils,
  FaSnowflake,
  FaTv,
  FaWifi,
  FaSun,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";
import { FaLocationDot,FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Other_Rooms from "./Product_Detail_content/Other_Rooms";
import Attractions from "./Properties_Content/Attractions";
import About_Properties from "./Properties_Content/About_Properties";

const Properties = () => {
  const amenityIcons = {
    Kitchen: FaUtensils,
    "Air Conditioner": FaSnowflake,
    Washer: AiOutlineCheckCircle,
    "Television with Netflix": FaTv,
    "Free Wireless Internet": FaWifi,
    "Balcony or Patio": FaSun,
    // Add more amenities and icons as needed
  };

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const products = [
    {
      id: 1,
      name: "Maimoon Villa",
      location: "Matheran ",
      description: "Max capacity of 6  ",
      dimension: "99mx99m | Area :  7000 sq.ft | Height : 3m",
      amenities: [
        "Kitchen",
        "Air Conditioner",
        "Washer",
        "Television with Netflix",
        "Free Wireless Internet",
        "Balcony or Patio",
      ],
      tags: ["#Lorem Ipsum", "#Lorem Ipsum"],
      image: "assets/property1.png",
      price: "Rs 6500/N",
    },

    {
      id: 2,
      name: "Burhani Villa",
      location: "Matheran",
      description: "Max capacity of 6  ",
      rating: "4.6  ( 29 ratings ) Excellent",
      dimension: "99mx99m | Area :  7000 sq.ft | Height : 3m",
      amenities: [
        "Kitchen",
        "Air Conditioner",
        "Washer",
        "Television with Netflix",
        "Free Wireless Internet",
        "Balcony or Patio",
      ],
      tags: ["#Lorem Ipsum", "#Lorem Ipsum"],
      image: "assets/property3.png",
      price: "Rs 6500/N",
    },
    // Add more products here if needed
  ];

  return (
    <>
      <div className="my-3 mx-5 px-5 mobileresponsive">
        <SearchBar check="bookings" className="bookings" />
      </div>
      <div>
        <div className="container bootdey">
          {products.map((product) => (
            <div className="col-md-12 " key={product.id}>
              <section className="panel my-5 mx-5 mobileresponsive px-5">
                <div className="panel-body row p-3 rounded">
                  <div className="col-md-4">
                    <div className="mt-3 px-3 ">
                      
                      <img
                        src={product.image}
                        className="w-100 rounded"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-8 p-3">
                    <div className="head d-flex justify-content-between mt-3">
                      <h2 className="pro-d-title text-gold m-0">
                        {product.name}
                      </h2>
                      <p
                        className="text-green cursor-pointer"
                        onClick={toggleModal}
                      >
                        Cancellation policy
                      </p>

                      {showModal && (
                        <div
                          className="modal d-flex justify-content-center align-items-center"
                          tabIndex="-1"
                          role="dialog"
                          style={{
                            display: "block",
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                          }}
                        >
                          <div
                            className="modal-dialog rounded "
                            role="document"
                          >
                            <div className="modal-content p-3 ">
                              <div className="modal-header">
                                <p className="modal-title text-center cursor-pointer ">
                                  Cancellation Policy
                                </p>
                                <p
                                  type="button"
                                  className="close"
                                  onClick={toggleModal}
                                >
                                  <IoMdClose className="fs-4" />
                                </p>
                              </div>
                              <div className="modal-body fs-7">
                                Review our cancellation policy before making a
                                reservation, as cancellation fees may apply.{" "}
                                <br />
                                <p className="fs-8 py-3">
                                  A. Cancel 48 hours before check-in: No charge.{" "}
                                  <br />
                                  B. Cancel between 48 and 24 hours before
                                  check-in: 20% of the total amount.
                                  <br />
                                  C. Cancel within 24 hours of check-in: 30% of
                                  the total amount.
                                  <br />
                                  D. No-shows: Full booking amount may be
                                  charged.
                                  <br />
                                  E. Advance Purchase/Non-Refundable Bookings:
                                  Cancellations, changes, or no-shows result in
                                  non-refundable bookings. <br />
                                  F. Refunds may take 7-10 business days.
                                  <br />
                                </p>
                                Email support@hatimiproperties.com for
                                cancellations failure means loss of payments.
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <p className="text-white d-flex align-items-center mb-1 ">
                      <p className="m-0 d-flex align-items-center">
                        {<FaLocationDot className="pe-1"/>} {product.location}
                      </p>{" "}
                    </p>
                    <div className="product_meta row">
                      <div className="col-6 text-white ">
                        {" "}
                        <p className="text-gold mb-1">{product.description}</p>
                        <p className="d-flex align-items-center gap-2 my-2">
                          {" "}
                          <p className="dark p-1 rounded d-flex align-items-center m-0 ">
                            {" "}
                            4.6 <FaStar className="text-gold mx-2" />
                          </p>
                          <p className="m-0">( 29 ratings ) Excellent</p>
                        </p>
                        <p className="my-1 dimension p-2 rounded-2">
                          Dimension : {product.dimension}
                        </p>
                        <div className="tagged_as my-2 ">
                          {product.tags.map((tag, index) => (
                            <span key={index} className="fs-7">
                              <a
                                rel="tag"
                                className="text-white tags px-3 fs-7"
                                href="#/"
                              >
                                {tag}
                              </a>
                              {index !== product.tags.length - 1 && " "}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="col-6 booking_amenities text-white ">
                        Offered Amenities
                        <div className="row my-2">
                          <div className="col-6">
                            <ul className="amenities-list">
                              {product.amenities
                                .slice(0, 3)
                                .map((amenity, index) => {
                                  const Icon = amenityIcons[amenity];
                                  return (
                                    <li
                                      key={index}
                                      className="amenity-item gap-2 d-flex align-items-center"
                                    >
                                      {Icon && <Icon className="icon" />}
                                      {amenity}
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                          <div className="col-6">
                            <ul className="amenities-list">
                              {product.amenities
                                .slice(3)
                                .map((amenity, index) => {
                                  const Icon = amenityIcons[amenity];
                                  return (
                                    <li
                                      key={index}
                                      className="amenity-item gap-2 d-flex align-items-center"
                                    >
                                      {Icon && <Icon className="icon" />}
                                      {amenity}
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="topline mt-0"></div>
                  <div className="gap-3 d-flex justify-content-center align-items-center mt-4">
                    <button className="eg-btn btn btn-searchbar ">
                      <NavLink className="nav-link" to="/bookings">
                        View Rooms { " "} <FaArrowRightLong className="ps-2 fs-4" />
                      </NavLink>
                    </button>
                  </div>
                </div>
              </section>
            </div>
          ))}
        </div>
        <About_Properties/>
        {/* Attractions */}
        <div className="container">
           
          <Attractions />
        </div>
      </div>
    </>
  );
};

export default Properties;
