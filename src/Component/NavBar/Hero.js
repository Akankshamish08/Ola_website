import React from 'react'
import { useState } from 'react';
import SearchBar from './SearchBar/SearchBar';
import Daily from './SearchBar/Daily';
import Rental from './SearchBar/Rental';
import Outstation from './SearchBar/Outstation';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
   
  }
  const handleSearch = (query) => {
    // Implement your search logic here
    console.log('Searching for:', query);
  };
  return (
    <>
    <div>
       <div className='relative w-[100%] h-[88vh]'>
     <div className='absolute top-0 left-0 w-[100%] h-[100%]'>

     </div>
     <img src='https://cdn.pixabay.com/photo/2017/03/05/19/53/black-and-white-2119607_1280.jpg'  className='w-[100%] h-[80%] object-cover relative'/>      
     <div className='absolute inset-0 top-[15%] p-12 m-9 '>
        
            
             <div className=" inset-0 p-2 text-left   bg-opacity-50 text-white">
        <h2 className="text-[50px] font-display font-bold ">Moving people, </h2>
        <h2 className="text-[50px] font-display font-bold">and the world </h2>
      </div>
        </div>
     </div>
     
    
    </div>
    <div>
  
    <div className="bg-gray-100 absolute top-[85%] left-[50%] -translate-x-1/2 -translate-y-1/2 p-3  h-36 w-1/2 ">
      <BrowserRouter>
      <SearchBar/>
      
      <Routes>
        <Route path="/" element={<Daily/>}/>
        <Route path="/Rental" element={<Rental/>}/>
        <Route path="/Outstation" element={<Outstation/>}/>
        

        
      </Routes>
      </BrowserRouter>
      </div>
 
</div>
    <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
      <video className='' src='https://cdn.pixabay.com/video/2015/08/23/536-137078182_large.mp4' autoPlay=''></video>
    </div>
    </>
  )
}

export default Hero
