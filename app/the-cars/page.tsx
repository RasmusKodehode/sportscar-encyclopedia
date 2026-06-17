import Image from "next/image";

import BMWV12LMR from "../../public/BMWV12LMR.webp";
import AUDIR8R from "../../public/AUDIR8R.jpg";
import AUDIR8C from "../../public/AUDIR8C.jpg";
import PANOZLMP1RoadsterS from "../../public/PANOZLMP1RoadsterS.jpg";
import MERCEDESBENZCLR from "../../public/MERCEDESBENZCLR.jpg";
import TOYOTAGTONE from "../../public/TOYOTAGT-ONE.jpg";
import NISSANR391 from "../../public/NISSANR391.jpeg";
import PORSCHELMP2000 from "../../public/PORSCHELMP2000.jpg";

export default function Cars() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full flex-col items-center justify-start py-12 px-16 bg-white gap-8">
        <h1>The Cars</h1>
        <div className="flex flex-col gap-2">
          <h2>Overview</h2>
          <p>
            Due to the nature of the regulations, allowing manufacturers to
            develop road-relevant technologies several brands have built
            top-class sportscars to prove their strength and technology on the
            world stage. Other constructors have also built cars allowing them
            to compete against world-class manufacturers both as factory
            operations and in the hands of privateer teams.
          </p>
          <p>
            In terms of cars included this has also been subject to changes as I
            have had to make decisions and set precedents as I have moved
            forward. Currently I list cars produced by major car manufacturers
            (Including Brands like Audi, Porsche, BMW and Toyota), but also cars
            created by teams or constructors which also raced them themselves
            (This includes teams like Pescarolo Sport, Creation Autosportif and
            Scuderia Lavaggi, and later the ByKolles team). Cars have not been
            listed that were built by a constructor but only raced by customer
            teams (This includes for example Lola and Reynard, and later Zytek).
            Cars have also not been included that were badged and run by a team
            but not actually built by the team (This was a special exeption I
            had to make for Rebellion Racing). These criteria are still subject
            to changes as I have more upcoming decisions to make for the Later
            LMP1 years. An exeption had to also be made for the ByKolles team,
            which built and run their own cars, but never badged them with their
            own name. A quirk in the ALMS means that you will also find a few
            LMP2-spec cars on this list (Porsche RS Spyder and Acura ARX-01).
            For a few years ALMS allowed factory teams in LMP2, unlike the ACO
            at Le Mans and LMS, and IMSA balanced the LMP2s with LMP1, letting
            them both fight for overall wins.
          </p>
          <p>
            As for the classification of cars I have also had to make decisions
            about what constitutes a "new car". I have landed on the following
            criteria(subject to change): A car is considered new if: It receives
            a new name along with minor or major updates, or: It recieves a
            major update 1 year or more after the previous with the exeption:
            Cars that debuted during the season and then was updated for the
            start of the following season. This has had to become stricter in
            the LMP1 Hybrid era, where manufacturers produced new aero-packages
            frequently, before also updating the car for the new season without
            giving it a new name. The first rule had to be updated to rule out
            the Ascari KZR-1 which was just a new name for the A410. The second
            part was obvious in the early years where cars were updated but not
            in big ways, and if they were it usually meant being branded as an
            "Evo" or a new name iteration. In the early years this was most
            common during regulation changes, when the regulations evolved from
            LMP900/LMP675 to Hybrid LMP1 to LMP1 between 2003 and 2007. Cars
            tended to first get an Evo or "Hybrid" update to fit the new
            bodywork requirements, before getting a new name when a new chassis
            was required to satisfy the new 2007 regs. When the rules were
            updated again in 2009 most teams only needed minor updates and thus
            stuck with the same chassis and the same name (Like Peugeot and
            Lavaggi), and some built a whole new car (Audi). The exeption was
            Pescarolo which didn't build a completely new car but evolved its 01
            into the 01 Evo. However when the LMP1-Hybrid era started updates
            became more frequent and more manufacturers produced bigger updates
            without iterating or updating the name. At his point I had to
            separate out which updates had to be considered "new" and which were
            just a differend downforce package. In these years cars were
            generally considered new at the start of the year, and a high
            downforce package deployed after Le Mans was not considered a new
            car. Exeptions had to be made where a car like the ByKolles CLM
            P1/01 debuted half way through the season in 2014 before receiving a
            big update at round 2 in 2015 (Ostensibly the same as Toyota in
            2012-2013).
          </p>
        </div>
        <div className="flex flex-col gap-8 w-full">
          <h2>By Manufacturer</h2>
          <div className="flex flex-col gap-1">
            <h3>BMW</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p className="font-bold">BMW V12 LMR</p>
                <p>Engine: 6.0L V12 Naturally Aspirated</p>
                <p>Ruleset: LMP900</p>
                <p>Designed by Williams F1</p>
                <p>First Event: 1999 Sebring</p>
                <p>Last Event: 2000 Las Vegas</p>
                <p>Evolution of the 1998 V12 LM</p>
                <Image
                  src={BMWV12LMR}
                  width={500}
                  height={500}
                  alt="BMW V12 LMR"
                  className="w-72"
                />
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3>Audi</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p className="font-bold">Audi R8R</p>
                <p>Engine: 3.6L V8 Twin-turbo</p>
                <p>Ruleset: LMP900</p>
                <p>
                  Designed by Michael Pfadenhauer & Wolfgang Appel, built by
                  Dallara
                </p>
                <p>First Event: 1999 Sebring</p>
                <p>Last Event: 2000 Silverstone</p>
                <p>Newly developed for 1999</p>
                <Image
                  src={AUDIR8R}
                  width={500}
                  height={500}
                  alt="Audi R8R"
                  className="w-72"
                />
              </li>
              <li>
                <p className="font-bold">Audi R8C</p>
                <p>Engine: 3.6L V8 Twin-turbo</p>
                <p>Ruleset: LMGTP</p>
                <p>Designed by Peter Elleray from Racing Technology Norfolk</p>
                <p>First Event: 1999 Le Mans</p>
                <p>Last Event: 1999 Le Mans</p>
                <p>
                  Added after the R8R following the announcement of the LMGTP
                  regulations
                </p>
                <Image
                  src={AUDIR8C}
                  width={500}
                  height={500}
                  alt="Audi R8C"
                  className="w-72"
                />
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3>Panoz</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p className="font-bold">Panoz LMP-1 Roadster-S</p>
                <p>Engine: Elan 6.0L V8 Naturally Aspirated</p>
                <p>Ruleset: LMP900</p>
                <p>Designed by Reynard Motorsport</p>
                <p>First Event: 1999 Road Atlanta</p>
                <p>Last Event: 2002 Sonoma</p>
                <p>
                  Developed to replace the Esperante GTR-1 for the LMP class
                </p>
                <Image
                  src={PANOZLMP1RoadsterS}
                  width={500}
                  height={500}
                  alt="Panoz LMP-1 Roadster-S"
                  className="w-72"
                />
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3>Toyota</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p className="font-bold">Toyota GT-One</p>
                <p>Engine: 3.6L V8 Twin-turbo</p>
                <p>Ruleset: LMGTP</p>
                <p>Designed by Andre de Cortanze from Toyota Team Europe</p>
                <p>First Event: 1999 Le Mans</p>
                <p>Last Event: 1999 Fuji</p>
                <p>Evolution of the 1998-car to suit the new LMGTP class</p>
                <Image
                  src={TOYOTAGTONE}
                  width={500}
                  height={500}
                  alt="Toyota GT-One"
                  className="w-72"
                />
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3>Mercedes-Benz</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p className="font-bold">Mercedes-Benz CLR</p>
                <p>Engine: 5.7L V8 Naturally Aspirated</p>
                <p>Ruleset: LMGTP</p>
                <p>Designed by Gerhard Ungar from HWA division of AMG</p>
                <p>First Event: 1999 Le Mans</p>
                <p>Last Event: 1999 Le Mans</p>
                <p>Evolution of the 1998 CLK-LM to suit the LMGTP class</p>
                <Image
                  src={MERCEDESBENZCLR}
                  width={500}
                  height={500}
                  alt="Mercedes-Benz CLR"
                  className="w-72"
                />
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3>Nissan</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p className="font-bold">Nissan R391</p>
                <p>Engine: 5.0L V8 Naturally Aspirated</p>
                <p>Ruleset: LMP900</p>
                <p>
                  Designed by Nigel Stroud & Doug Skinner from G-Force
                  Technologies
                </p>
                <p>First Event: 1999 Le Mans</p>
                <p>Last Event: 1999 Fuji</p>
                <p>Developed for the LMP class to replace the R390 GT1 car</p>
                <Image
                  src={NISSANR391}
                  width={500}
                  height={500}
                  alt="Nissan R391"
                  className="w-72"
                />
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3>Porsche</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p className="font-bold">Porsche LMP2000</p>
                <p>Engine: 5.5L V10 Naturally Aspirated</p>
                <p>Ruleset: LMP900</p>
                <p>
                  Designed by Wiet Huidekoper and Norbert Singer for Porsche
                </p>
                <p>First Event: N/A</p>
                <p>Last Event: N/A</p>
                <p>
                  The car was set to debut in 1999, but delayed until 2000 after
                  a disagreement over the engine type. The car was ultimately
                  scrapped in the spring of 1999 and never raced.
                </p>
                <Image
                  src={PORSCHELMP2000}
                  width={500}
                  height={500}
                  alt="Porsche LMP2000"
                  className="w-72"
                />
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
