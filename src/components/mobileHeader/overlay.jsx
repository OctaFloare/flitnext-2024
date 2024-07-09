import { XIconSvg } from "./xIconSvg";
import {Links} from "@/components/mobileHeader/links";

export const Overlay = ({ setIsOpen, isOpen }) => 
<div className={`absolute left-0 top-0 h-full bg-[#C5C6C7] w-4/6 ${isOpen ? "block" : "hidden"} z-10`}>
    <button onClick={() => setIsOpen(false)}>
        <XIconSvg />
    </button>
    <Links />
</div>