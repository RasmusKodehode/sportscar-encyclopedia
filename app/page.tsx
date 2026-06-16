import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full flex-col items-center justify-start py-12 px-16 bg-white sm:items-start gap-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-extrabold">
            Welcome to the sportscar encyclopedia!
          </h1>
          <p>
            This is meant to be a library of top-class sportscars and sportscar
            racing championships and events since 1999.
          </p>
          <p>
            The debut of the Le Mans Prototype in 1999 marked the start of the
            modern era of sportscar racing, with the new cars being able to race
            not only at the 24h of Le Mans, but also in a new championship
            series in America using the same regulations from the ACO. Further
            series in Europe and Asia were initially planned and some became
            reality, leading to the creation of the FIA World Endurance
            Championship in 2012. This led to the demise of the top class in
            America, but after the creation of the Le Mans Hypercar in 2021 and
            LMDh in 2023 the top class of sportscar racing is again shared
            across championships both in Europe and America.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-bold">FAQ</h2>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold">Why 1999?</h3>
            <p>
              1999 marked the start of the modern Le Mans Prototype, after
              several years of different formulas and classes since the end of
              Group C in 1993. You can read more about that in the history
              section.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold">What is a sportscar?</h3>
            <p>
              A sportscar is a closed-wheel racing car, traditionally based on
              road-going cars with 2 seats. Over time racing cars were
              increasingly built specifically for racing, but the regulations
              have kept the 2-seater layout.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold">What is a Le Mans Prototype?</h3>
            <p>
              A Le Mans Prototype (LMP) is a specially built racing car to a set
              of regulations. This is unlike GT-cars, which are usually based on
              a road-going model you can buy (if you have enough money...).
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold">Which series are included?</h3>
            <p>
              In general, the championships considered are ACO-backed series
              including the top class of sportscar racing. In the early years
              this was only the American Le Mans Series (ALMS) under Dr Don
              Panoz. It briefly expanded to run the European Le Mans Series
              (ELMS) and the stillborn Asia-Pacific Le Mans Series (APLMS). In
              2004 ACO launched the Le Mans Endurance Series (LMES), later
              renamed Le Mans Series (LMS), running predominantly in Europe. In
              2009 the first season of the Asian Le Mans Series (AsLMS) was run,
              and in 2010 the Intercontinental Le Mans Cup (ILMC) was started.
              It evolved into the FIA World Endurance Championship in 2012 which
              has continued until present. Since 2023 IMSA has also run the top
              class, after years of running a mix of its own regulations and
              LMP2 as its top class.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold">
              Which series aren't included?
            </h3>
            <p>
              In the early 2000's the FIA Sportscar championship included
              LMP-spec cars in the top class, however it also contained cars
              running to a different, older regulation set called SR1. This also
              applies for the Grand-Am-organized series that broke away from
              IMSA ahead of the 1998 season. It too ran the SR1 class for
              several years before replacing it with its own top-class
              regulations in 2004. The Japan Le Mans Challenge (JLMC) ran for 2
              seasons as an ACO-backed championship with ACO-spec classes, but
              in order to fill the grid cars were entered not conforming to the
              regulations.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
