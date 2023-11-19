import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom'; // Import Link component

const Footer = () => {
  return (
    <footer>
      <div className="footer text-white ">
        <MDBFooter bgColor='#071011' className='text-center text-white text-lg-start text-muted '>
          {/* Your footer content */}
          <section className=''>
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
                    amet, consectetur adipisicing elit.
                  </p>
                </MDBCol>

                {/* Column for Products */}
                <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4 text-white'>
                  
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
                <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4 text-white'>
                  <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                  <p>
                    <Link to='/pricing' className='footerlist'>
                      Pricing
                    </Link>
                  </p>
                  <p>
                    <Link to='/settings' className='footerlist'>
                      Settings
                    </Link>
                  </p>
                  {/* Add similar Links for other useful links */}
                </MDBCol>

                {/* Column for Contact */}
                <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4 text-white'>
                  <h6 className='text-uppercase fw-bold mb-4'>Get in Touch</h6>
                  <p>
                    <MDBIcon color='secondary' icon='home' className='me-2' />
                    New York, NY 10012, US
                  </p>
                  <p>
                    <MDBIcon color='secondary' icon='envelope' className='me-3' />
                    info@example.com
                  </p>
                  <p>
                    <MDBIcon color='secondary' icon='phone' className='me-3' /> +48 500 231 568
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>

          {/* Bottom section of the footer */}
          <div className='text-center p-4 text-white' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
            © 2023 Copyright:
            <Link to='' className='footerlist fw-bold'>
              hatimiretreats
            </Link>
          </div>
        </MDBFooter>
      </div>
    </footer>
  );
};

export default Footer;
