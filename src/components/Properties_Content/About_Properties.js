import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

const About_Properties = () => {
  const aboutContent = {
    heading: 'Matheran',
    description: 'Lorem Ipsum to po prostu fikcyjny tekst branży drukarskiej i składu. Lorem Ipsum jest standardowym. LoremIpsum to po prostu fikcyjny tekst branży drukarskiej i składu. Lorem Ipsum jest standardowym Lorem Ipsum to po prostu fikcyjny tekst branży drukarskiej i składu. Lorem Ipsum jest standardowym. Lorem Ipsum to po prostufikcyjny tekst branży drukarskiej i składu. Lorem Ipsum jest standardowymLorem Ipsum to po prostu fikcyjny tekst branży drukarskiej i składu. Lorem Ipsum jest standardowym. Lorem Ipsum to po prostu fikcyjny tekstbranży drukarskiej i składu. Lorem Ipsum jest standardowym  ',
    buttonText: 'Learn More',
    images: [
      { id: 1, src: 'assets/tour1.png', alt: 'Image 1' },
      { id: 2, src: 'assets/property2.png', alt: 'Image 2' },
      { id: 3, src: 'assets/property3.png', alt: 'Image 3' },
    ],
  };

  return (
    <div className="container mt-5 pt-5 text-white">
      <div className="row ">
        <div className="col-md-6 ">
          
            
          <div className="d-flex  justify-content-start align-items-center my-3">
      <img src="assets/bg/line.svg" className="linehome px-3" alt="image" />
      <h2 className="fs-special ">About {aboutContent.heading}</h2>
    
    </div>
            <div className='mx-5 ps-5  mobileresponsive'>
            <p className='py-3 mb-3'>{aboutContent.description}</p>
            <button className="eg-btn btn btn-searchbar ">
                      <NavLink className="nav-link" to="/bookings">
                        View Rooms { " "} <FaArrowRightLong className="ps-2 fs-4" />
                      </NavLink>
                    </button>
          
            </div>
            
        </div>
        <div className="col-md-5 ">
          <div className="row">
            <div className="col-md-12 mb-3">
              <img src={aboutContent.images[0].src} alt={aboutContent.images[0].alt} className="d-block w-100 rounded " />
            </div>
            <div className="col-md-6">
              <div className="card bg-transparent">
                <img src={aboutContent.images[1].src} alt={aboutContent.images[1].alt} className="card-img-top" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="card bg-transparent">
                <img src={aboutContent.images[2].src} alt={aboutContent.images[2].alt} className="card-img-top" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_Properties;
