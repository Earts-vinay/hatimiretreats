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
      cardText: "Escape to Serenity",
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
        <h2>Our Travel Stories</h2>
        <div className="blog_card justify-content-center row my-5">
          {cardData.map((card, index) => (
            <div key={index} className="card bgcard gap-2" style={{ width: "20rem" }}>
              <img
                className="card-img-top h-100"
                src={card.imgSrc}
                alt={card.altText}
              />
              <div className="card-body">
                <p className="card-text">{card.cardText}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
