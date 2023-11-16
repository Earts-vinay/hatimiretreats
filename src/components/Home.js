import React from 'react'
import Navbar from './Navbar'
import "../App.css"
import ImageChanger from './HomeContent/ImageChanger'
const Home = () => {
  return (
    <>
  
      <div className='banner'>
   <div className='home-background '>
   
<ImageChanger/>
   </div>
   </div>
    
    </>
  )
}

export default Home