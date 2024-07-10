import Link from "next/link";
export const Links = ({ setIsOpen, isOpen }) => (
    <div className="flex items-center flex-col gap-5 mt-20">
      <Link
        href="/"
        className="w-3/4 bg-[#1F2833] text-white text-center h-12 flex items-center justify-center rounded-lg shadow-lg hover:bg-[#8A2BE2] transition-colors duration-500"
        onClick={() => setIsOpen(false)}
      >
        Home
      </Link>
      <Link
        href="/movies"
        className="w-3/4 bg-[#1F2833] text-white text-center h-12 flex items-center justify-center rounded-lg shadow-lg hover:bg-[#8A2BE2] transition-colors duration-500"
        onClick={() => setIsOpen(false)}
      >
        Movies
      </Link>
    </div>
  );