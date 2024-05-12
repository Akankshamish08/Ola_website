import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const Card3 = ({ title, image, buttonText }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden   h-30 w-64">
      <img className="h-30 w-64" src={image} />
      <h2 className=" pt-4  font-semibold text-xl  text-left text-nowrap ">
        {title}
      </h2>
      <div className="">
        <button className="text-green-700 flex items-center gap-3 pl-1 text-l font-semibold  p-3  ">
          {buttonText}
          <FaArrowRightLong className="pt-1 size-[20px] " />
        </button>
      </div>
    </div>
  );
};

export default Card3;
