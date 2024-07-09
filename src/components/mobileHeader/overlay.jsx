
export const Overlay = ({ setIsOpen, isOpen }) => <div className={`absolute left-0 top-0 h-full bg-[#C5C6C7] w-full ${isOpen ? "block" : "hidden"} z-10`}>
<button onClick={() => setIsOpen(false)}>
<svg viewBox="0 0 12 12" version="1.1"
    xmlns="http://www.w3.org/2000/svg" className="text-[#1F2833] w-7 h-7 m-5">
    <line x1="1" y1="11" 
        x2="11" y2="1" 
        stroke="black" 
        strokeWidth="2"/>
    <line x1="1" y1="1" 
        x2="11" y2="11" 
        stroke="black" 
        strokeWidth="2"/>
</svg>
</button>

</div>