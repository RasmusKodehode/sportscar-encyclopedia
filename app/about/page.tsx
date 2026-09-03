import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full flex-col items-center justify-start lg:py-12 lg:px-16 bg-white gap-8 py-4 px-6">
        <h1>About this project</h1>
        <div className="flex flex-col gap-2">
          <p>
            This project started in the summer of 2022 as a byproduct of
            excitement of the prospect of the amount of new cars announced for
            the new LMH/LMDh regulations starting in 2023. The starting point of
            1999 was selected as that was considered the start of the modern Le
            Mans Prototype following years of a fractured sportscar landscape.
            In creating this project I would move through season by season,
            first collecting the race info for each race, before watching the
            available broadcast to collect notes on how the race evolved. For
            the early seasons this was relatively straight-forward as ALMS had
            posted their broadcasts to youtube, but it proved more challenging
            for the LMES/LMS, and a few years of the WEC where broadcasts
            weren't publically available. In these instances I would comb
            through any available written race reviews to create my notes. I had
            to use the same process for several editions of the 24h of Le Mans,
            as broadcasts for a lot of the early years were missing. Progress
            slowed as information became more difficult to find, and in 2025 it
            ground to a halt as I started a new job which took up most of my
            time. In 2026 work on this project picked up again, and over the
            summer it moved into a new home here at Sportscar Encyclopedia.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2>FAQ</h2>
          <div className="flex flex-col gap-2">
            <h3>Which series are included?</h3>
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
            <h3>Which series aren't included?</h3>
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
          <div className="flex flex-col gap-2">
            <h3>Are there other events included?</h3>
            <p>
              After the demise of the World Sportscar Championship in 1992 Le
              Mans ran as a non-championship event for many years. As part of
              the attempt to expand sportscar racing at the turn of the
              millennium other standalone events were organized, and non
              championship events acting as a precurser to new championships
              have also been included.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
