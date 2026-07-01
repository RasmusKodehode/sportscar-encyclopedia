import Image from "next/image";

import BMWV12LMR from "../../public/BMWV12LMR.webp";
import AUDIR8R from "../../public/AUDIR8R.jpg";
import AUDIR8C from "../../public/AUDIR8C.jpg";
import PANOZLMP1RoadsterS from "../../public/PANOZLMP1RoadsterS.jpg";
import MERCEDESBENZCLR from "../../public/MERCEDESBENZCLR.jpg";
import TOYOTAGTONE from "../../public/TOYOTAGT-ONE.jpg";
import NISSANR391 from "../../public/NISSANR391.jpeg";
import PORSCHELMP2000 from "../../public/PORSCHELMP2000.jpg";
import AUDIR8 from "../../public/AUDIR8.jpg";
import PANOZLMP07 from "../../public/PANOZLMP07.jpg";
import CADILLACNORTHSTARLMP from "../../public/CADILLACNORTHSTARLMP.jpeg";
import ASCARIA410 from "../../public/ASCARIA410.jpg";
import CADILLACNORTHSTARLMP01 from "../../public/CADILLACNORTHSTARLMP01.jpeg";
import CHRYSLERLMP from "../../public/CHRYSLERLMP.jpg";
import BENTLEYEXP from "../../public/BENTLEYEXPSpeed8.jpg";
import MGLOLA from "../../public/MGLOLAEX257.jpeg";
import PANOZLMP01EVO from "../../public/PANOZLMP01EVO.jpg";
import CADILLACNORTHSTARLMP02 from "../../public/CADILLACNORTHSTARLMP02.jpeg";
import RILEYMK3C from "../../public/RILEY&SCOTTMK3C.jpg";
import COURAGEC60 from "../../public/COURAGEC60.jpg";
import PANOZLMP01 from "../../public/PANOZLMP01.jpg";
import BENTLEYSPEED8 from "../../public/BENTLEYSpeed8.jpg";
import LISTERSTORM from "../../public/LISTERSTORMLMP.jpg";
import DURANGO from "../../public/DURANGOPM02.jpg";
import ZYTEK04 from "../../public/ZYTEK04S.jpg";
import PESCAROLOC60 from "../../public/PESCAROLOC60.jpg";
import PORSCHERSSPYDER from "../../public/PORSCHERSSpyder.jpg";
import COURAGEHYBRID from "../../public/COURAGEC60Hybrid.jpg";
import LISTERHYBRID from "../../public/LISTERSTORMLMPHybrid.jpg";
import PESCAROLOHYBRID from "../../public/PESCAROLOC60Hybrid.jpg";
import AUDIR10 from "../../public/AUDIR10TDI.jpg";
import COURAGELC70 from "../../public/COURAGELC70.jpg";
import ZYTEK06 from "../../public/ZYTEK06S.jpg";
import CREATIONHYBRID from "../../public/CREATIONCA06H.jpg";
import LAVAGGI from "../../public/LAVAGGILS1.jpg";

export default function Cars() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full flex-col items-center justify-start lg:py-12 lg:px-16 bg-white gap-8 py-4 px-6">
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
              <li>
                <p className="font-bold">Audi R8</p>
                <p>Engine: 3.6L V8 Twin-turbo</p>
                <p>Ruleset: LMP900</p>
                <p>
                  Designed by Michael Pfadenhauer & Wolfgang Appel, built by
                  Dallara
                </p>
                <p>First Event: 2000 Sebring</p>
                <p>Last Event: 2006 Lime Rock</p>
                <p>Evolution of the R8R</p>
                <Image
                  src={AUDIR8}
                  width={500}
                  height={500}
                  alt="Audi R8"
                  className="w-72"
                />
              </li>
              <li>
                <p className="font-bold">Audi R10 TDI</p>
                <p>Engine: 5.5L V12 Twin-turbo Diesel</p>
                <p>Ruleset: LMP1 (2006-2008)</p>
                <p>Designed by Wolfgang Appel and Ulrich Baretzky for Audi</p>
                <p>First Event: 2006 Sebring</p>
                <p>Last Event: 2008 Laguna Seca</p>
                <p>
                  Designed to replace the ageing R8, with a revolutionary diesel
                  powerplant
                </p>
                <Image
                  src={AUDIR10}
                  width={500}
                  height={500}
                  alt="Audi R10 TDI"
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
              <li>
                <p className="font-bold">Panoz LMP07</p>
                <p>Engine: Zytek 4.0L V8 Naturally Aspirated</p>
                <p>Ruleset: LMP900</p>
                <p>Designed by Andy Thorby from Elan Motorsport Technologies</p>
                <p>First Event: 2000 Adelaide</p>
                <p>Last Event: 2001 Le Mans</p>
                <p>
                  The engine was brand new and specifically built by Zytek for
                  this car. It was plagued by technical and mechanical issues,
                  and it was abandoned after Le Mans
                </p>
                <Image
                  src={PANOZLMP07}
                  width={500}
                  height={500}
                  alt="Panoz LMP07"
                  className="w-72"
                />
              </li>
              <li>
                <p className="font-bold">Panoz LMP01 Evo</p>
                <p>Engine: Elan 6.0L V8 Naturally Aspirated</p>
                <p>Ruleset: LMP900</p>
                <p>Designed by Reynard Motorsport</p>
                <p>First Event: 2002 Sebring</p>
                <p>Last Event: 2002 Petit Le Mans</p>
                <p>
                  Modified and developed version of the LMP-1 Roadster-S to stay
                  competitive after the failure of the LMP07
                </p>
                <Image
                  src={PANOZLMP01EVO}
                  width={500}
                  height={500}
                  alt="Panoz LMP01 Evo"
                  className="w-72"
                />
              </li>
              <li>
                <p className="font-bold">Panoz LMP01</p>
                <p>Engine: Elan 6.0L V8 Naturally Aspirated</p>
                <p>Ruleset: LMP900</p>
                <p>Designed by Reynard Motorsport</p>
                <p>First Event: 2003 Sebring</p>
                <p>Last Event: 2003 Petit Le Mans</p>
                <p>
                  Rebranded version of the LMP-1 Roadster-S run by the factory
                  supported JML Team Panoz in 2003
                </p>
                <Image
                  src={PANOZLMP01}
                  width={500}
                  height={500}
                  alt="Panoz LMP01"
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
              <li>
                <p className="font-bold">Porsche RS Spyder</p>
                <p>Engine: 3.4L V8 Naturally Aspirated</p>
                <p>Ruleset: LMP2 (2004-2008)</p>
                <p>
                  Designed by Michael Mauer and Michael Pfadenhauer for Porsche
                </p>
                <p>First Event: 2005 Laguna Seca</p>
                <p>Last Event: 2006 Laguna Seca</p>
                <p>Raced by Penske Motorsport as a factory team in ALMS</p>
                <Image
                  src={PORSCHERSSPYDER}
                  width={500}
                  height={500}
                  alt="Porsche RS Spyder"
                  className="w-72"
                />
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3>Cadillac</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p className="font-bold">Cadillac Northstar LMP</p>
                <p>Engine: 4.0L V8 Twin-turbo</p>
                <p>Ruleset: LMP900</p>
                <p>Designed by Riley & Scott for Cadillac</p>
                <p>First Event: 2000 Sebring</p>
                <p>Last Event: 2000 Adelaide</p>
                <p>Run by Cadillac in ALMS and DAMS in Europe</p>
                <Image
                  src={CADILLACNORTHSTARLMP}
                  width={500}
                  height={500}
                  alt="Cadillac Northstar LMP"
                  className="w-72"
                />
              </li>
              <li>
                <p className="font-bold">Cadillac Northstar LMP01</p>
                <p>Engine: 4.0L V8 Twin-turbo</p>
                <p>Ruleset: LMP900</p>
                <p>Designed by Riley & Scott and Nigel Stroud</p>
                <p>First Event: 2001 Le Mans</p>
                <p>Last Event: 2001 Petit Le Mans</p>
                <p>
                  2000 Riley chassis with new bodywork redesigned by Nigel
                  Stroud
                </p>
                <Image
                  src={CADILLACNORTHSTARLMP01}
                  width={500}
                  height={500}
                  alt="Cadillac Northstar LMP01"
                  className="w-72"
                />
              </li>
              <li>
                <p className="font-bold">Cadillac Northstar LMP02</p>
                <p>Engine: 4.0L V8 Twin-turbo</p>
                <p>Ruleset: LMP900</p>
                <p>Designed by Nigel Stroud</p>
                <p>First Event: 2002 Sebring</p>
                <p>Last Event: 2002 Petit Le Mans</p>
                <p>
                  After using a Riley & Scott-based chassis for the previous two
                  years, Cadillac designed an all new chassis for 2002
                </p>
                <Image
                  src={CADILLACNORTHSTARLMP02}
                  width={500}
                  height={500}
                  alt="Cadillac Northstar LMP02"
                  className="w-72"
                />
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3>Ascari Cars</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p className="font-bold">Ascari A410</p>
                <p>Engine: Judd 4.0L V10 Naturally Aspirated</p>
                <p>Ruleset: LMP900</p>
                <p>Designed by John McNeil</p>
                <p>First Event: 2000 Silverstone</p>
                <p>Last Event: 2002 Le Mans</p>
                <p>
                  Heavily based on the Lola T92/10 Group C car, renamed Ascari
                  KZR-1 from 2002 onwards.
                </p>
                <Image
                  src={ASCARIA410}
                  width={500}
                  height={500}
                  alt="Ascari A410"
                  className="w-72"
                />
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3>Chrysler</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p className="font-bold">Chrysler LMP</p>
                <p>Engine: Mopar 6.0L V8 Naturally Aspirated</p>
                <p>Ruleset: LMP900</p>
                <p>Designed by Wiet Huidekoper for Dallara</p>
                <p>First Event: 2001 Donington</p>
                <p>Last Event: 2001 Le Mans</p>
                <p>
                  Built by Dallara with their experience with Audi, Chrysler
                  took on the car into their factory program
                </p>
                <Image
                  src={CHRYSLERLMP}
                  width={500}
                  height={500}
                  alt="Chrysler LMP"
                  className="w-72"
                />
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3>Bentley</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p className="font-bold">Bentley EXP Speed 8</p>
                <p>Engine: Audi 3.6L/4.0L V8 Twin-turbo</p>
                <p>Ruleset: LMPGTP</p>
                <p>Designed by Peter Elleray from Racing Technology Norfolk</p>
                <p>First Event: 2001 Le Mans</p>
                <p>Last Event: 2002 Le Mans</p>
                <p>
                  Same engine as the Audi R8, but modified and expanded in 2002.
                  Chassis was an evolution of the Audi R8C from 1999
                </p>
                <Image
                  src={BENTLEYEXP}
                  width={500}
                  height={500}
                  alt="Bentley EXP Speed 8"
                  className="w-72"
                />
              </li>
              <li>
                <p className="font-bold">Bentley Speed 8</p>
                <p>Engine: Audi 3.6L/4.0L V8 Twin-turbo</p>
                <p>Ruleset: LMPGTP</p>
                <p>Designed by Peter Elleray from Racing Technology Norfolk</p>
                <p>First Event: 2003 Sebring</p>
                <p>Last Event: 2003 Le Mans</p>
                <p>
                  New car evolved from the EXP Speed 8 to better suit the
                  increased capacity engine
                </p>
                <Image
                  src={BENTLEYSPEED8}
                  width={500}
                  height={500}
                  alt="Bentley Speed 8"
                  className="w-72"
                />
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3>MG</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p className="font-bold">MG-Lola EX257</p>
                <p>Engine: AER 2.0L I4 Turbo</p>
                <p>Ruleset: LMP675</p>
                <p>Designed by Lola Cars for MG</p>
                <p>First Event: 2001 Le Mans</p>
                <p>Last Event: 2002 Le Mans</p>
                <p>Developed for the new lightweight LMP675 class</p>
                <Image
                  src={MGLOLA}
                  width={500}
                  height={500}
                  alt="MG-Lola EX257"
                  className="w-72"
                />
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3>Riley & Scott</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p className="font-bold">Riley & Scott MK III C</p>
                <p>Engine: Elan 6.0L V8 Naturally Aspirated</p>
                <p>Ruleset: LMP900</p>
                <p>Designed by Bob and Bill Riley</p>
                <p>First Event: 2002 Sebring</p>
                <p>Last Event: 2003 Le Mans</p>
                <p>
                  Brand new version of the MK III following the ending of the
                  Cadillac project
                </p>
                <Image
                  src={RILEYMK3C}
                  width={500}
                  height={500}
                  alt="Riley & Scott MK 3 C"
                  className="w-72"
                />
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3>Courage Competition</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p className="font-bold">Courage C60</p>
                <p>Engine: Judd 4.0L V10 Naturally Aspirated</p>
                <p>Ruleset: LMP900</p>
                <p>Designed by Paolo Catone</p>
                <p>First Event: 2002 Le Mans</p>
                <p>Last Event: 2003 Le Mans</p>
                <p>New car for the LMP900 regs to replace the outgoing C52</p>
                <Image
                  src={COURAGEC60}
                  width={500}
                  height={500}
                  alt="Courage C60"
                  className="w-72"
                />
              </li>
              <li>
                <p className="font-bold">Courage C60 Hybrid</p>
                <p>Engine: Judd 4.0L V10 Naturally Aspirated</p>
                <p>Ruleset: Hybrid LMP1 (2005-2006)</p>
                <p>Designed by Paolo Catone</p>
                <p>First Event: 2005 Spa</p>
                <p>Last Event: 2005 Istanbul</p>
                <p>Upgraded C60 for the hybrid regulations</p>
                <Image
                  src={COURAGEHYBRID}
                  width={500}
                  height={500}
                  alt="Courage C60 Hybrid"
                  className="w-72"
                />
              </li>
              <li>
                <p className="font-bold">Courage LC70</p>
                <p>
                  Engine: Mugen 4.5L V8 Naturally Aspirated/AER 3.6L V8 Turbo
                </p>
                <p>Ruleset: LMP1 (2006-2008)</p>
                <p>Designed by Paolo Catone</p>
                <p>First Event: 2006 Istanbul</p>
                <p>Last Event: 2007 Silverstone</p>
                <p>
                  New car for the new LMP1 regulations, also developed into the
                  LC75 for LMP2
                </p>
                <Image
                  src={COURAGELC70}
                  width={500}
                  height={500}
                  alt="Courage LC70"
                  className="w-72"
                />
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3>Lister Motor Company</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p className="font-bold">Lister Storm LMP</p>
                <p>Engine: Chevrolet 6.0L V8 Naturally Aspirated</p>
                <p>Ruleset: LMP900</p>
                <p>Designed by Andy Thorby</p>
                <p>First Event: 2004 Le Mans</p>
                <p>Last Event: 2005 Spa</p>
                <p>
                  Originally planned to use a Judd V10 but a Chevy V8 was
                  selected instead
                </p>
                <Image
                  src={LISTERSTORM}
                  width={500}
                  height={500}
                  alt="Lister Storm LMP"
                  className="w-72"
                />
              </li>
              <li>
                <p className="font-bold">Lister Storm LMP Hybrid</p>
                <p>Engine: Chevrolet 6.0L V8 Naturally Aspirated</p>
                <p>Ruleset: Hybrid LMP1 (2005-2006)</p>
                <p>Designed by Andy Thorby</p>
                <p>First Event: 2005 Silverstone</p>
                <p>Last Event: 2006 Donington</p>
                <p>
                  New bodywork and updated aero to fit the new hybrid
                  regulations
                </p>
                <Image
                  src={LISTERHYBRID}
                  width={500}
                  height={500}
                  alt="Lister Storm LMP Hybrid"
                  className="w-72"
                />
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3>Automotive Durango</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p className="font-bold">Durango PM02</p>
                <p>Engine: Judd 4.0L V10 Naturally Aspirated</p>
                <p>Ruleset: LMP900</p>
                <p>Designed by Someone, Maybe GMS?</p>
                <p>First Event: 2003 Le Mans</p>
                <p>Last Event: 2003 Le Mans</p>
                <p>
                  New car to improve on the GMS Durango LMP1 from the previous 3
                  years
                </p>
                <Image
                  src={DURANGO}
                  width={500}
                  height={500}
                  alt="Durango PM02"
                  className="w-72"
                />
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3>Zytek</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p className="font-bold">Zytek 04S</p>
                <p>Engine: 3.4L V8 Naturally Aspirated</p>
                <p>Ruleset: LMP675</p>
                <p>Designed by Reynard Motorsport</p>
                <p>First Event: 2004 Monza</p>
                <p>Last Event: 2005 Istanbul</p>
                <p>
                  Initially developed for LMP675 in 2002 before Reynard went
                  bankrupt, IRM renamed it the DBA 03S and raced it in 2003,
                  with Zytek taking over production in 2004
                </p>
                <Image
                  src={ZYTEK04}
                  width={500}
                  height={500}
                  alt="Zytek 04S"
                  className="w-72"
                />
              </li>
              <li>
                <p className="font-bold">Zytek 06S</p>
                <p>Engine: 4.0L V8 Naturally Aspirated</p>
                <p>Ruleset: Hybrid LMP1 (2005-2006)</p>
                <p>
                  Originally designed by Reynard, then bought by IRM before
                  being taken over by Zytek
                </p>
                <p>First Event: 2006 Spa</p>
                <p>Last Event: 2006 Laguna Seca</p>
                <p>Evolution to fit the Hybrid regulations in 2006</p>
                <Image
                  src={ZYTEK06}
                  width={500}
                  height={500}
                  alt="Zytek 06S"
                  className="w-72"
                />
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3>Pescarolo Sport</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p className="font-bold">Pescarolo C60</p>
                <p>Engine: Judd 5.0L V10 Naturally Aspirated</p>
                <p>Ruleset: LMP900</p>
                <p>
                  Designed by Andre de Cortanze, further developed by Henri
                  Pescarolo
                </p>
                <p>First Event: 2004 Monza</p>
                <p>Last Event: 2004 Spa</p>
                <p>
                  Pescarolo took the Courage C60 Evo from 2003 and developed it
                  on their own, badging it as the Pescarolo C60 and replacing
                  the Peugeot engine with the latest Judd GV5 V10
                </p>
                <Image
                  src={PESCAROLOC60}
                  width={500}
                  height={500}
                  alt="Pescarolo C60"
                  className="w-72"
                />
              </li>
              <li>
                <p className="font-bold">Pescarolo C60 Hybrid</p>
                <p>Engine: Judd 5.0L V10 Naturally Aspirated</p>
                <p>Ruleset: Hybrid LMP1 (2005-2006)</p>
                <p>
                  Designed by Andre de Cortanze, further developed by Henri
                  Pescarolo
                </p>
                <p>First Event: 2005 Spa</p>
                <p>Last Event: 2006 Jarama</p>
                <p>
                  Updated version of the C60 to fit the new Hybrid transition
                  regulations between LMP900 and LMP1
                </p>
                <Image
                  src={PESCAROLOHYBRID}
                  width={500}
                  height={500}
                  alt="Pescarolo C60 Hybrid"
                  className="w-72"
                />
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3>Creation Autosportif</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p className="font-bold">Creation CA06/H</p>
                <p>Engine: Judd 5.0L V10 Naturally Aspirated</p>
                <p>Ruleset: Hybrid LMP1 (2005-2006)</p>
                <p>
                  Originally designed by Reynard before being bought by IRM and
                  later modified by KWM
                </p>
                <p>First Event: 2006 Istanbul</p>
                <p>Last Event: 2006 Laguna Seca</p>
                <p>
                  Updated version of Creation's DBA 03S which the team bought
                  when Zytek took over production
                </p>
                <Image
                  src={CREATIONHYBRID}
                  width={500}
                  height={500}
                  alt="Creation CA06 H"
                  className="w-72"
                />
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3>Scuderia Lavaggi</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p className="font-bold">Lavaggi LS1</p>
                <p>
                  Engine: Ford 6.0L V8 Naturally Aspirated/AER 4.0L V8
                  Twin-turbo
                </p>
                <p>Ruleset: LMP1 (2006-2008)</p>
                <p>Designed by Giovanni Lavaggi</p>
                <p>First Event: 2006 Jarama</p>
                <p>Last Event: 2009 Nurburgring</p>
                <p>
                  Lavaggi dreamt of being a driver-constructor, building the car
                  and operating the team himself on a small budget
                </p>
                <Image
                  src={LAVAGGI}
                  width={500}
                  height={500}
                  alt="Lavaggi LS1"
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
