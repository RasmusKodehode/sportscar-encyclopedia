"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-row justify-between w-full h-40 px-6 py-7 bg-blue-950 text-white">
      <div className="flex flex-col items-center">
        <p>Sportscar encyclopedia</p>
        <p>2022 - present</p>
      </div>
      <div className="flex flex-col justify-center items-end">
        <p>Copyright 2026</p>
      </div>
      <div className="flex flex-col justify-baseline">
        <p>
          Thanks to FIA, ACO and IMSA for organizing great championships and
          thanks to the manufacturers for bringing great cars
        </p>
      </div>
    </div>
  );
}
