import React from "react";
import Image from "next/image";
import background from "../public/backgroundbrown.jpg";

function datenschutz() {
  return (
    <div className="">
      <div className="bg-cover">
        <Image
          src={background}
          alt="background"
          layout="fill"
        />
      </div>
      <div className="absolute">
        <p>Hallo</p>
      </div>
    </div>
  );
}

export default datenschutz;
