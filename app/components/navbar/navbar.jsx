// @flow strict
import Link from "next/link";
import NavLink from "./anime-links";
import AnimeName from "./anime-name";
import MotionNav from "./motion-nav";

function Navbar() {
  return (
    <MotionNav>
      <div className="md:flex items-center justify-between pt-3 md:h-20">
        <div>
          <NavLink />
        </div>
        <div className="flex items-center">
          <Link href="/" className="text-3xl font-bold">
            <AnimeName />
          </Link>
        </div>
      </div>
    </MotionNav>
  );
}

export default Navbar;
