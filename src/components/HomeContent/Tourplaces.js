import React, { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../../App.css"; // Import your CSS file for styling
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Tourplaces = () => {
  const cardData = [
    {
      title: "Matheran",
      description:
        "Get ready for an exciting journey to Matheran via a scenic route. Along the way to Hatimi Retreats, experience a thrilling toy train ride and embark on a horse ride adventure to visit Hatimi Retreats. Rediscover your inner child with the enchanting charm of Matheran. ",
      imageUrl: "assets/booking_house.png", // Replace with actual image URL
    },
    {
      title: "Lonavala",
      description:
        "Come to the thrilling zip-zap-zoom rides in the fascinating realm of Lonavala. Take a lovely ride around the winding ghat roads, bringing pure delight to hearts. The vast woodlands and grassy landscapes are a mesmerizing setting that promises a fabulous experience. ",
      imageUrl: "assets/booking_house.png", // Replace with actual image URL
    },
    {
      title: "Panchgani",
      description:
        "The mountains and lush landscapes make Panchgani truly exceptional, capturing the hearts of nature lovers. With striking waterfalls, diverse valleys, and the serene lakes, this place is a haven for relaxation. Experience the beauty at Hatimi Retreats in this enchanting location. ",
      imageUrl: "assets/booking_house.png", // Replace with actual image URL
    },
    {
      title: "Mount Abu",
      description:
        "Lorem Ipsum to po prostu fikcyjny tekst branży drukarskiej i składu. Lorem Ipsum jest standardowym ",
      imageUrl: "assets/booking_house.png", // Replace with actual image URL
    },
    {
      title: "Dummas",
      description:
        "Lorem Ipsum to po prostu fikcyjny tekst branży drukarskiej i składu. Lorem Ipsum jest standardowym ",
      imageUrl: "assets/booking_house.png", // Replace with actual image URL
    },
    // Add more card objects as needed
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
    <div className="container">
      <div className="row text-white">
        <div className="col">
          <span>Have a look</span>
          <h1>Find Your Desired Places</h1>
          <p>Voluptate exercitation incididunt aliquip deserunt duis aute irure dolor.</p>
        </div>
      </div>
      <div className="carousel-wrapper">
        <button onClick={slidePrev} className="arrow-btn prev">
        <FiChevronLeft className="fs-3" />
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
              <div className="row p-3 my-2">
                <div className="tourcard bgcard">
                  <img
                    className="tourimage "
                    src={card.imageUrl}
                    alt="Card"
                    onDragStart={handleOnDragStart}
                    // Set the height to 250px for mobile view
                  />
                  <div className="card-body">
                    <h2 className="card-title">{card.title}</h2>
                    <p className="fs-7 mt-2">{card.description}</p>
                    <a href="#" className="btn eg-btn btn">
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </AliceCarousel>
        <button onClick={slideNext} className="arrow-btn next d-flex align-items-center">
        <FiChevronRight className="fs-3"/>
        </button>
      </div>
    </div>
  );
};

export default Tourplaces;
