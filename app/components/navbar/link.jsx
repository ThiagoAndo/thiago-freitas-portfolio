import Link from "next/link";

export const navContent = [
  { param: "/#about", txt: " ABOUT" },
  { param: "/#skills", txt: "SKILLS" },
  { param: "/#education", txt: "EDUCATION" },
  { param: "/#experience", txt: "EXPERIENCE" },
];

export default function NavLink({ param, txt }) {
  return (
    <Link
      className="block px-4 py-2 no-underline outline-none hover:no-underline"
      href={param}
    >
      <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
        {txt}
      </div>
    </Link>
  );
}
