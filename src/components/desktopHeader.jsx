import Link from "next/link";

export const DesktopHeader = () => (
    <div className="hidden lg:block">
      <nav className="w-full flex justify-center items-center gap-6 bg-[#C5C6C7] h-20 shadow-md">
        <Link href="/" className="text-2xl text-[#1F2833] hover:text-[#8A2BE2] transition-colors duration-300">
          Home
        </Link>
        <Link href="/movies" className="text-2xl text-[#1F2833] hover:text-[#8A2BE2] transition-colors duration-300">
          Movies
        </Link>
      </nav>
    </div>
  );