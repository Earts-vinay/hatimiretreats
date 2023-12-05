import React, { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../../App.css"; // Import your CSS file for styling
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

const Other_Rooms = () => {
  const cardData = [
    {
      title: "Oud Executive Suite",
      description: "Zainee Baug ",
      location:"Lonavala",
      price: "Rs 6500/N",
      imageUrl: "assets/otherroom.png", // Replace with actual image URL
    },
    {
      title: "Oud Executive Suite",
      description: "Zainee Baug ",
      location:"Lonavala",
      imageUrl: "assets/otherroom.png", // Replace with actual image URL
      price: "Rs 6500/N"
    },
    {
      title: "Oud Executive Suite",
      description: "Zainee Baug ",
      location:"Lonavala",
      imageUrl: "assets/otherroom.png", // Replace with actual image URL
      price: "Rs 6500/N"
    },
    {
      title: "Oud Executive Suite",
      description: "Zainee Baug ",
      location:"Lonavala",
      imageUrl: "assets/otherroom.png", // Replace with actual image URL
      price: "Rs 6500/N"
    },
  ];

  const handleOnDragStart = (e) => e.preventDefault();
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  return (
    <section className="my-5 py-5 mobileresponsive">
      <div className="d-flex justify-content-start align-items-center my-3">
        <img src="assets/bg/line.svg" className="linehome px-3" alt="image" />
        <h1 className="text-white">Other Rooms</h1>
      </div>

      <div className="other-room-carousel-wrapper">
        <button onClick={slidePrev} className="arrow-btn prev">
          <FiChevronLeft className="fs-1" />
        </button>
        <AliceCarousel
          mouseTracking
          responsive={responsive}
          disableButtonsControls
          disableDotsControls
          ref={carouselRef}
        >
          {cardData.map((card, index) => (
            <div key={index} className="item">
              <div className="row px-3 ">
                <div className="tourcard bgcard">
                <p className="text-white m-0 dark w-25 p-1 d-flex justify-content-center otherroomprice">{card.price}</p>
                  <img
                    className="tourimage "
                    src={card.imageUrl}
                    alt="Card"
                    onDragStart={handleOnDragStart}
                    // Set the height to 250px for mobile view
                  />
                  <div className="card-body my-4">
                    <h2 className="card-title text-gold">{card.title}</h2>
                    <div className="d-flex align-items-center gap-2 ">
                    <p className="fs-7 d-flex align-items-center m-0">{card.description} </p>
                    <p className="m-0 fs-7 d-flex align-items-center">{<FaLocationDot />} {" "} {card.location}</p>
                    </div>
                    
                    <p className="d-flex align-items-center  gap-2 my-2">
                          {" "}
                          <p className="dark p-1 rounded d-flex align-items-center justify-content-center m-0 ">
                            {" "}
                            4.6 <FaStar className="text-gold mx-2" />
                          </p>
                          <p className="m-0">( 29 ratings ) Excellent</p>
                        </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </AliceCarousel>
        <button
          onClick={slideNext}
          className="arrow-btn next d-flex align-items-center"
        >
          <FiChevronRight className="fs-1" />
        </button>
      </div>
    </section>
  );
};

export default Other_Rooms;
