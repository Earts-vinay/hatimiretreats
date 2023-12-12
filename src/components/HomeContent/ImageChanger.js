import React, { useState } from 'react';
import '../../App.css';

const ImageChanger = () => {
  const [selectedImage, setSelectedImage] = useState('assets/banner3.png'); // Set default image
  const [activeLink, setActiveLink] = useState('Matheran'); // Default active link

  const changeImage = (image, linkText) => {
    setSelectedImage(image);
    setActiveLink(linkText);
  };

  const linkStyle = (linkText) => {
    return {
      color: activeLink === linkText ? '#B69B6C' : '', // Set the active link color
      borderBottom: activeLink === linkText ? '4px solid #B69B6C' : 'none', // Set bottom border for active link
    };
  };

  return (
    <div className="">
      <div className=" p-0">
        {selectedImage && (
          <div className="p-0">
            <img loading="lazy" src={selectedImage} alt="Selected" className="w-100 h-100" />
          </div>
        )}
        {/* Content area to display the selected image */}
      </div>
      <div className="p-0 imagelist">
        <ul className="list-none gap-5 d-flex">
          <li className="nav-item">
            <a
              href="#"
              onClick={() => changeImage('assets/banner3.png', 'Matheran')}
              className="nav-link imagenavlist"
              style={linkStyle('Matheran')}
            >
              Matheran
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              onClick={() => changeImage('assets/banner1.png', 'Lonavala')}
              className="nav-link imagenavlist"
              style={linkStyle('Lonavala')}
            >
              Lonavala
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              onClick={() => changeImage('assets/banner1.png', 'Panchgani')}
              className="nav-link imagenavlist"
              style={linkStyle('Panchgani')}
            >
              Panchgani
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              onClick={() => changeImage('assets/banner3.png', 'Mount Abu')}
              className="nav-link imagenavlist"
              style={linkStyle('Mount Abu')}
            >
              Mount Abu
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              onClick={() => changeImage('assets/banner1.png', 'Dummas')}
              className="nav-link imagenavlist"
              style={linkStyle('Dummas')}
            >
              Dummas
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ImageChanger;
