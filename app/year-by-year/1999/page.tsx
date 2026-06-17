import Image from "next/image";

export default function NinetyNine() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full flex-col items-center justify-start py-12 px-16 bg-white gap-8">
        <h1>1999 Season</h1>
        <div className="flex flex-col gap-2">
          <h2>Series and Regulation News</h2>
          <ul>
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
        <div className="flex flex-col gap-2">
          <h2>Manufacturer News</h2>
          <ul>
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
          <h2>The Teams</h2>
          <div>
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
                  <td rowSpan={15}>
                    <strong>BMW Motorsport</strong>
                  </td>
                  <td rowSpan={15}>BMW V12 LMR</td>
                  <td rowSpan={4}>42</td>
                  <td>JJ Lehto(FIN)</td>
                  <td>
                    Sebring, <em>Mosport</em>, Sonoma, Portland, Petit Le Mans,
                    Laguna Seca, Las Vegas
                  </td>
                </tr>
                <tr>
                  <td>Jörg Müller(DEU)</td>
                  <td>
                    Sebring, <em>Mosport</em>, Petit Le Mans
                  </td>
                </tr>
                <tr>
                  <td>Tom Kristensen(DEN)</td>
                  <td>Sebring</td>
                </tr>
                <tr>
                  <td>Steve Soper(GBR)</td>
                  <td>Sonoma, Portland, Laguna Seca, Las Vegas</td>
                </tr>
                <tr>
                  <td rowSpan={5}>43</td>
                  <td>Joachim Winkelhock(DEU)</td>
                  <td>
                    Sebring, <em>Mosport</em>, Sonoma, Portland, Petit Le Mans,
                    Laguna Seca, Las Vegas
                  </td>
                </tr>
                <tr>
                  <td>Pierluigi Martini(ITA)</td>
                  <td>Sebring</td>
                </tr>
                <tr>
                  <td>Yannick Dalmas(FRA)</td>
                  <td>Sebring</td>
                </tr>
                <tr>
                  <td>Bill Auberlen(USA)</td>
                  <td>
                    <em>Mosport</em>, Sonoma, Portland, Petit Le Mans, Laguna
                    Seca, Las Vegas
                  </td>
                </tr>
                <tr>
                  <td>Steve Soper(GBR)</td>
                  <td>Petit Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={3}>15</td>
                  <td>Joachim Winkelhock(DEU)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Pierluigi Martini(ITA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Yannick Dalmas(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={3}>17</td>
                  <td>JJ Lehto(FIN)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Jörg Müller(DEU)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Tom Kristensen(DEN)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={19}>
                    <strong>Panoz Motor Sports</strong>
                  </td>
                  <td rowSpan={6}>Panoz Esperante GTR-1</td>
                  <td rowSpan={3}>1</td>
                  <td>David Brabham(AUS)</td>
                  <td>Sebring</td>
                </tr>
                <tr>
                  <td>Eric Bernard(FRA)</td>
                  <td>Sebring</td>
                </tr>
                <tr>
                  <td>Klaus Graf(DEU)</td>
                  <td>
                    <em>Sebring</em>
                  </td>
                </tr>
                <tr>
                  <td rowSpan={3}>2</td>
                  <td>Johnny O'Connell(USA)</td>
                  <td>Sebring, Road Atlanta</td>
                </tr>
                <tr>
                  <td>Jan Magnussen(DEN)</td>
                  <td>Sebring, Road Atlanta</td>
                </tr>
                <tr>
                  <td>John Nielsen(DEN)</td>
                  <td>Sebring</td>
                </tr>
                <tr>
                  <td rowSpan={13}>Panoz LMP-1 Roadster-S</td>
                  <td rowSpan={3}>1</td>
                  <td>David Brabham(AUS)</td>
                  <td>
                    Road Atlanta, Mosport, Sonoma, Portland, Petit Le Mans,
                    Laguna Seca, Las Vegas
                  </td>
                </tr>
                <tr>
                  <td>Eric Bernard(FRA)</td>
                  <td>
                    Road Atlanta, Mosport, Sonoma, Portland, Petit Le Mans,
                    Laguna Seca, Las Vegas
                  </td>
                </tr>
                <tr>
                  <td>Andy Wallace(GBR)</td>
                  <td>Petit Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={4}>2</td>
                  <td>Johnny O'Connell(USA)</td>
                  <td>
                    Mosport, Sonoma, Portland, Petit Le Mans, Laguna Seca, Las
                    Vegas
                  </td>
                </tr>
                <tr>
                  <td>Jan Magnussen(DEN)</td>
                  <td>
                    Mosport, Sonoma, Portland, Petit Le Mans, Laguna Seca, Las
                    Vegas
                  </td>
                </tr>
                <tr>
                  <td>Memo Gidley(USA)</td>
                  <td>Petit Le Mans</td>
                </tr>
                <tr>
                  <td>Klaus Graf(DEU)</td>
                  <td>
                    <em>Laguna Seca</em>
                  </td>
                </tr>
                <tr>
                  <td rowSpan={3}>11</td>
                  <td>Johnny O'Connell(USA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Jan Magnussen(DEN)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Max Angelelli(ITA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={3}>12</td>
                  <td>David Brabham(AUS)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Eric Bernard(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Butch Leitzinger(USA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={12}>
                    <strong>Audi Sport Team Joest</strong>
                  </td>
                  <td rowSpan={12}>Audi R8R</td>
                  <td rowSpan={3}>77</td>
                  <td>Michele Alboreto(ITA)</td>
                  <td>Sebring</td>
                </tr>
                <tr>
                  <td>Rinaldo Capello(ITA)</td>
                  <td>Sebring</td>
                </tr>
                <tr>
                  <td>Stefan Johansson(SWE)</td>
                  <td>Sebring</td>
                </tr>
                <tr>
                  <td rowSpan={3}>78</td>
                  <td>Perry McCarthy(GBR)</td>
                  <td>Sebring</td>
                </tr>
                <tr>
                  <td>Frank Biela(DEU)</td>
                  <td>Sebring</td>
                </tr>
                <tr>
                  <td>Emanuele Pirro(ITA)</td>
                  <td>Sebring</td>
                </tr>
                <tr>
                  <td rowSpan={3}>7</td>
                  <td>Michele Alboreto(ITA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Rinaldo Capello(ITA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Laurent Aïello(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={3}>8</td>
                  <td>Didier Theys(BEL)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Frank Biela(DEU)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Emanuele Pirro(ITA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={6}>
                    <strong>Audi Sport Team UK</strong>
                  </td>
                  <td rowSpan={6}>Audi R8C</td>
                  <td rowSpan={3}>9</td>
                  <td>Stefan Johansson(SWE)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Stephane Ortelli(MCO)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Christian Abt(DEU)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={3}>10</td>
                  <td>James Weaver(GBR)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Andy Wallace(GBR)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Perry McCarthy(GBR)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={9}>
                    <strong>AMG-Mercedes</strong>
                  </td>
                  <td rowSpan={9}>Mercedes-Benz CLR</td>
                  <td rowSpan={3}>4</td>
                  <td>Mark Webber(AUS)</td>
                  <td>
                    <em>Le Mans</em>
                  </td>
                </tr>
                <tr>
                  <td>Jean-Marc Gounon(FRA)</td>
                  <td>
                    <em>Le Mans</em>
                  </td>
                </tr>
                <tr>
                  <td>Marcel Tiemann(DEU)</td>
                  <td>
                    <em>Le Mans</em>
                  </td>
                </tr>
                <tr>
                  <td rowSpan={3}>5</td>
                  <td>Christophe Bouchut(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Nick Heidfeld(DEU)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Peter Dumbreck(GBR)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={3}>6</td>
                  <td>Bernd Schneider(DEU)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Franck Lagorce(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Pedro Lamy(POR)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={12}>
                    <strong>Toyota Motorsports</strong>
                  </td>
                  <td rowSpan={12}>Toyota GT-One</td>
                  <td rowSpan={6}>1</td>
                  <td>Martin Brundle(GBR)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Emmanuel Collard(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Vincenzo Sospiri(ITA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Ukyo Katayama(JAP)</td>
                  <td>Fuji</td>
                </tr>
                <tr>
                  <td>Keiichi Tsuchiya(JAP)</td>
                  <td>Fuji</td>
                </tr>
                <tr>
                  <td>Toshio Suzuki(JAP)</td>
                  <td>Fuji</td>
                </tr>
                <tr>
                  <td rowSpan={3}>2</td>
                  <td>Thierry Boutsen(BEL)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Ralf Kelleners(DEU)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Allan McNish(GBR)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={3}>3</td>
                  <td>Ukyo Katayama(JAP)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Keiichi Tsuchiya(JAP)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Toshio Suzuki(JAP)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={8}>
                    <strong>Nissan Motorsports</strong>
                  </td>
                  <td rowSpan={8}>Nissan R391</td>
                  <td rowSpan={3}>22</td>
                  <td>Michael Krumm(DEU)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Satoshi Motoyama(JAP)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Eric Comas(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={5}>23</td>
                  <td>Aguri Suzuki(JAP)</td>
                  <td>
                    <em>Le Mans</em>
                  </td>
                </tr>
                <tr>
                  <td>Eric van de Poele(BEL)</td>
                  <td>
                    <em>Le Mans</em>
                  </td>
                </tr>
                <tr>
                  <td>Masami Kageyama(JAP)</td>
                  <td>
                    <em>Le Mans</em>, Fuji
                  </td>
                </tr>
                <tr>
                  <td>Satoshi Motoyama(JAP)</td>
                  <td>Fuji</td>
                </tr>
                <tr>
                  <td>Eric Comas(FRA)</td>
                  <td>Fuji</td>
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
                47th Annual Exxon Superflo 12 Hours of Sebring
              </p>
              <p>Sebring International Raceway, Sebring, Florida</p>
              <p>Date: 20.03.1999</p>
              <p>Series: ALMS</p>
              <p>Race Format: 12 Hours</p>
              <p>Classes: LMP, GTS, GT</p>
              <p>Circuit Length: 6.019 km</p>
              <p>Laps Completed: 313</p>
              <p>Distance Covered: 1883.947 km</p>
              <p>Number of cars entered: 60 (30 LMP, 12 GTS, 18 GT)</p>
              <p>Number of cars finished: 27 (13 LMP, 6 GTS, 8 GT)</p>
              <p>
                Pole Position: #42 BMW Motorsport, BMW V12 LMR, Jörg
                Müller(DEU), JJ Lehto(FIN), Tom Kristensen(DEN), 1.49,850
              </p>
              <p>
                Overall Winner: #42 BMW Motorsport, BMW V12 LMR, Jörg
                Müller(DEU), JJ Lehto(FIN), Tom Kristensen(DEN), 12:00.59,075
              </p>
              <p>
                GTS Winner: #56 Martin Snow Racing, Porsche 911 GT2, Martin
                Snow(USA), Melanie Snow(USA), Patrick Huisman(NED), +26 Laps
              </p>
              <p>
                GT Winner: #23 Alex Job Racing, Porsche 911 Carrera RSR, Kelly
                Collins(USA), Cort Wagner(USA), Darrly Havens(USA), +29 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">Grand Prix at Road Atlanta</p>
              <p>Road Atlanta, Braselton, Georgia</p>
              <p>Date: 18.04.1999</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: LMP, GTS, GT</p>
              <p>Circuit Length: 4.088 km</p>
              <p>Laps Completed: 120</p>
              <p>Distance Covered: 490.560 km</p>
              <p>Number of cars entered: 45 (22 LMP, 7 GTS, 16 GT)</p>
              <p>Number of cars finished: 33 (14 LMP, 6 GTS, 13 GT)</p>
              <p>
                Pole Position: #16 Dyson Racing, Riley & Scott MK III - Ford,
                Andy Wallace(GBR), James Weaver(GBR), 1.13,817
              </p>
              <p>
                Overall Winner: #0 Team Rafanelli SRL, Riley & Scott MK III -
                Judd, Eric van de Poele(BEL), Mimmo Schiattarella(ITA),
                2:46.08,594
              </p>
              <p>
                GTS Winner: #99 Schumacher Racing, Porsche 911 GT2, Larry
                Schumacher(USA), John O'Steen(USA), +10 Laps
              </p>
              <p>
                GT Winner: #7 Prototype Technology Group, BMW M3, Brian
                Cunningham(USA), Johannes van Overbeek(USA), +13 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">
                67<sup>e</sup> 24 Heures du Mans
              </p>
              <p>Circuit de la Sarthe, Le Mans, France</p>
              <p>Date: 12-13.06.1999</p>
              <p>Series: Standalone event</p>
              <p>Race Format: 24 Hours</p>
              <p>Classes: LMP, LMGTP, LMGTS, LMGT</p>
              <p>Circuit Length: 13.605 km</p>
              <p>Laps Completed: 365</p>
              <p>Distance Covered: 4965.825 km</p>
              <p>
                Number of cars entered: 48 (20 LMP, 8 LMGTP, 16 LMGTS, 4 LMGT)
              </p>
              <p>
                Number of cars finished: 22 (9 LMP, 1 LMGTP, 9 LMGTS, 3 LMGT)
              </p>
              <p>
                Pole Position: #1 Toyota Motorsports, Toyota GT-One, Martin
                Brundle(GBR), Emmanuel Collard(FRA), Vincenzo Sospiri(ITA),
                3.29,930
              </p>
              <p>
                Overall Winner: #15 BMW Motorsport, BMW V12 LMR, Joachim
                Winkelhock(DEU), Pierluigi Martini(ITA), Yannick Dalmas(FRA),
                24:00.00,000
              </p>
              <p>
                LMGTP Winner: #3 Toyota Motorsports, Toyota GT-One, Ukyo
                Katayama(JAP), Keiichi Tsuchiya(JAP), Toshio Suzuki(JAP), +1 Lap
              </p>
              <p>
                LMGTS Winner: #51 Viper Team Oreca, Dodge Viper GTS-R, Olivier
                Beretta(MON), Karl Wendlinger(AUT), Dominique Dupuy(FRA), +40
                Laps
              </p>
              <p>
                LMGT Winner: #81 Manthey Racing, Porsche 911 GT3-R, Uwe
                Alzen(DEU), Patrick Huisman(NED), Luca Riccitelli(ITA), +48 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">Grand Prix at Mosport</p>
              <p>Mosport International Raceway, Bowmanville, Ontario</p>
              <p>Date: 27.06.1999</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: LMP, GTS, GT</p>
              <p>Circuit Length: 3.957 km</p>
              <p>Laps Completed: 122</p>
              <p>Distance Covered: 482.754 km</p>
              <p>Number of cars entered: 35 (18 LMP, 7 GTS, 10 GT)</p>
              <p>Number of cars finished: 27 (12 LMP, 6 GTS, 9 GT)</p>
              <p>
                Pole Position: #2 Panoz Motor Sports, Panoz LMP-1 Roadster-S,
                Johnny O'Connell(USA), Jan Magnussen(DEN), 1.10,514
              </p>
              <p>
                Overall Winner: #2 Panoz Motor Sports, Panoz LMP-1 Roadster-S,
                Johnny O'Connell(USA), Jan Magnussen(DEN), 2:45.11,870
              </p>
              <p>
                GTS Winner: #91 Dodge Viper Team Oreca, Dodge Viper GTS-R,
                Olivier Beretta(MON), David Donohue(USA), +11 Laps
              </p>
              <p>
                GT Winner: #23 Alex Job Racing, Porsche 911 Carrera RSR, Cort
                Wagner(USA), Dirk Müller(DEU), +14 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">Grand Prix of Sonoma</p>
              <p>Sears Point Raceway, Sonoma, California</p>
              <p>Date: 25.07.1999</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: LMP, GTS, GT</p>
              <p>Circuit Length: 4.056 km</p>
              <p>Laps Completed: 97</p>
              <p>Distance Covered: 393.432 km</p>
              <p>Number of cars entered: 45 (22 LMP, 8 GTS, 15 GT)</p>
              <p>Number of cars finished: 37 (17 LMP, 8 GTS, 12 GT)</p>
              <p>
                Pole Position: #42 BMW Motorsport, BMW V12 LMR, JJ Lehto(FIN),
                Steve Soper(GBR), 1.22,387
              </p>
              <p>
                Overall Winner: #42 BMW Motorsport, BMW V12 LMR, JJ Lehto(FIN),
                Steve Soper(GBR), 2:44.00,499
              </p>
              <p>
                GTS Winner: #91 Dodge Viper Team Oreca, Dodge Viper GTS-R,
                Olivier Beretta(MON), David Donohue(USA), +7 Laps
              </p>
              <p>
                GT Winner: #9 Prototype Technology Group, BMW M3, Boris
                Said(USA), Hans-Joachim Stuck(DEU), +9 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">Rose City Grand Prix</p>
              <p>Portland International Raceway, Portland, Oregon</p>
              <p>Date: 01.08.1999</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: LMP, GTS, GT</p>
              <p>Circuit Length: 3.129 km</p>
              <p>Laps Completed: 137</p>
              <p>Distance Covered: 428.673 km</p>
              <p>Number of cars entered: 42 (21 LMP, 7 GTS, 14 GT)</p>
              <p>Number of cars finished: 28 (14 LMP, 4 GTS, 10 GT)</p>
              <p>
                Pole Position: #42 BMW Motorsport, BMW V12 LMR, JJ Lehto(FIN),
                Steve Soper(GBR), 1.04,387
              </p>
              <p>
                Overall Winner: #1 Panoz Motor Sports, Panoz LMP-1 Roadster-S,
                David Brabham(AUS), Eric Bernard(FRA), 2:45.52,773
              </p>
              <p>
                GTS Winner: #91 Dodge Viper Team Oreca, Dodge Viper GTS-R,
                Olivier Beretta(MON), David Donohue(USA), +11 Laps
              </p>
              <p>
                GT Winner: #23 Manthey Racing/Alex Job Racing, Porsche 911
                GT3-R, Dirk Müller(DEU), Cort Wagner(USA), +15 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">2nd Annual Petit Le Mans</p>
              <p>Road Atlanta, Braselton, Georgia</p>
              <p>Date: 18.09.1999</p>
              <p>Series: ALMS</p>
              <p>Race Format: 1000 Miles or 10 Hours</p>
              <p>Classes: LMP, GTS, GT</p>
              <p>Circuit Length: 4.088 km</p>
              <p>Laps Completed: 394</p>
              <p>Distance Covered: 1610.672 km</p>
              <p>Number of cars entered: 50 (22 LMP, 13 GTS, 15 GT)</p>
              <p>Number of cars finished: 31 (13 LMP, 9 GTS, 9 GT)</p>
              <p>
                Pole Position: #1 Panoz Motor Sports, Panoz LMP-1 Roadster-S,
                David Brabham(AUS), Eric Bernard(FRA), Andy Wallace(GBR),
                1.10,873
              </p>
              <p>
                Overall Winner: #1 Panoz Motor Sports, Panoz LMP-1 Roadster-S,
                David Brabham(AUS), Eric Bernard(FRA), Andy Wallace(GBR),
                8:56.31,991
              </p>
              <p>
                GTS Winner: #91 Dodge Viper Team Oreca, Dodge Viper GTS-R,
                Olivier Beretta(MON), Karl Wendlinger(AUT), Marc Duez(BEL), +37
                Laps
              </p>
              <p>
                GT Winner: #23 Manthey Racing/Alex Job Racing, Porsche 911
                GT3-R, Dirk Müller(DEU), Sascha Maassen(DEU), Cort Wagner(USA),
                +47 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">Visa Sports Car Championships</p>
              <p>Laguna Seca Raceway, Monterey, California</p>
              <p>Date: 10.10.1999</p>
              <p>Series: ALMS</p>
              <p>Race Format, 2 Hours, 45 minutes</p>
              <p>Classes: LMP, GTS, GT</p>
              <p>Circuit Length: 3.602 km</p>
              <p>Laps Completed: 121</p>
              <p>Distance Covered: 435.842 km</p>
              <p>Number of cars entered: 44 (19 LMP, 10 GTS, 15 GT)</p>
              <p>Number of cars finished: 28 (12 LMP, 7 GTS, 9 GT)</p>
              <p>
                Pole Position: #1 Panoz Motor Sports, Panoz LMP-1 Roadster-S,
                David Brabham(AUS), Eric Bernard(FRA), 1.15,974
              </p>
              <p>
                Overall Winner: #42 BMW Motorsport, BMW V12 LMR, JJ Lehto(FIN),
                Steve Soper(GBR), 2:45.08,543
              </p>
              <p>
                GTS Winner: #91 Dodge Viper Team Oreca, Dodge Viper GTS-R,
                Olivier Beretta(MON), Karl Wendlinger(AUT), +11 Laps
              </p>
              <p>
                GT Winner: #02 Reiser Callas Rennsport, Porsche 911 Carrera RSR,
                Johnny Mowlem(GBR), David Murry(USA), +13 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">Le Mans Fuji 1000 km</p>
              <p>Fuji International Speedway, Oyama, Japan</p>
              <p>Date: 07.11.1999</p>
              <p>Series: Non-Championship</p>
              <p>Race Format: 1000 km or 6 Hours</p>
              <p>Classes: LMP, LMGTP, LMGTS, LMGT, GT500, GT300</p>
              <p>Circuit Length: 4.469 km</p>
              <p>Laps Completed: 228</p>
              <p>Distance Covered: 1018.932 km</p>
              <p>
                Number of cars entered: 23 (3 LMP, 2 LMGTP, 7 LMGTS, 4 LMGT, 5
                GT500, 2 GT300)
              </p>
              <p>
                Number of cars finished: 15 (2 LMP, 1 LMGTP, 4 LMGTS, 3 LMGT, 4
                GT500, 1 GT300)
              </p>
              <p>
                Pole Position: #1 Toyota Motorsports, Toyota GT-One, Ukyo
                Katayama(JAP), Keiichi Tsuchiya(JAP), Toshio Suzuki(JAP),
                1.16,349
              </p>
              <p>
                Overall Winner: #23 Nissan Motorsports, Nissan R391, Erik
                Comas(FRA), Satoshi Motoyama(JAP), Masami Kageyama(JAP),
                5:32.56,125
              </p>
              <p>
                LMGTP Winner: #1 Toyota Motorsports, Toyota GT-One, Ukyo
                Katayama(JAP), Keiichi Tsuchiya(JAP), Toshio Suzuki(JAP), +1 Lap
              </p>
              <p>
                GT500 Winner: #35 Matsumoto-Kiyoshi Team Tom's, Toyota Supra,
                Pierre-Henri Raphanel(FRA), Shininchi Yamaji(JAP), Takeshi
                Tsuchiya(JAP), +17 Laps
              </p>
              <p>
                LMGTS Winner: #60 Team Goh/Chamberlain Engineering, Dodge Viper
                GTS-R, Seiji Ara(JAP), Hideki Okada(JAP), +25 Laps
              </p>
              <p>
                LMGT Winner: #81 Team Taisan Advan, Porsche 911 GT3-R, Hideshi
                Matsuda(JAP), Dominik Schwager(DEU), +31 Laps
              </p>
              <p>
                GT300 Winner: #91 910 Racing, Porsche 911 3.8 RSR, Masamitsu
                Ishihara(JAP), Keiichi Takahashi(JAP), Tomohiko Sunako(JAP), +50
                Laps
              </p>
            </li>
            <li>
              <p className="font-bold">Grand Prix of Las Vegas</p>
              <p>Las Vegas Motor Speedway, Las Vegas, Nevada</p>
              <p>Date: 07.11.1999</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: LMP, GTS, GT</p>
              <p>Circuit Length: 3.621 km</p>
              <p>Laps Completed: 129</p>
              <p>Distance Covered: 467.109 km</p>
              <p>Number of cars entered: 37 (16 LMP, 8 GTS, 13 GT)</p>
              <p>Number of cars finished: 25 (9 LMP, 6 GTS, 10 GT)</p>
              <p>
                Pole Position: #1 Panoz Motor Sports, Panoz LMP-1 Roadster-S,
                David Brabham(AUS), Eric Bernard(FRA), 1.07,404
              </p>
              <p>
                Overall Winner: #42 BMW Motorsport, BMW V12 LMR, JJ Lehto(FIN),
                Steve Soper(GBR), 2:45.26,196
              </p>
              <p>
                GTS Winner: #92 Dodge Viper Team Oreca, Dodge Viper GTS-R, Karl
                Wendlinger(AUT), Tommy Archer(USA), +9 Laps
              </p>
              <p>
                GT Winner: #23 Manthey Racing/Alex Job Racing, Porsche 911
                GT3-R, Dirk Müller(DEU), Cort Wagner(USA), +12 Laps
              </p>
            </li>
          </ol>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h2>Season Totals</h2>
          <div>
            <p>Number of Races: 10</p>
            <p>Total Distance Covered: 12177.746 km</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h2>Misc Links</h2>
          <ul>
            <li>
              <a
                href="https://web.archive.org/web/19991126085346/http://www.americanlemans.com/pages/news99/3mosp/mosp-990627-b.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                BMW withdraws from Mosport
              </a>
            </li>
            <li>
              <a
                href="https://web.archive.org/web/20000124021725/http://professionalsportscar.com/news/100199.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                San Diego race postponed, replaced by Las Vegas
              </a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
