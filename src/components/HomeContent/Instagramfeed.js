import React from "react";
import { FaInstagram } from "react-icons/fa";

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
    <>
     
      <div className="container">
        <div className="insta text-white  align-items-center">
          <div className="px-5 mobileresponsive"><FaInstagram className="fs-1 mx-5 mobileresponsive " /> {/* Instagram Icon */}</div>
          
          <div className='d-flex justify-content-start align-items-start '>
        <img src="assets/bg/line.svg" className="linehome mx-3 mt-4 pt-3" alt="image" />
        <h1>Instagram Feed</h1>
        </div>
          
        </div>
        <div className="instafeed row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 px-5 mx-5 py-3 mobileresponsive">
          {cardData.map((card, index) => (
            <div key={index} className="col">
              <img
                className="rounded img-fluid instafeedcard"
                src={card.imgSrc}
                alt={`Instagram post ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Instagramfeed;
