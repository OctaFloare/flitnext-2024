'use client'

import { useState } from "react"
import { Overlay } from "./overlay";
import { BurgerSvg } from "./burgerSvg";
import { FlixnetSvg } from "./flixnetSvg";
import { Links } from "./links";

export const MobileHeader = () => {
    const [isOpen, setIsOpen] = useState(false);

    return <div className="block lg:hidden p-5">
        <button onClick={() => setIsOpen(true)}><BurgerSvg /></button>
        <FlixnetSvg className="absolute right-0 top-0 w-10 h-10 m-5" />
        <Overlay setIsOpen={setIsOpen} isOpen={isOpen}/>
    </div>
}