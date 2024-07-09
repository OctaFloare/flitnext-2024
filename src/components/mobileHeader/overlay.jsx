import { Links } from "../links";
import { XIconSvg } from "./xIconSvg";

export const Overlay = ({ setIsOpen, isOpen }) => 
<div className={`absolute opacity-95 left-0 top-0 h-full bg-[#1F2833] w-full ${isOpen ? "block" : "hidden"} z-10`}>
    <button onClick={() => setIsOpen(false)}>
        <XIconSvg />
    </button>
    <Links wrapper="flex flex-col items-center gap-5" 
    menuItemsDiv="w-full flex flex-col items-center gap-5" 
    linkClass="w-1/2 bg-[#0B0C10] text-center h-12 flex items-center justify-center rounded-md text-[#66FCF1]"
    logo ="text-4xl  transition-colors duration-300 rounded-md text-[#66FCF1]"
    onClick={setIsOpen} />
</div>