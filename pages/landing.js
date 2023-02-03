import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import Modal from "../components/modal";

function landing() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
    setOpen2(true);
    console.log(open);
  };

  return (
    <div className="relative snap-y snap-mandatory">
      {open && (
        <div className="backdrop-blur-lg bg-blue-300 opacity-50 fixed inset-0 z-50">
          <div className="flex h-screen justify-center items-center">
            <div className="flex-col justify-center bg-orange-200 py-12 px-24 border-4 border-white rounded-xl">
              <div className="flex">
                <div
                  className="h-200 w-200 bg-orange-200 p-4 rounded-2xl z-30"
                  onClick={handleClose}>
                  accept
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div>
        <div className="absolute bottom-4 h-auto left-1/2">
          <Link href="#top" className="flex justify-center">
            <button className="rounded-full border-[1px] border-white bg-transparent shadow-xl py-1 px-1 opacity-70 text-white text-xs">
              up
            </button>
          </Link>
        </div>
        <div className=" bg-orange-200 snap-y snap-mandatory w-screen h-screen overflow-scroll duration-300">
          {/* <div className="fixed w-full h-24 bg-orange-400 opacity-70 mb-12">
        Navbar
      </div> */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 snap-start  w-screen h-screen  space-x-3 snap-start"
            id="top">
            <div className="flex justify-center items-center mt-4 md:mt-0">
              <motion.div
                initial={{
                  opacity: 0,
                  x: -300,
                  scale: 0.5,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  rotate: [
                    0, 45, 90, 135, 180, 225, 270, 315, 360,
                  ],
                }}
                transition={{ duration: 0.5 }}
                className="relative rounded-full w-[350px] h-[350px] bg-orange-200 shadow-2xl border-4 border-white my-4">
                <Image
                  src="/joecolouredshort2_3.png"
                  height={200}
                  width={200}
                  alt="joe"
                  className="absolute md:top-4 top-0 left-[70px] z-30 "
                />
              </motion.div>
            </div>
            <div className="md:bg-gradient-to-b md:from-orange-100 md:to-orange-200 bg-orange-200 h-auto flex justify-center items-start md:items-center md:text-xl">
              <motion.div
                initial={{ opacity: 0, x: 300, y: 300 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                }}
                transition={{ duration: 0.5 }}
                className="bg-orange-100 rounded-2xl p-4 m-4  max-w-md text-orange-400">
                Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Corporis provident aperiam
                dolore, modi iste odio, voluptatum vero
                fugiat dicta eos laborum, beatae libero
                assumenda tempore. Ullam saepe quo
                doloremque exercitationem. Vel quaerat quis
                corporis, facere mollitia provident, aliquam
                dolore molestias repellendus ut officiis
                harum minus suscipit laboriosam illum alias
                quisquam odit earum. Dolorem iure impedit
                laboriosam reprehenderit accusamus eligendi
                obcaecati!
              </motion.div>
            </div>
          </div>

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
    </div>
  );
}

export default landing;
