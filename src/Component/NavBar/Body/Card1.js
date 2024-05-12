import React from "react";

const Card1 = ({ title, image, text1, text2 }) => {
  return (
    <div className="bg-white   p-4 m-4 w-64 ">
      <img
        className="w-full h-40 object-cover rounded-t-lg bg-white"
        src={image}
        alt={title}
      />
      <div className="p-6 ">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        <h2 className="text-black font-Font text-xl text-nowrap p-4">
          {text1}
        </h2>
        <p className="text-gray-500 block  leading-snug  text-base">{text2}</p>
      </div>
    </div>
  );
};

export default Card1;
