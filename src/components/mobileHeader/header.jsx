'use client'

import { useState } from "react"
import { Overlay } from "./overlay";

export const MobileHeader = () => {
    const [isOpen, setIsOpen] = useState(false);

    return <div className="block lg:hidden p-5">
        <button onClick={() => setIsOpen(true)}>
            <svg className="w-7 h-7 text-red-50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
        </button>
        <Overlay setIsOpen={setIsOpen} isOpen={isOpen}/>
    </div>
}