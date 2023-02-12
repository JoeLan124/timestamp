import React from "react";
import Image from "next/image";
import background from "../public/backgroundbrown.jpg";
import Link from "next/link";

function landing3() {
  return (
    <div className="snap-y snap-mandatory w-full h-screen overflow-scroll duration-300">
      <div className="absolute top-4 left-24 z-50">
        Hallo
      </div>
      <div className="relative h-screen w-full bg-slate-200  snap-start ">
        <Image
          src={background}
          alt="background"
          fill
          sizes="100vw, 100vh"
          className="absolute bg-fixed bg-cover"
        />
        <div className="relative h-screen flex justify-center items-center">
          Hallo
        </div>
      </div>
      <div className="h-screen w-full bg-slate-300  snap-start">
        Test2
      </div>
      <div className="h-screen w-full bg-slate-400  snap-start">
        Test3
      </div>
      <div className="h-screen w-full bg-slate-500  snap-start">
        Test4
      </div>
    </div>
  );
}

export default landing3;
