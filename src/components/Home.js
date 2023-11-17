import React, { useState } from "react";
import "../App.css";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt, FaHome } from "react-icons/fa";
import ImageChanger from "./HomeContent/ImageChanger";

const Home = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [destination, setDestination] = useState(null);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const destinationOptions = [
    { value: "Matheran", label: "Matheran" },
    { value: "Lonavala", label: "Lonavala" },
    { value: "Panchgani", label: "Panchgani" },
    { value: "Mount Abu", label: "Mount Abu" },
    { value: "Dummas", label: "Dummas" },
  ];

  const roomOptions = [
    { value: "1 Room", label: "1 Room" },
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
    <>
      <div className="banner">
        <div className="home-background ">
          <div>
            <ImageChanger />
          </div>

          <div>
            <div className="searchbar-section  p-3">
              <div className="container">
                <div className="multi-main-search searchbarborder p-5">
                  <div className="row d-flex justify-content-between align-items-center">
                    {/* Destination */}
                    <div className="col-lg-3 col-md-3">
                      <div className="search-box-single destination-box">
                        <div className="searchbox-input">
                          <Select
                            value={destination}
                            onChange={handleDestinationChange}
                            options={destinationOptions}
                            placeholder="Search Destination"
                            styles={{
                              control: (provided) => ({
                                ...provided,
                                backgroundColor: 'none', // Change background color here
                                border: 'none', // Remove the border
                              }),
                            }}
                          />
                        </div>
                      </div>
                    </div>

                   {/* Check-in Date */}
                   <div className="col-lg-2 col-md-3">
                      <div className="search-box-single d-flex align-items-center fs-4 gap-2">
                        <DatePicker
                          selected={checkInDate}
                          onChange={(date) => setCheckInDate(date)}
                          selectsStart
                          startDate={checkInDate}
                          endDate={checkOutDate}
                          placeholderText="Check-in Date"
                          className="form-control date-picker custom-date-picker"
                          wrapperClassName="date-picker-wrapper"
                          customInput={                           
                              <input
                                style={{ backgroundColor: "#071011", border: "none",   }}
                                placeholder="Check-in Date"
                                className="form-control"
                              />
                          }
                         
                        />
                         <FaCalendarAlt className="calendar-icon" />
                      </div>
                    </div>

                    {/* Check-out Date */}
                    <div className="col-lg-2 col-md-3">
                      <div className="search-box-single d-flex align-items-center fs-4 gap-2">
                        <DatePicker
                          selected={checkOutDate}
                          onChange={(date) => setCheckOutDate(date)}
                          selectsEnd
                          startDate={checkInDate}
                          endDate={checkOutDate}
                          minDate={checkInDate}
                          placeholderText="Check-out Date"
                          
                          className="form-control date-picker custom-date-picker"
                          wrapperClassName="date-picker-wrapper"
                          customInput={                           
                              <input
                                style={{ backgroundColor: "#071011", border: "none",   }}
                                placeholder="Check-in Date"
                                className="form-control"
                              />
                          }
                        />
                        <FaCalendarAlt className="calendar-icon" />
                      </div>
                    </div>

                    {/* Room */}
                    <div className="col-lg-2 col-md-3">
                      <div className="search-box-single d-flex align-items-center  gap-2">
                        <div className="searchbox-input">
                          <Select
                            value={selectedOption}
                            onChange={handleRoomChange}
                            options={roomOptions}
                            placeholder="Room"
                            styles={{
                              control: (provided) => ({
                                ...provided,
                               backgroundColor: 'none', // Change background color here
                                border: 'none', // Remove the border
                              }),
                            }}
                          />
                        </div>
                        <FaHome className="home-icon fs-4" />
                      </div>
                      
                    </div>

                    {/* Submit Button */}
                    <div className="col-lg-2 d-flex justify-content-end">
                      <div className="main-form-submit w-100">
                        <button
                          type="submit"
                          className="eg-btn btn btn-lg w-100"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
