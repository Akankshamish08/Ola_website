import React from 'react'
import {  NavLink } from 'react-router-dom'

function SearchBar() {
  return (
    <div>
      
   
    {/* <div className="bg-white   absolute top-[72%] left-[36.3%] -translate-x-1/2 -translate-y-1/2  h-12  p-4 flex  items-center "> */}
    
      <nav className=' text-gray-700 flex  gap-11  list-none pl-3 '>
        
        <NavLink to={"/"} className="nav">Daily</NavLink>
       <NavLink to={"/Rental"} className="nav">Rental</NavLink>
       <NavLink to={"/Outstation"} className="nav">Outstation</NavLink>
       
      </nav>
      
   
 </div>
   
  )
}

export default SearchBar
