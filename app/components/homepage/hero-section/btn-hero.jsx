import Link from "next/link";

export default function Btns({ children }) {
  return (
    <Link href="#contact">
      <button
        id="anime-cont"
        className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1"
      >
        {children}
      </button>
    </Link>
  );
}
