import { Links } from "./links";
import { XIconSvg } from "./xIconSvg";

export const Overlay = ({ setIsOpen, isOpen }) => 
<div className={`absolute left-0 top-0 h-full bg-[#C5C6C7] w-2/3 ${isOpen ? "block" : "hidden"} z-10`}>
    <button onClick={() => setIsOpen(false)}>
        <XIconSvg />
    </button>
    <Links setIsOpen={setIsOpen}/>
</div>