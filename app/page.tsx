import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-start py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Welcome to the sportscar encyclopedia!</h1>
        <p>
          This is meant to be a library of top-class sportscars and sportscar
          racing championships and events since 1999.
        </p>
        <h2>Why 1999?</h2>
        <p>
          1999 marked the start of the modern Le Mans Prototype, after several
          years of different formulas and classes since the end of Group C in
          1993. You can read more about that in the history section.
        </p>
        <h2>What is a sportscar?</h2>
        <p>
          A sportscar is a closed-wheel racing car, traditionally based on
          road-going cars with 2 seats. Over time racing cars were increasingly
          built specifically for racing, but the regulations have kept the
          2-seater layout.
        </p>
        <h2>What is a Le Mans Prototype?</h2>
        <p>
          A Le Mans Prototype (LMP) is a specially built racing car to a set of
          regulations. This is unlike GT-cars, which are usually based on a
          road-going model you can buy (if you have enough money...).
        </p>
      </main>
    </div>
  );
}
