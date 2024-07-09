import { BurgerSvg, XIconSvg } from "./xIconSvg";
import { Links } from "./links";

export const Overlay = ({ setIsOpen, isOpen }) => 
<div className={`absolute left-0 top-0 h-full bg-[#FFF] w-full ${isOpen ? "block" : "hidden"} z-10`}>
    <button onClick={() => setIsOpen(false)}>
        <XIconSvg />
    </button>
    <Links setIsOpen={setIsOpen}></Links>
</div>