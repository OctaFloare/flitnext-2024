'use client';

import { useState } from 'react';
import { Overlay } from './overlay';
import { BurgerSvg } from './burgerSvg';
import Image from 'next/image';

export const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="lg:hidden p-5 flex justify-between items-center">
        <button onClick={() => setIsOpen(true)}>
          <BurgerSvg />
        </button>
        <div className="mt-3">
          <Image
            src="/flitnext-logo.png"
            alt="FlitNext Logo"
            width={120}
            height={120}
          />
        </div>
        <Overlay setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>
    </>
  );
};
