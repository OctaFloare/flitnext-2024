import Link from "next/link";
import { FlixnetSvg } from "./mobileHeader/flixnetSvg";

export const DesktopHeader = () => <div className="hidden lg:block ">
    <nav className="w-full flex items-center gap-4 bg-[#C5C6C7] h-20">
        <FlixnetSvg className="w-12 h-12 relative left-0 ml-4 mr-8"/>
        <Link href="/" className="text-2xl text-[#1F2833] hover:bg-[#A5A6A7] p-3 pl-9 pr-9 rounded-2xl transition-all duration-300 ease-in-out transform ">Home</Link>
        <Link href="/movies" className="text-2xl text-[#1F2833] hover:bg-[#A5A6A7] p-3 pl-9 pr-9 rounded-2xl transition-all duration-300 ease-in-out transform ">Movies</Link>
    </nav>
</div>