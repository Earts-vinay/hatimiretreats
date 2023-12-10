import React from 'react';
import Event_Searchbar from './Event_Content/Event_Searchbar';

const Events = () => {
  const EventData = [
    {
      id: 1,
      heading:
        "PLAN A MEETING ",
      tagline:"Hatimi Retreats: Your Ideal Corporate Meeting Venue",  
      description:
        "Escape the boring conventional boardrooms and immerse your corporate gathering in the tranquility of Hatimi Retreats. Our unique setting seamlessly blends business with the serenity of nature, fostering collaboration and innovation amidst the calming embrace of the woods.  ",
      imageUrls: "assets/event1.png",
    },
    {
      id: 2,
      heading:
        "HOST A WEDDING ",
        tagline:" Hatimi Retreats: The place of Fairytale Weddings", 
      description:
        'Celebrate an elegant and cost-effective destination wedding at Hatimi Retreats, where our team guarantees a smooth and spectacular experience. Imagine the warmth of our team and the grandeur of our rooms welcoming your guests. ',
      imageUrls: "assets/event2.png",
    },
    {
      id: 3,
      heading:
        "PLAN AN EVENT",
        tagline:"Cherish Memorable Events at Hatimi Retreats. ", 
      description:
        'Hatimi Retreats offers budget-friendly packages, luxurious accommodations, and an appealing environment. Our vast rooms cater to intimate gatherings and larger celebrations, while our multi-purpose function hall is perfect for grand events.  ',
      imageUrls: "assets/event3.png",
    },
    // Add more service objects as needed
  ];

  return (
    <div className="container-fluid">
      {/* Text on Image */}
      <div className="row properties_banner h-100vh">
        {/* Heading and Description */}
        <div className="container text-white">
          <div className="row">
            <div className="d-flex justify-content-center align-items-end">
              <h2 className="display-4">Explore Venues</h2>
            </div>
          </div>
        </div>
      </div>
<div>
  <Event_Searchbar/>
  </div>
      {/* Cards */}
      <div className="container my-5 pb-5 ">
        {EventData.map((service) => (
          <div key={service.id} className="row text-white my-5 py-5 gap-3">
            {(service.id % 2 === 1) ? (
              <>
                <div className="col-md-6">
                  <div className="services-content">
                    <div className="d-flex justify-content-start align-items-start mt-4">
                      <img
                        src="assets/bg/line.svg"
                        className="linehome mx-3 pt-4"
                        alt="image"
                      />
                      <h2 className="text-gold fs-1">{service.heading}</h2>
                    </div>
                    <p className="fs-6 services-description mobileresponsive mb-2">{service.tagline}</p>
                    <p className="fs-6 services-description mobileresponsive">
                      {service.description}
                    </p>
                    <div className='services-description mobileresponsive'>
                    <a href="#" className="btn eg-btn btn mt-3 ">
                      View More
                    </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <img
                    className="d-block w-100 rounded px-5"
                    src={service.imageUrls}
                    alt={`Service ${service.id} - Image`}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="col-md-5">
                  <img
                    className="d-block w-100 rounded mx-5 px-5"
                    src={service.imageUrls}
                    alt={`Service ${service.id} - Image`}
                  />
                </div>
                <div className="col-md-6">
                  <div className="services-content">
                    <div className="d-flex justify-content-start align-items-start mt-4">
                     
                      <h2 className="text-gold fs-1 px-3">{service.heading}</h2>
                      <img
                        src="assets/bg/line.svg"
                        className="linehome  pt-4"
                        alt="image"
                      />
                    </div>
                    <p className="fs-6 services-description m-0 px-3 mobileresponsive mb-2">{service.tagline}</p>
                    <p className="fs-6 services-description m-0 px-3 mobileresponsive">
                      {service.description}
                    </p>
                    <div className='services-description m-0 px-3 mobileresponsive'>
                    <a href="#" className="btn eg-btn btn mt-3 ">
                      View More
                    </a>
                    </div>
                  </div>

                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
