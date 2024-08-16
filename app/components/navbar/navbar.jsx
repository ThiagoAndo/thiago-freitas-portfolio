// @flow strict
import Link from "next/link";
import NavLink from "./link";
import AnimeName from "./anime-name";
import MotionNav from "./motion-nav";

function Navbar() {
  return (
    <MotionNav>
      <div className="flex items-center justify-between pt-3 md:h-20">
        <div className="flex flex-shrink-0 items-center">
          <Link href="/" className=" text-[#2927b9] text-3xl font-bold">
            <AnimeName />
          </Link>
        </div>
        <div>
          <NavLink />
        </div>
      </div>
    </MotionNav>
  );
}

export default Navbar;
