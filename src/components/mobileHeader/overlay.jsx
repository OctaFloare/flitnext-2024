import { CloseIcon } from "./Icons";
import {  MobileLinks } from "./links";


export const Overlay = ({ setIsOpen, isOpen }) =>
<div
  className={`m-7 absolute left-0 top-0 bg-[#142833] overflow-hidden
  opacity-95 rounded-md z-10 transition-all duration-500 ease-out ${isOpen ? 'w-1/3 h-1/3' : 'h-0 w-0'}`}
>
 
    <button onClick={() => setIsOpen(false)} className="p-3">
      <CloseIcon/>
    <MobileLinks/>
    </button>  
 </div>


