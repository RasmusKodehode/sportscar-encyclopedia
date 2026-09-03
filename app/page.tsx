import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full flex-col items-center justify-start lg:py-12 lg:px-16 bg-white gap-8 py-4 px-6">
        <h1>Welcome to the sportscar encyclopedia!</h1>
        <div className="flex flex-col gap-2">
          <p>
            This is meant to be a library of top-class sportscars and sportscar
            racing championships and events since 1999.
          </p>
          <p>
            The 24 Hours of Le Mans has always been one of the most famous motor
            races in the world, and it has been a test ground for innovation of
            car technology as long as the race has existed. The fame of the
            event has meant organizers all over the world have wanted to see
            these cars race in their country in front of their fans, letting
            more people experience the spirit of Le Mans. The popularity of
            sportscars grew with the Group C era in the 80s and early 90s, with
            specialized, aerodynamic sports prototypes racing in Europe, North
            America and Japan. As the various championships moved more towards
            production-based cars and engines, the sport became more fragmented
            and popularity declined. The ACO understood that a new set of
            regulations was needed, to bring back the appeal and thrill of Group
            C. Enter, the Le Mans Prototype...
          </p>
          <p>
            The debut of the Le Mans Prototype in 1999 marked the start of the
            modern era of sportscar racing, with the new cars being able to race
            not only at the 24h of Le Mans, but also in a new championship
            series in America using the same regulations from the ACO. After a
            period of instability in the 2nd half of the 2000s sportscar racing
            was again on the up, and in 2012 the FIA World Endurance
            Championship was launched. This led to the demise of the top class
            in America, but after the creation of the Le Mans Hypercar in 2021
            and LMDh in 2023 the top class of sportscar racing is again shared
            across championships both in Europe and America.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2>FAQ</h2>
          <div className="flex flex-col gap-2">
            <h3>Why 1999?</h3>
            <p>
              1999 marked the start of the modern Le Mans Prototype, after
              several years of different formulas and classes since the end of
              Group C in 1993, and it was also the start of the first
              championship to run Le Mans regulations since the end of 1992. You
              can read more about that in the history section.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3>What is a sportscar?</h3>
            <p>
              A sportscar is a closed-wheel racing car, traditionally based on
              road-going cars with 2 seats. Over time the top class evolved to
              include cars built specifically for racing, but the regulations
              have kept the 2-seater, enclosed wheel layout.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3>What is a Le Mans Prototype?</h3>
            <p>
              A Le Mans Prototype (LMP) is a specially built racing car to a set
              of regulations which has been in existance since the 1990s. This
              is unlike GT-cars, which are usually based on a road-going model
              you can buy (if you have enough money...).
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
