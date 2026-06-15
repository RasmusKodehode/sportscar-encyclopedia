"use client";

import Link from "next/link";
import Image from "next/image";
import HamburgerMenu from "./Hamburger";

export default function NavBar() {
  return (
    <div className="flex flex-row justify-between w-full h-20 px-6 py-7 bg-primary">
      <Link href="/">Home</Link>
      <div className="flex md:hidden">
        <HamburgerMenu />
      </div>
      <div className="md:flex md:flex-row md:gap-3 md:h-fit md:items-center hidden">
        <Link href="/about">About This Project</Link>
        <Link href="/the-cars">The Cars</Link>
        <Link href="/the-circuits">The Circuits</Link>
        <Link href="/year-by-year">Year By Year</Link>
      </div>
    </div>
  );
}
