import Link from "next/link";

export const DesktopNavbar = ({ links }) => (
  <nav className="w-full flex justify-left items-center gap-6 h-20 shadow-lg px-4 pl-28">
    {links.map((link, index) => (
      <Link key={index}
        href={link.route} 
        className="text-2xl text-[#45a29e] hover:text-[#66FCF1] transition-colors duration-600 transform hover:scale-110 p-3">
        {link.name}
      </Link>
    ))}
  </nav>
);