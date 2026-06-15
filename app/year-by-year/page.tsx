import Image from "next/image";

export default function YearByYear() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full flex-col items-center justify-start py-12 px-16 bg-white sm:items-start">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-extrabold">Year By Year</h1>
          <p>
            Year by year summary
          </p>
        </div>
      </main>
    </div>
  );
}
