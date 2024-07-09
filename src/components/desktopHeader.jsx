import Link from 'next/link';
import Image from 'next/image';

export const DesktopHeader = () => (
  <div className="hidden lg:block">
    <nav className="w-full flex items-center bg-[#C5C6C7] h-20 px-10">
      <div className="flex items-center justify-start">
        <Image
          src="/flitnext-logo.png"
          alt="FlitNext Logo"
          width={150}
          height={150}
        />
      </div>
      <div className="flex-grow flex items-center justify-center gap-5">
        <Link href="/" className="text-2xl text-[#1F2833]">
          Home
        </Link>
        <Link href="/movies" className="text-2xl text-[#1F2833]">
          Movies
        </Link>
      </div>
      <div
        className="flex items-center justify-end"
        style={{ width: 150 }}
      ></div>
    </nav>
  </div>
);
