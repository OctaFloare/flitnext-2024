'use client'

import { useState } from "react"
import { Overlay } from "./overlay";
import { MenuIcon } from "./Icons";

export const MobileHeader = () => {
    const [isOpen, setIsOpen] = useState(false);

    return <div className="block lg:hidden m-10" >
        <button 
      onClick={() => setIsOpen(true)}
      onMouseEnter={() => setIsOpen(true)} >
        <MenuIcon/>
        </button>
        <Overlay setIsOpen={setIsOpen} isOpen={isOpen}/>
    </div>
}