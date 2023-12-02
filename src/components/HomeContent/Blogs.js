import React from "react";

const Blogs = () => {
  const cardData = [
    {
      imgSrc: "assets/blog2111.png",
      altText: "Image 1",
      cardText: "Escape to Serenity",
    },
    {
      imgSrc: "assets/blog1f.png",
      altText: "Image 2",
      cardText: "Hatimi Retreats Guide",
    },
    {
      imgSrc: "assets/blog2111.png",
      altText: "Image 3",
      cardText: "Escape to Serenity",
    },
    {
      imgSrc: "assets/blog1f.png",
      altText: "Image 4",
      cardText: "Escape to Serenity",
    },
  ];

  return (
    <div className="container my-5">
      <div className="blogs text-white">
        <span>BLOGS</span>
        <h1>Our Travel Stories </h1>
        <div className="blog_card justify-content-center row my-5">
          {cardData.map((card, index) => (
            <div key={index} className=" homeblogcard bgcard gap-3" >
              <img
                className=" homeblogimage"
                src={card.imgSrc}
                alt={card.altText}
              />
              <div className="card-body">
                <h3 className="text-center mt-3">{card.cardText}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
