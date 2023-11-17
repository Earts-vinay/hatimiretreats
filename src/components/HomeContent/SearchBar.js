import React, { useState } from "react";
import Select from "react-select";


function SearchBar({ buttonName = "Find More" }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [destination, setDestination] = useState(null);

  const destinationOptions = [
    { value: "USA", label: "USA" },
    { value: "Egypt", label: "Egypt" },
    { value: "Bali", label: "Bali" },
    { value: "South Africa", label: "South Africa" },
    { value: "Turkey", label: "Turkey" },
  
  ];

  const roomOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
  ];

  const guestOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
  ];

  const handleDestinationChange = (selectedOption) => {
    setDestination(selectedOption);
  };

  const handleRoomChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <div className="searchbar-section">
      <div className="container">
        <div className="multi-main-search">
          <div className="row align-items-center g-4">
            {/* Destination */}
            <div className="col-lg-3 col-md-3">
              <div className="search-box-single destination-box">
               
                <div className="searchbox-input">
                  <Select
                    value={destination}
                    onChange={handleDestinationChange}
                    options={destinationOptions}
                    placeholder="Search Destination "
                  />
                </div>
              </div>
            </div>
            
            {/* Other Inputs */}
            {/* You can add Bootstrap form elements like input fields and selects here */}
            
            {/* Room */}
            <div className="col-lg-3 col-md-3">
              <div className="search-box-single">
                <div className="searchbox-input">
                  <Select
                    value={selectedOption}
                    onChange={handleRoomChange}
                    options={roomOptions}
                    placeholder="Room"
                  />
                </div>
              </div>
            </div>
            
            {/* Guest */}
            <div className="col-lg-3 col-md-3">
              <div className="search-box-single">
                <div className="searchbox-input">
                  <Select
                    value={selectedOption}
                    onChange={handleRoomChange}
                    options={guestOptions}
                    placeholder="Guest"
                  />
                </div>
              </div>
            </div>
            
            {/* Submit Button */}
            <div className="col-lg-3 d-flex justify-content-end">
              <div className="main-form-submit w-100">
                <button
                  type="submit"
                  className="eg-btn btn btn-primary  w-100"
                >
                  {buttonName}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
