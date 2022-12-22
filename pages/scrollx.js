import React from "react";

function scrollx() {
  const slideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 1500;
  };

  const slideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 1500;
  };

  return (
    <div className="relative flex items-center ">
      <p className="pr-4" onClick={slideLeft}>
        left
      </p>
      <div
        id="slider"
        className=" w-full space-x-6 overflow-x-auto scroll scroll-smooth whitespace-nowrap snap-x snap-mandatory text-lg text-center">
        <div className="snap-center w-screen h-48 bg-green-400 inline-block">
          <span className="flex justify-center items-center h-full text-4xl">
            6
          </span>
        </div>
        <div className="snap-center w-screen h-48 bg-green-500 inline-block">
          <span className="flex justify-center items-center h-full">
            4
          </span>
        </div>
        <div className="snap-center w-screen h-48 bg-green-100 inline-block">
          <span className="flex justify-center items-center h-full">
            1
          </span>
        </div>
        <div className="snap-center w-screen h-48 bg-green-200 inline-block">
          <span className="flex justify-center items-center h-full">
            2
          </span>
        </div>
        <div className="snap-center w-screen h-48 bg-green-300 inline-block">
          <span className="flex justify-center items-center h-full">
            3
          </span>
        </div>
        <div className="snap-center w-screen h-48 bg-green-400 inline-block">
          <span className="flex justify-center items-center h-full">
            4
          </span>
        </div>
        <div className="snap-center w-screen h-48 bg-green-500 inline-block">
          <span className="flex justify-center items-center h-full">
            5
          </span>
        </div>
      </div>
      <p className="pl-4" onClick={slideRight}>
        right
      </p>
    </div>
  );
}

export default scrollx;
