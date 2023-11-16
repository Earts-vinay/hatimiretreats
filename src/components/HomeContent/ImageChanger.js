import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const ImageChanger = () => {
  const [selectedImage, setSelectedImage] = useState('');

  const changeImage = (image) => {
    setSelectedImage(image);
  };

  return (
   
      <div className="row">
         <div className="row p-0">
        {selectedImage && (
          <div className="p-0">
            <img src={selectedImage} alt="Selected" className="w-100 h-100vh" />
          </div>
        )}
        {/* Content area to display the selected image */}
      </div>
        <div className="p-0">
          <Button onClick={() => changeImage('assets/banner1.png')}>
            Image 1
          </Button>
          <Button onClick={() => changeImage('assets/banner2.jpg')}>
            Image 2
          </Button>
          <Button onClick={() => changeImage('url_to_image_3')}>
            Image 3
          </Button>
          <Button onClick={() => changeImage('url_to_image_4')}>
            Image 4
          </Button>
          <Button onClick={() => changeImage('url_to_image_5')}>
            Image 5
          </Button>
        </div>
      </div>
     
   
  );
};

export default ImageChanger;
