import React from 'react';
import Instagramfeed from './HomeContent/Instagramfeed'
const Destinations = () => {

  // Sample array of objects containing card information
 
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
        "Swap your daily office-home routine for a scenic journey to Hatimi Retreats in Dumas. Located amidst women's favorite shopping destinations, textile industries, & renowned jewelry markets in Surat.Hatimi Retreats stands out as a unique choice. ",
      imageUrl: "assets/tour5.png", // Replace with actual image URL
    },
    // Add more card objects as needed
  ];
  return (
    <>
    <div className="container-fluid w-100 m-0">
      {/* Text on Image */}
      <div className="row properties_banner h-100vh ">
      
        {/* Heading and Description */}
        <div className="container text-white">
          <div className="row">
            <div className=" d-flex justify-content-center align-items-center">
            
              <h2 className="display-4 ">
              Find Your Desire Destination
              </h2>
              
            </div>
         
        </div>
      </div>
      </div>

      {/* Cards */}
      <div className='container'>
      <div className="row mt-5  ">
        <div className="destination d-flex flex-wrap mx-5 px-5 mobileresponsive">
        {cardData.map((card, index) => (
            <div key={index} className="item">
              <div className="row px-3 ">
                <div className="destination_card bgcard d-flex align-items-center flex-column justify-content-center ">
                  <img
                    className="tourimage "
                    src={card.imageUrl}
                    alt="Card"
                    
                  />
                  <div className="card-body my-4 destination_card_body">
                    <h2 className="card-title text-gold">{card.title}</h2>
                    <p className="fs-7 mt-2">{card.description}</p>
                    <a href="#" className="btn eg-btn btn mt-3">
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
         
      </div>
      </div>
     
    </div>
    <div className='my-5'>
    <Instagramfeed/>
    </div>
    
    </>
  );
};

export default Destinations;
