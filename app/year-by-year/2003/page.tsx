import Image from "next/image";

export default function ZeroThree() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full flex-col items-center justify-start lg:py-12 lg:px-16 bg-white gap-8 py-4 px-6">
        <h1>2003 Season</h1>
        <div className="flex flex-col gap-2">
          <h2>Series and Regulation News</h2>
          <ul>
            <li>
              <a
                href="https://www.autoweek.com/news/a2114431/new-events-mexico-europe-highlight-2003-alms-schedule/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ALMS revealed the new calendar for 2003
              </a>{" "}
              with a new race in Mexico City, as well as a planned race in
              Europe in May. However the European race was soon{" "}
              <a
                href="https://au.motorsport.com/alms/news/2003-schedule-finalized/1011711/"
                target="_blank"
                rel="noopener noreferrer"
              >
                abandoned after a suitable venue couldn't be agreed on
              </a>
              . The format of the Road America race was also changed from 500
              Miles to the standard 2h 45min.
            </li>
            <li>
              Meanwhile, two years on from the failed ELMS, ACO tried again to
              plan its own sportscar championship in Europe. To prepare for
              this, it set up another experimental race at La Sarthe to check
              the interest before committing to the new Le Mans Endurance Series
              in 2004.
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2>Manufacturer News</h2>
          <ul>
            <li>
              Audi pulled out of sportscar racing after 2002 as a works team,
              however the cars kept racing for privateer teams.{" "}
              <a
                href="https://web.archive.org/web/20030724235027/http:/www.imsaracing.net/imsa.cfm?h=/2003/news/header.htm&p=/2003/news/020503b.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Joest Racing
              </a>{" "}
              and Champion Racing contested ALMS, With Champion Racing joining
              Audi Sport Team UK and the Japanese Team Goh at Le Mans.
            </li>
            <li>
              Panoz also pulled out as a factory team,{" "}
              <a
                href="https://web.archive.org/web/20030724235820/http:/www.imsaracing.net/imsa.cfm?h=/2003/news/header.htm&p=/2003/news/020703b.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                with its two LMP01s racing under the JML Team Panoz banner
              </a>{" "}
              in both ALMS and Le Mans, however the ageing cars struggled for
              pace.
            </li>
            <li>
              Bentley debuted a new car, the Speed 8, contesting the 12h of
              Sebring for the first time as well as Le Mans. For the 3rd season
              the running of the program was split between Racing Team Norfolk
              which had operated the cars previously, and Joest Racing who was
              also working with Audi.
            </li>
            <li>
              After its most successful year of the program, Cadillac elected
              not to extend the project, and did not return to sportscar racing
              in 2003.
            </li>
            <li>
              MG too did not continue into 2003, following financial strain on
              the company after two years where none of their cars reached the
              finish. However the car lived on in the hands of privateers across
              the world.
            </li>
            <li>
              Riley continued its partnership with Jim Matthews Racing,
              competing at Sebring and Le Mans while Riley started working on
              new projects.
            </li>
            <li>
              Courage continued into 2003, racing its C60 against Pescarolo's
              now upgraded C60 Evo whilst also developing the C65 which debuted
              at Le Mans in the LMP675 class.
            </li>
            <li>
              Lister produced its first prototype for 2003, but for the first
              year chose to focus on Le Mans where the car made its debut,
              before entering the 1000 km race at Le Mans at the end of the
              year.
            </li>
            <li>
              Having run a GMS-designed car in the FIA Sportscar Championship
              since 2000, for 2003 Automotive Durango constructed their own car.
              The PM02 again competed in the FIA Sportscar Championship, but
              this year the team also went to Le Mans for the first time.
            </li>
            <li>
              For 2003 Ascari moved its focus back to Europe, competing in the
              FIA Sportscar Championship, but they didn't return to Le Mans or
              ALMS and the program ended following the 2003 season.
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
                  <td rowSpan={3}>
                    <strong>Infineon Team Joest</strong>
                  </td>
                  <td rowSpan={3}>Audi R8</td>
                  <td rowSpan={3}>1</td>
                  <td>Frank Biela(DEU)</td>
                  <td>
                    Sebring, Road Atlanta, Sonoma, Trois-Rivieres, Mosport, Road
                    America, Laguna Seca, Miami, Petit Le Mans
                  </td>
                </tr>
                <tr>
                  <td>Marco Werner(DEU)</td>
                  <td>
                    Sebring, Road Atlanta, Sonoma, Trois-Rivieres, Mosport, Road
                    America, Laguna Seca, Miami, Petit Le Mans
                  </td>
                </tr>
                <tr>
                  <td>Philipp Peter(AUT)</td>
                  <td>Sebring</td>
                </tr>
                <tr>
                  <td rowSpan={7}>
                    <strong>ADT Champion Racing</strong>
                  </td>
                  <td rowSpan={7}>Audi R8</td>
                  <td rowSpan={4}>38</td>
                  <td>JJ Lehto(FIN)</td>
                  <td>
                    Sebring, Road Atlanta, Sonoma, Trois-Rivieres, Mosport, Road
                    America, Laguna Seca, Miami, Petit Le Mans
                  </td>
                </tr>
                <tr>
                  <td>Emanuele Pirro(ITA)</td>
                  <td>Sebring</td>
                </tr>
                <tr>
                  <td>Stefan Johansson(SWE)</td>
                  <td>
                    Sebring, <em>Petit Le Mans</em>
                  </td>
                </tr>
                <tr>
                  <td>Johnny Herbert(GBR)</td>
                  <td>
                    Road Atlanta, Sonoma, Trois-Rivieres, Mosport, Road America,
                    Laguna Seca, Miami, Petit Le Mans
                  </td>
                </tr>
                <tr>
                  <td rowSpan={3}>6</td>
                  <td>JJ Lehto(FIN)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Emanuele Pirro(ITA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Stefan Johansson(SWE)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={4}>
                    <strong>Audi Sport Japan Team Goh</strong>
                  </td>
                  <td rowSpan={4}>Audi R8</td>
                  <td rowSpan={4}>5</td>
                  <td>Seiji Ara(JAP)</td>
                  <td>Le Mans, LM1000k</td>
                </tr>
                <tr>
                  <td>Jan Magnussen(DEN)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Marco Werner(DEU)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Tom Kristensen(DEN)</td>
                  <td>LM1000k</td>
                </tr>
                <tr>
                  <td rowSpan={3}>
                    <strong>Audi Sport UK</strong>
                  </td>
                  <td rowSpan={3}>Audi R8</td>
                  <td rowSpan={3}>10</td>
                  <td>Frank Biela(DEU)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Perry McCarthy(GBR)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Mika Salo(FIN)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={16}>
                    <strong>JML Team Panoz</strong>
                  </td>
                  <td rowSpan={14}>Panoz LMP01</td>
                  <td rowSpan={4}>10</td>
                  <td>Olivier Beretta(MCO)</td>
                  <td>
                    Sebring, Road Atlanta, Sonoma, Trois-Rivieres, Mosport, Road
                    America, Laguna Seca, Miami, Petit Le Mans
                  </td>
                </tr>
                <tr>
                  <td>Max Papis(ITA)</td>
                  <td>Sebring, Road Atlanta, Petit Le Mans</td>
                </tr>
                <tr>
                  <td>Gunnar Jeanette(USA)</td>
                  <td>Sebring, Sonoma</td>
                </tr>
                <tr>
                  <td>David Saelens(BEL)</td>
                  <td>
                    Trois Rivieres, Mosport, Road America, Laguna Seca, Miami,
                    Petit Le Mans
                  </td>
                </tr>
                <tr>
                  <td rowSpan={7}>11</td>
                  <td>Scott Maxwell(CAN)</td>
                  <td>
                    Sebring, Trois-Rivieres, Mosport, Miami, Petit Le Mans
                  </td>
                </tr>
                <tr>
                  <td>John Graham(CAN)</td>
                  <td>Sebring</td>
                </tr>
                <tr>
                  <td>Benjamin Leuenberger(CHE)</td>
                  <td>
                    Sebring, Sonoma, Road America, <em>Laguna Seca</em>, Petit
                    Le Mans
                  </td>
                </tr>
                <tr>
                  <td>Olivier Beretta(MCO)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Gunnar Jeanette(USA)</td>
                  <td>
                    Le Mans, Road Atlanta, Trois Rivieres, Mosport, Road
                    America, <em>Laguna Seca</em>, Miami, Petit Le Mans
                  </td>
                </tr>
                <tr>
                  <td>Max Papis(ITA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>David Saelens(BEL)</td>
                  <td>Road Atlanta, Sonoma</td>
                </tr>
                <tr>
                  <td rowSpan={3}>12</td>
                  <td>Scott Maxwell(CAN)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>David Saelens(BEL)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Benjamin Leuenberger(CHE)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={2}>Panoz Esperante GTR-1</td>
                  <td rowSpan={2}>10</td>
                  <td>Olivier Beretta(MCO)</td>
                  <td>LM1000k</td>
                </tr>
                <tr>
                  <td>David Saelens(BEL)</td>
                  <td>LM1000k</td>
                </tr>
                <tr>
                  <td rowSpan={6}>
                    <strong>Team Bentley</strong>
                  </td>
                  <td rowSpan={6}>Bentley Speed 8</td>
                  <td rowSpan={3}>7</td>
                  <td>Rinaldo Capello(ITA)</td>
                  <td>Sebring, Le Mans</td>
                </tr>
                <tr>
                  <td>Tom Kristensen(DEN)</td>
                  <td>Sebring, Le Mans</td>
                </tr>
                <tr>
                  <td>Guy Smith(GBR)</td>
                  <td>Sebring, Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={3}>8</td>
                  <td>Johnny Herbert(GBR)</td>
                  <td>Sebring, Le Mans</td>
                </tr>
                <tr>
                  <td>Mark Blundell(GBR)</td>
                  <td>Sebring, Le Mans</td>
                </tr>
                <tr>
                  <td>David Brabham(AUS)</td>
                  <td>Sebring, Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={6}>
                    <strong>Riley & Scott Racing</strong>
                  </td>
                  <td rowSpan={6}>Riley & Scott MK III C</td>
                  <td rowSpan={3}>36</td>
                  <td>Marc Goosens(BEL)</td>
                  <td>Sebring</td>
                </tr>
                <tr>
                  <td>Jan Magnussen(DEN)</td>
                  <td>Sebring</td>
                </tr>
                <tr>
                  <td>Jim Matthews(USA)</td>
                  <td>Sebring</td>
                </tr>
                <tr>
                  <td rowSpan={3}>4</td>
                  <td>Marc Goosens(BEL)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Christophe Tinseau(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Jim Matthews(USA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={3}>
                    <strong>Courage Competition</strong>
                  </td>
                  <td rowSpan={3}>Courage C60</td>
                  <td rowSpan={3}>13</td>
                  <td>Jean-Marc Gounon(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Jonathan Cochet(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Stephan Gregoire(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={6}>
                    <strong>Lister Racing</strong>
                  </td>
                  <td rowSpan={6}>Lister Storm LMP</td>
                  <td rowSpan={3}>20</td>
                  <td>Jamie Campbell-Walter(GBR)</td>
                  <td>
                    <em>Le Mans</em>
                  </td>
                </tr>
                <tr>
                  <td>Nathan Kinch(GBR)</td>
                  <td>
                    <em>Le Mans</em>
                  </td>
                </tr>
                <tr>
                  <td>Vincent Vosse(BEL)</td>
                  <td>
                    <em>Le Mans</em>
                  </td>
                </tr>
                <tr>
                  <td rowSpan={3}>4</td>
                  <td>Jamie Campbell-Walter(GBR)</td>
                  <td>LM1000k</td>
                </tr>
                <tr>
                  <td>Nathan Kinch(GBR)</td>
                  <td>LM1000k</td>
                </tr>
                <tr>
                  <td>Tom Coronel(NED)</td>
                  <td>LM1000k</td>
                </tr>
                <tr>
                  <td rowSpan={3}>
                    <strong>Automotive Durango SRL</strong>
                  </td>
                  <td rowSpan={3}>Durango PM02</td>
                  <td rowSpan={3}>19</td>
                  <td>Michele Rugolo(ITA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Sylvain Boulay(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Jean-Bernard Bouvet(FRA)</td>
                  <td>Le Mans</td>
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
                51st Annual Mobil 1 12 Hours of Sebring
              </p>
              <p>Sebring International Raceway, Sebring, Florida</p>
              <p>Date: 15.03.2003</p>
              <p>Series: ALMS</p>
              <p>Race Format: 12 Hours</p>
              <p>Classes: LMP900, LMGTP, LMP675, GTS, GT</p>
              <p>Circuit Length: 6.019 km</p>
              <p>Laps Completed: 367</p>
              <p>Distance Covered: 2208.973 km</p>
              <p>
                Number of cars entered: 56 (13 LMP900, 2 LMGTP, 6 LMP675, 9 GTS,
                26 GT)
              </p>
              <p>
                Number of cars finished: 27 (8 LMP900, 2 LMGTP, 2 LMP675, 2 GTS,
                13 GT)
              </p>
              <p>
                Pole Position: #1 Infineon Team Joest, Audi R8, Marco
                Werner(DEU), Frank Biela(DEU), Philipp Peter(AUT), 1.48,826
              </p>
              <p>
                Overall Winner: #1 Infineon Team Joest, Audi R8, Marco
                Werner(DEU), Frank Biela(DEU), Philipp Peter(AUT), 12:00.23,360
              </p>
              <p>
                GTS Winner: #3 Corvette Racing, Chevrolet Corvette C5-R, Ron
                Fellows(CAN), Johnny O'Connell(USA), Franck Freon(FRA), +35 Laps
              </p>
              <p>
                GT Winner: #23 Alex Job Racing, Porsche 911 GT3-RS, Lucas
                Luhr(DEU), Sascha Maassen(DEU), +47 Laps
              </p>
              <p>
                LMP675 Winner: #20 Dyson Racing, MG-Lola EX257, Chris
                Dyson(USA), Chad Block(USA), Didier de Radigues(BEL), +61 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">Grand Prix of Mexico</p>
              <p>Autodromo Hermanos Rodriguez, Mexico City, Mexico</p>
              <p>Date: 06.04.2003</p>
              <p>Series: ALMS</p>
              <p>Race Format: 6 Hours</p>
              <p>Classes: LMP900, LMP675, GTS, GT</p>
              <p>Circuit Length: 4.484 km</p>
              <p>Laps Completed: 0</p>
              <p>Distance Covered: - km</p>
              <p>
                Race{" "}
                <a
                  href="https://web.archive.org/web/20030707204645/http:/www.imsaracing.net/imsa.cfm?h=/2003/news/header.htm&p=/2003/news/030703f.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  cancelled by the organizer
                </a>{" "}
                due to multiple issues surrounding the planned event
              </p>
            </li>
            <li>
              <p className="font-bold">
                71<sup>e</sup> 24 Heures du Mans
              </p>
              <p>Circuit de la Sarthe, Le Mans, France</p>
              <p>Date: 14-15.06.2003</p>
              <p>Series: Standalone event</p>
              <p>Race Format: 24 Hours</p>
              <p>Classes: LMP900, LMGTP, LMP675, LMGTS, LMGT</p>
              <p>Circuit Length: 13.650 km</p>
              <p>Laps Completed: 377</p>
              <p>Distance Covered: 5146.050 km</p>
              <p>
                Number of cars entered: 50 (16 LMP900, 2 LMGTP, 7 LMP675, 10
                LMGTS, 15 LMGT)
              </p>
              <p>
                Number of cars finished: 27 (9 LMP900, 2 LMGTP, 2 LMP675, 5
                LMGTS, 9 LMGT)
              </p>
              <p>
                Pole Position: #7 Team Bentley, Bentley Speed 8, Rinaldo
                Capello(ITA), Tom Kristensen(DEN), Guy Smith(GBR), 3.32,843
              </p>
              <p>
                Overall Winner: #7 Team Bentley, Bentley Speed 8, Rinaldo
                Capello(ITA), Tom Kristensen(DEN), Guy Smith(GBR), 24:00.40,928
              </p>
              <p>
                LMP900 Winner: #6 Champion Racing, Audi R8, JJ Lehto(FIN),
                Emanuele Pirro(ITA), Stefan Johansson(SWE), +5 Laps
              </p>
              <p>
                LMGTS Winner: #88 Veloqx Prodrive Racing, Ferrari 550-GTS
                Maranello, Tomas Enge(CZE), Peter Kox(NED), Jamie Davies(GBR),
                +41 Laps
              </p>
              <p>
                LMGT Winner: #93 Alex Job Racing/Peterson Motorsports, Porsche
                911 GT3-RS, Sascha Maassen(DEU), Lucas Luhr(DEU), Emmanuel
                Collard(FRA), +57 Laps
              </p>
              <p>
                LMP675 Winner: #29 Noël de Bello Racing, Reynard 2KQ-LM -
                Volkswagen, Jean-Luc Maury-Laribiere(FRA), Christophe
                Pillon(CHE), Didier Andre(FRA), +58 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">Cadillac Grand Prix of Washington D.C</p>
              <p>RFK Memorial Stadium Circuit, D.C</p>
              <p>Date: 29.06.2003</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: LMP900, LMP675, GTS, GT</p>
              <p>Circuit Length: 2.673 km</p>
              <p>Laps Completed: 0</p>
              <p>Distance Covered: - km</p>
              <p>
                Race{" "}
                <a
                  href="https://web.archive.org/web/20030707204645/http:/www.imsaracing.net/imsa.cfm?h=/2003/news/header.htm&p=/2003/news/030703f.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  cancelled due to operational problems for the organizer
                </a>
                , with{" "}
                <a
                  href="https://web.archive.org/web/20030818103947/http:/www.imsaracing.net/imsa.cfm?h=/2003/news/header.htm&p=/2003/news/031403f.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Road Atlanta announced as a replacement
                </a>{" "}
                a week later.
              </p>
            </li>
            <li>
              <p className="font-bold">Chevy Grand Prix of Atlanta</p>
              <p>Road Atlanta, Braselton, Georgia</p>
              <p>Date: 29.06.2003</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: LMP900, LMP675, GTS, GT</p>
              <p>Circuit Length: 4.088 km</p>
              <p>Laps Completed: 128</p>
              <p>Distance Covered: 523.264 km</p>
              <p>
                Number of cars entered: 36 (7 LMP900, 7 LMP675, 6 GTS, 16 GT)
              </p>
              <p>
                Number of cars finished: 28 (6 LMP900, 5 LMP675, 5 GTS, 12 GT)
              </p>
              <p>
                Pole Position: #16 Dyson Racing, MG-Lola EX257, James
                Weaver(GBR), Butch Leitzinger(USA), 1.13,748
              </p>
              <p>
                Overall Winner: #38 ADT Champion Racing, Audi R8, Johnny
                Herbert(GBR), JJ Lehto(FIN), 2:45.30,731
              </p>
              <p>
                LMP675 Winner: #37 Intersport Racing, MG-Lola EX257, Jon
                Field(USA), Duncan Dayton(USA), +2 Laps
              </p>
              <p>
                GTS Winner: #4 Corvette Racing, Chevrolet Corvette C5-R, Kelly
                Collins(USA), Oliver Gavin(GBR), +10 Laps
              </p>
              <p>
                GT Winner: #24 Alex Job Racing, Porsche 911 GT3-RS, Jörg
                Bergmeister(DEU), Timo Bernhard(DEU), +15 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">Infineon Grand Prix of Sonoma</p>
              <p>Infineon Raceway, Sonoma, California</p>
              <p>Date: 27.07.2003</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: LMP900, LMP675, GTS, GT</p>
              <p>Circuit Length: 4.072 km</p>
              <p>Laps Completed: 102</p>
              <p>Distance Covered: 415.344 km</p>
              <p>
                Number of cars entered: 36 (7 LMP900, 5 LMP675, 6 GTS, 18 GT)
              </p>
              <p>
                Number of cars finished: 28 (6 LMP900, 3 LMP675, 5 GTS, 14 GT)
              </p>
              <p>
                Pole Position: #16 Dyson Racing, MG-Lola EX257, James
                Weaver(GBR), Butch Leitzinger(USA), 1.23,085
              </p>
              <p>
                Overall Winner: #16 Dyson Racing, MG-Lola EX257, James
                Weaver(GBR), Butch Leitzinger(USA), 2:45.57,739
              </p>
              <p>
                LMP900 Winner: #1 Infineon Team Joest, Audi R8, Marco
                Werner(DEU), Frank Biela(DEU), +3,708
              </p>
              <p>
                GTS Winner: #3 Corvette Racing, Chevrolet Corvette C5-R, Ron
                Fellows(CAN), Johnny O'Connell(USA), +5 Laps
              </p>
              <p>
                GT Winner: #23 Alex Job Racing, Porsche 911 GT3-RS, Lucas
                Luhr(DEU), Sascha Maassen(DEU), +9 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">Le Grand Prix de Trois-Rivieres</p>
              <p>Circuit Trois-Rivieres, Trois-Rivieres, Quebec</p>
              <p>Date: 03.08.2003</p>
              <p>Series: ALMS</p>
              <p>Race Format: 3 Hours</p>
              <p>Classes: LMP900, LMP675, GTS, GT</p>
              <p>Circuit Length: 2.448 km</p>
              <p>Laps Completed: 169</p>
              <p>Distance Covered: 413.712 km</p>
              <p>
                Number of cars entered: 31 (6 LMP900, 5 LMP675, 5 GTS, 15 GT)
              </p>
              <p>
                Number of cars finished: 20 (6 LMP900, 2 LMP675, 4 GTS, 8 GT)
              </p>
              <p>
                Pole Position: #1 Infineon Team Joest, Audi R8, Marco
                Werner(DEU), Frank Biela(DEU), 0.57,740
              </p>
              <p>
                Overall Winner: #1 Infineon Team Joest, Audi R8, Marco
                Werner(DEU), Frank Biela(DEU), 3:00.06,726
              </p>
              <p>
                GTS Winner: #4 Corvette Racing, Chevrolet Corvette C5-R, Kelly
                Collins(USA), Oliver Gavin(GBR), +7 Laps
              </p>
              <p>
                GT Winner: #23 Alex Job Racing, Porsche 911 GT3-RS, Lucas
                Luhr(DEU), Sascha Maassen(DEU), +13 Laps
              </p>
              <p>
                LMP675 Winner: #37 Intersport Racing, MG-Lola EX257, Jon
                Field(USA), Duncan Dayton(USA), +15 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">Toronto Grand Prix of Mosport</p>
              <p>Mosport International Raceway, Bowmanville, Ontario</p>
              <p>Date: 17.08.2003</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: LMP900, LMP675, GTS, GT</p>
              <p>Circuit Length: 3.957 km</p>
              <p>Laps Completed: 116</p>
              <p>Distance Covered: 459.012 km</p>
              <p>
                Number of cars entered: 33 (6 LMP900, 5 LMP675, 7 GTS, 15 GT)
              </p>
              <p>
                Number of cars finished: 25 (3 LMP900, 4 LMP675, 5 GTS, 13 GT)
              </p>
              <p>
                Pole Position: #16 Dyson Racing, MG-Lola EX257, James
                Weaver(GBR), Butch Leitzinger(USA), 1.07,906
              </p>
              <p>
                Overall Winner: #1 Infineon Team Joest, Audi R8, Marco
                Werner(DEU), Frank Biela(DEU), 2:45.44,079
              </p>
              <p>
                LMP675 Winner: #20 Dyson Racing, MG-Lola EX257, Chris
                Dyson(USA), Andy Wallace(GBR), +2 Laps
              </p>
              <p>
                GTS Winner: #3 Corvette Racing, Chevrolet Corvette C5-R, Ron
                Fellows(CAN), Johnny O'Connell(USA), +4 Laps
              </p>
              <p>
                GT Winner: #24 Alex Job Racing, Porsche 911 GT3-RS, Jörg
                Bergmeister(DEU), Timo Bernhard(DEU), +10 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">Road America 500</p>
              <p>Road America, Elkhart Lake, Wisconsin</p>
              <p>Date: 24.08.2003</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: LMP900, LMP675, GTS, GT</p>
              <p>Circuit Length: 6.477 km</p>
              <p>Laps Completed: 79</p>
              <p>Distance Covered: 511.683 km</p>
              <p>
                Number of cars entered: 37 (6 LMP900, 6 LMP675, 8 GTS, 17 GT)
              </p>
              <p>
                Number of cars finished: 29 (6 LMP900, 5 LMP675, 7 GTS, 11 GT)
              </p>
              <p>
                Pole Position: #1 Infineon Team Joest, Audi R8, Marco
                Werner(DEU), Frank Biela(DEU), 1.52,265
              </p>
              <p>
                Overall Winner: #38 ADT Champion Racing, Audi R8, Johnny
                Herbert(GBR), JJ Lehto(FIN), 2:46.21,273
              </p>
              <p>
                LMP675 Winner: #20 Dyson Racing, MG-Lola EX257, Chris
                Dyson(USA), Andy Wallace(GBR), +1 Lap
              </p>
              <p>
                GTS Winner: #80 Prodrive, Ferrari 550-GTS Maranello, David
                Brabham(AUS), Jan Magnussen(DEN), +4 Laps
              </p>
              <p>
                GT Winner: #31 Petersen Motorsports, Porsche 911 GT3-RS, Craig
                Stanton(USA), Johnny Mowlem(GBR), <em>Michael Petersen(USA)</em>
                , +7 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">
                Fry's Electronics Sports Car Championships
              </p>
              <p>Mazda Raceway Laguna Seca, Monterey, California</p>
              <p>Date: 07.09.2003</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: LMP900, LMP675, GTS, GT</p>
              <p>Circuit Length: 3.602 km</p>
              <p>Laps Completed: 120</p>
              <p>Distance Covered: 432.240 km</p>
              <p>
                Number of cars entered: 35 (6 LMP900, 5 LMP675, 6 GTS, 18 GT)
              </p>
              <p>
                Number of cars finished: 27 (5 LMP900, 3 LMP675, 5 GTS, 14 GT)
              </p>
              <p>
                Pole Position: #1 Infineon Team Joest, Audi R8, Marco
                Werner(DEU), Frank Biela(DEU), 1.16,224
              </p>
              <p>
                Overall Winner: #1 Infineon Team Joest, Audi R8, Marco
                Werner(DEU), Frank Biela(DEU), 2:45.30,373
              </p>
              <p>
                LMP675 Winner: #16 Dyson Racing, MG-Lola EX257, James
                Weaver(GBR), Butch Leitzinger(USA), +1.22,283
              </p>
              <p>
                GTS Winner: #80 Prodrive, Ferrari 550-GTS Maranello, David
                Brabham(AUS), Jan Magnussen(DEN), +7 Laps
              </p>
              <p>
                GT Winner: #23 Alex Job Racing, Porsche 911 GT3-RS, Lucas
                Luhr(DEU), Sascha Maassen(DEU), +12 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">Grand Prix Americas</p>
              <p>Bayfront Park Street Circuit, Miami, Florida</p>
              <p>Date: 27.09.2003</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: LMP900, LMP675, GTS, GT</p>
              <p>Circuit Length: 1.851 km</p>
              <p>Laps Completed: 157</p>
              <p>Distance Covered: 290.607 km</p>
              <p>
                Number of cars entered: 37 (6 LMP900, 5 LMP675, 7 GTS, 19 GT)
              </p>
              <p>
                Number of cars finished: 24 (5 LMP900, 4 LMP675, 4 GTS, 11 GT)
              </p>
              <p>
                Pole Position: #38 ADT Champion Racing, Audi R8, Johnny
                Herbert(GBR), JJ Lehto(FIN), 0.47,848
              </p>
              <p>
                Overall Winner: #38 ADT Champion Racing, Audi R8, Johnny
                Herbert(GBR), JJ Lehto(FIN), 2:42.06,617
              </p>
              <p>
                GTS Winner: #80 Prodrive, Ferrari 550-GTS Maranello, David
                Brabham(AUS), Darren Turner(GBR), +3 Laps
              </p>
              <p>
                LMP675 Winner: #20 Dyson Racing, MG-Lola EX257, Chris
                Dyson(USA), Andy Wallace(GBR), +5 Laps
              </p>
              <p>
                GT Winner: #23 Alex Job Racing, Porsche 911 GT3-RS, Lucas
                Luhr(DEU), Sascha Maassen(DEU), +6 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">6th Annual Petit Le Mans</p>
              <p>Road Atlanta, Braselton, Georgia</p>
              <p>Date: 18.10.2003</p>
              <p>Series: ALMS</p>
              <p>Race Format: 1000 Miles or 10 Hours</p>
              <p>Classes: LMP900, LMP675, GTS, GT</p>
              <p>Circuit Length: 4.088 km</p>
              <p>Laps Completed: 394</p>
              <p>Distance Covered: 1610.672 km</p>
              <p>
                Number of cars entered: 37 (6 LMP900, 6 LMP675, 7 GTS, 18 GT)
              </p>
              <p>
                Number of cars finished: 24 (5 LMP900, 3 LMP675, 5 GTS, 11 GT)
              </p>
              <p>
                Pole Position: #1 Infineon Team Joest, Audi R8, Marco
                Werner(DEU), Frank Biela(DEU), 1.11,738
              </p>
              <p>
                Overall Winner: #38 ADT Champion Racing, Audi R8, Johnny
                Herbert(GBR), JJ Lehto(FIN), <em>Stefan Johansson(SWE)</em>,
                9:31.10,608
              </p>
              <p>
                GTS Winner: #88 Prodrive, Ferrari 550-GTS Maranello, Tomas
                Enge(CZE), Peter Kox(NED), Alain Menu(CHE), +19 Laps
              </p>
              <p>
                GT Winner: #24 Alex Job Racing, Porsche 911 GT3-RS, Jörg
                Bergmeister(DEU), Timo Bernhard(DEU), Romain Dumas(FRA), +34
                Laps
              </p>
              <p>
                LMP675 Winner: #37 Intersport Racing, Lola B01/60 - Judd, Jon
                Field(USA), Duncan Dayton(USA), Larry Connor(USA), +37 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">1000 km of Le Mans</p>
              <p>Circuit de La Sarthe, Le Mans, France</p>
              <p>Date: 09.11.2003</p>
              <p>Series: LMES Non-championship</p>
              <p>Race Format: 1000 km or 6 Hours</p>
              <p>Classes: LMP900, LMGTP, LMP675, LMGTS, LMGT</p>
              <p>Circuit Length: 4.180 km</p>
              <p>Laps Completed: 208</p>
              <p>Distance Covered: 869.440 km</p>
              <p>
                Number of cars entered: 37 (8 LMP900, 1 LMGTP, 7 LMP675, 4
                LMGTS, 17 LMGT)
              </p>
              <p>
                Number of cars finished: 29 (6 LMP900, 0 LMGTP, 5 LMP675, 4
                LMGTS, 14 LMGT)
              </p>
              <p>
                Pole Position: #5 Audi Sport Japan Team Goh, Audi R8, Tom
                Kristensen(DEN), Seiji Ara(JAP), 1.27,775
              </p>
              <p>
                Overall Winner: #5 Audi Sport Japan Team Goh, Audi R8, Tom
                Kristensen(DEN), Seiji Ara(JAP), 5:59.53,245
              </p>
              <p>
                LMP675 Winner: #13 Courage Competition, Courage C65 - JPX, Wim
                Eyckmans(BEL), Roman Rusinov(RUS), Enrico Muscioni(ITA), +11
                Laps
              </p>
              <p>
                LMGTS Winner: #88 Care Racing, Ferrari 550-GTS Maranello, Jamie
                Davis(GBR), Darren Turner(GBR), <em>Peter Kox(NED)</em>, +13
                Laps
              </p>
              <p>
                LMGT Winner: #47 Cirtek Motorsport, Ferrari 360 Modena GTC,
                Philipp Peter(AUT), Klaus Engelhorn(AUT), Andrea
                Montermini(ITA), +19 Laps
              </p>
            </li>
          </ol>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h2>Season Totals</h2>
          <div>
            <p>Number of Races: 11</p>
            <p>Total Distance Covered: 12880.997 km</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h2>Misc Links</h2>
          <ul>
            <li>
              <a
                href="https://web.archive.org/web/20030429193432/http:/www.imsaracing.net/imsa.cfm?h=/2003/news/header.htm&p=/2003/news/031303t.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Both Bentleys excluded from Sebring qualifying
              </a>
            </li>
            <li>
              <a
                href="https://web.archive.org/web/20031117033216/http:/www.imsaracing.net/imsaNS.cfm?h=/2003/news/header.htm&p=/2003/news/6-282003164513ALMS.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Road Atlanta qualifying rained out
              </a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
