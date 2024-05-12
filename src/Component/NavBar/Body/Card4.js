import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
function Card4({ title, image, text }) {
  return (
    <div className="max-w-sm rounded overflow-hidden bg-lime-50 shadow-lg h-30 w-[280px] pt-4 ">
      <img
        className="h-30 w-20 ml-4 mt-4 mb-20 rounded-lg"
        src={image}
        alt={title}
      />
      <div className="p-4 pb-6">
        <div className="flex justify-between">
          <h2 className="text-xl font-Gfont font-bold mb-2 text-left ">
            {title}
          </h2>
          <FaArrowRightLong className="pt-1 size-[20px] " />
        </div>
        <p className="text-gray-500 text-balance text-left ">{text}</p>
      </div>
    </div>
  );
}

export default Card4;
