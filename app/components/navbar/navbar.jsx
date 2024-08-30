// @flow strict
import Link from "next/link";
import NavLink from "./anime-links";
import AnimeName from "./experiment/anime-name";
import MotionNav from "./motion-nav";
import { LogoLink } from "../ui/LogoLink";

function Navbar() {
  return (
    <MotionNav>
      <div className="md:flex items-center justify-between pt-3 md:h-20">
        <div>
          <NavLink />
        </div>
        <div className="flex items-center">
            <LogoLink />
        </div>
      </div>
    </MotionNav>
  );
}

export default Navbar;
