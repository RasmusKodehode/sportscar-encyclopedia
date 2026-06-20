import Image from "next/image";

export default function ZeroZero() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full flex-col items-center justify-start py-12 px-16 bg-white gap-8">
        <h1>2000 Season</h1>
        <div className="flex flex-col gap-2">
          <h2>Series and Regulation News</h2>
          <ul>
            <li>
              ACO again restructured the classes for Le Mans, renaming the
              previous year's LMP class LMP900, and adding the LMP675-class for
              smaller, lighter prototypes. The prototypes running under Grand Am
              rules and the FIA Sportscar Championship rules could be modified
              to run in either class. The 900/675-designation refers to the
              minimum weight of the cars, 900 kg for the top class, 675 kg for
              the other.
            </li>
            <li>
              ALMS revealed{" "}
              <a
                href="https://web.archive.org/web/19991129022820/http://www.americanlemans.com/pages/news99/alms990917.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                an expanded calendar
              </a>{" "}
              for 2000, including new events at Charlotte and Texas. Following
              the the postponement of the San Diego Race in 1999 it was{" "}
              <a
                href="https://web.archive.org/web/19991013112215/http://americanlemans.com/pages/news99/alms991001-2.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                added as the season opener
              </a>{" "}
              in 2000. Three overseas races were also included on the calendar,
              two of them later revealed to be{" "}
              <a
                href="https://web.archive.org/web/20000303110252/http://www.americanlemans.com/pages/news99/alms000114.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Silverstone and Nurburgring
              </a>{" "}
              in Europe, and the Race of a Thousand Years on New Year's Eve in
              Adelaide, Australia. All three were set to launch separate Le Mans
              Series' in 2001.
            </li>
            <li>
              Despite the luke warm interest at the 1000km event at Fuji, the
              ACO scheduled another edition to give it another try.
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2>Manufacturer News</h2>
          <ul>
            <li>
              After the scary accidents suffered by the Mercedes' at Le Mans was
              found to be because of a fundamental aerodynamic instability of
              the car, the team withdrew from racing and the CLRs never raced
              again.
            </li>
            <li>
              Nissan and Toyota both also withdrew from sportscars at the end of
              the year, with Toyota planning to enter F1.
            </li>
            <li>
              BMW entered F1 in 2000, thus the team didn't return to Le Mans for
              2000. However Team Schnitzer continued racing the cars with
              factory support for the full ALMS Season.
            </li>
            <li>
              After getting up to speed in 1999, Audi revealed the open cockpit
              R8 derived from the R8R. The team planned a full season of ALMS,
              but with the new cars going back to Europe to prepare for Le Mans,
              the R8R was brought back to complete the events at Charlotte and
              Silverstone. The closed cockpit R8C was found to be less
              preferable to the open cockpit design, and thus shelved at the end
              of the season.
            </li>
            <li>
              Cadillac joined with the new Northstar LMP with the chassis
              designed and built by Riley & Scott, the car debuting in the
              Grand-Am sanctioned 24h of Daytona. Riley & Scott operated the
              cars as Team Cadillac in selected ALMS races, with french team
              DAMS operating the cars in the Sports Racing World Cup.
            </li>
            <li>
              Ascari launched the A410, competing at the European ALMS-rounds in
              addition to the Sports Racing World Cup, but the team debuted too
              late to get an entry for Le Mans.
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
                  <td rowSpan={5}>
                    <strong>BMW Motorsport</strong>
                  </td>
                  <td rowSpan={5}>BMW V12 LMR</td>
                  <td rowSpan={2}>42</td>
                  <td>Jörg Müller(DEU)</td>
                  <td>
                    Sebring, Charlotte, Silverstone, Nürburgring, Sonoma,
                    Mosport, Texas, Portland, Petit Le Mans, Laguna Seca, Las
                    Vegas
                  </td>
                </tr>
                <tr>
                  <td>JJ Lehto(FIN)</td>
                  <td>
                    Sebring, Charlotte, Silverstone, Nürburgring, Sonoma,
                    Mosport, Texas, Portland, Petit Le Mans, Laguna Seca, Las
                    Vegas
                  </td>
                </tr>
                <tr>
                  <td rowSpan={3}>43</td>
                  <td>Bill Auberlen(USA)</td>
                  <td>
                    Sebring, Charlotte, Silverstone, Nürburgring, Sonoma,
                    Mosport, Texas, Portland, Petit Le Mans, Laguna Seca, Las
                    Vegas
                  </td>
                </tr>
                <tr>
                  <td>Jean-Marc Gounon(FRA)</td>
                  <td>
                    Sebring, Charlotte, Silverstone, Nürburgring, Sonoma,
                    Mosport, Texas, Portland, Petit Le Mans, Laguna Seca, Las
                    Vegas
                  </td>
                </tr>
                <tr>
                  <td>Steve Soper(GBR)</td>
                  <td>Sebring</td>
                </tr>
                <tr>
                  <td rowSpan={12}>
                    <strong>Audi Sport North America</strong>
                  </td>
                  <td rowSpan={7}>Audi R8</td>
                  <td rowSpan={4}>77</td>
                  <td>Rinaldo Capello(ITA)</td>
                  <td>
                    Sebring, Nürburgring, Sonoma, Mosport, Texas, Portland,
                    Laguna Seca, Las Vegas, Adelaide
                  </td>
                </tr>
                <tr>
                  <td>Allan McNish(GBR)</td>
                  <td>
                    Sebring, Nürburgring, Sonoma, Mosport, Texas, Portland,
                    Laguna Seca, Las Vegas, Adelaide
                  </td>
                </tr>
                <tr>
                  <td>Michele Alboreto(ITA)</td>
                  <td>Sebring, Petit Le Mans</td>
                </tr>
                <tr>
                  <td>Brad Jones(AUS)</td>
                  <td>
                    <em>Adelaide</em>
                  </td>
                </tr>
                <tr>
                  <td rowSpan={3}>78</td>
                  <td>Frank Biela(DEU)</td>
                  <td>
                    Sebring, Nürburgring, Sonoma, Mosport, Texas, Portland,
                    Laguna Seca, Las Vegas, Adelaide
                  </td>
                </tr>
                <tr>
                  <td>Emanuele Pirro(ITA)</td>
                  <td>
                    Sebring, Nürburgring, Sonoma, Mosport, Texas, Portland,
                    Laguna Seca, Las Vegas, Adelaide
                  </td>
                </tr>
                <tr>
                  <td>Tom Kristensen(DEN)</td>
                  <td>Sebring, Petit Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={5}>Audi R8R</td>
                  <td rowSpan={3}>77</td>
                  <td>Rinaldo Capello(ITA)</td>
                  <td>Charlotte, Silverstone</td>
                </tr>
                <tr>
                  <td>Allan McNish(GBR)</td>
                  <td>Charlotte, Silverstone</td>
                </tr>
                <tr>
                  <td>Michele Alboreto(ITA)</td>
                  <td>
                    Charlotte, <em>Silverstone</em>
                  </td>
                </tr>
                <tr>
                  <td rowSpan={2}>78</td>
                  <td>Frank Biela(DEU)</td>
                  <td>Charlotte, Silverstone</td>
                </tr>
                <tr>
                  <td>Emanuele Pirro(ITA)</td>
                  <td>Charlotte, Silverstone</td>
                </tr>
                <tr>
                  <td rowSpan={9}>
                    <strong>Audi Sport Team Joest</strong>
                  </td>
                  <td rowSpan={9}>Audi R8</td>
                  <td rowSpan={3}>7</td>
                  <td>Rinaldo Capello(ITA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Michele Alboreto(ITA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Christian Abt(DEU)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={3}>8</td>
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
                  <td rowSpan={3}>9</td>
                  <td>Laurent Aïello(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Allan McNish(GBR)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Stephane Ortelli(MCO)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={17}>
                    <strong>Panoz Motor Sports</strong>
                  </td>
                  <td rowSpan={15}>Panoz LMP-1 Roadster-S</td>
                  <td rowSpan={3}>1</td>
                  <td>David Brabham(AUS)</td>
                  <td>
                    Sebring, Charlotte, Silverstone, Nürburgring, Sonoma,
                    Mosport, Texas, Portland, Petit Le Mans, Laguna Seca, Las
                    Vegas
                  </td>
                </tr>
                <tr>
                  <td>Jan Magnussen(DEN)</td>
                  <td>
                    Sebring, Charlotte, Silverstone, Nürburgring, Sonoma,
                    Mosport, Texas, Portland, Petit Le Mans, Laguna Seca, Las
                    Vegas
                  </td>
                </tr>
                <tr>
                  <td>Pierre-Henri Raphanel(FRA)</td>
                  <td>Sebring</td>
                </tr>
                <tr>
                  <td rowSpan={3}>2</td>
                  <td>Johnny O'Connell(USA)</td>
                  <td>
                    Sebring, Charlotte, Silverstone, Nürburgring, Sonoma,
                    Mosport, Texas, Portland, Petit Le Mans, Laguna Seca, Las
                    Vegas, Adelaide
                  </td>
                </tr>
                <tr>
                  <td>Hiroki Katoh(JAP)</td>
                  <td>
                    Sebring, Charlotte, Silverstone, Nürburgring, Sonoma,
                    Mosport, Texas, Portland, Petit Le Mans, Laguna Seca, Las
                    Vegas, Adelaide
                  </td>
                </tr>
                <tr>
                  <td>Klaus Graf(DEU)</td>
                  <td>
                    <em>Sebring</em>, Nürburgring, Petit Le Mans
                  </td>
                </tr>
                <tr>
                  <td rowSpan={3}>11</td>
                  <td>David Brabham(AUS)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Jan Magnussen(DEN)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Mario Andretti(USA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={6}>12</td>
                  <td>Johnny O'Connell(USA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Hiroki Katoh(JAP)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Pierre-Henri Raphanel(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>David Brabham(AUS)</td>
                  <td>Adelaide</td>
                </tr>
                <tr>
                  <td>Greg Murphy(NZE)</td>
                  <td>Adelaide</td>
                </tr>
                <tr>
                  <td>Jason Bright(AUS)</td>
                  <td>Adelaide</td>
                </tr>
                <tr>
                  <td rowSpan={2}>Panoz LMP07</td>
                  <td rowSpan={2}>1</td>
                  <td>Jan Magnussen(DEN)</td>
                  <td>Adelaide</td>
                </tr>
                <tr>
                  <td>Klaus Graf(DEU)</td>
                  <td>Adelaide</td>
                </tr>
                <tr>
                  <td rowSpan={12}>
                    <strong>Team Cadillac</strong>
                  </td>
                  <td rowSpan={12}>Cadillac Northstar LMP</td>
                  <td rowSpan={3}>9</td>
                  <td>Franck Lagorce(FRA)</td>
                  <td>Sebring, Petit Le Mans</td>
                </tr>
                <tr>
                  <td>Andy Wallace(GBR)</td>
                  <td>Sebring, Petit Le Mans</td>
                </tr>
                <tr>
                  <td>Butch Leitzinger(USA)</td>
                  <td>
                    <em>Sebring</em>, Petit Le Mans
                  </td>
                </tr>
                <tr>
                  <td rowSpan={3}>19</td>
                  <td>Wayne Taylor(ZAF)</td>
                  <td>Sebring, Portland, Petit Le Mans, Laguna Seca</td>
                </tr>
                <tr>
                  <td>Max Angelelli(ITA)</td>
                  <td>Sebring, Portland, Petit Le Mans, Laguna Seca</td>
                </tr>
                <tr>
                  <td>Eric van de Poele(BEL)</td>
                  <td>Sebring, Petit Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={3}>1</td>
                  <td>Franck Lagorce(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Andy Wallace(GBR)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Butch Leitzinger(USA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={3}>2</td>
                  <td>Eric van de Poele(BEL)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Wayne Taylor(ZAF)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Max Angelelli(ITA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={12}>
                    <strong>DAMS</strong>
                  </td>
                  <td rowSpan={12}>Cadillac Northstar LMP</td>
                  <td rowSpan={3}>31</td>
                  <td>Emmanuel Collard(FRA)</td>
                  <td>
                    Sebring, Silverstone, Nurburgring, Petit Le Mans, Adelaide
                  </td>
                </tr>
                <tr>
                  <td>Eric Bernard(FRA)</td>
                  <td>
                    Sebring, Silverstone, Nurburgring, Petit Le Mans, Adelaide
                  </td>
                </tr>
                <tr>
                  <td>Christophe Tinseau(FRA)</td>
                  <td>
                    <em>Sebring</em>
                  </td>
                </tr>
                <tr>
                  <td rowSpan={3}>32</td>
                  <td>Marc Goosens(BEL)</td>
                  <td>Nurburgring, Petit Le Mans, Adelaide</td>
                </tr>
                <tr>
                  <td>Christophe Tinseau(FRA)</td>
                  <td>
                    <em>Nurburgring</em>, Petit Le Mans, Adelaide
                  </td>
                </tr>
                <tr>
                  <td>Franck Montagny(FRA)</td>
                  <td>Nurburgring</td>
                </tr>
                <tr>
                  <td rowSpan={3}>3</td>
                  <td>Emmanuel Collard(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Eric Bernard(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Franck Montagny(FRA)</td>
                  <td>Le Mans</td>
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
                  <td>Kristian Kolby(DEN)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={4}>
                    <strong>Team Ascari</strong>
                  </td>
                  <td rowSpan={4}>Ascari A410</td>
                  <td rowSpan={4}>24</td>
                  <td>Max Wilson(BRA)</td>
                  <td>
                    <em>Silverstone</em>
                  </td>
                </tr>
                <tr>
                  <td>Klaas Zwart(NED)</td>
                  <td>
                    <em>Silverstone</em>, Nurburgring
                  </td>
                </tr>
                <tr>
                  <td>Werner Lupberger(ZAF)</td>
                  <td>Nurburgring</td>
                </tr>
                <tr>
                  <td>Jeffrey van Hooydonck(BEL)</td>
                  <td>Nurburgring</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h2>Calendar</h2>
          <ol className="flex flex-col gap-4">
            <li>
              <p className="font-bold">San Diego Grand Prix</p>
              <p>San Diego Street Circuit, San Diego, California</p>
              <p>Date: 27.02.2000</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: LMP, GTS, GT</p>
              <p>Circuit Length: 2.462 km</p>
              <p>Laps Completed: 0</p>
              <p>Distance Covered: - km</p>
              <p>
                Race cancelled due to organizer{" "}
                <a
                  href="https://web.archive.org/web/20000519153004/http://www.professionalsportscar.com/news/120899.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  failing to meet deadlines
                </a>{" "}
                to get the event ready on time
              </p>
            </li>
            <li>
              <p className="font-bold">
                48th Annual Exxon Superflo 12 Hours of Sebring
              </p>
              <p>Sebring International Raceway, Sebring, Florida</p>
              <p>Date: 18.03.2000</p>
              <p>Series: ALMS</p>
              <p>Race Format: 12 Hours</p>
              <p>Classes: LMP, GTS, GT</p>
              <p>Circuit Length: 6.019 km</p>
              <p>Laps Completed: 360</p>
              <p>Distance Covered: 2166.840 km</p>
              <p>Number of cars entered: 42 (17 LMP, 8 GTS, 17 GT)</p>
              <p>Number of cars finished: 22 (7 LMP, 5 GTS, 10 GT)</p>
              <p>
                Pole Position: #78 Audi Sport North America, Audi R8, Frank
                Biela(DEU), Emanuele Pirro(ITA), Tom Kristensen(DEN), 1.48,825
              </p>
              <p>
                Overall Winner: #78 Audi Sport North America, Audi R8, Frank
                Biela(DEU), Emanuele Pirro(ITA), Tom Kristensen(DEN),
                12:02.00,160
              </p>
              <p>
                GTS Winner: #91 Viper Team Oreca, Dodge Viper GTS-R, Dominique
                Dupuy(FRA), Olivier Beretta(MON), Karl Wendlinger(AUT), +33 Laps
              </p>
              <p>
                GT Winner: #5 Dick Barbour Racing, Porsche 911 GT3-R, Dirk
                Müller(DEU), Lucas Luhr(DEU), +47 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">Grand Prix of Charlotte</p>
              <p>Lowe's Motor Speedway, Concord, North Carolina</p>
              <p>Date: 01.04.2000</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: LMP, GTS, GT</p>
              <p>Circuit Length: 3.621 km</p>
              <p>Laps Completed: 125</p>
              <p>Distance Covered: 452.625 km</p>
              <p>Number of cars entered: 23 (8 LMP, 4 GTS, 11 GT)</p>
              <p>Number of cars finished: 21 (8 LMP, 3 GTS, 10 GT)</p>
              <p>
                Pole Position: #42 BMW Motorsport, BMW V12 LMR, Jörg
                Müller(DEU), JJ Lehto(FIN), 1.04,096
              </p>
              <p>
                Overall Winner: #42 BMW Motorsport, BMW V12 LMR, Jörg
                Müller(DEU), JJ Lehto(FIN), 2:45.48,157
              </p>
              <p>
                GTS Winner: #91 Viper Team Oreca, Dodge Viper GTS-R, Olivier
                Beretta(MON), Karl Wendlinger(AUT), +8 Laps
              </p>
              <p>
                GT Winner: #51 Dick Barbour Racing, Porsche 911 GT3-R, Sascha
                Maassen(DEU), Bob Wollek(FRA), +12 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">Silverstone 500 USA Challenge</p>
              <p>Silverstone Circuit, Silverstone, Great Britain</p>
              <p>Date: 13.05.2000</p>
              <p>Series: ALMS</p>
              <p>Race Format: 500 km or 3 Hours</p>
              <p>Classes: LMP, GTS, GT</p>
              <p>Circuit Length: 5.141 km</p>
              <p>Laps Completed: 98</p>
              <p>Distance Covered: 503.818 km</p>
              <p>Number of cars entered: 36 (15 LMP, 8 GTS, 13 GT)</p>
              <p>Number of cars finished: 28 (9 LMP, 8 GTS, 11 GT)</p>
              <p>
                Pole Position: #0 Team Rafanelli, Lola B2K/10 - Judd, Mimmo
                Schiattarella(ITA), Didier de Radigues(BEL), 1.37,030
              </p>
              <p>
                Overall Winner: #42 BMW Motorsport, BMW V12 LMR, Jörg
                Müller(DEU), JJ Lehto(FIN), 2:55.06,379
              </p>
              <p>
                GTS Winner: #91 Viper Team Oreca, Dodge Viper GTS-R, Olivier
                Beretta(MON), Karl Wendlinger(AUT), +7 Laps
              </p>
              <p>
                GT Winner: #51 Dick Barbour Racing, Porsche 911 GT3-R, Sascha
                Maassen(DEU), Bob Wollek(FRA), +11 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">
                68<sup>e</sup> 24 Heures du Mans
              </p>
              <p>Circuit de la Sarthe, Le Mans, France</p>
              <p>Date: 17-18.06.2000</p>
              <p>Series: Standalone event</p>
              <p>Race Format: 24 Hours</p>
              <p>Classes: LMP900, LMP675, LMGTS, LMGT</p>
              <p>Circuit Length: 13.605 km</p>
              <p>Laps Completed: 368</p>
              <p>Distance Covered: 5006.640 km</p>
              <p>
                Number of cars entered: 48 (20 LMP900, 6 LMP675, 10 LMGTS, 12
                LMGT)
              </p>
              <p>
                Number of cars finished: 27 (12 LMP900, 2 LMP675, 7 LMGTS, 6
                LMGT)
              </p>
              <p>
                Pole Position: #9 Audi Sport Team Joest, Audi R8, Allan
                McNish(GBR), Stephane Ortelli(MON), Laurent Aiello(FRA),
                3.36,124
              </p>
              <p>
                Overall Winner: #8 Audi Sport Team Joest, Audi R8, Frank
                Biela(DEU), Emanuele Pirro(ITA), Tom Kristensen(DEN),
                24:00.00,000
              </p>
              <p>
                LMGTS Winner: #51 Viper Team Oreca, Dodge Viper GTS-R, Dominique
                Dupuy(FRA), Olivier Beretta(MON), Karl Wendlinger(AUT), +35 Laps
              </p>
              <p>
                LMGT Winner: #73 Team Taisan Advan, Porsche 911 GT3-R, Hideo
                Fukuyama(JAP), Atsushi Yogo(JAP), Bruno Lambert(BEL), +58 Laps
              </p>
              <p>
                LMP675 Winner: #32 Multimatic Motorsports, Lola B2K/40 - Nissan,
                Scott Maxwell(CAN), John Graham(CAN), Greg Wilkins(CAN), +94
                Laps
              </p>
            </li>
            <li>
              <p className="font-bold">Bitburger/AvD 1000 km of Nürburgring</p>
              <p>Nürburgring, Nürburg, Germany</p>
              <p>Date: 09.07.2000</p>
              <p>Series: ALMS</p>
              <p>Race Format: 1000 km or 5 Hours 45 minutes</p>
              <p>Classes: LMP900, LMP675 GTS, GT</p>
              <p>Circuit Length: 4.556 km</p>
              <p>Laps Completed: 185</p>
              <p>Distance Covered: 842.860 km</p>
              <p>
                Number of cars entered: 38 (15 LMP900, 3 LMP675, 6 GTS, 13 GT)
              </p>
              <p>
                Number of cars finished: 25 (8 LMP900, 3 LMP675, 4 GTS, 10 GT)
              </p>
              <p>
                Pole Position: #77 Audi Sport North America, Audi R8, Rinaldo
                Capello(ITA), Allan McNish(GBR), 1.27,938
              </p>
              <p>
                Overall Winner: #1 Panoz Motor Sports, Panoz LMP-1 Roadster-S,
                David Brabham(AUS), Jan Magnussen(DEN), 5:45.55,173
              </p>
              <p>
                LMP675 Winner: #53 Racing Organisation Course, Reynard 2KQ-LM -
                Volkswagen, Ralf Kelleners(DEU), Jerome Policand(FRA), +5 Laps
              </p>
              <p>
                GTS Winner: #91 Viper Team Oreca, Dodge Viper GTS-R, Olivier
                Beretta(MON), Karl Wendlinger(AUT), Marc Duez(BEL), +10 Laps
              </p>
              <p>
                GT Winner: #5 Dick Barbour Racing, Porsche 911 GT3-R, Dirk
                Müller(DEU), Lucas Luhr(DEU), +16 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">Grand Prix of Sonoma</p>
              <p>Sears Point Raceway, Sonoma, California</p>
              <p>Date: 23.07.2000</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: LMP, GTS, GT</p>
              <p>Circuit Length: 4.056 km</p>
              <p>Laps Completed: 114</p>
              <p>Distance Covered: 462.384 km</p>
              <p>Number of cars entered: 29 (11 LMP, 3 GTS, 15 GT)</p>
              <p>Number of cars finished: 18 (7 LMP, 3 GTS, 8 GT)</p>
              <p>
                Pole Position: #77 Audi Sport North America, Audi R8, Rinaldo
                Capello(ITA), Allan McNish(GBR), 1.20,683
              </p>
              <p>
                Overall Winner: #77 Audi Sport North America, Audi R8, Rinaldo
                Capello(ITA), Allan McNish(GBR), 2:46.31,336
              </p>
              <p>
                GTS Winner: #92 Viper Team Oreca, Dodge Viper GTS-R, David
                Donohue(USA), Tommy Archer(USA), +13 Laps
              </p>
              <p>
                GT Winner: #5 Dick Barbour Racing, Porsche 911 GT3-R, Dirk
                Müller(DEU), Lucas Luhr(DEU), +15 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">
                globemegawheels.com Grand Prix of Mosport
              </p>
              <p>Mosport International Raceway, Bowmanville, Ontario</p>
              <p>Date: 06.08.2000</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: LMP, GTS, GT</p>
              <p>Circuit Length: 3.957 km</p>
              <p>Laps Completed: 94</p>
              <p>Distance Covered: 371.958 km</p>
              <p>Number of cars entered: 29 (10 LMP, 5 GTS, 14 GT)</p>
              <p>Number of cars finished: 19 (4 LMP, 4 GTS, 11 GT)</p>
              <p>
                Pole Position: #78 Audi Sport North America, Audi R8, Frank
                Biela(DEU), Emanuele Pirro(ITA), 1.08,432
              </p>
              <p>
                Overall Winner: #77 Audi Sport North America, Audi R8, Rinaldo
                Capello(ITA), Allan McNish(GBR), 2:46.05,662
              </p>
              <p>
                GTS Winner: #91 Viper Team Oreca, Dodge Viper GTS-R, Olivier
                Beretta(MON), Karl Wendlinger(AUT), +3 Laps
              </p>
              <p>
                GT Winner: #23 Alex Job Racing, Porsche 911 GT3-R, Randy
                Pobst(USA), Bruno Lambert(BEL), +5 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">Grand Prix of Texas</p>
              <p>Texas Motor Speedway, Fort Worth, Texas</p>
              <p>Date: 02.09.2000</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: LMP, GTS, GT</p>
              <p>Circuit Length: 3.740 km</p>
              <p>Laps Completed: 127</p>
              <p>Distance Covered: 474.980 km</p>
              <p>Number of cars entered: 26 (10 LMP, 5 GTS, 11 GT)</p>
              <p>Number of cars finished: 21 (8 LMP, 2 GTS, 11 GT)</p>
              <p>
                Pole Position: #77 Audi Sport North America, Audi R8, Rinaldo
                Capello(ITA), Allan McNish(GBR), 1.12,716
              </p>
              <p>
                Overall Winner: #78 Audi Sport North America, Audi R8, Frank
                Biela(DEU), Emanuele Pirro(ITA), 2:45.46,367
              </p>
              <p>
                GTS Winner: #3 Corvette Racing, Chevrolet Corvette C5-R, Andy
                Pilgrim(USA), Ron Fellows(CAN), <em>Justin Bell(GBR)</em>, +11
                Laps
              </p>
              <p>
                GT Winner: #23 Alex Job Racing, Porsche 911 GT3-R, Randy
                Pobst(USA), Bruno Lambert(BEL), +15 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">
                DecisionPoint Applications Rose City Grand Prix
              </p>
              <p>Portland International Raceway, Portland, Oregon</p>
              <p>Date: 10.09.2000</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: LMP, GTS, GT</p>
              <p>Circuit Length: 3.129 km</p>
              <p>Laps Completed: 136</p>
              <p>Distance Covered: 425.544 km</p>
              <p>Number of cars entered: 27 (12 LMP, 3 GTS, 12 GT)</p>
              <p>Number of cars finished: 25 (11 LMP, 3 GTS, 11 GT)</p>
              <p>
                Pole Position: #77 Audi Sport North America, Audi R8, Rinaldo
                Capello(ITA), Allan McNish(GBR), 1.04,312
              </p>
              <p>
                Overall Winner: #77 Audi Sport North America, Audi R8, Rinaldo
                Capello(ITA), Allan McNish(GBR), 2:45.05,695
              </p>
              <p>
                GTS Winner: #91 Viper Team Oreca, Dodge Viper GTS-R, Olivier
                Beretta(MON), Karl Wendlinger(AUT), +13 Laps
              </p>
              <p>
                GT Winner: #51 Dick Barbour Racing, Porsche 911 GT3-R, Sascha
                Maassen(DEU), Bob Wollek(FRA), +15 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">3rd Annual Petit Le Mans</p>
              <p>Road Atlanta, Braselton, Georgia</p>
              <p>Date: 30.09.2000</p>
              <p>Series: ALMS</p>
              <p>Race Format: 1000 Miles or 10 Hours</p>
              <p>Classes: LMP, GTS, GT</p>
              <p>Circuit Length: 4.088 km</p>
              <p>Laps Completed: 394</p>
              <p>Distance Covered: 1610.672 km</p>
              <p>Number of cars entered: 39 (14 LMP, 9 GTS, 16 GT)</p>
              <p>Number of cars finished: 24 (9 LMP, 7 GTS, 8 GT)</p>
              <p>
                Pole Position: #77 Audi Sport North America, Audi R8, Rinaldo
                Capello(ITA), Michele Alboreto(ITA), Allan McNish(GBR), 1.10,379
              </p>
              <p>
                Overall Winner: #77 Audi Sport North America, Audi R8, Rinaldo
                Capello(ITA), Michele Alboreto(ITA), Allan McNish(GBR),
                9:08.40,619
              </p>
              <p>
                GTS Winner: #4 Corvette Racing, Chevrolet Corvette C5-R, Andy
                Pilgrim(USA), Kelly Collins(USA), Franck Freon(FRA), +36 Laps
              </p>
              <p>
                GT Winner: #51 Dick Barbour Racing, Porsche 911 GT3-R, Sascha
                Maassen(DEU), Bob Wollek(FRA), +51 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">
                Globalcenter Monterey Sports Car Championships
              </p>
              <p>Laguna Seca Raceway, Monterey, California</p>
              <p>Date: 15.10.2000</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: LMP, GTS, GT</p>
              <p>Circuit Length: 3.602 km</p>
              <p>Laps Completed: 119</p>
              <p>Distance Covered: 428.638 km</p>
              <p>Number of cars entered: 36 (13 LMP, 8 GTS, 15 GT)</p>
              <p>Number of cars finished: 27 (9 LMP, 6 GTS, 12 GT)</p>
              <p>
                Pole Position: #77 Audi Sport North America, Audi R8, Rinaldo
                Capello(ITA), Allan McNish(GBR), 1.15,028
              </p>
              <p>
                Overall Winner: #77 Audi Sport North America, Audi R8, Rinaldo
                Capello(ITA), Allan McNish(GBR), 2:46.09,892
              </p>
              <p>
                GTS Winner: #91 Viper Team Oreca, Dodge Viper GTS-R, Olivier
                Beretta(MON), Karl Wendlinger(AUT), +10 Laps
              </p>
              <p>
                GT Winner: #7 Prototype Technology Group, BMW M3, Boris
                Said(USA), Hans-Joachim Stuck(DEU), +14 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">Grand Prix of Las Vegas</p>
              <p>Las Vegas Motor Speedway, Las Vegas, Nevada</p>
              <p>Date: 29.10.2000</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: LMP, GTS, GT</p>
              <p>Circuit Length: 3.621 km</p>
              <p>Laps Completed: 129</p>
              <p>Distance Covered: 467.109 km</p>
              <p>Number of cars entered: 34 (12 LMP, 7 GTS, 15 GT)</p>
              <p>Number of cars finished: 27 (9 LMP, 5 GTS, 13 GT)</p>
              <p>
                Pole Position: #77 Audi Sport North America, Audi R8, Rinaldo
                Capello(ITA), Allan McNish(GBR), 1.06,628
              </p>
              <p>
                Overall Winner: #78 Audi Sport North America, Audi R8, Frank
                Biela(DEU), Emanuele Pirro(ITA), 2:45.05,695
              </p>
              <p>
                GTS Winner: #91 Viper Team Oreca, Dodge Viper GTS-R, Olivier
                Beretta(MON), Karl Wendlinger(AUT), +9 Laps
              </p>
              <p>
                GT Winner: #51 Dick Barbour Racing, Porsche 911 GT3-R, Sascha
                Maassen(DEU), Bob Wollek(FRA), +11 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">Le Mans Fuji 1000 km</p>
              <p>Fuji International Speedway, Oyama, Japan</p>
              <p>Date: 19.11.2000</p>
              <p>Series: Non-Championship</p>
              <p>Race Format: 1000 km or 6 Hours</p>
              <p>Classes: LMP900, LMGTP, LMP675, LMGTS, LMGT, GT500, GT300</p>
              <p>Circuit Length: 4.469 km</p>
              <p>Laps Completed: 0</p>
              <p>Distance Covered: - km</p>
              <p>
                <a
                  href="https://web.archive.org/web/20010302142239/http://www.fisco-jp.com/2000info/info/lemans2k.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Race cancelled
                </a>{" "}
                due to fears over a lack of entries following the withdrawal of
                Toyota and Nissan
              </p>
            </li>
            <li>
              <p className="font-bold">Race of a Thousand Years</p>
              <p>Adelaide Street Circuit, Adelaide, Australia</p>
              <p>Date: 31.12.2000</p>
              <p>Series: ALMS</p>
              <p>Race Format: 1000 km or 5 Hours 45 minutes</p>
              <p>Classes: LMP900, GTS, GT</p>
              <p>Circuit Length: 3.780 km</p>
              <p>Laps Completed: 225</p>
              <p>Distance Covered: 850.500 km</p>
              <p>Number of cars entered: 25 (9 LMP900, 4 GTS, 12 GT)</p>
              <p>Number of cars finished: 16 (4 LMP900, 3 GTS, 9 GT)</p>
              <p>
                Pole Position: #77 Audi Sport North America, Audi R8, Rinaldo
                Capello(ITA), Allan McNish(GBR), <em>Brad Jones(AUS)</em>,
                1.23,804
              </p>
              <p>
                Overall Winner: #77 Audi Sport North America, Audi R8, Rinaldo
                Capello(ITA), Allan McNish(GBR), <em>Brad Jones(AUS)</em>,
                5:44.51,737
              </p>
              <p>
                GTS Winner: #91 Viper Team Oreca, Dodge Viper GTS-R, Olivier
                Beretta(MON), Karl Wendlinger(AUT), Dominique Dupuy(FRA), +23
                Laps
              </p>
              <p>
                GT Winner: #5 Dick Barbour Racing, Porsche 911 GT3-R, Dirk
                Müller(DEU), Lucas Luhr(DEU), +26 Laps
              </p>
            </li>
          </ol>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h2>Season Totals</h2>
          <div>
            <p>Number of Races: 13</p>
            <p>Total Distance Covered: 14064.568 km</p>
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
