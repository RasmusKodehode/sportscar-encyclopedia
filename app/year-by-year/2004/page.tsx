import Image from "next/image";

export default function ZeroFour() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full flex-col items-center justify-start lg:py-12 lg:px-16 bg-white gap-8 py-4 px-6">
        <h1>2004 Season</h1>
        <div className="flex flex-col gap-2">
          <h2>Series and Regulation News</h2>
          <ul>
            <li>
              The ACO announced changes in the class structure for 2004, with
              LMP900, LMGTP and LMP675 being replaced by LMP1 and LMP2. LMP900
              and LMGTP-cars moved to LMP1, and LMP675 cars could be converted
              to either of the new classes. Rule changes were also announced for
              LMP1 with overhang limited and the floor structure changed to
              limit downforce and make the cars less likely to take off.{" "}
              <a
                href="http://archive.dailysportscar.com/subscribers/news/alms/2004alms/alms292.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                IMSA announced that they would delay enforcing these new rules
                in ALMS,
              </a>{" "}
              allowing both new LMP1 and LMP2 cars and old LMP900 and LMP675
              cars to compete in what became the P1 and P2 class. This allowed
              Dyson racing to continue using their LMP675-spec MG-Lolas in P1.
            </li>
            <li>
              After the announcement of the 1000 km of Le Mans preview race in
              2003, ACO launched the new Le Mans Endurance Series, racing on
              classic European circuits and bringing back the classic 1000 km/6
              hour format from the old World Sportscar Championship days. Having
              learned from the ELMS in 2001, the new series attracted several
              teams from the FIA Sportscar championship and FIA GT championship,
              with the resulting lack of interest forcing the FIA Sportscar
              Championship to end following the 2003 season.
            </li>
            <li>
              <a
                href="https://web.archive.org/web/20060629012254/http:/motorsport.com/news/article.asp?ID=140336&FS=ALMS"
                target="_blank"
                rel="noopener noreferrer"
              >
                ALMS announced their new calendar for 2004
              </a>
              , with a focus on making sure all events could be run following
              cancellations and replacements in the last few years. The calendar
              included a return to Mid-Ohio and Portland, as well as a new event
              at Lime Rock Park. Laguna Seca also became the season finale, with
              the race extended to 4 hours.
            </li>
            <li>
              For its first season LMES{" "}
              <a
                href="http://archive.dailysportscar.com/subscribers/news/lmes/2003lmes/lmes_075.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                revealed a 4 round calendar
              </a>{" "}
              across 4 legendary circuits around Europe, visiting Monza,
              Nurburgring, Silverstone and Spa.
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2>Manufacturer News</h2>
          <ul>
            <li>
              Audi started work on a new car to succeed the R8, which would
              ultimately debut in 2006. Meanwhile the Joest Team ended their
              program in ALMS, leaving only Champion Racing competing in the US.
              In Europe, Team Goh and Audi Sport UK also operated Audis in the
              new LMES, with Team UK also making the trip to Sebring.
            </li>
            <li>
              After winning Le Mans in the 3rd year of the program, Bentley
              ended their sportscar program and didn't return.
            </li>
            <li>
              Panoz too elected not to return in the top class with the LMP01,
              instead focusing on their GT-class program.
            </li>
            <li>
              Having originally developed the 02S in 2002, Reynard went bankrupt
              and International Racing Management took over the project and
              renamed it the DBA 03S for 2003. In 2004 the production was taken
              over by Zytek, with the 2003 chassis sold to Creation Autosportif
              and the new cars were{" "}
              <a
                href="http://archive.dailysportscar.com/subscribers/news/lemans/2004lemans/lemans348.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                badged as the Zytek 04S
              </a>{" "}
              and{" "}
              <a
                href="http://archive.dailysportscar.com/subscribers/news/lemans/2004lemans/lemans317.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                campaigned by the Zytek factory team
              </a>
              . Both cars were entered in the LMES, with Zytek only running a
              limited program while Creation brought the 2003-car to the two
              final ALMS rounds as well.
            </li>
            <li>
              Lister went into their 2nd season with the Storm LMP, starting at
              Le Mans before finishing the LMES season.
            </li>
            <li>
              Having been a Courage customer for several years, Henri
              Pescarolo's team took their 2003 car and updated it themselves,
              improving the aero and switching out the Peugeot engine for a new
              Judd V10. They debuted{" "}
              <a
                href="http://archive.dailysportscar.com/subscribers/news/lemans/2004lemans/lemans372.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                the new Pescarolo C60
              </a>{" "}
              at Monza, competing in LMES as well as bringing 2 cars to Le Mans.
            </li>
            <li>
              Meanwhile Courage switched to the LMP2 class to compete with the
              new C65 that debuted the year before.
            </li>
            <li>
              With the new LMP1 regulations the R&S MK III C was becoming
              outdated, and with the factory switching its focus to the Rolex
              Sportscar Series DP class, the ALMS and Le Mans program was
              reduced to supporting the remaining customers.
            </li>
            <li>
              As the new LMP1 regulations made older LMP900 obsolete, Automotive
              Durango switched its focus back to single seaters and didn't
              return to sportscars in 2004.
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h2>The Teams</h2>
          <div className="w-full overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th scope="col">Team</th>
                  <th scope="col">Car</th>
                  <th scope="col">Nr.</th>
                  <th scope="col">Drivers</th>
                  <th scope="col">Rd.</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan={8}>
                    <strong>ADT Champion Racing</strong>
                  </td>
                  <td rowSpan={8}>Audi R8</td>
                  <td rowSpan={3}>38</td>
                  <td>JJ Lehto(FIN)</td>
                  <td>
                    Sebring, Mid-Ohio, Lime Rock, Sonoma, Portland, Mosport,
                    Road America, Petit Le Mans, Laguna Seca
                  </td>
                </tr>
                <tr>
                  <td>Marco Werner(DEU)</td>
                  <td>
                    Sebring, Mid-Ohio, Lime Rock, Sonoma, Portland, Mosport,
                    Road America, Petit Le Mans, Laguna Seca
                  </td>
                </tr>
                <tr>
                  <td>Emanuele Pirro(ITA)</td>
                  <td>Sebring</td>
                </tr>
                <tr>
                  <td rowSpan={5}>2</td>
                  <td>JJ Lehto(FIN)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Marco Werner(DEU)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Emanuele Pirro(ITA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Johnny Herbert(GBR)</td>
                  <td>Petit Le Mans, Laguna Seca</td>
                </tr>
                <tr>
                  <td>Pierre Kaffer(DEU)</td>
                  <td>Petit Le Mans, Laguna Seca</td>
                </tr>
                <tr>
                  <td rowSpan={6}>
                    <strong>Audi Sport UK Team Veloqx</strong>
                  </td>
                  <td rowSpan={6}>Audi R8</td>
                  <td rowSpan={3}>8</td>
                  <td>Pierre Kaffer(DEU)</td>
                  <td>Monza, Le Mans, Nurburgring, Silverstone, Spa</td>
                </tr>
                <tr>
                  <td>Allan McNish(GBR)</td>
                  <td>Monza, Le Mans, Nurburgring, Silverstone Spa</td>
                </tr>
                <tr>
                  <td>Frank Biela(DEU)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={3}>88</td>
                  <td>Johnny Herbert(GBR)</td>
                  <td>Monza, Le Mans, Nurburgring, Silverstone, Spa</td>
                </tr>
                <tr>
                  <td>Jamie Davies(GBR)</td>
                  <td>Monza, Le Mans, Nurburgring, Silverstone, Spa</td>
                </tr>
                <tr>
                  <td>Guy Smith(GBR)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={3}>
                    <strong>Audi Sport Japan Team Goh</strong>
                  </td>
                  <td rowSpan={3}>Audi R8</td>
                  <td rowSpan={3}>5</td>
                  <td>Rinaldo Capello(ITA)</td>
                  <td>Monza, Le Mans, Nurburgring, Silverstone, Spa</td>
                </tr>
                <tr>
                  <td>Tom Kristensen(DEN)</td>
                  <td>Monza, Le Mans</td>
                </tr>
                <tr>
                  <td>Seiji Ara(JAP)</td>
                  <td>Monza, Le Mans, Nurburgring, Silverstone, Spa</td>
                </tr>
                <tr>
                  <td rowSpan={9}>
                    <strong>Pescarolo Sport</strong>
                  </td>
                  <td rowSpan={9}>Pescarolo C60</td>
                  <td rowSpan={6}>17</td>
                  <td>Emmanuel Collard(FRA)</td>
                  <td>Monza, Le Mans</td>
                </tr>
                <tr>
                  <td>Soheil Ayari(FRA)</td>
                  <td>Monza, Nurburgring, Spa</td>
                </tr>
                <tr>
                  <td>Sebastien Bourdais(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Nicolas Minassian(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Eric Helary(FRA)</td>
                  <td>Nurburgring</td>
                </tr>
                <tr>
                  <td>Jean-Marc Gounon(FRA)</td>
                  <td>Spa</td>
                </tr>
                <tr>
                  <td rowSpan={3}>18</td>
                  <td>Soheil Ayari(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Eric Comas(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Benoit Treluyer(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={6}>
                    <strong>Zytek Engineering</strong>
                  </td>
                  <td rowSpan={6}>Zytek 04S</td>
                  <td rowSpan={6}>22</td>
                  <td>Andy Wallace(GBR)</td>
                  <td>Monza, Le Mans</td>
                </tr>
                <tr>
                  <td>David Brabham(AUS)</td>
                  <td>Monza, Le Mans</td>
                </tr>
                <tr>
                  <td>Stefan Johansson(SWE)</td>
                  <td>Monza</td>
                </tr>
                <tr>
                  <td>Hayanari Shimoda(JAP)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Robbie Kerr(GBR)</td>
                  <td>Silverstone</td>
                </tr>
                <tr>
                  <td>Chris Dyson(USA)</td>
                  <td>Silverstone</td>
                </tr>
                <tr>
                  <td rowSpan={6}>
                    <strong>Lister Racing</strong>
                  </td>
                  <td rowSpan={6}>Lister Storm LMP</td>
                  <td rowSpan={6}>20</td>
                  <td>John Nielsen(DEN)</td>
                  <td>Le Mans, Nurburgring</td>
                </tr>
                <tr>
                  <td>Casper Elgaard(DEN)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Jens Møller(DEN)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Justin Keen(GBR)</td>
                  <td>Nurburgring, Silverstone, Spa</td>
                </tr>
                <tr>
                  <td>Rob Barff(GBR)</td>
                  <td>Silverstone</td>
                </tr>
                <tr>
                  <td>Marc Goosens(BEL)</td>
                  <td>Spa</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h2>Calendar</h2>
          <ol className="flex flex-col gap-4">
            <li>
              <p className="font-bold">
                52nd Annual Mobil 1 12 Hours of Sebring
              </p>
              <p>Sebring International Raceway, Sebring, Florida</p>
              <p>Date: 20.03.2004</p>
              <p>Series: ALMS</p>
              <p>Race Format: 12 Hours</p>
              <p>Classes: P1, P2, GTS, GT</p>
              <p>Circuit Length: 6.019 km</p>
              <p>Laps Completed: 350</p>
              <p>Distance Covered: 2106.650 km</p>
              <p>Number of cars entered: 44 (12 P1, 7 P2, 6 GTS, 19 GT)</p>
              <p>Number of cars finished: 24 (7 P1, 2 P2, 3 GTS, 12 GT)</p>
              <p>
                Pole Position: #38 ADT Champion Racing, Audi R8, Marco
                Werner(DEU), Emanuele Pirro(ITA), JJ Lehto(FIN), 1.48,710
              </p>
              <p>
                Overall Winner: #28 Audi Sport UK Team Veloqx, Audi R8, Allan
                McNish(GBR), Frank Biela(DEU), Pierre Kaffer(DEU), 12:01.22,576
              </p>
              <p>
                GTS Winner: #3 Corvette Racing, Chevrolet Corvette C5-R, Ron
                Fellows(CAN), Johnny O'Connell(USA), Max Papis(ITA), +21 Laps
              </p>
              <p>
                GT Winner: #23 Alex Job Racing, Porsche 911 GT3-RSR, Sascha
                Maassen(DEU), Timo Bernhard(DEU), <em>Jörg Bergmeister(DEU)</em>
                , +33 Laps
              </p>
              <p>
                P2 Winner: #10 American Spirit Racing, Lola B2K/40 - Nissan, Ian
                James(GBR), John Macaluso(USA), Mike Borkowski(USA), +86 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">1000 km di Monza</p>
              <p>Autodromo Nazionale di Monza, Monza, Italy</p>
              <p>Date: 09.05.2004</p>
              <p>Series: LMES</p>
              <p>Race Format: 1000 km or 6 Hours</p>
              <p>Classes: LMP1, LMP2, LMGTS, LMGT</p>
              <p>Circuit Length: 5.793 km</p>
              <p>Laps Completed: 173</p>
              <p>Distance Covered: 1002.189 km</p>
              <p>
                Number of cars entered: 41 (14 LMP1, 4 LMP2, 7 LMGTS, 16 LMGT)
              </p>
              <p>
                Number of cars finished: 19 (8 LMP1, 1 LMP2, 2 LMGTS, 8 LMGT)
              </p>
              <p>
                Pole Position: #88 Audi Sport UK Team Veloqx, Audi R8, Johnny
                Herbert(GBR), Jamie Davies(GBR), 1.38,461
              </p>
              <p>
                Overall Winner: #88 Audi Sport UK Team Veloqx, Audi R8, Johnny
                Herbert(GBR), Jamie Davies(GBR), 5:05.52,043
              </p>
              <p>
                LMGTS Winner: #86 Larbre Competition, Ferrari 550-GTS Maranello,
                Christope Bouchut(FRA), Pedro Lamy(POR), Steve Zacchia(CHE), +19
                Laps
              </p>
              <p>
                LMGT Winner: #85 Freisinger Motorsport, Porsche 911 GT3-RSR,
                Romain Dumas(FRA), Stephane Ortelli(MCO), +22 Laps
              </p>
              <p>
                LMP2 Winner: #99 PIR Competition, Pilbeam MP91 - JPX, Pierre
                Bruneau(FRA), Marc Rostan(FRA), +42 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">
                72<sup>e</sup> 24 Heures du Mans
              </p>
              <p>Circuit de la Sarthe, Le Mans, France</p>
              <p>Date: 12-13.06.2004</p>
              <p>Series: Standalone Event</p>
              <p>Race Format: 24 Hours</p>
              <p>Classes: LMP1, LMP2, LMGTS, LMGT</p>
              <p>Circuit Length: 13.650 km</p>
              <p>Laps Completed: 379</p>
              <p>Distance Covered: 5173.350 km</p>
              <p>
                Number of cars entered: 48 (19 LMP1, 6 LMP2, 7 LMGTS, 16 LMGT)
              </p>
              <p>
                Number of cars finished: 26 (9 LMP1, 2 LMP2, 5 LMGTS, 10 LMGT)
              </p>
              <p>
                Pole Position: #88 Audi Sport UK Team Veloqx, Audi R8, Johnny
                Herbert(GBR), Jamie Davies(GBR), Guy Smith(GBR), 3.32,838
              </p>
              <p>
                Overall Winner: #5 Audi Sport Japan Team Goh, Audi R8, Rinaldo
                Capello(ITA), Tom Kristensen(DEN), Seiji Ara(JAP), 24:00.55,345
              </p>
              <p>
                LMGTS Winner: #64 Corvette Racing, Chevrolet Corvette C5-R,
                Oliver Gavin(GBR), Olivier Beretta(MCO), Jan Magnussen(DEN), +34
                Laps
              </p>
              <p>
                LMGT Winner: #90 White Lightning Racing, Porsche 911 GT3-RS,
                Jörg Bergmeister(DEU), Sascha Maassen(DEU), Patrick Long(USA),
                +52 Laps
              </p>
              <p>
                LMP2 Winner: #32 Intersport Racing, Lola B2K/40 - Judd, William
                Binnie(USA), Clint Field(USA), Rick Sutherland(USA), +101 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">American Le Mans at Mid-Ohio</p>
              <p>Mid-Ohio Sports Car Course, Lexington, Ohio</p>
              <p>Date: 27.06.2004</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: P1, P2, GTS, GT</p>
              <p>Circuit Length: 3.634 km</p>
              <p>Laps Completed: 124</p>
              <p>Distance Covered: 450.616 km</p>
              <p>Number of cars entered: 27 (4 P1, 5 P2, 6 GTS, 12 GT)</p>
              <p>Number of cars finished: 18 (2 P1, 3 P2, 4 GTS, 9 GT)</p>
              <p>
                Pole Position: #16 Dyson Racing, MG-Lola EX257, James
                Weaver(GBR), Butch Leitzinger(USA), 1.12,123
              </p>
              <p>
                Overall Winner: #38 ADT Champion Racing, Audi R8, Marco
                Werner(DEU), JJ Lehto(FIN), 2:45.13,916
              </p>
              <p>
                GTS Winner: #3 Corvette Racing, Chevrolet Corvette C5-R, Ron
                Fellows(CAN), Johnny O'Connell(USA), +6 Laps
              </p>
              <p>
                P2 Winner: #30 Intersport Racing, Lola B2K/40 - Judd, Clint
                Field(USA), Robin Liddell(GBR), +8 Laps
              </p>
              <p>
                GT Winner: #45 Flying Lizard Motorsports, Porsche 911 GT3-RSR,
                Johannes van Overbeek(USA), Darren Law(USA), +11 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">1000 km of the Nürburgring</p>
              <p>Nürburgring, Nürburg, Germany</p>
              <p>Date: 04.07.2004</p>
              <p>Series: LMES</p>
              <p>Race Format: 1000 km or 6 Hours</p>
              <p>Classes: LMP1, LMP2, LMGTS, LMGT</p>
              <p>Circuit Length: 5.137 km</p>
              <p>Laps Completed: 180</p>
              <p>Distance Covered: 924.660 km</p>
              <p>
                Number of cars entered: 41 (9 LMP1, 9 LMP2, 9 LMGTS, 14 LMGT)
              </p>
              <p>
                Number of cars finished: 27 (8 LMP1, 4 LMP2, 5 LMGTS, 10 LMGT)
              </p>
              <p>
                Pole Position: #3 Creation Autosportif, DBA 03S - Zytek, Nicolas
                Minassian(FRA), Jamie Campbell-Walter(GBR), 1.46,681
              </p>
              <p>
                Overall Winner: #8 Audi Sport UK Team Veloqx, Audi R8, Allan
                McNish(GBR), Pierre Kaffer(DEU), 6:00.32,645
              </p>
              <p>
                LMGTS Winner: #86 Larbre Competition, Ferrari 550-GTS Maranello,
                Christope Bouchut(FRA), Pedro Lamy(POR), Steve Zacchia(CHE), +15
                Laps
              </p>
              <p>
                LMGT Winner: #93 Cirtek Motorsport, Porsche 911 GT3-RSR, Adam
                Jones(GBR), Sascha Maassen(DEU), +19 Laps
              </p>
              <p>
                LMP2 Winner: #13 Courage Competition, Courage C65 - MG,
                Jean-Marc Gounon(FRA), Alexander Frei(CHE), Sam Hancock(GBR),
                +26 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">New England Grand Prix</p>
              <p>Lime Rock Park, Lakeville, Connecticut</p>
              <p>Date: 05.07.2004</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: P1, P2, GTS, GT</p>
              <p>Circuit Length: 2.478 km</p>
              <p>Laps Completed: 165</p>
              <p>Distance Covered: 408.870 km</p>
              <p>Number of cars entered: 27 (4 P1, 5 P2, 5 GTS, 13 GT)</p>
              <p>Number of cars finished: 20 (3 P1, 2 P2, 4 GTS, 11 GT)</p>
              <p>
                Pole Position: #16 Dyson Racing, MG-Lola EX257, James
                Weaver(GBR), Butch Leitzinger(USA), 0.47,962
              </p>
              <p>
                Overall Winner: #38 ADT Champion Racing, Audi R8, Marco
                Werner(DEU), JJ Lehto(FIN), 2:45.05,810
              </p>
              <p>
                GTS Winner: #4 Corvette Racing, Chevrolet Corvette C5-R, Oliver
                Gavin(GBR), Olivier Beretta(MCO), +5 Laps
              </p>
              <p>
                GT Winner: #35 Risi Competizione, Ferrari 360 Modena GTC, Ralf
                Kelleners(DEU), Anthony Lazzaro(USA), +10 Laps
              </p>
              <p>
                P2 Winner: #10 Miracle Motorsports, Lola B2K/40 - Nissan, Ian
                James(USA), James Gue(USA), <em>John Macaluso(USA)</em>, +14
                Laps
              </p>
            </li>
            <li>
              <p className="font-bold">Infineon Grand Prix of Sonoma</p>
              <p>Infineon Raceway, Sonoma, California</p>
              <p>Date: 18.07.2004</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: P1, P2, GTS, GT</p>
              <p>Circuit Length: 4.072 km</p>
              <p>Laps Completed: 107</p>
              <p>Distance Covered: 435.704 km</p>
              <p>Number of cars entered: 26 (4 P1, 3 P2, 7 GTS, 12 GT)</p>
              <p>Number of cars finished: 20 (3 P1, 3 P2, 4 GTS, 10 GT)</p>
              <p>
                Pole Position: #38 ADT Champion Racing, Audi R8, Marco
                Werner(DEU), JJ Lehto(FIN), 1.22,320
              </p>
              <p>
                Overall Winner: #38 ADT Champion Racing, Audi R8, Marco
                Werner(DEU), JJ Lehto(FIN), 2:45.36,109
              </p>
              <p>
                GTS Winner: #3 Corvette Racing, Chevrolet Corvette C5-R, Ron
                Fellows(CAN), Johnny O'Connell(USA), +5 Laps
              </p>
              <p>
                P2 Winner: #30 Intersport Racing, Lola B2K/40 - Judd, Jon
                Field(USA), Clint Field(USA), Robin Liddell(GBR), +5 Laps
              </p>
              <p>
                GT Winner: #23 Alex Job Racing, Porsche 911 GT3-RSR, Jörg
                Bergmeister(DEU), Timo Bernhard(DEU), +9 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">American Le Mans Portland Grand Prix</p>
              <p>Portland International Raceway, Portland, Oregon</p>
              <p>Date: 25.07.2004</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: P1, P2, GTS, GT</p>
              <p>Circuit Length: 3.129 km</p>
              <p>Laps Completed: 141</p>
              <p>Distance Covered: 441.189 km</p>
              <p>Number of cars entered: 25 (3 P1, 3 P2, 6 GTS, 13 GT)</p>
              <p>Number of cars finished: 17 (3 P1, 2 P2, 3 GTS, 9 GT)</p>
              <p>
                Pole Position: #20 Dyson Racing, MG-Lola EX257, Chris
                Dyson(USA), Andy Wallace(GBR), 1.04,750
              </p>
              <p>
                Overall Winner: #38 ADT Champion Racing, Audi R8, Marco
                Werner(DEU), JJ Lehto(FIN), 2:45.59,176
              </p>
              <p>
                GTS Winner: #3 Corvette Racing, Chevrolet Corvette C5-R, Ron
                Fellows(CAN), Johnny O'Connell(USA), +6 Laps
              </p>
              <p>
                P2 Winner: #30 Intersport Racing, Lola B2K/40 - Judd, Jon
                Field(USA), Clint Field(USA), Robin Liddell(GBR), +12 Laps
              </p>
              <p>
                GT Winner: #24 Alex Job Racing, Porsche 911 GT3-RSR, Marc
                Lieb(DEU), Romain Dumas(FRA), +13 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">Toronto Grand Prix of Mosport</p>
              <p>Mosport International Raceway, Bowmanville, Ontario</p>
              <p>Date: 08.08.2004</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: P1, P2, GTS GT</p>
              <p>Circuit Length: 3.957 km</p>
              <p>Laps Completed: 137</p>
              <p>Distance Covered: 542.109 km</p>
              <p>Number of cars entered: 25 (4 P1, 3 P2, 6 GTS, 12 GT)</p>
              <p>Number of cars finished: 20 (3 P1, 2 P2, 4 GTS, 11 GT)</p>
              <p>
                Pole Position: #16 Dyson Racing, MG-Lola EX257, James
                Weaver(GBR), Butch Leitzinger(USA), 1.07,430
              </p>
              <p>
                Overall Winner: #16 Dyson Racing, MG-Lola EX257, James
                Weaver(GBR), Butch Leitzinger(USA), 2:45.35,551
              </p>
              <p>
                GTS Winner: #4 Corvette Racing, Chevrolet Corvette C5-R, Oliver
                Gavin(GBR), Olivier Beretta(MCO), +8 Laps
              </p>
              <p>
                P2 Winner: #30 Intersport Racing, Lola B2K/40 - Judd, Clint
                Field(USA), Robin Liddell(GBR), +10 Laps
              </p>
              <p>
                GT Winner: #23 Alex Job Racing, Porsche 911 GT3-RSR, Jörg
                Bergmeister(DEU), Timo Bernhard(DEU), +17 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">Silverstone 1000 Kilometres</p>
              <p>Silverstone Circuit, Silverstone, Great Britain</p>
              <p>Date: 13.08.2004</p>
              <p>Series: LMES</p>
              <p>Race Format: 1000 km or 6 Hours</p>
              <p>Classes: LMP1, LMP2, LMGTS, LMGT</p>
              <p>Circuit Length: 5.141 km</p>
              <p>Laps Completed: 195</p>
              <p>Distance Covered: 1002.495 km</p>
              <p>
                Number of cars entered: 40 (11 LMP1, 9 LMP2, 6 LMGTS, 14 LMGT)
              </p>
              <p>
                Number of cars finished: 25 (7 LMP1, 5 LMP2, 4 LMGTS, 9 LMGT)
              </p>
              <p>
                Pole Position: #22 Zytek Engineering, Zytek 04S, Robbie
                Kerr(GBR), Chris Dyson(USA), 1.34,033
              </p>
              <p>
                Overall Winner: #8 Audi Sport UK Team Veloqx, Audi R8, Allan
                McNish(GBR), Pierre Kaffer(DEU), 5:33.37,992
              </p>
              <p>
                LMP2 Winner: #13 Courage Competition, Courage C65 - MG,
                Jean-Marc Gounon(FRA), Alexander Frei(CHE), Sam Hancock(GBR),
                +17 Laps
              </p>
              <p>
                LMGTS Winner: #86 Larbre Competition, Ferrari 550-GTS Maranello,
                Christope Bouchut(FRA), Pedro Lamy(POR), Steve Zacchia(CHE), +21
                Laps
              </p>
              <p>
                LMGT Winner: #70 JMB Racing, Ferrari 360 Modena GT, Stephane
                Daoudi(FRA), Roman Rusinov(RUS), +21 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">Road America 500</p>
              <p>Road America, Elkhart Lake, Wisconsin</p>
              <p>Date: 22.08.2004</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: P1, P2, GTS, GT</p>
              <p>Circuit Length: 6.477 km</p>
              <p>Laps Completed: 80</p>
              <p>Distance Covered: 518.160 km</p>
              <p>Number of cars entered: 22 (4 P1, 4 P2, 4 GTS, 10 GT)</p>
              <p>Number of cars finished: 16 (2 P1, 2 P2, 4 GTS, 8 GTS)</p>
              <p>
                Pole Position: #16 Dyson Racing, MG-Lola EX257, James
                Weaver(GBR), Butch Leitzinger(USA), 1.51,893
              </p>
              <p>
                Overall Winner: #38 ADT Champion Racing, Audi R8, Marco
                Werner(DEU), JJ Lehto(FIN), 2:46.24,215
              </p>
              <p>
                GTS Winner: #4 Corvette Racing, Chevrolet Corvette C5-R, Oliver
                Gavin(GBR), Olivier Beretta(MCO), +3 Laps
              </p>
              <p>
                P2 Winner: #10 Miracle Motorsports, Courage C65 - MG, Ian
                James(USA), James Gue(USA), +5 Laps
              </p>
              <p>
                GT Winner: #23 Alex Job Racing, Porsche 911 GT3-RSR, Jörg
                Bergmeister(DEU), Timo Bernhard(DEU), +7 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">1000 km of Spa</p>
              <p>Circuit de Spa-Francorchamps, Stavelot, Belgium</p>
              <p>Date: 12.09.2004</p>
              <p>Series: LMES</p>
              <p>Race Format: 1000 km or 6 Hours</p>
              <p>Classes: LMP1, LMP2, LMGTS, LMGT</p>
              <p>Circuit Length: 6.976 km</p>
              <p>Laps Completed: 144</p>
              <p>Distance Covered: 1004.544 km</p>
              <p>
                Number of cars entered: 41 (11 LMP1, 8 LMP2, 6 LMGTS, 16 LMGT)
              </p>
              <p>
                Number of cars finished: 28 (6 LMP1, 6 LMP2, 5 LMGTS, 11 LMGT)
              </p>
              <p>
                Pole Position: #3 Creation Autosportif, DBA 03S - Zytek, Nicolas
                Minassian(FRA), Jamie Campbell-Walter(GBR), 2.05,964
              </p>
              <p>
                Overall Winner: #88 Audi Sport UK Team Veloqx, Audi R8, Johnny
                Herbert(GBR), Jamie Davies(GBR), 5:58.55,262
              </p>
              <p>
                LMP2 Winner: #13 Courage Competition, Courage C65 - MG, Jonathan
                Cochet(FRA), Alexander Frei(CHE), Sam Hancock(GBR), +7 Laps
              </p>
              <p>
                LMGTS Winner: #86 Larbre Competition, Ferrari 550-GTS Maranello,
                Christope Bouchut(FRA), Pedro Lamy(POR), Steve Zacchia(CHE), +12
                Laps
              </p>
              <p>
                LMGT Winner: #85 Freisinger Motorsport, Porsche 911 GT3-RSR,
                Emmanuel Collard(FRA), Stephane Ortelli(MCO), +15 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">7th Annual Petit Le Mans</p>
              <p>Road Atlanta, Braselton, Georgia</p>
              <p>Date: 25.09.2004</p>
              <p>Series: ALMS</p>
              <p>Race Format: 1000 Miles or 10 Hours</p>
              <p>Classes: P1, P2, GTS, GT</p>
              <p>Circuit Length: 4.088 km</p>
              <p>Laps Completed: 394</p>
              <p>Distance Covered: 1610.672 km</p>
              <p>Number of cars entered: 35 (7 P1, 6 P2, 6 GTS, 16 GT)</p>
              <p>Number of cars finished: 21 (4 P1, 2 P2, 4 GTS, 11 GT)</p>
              <p>
                Pole Position: #16 Dyson Racing, MG-Lola EX257, James
                Weaver(GBR), Butch Leitzinger(USA), Andy Wallace(GBR), 1.12,136
              </p>
              <p>
                Overall Winner: #38 ADT Champion Racing, Audi R8, Marco
                Werner(DEU), JJ Lehto(FIN), 9:35.41,562
              </p>
              <p>
                GTS Winner: #4 Corvette Racing, Chevrolet Corvette C5-R, Oliver
                Gavin(GBR), Olivier Beretta(MCO), Jan Magnussen(DEN), +18 Laps
              </p>
              <p>
                P2 Winner: #30 Intersport Racing, Lola B2K/40 - Judd, Clint
                Field(USA), Robin Liddell(GBR), Milka Duno(VEN), +25 Laps
              </p>
              <p>
                GT Winner: #23 Alex Job Racing, Porsche 911 GT3-RSR, Jörg
                Bergmeister(DEU), Timo Bernhard(DEU), Sascha Maassen(DEU), +34
                Laps
              </p>
            </li>
            <li>
              <p className="font-bold">Audi Sports Car Championships</p>
              <p>Mazda Raceway Laguna Seca, Monterey, California</p>
              <p>Date: 16.10.2004</p>
              <p>Series: ALMS</p>
              <p>Race Format: 4 Hours</p>
              <p>Classes: P1, P2, GTS, GT</p>
              <p>Circuit Length: 3.602 km</p>
              <p>Laps Completed: 169</p>
              <p>Distance Covered: 608.738 km</p>
              <p>Number of cars entered: 26 (6 P1, 4 P2, 4 GTS, 12 GT)</p>
              <p>Number of cars finished: 19 (3 P1, 2 P2, 3 GTS, 11 GT)</p>
              <p>
                Pole Position: #27 Creation Autosportif, DBA 03S - Zytek,
                Nicolas Minassian(FRA), Jamie Campbell-Walter(GBR), 1.15,893
              </p>
              <p>
                Overall Winner: #2 ADT Champion Racing, Audi R8, Johnny
                Herbert(GBR), Pierre Kaffer(DEU), 4:00.51,126
              </p>
              <p>
                GTS Winner: #3 Corvette Racing, Chevrolet Corvette C5-R, Ron
                Fellows(CAN), Johnny O'Connell(USA), +9 Laps
              </p>
              <p>
                P2 Winner: #30 Intersport Racing, Lola B2K/40 - Judd, Clint
                Field(USA), Robin Liddell(GBR), Rick Sutherland(USA), +12 Laps
              </p>
              <p>
                GT Winner: #24 Alex Job Racing, Porsche 911 GT3-RSR, Marc
                Lieb(DEU), Romain Dumas(FRA), +15 Laps
              </p>
            </li>
          </ol>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h2>Season Totals</h2>
          <div>
            <p>Number of Races: 14</p>
            <p>Total Distance Covered: 16229.946 km</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h2>Misc Links</h2>
          <ul></ul>
        </div>
      </main>
    </div>
  );
}
