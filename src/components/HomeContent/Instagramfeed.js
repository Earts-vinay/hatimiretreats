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
      <div className="insta text-white">
        <FaInstagram className="fs-2" /> {/* Instagram Icon */}
        <h2>Instagram Feed</h2>
      </div>
      <div className="instafeed row my-5">
        {cardData.map((card, index) => (
          <div key={index} className=" w-25 gap-2" style={{ height: "20rem" }}>
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
