import Link from "next/link";
import "../../../css/btn.css"

export default function Btns({ children, link, trgt }) {
  return (
    <Link href={link} target={trgt}>
      <button className="anime-cont px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1">
        {children}
      </button>
    </Link>
  );
}
