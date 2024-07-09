import Link from "next/link";
import { DesktopLinks } from "./mobileHeader/links";

export const DesktopHeader = () => <div className="hidden lg:block ">
  <nav className="w-full h-12 flex justify-end items-center gap-4 bg-[#142833]
  transition-all duration-500 ease-out opacity-75 hover:opacity-90 hover:h-16 ">
   <DesktopLinks/>
</nav>
</div>
