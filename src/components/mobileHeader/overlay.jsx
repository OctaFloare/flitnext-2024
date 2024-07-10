import { CloseImg } from "./closeImg";
import { Links } from "./links";

export const Overlay = ({ setIsOpen, isOpen }) => (
    <div className={`absolute left-0 top-0 h-full bg-[#C5C6C7] w-full ${isOpen ? "block" : "hidden"} z-10 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
      <button onClick={() => setIsOpen(false)} className="absolute top-5 right-5">
        <CloseImg />
      </button>
      <Links setIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  );