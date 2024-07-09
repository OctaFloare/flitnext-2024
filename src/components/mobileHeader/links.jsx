import Link from "next/link";
export const Links = () => 
    <div className="flex flex-col items-center gap-5">
        <Link href="/" onClick={() => setIsOpen(false)}
        className="text-4xl  transition-colors duration-300 rounded-md text-[#66FCF1]">FlitNext</Link>
        <div className="w-full flex flex-col items-center gap-5">
        <Link href="/" onClick={() => setIsOpen(false)} 
        className="w-1/2 bg-[#0B0C10] text-center h-12 flex items-center justify-center rounded-md text-[#66FCF1]">
        Home
        </Link>
        <Link href="/movies" onClick={() => setIsOpen(false)} 
        className="w-1/2 bg-[#0B0C10] text-center h-12 flex items-center justify-center rounded-md text-[#66FCF1]">
        Movies
        </Link>
        </div>
    </div>

