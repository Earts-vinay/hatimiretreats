import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
const Topimages = () => {
     // Example array of image objects with URLs and names
  const images = [
    { url: "assets/booking_house.png" },
    { url: "assets/booking_house.png" },
    { url: "assets/booking_house.png" },
    { url: "assets/booking_house.png" },
    { url: "assets/booking_house.png" },
  ];

  return (
    <div className="row">
        <div className="pt-5 pb-2">
          <h2 className="text-gold">Room Name/type</h2>
          <p className="text-white d-flex align-items-center ">
            <p className="m-0"> Matheran</p>{" "}
            <p className="px-2 d-flex align-items-center m-0">
              {<FaLocationDot />} Matheran
            </p>
          </p>
        </div>
        <div className="col-md-6">
          {/* Left side - One Image */}

          <div>
            <img
              src={images[0].url}
              alt="Main Product"
              className="img-fluid rounded"
            />
          </div>
        </div>
        <div className="col-md-6">
          {/* Right side - Four Images */}
          <div className="row ">
            {images.slice(1, 5).map((image, index) => (
              <div key={index} className="col-sm-6 mb-3 ">
                <img src={image.url} className="img-fluid rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default Topimages