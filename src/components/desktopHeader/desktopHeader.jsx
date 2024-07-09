import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.png"

export const DesktopHeader = () => <div className="hidden lg:block ">
<nav
 className="w-full flex justify-between items-center bg-[#C5C6C7] h-16"
 >
    <div className="w-16 ml-10">
        <Image className="h-auto" src={logo} alt="logo"/>
    </div>
    <div className="flex gap-5">
        <Link href="/" className="text-lg text-[#1F2833] font-semibold transition duration-200 hover:underline hover:ease-in-out">Home</Link>
        <Link href="/movies" className="text-lg mr-10 text-[#1F2833] font-semibold transition duration-200 hover:underline hover:ease-in-out">Movies</Link>
    </div>
</nav>
</div>