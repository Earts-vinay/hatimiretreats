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
      imageUrl: "assets/tour1.png", // Replace with actual image URL
    },
    {
      title: "Lonavala",
      description:
        "Come to the thrilling zip-zap-zoom rides in the fascinating realm of Lonavala. Take a lovely ride around the winding ghat roads, bringing pure delight to hearts. The vast woodlands and grassy landscapes are a mesmerizing setting that promises a fabulous experience. ",
      imageUrl: "assets/tour2.png", // Replace with actual image URL
    },
    {
      title: "Panchgani",
      description:
        "The mountains and lush landscapes make Panchgani truly exceptional, capturing the hearts of nature lovers. With striking waterfalls, diverse valleys, and the serene lakes, this place is a haven for relaxation. Experience the beauty at Hatimi Retreats in this enchanting location. ",
      imageUrl: "assets/tour3.png", // Replace with actual image URL
    },
    {
      title: "Mount Abu",
      description:
        "Escape the desert heat and find solace in Mount Abu, Rajasthan's summer capital. This oasis greets visitors with captivating Aravalli mountains, cascading waterfalls, serene lakes, lush forests, ancient temples, and breathtaking scenic spots.  ",
      imageUrl: "assets/tour4.png", // Replace with actual image URL
    },
    {
      title: "Dumas",
      description:
        "Swap your daily office-home routine for a scenic journey to Hatimi Retreats in Dumas. Located amidst women's favorite shopping destinations, textile industries, & renowned jewelry markets in Surat. With its close proximity to the airport, Hatimi Retreats stands out as a unique choice. ",
      imageUrl: "assets/tour5.png", // Replace with actual image URL
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
        <span className="mx-5 px-5 mobileresponsive">Have a look</span>
        <div className='d-flex justify-content-start align-items-center'>
        <img src="assets/bg/line.svg" className="linehome px-3" alt="image" />
        
          <h1>Find Your Desired Places</h1>
          
        </div>
        <p className="mx-5 px-5 m-0 mobileresponsive">Voluptate exercitation incididunt aliquip deserunt duis aute irure dolor.</p>
        </div>
      </div>
      <div className="carousel-wrapper">
        <button onClick={slidePrev} className="arrow-btn prev">
        <FiChevronLeft className="fs-1 arrowleft" />
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
              <div className="row px-2 ">
                <div className="tourcard bgcard">
                  <img
                    className="tourimage "
                    src={card.imageUrl}
                    alt="Card"
                    onDragStart={handleOnDragStart}
                    // Set the height to 250px for mobile view
                  />
                  <div className="card-body my-4">
                    <h2 className="card-title text-gold">{card.title}</h2>
                    <p className="fs-7 mt-2 text-lightwhite mb-3">{card.description}</p>
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
        <FiChevronRight className="fs-1 arrowright"/>
        </button>
      </div>
    </div>
  );
};

export default Tourplaces;
