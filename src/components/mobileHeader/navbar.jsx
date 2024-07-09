import Link from "next/link";

export const Navbar = ({ links }) => (
    <nav className="flex items-center flex-col gap-5">
        {links.map((link, index) => 
            ( <Link key={index} href={link.route} className="w-1/2 bg-slate-900 text-center h-12 flex items-center justify-center" onClick={() => setIsOpen(false)}>{link.name}</Link> ))}
    </nav>
);