import Link from "next/link";

export const DesktopHeader = () => <div className="hidden lg:block ">
<nav
 className="w-full flex justify-center items-center gap-4 h-20"
 >
    <Link href="/" className="text-2xl text-[#FFF]">Home</Link>
    <Link href="/movies" className="text-2xl text-[#FFF]">Movies</Link>
</nav>
</div>