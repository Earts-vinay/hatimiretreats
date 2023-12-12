import React, { useState, useRef, useEffect } from "react";
import "../../App.css";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import "bootstrap-daterangepicker/daterangepicker.css";
import { DateRangePicker } from "react-bootstrap-daterangepicker";
import { NavLink } from "react-router-dom";
import "bootstrap/js/dist/dropdown";

function SearchBar(props) {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [destination, setDestination] = useState(null);

  const destinationOptions = [
    { value: "Matheran", label: "Matheran" },
    { value: "Lonavala", label: "Lonavala" },
    { value: "Panchgani", label: "Panchgani" },
    { value: "Mount Abu", label: "Mount Abu" },
    { value: "Dummas", label: "Dummas" },
  ];

  // Rooms
  const [roomCount, setRoomCount] = useState(0);
  const incrementRoom = () => {
    setRoomCount(roomCount + 1);
  };
  const decrementRoom = () => {
    if (roomCount > 1) {
      setRoomCount(roomCount - 1);
    }
  };
  const roomDropdownRef = useRef(null);
  const [roomDropdownOpen, setRoomDropdownOpen] = useState(false);
  const toggleRoomDropdown = () => {
    setRoomDropdownOpen(!roomDropdownOpen);
  };
  const handleClickOutside = (event) => {
    if (
      roomDropdownRef.current &&
      !roomDropdownRef.current.contains(event.target)
    ) {
      setRoomDropdownOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // checkin and checkout
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
    return date ? moment(date).format("ddd Do MMM") : "Select Date";
  };
  const handleDestinationChange = (selectedOption) => {
    setDestination(selectedOption);
  };

  // Guests
  const dropdownRef = useRef(null);
  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      // Click occurred outside the dropdown, so close it
      // You may add further logic here to handle the closing of dropdown
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  const handleDropdownClick = (event) => {
    event.stopPropagation();
    // Handle the dropdown click event, e.g., increment or decrement
    const { target } = event;
    if (target.classList.contains("increment-adults")) {
      setAdults(adults + 1);
    } else if (target.classList.contains("decrement-adults")) {
      if (adults > 0) {
        setAdults(adults - 1);
      }
    } else if (target.classList.contains("increment-children")) {
      setChildren(children + 1);
    } else if (target.classList.contains("decrement-children")) {
      if (children > 0) {
        setChildren(children - 1);
      }
    }
  };

  return (
    <div
      className={`searchbar-section ${
        props.check === "home" ? "imagechanger" : "imagechangerbook"
      }  p-3`}
    >
      <div className="container ">
        <div className="multi-main-search searchbarborder py-5 row d-flex justify-content-between align-items-center searchbar-mobile">
          {/* Destination */}
          <div className="col-lg-2 broder-right p-0 text-center">
            <div className="dropdown gap-2 ">
              <button
                className="btn btn-outline-darkgreen text-white destination_box px-0 py-3 border-0 "
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

          {/* Date Picker */}

          <div className="col-lg-2 broder-right px-1">
            <div className="search-box-single d-flex justify-content-center fs-4 gap-2">
              <DateRangePicker onApply={handleDateSelect}>
                <div className="search-box-single d-flex align-items-center  gap-2">
                  <div className="d-flex flex-column justify-content-center align-items-center w-75 ">
                    
                    <p className="m-0 mx-2 text-white fs-6">Check in</p>
                    <input
                      type="text"
                      className="form-searchbar text-center custom-date-picker"
                      value={
                        dateRange.startDate
                          ? formattedDate(dateRange.startDate)
                          : " DD-MM-YY"
                      }
                      readOnly
                    />
                  </div>
                  <img
                    src="assets/bg/calsearchbar.svg"
                    className="img-fluid h-50"
                    alt="image"
                  />
                </div>
              </DateRangePicker>
            </div>
          </div>
          <div className="col-lg-2 broder-right px-1">
            <div className="search-box-single d-flex justify-content-center align-items-center  fs-4 ">
              <DateRangePicker onApply={handleDateSelect} className="border-0">
                <div className="search-box-single d-flex align-items-center  gap-2">
                  <div className="d-flex flex-column justify-content-center align-items-center w-75">
                    <p className="m-0  mx-2 text-white fs-6">Check out</p>
                    <input
                      type="text"
                      className="form-searchbar text-center border-0"
                      value={
                        dateRange.endDate
                          ? formattedDate(dateRange.endDate)
                          : "DD-MM-YY"
                      }
                      readOnly
                    />
                  </div>
                  <img
                    src="assets/bg/calsearchbar.svg"
                    className="calsearchbar_img"
                    alt="image"
                  />
                </div>
              </DateRangePicker>
            </div>
          </div>

          {/* Room */}
          <div className="col-lg-2 broder-right text-white d-flex justify-content-center align-items-center gap-2 px-0">
            <div className="dropdown" ref={roomDropdownRef}>
              <button
                className="btn btn-outline-darkgreen d-flex justify-content-center align-items-center gap-3 border-0"
                type="button"
                id="roomDropdown"
                data-bs-toggle="dropdown"
                aria-expanded={roomDropdownOpen ? "true" : "false"}
                onClick={toggleRoomDropdown}
              >
                <div className="d-flex flex-column ">
                  <p className="m-0 text-start">Rooms</p>
                  {`Rooms : ${roomCount}`}
                </div>

                <img
                  src="assets/bg/roomsearchbar.svg"
                  className="calsearchbar_img "
                  alt="image"
                />
              </button>
              <ul
                className={`dropdown-menu darkgreen text-white dropdown_border ${
                  roomDropdownOpen ? "show" : ""
                }`}
                aria-labelledby="roomDropdown"
              >
                <li className="d-flex align-items-center justify-content-between  p-3 gap-2 ">
                  <span>Rooms</span>
                  <div className="d-flex align-items-center product_detail_increment text-white rounded">
                    <p
                      className="btn btn-sm text-white m-0"
                      onClick={(e) => {
                        decrementRoom();
                        e.stopPropagation();
                      }}
                    >
                      -
                    </p>
                    <span className="mx-2">{roomCount}</span>
                    <p
                      className="btn btn-sm text-white m-0"
                      onClick={(e) => {
                        incrementRoom();
                        e.stopPropagation();
                      }}
                    >
                      +
                    </p>
                  </div>
                </li>
                <p className="m-0 max-members">Max 5 rooms</p>
              </ul>
            </div>
          </div>

          {/* persons */}
          <div className="row col-lg-2 px-0 m-0">
            <div className="col d-flex justify-content-center align-items-center px-0">
              <div className="dropdown text-white" ref={dropdownRef}>
                <button
                  className="btn btn-outline-darkgreen d-flex justify-content-center align-items-center  px-0  border-0"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div className="d-flex flex-column ">
                    <p className="m-0 text-start">Guests</p>A - {adults}, C -{" "}
                    {children}
                  </div>
                  <img
                    src="assets/bg/guest.svg"
                    className="img-fluid h-50 ps-3"
                    alt="image"
                  />
                </button>
                <ul
                  className="dropdown-menu darkgreen dropdown_border gap-2"
                  aria-labelledby="dropdownMenuButton"
                  onClick={handleDropdownClick}
                >
                  <li className="dropdown-item drop-down-li d-flex justify-content-between  text-white gap-2 py-2">
                    Adults :
                    <div className="product_detail_increment text-white rounded d-flex align-items-center">
                      <p className="btn btn-sm text-white m-0 decrement-adults">
                        -
                      </p>
                      <p className="m-0"> {adults}</p>
                      <p className="btn btn-sm text-white m-0 increment-adults">
                        +
                      </p>
                    </div>
                  </li>
                  <li className="dropdown-item drop-down-li d-flex justify-content-between  text-white gap-2 py-2">
                    Children :
                    <div className="product_detail_increment text-white rounded d-flex align-items-center">
                      <p className="btn btn-sm text-white m-0 decrement-children">
                        -
                      </p>
                      <p className="m-0">{children}</p>
                      <p className="btn btn-sm text-white m-0 increment-children">
                        +
                      </p>
                    </div>
                  </li>
                  <p className="m-0 max-members">Max 4 Guests for a room</p>
                </ul>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div
            className={` d-flex justify-content-center ${
              props.check === "home" ? "col-lg-1" : "col-lg-2"
            }`}
          >
            <div className="main-form-submit pe-2">
              <button className="eg-btn btn btn-searchbar ">
                <NavLink className="nav-link" to="/properties">
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
