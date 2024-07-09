'use client'
import Link from "next/link";
export const Links = ({wrapper, logo, menuItemsDiv, linkClass, onClick}) => (
  <div className={wrapper}>
    <Link href="/" className={logo} onClick={() => onClick(false)}>FlitNext</Link>
    <div className={menuItemsDiv}>
      <Link href="/" className={linkClass} onClick={() => onClick(false)}>Home</Link>
      <Link href="/movies" className={linkClass} onClick={() => onClick(false)}>Movies</Link>
    </div>
  </div>
);

