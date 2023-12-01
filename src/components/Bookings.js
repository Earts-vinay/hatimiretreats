import React from "react";
import SearchBar from "./HomeContent/SearchBar";
import "../App.css";
import { AiOutlineCheckCircle } from "react-icons/ai";
import {
  FaUtensils,
  FaSnowflake,
  FaTv,
  FaWifi,
  FaSun,
  FaStar,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Other_Rooms from "./Product_Detail_content/Other_Rooms";

const Bookings = () => {
  const amenityIcons = {
    Kitchen: FaUtensils,
    "Air Conditioner": FaSnowflake,
    Washer: AiOutlineCheckCircle,
    "Television with Netflix": FaTv,
    "Free Wireless Internet": FaWifi,
    "Balcony or Patio": FaSun,
    // Add more amenities and icons as needed
  };

  const products = [
    {
      id: 1,
      name: "Room Name/type",
      location: "Maimoon villa ",
      description:
        "Lorem Ipsum to po prostu fikcyjny tekst branży drukarskiej i składu. Lorem Ipsum to po prostu fikcyjny tekst branży drukarskiej i składu. ",
      dimension: "99mx99m | Area :  7000 sq.ft | Height : 3m",
      amenities: [
        "Kitchen",
        "Air Conditioner",
        "Washer",
        "Television with Netflix",
        "Free Wireless Internet",
        "Balcony or Patio",
      ],
      tags: ["#Lorem", "#Lorem"],
      image: "assets/booking_house.png",
    },

    {
      id: 2,
      name: "Room Name/type",
      location: "Maimoon villa",
      description:
        "Lorem Ipsum to po prostu fikcyjny tekst branży drukarskiej i składu. Lorem Ipsum to po prostu fikcyjny tekst branży drukarskiej i składu. ",
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
      tags: ["#Lorem", "#Lorem"],
      image: "assets/booking_house.png",
    },
    // Add more products here if needed
  ];
  return (
    <>
      <div>
        <SearchBar check="bookings" className="bookings" />
      </div>
      <div>
        <div className="container bootdey">
          {products.map((product) => (
            <div className="col-md-12 " key={product.id}>
              <section className="panel my-5">
                <div className="panel-body row p-3 rounded">
                  <div className="col-md-4">
                    <div className="pro-img-details p-3 ">
                      <img
                        src={product.image}
                        className="w-100 rounded"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-8 p-3">
                    <h2 className="pro-d-title text-gold">{product.name}</h2>
                    <p className="text-white d-flex align-items-center ">
                      <p className="m-0"> {product.location}</p>{" "}
                      <p className="px-2 d-flex align-items-center m-0">
                        {<FaLocationDot />} Matheran
                      </p>
                    </p>
                    <div className="product_meta row">
                      <div className="col-6 text-white ">
                        {" "}
                        <p className="d-flex align-items-center gap-2 m-0">
                          {" "}
                          <p className="dark p-1 rounded d-flex align-items-center ">
                            {" "}
                            4.6 <FaStar className="text-gold mx-2" />
                          </p>
                          <p>( 29 ratings ) Excellent</p>
                        </p>
                        <p className="my-0 dimension p-2 rounded-2">
                          Dimension : {product.dimension}
                        </p>
                        <div className="tagged_as  ">
                          {product.tags.map((tag, index) => (
                            <span key={index}>
                              <a
                                rel="tag"
                                className="text-white tags"
                                href="#/"
                              >
                                {tag}
                              </a>
                              {index !== product.tags.length - 1 && ", "}
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
                  <div className="gap-3 d-flex justify-content-center mt-3">
                    <button
                      className="btn btn-round btn-light text-white"
                      type="button"
                    >
                      <NavLink className="nav-link" to="/productdetail">
                        View Details
                      </NavLink>
                    </button>
                    <button className="eg-btn btn btn-searchbar ">
                      {" "}
                      <NavLink className="nav-link" to="/orderdetail">
                        {" "}
                        Book Now
                      </NavLink>
                    </button>
                  </div>
                </div>
              </section>
            </div>
          ))}
        </div>
    
       {/* other Rooms */}
        <div className="container">
          <Other_Rooms />
        </div>
      </div>
    </>
  );
};

export default Bookings;
