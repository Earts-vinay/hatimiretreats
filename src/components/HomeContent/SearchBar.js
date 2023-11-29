import React, { useState } from "react";
import "../../App.css";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt, FaHome, FaUserCircle } from "react-icons/fa";
import moment from 'moment';
import 'bootstrap-daterangepicker/daterangepicker.css';
import { DateRangePicker } from 'react-bootstrap-daterangepicker';

import { NavLink } from "react-router-dom";

function SearchBar(props) {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [selectedOption, setSelectedOption] = useState('Rooms');
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

  const [roomCount, setRoomCount] = useState(1);

  const incrementRoom = () => {
    setRoomCount(roomCount + 1);
  };

  const decrementRoom = () => {
    if (roomCount > 1) {
      setRoomCount(roomCount - 1);
    }
  };

  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
  });

  const handleDateSelect = (event, picker) => {
    setDateRange({
      startDate: picker.startDate.toDate(),
      endDate: picker.endDate.toDate(),
    });
  };

  const formattedDate = (date) => {
    return date ? moment(date).format('ddd Do MMM') : 'Select Date';
  };
  
  const handleAdultIncrement = () => {
    setAdults(adults + 1);
  };

  const handleAdultDecrement = () => {
    if (adults > 0) {
      setAdults(adults - 1);
    }
  };

  const handleChildIncrement = () => {
    setChildren(children + 1);
  };

  const handleChildDecrement = () => {
    if (children > 0) {
      setChildren(children - 1);
    }
  };

  const handleDestinationChange = (selectedOption) => {
    setDestination(selectedOption);
  };



  const handlePersonChange = (selectedOption) => {
    setSelectedPersons(selectedOption);
  };

  return (
    <div
      className={`searchbar-section ${
        props.check === "home" ? "imagechanger" : "imagechangerbook"
      }  p-3`}
    >
      <div className="container">
        <div className="multi-main-search searchbarborder p-5 row d-flex justify-content-around align-items-center searchbar-mobile">
          

            {/* Destination */}
            <div className="col-lg-2">
              <div className="dropdown">
                <button
                  className="btn btn-outline-darkgreen text-white dropdown-toggle w-100 "
                  type="button"
                  id="destinationDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {destination ? destination.label : "Search Destination"}
                </button>
                <ul
                  className="dropdown-menu darkgreen text-white dropdown_border "
                  aria-labelledby="destinationDropdown"
                >
                  {destinationOptions.map((option) => (
                    <li key={option.value}>
                      <button
                        className="dropdown-item drop-down-li text-white"
                        onClick={() => handleDestinationChange(option)}
                      >
                        {option.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
             
             {/* Date Picker */}
            
   
        <div className="col-lg-2">
          <div className="search-box-single d-flex r fs-4 gap-2">
          <DateRangePicker onApply={handleDateSelect}>
            <div className="search-box-single d-flex align-items-center justify-content-center gap-2">
              <div className="d-flex flex-column align-items-center">
                <p className="m-0 text-center mx-3 text-white fs-6">Check in</p>
                <input
                  type="text"
                  className="form-searchbar text-center custom-date-picker"
                  value={dateRange.startDate ? formattedDate(dateRange.startDate) : ' DD-MM-YY'}
                  readOnly
                />
              </div>
              <img src="assets/bg/calsearchbar.svg" className="img-fluid h-50" alt="image" />
            </div>
          </DateRangePicker>
          </div>
        </div>
        <div className="col-lg-2">
          <div className="search-box-single d-flex align-items-center justify-content-center fs-4 gap-2">
            <DateRangePicker onApply={handleDateSelect}>
              <div className="search-box-single d-flex align-items-center justify-content-center gap-2">
              <div className="d-flex flex-column">
              <p className="m-0 text-center mx-3 text-white fs-6">Check out</p>
                <input
                  type="text"
                  className="form-searchbar text-center custom-date-picker"
                  value={dateRange.endDate ? formattedDate(dateRange.endDate) : 'DD-MM-YY'}
                  readOnly
                />
                </div>
                <img src="assets/bg/calsearchbar.svg" className="calsearchbar_img" alt="image" />
              </div>
            </DateRangePicker>
          </div>
        </div>
     

            {/* Room */}
            <div className="col-lg-2 text-white d-flex justify-content-center align-items-center gap-2">
          <div className="dropdown">
            <button
              className="btn btn-outline-darkgreen dropdown-toggle"
              type="button"
              id="roomDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <p className="m-0 text-start">Rooms</p>
              {`Rooms : ${roomCount}`}
            </button>
            <ul className="dropdown-menu darkgreen text-white" aria-labelledby="roomDropdown">
              <li className="d-flex align-items-center justify-content-between dropdown_border p-3 gap-2 ">
                <span>Rooms</span>
                <div className="d-flex align-items-center product_detail_increment text-white rounded">
                  <p className="btn  btn-sm text-white m-0" onClick={decrementRoom}>
                    -
                  </p>
                  <span className="mx-2">{roomCount}</span>
                  <p className="btn  btn-sm text-white m-0" onClick={incrementRoom}>
                   +
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <img src="assets/bg/roomsearchbar.svg" className="calsearchbar_img" alt="image" />

        </div>

            {/* persons */}
            <div className="row col-lg-2 ">
              <div className="col d-flex justify-content-center align-items-center  gap-2">
                
                <div className="dropdown text-white">
                  <button
                    className="btn btn-outline-darkgreen dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <p className="m-0 text-start">Guests</p>
                    A - {adults}, {" "} C - {children}
                  </button>
                  <ul
                    className="dropdown-menu darkgreen dropdown_border gap-2 "
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li className="dropdown-item drop-down-li d-flex justify-content-between  text-white gap-2 py-2">
                      Adults :
                      <div className="product_detail_increment text-white rounded d-flex align-items-center">
                      <p
                        className="btn btn-sm text-white m-0 "
                        onClick={handleAdultDecrement}
                      >
                        -
                      </p>
                      <p className="m-0"> {adults}</p>
                      <button
                        className="btn btn-sm text-white m-0"
                        onClick={handleAdultIncrement}
                      >
                        +
                      </button>
                      </div>
                     
                    </li>
                    <li className="dropdown-item drop-down-li d-flex justify-content-between  text-white gap-2 py-2">
                      Children :
                      <div className="product_detail_increment text-white rounded d-flex align-items-center">
                      <p
                        className="btn btn-sm text-white m-0"
                        onClick={handleChildDecrement}
                      >
                        -
                      </p>
                      <p className="m-0">{children}</p>
                      <p
                        className="btn btn-sm text-white m-0"
                        onClick={handleChildIncrement}
                      >
                        +
                      </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <img src="assets/bg/guest.svg" className="img-fluid h-50" alt="image" />
              </div>
             
            </div>

            {/* Submit Button */}
            <div className=" d-flex justify-content-center col-lg-1">
              <div className="main-form-submit ">
                <button className="eg-btn btn btn-searchbar ">
                  <NavLink className="nav-link" to="/bookings">
                    {props.check === "home" ? "Search" : "Update Search"}
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  );
}

export default SearchBar;
