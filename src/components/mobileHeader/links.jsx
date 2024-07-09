import Link from "next/link";

export const NavLink = ({ href, children, onClick, additionalClasses }) => (
    <Link href={href} className={`text-center flex items-center justify-center 
    transition ease-in-out transform hover:-translate-y-1 ${additionalClasses}`} onClick={onClick}>
      {children}
    </Link>
  );

  export const LinksWrapper = ({ children, additionalClasses }) => (
    <div className={`flex items-center  text-cyan-100 ${additionalClasses}`}>
      {children}
    </div>
  );

  export const MobileLinks = () => 
  <LinksWrapper additionalClasses="flex-col gap-5">
    <NavLink href="/" additionalClasses="w-1/2  h-12" onClick={() => setIsOpen(false)}>
      Home
    </NavLink>

    <NavLink href="/movies" additionalClasses="w-1/2  h-12" onClick={() => setIsOpen(false)}>
      Movies
    </NavLink>

 </LinksWrapper>

export const DesktopLinks = () => 
  <LinksWrapper additionalClasses="gap-5 px-10 ">
      <NavLink href="/" additionalClasses="text-2xl  ">
        Home
      </NavLink>

      <NavLink href="/movies" additionalClasses="text-2xl">
        Movies
      </NavLink>
  </LinksWrapper>
