import Image from "next/image";
import background from "../public/backgroundbrown.jpg";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Navbar from "components/navbar";

function landing3() {
  const router = useRouter();
  return (
    <div className="snap-y snap-mandatory w-full h-screen overflow-scroll duration-300">
      <div className="h-screen w-screen" id="top">
        <div className="relative h-screen w-full bg-slate-200 snap-start ">
          <Image
            src={background}
            alt="background"
            fill
            sizes="100vw, 100vh"
            className="absolute bg-fixed bg-cover"
          />

          <Navbar />

          <div className="MeAnmimationAndTextBlock">
            <div
              className="grid grid-cols-1 md:grid-cols-2  w-screen h-screen  space-x-3 snap-start"
              id="top">
              <div className="flex justify-center items-center mt-4 md:mt-0">
                <motion.div
                  className="relative rounded-full w-[350px] h-[350px] bg-slate-100/20 shadow-2xl border-4 border-white my-4"
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
                      0, 45, 90, 135, 180, 225, 270, 315,
                      360,
                    ],
                  }}
                  transition={{ duration: 0.5 }}>
                  <Image
                    src="/joecolouredshort2_3.png"
                    height={200}
                    width={200}
                    alt="joe"
                    className="fixed md:top-4 top-0 left-[70px]"
                  />
                </motion.div>
              </div>
              <div className=" h-auto flex justify-center items-start md:items-center md:text-md  ">
                <motion.div
                  initial={{
                    opacity: 0,
                    x: 300,
                    y: 300,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                  }}
                  transition={{ duration: 0.5 }}
                  className="bg-slate-100/20 border-4 border-white rounded-2xl p-4 md:pl-8 m-4  max-w-md text-white shadow-2xl z-50">
                  Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Corporis provident
                  aperiam dolore, modi iste odio, voluptatum
                  vero fugiat dicta eos laborum, beatae
                  libero assumenda tempore. Ullam saepe quo
                  doloremque exercitationem. Vel quaerat
                  quis corporis, facere mollitia provident,
                  aliquam dolore molestias repellendus ut
                  officiis harum minus suscipit laboriosam
                  illum alias quisquam odit earum. Dolorem
                  iure impedit laboriosam reprehenderit
                  accusamus eligendi obcaecati!
                </motion.div>
              </div>
            </div>
          </div>

          <div className="navigate-back-to-home">
            <Link
              href="#top"
              className="fixed bottom-4 left-1/2">
              <button className="rounded-full border-[1px] border-white bg-transparent py-1 px-1 -ml-[4px] opacity-70 text-white text-xs">
                up
              </button>
            </Link>

            <div className="fixed bottom-4 h-auto right-36">
              <Link
                href="/impressum"
                className="flex justify-center">
                <button className="rounded-full bg-transparent py-1 px-1 -ml-[2px] opacity-70 text-white text-xs">
                  Impressum
                </button>
              </Link>
            </div>
            <div className="fixed bottom-4 h-auto right-12">
              <Link
                href="/datenschutz"
                className="flex justify-center">
                <button className="rounded-full bg-transparent py-1 px-1 -ml-[2px] opacity-70 text-white text-xs">
                  Datenschutz
                </button>
              </Link>
            </div>
          </div>

          <section className="pages">
            <div
              className="snap-start flex justify-center items-center w-screen h-screen bg-green-200 space-x-3"
              id="home">
              home
            </div>
            <div
              className="snap-start flex justify-center items-center w-screen h-screen bg-green-200 space-x-3"
              id="me">
              Me
            </div>
            <div
              className="snap-start flex justify-center items-center w-screen h-screen bg-green-300 space-x-3"
              id="skill">
              Skill
            </div>
            <div
              className="snap-start flex justify-center items-center w-screen h-screen bg-green-400 space-x-3"
              id="projects">
              Projects
            </div>
            <div
              className="snap-start flex justify-center items-center w-screen  h-screen bg-green-500 space-x-3"
              id="contact">
              Contact
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default landing3;
