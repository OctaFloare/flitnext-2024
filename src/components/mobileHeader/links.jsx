import Link from "next/link";
export const Links  = ({ setIsOpen }) => <div className="flex items-center flex-col gap-5">
    <Link href="/" className="w-1/2  text-center text-[#1F2833] h-12 flex items-center justify-center" onClick={() => setIsOpen(false)}>Home</Link>
    <Link href="/movies" className="w-1/2  text-center text-[#1F2833]  h-12 flex items-center justify-center" onClick={() => setIsOpen(false)}>Movies</Link>
</div>