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

const Bookings = () => {

  const cardData = [
    {
      title: "Oud Executive Suite",
      description:
        "Zainee Baug ",
      imageUrl: "assets/booking_house.png", // Replace with actual image URL
    },
    {
      title: "Oud Executive Suite",
      description:
        "Zainee Baug ",
      imageUrl: "assets/booking_house.png", // Replace with actual image URL
    },
    {
      title: "Oud Executive Suite",
      description:
        "Zainee Baug ",
      imageUrl: "assets/booking_house.png", // Replace with actual image URL
    },
    {
      title: "Oud Executive Suite",
      description:
        "Zainee Baug ",
      imageUrl: "assets/booking_house.png", // Replace with actual image URL
    },
   
    // Add more card objects as needed
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
                    <p className="text-white d-flex align-items-center">
                      {product.location}, {<FaLocationDot />} Matheran
                    </p>
                    <div className="product_meta row">
                      <div className="col-6 text-white ">
                        {" "}
                        <p className="d-flex align-content-center">
                          {" "}
                          4.6 <FaStar className="text-gold" /> ( 29 ratings ){" "}
                          Excellent
                        </p>
                        <p className="my-2 dimension p-2 rounded-2">
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

                      <div className="col-6 text-white ">
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
                      <NavLink className="nav-link" to="/productdetail">View Details</NavLink>
                    </button>
                    <button className="eg-btn btn btn-searchbar ">
                      {" "}
                      <NavLink className="nav-link" to="/orderdetail"> Book Now</NavLink>
                     
                    </button>
                  </div>
                </div>
              </section>
            </div>
          ))}
        </div>

        <div className="container">
      <section>
        <h1 className="text-white">Other Rooms</h1>
        <div className="row d-flex flex-nowrap overflow-auto">
          {cardData.map((card, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-12 p-3 my-4 gap-3">
              <div className="card otherrooms gap-3">
                <img
                  className="card-img-top"
                  src={card.imageUrl}
                  alt="Card"
                  // Set the height to 250px for mobile view
                />
                <div className="card-body">
                  <h3 className="card-title text-gold">{card.title}</h3>
                  <p className="card-text">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
      </div>
    </>
  );
};

export default Bookings;
