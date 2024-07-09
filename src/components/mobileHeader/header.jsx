'use client';

import { useState } from 'react';
import { Overlay } from './overlay';
import { HamburgerIcon } from '@/assets/icons/hamburgerIcon';

export const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="block lg:hidden p-5">
      <button onClick={() => setIsOpen(true)}>
        <HamburgerIcon />
      </button>
      <Overlay setIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  );
};
