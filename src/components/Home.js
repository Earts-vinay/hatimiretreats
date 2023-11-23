import React from "react";
import "../App.css";
import ImageChanger from "./HomeContent/ImageChanger";
import Gateway from "./HomeContent/Gateway";
import Tourplaces from "./HomeContent/Tourplaces";
import Awesome from "./HomeContent/Awesome";
import Amenities from "./HomeContent/Amenities";
import Blogs from "./HomeContent/Blogs";
import SearchBar from "./HomeContent/SearchBar";
import Instagramfeed from "./HomeContent/Instagramfeed";
import Testimonials from "./HomeContent/Testimonials";

const Home = () => {
 
  return (
    <>
 
        <div className="">
          <div className="imagechanger">
            <ImageChanger />
          </div>

          
          <div>
            <SearchBar check="home"/>
            </div>
 

          <div className="gateway">
            <Gateway />
          </div>

          <div>
            <Tourplaces/>
          </div>

          <div>
            <Awesome/>
          </div>

          <div className="">
            <Amenities/>
          </div>

          <div>
            <Blogs/>
          </div>
          <div>
            <Instagramfeed/>
          </div>

          <div>
            <Testimonials/>
          </div>
        </div>
      
    </>
  );
};

export default Home;
