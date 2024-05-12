import React from "react";

function Card2({ title, image, text }) {
  return (
    <div className="max-w-sm rounded overflow-hidden   h-30 w-64">
      <img className="h-30 w-64" src={image} alt={title} />
      <div className="p-4">
        <h2 className="text-xl font-Gfont font-medium mb-2 text-left ">
          {title}
        </h2>
        <p className="text-gray-500 text-balance text-left ">{text}</p>
      </div>
    </div>
  );
}

export default Card2;
