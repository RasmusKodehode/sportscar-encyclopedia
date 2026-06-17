import Image from "next/image";

export default function NinetyNine() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full flex-col items-center justify-start py-12 px-16 bg-white gap-4">
        <h1 className="text-4xl font-extrabold">1999 Season</h1>
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold">Series and Regulation News</h2>
          <ul className="list-disc list-inside">
            <li>
              Mercedes took the CLK-LM and updated it to LMGTP regulations,
              becoming the CLR.
            </li>
            <li>
              Toyota did the same, requiring only minor updates to their GT-One.
            </li>
            <li>
              Nissan chose to modify the R390 to become the open-cockpit R391
              for the LMP-class.
            </li>
            <li>
              Porsche started work on a new car for the LMP-class. The LMP2000
              was initially supposed to debut in 1999, but discussions over
              which engine to use delayed the project to 2000, and then it was
              cancelled in the spring of 1999 due to internal politics.
            </li>
            <li>
              BMW modified their V12 LM from 1998 built for the previous year's
              LMP regulations into the V12 LMR to race in the new LMP class,
              bringing the cars to Sebring for the ALMS season opener, and
              competing in the remaining races after Le Mans.
            </li>
            <li>
              Audi joined the sportscar scene with two newly developed cars, the
              R8R for the LMP class, and the R8C for the LMGTP class. The R8R
              was designed and built by Dallara in Italy and operated with the
              help of Joest Racing, whereas the R8C was designed by Racing
              Technology Norfolk in the UK and operated by Audi Sport Team
              UK.Audi brought the R8R to Sebring as preparation for Le Mans, but
              didn't compete in any other races that season. With the
              developement of the R8C starting later, that car was only sent to
              Le Mans.
            </li>
            <li>
              Panoz also designed the new LMP-1 Roadster-S, a front-engined
              open-cockpit LMP based on the old Esperante GTR-1. It debuted at
              the second ALMS race at Road Atlanta and then completed the rest
              of the season in addition to Le Mans.
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold">Manufacturer News</h2>
          <ul className="list-disc list-inside">
            <li>
              Following the class restructuring from the ACO, teams running in
              the old LMGT1 class had a choice of class for 1999.
            </li>
            <li>
              For the inaugural season of the ALMS an{" "}
              <a
                href="https://web.archive.org/web/19991126085346/http://www.americanlemans.com/pages/news99/sched981105.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-600 hover:text-blue-800"
              >
                8-race calendar was announced
              </a>
              , including the season opening 12h of Sebring and the 2nd running
              of the Petit Le Mans, with other events around circuits in North
              America as well as a{" "}
              <a
                href="https://web.archive.org/web/19991126085346/http://www.americanlemans.com/pages/news99/snd981105.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-600 hover:text-blue-800"
              >
                new street race in San Diego
              </a>{" "}
              to finish the season.
            </li>
            <li>
              As part of the process of expanding sportscar racing across the
              world, the ACO planned a non-championship Le Mans-style race in
              Japan to gauge the interest in Asia for an ALMS-type series.
              Toyota and Nissan both sent a car each to the race, but neither of
              the other teams chose to compete there.
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
