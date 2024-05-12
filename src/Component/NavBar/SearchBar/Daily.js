import React from 'react'

function Daily() {
  return (
    <>
    <div className='flex justify-evenly  items-center pt-9 text-[15px]'>
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
    </>
  )
}

export default Daily
