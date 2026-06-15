import Image from "next/image";

export default function Cars() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full flex-col items-center justify-start py-12 px-16 bg-white sm:items-start">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-extrabold">The Cars</h1>
          <p>
            Due to the nature of the regulations, allowing manufacturers to
            develop road-relevant technologies several brands have built
            top-class sportscars to prove their strength and technology on the
            world stage. Other constructors have also built cars allowing them
            to compete against world-class manufacturers both as factory
            operations and in the hands of privateer teams. The following are a
            list of cars from every manufacturer factory team as well as every
            car from constructors opering their cars themselves.
          </p>
        </div>
      </main>
    </div>
  );
}
