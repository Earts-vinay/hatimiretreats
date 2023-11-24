import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css"
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Destination from "./components/Destination";
import Contact from "./components/Contact";
import Blogs from "./components/Blogs";
import Bookings from "./components/Bookings";
import Locations from "./components/Locations";
import Footer from "./components/Footer";
import Order_detail from "./components/Order_detail";
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/orderdetail" element={<Order_detail />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
