import Link from "next/link";

export const DesktopHeader = () => <div className="hidden lg:block ">
<nav
 className="w-full flex justify-center items-center gap-4 bg-[#C5C6C7] h-20"
 >
    <Link href="/" className="text-2xl text-[#1F2833]">Home</Link>
    <Link href="/movies" className="text-2xl text-[#1F2833]">Movies</Link>
</nav>
</div>