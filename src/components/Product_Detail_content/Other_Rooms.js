import React from 'react'

const Other_Rooms = () => {
    const cardData = [
        {
          title: "Oud Executive Suite",
          description: "Zainee Baug ",
          imageUrl: "assets/booking_house.png", // Replace with actual image URL
        },
        {
          title: "Oud Executive Suite",
          description: "Zainee Baug ",
          imageUrl: "assets/booking_house.png", // Replace with actual image URL
        },
        {
          title: "Oud Executive Suite",
          description: "Zainee Baug ",
          imageUrl: "assets/booking_house.png", // Replace with actual image URL
        },
        {
          title: "Oud Executive Suite",
          description: "Zainee Baug ",
          imageUrl: "assets/booking_house.png", // Replace with actual image URL
        },
      ];
      
  return (
    <section>
      <div>
      <h1 className="text-white">Other Rooms</h1>
      </div>
    
    <div className="row d-flex flex-nowrap overflow-auto">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="col-lg-3 col-md-4 col-sm-6 col-12 p-3 my-4 gap-3"
        >
          <div className="card otherrooms gap-3">
            <img
              className="card-img-top"
              src={card.imageUrl}
              alt="Card"
              // Set the height to 250px for mobile view
            />
            <div className="card-body">
              <h3 className="card-title text-gold">{card.title}</h3>
              <p className="card-text">{card.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
  )
}

export default Other_Rooms