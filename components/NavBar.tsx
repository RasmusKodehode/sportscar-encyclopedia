"use client";

import Link from "next/link";
import Image from "next/image";
import HamburgerMenu from "./Hamburger";

export default function NavBar() {
  return (
    <div className="flex flex-row justify-between w-full h-20 px-3 py-7 bg-primary">
      <Link href="/">Home</Link>
      <div className="flex md:hidden">
        <HamburgerMenu />
      </div>
      <div className="md:flex md:flex-row md:gap-3 md:h-fit md:items-center hidden">
        <Link href="/">About This Project</Link>
        <Link href="/">The Cars</Link>
        <Link href="/">The Circuits</Link>
        <Link href="/">Year By Year</Link>
      </div>
    </div>
  );
}
