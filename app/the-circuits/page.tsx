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
          <p>
            The circuits included are all the locations and layouts to have
            either hosted or were supposed to host races in the series covered.
            Listed is the name or reference to the layout and circuit length, as
            well as the number of races ran there, and the number of times a
            race there was cancelled. The lap record listed is the fastest lap
            at any point in the weekend (usually from qualifying). In the era of
            average times in qualifying the lap record is the single fastest
            lap.
          </p>
        </div>
      </main>
    </div>
  );
}
