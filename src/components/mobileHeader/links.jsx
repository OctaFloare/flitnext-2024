import Link from "next/link";
export const Links = () => <div className="flex items-center flex-col gap-5">
    <Link href="/" className="w-11/12  p-4 text-lg font-semibold text-[#1F2833] hover:bg-[#e3e3e3] hover:text-[#45A29E] rounded" onClick={() => setIsOpen(false)}>Home</Link>
    <Link href="/movies" className="w-11/12 p-4 text-lg font-semibold text-[#1F2833] hover:bg-[#e3e3e3] hover:text-[#45A29E] rounded" onClick={() => setIsOpen(false)}>Movies</Link>
</div>