import React from 'react';
import { Carousel } from 'react-bootstrap';
import Instagramfeed from './HomeContent/Instagramfeed';
import Testimonials from './HomeContent/Testimonials';

const Services = () => {
  // Sample array of objects containing service information
  const servicesData = [
    {
      id: 1,
      heading: 'Experience the never-before trip at our Retreats',
      description: 'Step into our Villas, where we set a new standard for excellence. Immerse yourself in unforgettable moments,enveloped in comfort and tranquility. We offer outstanding amenities, exceptional service, and scenic destinations, turning your ideal vacation into a reality.',
      imageUrls: [
        'assets/booking_house.png', // Replace with your image URLs
        'assets/booking_house.png',
        // Add more image URLs as needed for the carousel of Service 1
      ],
    },
    {
      id: 2,
      heading: 'Experience the never-before trip at our Retreats',
      description: 'Step into our Villas, where we set a new standard for excellence. Immerse yourself in unforgettable moments,enveloped in comfort and tranquility. We offer outstanding amenities, exceptional service, and scenic destinations, turning your ideal vacation into a reality.',
      imageUrls: [
        'assets/booking_house.png', // Replace with your image URLs
        'assets/booking_house.png',
        // Add more image URLs as needed for the carousel of Service 2
      ],
    },
    // Add more service objects as needed
  ];

  return (
    <>
    <div className="container my-5 pb-5">
      {servicesData.map((service) => (
        <div key={service.id} className="row text-white my-4">
          <div className="col-md-6">
            <div className="services-content">
              <h1>{service.heading}</h1>
              <p>{service.description}</p>
            </div>
          </div>
          <div className="col-md-6">
            <Carousel>
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
    <div className=' container-fluid my-5'>
        <div className='d-flex justify-content-start align-items-center line'>
        <img src="assets/bg/line.svg" className="img-fluid" alt="image" />
        </div>
    
    <div className='container'>
    <Instagramfeed/>
    </div>
       
       </div>

       <div className='my-5'>
        <Testimonials/>
       </div>
    </>
  );
};

export default Services;
