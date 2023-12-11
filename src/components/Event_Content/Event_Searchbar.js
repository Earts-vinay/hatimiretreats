import React, { useState } from "react";
import "../../App.css";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "bootstrap-daterangepicker/daterangepicker.css";

import { NavLink } from "react-router-dom";

function Event_Searchbar(props) {
  const [destination, setDestination] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const destinationOptions = [
    { value: "Matheran", label: "Matheran" },
    { value: "Lonavala", label: "Lonavala" },
    { value: "Panchgani", label: "Panchgani" },
    { value: "Mount Abu", label: "Mount Abu" },
    { value: "Dummas", label: "Dummas" },
  ];

  const eventOptions = [
    { value: "Event1", label: "Event 1" },
    { value: "Event2", label: "Event 2" },
    { value: "Event3", label: "Event 3" },
    // Add more events as needed
  ];

  const handleDestinationChange = (selectedOption) => {
    setDestination(selectedOption);
  };

  const handleEventChange = (selectedOption) => {
    setSelectedEvent(selectedOption);
  };

  const [selectedDate, setSelectedDate] = useState(null); // State to handle date selection

  const handleDateChange = (date) => {
    setSelectedDate(date); // Update the selected date
  };

  // Function to format the date as "Fri 8th 2023"
  const formatDate = (date) => {
    if (date) {
      const formattedDate = moment(date).format("ddd Do MMM");
      return formattedDate;
    }
    return "";
  };

  const [selectedPersons, setSelectedPersons] = useState(null);

  const personsOptions = [
    { value: "25p", label: "25 P" },
    { value: "50p", label: "50 P" },
    { value: "75p", label: "75 P" },
    { value: "100p", label: "100 P" },
  ];

  const handlePersonsChange = (selectedOption) => {
    setSelectedPersons(selectedOption);
  };

  return (
    <div className={`event-searchbar-section p-3`}>
      <div className="container">
        <div className="multi-main-search searchbarborder py-5 row d-flex justify-content-between align-items-center searchbar-mobile">
          {/* Destination Dropdown */}
          <div className="col-lg-2 broder-right p-0 text-center">
            <div className="dropdown gap-2">
              <button
                className="btn btn-outline-darkgreen text-white destination_box px-0 py-3 border-0"
                type="button"
                id="destinationDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {destination ? destination.label : "Search Destination"}
                <img
                  src="assets/bg/dropdownarrow.svg"
                  className="img-fluid dropdownarrow"
                  alt="image"
                />
              </button>
              <ul
                className="dropdown-menu darkgreen text-white dropdown_border"
                aria-labelledby="destinationDropdown"
              >
                {destinationOptions.map((option) => (
                  <li key={option.value}>
                    <button
                      className="dropdown-item drop-down-li text-white px-5 mx-2 bg-transparent"
                      onClick={() => handleDestinationChange(option)}
                    >
                      {option.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Events Dropdown */}
          <div className="col-lg-2 broder-right p-0 text-center">
            <div className="dropdown gap-2">
              <button
                className="btn btn-outline-darkgreen text-white destination_box px-0 py-3 border-0"
                type="button"
                id="eventsDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {selectedEvent ? selectedEvent.label : "Event Type"}
                <img
                  src="assets/bg/dropdownarrow.svg"
                  className="img-fluid dropdownarrow"
                  alt="image"
                />
              </button>
              <ul
                className="dropdown-menu darkgreen text-white dropdown_border"
                aria-labelledby="eventsDropdown"
              >
                {eventOptions.map((option) => (
                  <li key={option.value}>
                    <button
                      className="dropdown-item drop-down-li text-white px-5 mx-2  bg-transparent"
                      onClick={() => handleEventChange(option)}
                    >
                      {option.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

  {/* Date Picker */}
          <div className="col-lg-2 broder-right p-0">
            <div className=" d-flex gap-3 w-75">
              <div className="d-flex flex-column">
              <p className="m-0 mx-2 text-white fs-6 text-start">Date</p>
            <div className="dropdown gap-2">
            
              <div className="input-group flex-nowrap w-100">
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  placeholderText="DD-MM-YY"
                  className="form-searchbar text-center border-0 w-100"
                  value={selectedDate ? formatDate(selectedDate) : ""}
                />
               
             
              
              </div>
              </div>

            </div>
            <img
                    src="assets/bg/calsearchbar.svg"
                    className="img-fluid event-calendar-icon "
                    alt="calendar"
                  />
              
              {/* End Date Picker */}
            </div>
          </div>

           {/* Persons Dropdown */}
           <div className="col-lg-2 broder-right p-0 text-center">
              <div className="dropdown gap-2">
                <button
                  className="btn btn-outline-darkgreen text-white destination_box px-0 border-0 gap-3"
                  type="button"
                  id="personsDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div className="d-flex gap-2">
                  <div className="d-flex flex-column">
                  <p>Persons</p>
                  <div className="d-flex align-items-center">
                  <p className="text-start">{selectedPersons ? selectedPersons.label : " 0 P "}</p>
                  <img
                    src="assets/bg/dropdownarrow.svg"
                    className="img-fluid dropdownarrow"
                    alt="image"
                  />
                     </div>
                
                  </div>
                  <img
                    src="assets/bg/guest.svg"
                    className="img-fluid h-50 px-2"
                    alt="image"
                  />
                  </div>
                
                </button>
                <ul
                  className="dropdown-menu darkgreen text-white dropdown_border"
                  aria-labelledby="personsDropdown"
                >
                  {personsOptions.map((option) => (
                    <li key={option.value}>
                      <button
                        className="dropdown-item drop-down-li text-white px-5 mx-2 bg-transparent"
                        onClick={() => handlePersonsChange(option)}
                      >
                        {option.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              </div>

          {/* Submit Button */}
          <div
            className={`d-flex justify-content-center ${
              props.check === "home" ? "col-lg-1" : "col-lg-2"
            }`}
          >
            <div className="main-form-submit">
              <button className="eg-btn btn btn-searchbar">
                <NavLink className="nav-link" to="/bookings">
                  Search
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event_Searchbar;
