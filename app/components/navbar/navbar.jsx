// @flow strict
import Link from "next/link";
import NavLink from "./link";
import AnimeName from "./anime-name";
function Navbar() {
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between pt-3">
        <div className="flex flex-shrink-0 items-center">
          <Link href="/" className=" text-[#2927b9] text-3xl font-bold">
            <AnimeName />
          </Link>
        </div>
        <div>
          <NavLink />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
