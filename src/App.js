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

import Footer from "./components/Footer";
import Order_detail from "./components/Order_detail";
import Product_detail from "./components/Product_detail";
import Services from "./components/Services";
import Destinations from "./components/Destinations";
import Events from "./components/Events";
import Daypass from "./components/Daypass";
import Faqs from "./components/Faqs";
import Blog_detail from "./components/Blog_detail";
import Properties from "./components/Properties";
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/services" element={<Services />} />
        <Route path="/events" element={<Events />} />
        <Route path="/daypass" element={<Daypass/>} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogdetail" element={<Blog_detail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/properties" element={<Properties />} />
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
