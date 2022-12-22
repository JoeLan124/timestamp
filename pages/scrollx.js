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
        className=" w-full h-full space-x-6 overflow-x-auto scroll scroll-smooth whitespace-nowrap snap-x snap-mandatory">
        <div className="snap-center w-screen h-48 bg-green-400 inline-block hover:scale-105 ease-in-out duration-300">
          4
        </div>
        <div className="snap-center w-screen h-48 bg-green-500 inline-block">
          5
        </div>
        <div className="snap-center w-screen h-48 bg-green-100 inline-block">
          1
        </div>
        <div className="snap-center w-screen h-48 bg-green-200 inline-block">
          2
        </div>
        <div className="snap-center w-screen h-48 bg-green-300 inline-block">
          3
        </div>
        <div className="snap-center w-screen h-48 bg-green-400 inline-block">
          4
        </div>
        <div className="snap-center w-screen h-48 bg-green-500 inline-block">
          5
        </div>
      </div>
      <p className="pl-4" onClick={slideRight}>
        right
      </p>
    </div>
  );
}

export default scrollx;
