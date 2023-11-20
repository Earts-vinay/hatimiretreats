import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBContainer,
  MDBIcon,
} from "mdb-react-ui-kit";
import "../../App.css";

const Testimonials = () => {
  const testimonials = [
    {
      author: "Mohammed Shabbir Modi",
      designation: "Hatimi Retreats, Matheran",
      quote:
        "As a traveller in the community, I am confident in saying Hatimi Retreats has created a very homely experience for us this trip around. The space, the property and the experience from a place that is so understanding to the needs of the community and providing a smooth and satisfactory family experience of the same.",
    },
    {
      author: "Modi",
      designation: "Hatimi, Matheran",
      quote:
        " I am confident in saying Hatimi Retreats has created a very homely experience for us this trip around. The space, the property and the experience from a place that is so understanding to the needs of the community and providing a smooth and satisfactory family experience of the same.",
    },
    // Add more testimonials here if needed
  ];

  return (
    <div className="background-container my-5">
      <div className="bg-image d-flex align-items-center">
        <div className="container text-white">
          <div className="row">
            <div className="col">
              <span>TESTIMONIALS & REVIEWS</span>
              <h2 className="display-4">Our Travel Stories</h2>
              <div className="carousel w-75">
                <MDBContainer className="">
                  <MDBCarousel className="text-white w-100">
                 
                      {testimonials.map((testimonial, index) => (
                        <MDBCarouselItem key={index} active={index === 0}>
                          <div className="testi-author d-flex gap-3 mt-4 ">
                            {/* Assuming you have an image for each testimonial */}
                            <div className="image">
                              <img
                                src={`assets/profile.png`}
                                style={{ width: 50 }}
                                
                                alt="image"
                              />
                            </div>
                            <div className="author-text text-white w-100">
                              <h5>{testimonial.author}</h5>
                              <p className="fs-6 text-white">
                                {testimonial.designation}
                              </p>
                            </div>
                          </div>
                          <p>{testimonial.quote}</p>
                        </MDBCarouselItem>
                      ))}
                   
                  </MDBCarousel>
                </MDBContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
