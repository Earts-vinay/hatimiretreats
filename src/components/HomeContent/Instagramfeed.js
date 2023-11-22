import React from "react";
import { FaInstagram } from 'react-icons/fa';

const Instagramfeed = () => {
  const cardData = [
    {
      imgSrc: "assets/in1.png",
    },
    {
      imgSrc: "assets/in2.png",
    },
    {
      imgSrc: "assets/in4.png",
    },
    {
      imgSrc: "assets/in6.png",
    },
  ];
  return (
    <div className="container">
      <div className="insta text-white  align-items-center">
        <FaInstagram className="fs-2 me-2" /> {/* Instagram Icon */}
        <h1>Instagram Feed</h1>
      </div>
      <div className="instafeed row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 my-5">
        {cardData.map((card, index) => (
          <div key={index} className="col">
            <img
              className="rounded img-fluid h-100"
              src={card.imgSrc}
              alt={`Instagram post ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instagramfeed;
