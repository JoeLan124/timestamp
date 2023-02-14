import Link from "next/link";
import { useRouter } from "next/router";

function navbar() {
  const router = useRouter();
  return (
    <div>
      {" "}
      <nav className="fixed">
        <div className="navbar">
          <div className="absolute flex top-0 w-1/2 opacity-80 space-x-4 p-4 h-auto text-white text-sm uppercase tracking-wide">
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
                Skills
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
    </div>
  );
}

export default navbar;
