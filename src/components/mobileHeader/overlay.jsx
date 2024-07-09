import { OverlayIcon } from '@/assets/icons/overlayIconX';

export const Overlay = ({ setIsOpen, isOpen }) => (
  <div
    className={`absolute left-0 top-0 h-full bg-[#C5C6C7] w-full ${
      isOpen ? 'block' : 'hidden'
    } z-10`}
  >
    <button onClick={() => setIsOpen(false)}>
      <OverlayIcon />
    </button>
  </div>
);
