import React from "react";
import "../../App.css";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
const Testimonials = () => {
  const testimonials = [
    {
      author: "Mohammed Shabbir Modi",
      designation: "Hatimi Retreats, Matheran",
      quote:
        "As a traveller in the community, I am confident in saying Hatimi Retreats has created a very homely experience for us this trip around. The space, the property and the experience from a place that is so understanding to the needs of the community and providing a smooth .",
    },
    {
      author: "Modi",
      designation: "Hatimi, Matheran",
      quote:
        " I am confident in saying Hatimi Retreats has created a very homely experience for us this trip around. The space, the property and the experience from a place that is so understanding to the needs of the community and providing a smooth and satisfactory family experience of the same.",
    },
    {
      author: "Ravi",
      designation: "Hatimi, Matheran",
      quote:
        " I am confident in saying Hatimi Retreats has created a very homely experience for us this trip around. The space, the property and the experience from a place that is so understanding to the needs of the community and providing a smooth and satisfactory family experience of the same.",
    },
    {
      author: "Ramu",
      designation: "Hatimi, Matheran",
      quote:
        " I am confident in saying Hatimi Retreats has created a very homely experience for us this trip around. The space, the property and the experience from a place that is so understanding to the needs of the community and providing a smooth and satisfactory family experience of the same.",
    },
    // Add more testimonials here if needed
  ];

  const testimonialsChunks = testimonials.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 2);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);

  return (
    <div className="background-container my-5">
      <div className="bg-image d-flex align-items-center py-5">
        <div className="container text-white">
          <div className="row">
            <div className="col">
              <span className=" px-5 textimonialspan mobileparagraph">TESTIMONIALS & REVIEWS</span>
              <div className='d-flex justify-content-start align-items-start '>
        <img src="assets/bg/line.svg" className="linehome mx-3 mt-4 pt-3" alt="image" />
        <h1 className="display-4">Our Travel Stories</h1>
        </div>
              
              <div className="carousel w-100 ">
                <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                  <div className="carousel-inner px-5 mx-5 mobileparagraph">
                    {testimonialsChunks.map((chunk, index) => (
                      <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        <div className="row px-5">
                          {chunk.map((testimonial, innerIndex) => (
                            <div key={innerIndex} className="col-md-6">
                              <div className="testi-author d-flex gap-3 mt-4 ">
                                <div className="image">
                                  {/* Replace 'assets/profile.png' with your image URL */}
                                  <img src={`assets/profile.png`} style={{ width: 50 }} alt="image" />
                                </div>
                                <div className="author-text text-white w-100">
                                  <p className="m-0">{testimonial.author}</p>
                                  <p className="testimonial_description text-white m-0">{testimonial.designation}</p>
                                </div>
                              </div>
                              <p className="my-3 textimonialdesc">{testimonial.quote}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                    <FiChevronLeft className="fs-1"/>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                    <FiChevronRight className="fs-1"/>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
