import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css"
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Destination from "./components/Destination";
import Contact from "./components/Contact";
import Blogs from "./components/Blogs";
import Locations from "./components/Locations";
const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
