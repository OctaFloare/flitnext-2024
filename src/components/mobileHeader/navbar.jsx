import Link from "next/link";

export const Navbar = ({ links }) => (
    <nav className="flex items-center flex-col gap-1">
    {links.map((link, index) => (
        <hr className="border-none bg-white bg-opacity-20 backdrop-blur-lg h-2 my-4" />,
        <Link
        key={index}
        href={link.route}
        className="relative w-full h-20 flex text-4xl shadow-lg items-center justify-center text-[#45A29E] transition-colors duration-300 hover:text-[#66FCF1] bg-gradient-to-r from-transparent via-[#ffffff33] to-transparent"
        onClick={() => setIsOpen(false)}>
        {link.name}
        </Link>
    ))}
  </nav>
);