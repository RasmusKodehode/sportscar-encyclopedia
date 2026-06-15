import Image from "next/image";

export default function Citcuits() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full flex-col items-center justify-start py-12 px-16 bg-white sm:items-start">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-extrabold">The Circuits</h1>
          <p>
            This is a list of all circuits to have featured on the calendar for
            sportscar racing, both ALMS and its short lived sister series,
            LMES/LMS, WEC and other non-championship races. Circuits are also
            listed where events were planned but not run (noted under "Races
            Cancelled"). The lap record is the fastest lap ever recorded by a
            sportscar in an official session.
          </p>
        </div>
      </main>
    </div>
  );
}
