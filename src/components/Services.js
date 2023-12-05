import React from "react";
import { Carousel } from "react-bootstrap";
import Instagramfeed from "./HomeContent/Instagramfeed";
import Testimonials from "./HomeContent/Testimonials";

const Services = () => {
  // Sample array of objects containing service information
  const servicesData = [
    {
      id: 1,
      heading:
        "PLAN A MEETING Hatimi Retreats: Your Ideal Corporate Meeting Venue",
      description:
        "Escape the boring conventional boardrooms and immerse your corporate gathering in the tranquility of Hatimi Retreats. Our unique setting seamlessly blends business with the serenity of nature, fostering collaboration and innovation amidst the calming embrace of the woods. Host your conference in our tranquil environment, where the fresh aroma of pine trees and the peaceful sounds of chirping birds provide a natural backdrop for productive and inspiring meetings. Our versatile meeting spaces are equipped with all the necessary amenities, while our team can cater to your specific needs, ensuring a successful and memorable corporate event.",
      imageUrls: [
        "assets/booking_house.png", // Replace with your image URLs
        "assets/booking_house.png",
        // Add more image URLs as needed for the carousel of Service 1
      ],
    },
    {
      id: 2,
      heading:
        "HOST A WEDDING Hatimi Retreats: The place of Fairytale Weddings",
      description:
        'Celebrate an elegant and cost-effective destination wedding at Hatimi Retreats, where our team guarantees a smooth and spectacular experience. Imagine the warmth of our team and the grandeur of our rooms welcoming your guests. Envision the glory and tranquility of nature for your dream wedding with a venue that can hold up to 1000 people, a lovely greenery setting, and customized services for décor, entertainment, and cuisine. At Hatimi Retreats, say "I do" to a perfect fusion of elegance and affordability. has context menu',
      imageUrls: [
        "assets/booking_house.png", // Replace with your image URLs
        "assets/booking_house.png",
        // Add more image URLs as needed for the carousel of Service 2
      ],
    },
    // Add more service objects as needed
  ];

  return (
    <>
      <div className="container my-5 pb-5 ">
        {servicesData.map((service) => (
          <div key={service.id} className="row text-white my-5 gap-3">
            <div className="col-md-6">
              <div className="services-content">
                <div className="d-flex justify-content-start align-items-start mt-4">
                  <img
                    src="assets/bg/line.svg"
                    className="linehome mx-3  pt-3"
                    alt="image"
                  />
                  <h3 className="text-gold">{service.heading}</h3>
                </div>

                <p className="fs-7 services-description mobileresponsive ">
                  {service.description}
                </p>
              </div>
            </div>
            <div className="col-md-5  ">
              <Carousel className="">
                {service.imageUrls.map((imageUrl, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100 rounded"
                      src={imageUrl}
                      alt={`Service ${service.id} - Image ${index}`}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>
        ))}
      </div>
      <div className=" container-fluid my-5">
        <div className="container">
          <Instagramfeed />
        </div>
      </div>

      <div className="my-5">
        <Testimonials />
      </div>
    </>
  );
};

export default Services;
