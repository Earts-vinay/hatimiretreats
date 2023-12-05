import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom'; // Import Link component
import { FaFacebook, FaInstagram,FaArrowRight  } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='mt-5 navbarsize'>
      <div className="footer text-white ">
        <MDBFooter bgColor='#071011' className='text-center text-white text-lg-start text-muted '>
          {/* Your footer content */}
          <section className='d-inline'>
            <MDBContainer className='text-center text-md-start mt-5'>
              {/* Rest of your footer content */}
              <MDBRow className='mt-3'>
                {/* Column for Company name and logo */}
                <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4 text-white'>
                  <h6 className='text-uppercase fw-bold mb-4'>
                    <MDBIcon color='secondary' icon='gem' className='me-3' />
                    <img src="assets/hatimigold.svg" className="img-fluid h-25 w-25" alt="image" />
                  </h6>
                  <p>
                    Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                    amet,
                  </p>
                </MDBCol>

                {/* Column for Products */}
                <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4 text-white d-flex flex-column gap-3 mt-2 '>
                  
                  <p className='footerlist'>
                    <Link to='/about' className='footerlist'>
                      About
                    </Link>
                  </p>
                  <p>
                    <Link to='/' className='footerlist'>
                      Home
                    </Link>
                  </p>
                  <p>
                    <Link to='/destination' className='footerlist'>
                      Destination
                    </Link>
                  </p>
                  <p>
                    <Link to='/react' className='footerlist'>
                      Properties
                    </Link>
                  </p>
                  <p>
                    <Link to='/contact' className='footerlist'>
                      Contact Us
                    </Link>
                  </p>
                  
                </MDBCol>

                {/* Column for Useful links */}
                <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4 text-white d-flex flex-column gap-3 mt-2'>
                 
                  <p>
                    <Link to='/pricing' className='footerlist'>
                    Resources
                    </Link>
                  </p>
                  <p>
                    <Link to='/settings' className='footerlist'>
                      Press Room
                    </Link>
                  </p>
                  <p>
                    <Link to='/settings' className='footerlist'>
                      New Openings
                    </Link>
                  </p>
                  <p>
                    <Link to='/settings' className='footerlist'>
                    Brochure
                    </Link>
                  </p>
                  <p>
                    <Link to='/settings' className='footerlist'>
                    Brand Bible
                    </Link>
                  </p>
                  {/* Add similar Links for other useful links */}
                </MDBCol>

                {/* Column for Contact */}
                <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4 text-white d-flex flex-column gap-3 mt-2'>
                  <h6 className='text-uppercase fw-bold '>Get in Touch</h6>
                  <p className='d-flex social_icons_footer'>
            <FaFacebook className='fs-4 me-4' style={{ color: 'white' }} />
            <FaInstagram className='fs-4' style={{ color: 'white' }} />
          </p>
                  <p>
                    <MDBIcon color='secondary' icon='phone' className='me-3' /> +48 500 231 568
                  </p>
                  <p>
                    <MDBIcon color='secondary' icon='envelope' className='me-3' />
                    Info@hatimiretreats.com
                  </p>

                  <form >
            <div className='input-group mb-3 newsletter'>
              <input type='email' className='form-newsletter text-secondary' placeholder='Your Email' aria-label='Your Email' aria-describedby='button-addon2' />
              <button className='btn btn-newsletter ' type='button' id='button-addon2'>
                <FaArrowRight className=' text-white text-center' /> {/* Right Arrow Icon */}
              </button>
            </div>
          </form>
                  
                </MDBCol>
              </MDBRow>
            </MDBContainer>

              {/* Bottom section of the footer */}
          <div className='text-center p-4 text-white d-flex-inline' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          <p>
               @ 2023{" "} | Privacy Policy | all rights reserved {" "} 
                <a href="#" className="egns-lab">
                   @ Hatimi Retreats {" "}
                </a>{" "}
                {" "}  | Design By{" "}
                <a
                  href="https://themeforest.net/category/site-templates?term=egenslab"
                  className="egns-lab"
                >
                  Entitledarts
                </a>
              </p>
          </div>
          </section>

        
        </MDBFooter>
      </div>
    </footer>
  );
};

export default Footer;
