import Image from "next/image";
import background from "../public/backgroundbrown.jpg";
import Link from "next/link";
import { useRouter } from "next/router";

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
          <nav className="fixed">
            <div className="navbar">
              <div className="absolute flex top-0 w-1/2 opacity-80 space-x-4 p-4 h-auto text-white uppercase tracking-wide">
                <Link href="#top">
                  <ul
                    className={`${
                      router.asPath == "/landing3#top"
                        ? "text-white"
                        : "text-white"
                    }`}>
                    Home
                  </ul>
                </Link>
                <Link href="#me">
                  <ul
                    className={`${
                      router.asPath === "/landing3#me"
                        ? "text-white"
                        : "text-white"
                    }`}>
                    Me
                  </ul>
                </Link>
                <Link href="#skill">
                  <ul
                    className={`${
                      router.asPath === "/landing3#skill"
                        ? "text-white"
                        : "text-white"
                    }`}>
                    Skill
                  </ul>
                </Link>
                <Link href="#projects">
                  <ul
                    className={`${
                      router.asPath === "/landing3#projects"
                        ? "text-white"
                        : "text-white"
                    }`}>
                    Projects
                  </ul>
                </Link>
                <Link href="#contact">
                  <ul
                    className={`${
                      router.asPath === "/landing3#contact"
                        ? "text-white"
                        : "text-white"
                    }`}>
                    Contact
                  </ul>
                </Link>
              </div>
            </div>
          </nav>

          <div className="navigate-back-to-home">
            <Link
              href="#top"
              className="fixed bottom-4 left-1/2">
              <button className="rounded-full border-[1px] border-white bg-transparent shadow-xl py-1 px-1 -ml-[4px] opacity-70 text-white text-xs">
                up
              </button>
            </Link>
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
