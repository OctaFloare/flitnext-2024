"use client";

import { useState } from "react";
import { Overlay } from "./overlay";
import { BurgerSvg } from "./burgerSvg";

export const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

    return <div className="block lg:hidden p-5">
        <button onClick={() => setIsOpen(true)}><BurgerSvg /></button>
        <Overlay setIsOpen={setIsOpen} isOpen={isOpen}/>
    </div>
};
