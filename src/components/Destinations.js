import React from 'react';

const Destinations = () => {

  // Sample array of objects containing card information
 
  const cardsData = [
    {
      title: "Matheran",
      description:
        "Lorem Ipsum to po prostu fikcyjny tekst branży drukarskiej i składu. Lorem Ipsum jest standardowym ",
      imageUrl: "assets/booking_house.png", // Replace with actual image URL
    },
    {
      title: "Lonavala",
      description:
        "Lorem Ipsum to po prostu fikcyjny tekst branży drukarskiej i składu. Lorem Ipsum jest standardowym ",
      imageUrl: "assets/booking_house.png", // Replace with actual image URL
    },
    {
      title: "Panchgani",
      description:
        "Lorem Ipsum to po prostu fikcyjny tekst branży drukarskiej i składu. Lorem Ipsum jest standardowym ",
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
  return (
    <>
    <div className="container-fluid">
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
        {cardsData.map((card) => (
          <div key={card.id} className="col-md-4 mb-4">
            <div className="card text-white bg-transparent">
              <img src={card.imageUrl} className="card-img-top" alt={`Card ${card.id}`} />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.description}</p>
                <a href="#" className="btn btn-searchbar">
                  View More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
    </>
  );
};

export default Destinations;
