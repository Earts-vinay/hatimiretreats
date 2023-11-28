import React, { useState, useEffect } from "react";
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
import { FaLocationDot } from "react-icons/fa6";

const ProductDetail = () => {
  const cardData = [
    {
      title: "Oud Executive Suite",
      description: "Zainee Baug ",
      imageUrl: "assets/booking_house.png", // Replace with actual image URL
    },
    {
      title: "Oud Executive Suite",
      description: "Zainee Baug ",
      imageUrl: "assets/booking_house.png", // Replace with actual image URL
    },
    {
      title: "Oud Executive Suite",
      description: "Zainee Baug ",
      imageUrl: "assets/booking_house.png", // Replace with actual image URL
    },
    {
      title: "Oud Executive Suite",
      description: "Zainee Baug ",
      imageUrl: "assets/booking_house.png", // Replace with actual image URL
    },
  ];

  // Example array of image objects with URLs and names
  const images = [
    { url: "assets/booking_house.png" },
    { url: "assets/booking_house.png" },
    { url: "assets/booking_house.png" },
    { url: "assets/booking_house.png" },
    { url: "assets/booking_house.png" },
  ];

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

  const [dates, setDates] = useState({ fromDate: "", toDate: "" });
  const [adults, setAdults] = useState(0);
  const [kids, setKids] = useState(0);
  const [room, setRoom] = useState(0);
  const [bedsCount, setBedsCount] = useState(0);
  const [pillowsCount, setPillowsCount] = useState(0);
  const [blanketsCount, setBlanketsCount] = useState(0);

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

  const handleAdultsChange = (value) => {
    // Handle increment/decrement of adults
    setAdults((prevValue) => Math.max(0, prevValue + value));
  };

  const handleKidsChange = (value) => {
    // Handle increment/decrement of kids
    setKids((prevValue) => Math.max(0, prevValue + value));
  };

  const handleRoomChange = (value) => {
    // Handle increment/decrement of kids
    setRoom((prevValue) => Math.max(0, prevValue + value));
  };

  const handleBedsChange = (value) => {
    setBedsCount((prevCount) => Math.max(0, prevCount + value));
  };

  const handlePillowsChange = (value) => {
    setPillowsCount((prevCount) => Math.max(0, prevCount + value));
  };

  const handleBlanketsChange = (value) => {
    setBlanketsCount((prevCount) => Math.max(0, prevCount + value));
  };

  const rules = [
    "No smoking allowed inside the premises",
    "Pets are not allowed",
    "Keep noise levels down after 10 PM",
    "Follow the designated parking areas",
    // Add more rules as needed
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="pt-5 pb-2">
          <h2 className="text-gold">Room Name/type</h2>
          <p className="text-white d-flex align-items-center ">
            <p className="m-0"> Matheran</p>{" "}
            <p className="px-2 d-flex align-items-center m-0">
              {<FaLocationDot />} Matheran
            </p>
          </p>
        </div>
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

      {/* Leftside icons */}
      <div>
        <div className="row text-white ">
          <div className="col-lg-7 p-5">
            <div className="icon-row text-gold d-flex justify-content-between ">
              <div className="p-3 product_detail_icon_bg rounded">
                <FaBed className=" icon fs-3  " />
                <p className="text-gold">3 bed rooms</p>
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
              <div className="row my-3">
                <div className="col-6">
                  <div className="d-flex">
                    <FaBroom size={20} style={{ marginRight: "5px" }} />
                    <p>Daily Cleaning</p>
                  </div>
                  <div className="d-flex">
                    <FaSprayCan size={20} style={{ marginRight: "5px" }} />
                    <p>Disinfections and Sterilizations</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex">
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
              <p>Nearby Services</p>
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
              <p>
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

          {/* rightside Bookings */}
          <div className="col-lg-5  py-5 ">
            {/* Right side: Billing Details */}
            <div className="billing-details product_detail_icon_bg rounded p-5">
              <p>Booking Details</p>

              <div className="quantity d-flex justify-content-between align-items-center">
                <p className="mb-1">Adults:</p>
                <p className="d-flex gap-2 product_detail_increment p-2 rounded-3">
                  <p className="m-0" onClick={() => handleAdultsChange(-1)}>
                    -
                  </p>
                  <span className="quantity-value">{adults}</span>
                  <p className="m-0" onClick={() => handleAdultsChange(1)}>
                    +
                  </p>
                </p>
              </div>

              <div className="quantity d-flex justify-content-between align-items-center">
                <p className="mb-1">Kids:</p>
                <p className="d-flex gap-2 product_detail_increment p-2 rounded-3 ">
                  <p className="m-0" onClick={() => handleKidsChange(-1)}>
                    -
                  </p>
                  <span className="quantity-value">{kids}</span>
                  <p className="m-0" onClick={() => handleKidsChange(1)}>
                    +
                  </p>
                </p>
              </div>

              <div className="quantity d-flex justify-content-between align-items-center">
                <p className="mb-1">Rooms:</p>
                <p className="d-flex gap-2 product_detail_increment p-2 rounded-3 ">
                  <p className="m-0" onClick={() => handleRoomChange(-1)}>
                    -
                  </p>
                  <span className="quantity-value">{room}</span>
                  <p className="m-0" onClick={() => handleRoomChange(1)}>
                    +
                  </p>
                </p>
              </div>

              {/* Addons */}
              <div className="my-3">
                <h5>Addons</h5>
                <div className="quantity d-flex justify-content-between align-items-center">
                  <p className="mb-1">Extra Beds </p>
                  <p className="d-flex gap-2 product_detail_increment p-2 rounded-3 ">
                    <p className="m-0" onClick={() => handleBedsChange(-1)}>
                      -
                    </p>
                    <span className="quantity-value">{bedsCount}</span>
                    <p className="m-0" onClick={() => handleBedsChange(1)}>
                      +
                    </p>
                  </p>
                </div>

                <div className="quantity d-flex justify-content-between align-items-center">
                  <p className="mb-1">Extra Blankets </p>
                  <p className="d-flex gap-2 product_detail_increment p-2 rounded-3 ">
                    <p className="m-0" onClick={() => handleBlanketsChange(-1)}>
                      -
                    </p>
                    <span className="quantity-value">{blanketsCount}</span>
                    <p className="m-0" onClick={() => handleBlanketsChange(1)}>
                      +
                    </p>
                  </p>
                </div>

                <div className="quantity d-flex justify-content-between align-items-center">
                  <p className="mb-1">Extra Pillows </p>
                  <p className="d-flex gap-2 product_detail_increment p-2 rounded-3 ">
                    <p className="m-0" onClick={() => handlePillowsChange(-1)}>
                      -
                    </p>
                    <span className="quantity-value">{pillowsCount}</span>
                    <p className="m-0" onClick={() => handlePillowsChange(1)}>
                      +
                    </p>
                  </p>
                </div>
              </div>

              <div className=" orderform rounded">
                <h5 className="text-white p-3 ">Billing Details</h5>
                <div className="mb-3 d-flex ">
                  <input
                    type="text"
                    className="orderforminput bg-transparent"
                    id="couponInput"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                  />
                  <button onClick={applyCoupon} className="btn btn-searchbar">
                    Apply
                  </button>
                </div>
                <div className="mb-3 text-white py-3">
                  <div className="d-flex justify-content-between">
                    <p>Room price for 4Nights x 4Guests </p> <p>₹7998</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>Add ons</p> <p>₹7998</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>Taxes & Service Fees</p> <p>₹753</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>Hotel GST</p> <p>₹350</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>Coupon discount</p> <p>₹1245</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>Total Amount: </p> <p>₹{totalAmount}</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between text-white px-3 fs-4">
                  {" "}
                  <p>Payable Amount: </p> <p>₹{payableAmount}</p>
                </div>
              </div>

              <div className="gap-3 d-flex justify-content-center mt-3">
                <button
                  className="btn btn-round btn-light text-white w-50"
                  type="button"
                >
                  <NavLink className="nav-link" to="/">
                    Chat with us
                  </NavLink>
                </button>
                <button className="eg-btn btn btn-searchbar w-50 ">
                  {" "}
                  <NavLink className="nav-link" to="/orderdetail">
                    {" "}
                    Book Now
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Other Rooms */}

      <div className="container">
        <section>
          <h1 className="text-white">Other Rooms</h1>
          <div className="row d-flex flex-nowrap overflow-auto">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-4 col-sm-6 col-12 p-3 my-4 gap-3"
              >
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
  );
};

export default ProductDetail;
