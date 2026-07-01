import Image from "next/image";

export default function ZeroTwo() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full flex-col items-center justify-start lg:py-12 lg:px-16 bg-white gap-8 py-4 px-6">
        <h1>2002 Season</h1>
        <div className="flex flex-col gap-2">
          <h2>Series and Regulation News</h2>
          <ul>
            <li>
              At the end of 2001 the ALMS organizer changed its name from
              Professional Sports Car Racing to{" "}
              <a
                href="https://web.archive.org/web/20011113025726fw_/http://www.professionalsportscar.com/news/100501d.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                bring back the famous IMSA name
              </a>{" "}
              it had held previously, until a change of ownership in 1997.
            </li>
            <li>
              The ALMS{" "}
              <a
                href="https://web.archive.org/web/20011113025726fw_/http://www.professionalsportscar.com/news/100501e.htm"
                target="_blank"
              >
                announced an expanded calendar
              </a>
              , with new events at Road America, Washington D.C., Trois-Rivieres
              and Miami, and a move away from rovals that had been on the
              calendar in the previous years. The calendar was initially
              announced with longer races running to at least 3-4 hours, however
              most events were reverted back to the normal 2h 45min format after{" "}
              <a
                href="https://web.archive.org/web/20020306220253/http://www.professionalsportscar.com/main.cfm?contents=/series/alms/contents.cfm&banner=/2001_sc_header.cfm&header=/imsa_header.htm&page=/2002/news/news02/010802b.cfm"
                target="_blank"
              >
                input from TV broadcasters
              </a>
              .
            </li>
            <li>
              After completing the final races of the ELMS season in 2001 with
              as few as 14 cars on the grid, the 2002 season was{" "}
              <a
                href="http://web.archive.org/web/20020209083424/http://www.autosport.com/newsitem.cfm?id=17522&series=12"
                target="_blank"
              >
                cancelled in december
              </a>{" "}
              citing the lack of entrants and the unstable nature of the world
              following the events of 11th of September. Part of the problem was
              that the ELMS were competing with similar cars to the FIA
              Sportscar and GT championships, but they had to be modified to
              compete in the ELMS. That meant few teams chose to compete due to
              the resources necessary and the impracticality of competing across
              the different series.
            </li>
            <li>
              With the planned debut of the APLMS in 2001 hitting trouble with
              both its first two rounds cancelled for various reasons, the
              series were abandoned due to lack of interest and also the
              difficulties with the global situation. The event in Malaysia was
              rescheduled for 2002, and when the series was abandoned it became
              an ALMS invitational event.
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2>Manufacturer News</h2>
          <ul>
            <li>
              Audi rolled out another new iteration of the R8, with some minor
              aerodynamic updates. The factory team continued with a full ALMS
              season combined with its regular Le Mans Effort. Audis also
              continued racing in privateer hands, with Champion Racing also
              taking on the ALMS season.
            </li>
            <li>
              Panoz also continued their programs, debuting the LMP01 Evo, an
              updated version of the LMP-1 Roadster-S following the previous
              year's flawed LMP07. Panoz' also competed in the hands of
              privateer teams, of note MBD who used the discarded LMP07s fitted
              with Mugen engines.
            </li>
            <li>
              Cadillac continued their program racing at Le Mans as well as a
              partial ALMS season, debuting their new Northstar LMP02 with an
              all new chassis, after abandoning their previous iteration of the
              Riley & Scott chassis. The manufacturer also cut the ties to DAMS,
              running the car exclusively under the Team Cadillac banner.
            </li>
            <li>
              Bentley returned to Le Mans with the EXP Speed 8, now with an
              upgraded 4.0L engine in place of the 3.6L Audi unit from 2001. The
              team also started work on a brand new car for 2003.
            </li>
            <li>
              After unreliability plagued the effort in 2001, MG returned to Le
              Mans with a modified car to improve durability. The team also
              started selling the car to customers, racing both in ALMS and Le
              Mans.
            </li>
            <li>
              Ascari shipped their cars over to the US and renamed it the KZR-1,
              competing in selected races like the Rolex 24 at Daytona and
              Sebring, before competing in Le Mans. The team also intended to
              race in Washington DC, but never made it there.
            </li>
            <li>
              After finishing the project with Cadillac, Riley & Scott launced a
              new version of the MK III in 2001, and offered it to customers for
              the first year. After the bankruptcy by Reynard who owned R&S, the
              project was taked over by Riley Technologies and for 2002 the
              factory team was relaunced together with Jim Matthews Racing. They
              debuted at Sebring before contesting Le Mans and finishing the
              season with the two last ALMS rounds.
            </li>
            <li>
              After building the C60 in 2000, for 2002 Courage too joined as a
              factory team, competing in the FIA Sportscar Championship and Le
              Mans, whilst also supporting its customer Pescarolo.
            </li>
            <li>
              After joining the prototype field in 2001 Chrysler changed their
              mind after the season and withdrew from sportscars. Dallara took
              over the cars and sold them to customers, with Oreca continuing as
              a privateer.
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
                    <strong>Audi Sport North America</strong>
                  </td>
                  <td rowSpan={8}>Audi R8</td>
                  <td rowSpan={4}>1</td>
                  <td>Frank Biela(DEU)</td>
                  <td>
                    Sebring, Sonoma, Mid-Ohio, Road America, Washington DC,
                    Trois-Rivieres, Mosport, Laguna Seca, Miami, Petit Le Mans
                  </td>
                </tr>
                <tr>
                  <td>Emanuele Pirro(ITA)</td>
                  <td>
                    Sebring, Sonoma, Mid-Ohio, Road America, Washington DC,
                    Trois-Rivieres, Mosport, Laguna Seca, Miami, Petit Le Mans
                  </td>
                </tr>
                <tr>
                  <td>Tom Kristensen(DEN)</td>
                  <td>Sebring</td>
                </tr>
                <tr>
                  <td>Rinaldo Capello(ITA)</td>
                  <td>Sonoma</td>
                </tr>
                <tr>
                  <td rowSpan={4}>2</td>
                  <td>Rinaldo Capello(ITA)</td>
                  <td>
                    Sebring, Le Mans, Mid-Ohio, Road America, Washington DC,
                    Trois-Rivieres, Mosport, Laguna Seca, Miami, Petit Le Mans
                  </td>
                </tr>
                <tr>
                  <td>Christian Pescatori(ITA)</td>
                  <td>Sebring, Le Mans</td>
                </tr>
                <tr>
                  <td>Johnny Herbert(GBR)</td>
                  <td>Sebring, Le Mans</td>
                </tr>
                <tr>
                  <td>Tom Kristensen(DEN)</td>
                  <td>
                    Mid-Ohio, Road America, Washington DC, Trois-Rivieres,
                    Mosport, Laguna Seca, Miami, Petit Le Mans
                  </td>
                </tr>
                <tr>
                  <td rowSpan={6}>
                    <strong>Audi Sport Team Joest</strong>
                  </td>
                  <td rowSpan={6}>Audi R8</td>
                  <td rowSpan={3}>1</td>
                  <td>Frank Biela(DEU)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Emanuele Pirro(ITA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Tom Kristensen(DEN)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={3}>3</td>
                  <td>Marco Werner(DEU)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Michael Krumm(DEU)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Philipp Peter(AUT)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={16}>
                    <strong>Panoz Motor Sports</strong>
                  </td>
                  <td rowSpan={14}>Panoz LMP01 Evo</td>
                  <td rowSpan={4}>50</td>
                  <td>Jan Magnussen(DEN)</td>
                  <td>
                    Sebring, Sonoma, Mid-Ohio, Road America, Washington DC,
                    Trois Rivieres, Mosport, Laguna Seca, Miami, Petit Le Mans
                  </td>
                </tr>
                <tr>
                  <td>David Brabham(AUS)</td>
                  <td>
                    Sebring, Sonoma, Mid-Ohio, Road America, Washington DC,
                    Trois Rivieres, Mosport, Laguna Seca, Miami, Petit Le Mans
                  </td>
                </tr>
                <tr>
                  <td>Eric van de Poele(BEL)</td>
                  <td>Sebring</td>
                </tr>
                <tr>
                  <td>David Donohue(USA)</td>
                  <td>Petit Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={4}>51</td>
                  <td>Bryan Herta(USA)</td>
                  <td>
                    Sebring, Sonoma, Mid-Ohio, Road America, Washington DC,
                    Trois Rivieres, Mosport, Laguna Seca, Miami, Petit Le Mans
                  </td>
                </tr>
                <tr>
                  <td>Bill Auberlen(USA)</td>
                  <td>
                    Sebring, Sonoma, Mid-Ohio, Road America, Washington DC,
                    Trois Rivieres, Mosport, Laguna Seca, Miami, Petit Le Mans
                  </td>
                </tr>
                <tr>
                  <td>David Donohue(USA)</td>
                  <td>Sebring</td>
                </tr>
                <tr>
                  <td>Gunnar Jeannette(USA)</td>
                  <td>Petit Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={3}>11</td>
                  <td>Jan Magnussen(DEN)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>David Brabham(AUS)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Bryan Herta(USA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={3}>12</td>
                  <td>Bill Auberlen(USA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>David Donohue(USA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Gunnar Jeannette(USA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={2}>Panoz LMP-1 Roadster-S</td>
                  <td rowSpan={2}>49</td>
                  <td>Gunnar Jeannette(USA)</td>
                  <td>
                    <em>Sonoma</em>
                  </td>
                </tr>
                <tr>
                  <td>David Donohue(USA)</td>
                  <td>
                    <em>Sonoma</em>
                  </td>
                </tr>
                <tr>
                  <td rowSpan={11}>
                    <strong>Team Cadillac</strong>
                  </td>
                  <td rowSpan={11}>Cadillac Northstar LMP02</td>
                  <td rowSpan={4}>7</td>
                  <td>Emmanuel Collard(FRA)</td>
                  <td>
                    Sebring, Le Mans, Washington DC, Mosport, Laguna Seca,
                    Miami, Petit Le Mans
                  </td>
                </tr>
                <tr>
                  <td>Eric Bernard(FRA)</td>
                  <td>
                    Sebring, Le Mans, Washington DC, Mosport, Laguna Seca,
                    Miami, Petit Le Mans
                  </td>
                </tr>
                <tr>
                  <td>JJ Lehto(FIN)</td>
                  <td>Sebring, Le Mans</td>
                </tr>
                <tr>
                  <td>Wayne Taylor(ZAF)</td>
                  <td>
                    <em>Petit Le Mans</em>
                  </td>
                </tr>
                <tr>
                  <td rowSpan={4}>8</td>
                  <td>Max Angelelli(ITA)</td>
                  <td>
                    Sebring, Washington DC, Mosport, Laguna Seca, Miami, Petit
                    Le Mans
                  </td>
                </tr>
                <tr>
                  <td>Wayne Taylor(ZAF)</td>
                  <td>Sebring</td>
                </tr>
                <tr>
                  <td>Christophe Tinseau(FRA)</td>
                  <td>
                    Sebring, Washington DC, <em>Petit Le Mans</em>
                  </td>
                </tr>
                <tr>
                  <td>JJ Lehto(FIN)</td>
                  <td>Mosport, Laguna Seca, Miami, Petit Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={3}>6</td>
                  <td>Max Angelelli(ITA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Wayne Taylor(ZAF)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Christophe Tinseau(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={8}>
                    <strong>Team Ascari</strong>
                  </td>
                  <td rowSpan={8}>Ascari KZR-1</td>
                  <td rowSpan={3}>19</td>
                  <td>Werner Lupberger(ZAF)</td>
                  <td>Sebring</td>
                </tr>
                <tr>
                  <td>Kristian Kolby(DEN)</td>
                  <td>Sebring</td>
                </tr>
                <tr>
                  <td>Timothy Bell(USA)</td>
                  <td>Sebring</td>
                </tr>
                <tr>
                  <td rowSpan={5}>21</td>
                  <td>Justin Wilson(GBR)</td>
                  <td>Sebring</td>
                </tr>
                <tr>
                  <td>Ben Collins(GBR)</td>
                  <td>Sebring, Le Mans</td>
                </tr>
                <tr>
                  <td>Christian Vann(GBR)</td>
                  <td>Sebring</td>
                </tr>
                <tr>
                  <td>Werner Lupberger(ZAF)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Timothy Bell(USA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={7}>
                    <strong>Riley & Scott Racing</strong>
                  </td>
                  <td rowSpan={7}>Riley & Scott MK III C</td>
                  <td rowSpan={4}>36</td>
                  <td>Marc Goosens(BEL)</td>
                  <td>Sebring, Miami, Petit Le Mans</td>
                </tr>
                <tr>
                  <td>Guy Smith(GBR)</td>
                  <td>Sebring</td>
                </tr>
                <tr>
                  <td>Jim Matthews(USA)</td>
                  <td>
                    Sebring, <em>Petit Le Mans</em>
                  </td>
                </tr>
                <tr>
                  <td>Tony Ave(USA)</td>
                  <td>Miami, Petit Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={3}>4</td>
                  <td>Marc Goosens(BEL)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Didier Theys(BEL)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Jim Matthews(USA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={3}>
                    <strong>Team Bentley</strong>
                  </td>
                  <td rowSpan={3}>Bentley EXP Speed 8</td>
                  <td rowSpan={3}>8</td>
                  <td>Andy Wallace(GBR)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Butch Leitzinger(USA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Eric van de Poele(BEL)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={6}>
                    <strong>MG Sport & Racing Ltd</strong>
                  </td>
                  <td rowSpan={6}>MG-Lola EX257</td>
                  <td rowSpan={3}>26</td>
                  <td>Anthony Reid(GBR)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Warren Hughes(GBR)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Jonny Kane(GBR)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={3}>27</td>
                  <td>Julian Bailey(GBR)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Mark Blundell(GBR)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Kevin McGarrity(GBR)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={3}>
                    <strong>Courage Competition</strong>
                  </td>
                  <td rowSpan={3}>Courage C60</td>
                  <td rowSpan={3}>13</td>
                  <td>Didier Cottaz(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Boris Derichebourg(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Thed Björk(SWE)</td>
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
                50th Annual Mobil 1 12 Hours of Sebring
              </p>
              <p>Sebring International Raceway, Sebring, Florida</p>
              <p>Date: 16.03.2002</p>
              <p>Series: ALMS</p>
              <p>Race Format: 12 Hours</p>
              <p>Classes: LMP900, LMP675, GTS, GT</p>
              <p>Circuit Length: 6.019 km</p>
              <p>Laps Completed: 346</p>
              <p>Distance Covered: 2082.574 km</p>
              <p>
                Number of cars entered: 61 (18 LMP900, 10 LMP675, 12 GTS, 21 GT)
              </p>
              <p>
                Number of cars finished: 30 (10 LMP900, 4 LMP675, 6 GTS, 10 GT)
              </p>
              <p>
                Pole Position: #1 Audi Sport North America, Audi R8, Tom
                Kristensen(DEN), Emanuele Pirro(ITA), Frank Biela(DEU), 1.48,029
              </p>
              <p>
                Overall Winner: #2 Audi Sport North America, Audi R8, Johnny
                Herbert(GBR), Christian Pescatori(ITA), Rinaldo Capello(ITA),
                12:01.11,558
              </p>
              <p>
                LMP675 Winner: #37 Intersport, MG-Lola EX257, Jon Field(USA),
                Duncan Dayton(USA), Mike Durand(USA), +23 Laps
              </p>
              <p>
                GTS Winner: #3 Corvette Racing, Chevrolet Corvette C5-R, Ron
                Fellows(CAN), Johnny O'Connell(USA), Oliver Gavin(GBR), +29 Laps
              </p>
              <p>
                GT Winner: #23 Alex Job Racing, Porsche 911 GT3-RS, Lucas
                Luhr(DEU), Sascha Maassen(DEU), +40 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">Grand Prix of Sonoma</p>
              <p>Sears Point Raceway, Sonoma, California</p>
              <p>Date: 19.05.2002</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: LMP900, LMP675, GTS, GT</p>
              <p>Circuit Length: 4.072 km</p>
              <p>Laps Completed: 83</p>
              <p>Distance Covered: 337.976 km</p>
              <p>
                Number of cars entered: 33 (9 LMP900, 6 LMP675, 6 GTS, 12 GT)
              </p>
              <p>
                Number of cars finished: 25 (8 LMP900, 4 LMP675, 3 GTS, 10 GT)
              </p>
              <p>
                Pole Position: #38 Champion Racing, Audi R8, Johnny
                Herbert(GBR), Tom Kristensen(DEN), <em>Andy Wallace(GBR)</em>,
                1.22,615
              </p>
              <p>
                Overall Winner: #50 Panoz Motor Sports, Panoz LMP01 Evo, David
                Brabham(AUS), Jan Magnussen(DEN), 2:45.20,572
              </p>
              <p>
                GTS Winner: #3 Corvette Racing, Chevrolet Corvette C5-R, Ron
                Fellows(CAN), Johnny O'Connell(USA), +2 Laps
              </p>
              <p>
                GT Winner: #23 Alex Job Racing, Porsche 911 GT3-RS, Lucas
                Luhr(DEU), Sascha Maassen(DEU), +3 Laps
              </p>
              <p>
                LMP675 Winner: #13 Archangel Motorsport, Lola B2K/40 - Ford,
                Dave McEntee(USA), Ben Devlin(GBR), +8 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">
                70<sup>e</sup> 24 Heures du Mans
              </p>
              <p>Circuit de la Sarthe, Le Mans, France</p>
              <p>Date: 15-16.06.2002</p>
              <p>Series: Standalone event</p>
              <p>Race Format: 24 Hours</p>
              <p>Classes: LMP900, LMGTP, LMP675, LMGTS, LMGT</p>
              <p>Circuit Length: 13.650 km</p>
              <p>Laps Completed: 375</p>
              <p>Distance Covered: 5118.750 km</p>
              <p>
                Number of cars entered: 50 (20 LMP900, 1 LMGTP, 7 LMP675, 10
                LMGTS, 12 LMGT)
              </p>
              <p>
                Number of cars finished: 26 (11 LMP900, 1 LMGTP, 2 LMP675, 7
                LMGTS, 5 LMGT)
              </p>
              <p>
                Pole Position: #2 Audi Sport North America, Audi R8, Johnny
                Herbert(GBR), Christian Pescatori(ITA), Rinaldo Capello(ITA),
                3.29,905
              </p>
              <p>
                Overall Winner: #1 Audi Sport Team Joest, Audi R8, Frank
                Biela(DEU), Tom Kristensen(DEN), Emanuele Pirro(ITA),
                24:01.26,651
              </p>
              <p>
                LMGTP Winner: #8 Team Bentley, Bentley EXP Speed 8, Andy
                Wallace(GBR), Eric van de Poele(BEL), Butch Leitzinger(USA), +13
                Laps
              </p>
              <p>
                LMGTS Winner: #63 Corvette Racing, Chevrolet Corvette C5-R, Ron
                Fellows(CAN), Johnny O'Connell(USA), Oliver Gavin(GBR), +40 Laps
              </p>
              <p>
                LMGT Winner: #82 The Racer's Group, Porsche 911 GT3-RS, Kevin
                Buckler(USA), Lucas Luhr(DEU), Timo Bernhard(DEU), +53 Laps
              </p>
              <p>
                LMP675 Winner: #29 Noël del Bello, Reynard 2KQ-LM - Volkswagen,
                Jean-Deniz Deletraz(CHE), Christophe Pillon(CHE), Walter Lechner
                Jr(AUT), +58 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">American Le Mans at Mid-Ohio</p>
              <p>Mid-Ohio Sports Car Course, Lexington, Ohio</p>
              <p>Date: 30.06.2002</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: LMP900, LMP675, GTS, GT</p>
              <p>Circuit Length: 3.634 km</p>
              <p>Laps Completed: 111</p>
              <p>Distance Covered: 403.374 km</p>
              <p>
                Number of cars entered: 30 (9 LMP900, 6 LMP675, 6 GTS, 9 GT)
              </p>
              <p>
                Number of cars finished: 24 (9 LMP900, 4 LMP675, 4 GTS, 7 GT)
              </p>
              <p>
                Pole Position: #1 Audi Sport North America, Audi R8, Emanuele
                Pirro(ITA), Frank Biela(DEU), 1.14,169
              </p>
              <p>
                Overall Winner: #1 Audi Sport North America, Audi R8, Emanuele
                Pirro(ITA), Frank Biela(DEU), 2:45.20,152
              </p>
              <p>
                GTS Winner: #3 Corvette Racing, Chevrolet Corvette C5-R, Ron
                Fellows(CAN), Johnny O'Connell(USA), +5 Laps
              </p>
              <p>
                GT Winner: #66 The Racer's Group, Porsche 911 GT3-RS, Kevin
                Buckler(USA), B.J. Zacharias(USA), +10 Laps
              </p>
              <p>
                LMP675 Winner: #56 Team Bucknum Racing, Pilbeam MP84 - Nissan,
                Jeff Bucknum(USA), Chris McMurry(USA), Bryan Willman(USA), +11
                Laps
              </p>
            </li>
            <li>
              <p className="font-bold">Road America 500</p>
              <p>Road America, Elkhart Lake, Wisconsin</p>
              <p>Date: 07.07.2002</p>
              <p>Series: ALMS</p>
              <p>Race Format: 500 Miles or 4 Hours 15 minutes</p>
              <p>Classes: LMP900, LMP675, GTS, GT</p>
              <p>Circuit Length: 6.477 km</p>
              <p>Laps Completed: 118</p>
              <p>Distance Covered: 764.286 km</p>
              <p>
                Number of cars entered: 30 (8 LMP900, 6 LMP675, 6 GTS, 10 GT)
              </p>
              <p>
                Number of cars finished: 20 (5 LMP900, 4 LMP675, 3 GTS, 8 GT)
              </p>
              <p>
                Pole Position: #2 Audi Sport North America, Audi R8, Tom
                Kristensen(DEN), Rinaldo Capello(ITA), 1.52,166
              </p>
              <p>
                Overall Winner: #2 Audi Sport North America, Audi R8, Tom
                Kristensen(DEN), Rinaldo Capello(ITA), 4:15.01,876
              </p>
              <p>
                GTS Winner: #4 Corvette Racing, Chevrolet Corvette C5-R, Andy
                Pilgrim(USA), Kelly Collins(USA), <em>Franck Freon(FRA)</em>, +9
                Laps
              </p>
              <p>
                GT Winner: #22 Alex Job Racing, Porsche 911 GT3-RS, Timo
                Bernhard(DEU), Jörg Bergmeister(DEU), +14 Laps
              </p>
              <p>
                LMP675 Winner: #13 Archangel Motorsport, Lola B2K/40 - Ford,
                Peter MacLeod(USA), Larry Oberto(USA), Ben Devlin(GBR), +15 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">
                Cadillac Grand Prix of Washington D.C.
              </p>
              <p>RFK Memorial Stadium Circuit, D.C.</p>
              <p>Date: 21.07.2002</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: LMP900, LMP675, GTS, GT</p>
              <p>Circuit Length: 2.673 km</p>
              <p>Laps Completed: 140</p>
              <p>Distance Covered: 374.220 km</p>
              <p>
                Number of cars entered: 33 (9 LMP900, 5 LMP675, 6 GTS, 13 GT)
              </p>
              <p>
                Number of cars finished: 24 (8 LMP900, 3 LMP675, 5 GTS, 8 GT)
              </p>
              <p>
                Pole Position: #1 Audi Sport North America, Audi R8, Emanuele
                Pirro(ITA), Frank Biela(DEU), 1.03,287
              </p>
              <p>
                Overall Winner: #50 Panoz Motor Sports, Panoz LMP01 Evo, David
                Brabham(AUS), Jan Magnussen(DEN), 2:45.02,498
              </p>
              <p>
                GTS Winner: #3 Corvette Racing, Chevrolet Corvette C5-R, Ron
                Fellows(CAN), Johnny O'Connell(USA), +9 Laps
              </p>
              <p>
                LMP675 Winner: #37 Intersport, MG-Lola EX257, Jon Field(USA),
                Clint Field(USA), +13 Laps
              </p>
              <p>
                GT Winner: #23 Alex Job Racing, Porsche 911 GT3-RS, Lucas
                Luhr(DEU), Sascha Maassen(DEU), +15 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">Le Grand Prix de Trois-Rivieres</p>
              <p>Circuit Trois-Rivieres, Trois-Rivieres, Quebec</p>
              <p>Date: 03.08.2002</p>
              <p>Series: ALMS</p>
              <p>Race Format: 3 Hours</p>
              <p>Classes: LMP900, LMP675, GTS, GT</p>
              <p>Circuit Length: 2.448 km</p>
              <p>Laps Completed: 166</p>
              <p>Distance Covered: 406.368 km</p>
              <p>
                Number of cars entered: 26 (7 LMP900, 5 LMP675, 6 GTS, 8 GT)
              </p>
              <p>
                Number of cars finished: 18 (7 LMP900, 2 LMP675, 4 GTS, 5 GT)
              </p>
              <p>
                Pole Position: #1 Audi Sport North America, Audi R8, Emanuele
                Pirro(ITA), Frank Biela(DEU), 0.58,698
              </p>
              <p>
                Overall Winner: #2 Audi Sport North America, Audi R8, Tom
                Kristensen(DEN), Rinaldo Capello(ITA), 3:00.18,561
              </p>
              <p>
                GTS Winner: #4 Corvette Racing, Chevrolet Corvette C5-R, Andy
                Pilgrim(USA), Kelly Collins(USA), +11 Laps
              </p>
              <p>
                GT Winner: #23 Alex Job Racing, Porsche 911 GT3-RS, Lucas
                Luhr(DEU), Sascha Maassen(DEU), +15 Laps
              </p>
              <p>
                LMP675 Winner: #56 Team Bucknum Racing, Pilbeam MP84 - Nissan,
                Jeff Bucknum(USA), Chris McMurry(USA), Bryan Willman(USA), +21
                Laps
              </p>
            </li>
            <li>
              <p className="font-bold">mail2web.com Grand Prix of Mosport</p>
              <p>Mosport International Raceway, Bowmanville, Ontario</p>
              <p>Date: 18.08.2002</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: LMP900, LMP675, GTS, GT</p>
              <p>Circuit Length: 3.957 km</p>
              <p>Laps Completed: 121</p>
              <p>Distance Covered: 478.797 km</p>
              <p>
                Number of cars started: 27 (8 LMP900, 6 LMP675, 6 GTS, 7 GT)
              </p>
              <p>
                Number of cars finished: 19 (7 LMP900, 2 LMP675, 6 GTS, 4 GT)
              </p>
              <p>
                Pole Position: #1 Audi Sport North America, Audi R8, Emanuele
                Pirro(ITA), Frank Biela(DEU), 1.07,169
              </p>
              <p>
                Overall Winner: #2 Audi Sport North America, Audi R8, Tom
                Kristensen(DEN), Rinaldo Capello(ITA), 2:45.12,956
              </p>
              <p>
                GTS Winner: #3 Corvette Racing, Chevrolet Corvette C5-R, Ron
                Fellows(CAN), Johnny O'Connell(USA), +8 Laps
              </p>
              <p>
                LMP675 Winner: #56 Team Bucknum Racing, Pilbeam MP84 - Nissan,
                Jeff Bucknum(USA), Chris McMurry(USA), Bryan Willman(USA), +14
                Laps
              </p>
              <p>
                GT Winner: #66 The Racer's Group, Porsche 911 GT3-RS, Kevin
                Buckler(USA), Brian Cunningham(USA), +15 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">Monterey Sports Car Championships</p>
              <p>Mazda Raceway Laguna Seca, Monterey, California</p>
              <p>Date: 22.09.2002</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: LMP900, LMP675, GTS, GT</p>
              <p>Circuit Length: 3.602 km</p>
              <p>Laps Completed: 112</p>
              <p>Distance Covered: 403.424 km</p>
              <p>
                Number of cars entered: 32 (9 LMP900, 7 LMP675, 7 GTS, 9 GT)
              </p>
              <p>
                Number of cars finished: 25 (8 LMP900, 6 LMP675, 3 GTS, 8 GT)
              </p>
              <p>
                Pole Position: #1 Audi Sport North America, Audi R8, Emanuele
                Pirro(ITA), Frank Biela(DEU), 1.15,765
              </p>
              <p>
                Overall Winner: #1 Audi Sport North America, Audi R8, Emanuele
                Pirro(ITA), Frank Biela(DEU), 2:46.08,915
              </p>
              <p>
                LMP675 Winner: #11 KnightHawk Racing, MG-Lola EX257, Claudia
                Hürtgen(DEU), Steven Knight(USA), Chad Block(USA), +3 Laps
              </p>
              <p>
                GTS Winner: #33 Prodrive, Ferrari 550-GTS Maranello, Thomas
                Enge(CZE), Peter Kox(NED), +8 Laps
              </p>
              <p>
                GT Winner: #23 Alex Job Racing, Porsche 911 GT3-RS, Lucas
                Luhr(DEU), Sascha Maassen(DEU), +12 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">Cadillac American Le Mans Challenge</p>
              <p>Bayfront Park Street Circuit, Miami, Florida</p>
              <p>Date: 05.10.2002</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: LMP900, LMP675, GTS, GT</p>
              <p>Circuit Length: 2.232 km</p>
              <p>Laps Completed: 122</p>
              <p>Distance Covered: 272.304 km</p>
              <p>
                Number of cars entered: 36 (10 LMP900, 6 LMP675, 10 GTS, 10 GT)
              </p>
              <p>
                Number of cars finished: 24 (8 LMP900, 4 LMP675, 6 GTS, 6 GT)
              </p>
              <p>
                Pole Position: #1 Audi Sport North America, Audi R8, Emanuele
                Pirro(ITA), Frank Biela(DEU), 1.03,873
              </p>
              <p>
                Overall Winner: #1 Audi Sport North America, Audi R8, Emanuele
                Pirro(ITA), Frank Biela(DEU), 2:46.03,793
              </p>
              <p>
                LMP675 Winner: #11 KnightHawk Racing, MG-Lola EX257, Claudia
                Hürtgen(DEU), Chad Block(USA), +3 Laps
              </p>
              <p>
                GTS Winner: #3 Corvette Racing, Chevrolet Corvette C5-R, Ron
                Fellows(CAN), Johnny O'Connell(USA), +3 Laps
              </p>
              <p>
                GT Winner: #23 Alex Job Racing, Porsche 911 GT3-RS, Lucas
                Luhr(DEU), Sascha Maassen(DEU), +4 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">5th Annual Petit Le Mans</p>
              <p>Road Atlanta, Braselton, Georgia</p>
              <p>Date: 12.10.2002</p>
              <p>Series: ALMS</p>
              <p>Race Format: 1000 Miles or 10 Hours</p>
              <p>Classes: LMP900, LMP675, GTS, GT</p>
              <p>Circuit Length: 4.088 km</p>
              <p>Laps Completed: 394</p>
              <p>Distance Covered: 1610.672 km</p>
              <p>
                Number of cars entered: 48 (11 LMP900, 10 LMP675, 10 GTS, 17 GT)
              </p>
              <p>
                Number of cars finished: 31 (9 LMP900, 4 LMP675, 6 GTS, 12 GT)
              </p>
              <p>
                Pole Position: #1 Audi Sport North America, Audi R8, Emanuele
                Pirro(ITA), Frank Biela(DEU), 1.10,939
              </p>
              <p>
                Overall Winner: #2 Audi Sport North America, Audi R8, Tom
                Kristensen(DEN), Rinaldo Capello(ITA), 9:27.39,594
              </p>
              <p>
                LMP675 Winner: #37 Intersport, MG-Lola EX257, Jon Field(USA),
                Mike Durand(USA), Duncan Dayton(USA), +28 Laps
              </p>
              <p>
                GTS Winner: #3 Corvette Racing, Chevrolet Corvette C5-R, Ron
                Fellows(CAN), Johnny O'Connell(USA), Oliver Gavin(GBR), +32 Laps
              </p>
              <p>
                GT Winner: #23 Alex Job Racing, Porsche 911 GT3-RS, Lucas
                Luhr(DEU), Sascha Maassen(DEU), +46 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">Le Mans Series Race of Champions</p>
              <p>Sepang International Circuit, Kuala Lumpur, Malaysia</p>
              <p>Date: 03.11.2002</p>
              <p>Series: ALMS Invitational Event</p>
              <p>Race Format: 6 Hours</p>
              <p>Classes: LMP900, LMP675, GTS, GT</p>
              <p>Circuit Length: 5.543 km</p>
              <p>Laps Completed: 0</p>
              <p>Distance Covered: - km</p>
              <p>
                Race{" "}
                <a
                  href="https://web.archive.org/web/20020804060229/http://www.professionalsportscar.com/main.cfm?contents=/series/alms/contents.cfm&banner=/2001_sc_header.cfm&header=/imsa_header.htm&page=/2002/news/news02/042602b.cfm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  cancelled
                </a>{" "}
                after lack of clear communication between ALMS and the event
                promoter, the event was not rescheduled
              </p>
            </li>
          </ol>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h2>Season Totals</h2>
          <div>
            <p>Number of Races: 11</p>
            <p>Total Distance Covered: 12252.745 km</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h2>Misc Links</h2>
          <ul>
            <li>
              <a
                href="https://web.archive.org/web/20020306213820/http://www.professionalsportscar.com/main.cfm?contents=/series/alms/contents.cfm&banner=/2001_sc_header.cfm&header=/imsa_header.htm&page=/2002/news/news02/012202e.cfm"
                target="_blank"
                rel="noopener noreferrer"
              >
                BMW cancels ALMS GT program after regulation changes
              </a>
            </li>
            <li>
              <a
                href="https://web.archive.org/web/20020603092705/http://www.professionalsportscar.com/main.cfm?contents=/series/alms/contents.cfm&banner=/2001_sc_header.cfm&header=/imsa_header.htm&page=/2002/news/news02/050302a.cfm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Audi borrows car from Champion for Sonoma
              </a>
            </li>
            <li>
              <a
                href="https://web.archive.org/web/20020804053547/http://www.professionalsportscar.com/main.cfm?banner=/2001_sc_header.cfm&contents=/series/alms/contents.cfm&header=/imsa_header.htm&page=/2002/news/news02/030502a.cfm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Miami event postponed to October to join CART
              </a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
