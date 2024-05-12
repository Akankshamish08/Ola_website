import React from 'react'

function Rental() {
  return (
    <div>
      <div className='flex justify-between  items-center pt-9'>
      <input
        type="text"
        placeholder="Current Location"
        
        className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500"
      />
      <input
        type="text"
        placeholder="Destination"
        
        className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500"
      />
      <button
      className="bg-lime-500 hover:bg-blue-700 text-white  py-2 px-4 rounded"
     
    >
      Search
    </button>
      
    </div>
    </div>
  )
}

export default Rental
