import { BurgerSvg, XIconSvg } from './xIconSvg';

export const Overlay = ({ setIsOpen, isOpen }) => (
  <div
    className={`absolute left-0 top-0 h-full bg-[#C5C6C7] w-full z-10 transition-opacity duration-300 ${
      isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
    }`}
  >
    <button
      onClick={() => setIsOpen(false)}
      className="absolute top-0 left-0 mt-3"
    >
      <XIconSvg />
    </button>
  </div>
);
