import React, { useState } from "react";
import "../../App.css";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt, FaHome, FaUserCircle  } from "react-icons/fa";

import { NavLink } from 'react-router-dom';


function SearchBar(props){

  const [selectedOption, setSelectedOption] = useState(null);
  const [destination, setDestination] = useState(null);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [selectedPersons, setSelectedPersons] = useState(null);

  const destinationOptions = [
    { value: "Matheran", label: "Matheran" },
    { value: "Lonavala", label: "Lonavala" },
    { value: "Panchgani", label: "Panchgani" },
    { value: "Mount Abu", label: "Mount Abu" },
    { value: "Dummas", label: "Dummas" },
  ];

  const roomOptions = [
    { value: "1 Room", label: "1 Room" },
    { value: "2 Rooms", label: "2 Rooms" },
    { value: "3 Rooms", label: "3 Rooms" },
    { value: "4 Rooms", label: "4 Rooms" },
    { value: "5 Rooms", label: "5 Rooms" },
  ];

  const personOptions = [
    { value: "1 Person", label: "1 Person" },
    { value: "2 Persons", label: "2 Persons" },
    { value: "3 Persons", label: "3 Persons" },
    { value: "4 Persons", label: "4 Persons" },
    { value: "5 Persons", label: "5 Persons" },
  ];


  const handleDestinationChange = (selectedOption) => {
    setDestination(selectedOption);
  };

  const handleRoomChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const handlePersonChange = (selectedOption) => {
    setSelectedPersons(selectedOption);
  };

  

  return (
    <div className={`searchbar-section ${props.check==='home'?'imagechanger':'imagechangerbook'}  p-3`}>
              <div className="container">
                <div className="multi-main-search searchbarborder p-5">
                  <div className="row d-flex justify-content-between align-items-center searchbar-mobile">
                    {/* Destination */}
                    <div className="col-lg-2 col-md-3">
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
                                backgroundColor: "none", // Change background color here
                                border: "none", // Remove the border
                              }),
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Check-in Date */}
                    <div className="col-lg-2 col-md-3">
                      <div className="search-box-single d-flex align-items-center justify-content-center fs-4 gap-2">
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
                              style={{
                                backgroundColor: "#071011",
                                border: "none",
                              }}
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
                      <div className="search-box-single d-flex align-items-center justify-content-center fs-4 gap-2">
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
                              style={{
                                backgroundColor: "#071011",
                                border: "none",
                              }}
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
                      <div className="search-box-single d-flex align-items-center justify-content-center gap-2">
                        <div className="searchbox-input">
                          <Select
                            value={selectedOption}
                            onChange={handleRoomChange}
                            options={roomOptions}
                        
                            placeholder="Room"
                            styles={{
                              control: (provided) => ({
                                ...provided,
                                backgroundColor: "none", // Change background color here
                                border: "none", // Remove the border
                                color:"white"
                              }),
                            }}
                          />
                        </div>
                        <FaHome className="home-icon fs-4 text-gold" />
                      </div>
                    </div>

                    {/* persons */}
                    <div className="col-lg-2 col-md-3">
                  <div className="search-box-single d-flex align-items-center  gap-2">
                    <div className="searchbox-input">
                      <Select
                        value={selectedPersons}
                        onChange={handlePersonChange}
                        options={personOptions}
                        placeholder="Persons"
                        styles={{
                          control: (provided) => ({
                            ...provided,
                            backgroundColor: "none",
                            border: "none",
                            color: "white"
                          }),
                        }}
                      />
                    </div>
                    < FaUserCircle  className="home-icon fs-4 text-gold" />
                  </div>
                </div>

                    {/* Submit Button */}
                    <div className="col-lg-2 d-flex justify-content-center">
                      <div className="main-form-submit ">
                        <button 
                          className="eg-btn btn btn-searchbar "
                        >
                        <NavLink className="nav-link" to="/bookings">
                        {props.check==='home'?'Search':'Update Search'}
                        </NavLink>  
                          
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
