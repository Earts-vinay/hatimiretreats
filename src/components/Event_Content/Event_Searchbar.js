import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { NavLink } from "react-router-dom";

function Event_Searchbar(props) {
  const [destination, setDestination] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [destinationOpen, setDestinationOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);

  const destinationRef = useRef(null);
  const eventsRef = useRef(null);

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

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleOutsideClick = (event) => {
    if (
      destinationRef.current &&
      !destinationRef.current.contains(event.target)
    ) {
      setDestinationOpen(false);
    }
    if (eventsRef.current && !eventsRef.current.contains(event.target)) {
      setEventsOpen(false);
    }
  };

  const handleDestinationChange = (selectedOption) => {
    setDestination(selectedOption);
    setDestinationOpen(false);
  };

  const handleEventChange = (selectedOption) => {
    setSelectedEvent(selectedOption);
    setEventsOpen(false);
  };

  return (
    <div className={`searchbar-section ${props.check === "home" ? "imagechanger" : "imagechangerbook"} p-3`}>
      <div className="container">
        <div className="multi-main-search searchbarborder py-5 row d-flex justify-content-between align-items-center searchbar-mobile">
          {/* Destination Dropdown */}
          <div className="col-lg-2 broder-right p-0 text-center">
            <div className="dropdown gap-2" ref={destinationRef}>
              <button
                className="btn btn-outline-darkgreen text-white destination_box px-0 py-3 border-0"
                type="button"
                id="destinationDropdown"
                aria-expanded={destinationOpen ? "true" : "false"}
                onClick={() => setDestinationOpen(!destinationOpen)}
              >
                {destination ? destination.label : "Search Destination"}
                <img
                  src="assets/bg/dropdownarrow.svg"
                  className="img-fluid dropdownarrow"
                  alt="image"
                />
              </button>
              <ul
                className={`dropdown-menu darkgreen text-white dropdown_border ${destinationOpen ? "show" : ""}`}
                aria-labelledby="destinationDropdown"
              >
                {destinationOptions.map((option) => (
                  <li key={option.value}>
                    <button
                      className="dropdown-item drop-down-li text-white px-5 mx-2"
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
            <div className="dropdown gap-2" ref={eventsRef}>
              <button
                className="btn btn-outline-darkgreen text-white destination_box px-0 py-3 border-0"
                type="button"
                id="eventsDropdown"
                aria-expanded={eventsOpen ? "true" : "false"}
                onClick={() => setEventsOpen(!eventsOpen)}
              >
                {selectedEvent ? selectedEvent.label : "Show Events"}
                <img
                  src="assets/bg/dropdownarrow.svg"
                  className="img-fluid dropdownarrow"
                  alt="image"
                />
              </button>
              <ul
                className={`dropdown-menu darkgreen text-white dropdown_border ${eventsOpen ? "show" : ""}`}
                aria-labelledby="eventsDropdown"
              >
                {eventOptions.map((option) => (
                  <li key={option.value}>
                    <button
                      className="dropdown-item drop-down-li text-white px-5 mx-2"
                      onClick={() => handleEventChange(option)}
                    >
                      {option.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Submit Button */}
          <div className={`d-flex justify-content-center ${props.check === "home" ? "col-lg-1" : "col-lg-2"}`}>
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
