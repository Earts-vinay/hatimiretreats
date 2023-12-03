import React from 'react';

const Destinations = () => {

  // Sample array of objects containing card information
 
  const cardData = [
    {
      title: "Matheran",
      description:
        "Lorem Ipsum to po prostu fikcyjny tekst branży drukarskiej i składu. Lorem Ipsum jest standardowym ",
      imageUrl: "assets/tour1.png", // Replace with actual image URL
    },
    {
      title: "Lonavala",
      description:
        "Lorem Ipsum to po prostu fikcyjny tekst branży drukarskiej i składu. Lorem Ipsum jest standardowym ",
      imageUrl: "assets/tour2.png", // Replace with actual image URL
    },
    {
      title: "Panchgani",
      description:
        "Lorem Ipsum to po prostu fikcyjny tekst branży drukarskiej i składu. Lorem Ipsum jest standardowym ",
      imageUrl: "assets/tour3.png", // Replace with actual image URL
    },
    {
      title: "Mount Abu",
      description:
        "Lorem Ipsum to po prostu fikcyjny tekst branży drukarskiej i składu. Lorem Ipsum jest standardowym ",
      imageUrl: "assets/tour2.png", // Replace with actual image URL
    },
    {
      title: "Dummas",
      description:
        "Lorem Ipsum to po prostu fikcyjny tekst branży drukarskiej i składu. Lorem Ipsum jest standardowym ",
      imageUrl: "assets/tour1.png", // Replace with actual image URL
    },
    // Add more card objects as needed
  ];
  return (
    <>
    <div className="container-fluid w-100">
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
        <div className="destination d-flex flex-wrap ">
        {cardData.map((card, index) => (
            <div key={index} className="item">
              <div className="row px-3 ">
                <div className="tourcard bgcard">
                  <img
                    className="tourimage "
                    src={card.imageUrl}
                    alt="Card"
                    
                  />
                  <div className="card-body my-4">
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
        </div>
         
      </div>
      </div>
    </div>
    </>
  );
};

export default Destinations;
