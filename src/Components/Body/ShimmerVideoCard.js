import React from "react";

const ShimmerVideoCard = () => {
  return (
    <div className="p-2 m-2">
      <div className="border bg-gray-300 rounded-xl w-96 h-48 animate-pulse">
        {/* <img
        className="rounded-xl w-80"
        src={thumbnails.medium.url}
        alt="thumbnails"
      /> */}
      </div>
      <div className="mt-2 border bg-gray-300 w-96 h-5 rounded-xl animate-pulse"></div>
      <div className="border my-2 bg-gray-300 w-96 h-5 rounded-xl animate-pulse"></div>
    </div>
  );
};

export default ShimmerVideoCard;
