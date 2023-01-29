import React from "react";
import Image from "next/image";

function landing() {
  return (
    <div className=" bg-orange-100">
      <div className="fixed w-full h-24 bg-orange-400 opacity-70 mb-12">
        Navbar
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full">
        <div className="flex justify-center items-center mt-24 md:mt-0">
          <div className="relative rounded-full w-[350px] h-[350px] bg-orange-200 shadow-2xl border-4 border-white my-4">
            <Image
              src="/joecolouredshort2_3.png"
              height={200}
              width={200}
              alt="joe"
              className="absolute top-4 left-[70px] z-30"
            />
          </div>
        </div>
        <div className="bg-gradient-to-b from-orange-100 to-orange-200  h-screen flex justify-center items-start md:items-center md:text-xl">
          <div className="bg-orange-100 rounded-2xl p-4 m-4  max-w-md text-orange-400">
            Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Corporis provident aperiam
            dolore, modi iste odio, voluptatum vero fugiat
            dicta eos laborum, beatae libero assumenda
            tempore. Ullam saepe quo doloremque
            exercitationem. Vel quaerat quis corporis,
            facere mollitia provident, aliquam dolore
            molestias repellendus ut officiis harum minus
            suscipit laboriosam illum alias quisquam odit
            earum. Dolorem iure impedit laboriosam
            reprehenderit accusamus eligendi obcaecati!
          </div>
        </div>
      </div>
    </div>
  );
}

export default landing;
