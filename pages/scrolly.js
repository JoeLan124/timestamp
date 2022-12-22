import React from "react";

function Scroll() {
  return (
    <div>
      <nav className="h-36 w-full bg-blue-400 opacity-80 text-8xl absolute top-96 z-20 flex justify-center items-center">
        my Home
      </nav>
      <div className="snap-y snap-mandatory w-screen h-screen overflow-scroll duration-100">
        <div className="snap-start flex justify-center items-center w-screen h-screen bg-green-200 space-x-3">
          1
        </div>
        <div className="snap-start flex justify-center items-center w-screen h-screen bg-green-300 space-x-3">
          2
        </div>
        <div className="snap-start flex justify-center items-center w-screen h-screen bg-green-400 space-x-3">
          3
        </div>
        <div className="snap-start flex justify-center items-center w-screen  h-screen bg-green-500 space-x-3">
          4
        </div>
      </div>
    </div>
  );
}

export default Scroll;
