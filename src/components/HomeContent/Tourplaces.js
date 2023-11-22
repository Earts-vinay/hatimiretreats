import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 564 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 564, min: 0 },
      items: 1,
    },
  };

  const customCarouselStyle = {
    "& .react-multi-carousel-item": {
      width: "300px", // Setting width to 'auto' to remove explicit width
    },
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
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={3000}
        removeArrowOnDeviceType={["tablet"]}
        centerMode={true}
        centerSlidePercentage={100}
        containerClass="carousel-container" // Apply custom class for styling
        customTransition="all .5s"
        customDot={<></>} // Hide dots if needed
        customStyle={customCarouselStyle} // Apply custom styles
      >
        {cardData.map((card, index) => (
          <div key={index} className="row p-3 my-4">
            <div className="card bgcard">
              <img
                className="card-img-top"
                src={card.imageUrl}
                alt="Card"
                 // Set the height to 250px for mobile view
              />
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
      </Carousel>
    </div>
  );
};

export default Tourplaces;
