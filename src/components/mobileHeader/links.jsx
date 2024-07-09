import Link from "next/link";
export const Links = ({ setIsOpen }) => <div className="flex flex-col gap-2">
    <Link href="/" className="bg-slate-900 pl-10 h-12 flex items-center ml-5 mr-5" onClick={() => setIsOpen(false)}>Home</Link>
    <Link href="/movies" className=" bg-slate-900 pl-10  h-12 flex items-center ml-5 mr-5" onClick={() => setIsOpen(false)}>Movies</Link>
</div>