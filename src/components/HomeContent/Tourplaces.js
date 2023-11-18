import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Card } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Importing FontAwesome icons

const Tourplaces = () => {
  const cardData = [
    {
      title: "Matheran",
      description:
        "Lorem Ipsum to po prostu fikcyjny tekst branży drukarskiej i składu. Lorem Ipsum jest standardowym ",
      imageUrl: "assets/tourimage1.png", // Replace with actual image URL
    },
    {
      title: "Lonavala",
      description:
        "Lorem Ipsum to po prostu fikcyjny tekst branży drukarskiej i składu. Lorem Ipsum jest standardowym ",
      imageUrl: "assets/tourimage1.png", // Replace with actual image URL
    },
    {
      title: "Panchgani",
      description:
        "Lorem Ipsum to po prostu fikcyjny tekst branży drukarskiej i składu. Lorem Ipsum jest standardowym ",
      imageUrl: "assets/tourimage1.png", // Replace with actual image URL
    },
    {
      title: "Mount Abu",
      description:
        "Lorem Ipsum to po prostu fikcyjny tekst branży drukarskiej i składu. Lorem Ipsum jest standardowym ",
      imageUrl: "assets/tourimage1.png", // Replace with actual image URL
    },
    {
      title: "Dummas",
      description:
        "Lorem Ipsum to po prostu fikcyjny tekst branży drukarskiej i składu. Lorem Ipsum jest standardowym ",
      imageUrl: "assets/tourimage1.png", // Replace with actual image URL
    },
    // Add more card objects as needed
  ];

  const responsive = {
    0: { items: 1 },
    576: { items: 2 },
    768: { items: 3 },
    992: { items: 3 },
    1200: { items: 3 },
  };

  const handlePrev = (e) => {
    e.preventDefault();
    carousel.slidePrev();
  };

  const handleNext = (e) => {
    e.preventDefault();
    carousel.slideNext();
  };

  let carousel = null;

  return (
    <div className="container">
      <div className="row text-white">
        <div className="col">
          <span>Have a look</span>
          <h2>Find Your Desired Places</h2>
          <p>Voluptate exercitation incididunt aliquip deserunt duis aute irure dolor.</p>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center px-2">
        <button onClick={handlePrev} className="arrow-btn">
          <FaArrowLeft size={24} /> {/* Use FaArrowLeft icon component */}
        </button>
        <AliceCarousel
          responsive={responsive}
          mouseTracking
          buttonsDisabled={true}
          items={cardData.map((card, index) => (
            <div key={index} className="p-3 my-4 ">
              <div className="card bgcard">
                <img className="card-img-top" src={card.imageUrl} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.description}</p>
                  <a href="#" className="btn eg-btn btn">
                    View More
                  </a>
                </div>
              </div>
            </div>
          ))}
          ref={(el) => (carousel = el)} // Save reference to the carousel
        />
        <button onClick={handleNext} className="arrow-btn ">
          <FaArrowRight size={24} /> {/* Use FaArrowRight icon component */}
        </button>
      </div>

     
    </div>
  );
};

export default Tourplaces;
