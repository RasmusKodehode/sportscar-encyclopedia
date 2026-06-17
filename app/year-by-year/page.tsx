import Image from "next/image";
import Link from "next/link";

export default function YearByYear() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full flex-col items-center justify-start py-12 px-16 bg-white sm:items-start gap-7">
        <h1>Year By Year</h1>
        <div className="flex flex-col gap-2">
          <h2>Overview</h2>
          <p>
            As Group C died out in the early 90s, leading to the end of the
            World Sportscar Championship at the end of 1992 and the GTP class
            being replaced in the IMSA GT championship after 1993, the top class
            increasingly consisted of smaller, slower open-cockpit prototypes
            with production based engines called the World Sports Car (WSC).
            These were only moderately successful, leading ACO to open up the
            top class at Le Mans both to older Group C cars, but also allowing
            GT cars to be able to fight for the overall win as part of the new
            LMGT1 class. In 1995 the top class became available only to
            WSC-cars, but the LMGT1 regulations were kept the same. What
            manufacturers realised was that the GT1 regulations were so open
            that they could basically build a bespoke prototype and only make 1
            road-going version to be able to race. This was first exploited in
            1994 when Dauer modified a Porsche 962C and created a single
            roadcar, allowing them to take the overall win with the Dauer 962.
            McLaren teamed up with BMW to create the McLaren F1 GTR, which took
            the overall win in 1995. Meanwhile Porsche, together with TWR and
            Joest Racing won with a WSC car in 1996 and 1997, several new
            manufacturers were building new GT1 cars specifically for Le Mans.
            Porsche entered the 911 GT1 in 1996, Nissan and Panoz debuted the
            R391 GT1 and Esperante GTR-1 in 1997, and in 1998 Toyota joined with
            their purpose-built GT-One together with Mercedes with its CLK-LM.
            At this point the open nature of the regulations were becoming
            ridiculous, with manufacturers building cars specifically for this
            class because they only needed to produce a single road-going model.
            Since these were supposed to be GT cars, the regulations specified
            that they needed boot space capable of holding a standard size
            suitcase. Mercedes had placed this space underneath the rear
            bodywork in a very impractical place, while Toyota managed to
            convince the scrutineers that because the fuel tank of the GT-One
            was empty during scrutineering, it could theoretically fit the
            required space. The by now complete disregard for the intention of
            the regulations, combined with Mercedes wiping the field clean in
            the newly created FIA GT Championship to the extent that nobody else
            entered the class in 1999, the FIA were forced to drop the class and
            rethink the class-structure at Le Mans. This lead to the creation of
            the Le Mans Prototype (LMP) and the Le Mans Grand Touring Prototype
            (LMGTP). Cars in the old LMGT1 class could be modified to fit in the
            LMGTP class for closed cockpit prototypes, while the LMP class was
            for open cockpit cars. The LMGT1 class was dropped, with the former
            LMGT2 class being renamed LMGTS as the top GT class, with GT3-spec
            cars being eligible in the new LMGT class. With the introduction of
            these new cars, the ACO looked for opportunities to create a
            championship with Le Mans-style regulations. After a change of
            ownership led to IMSA being rebranded as Professional Sports Car
            Racing (PSCR) in 1997 and a split leading to the creation of
            Grand-Am and the US Road Racing Championship and the loss of two of
            its key events, Don Panoz went together with PSCR to partner with
            the ACO to launch the American Le Mans series for 1999, first
            testing the format by creating the first edition of the Petit Le
            Mans at the newly updated Road Atlanta in 1998. After the success of
            the first running the event, the{" "}
            <a
              href="https://web.archive.org/web/19991126085346/http://www.americanlemans.com/pages/news99/quotes981105.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              American Le Mans Series was launched in 1999
            </a>{" "}
            with ACO's new class structure, spearheaded by the new LMP and LMGTP
            classes seeing multiple interested factory teams. For the ACO this
            was just the start, planning more series running Le Mans regulations
            both in Europe and Asia.
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
            <h3>
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
          <div className="flex flex-col gap-2">
            <h3>
              Are there other events included?
            </h3>
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
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-bold">Year by Year</h2>
          <ul>
            <li>
              <Link href="/year-by-year/1999" className="underline hover:text-blue-800">1999</Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
