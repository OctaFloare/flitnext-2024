import Link from "next/link";

export const DesktopNavbar = ({ links }) => (
  <nav className="w-full flex justify-center items-center gap-4 bg-[#C5C6C7] h-20">
    {links.map((link, index) => 
        ( <Link key={index} href={link.route} className="text-2xl text-[#1F2833]">{link.name}</Link> ))}
    </nav>
);