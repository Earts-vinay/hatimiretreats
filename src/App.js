import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css"
import Home from "./components/Home";
import Navbar from "./components/Navbar";

import Contact from "./components/Contact";
import Blogs from "./components/Blogs";
import Bookings from "./components/Bookings";
import Locations from "./components/Locations";
import Footer from "./components/Footer";
import Order_detail from "./components/Order_detail";
import Product_detail from "./components/Product_detail";
import Services from "./components/Services";
import Destinations from "./components/Destinations";
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/productdetail" element={<Product_detail />} />
        <Route path="/orderdetail" element={<Order_detail />} />
      </Routes>
      </div>
      <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
