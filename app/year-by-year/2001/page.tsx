import Image from "next/image";

export default function ZeroOne() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full flex-col items-center justify-start py-12 px-16 bg-white gap-8">
        <h1>2001 Season</h1>
        <div className="flex flex-col gap-2">
          <h2>Series and Regulation News</h2>
          <ul>
            <li>
              After debuting at Le Mans in 2000, ALMS took on the{" "}
              <a
                href="https://web.archive.org/web/20010204223100/http://www.americanlemans.com/pages/00news/alms001113.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                LMP900 and LMP675 classes
              </a>{" "}
              as well in place of the general LMP-class used in 1999 and 2000.
            </li>
            <li>
              After staging two races in Europe in 2000, ALMS organizer
              Professional Sports Car Racing was looking to expand and the ELMS
              was launched as a sister series in Europe, with{" "}
              <a
                href="https://web.archive.org/web/20001117041000/http://www.professionalsportscar.com/news/Sept2000.htm#9/29/2000g"
                target="_blank"
                rel="noopener noreferrer"
              >
                5 races across Europe
              </a>{" "}
              including a 1000km event at Estoril. The calendar also contained
              optional races at Sebring and Petit Le Mans with ALMS, and the
              race in Adelaide with APLMS.
            </li>
            <li>
              The APLMS were also scheduled to start in 2001 following the Race
              of a Thousand Years at the end of 2000, with Adelaide returning
              alongside a new event at the Sepang International Circuit in
              Malaysia.
            </li>
            <li>
              ALMS presented a{" "}
              <a
                href="https://web.archive.org/web/20001117041000/http://www.professionalsportscar.com/news/Sept2000.htm#9/29/2000f"
                target="_blank"
                rel="noopener noreferrer"
              >
                new calendar for 2001
              </a>{" "}
              centered around the shared events at Donington and Jarama with
              ELMS and Adelaide and Malaysia with the APLMS. The calendar also
              contained a new event at a{" "}
              <a
                href="https://web.archive.org/web/20010627165159/http://www.professionalsportscar.com/news/111500a.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                newly upgraded Mont-Tremblant
              </a>{" "}
              in Canada.
            </li>
            <li>
              Plans were announced in September 1999 to build a new race track
              in Aruba. The organizer had an agreement to host the ALMS season
              opener in 2001, however the 4.345 km{" "}
              <a
                href="https://web.archive.org/web/20000124182926/http:/www.americanlemans.com/pages/news99/alms990928.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Aruba International Raceway
              </a>{" "}
              was never built due to a conflict between the track promoter and
              the Aruban government over funding and the event was never
              officially on the{" "}
              <a
                href="https://us.motorsport.com/alms/news/alms-announces-2001-schedule/1841229/"
                target="_blank"
                rel="noopener noreferrer"
              >
                2001 calendar
              </a>
              , with the calendar slot created for the event eventually given to
              Texas. The failure to comply with the agreements made with ALMS
              and other series it was supposed to host the organizer ended up
              mired in legal cases, which the Aruban government eventually lost
              after shutting down the plans.
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2>Manufacturer News</h2>
          <ul>
            <li>
              After not making the trip to Australia with their prototypes, BMW
              retired their V12 LMRs, and for{" "}
              <a
                href="https://web.archive.org/web/20001117041000/http://www.professionalsportscar.com/news/Sept2000.htm#9/29/2000d"
                target="_blank"
                rel="noopener noreferrer"
              >
                2001 they competed in the GT class
              </a>{" "}
              with the new V8-powered M3 GTR.
            </li>
            <li>
              Audi continued racing in ALMS alongside Le Mans with two factory
              cars, in addition they also sold customer cars to Champion Racing
              in ALMS and Johansson Motorsport in ELMS.
            </li>
            <li>
              Panoz competed with the new LMP07 after debuting it at Adelaide
              the previous year, planning another attack on the ALMS and Le
              Mans.
            </li>
            <li>
              Cadillac continued with an upgraded Northstar LMP01, focusing
              purely on Le Mans with 2 cars operated by DAMS, with Team Cadillac
              returning to the US to compete in selected ALMS events.
            </li>
            <li>
              Bentley debuted the closed-cockpit EXP Speed 8 at Le Mans,
              reviving the LMGTP class which had no entrants in 2000.
            </li>
            <li>
              After increased interest in the MG-brand, the company set out to
              compete at Le Mans. The team tasked Lola with building the chassis
              and AER stood for the engine, with the team selecting the new
              LMP675 class to compete in, hoping the light weight would give
              them an advantage against the other factory prototypes.
            </li>
            <li>
              Ascari continued into their 2nd season, competing again in the FIA
              Sportscar Championship, in addition to also taking trips to the
              ELMS round at Donington and Le Mans.
            </li>
            <li>
              The dominant Dodge Vipers were retired from the GTS class as
              Chrysler started developement of a brand new LMP-car together with
              Oreca and Dallara. The new car debuted at the Donington ELMS-race,
              before the factory effort went to Le Mans.
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
                  <td rowSpan={10}>
                    <strong>Audi Sport North America</strong>
                  </td>
                  <td rowSpan={10}>Audi R8</td>
                  <td rowSpan={4}>1</td>
                  <td>Rinaldo Capello(ITA)</td>
                  <td>
                    Texas, Sebring, Sonoma, Portland, Mosport, Mid-Ohio, Laguna
                    Seca, Petit Le Mans
                  </td>
                </tr>
                <tr>
                  <td>Tom Kristensen(DEN)</td>
                  <td>
                    Texas, Sonoma, Portland, Mosport, Mid-Ohio, Laguna Seca,
                    Petit Le Mans
                  </td>
                </tr>
                <tr>
                  <td>Michele Alboreto(ITA)</td>
                  <td>Sebring</td>
                </tr>
                <tr>
                  <td>Laurent Aïello(FRA)</td>
                  <td>Sebring</td>
                </tr>
                <tr>
                  <td rowSpan={6}>2</td>
                  <td>Frank Biela(DEU)</td>
                  <td>
                    Texas, Sebring, Sonoma, Portland, Mosport, Mid-Ohio, Laguna
                    Seca, Petit Le Mans
                  </td>
                </tr>
                <tr>
                  <td>Emanuele Pirro(ITA)</td>
                  <td>
                    Texas, Sebring, Sonoma, Portland, Mosport, Mid-Ohio, Laguna
                    Seca, Petit Le Mans
                  </td>
                </tr>
                <tr>
                  <td>Tom Kristensen(DEN)</td>
                  <td>Sebring</td>
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
                  <td>Christian Pescatori(ITA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={6}>
                    <strong>Audi Sport Team Joest</strong>
                  </td>
                  <td rowSpan={6}>Audi R8</td>
                  <td rowSpan={4}>1</td>
                  <td>Rinaldo Capello(ITA)</td>
                  <td>Donington, Jarama</td>
                </tr>
                <tr>
                  <td>Tom Kristensen(DEN)</td>
                  <td>Donington, Jarama, Le Mans</td>
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
                  <td rowSpan={2}>2</td>
                  <td>Frank Biela(DEU)</td>
                  <td>Donington, Jarama</td>
                </tr>
                <tr>
                  <td>Emanuele Pirro(ITA)</td>
                  <td>Donington, Jarama</td>
                </tr>
                <tr>
                  <td rowSpan={18}>
                    <strong>Panoz Motor Sports</strong>
                  </td>
                  <td rowSpan={11}>Panoz LMP07</td>
                  <td rowSpan={2}>50</td>
                  <td>Jan Magnussen(DEN)</td>
                  <td>Texas, Sebring, Donington, Jarama</td>
                </tr>
                <tr>
                  <td>David Brabham(AUS)</td>
                  <td>Texas, Sebring, Donington, Jarama</td>
                </tr>
                <tr>
                  <td rowSpan={3}>51</td>
                  <td>Klaus Graf(DEU)</td>
                  <td>Sebring, Donington, Jarama</td>
                </tr>
                <tr>
                  <td>Gualter Salles(BRA)</td>
                  <td>Sebring, Donington</td>
                </tr>
                <tr>
                  <td>Franck Lagorce(FRA)</td>
                  <td>Jarama</td>
                </tr>
                <tr>
                  <td rowSpan={3}>11</td>
                  <td>Klaus Graf(DEU)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Jamie Davies(GBR)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Gary Formato(ZAF)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={3}>12</td>
                  <td>Jan Magnussen(DEN)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>David Brabham(AUS)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Franck Lagorce(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={7}>Panoz LMP-1 Roadster-S</td>
                  <td rowSpan={2}>49</td>
                  <td>Jay Cochran(USA)</td>
                  <td>Texas</td>
                </tr>
                <tr>
                  <td>Richard Dean(GBR)</td>
                  <td>Texas</td>
                </tr>
                <tr>
                  <td rowSpan={2}>50</td>
                  <td>Jan Magnussen(DEN)</td>
                  <td>
                    Sonoma, Portland, Mosport, Mid-Ohio, Laguna Seca, Petit Le
                    Mans
                  </td>
                </tr>
                <tr>
                  <td>David Brabham(AUS)</td>
                  <td>
                    Sonoma, Portland, Mosport, Mid-Ohio, Laguna Seca, Petit Le
                    Mans
                  </td>
                </tr>
                <tr>
                  <td rowSpan={3}>51</td>
                  <td>Klaus Graf(DEU)</td>
                  <td>
                    Texas, Sonoma, Portland, Mosport, Mid-Ohio, Laguna Seca,
                    Petit Le Mans
                  </td>
                </tr>
                <tr>
                  <td>Gualter Salles(BRA)</td>
                  <td>Texas</td>
                </tr>
                <tr>
                  <td>Franck Lagorce(FRA)</td>
                  <td>
                    Sonoma, Portland, Mosport, Mid-Ohio, Laguna Seca, Petit Le
                    Mans
                  </td>
                </tr>
                <tr>
                  <td rowSpan={11}>
                    <strong>Viper Team Oreca</strong>
                  </td>
                  <td rowSpan={11}>Chrysler LMP</td>
                  <td rowSpan={2}>6</td>
                  <td>Olivier Beretta(MCO)</td>
                  <td>Donington</td>
                </tr>
                <tr>
                  <td>Yannick Dalmas(FRA)</td>
                  <td>Donington</td>
                </tr>
                <tr>
                  <td rowSpan={3}>14</td>
                  <td>Seiji Ara(JAP)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Masahiko Kondo(JAP)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Ni Amorim(POR)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={3}>15</td>
                  <td>Yannick Dalmas(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Stephane Sarrazin(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Franck Montagny(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={3}>16</td>
                  <td>Olivier Beretta(MCO)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Karl Wendlinger(AUT)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Pedro Lamy(POR)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={11}>
                    <strong>Team Ascari</strong>
                  </td>
                  <td rowSpan={11}>Ascari A410</td>
                  <td rowSpan={2}>3</td>
                  <td>Werner Lupberger(ZAF)</td>
                  <td>Donington</td>
                </tr>
                <tr>
                  <td>Ben Collins(GBR)</td>
                  <td>Donington</td>
                </tr>
                <tr>
                  <td rowSpan={3}>4</td>
                  <td>Patrick Lemarie(FRA)</td>
                  <td>
                    <em>Donington</em>
                  </td>
                </tr>
                <tr>
                  <td>Klaas Zwart(NED)</td>
                  <td>
                    <em>Donington</em>
                  </td>
                </tr>
                <tr>
                  <td>Harri Toivonen(FIN)</td>
                  <td>
                    <em>Donington</em>
                  </td>
                </tr>
                <tr>
                  <td rowSpan={3}>20</td>
                  <td>Werner Lupberger(ZAF)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Ben Collins(GBR)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Harri Toivonen(FIN)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={3}>21</td>
                  <td>Xavier Pompidou(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Scott Maxwell(CAN)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Klaas Zwart(NED)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={6}>
                    <strong>Team Bentley</strong>
                  </td>
                  <td rowSpan={6}>Bentley EXP Speed 8</td>
                  <td rowSpan={3}>7</td>
                  <td>Martin Brundle(GBR)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Stephane Ortelli(MCO)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Guy Smith(GBR)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
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
                  <td rowSpan={3}>33</td>
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
                  <td rowSpan={3}>34</td>
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
                  <td rowSpan={6}>
                    <strong>DAMS</strong>
                  </td>
                  <td rowSpan={6}>Cadillac Northstar LMP01</td>
                  <td rowSpan={3}>5</td>
                  <td>Emmanuel Collard(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Eric Bernard(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Marc Goosens(BEL)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={3}>6</td>
                  <td>Wayne Taylor(ZAF)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Max Angelelli(ITA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Christophe Tinseau(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={7}>
                    <strong>Team Cadillac</strong>
                  </td>
                  <td rowSpan={7}>Cadillac Northstar LMP01</td>
                  <td rowSpan={4}>7</td>
                  <td>Emmanuel Collard(FRA)</td>
                  <td>Sonoma, Mosport, Mid-Ohio, Laguna Seca, Petit Le Mans</td>
                </tr>
                <tr>
                  <td>Christophe Tinseau(FRA)</td>
                  <td>Sonoma, Mosport, Mid-Ohio, Laguna Seca</td>
                </tr>
                <tr>
                  <td>Marc Goosens(BEL)</td>
                  <td>Petit Le Mans</td>
                </tr>
                <tr>
                  <td>Eric Bernard(FRA)</td>
                  <td>
                    <em>Petit Le Mans</em>
                  </td>
                </tr>
                <tr>
                  <td rowSpan={3}>8</td>
                  <td>Wayne Taylor(ZAF)</td>
                  <td>Sonoma, Mosport, Mid-Ohio, Laguna Seca, Petit Le Mans</td>
                </tr>
                <tr>
                  <td>Max Angelelli(ITA)</td>
                  <td>Sonoma, Mosport, Mid-Ohio, Laguna Seca, Petit Le Mans</td>
                </tr>
                <tr>
                  <td>Christophe Tinseau(FRA)</td>
                  <td>Petit Le Mans</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h2>Calendar</h2>
          <ol className="flex flex-col gap-4">
            <li>
              <p className="font-bold">Leather Center Grand Prix of Texas</p>
              <p>Texas Motor Speedway, Fort Worth, Texas</p>
              <p>Date: 04.03.2001</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: LMP900, LMP675, GTS, GT</p>
              <p>Circuit Length: 3.740 km</p>
              <p>Laps Completed: 117</p>
              <p>Distance Covered: 437.580 km</p>
              <p>
                Number of cars entered: 22 (6 LMP900, 1 LMP675, 4 GTS, 11 GT)
              </p>
              <p>
                Number of cars finished: 19 (6 LMP900, 0 LMP675, 3 GTS, 10 GT)
              </p>
              <p>
                Pole Position: #1 Audi Sport North America, Audi R8, Tom
                Kristensen(DEN), Rinaldo Capello(ITA), 1.16,350
              </p>
              <p>
                Overall Winner: #1 Audi Sport North America, Audi R8, Tom
                Kristensen(DEN), Rinaldo Capello(ITA), 2:45.53,965
              </p>
              <p>
                GTS Winner: #3 Corvette Racing, Chevrolet Corvette C5-R, Ron
                Fellows(CAN), Johnny O'Connell(USA), +9 Laps
              </p>
              <p>
                GT Winner: #23 Alex Job Racing, Porsche 911 GT3-RS, Lucas
                Luhr(DEU), Sascha Maassen(DEU), +9 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">
                49th Annual Exxon Superflo 12 Hours of Sebring
              </p>
              <p>Sebring International Raceway, Sebring, Florida</p>
              <p>Date: 17.03.2001</p>
              <p>Series: ALMS, ELMS</p>
              <p>Race Format: 12 Hours</p>
              <p>Classes: LMP900, LMP675, GTS, GT</p>
              <p>Circuit Length: 6.019 km</p>
              <p>Laps Completed: 370</p>
              <p>Distance Covered: 2227.030 km</p>
              <p>
                Number of cars entered: 40 (9 LMP900, 1 LMP675, 5 GTS, 25 GT)
              </p>
              <p>
                Number of cars finished: 20 (5 LMP900, 0 LMP675, 5 GTS, 10 GT)
              </p>
              <p>
                Pole Position: #2 Audi Sport North America, Audi R8, Frank
                Biela(DEU), Emanuele Pirro(ITA), Tom Kristensen(DEN), 1.49,477
              </p>
              <p>
                Overall Winner: #1 Audi Sport North America, Audi R8, Rinaldo
                Capello(ITA), Michele Alboreto(ITA), Laurent Aïello(FRA),
                12:00.38,122
              </p>
              <p>
                GTS Winner: #26 Konrad Team Saleen, Saleen S7-R, Terry
                Borcheller(USA), Oliver Gavin(GBR), Franz Konrad(AUT), +38 Laps
              </p>
              <p>
                GT Winner: #23 Alex Job Racing, Porsche 911 GT3-RS, Lucas
                Luhr(DEU), Sascha Maassen(DEU), Emmanuel Collard(FRA), +44 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">
                European Le Mans Series at Donington Park
              </p>
              <p>Donington Park, Leicestershire, Great Britain</p>
              <p>Date: 14.04.2001</p>
              <p>Series: ELMS, ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: LMP900, LMP675, GTS, GT</p>
              <p>Circuit Length: 4.020 km</p>
              <p>Laps Completed: 115</p>
              <p>Distance Covered: 462.300 km</p>
              <p>
                Number of cars entered: 26 (10 LMP900, 2 LMP675, 2 GTS, 12 GT)
              </p>
              <p>
                Number of cars finished: 19 (8 LMP900, 1 LMP675, 2 GTS, 8 GT)
              </p>
              <p>
                Pole Position: #1 Audi Sport Team Joest, Audi R8, Tom
                Kristensen(DEN), Rinaldo Capello(ITA), 1.22,122
              </p>
              <p>
                Overall Winner: #1 Audi Sport Team Joest, Audi R8, Tom
                Kristensen(DEN), Rinaldo Capello(ITA), 2:45.45,263
              </p>
              <p>
                LMP675 Winner: #21 Rowan Racing, Pilbeam MP84 - Nissan, Martin
                O'Connell(GBR), Warren Carway(GBR), +10 Laps
              </p>
              <p>
                GTS Winner: #41 Ray Mallock Ltd., Saleen S7-R, Bruno
                Lambert(BEL), Ian McKellar Jr(GBR), +13 Laps
              </p>
              <p>
                GT Winner: #23 Alex Job Racing, Porsche 911 GT3-RS, Lucas
                Luhr(DEU), Sascha Maassen(DEU), +13 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">
                Repsol European Le Mans Series at Jarama
              </p>
              <p>
                Circuito Permanente del Jarama, San Sebastian de los Reyes,
                Spain
              </p>
              <p>Date: 20.05.2001</p>
              <p>Series: ELMS, ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: LMP900, LMP675, GTS, GT</p>
              <p>Circuit Length: 3.850 km</p>
              <p>Laps Completed: 114</p>
              <p>Distance Covered: 438.900 km</p>
              <p>
                Number of cars entered: 21 (5 LMP900, 3 LMP675, 3 GTS, 10 GT)
              </p>
              <p>
                Number of cars finished: 16 (4 LMP900, 2 LMP675, 2 GTS, 8 GT)
              </p>
              <p>
                Pole Position: #1 Audi Sport Team Joest, Audi R8, Tom
                Kristensen(DEN), Rinaldo Capello(ITA), 1.22,285
              </p>
              <p>
                Overall Winner: #1 Audi Sport Team Joest, Audi R8, Tom
                Kristensen(DEN), Rinaldo Capello(ITA), 2:46.08,360
              </p>
              <p>
                LMP675 Winner: #5 Dick Barbour Racing, Reynard 01Q - Judd,
                Didier de Radigues(BEL), Eric van de Poele(BEL), +6 Laps
              </p>
              <p>
                GT Winner: #43 BMW Motorsport, BMW M3 GTR, Fredrik Ekblom(SWE),
                Dirk Müller(DEU), +12 Laps
              </p>
              <p>
                GTS Winner: #26 Konrad Team Saleen, Saleen S7-R, Toni
                Seiler(CHE), Walter Brun(CHE), Franz Konrad(AUT), +14 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">
                69<sup>e</sup> 24 Heures du Mans
              </p>
              <p>Circuit de la Sarthe, Le Mans, France</p>
              <p>Date: 16-17.06.2001</p>
              <p>Series: Standalone event</p>
              <p>Race Format: 24 Hours</p>
              <p>Classes: LMP900, LMGTP, LMP675, LMGTS, LMGT</p>
              <p>Circuit Length: 13.605 km</p>
              <p>Laps Completed: 321</p>
              <p>Distance Covered: 4367.205 km</p>
              <p>
                Number of cars entered: 48 (18 LMP900, 2 LMGTP, 8 LMP675, 9
                LMGTS, 11 LMGT)
              </p>
              <p>
                Number of cars finished: 20 (5 LMP900, 1 LMGTP, 2 LMP675, 4
                LMGTS, 8 LMGT)
              </p>
              <p>
                Pole Position: #2 Audi Sport Team Joest, Audi R8, Laurent
                Aiello(FRA), Rinaldo Capello(ITA), Christian Pescatori(ITA),
                3.32,429
              </p>
              <p>
                Overall Winner: #1 Audi Sport Team Joest, Audi R8, Frank
                Biela(DEU), Emanuele Pirro(ITA), Tom Kristensen(DEN),
                24:08.05,892
              </p>
              <p>
                LMGTP Winner: #8 Team Bentley, Bentley EXP Speed 8, Andy
                Wallace(GBR), Butch Leitzinger(USA), Eric van de Poele(BEL), +15
                Laps
              </p>
              <p>
                LMP675 Winner: #38 ROC Auto, Reynard 2KQ-LM - Volkswagen, Jordi
                Gene(ESP), Jean-Denis Deletraz(CHE), Pascal Fabre(FRA), +37 Laps
              </p>
              <p>
                LMGT Winner: #83 Seikel Motorsport, Porsche 911 GT3-RS, Gabrio
                Rosa(ITA), Fabio Babini(ITA), Luca Drudi(ITA), +38 Laps
              </p>
              <p>
                LMGTS Winner: #63 Corvette Racing, Chevrolet Corvette C5-R, Ron
                Fellows(CAN), Scott Pruett(USA), Johnny O'Connell(USA), +43 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">1000 km of Estoril</p>
              <p>Autodromo Fernando Pires da Silva, Estoril, Portugal</p>
              <p>Date: 15.07.2001</p>
              <p>Series: ELMS</p>
              <p>Race Format: 1000 km or 6 Hours</p>
              <p>Classes: LMP900, LMP675, GTS, GT</p>
              <p>Circuit Length: 4.182 km</p>
              <p>Laps Completed: 209</p>
              <p>Distance Covered: 874.038 km</p>
              <p>
                Number of cars entered: 19 (2 LMP900, 1 LMP675, 3 GTS, 13 GT)
              </p>
              <p>
                Number of cars finished: 14 (1 LMP900, 0 LMP675, 3 GTS, 10 GT)
              </p>
              <p>
                Pole Position: #7 Johansson Motorsport, Audi R8, Stefan
                Johansson(SWE), Tom Coronel(NED), Patrick Lemarie(FRA), 1.28,876
              </p>
              <p>
                Overall Winner: #72 Pescarolo Sport, Courage C60 - Peugot,
                Jean-Cristophe Boullion(FRA), Laurent Redon(FRA), Boris
                Derichebourg(FRA), 6:00.21,719
              </p>
              <p>
                GTS Winner: #41 Ray Mallock Ltd., Saleen S7-R, Bruno
                Lambert(BEL), Ian McKellar Jr(GBR), Chris Goodwin(GBR), +12 Laps
              </p>
              <p>
                GT Winner: #77 Freisinger Motorsport, Porsche 911 GT3-RS, Xavier
                Pompidou(FRA), Romain Dumas(FRA), +18 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">X-Factor Grand Prix of Sonoma</p>
              <p>Sears Point Raceway, Sonoma, California</p>
              <p>Date: 22.07.2001</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: LMP900, LMP675, GTS, GT</p>
              <p>Circuit Length: 4.056 km</p>
              <p>Laps Completed: 107</p>
              <p>Distance Covered: 433.992 km</p>
              <p>
                Number of cars entered: 26 (8 LMP900, 1 LMP675, 5 GTS, 12 GT)
              </p>
              <p>
                Number of cars finished: 22 (6 LMP900, 1 LMP675, 5 GTS, 10 GT)
              </p>
              <p>
                Pole Position: #1 Audi Sport North America, Audi R8, Tom
                Kristensen(DEN), Rinaldo Capello(ITA), 1.21,745
              </p>
              <p>
                Overall Winner: #1 Audi Sport North America, Audi R8, Tom
                Kristensen(DEN), Rinaldo Capello(ITA), 2:45.20,896
              </p>
              <p>
                GTS Winner: #3 Corvette Racing, Chevrolet Corvette C5-R, Ron
                Fellows(CAN), Johnny O'Connell(USA), +10 Laps
              </p>
              <p>
                GT Winner: #42 BMW Motorsport, BMW M3 GTR, Jörg Müller(DEU), JJ
                Lehto(FIN), +10 Laps
              </p>
              <p>
                LMP675 Winner: #57 Dick Barbour Racing, Reynard 01Q - Judd,
                Milka Duno(VEN), Didier de Radigues(BEL), John Graham(CAN), +12
                Laps
              </p>
            </li>
            <li>
              <p className="font-bold">
                European Le Mans Series at Salzburgring
              </p>
              <p>Salzburgring, Plainfeld, Austria</p>
              <p>Date: 05.08.2001</p>
              <p>Series: ELMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: LMP900, LMP675, GTS, GT</p>
              <p>Circuit Length: 4.241 km</p>
              <p>Laps Completed: 0</p>
              <p>Distance Covered: - km</p>
              <p>
                Race{" "}
                <a
                  href="https://web.archive.org/web/20020621113343fw_/http://www.professionalsportscar.com/news/052001a.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  cancelled
                </a>{" "}
                in May because the circuit failed to comply with FIA safety
                standards and not enough time to make the necessary improvements.
                Autodrom Most in the Czech Republic was{" "}
                <a
                  href="https://web.archive.org/web/20011230111545fw_/http://www.professionalsportscar.com/news/061901c.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  announced
                </a>{" "}
                to replace the event a month later
              </p>
            </li>
            <li>
              <p className="font-bold">European Le Mans Series at Most</p>
              <p>Autodrom Most, Most, Czech Republic</p>
              <p>Date: 05.08.2001</p>
              <p>Series: ELMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: LMP900, LMP675, GTS, GT</p>
              <p>Circuit Length: 4.149 km</p>
              <p>Laps Completed: 117</p>
              <p>Distance Covered: 485.433 km</p>
              <p>
                Number of cars entered: 14 (2 LMP900, 2 LMP675, 2 GTS, 8 GT)
              </p>
              <p>
                Number of cars finished: 9 (2 LMP900, 1 LMP675, 2 GTS, 4 GT)
              </p>
              <p>
                Pole Position: #7 Johansson Motorsport, Audi R8, Stefan
                Johansson(SWE), Patrick Lemarie(FRA), 1.18,110
              </p>
              <p>
                Overall Winner: #7 Johansson Motorsport, Audi R8, Stefan
                Johansson(SWE), Patrick Lemarie(FRA), 2:45.53,040
              </p>
              <p>
                LMP675 Winner: #38 Racing Organisation Course, Reynard 2KQ -
                Volkswagen, Jordi Gene(ESP), Christophe Pillon(CHE), +4 Laps
              </p>
              <p>
                GTS Winner: #41 Ray Mallock Ltd., Saleen S7-R, Bruno
                Lambert(BEL), Ian McKellar Jr(GBR), +11 Laps
              </p>
              <p>
                GT Winner: #60 P.K. Sport, Porsche 911 GT3-RS, Mike Youles(GBR),
                Robin Liddell(GBR), +15 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">Grand Prix of Portland</p>
              <p>Portland International Raceway, Portland, Oregon</p>
              <p>Date: 05.08.2001</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: LMP900, LMP675, GTS, GT</p>
              <p>Circuit Length: 3.129 km</p>
              <p>Laps Completed: 131</p>
              <p>Distance Covered: 409.899 km</p>
              <p>
                Number of cars entered: 21 (5 LMP900, 2 LMP675, 5 GTS, 9 GT)
              </p>
              <p>
                Number of cars finished: 16 (5 LMP900, 2 LMP675, 2 GTS, 7 GT)
              </p>
              <p>
                Pole Position: #50 Panoz Motor Sports, Panoz LMP-1 Roadster-S,
                Jan Magnussen(DEN), David Brabham(AUS), 1.04,121
              </p>
              <p>
                Overall Winner: #50 Panoz Motor Sports, Panoz LMP-1 Roadster-S,
                Jan Magnussen(DEN), David Brabham(AUS), 2:45.41,704
              </p>
              <p>
                LMP675 Winner: #57 Dick Barbour Racing, Reynard 01Q - Judd,
                Milka Duno(VEN), Didier de Radigues(BEL), John Graham(CAN), +8
                Laps
              </p>
              <p>
                GTS Winner: #3 Corvette Racing, Chevrolet Corvette C5-R, Ron
                Fellows(CAN), Johnny O'Connell(USA), +9 Laps
              </p>
              <p>
                GT Winner: #6 Prototype Technology Group, BMW M3 GTR, Boris
                Said(USA), Hans-Joachim Stuck(DEU), +10 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">Gran Turismo 3 Grand Prix at Mosport</p>
              <p>Mosport International Raceway, Bowmanville, Ontario</p>
              <p>Date: 19.08.2001</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: LMP900, LMP675, GTS, GT</p>
              <p>Circuit Length: 3.957 km</p>
              <p>Laps Completed: 115</p>
              <p>Distance Covered: 455.055 km</p>
              <p>
                Number of cars entered: 26 (8 LMP900, 3 LMP675, 5 GTS, 10 GT)
              </p>
              <p>
                Number of cars finished: 19 (5 LMP900, 2 LMP675, 5 GTS, 7 GT)
              </p>
              <p>
                Pole Position: #1 Audi Sport North America, Audi R8, Tom
                Kristensen(DEN), Rinaldo Capello(ITA), 1.08,222
              </p>
              <p>
                Overall Winner: #2 Audi Sport North America, Audi R8, Frank
                Biela(DEU), Emanuele Pirro(ITA), 2:46.03,805
              </p>
              <p>
                LMP675 Winner: #5 Dick Barbour Racing, Reynard 01Q - Judd,
                Didier de Radigues(BEL), Bruno Lambert(BEL), +4 Laps
              </p>
              <p>
                GTS Winner: #3 Corvette Racing, Chevrolet Corvette C5-R, Ron
                Fellows(CAN), Johnny O'Connell(USA), +6 Laps
              </p>
              <p>
                GT Winner: #42 BMW Motorsport, BMW M3 GTR, Jörg Müller(DEU), JJ
                Lehto(FIN), +8 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">Le Grand Prix de Mont-Tremblant</p>
              <p>Circuit Mont-Tremblant, Mont-Tremblant, Quebec</p>
              <p>Date: 25.08.2001</p>
              <p>Series: ALMS</p>
              <p>Race Format: 4 Hours</p>
              <p>Classes: LMP900, LMP675, GTS, GT</p>
              <p>Circuit Length: 4.260 km</p>
              <p>Laps Completed: 0</p>
              <p>Distance Covered: - km</p>
              <p>
                Race{" "}
                <a
                  href="https://us.motorsport.com/alms/news/cancels-mont-tremblant-race/1869654/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  cancelled
                </a>{" "}
                in March after the organizer{" "}
                <a
                  href="https://web.archive.org/web/20011230140429fw_/http://www.professionalsportscar.com/news/022801a_1.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  failed to comply with the terms of the event agreement
                </a>
                , 2 weeks later Mid-Ohio was{" "}
                <a
                  href="https://web.archive.org/web/20011230105212fw_/http://www.professionalsportscar.com/news/041301d.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  announced
                </a>{" "}
                as a replacement
              </p>
            </li>
            <li>
              <p className="font-bold">Grand Prix of Mid-Ohio</p>
              <p>Mid-Ohio Sports Car Course, Lexington, Ohio</p>
              <p>Date: 25.08.2001</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: LMP900, LMP675, GTS, GT</p>
              <p>Circuit Length: 3.634 km</p>
              <p>Laps Completed: 116</p>
              <p>Distance Covered: 421.544 km</p>
              <p>
                Number of cars entered: 28 (9 LMP900, 4 LMP675, 5 GTS, 10 GT)
              </p>
              <p>
                Number of cars finished: 24 (8 LMP900, 3 LMP675, 5 GTS, 8 GT)
              </p>
              <p>
                Pole Position: #1 Audi Sport North America, Audi R8, Tom
                Kristensen(DEN), Rinaldo Capello(ITA), 1.14,537
              </p>
              <p>
                Overall Winner: #50 Panoz Motor Sports, Panoz LMP-1 Roadster-S,
                Jan Magnussen(DEN), David Brabham(AUS), 2:45.42,490
              </p>
              <p>
                LMP675 Winner: #5 Dick Barbour Racing, Reynard 01Q - Judd,
                Didier de Radigues(BEL), Bruno Lambert(BEL), +7 Laps
              </p>
              <p>
                GTS Winner: #3 Corvette Racing, Chevrolet Corvette C5-R, Ron
                Fellows(CAN), Johnny O'Connell(USA), +7 Laps
              </p>
              <p>
                GT Winner: #42 BMW Motorsport, BMW M3 GTR, Jörg Müller(DEU), JJ
                Lehto(FIN), +9 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">European Le Mans Series at Vallelunga</p>
              <p>
                Autodromo di Vallelunga Piero Taruffi, Campagnano di Roma, Italy
              </p>
              <p>Date: 02.09.2001</p>
              <p>Series: ELMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: LMP900, LMP675, GTS, GT</p>
              <p>Circuit Length: 3.222 km</p>
              <p>Laps Completed: 137</p>
              <p>Distance Covered: 441.414 km</p>
              <p>
                Number of cars entered: 14 (1 LMP900, 1 LMP675, 3 GTS, 9 GT)
              </p>
              <p>
                Number of cars finished: 13 (1 LMP900, 1 LMP675, 3 GTS, 8 GT)
              </p>
              <p>
                Pole Position: #9 Lanesra, Panoz LMP-1 Roadster-S, Richard
                Dean(GBR), Gary Formato(ZAF), 1.06,987
              </p>
              <p>
                Overall Winner: #9 Lanesra, Panoz LMP-1 Roadster-S, Richard
                Dean(GBR), Gary Formato(ZAF), 2:45.07,990
              </p>
              <p>
                GTS Winner: #41 Ray Mallock Ltd., Saleen S7-R, Chris
                Goodwin(GBR), Ian McKellar Jr(GBR), +3 Laps
              </p>
              <p>
                GT Winner: #66 Harlow Motorsport, Porsche 911 GT3-R, Terry
                Rymer(GBR), Magnus Wallinder(SWE), +10 Laps
              </p>
              <p>
                LMP675 Winner: #28 Didier Bonnet Racing, Debora LMP200 - BMW,
                Francois Jakubowski(FRA), Xavier Bich(FRA), +39 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">Monterey Sports Car Championships</p>
              <p>Mazda Raceway Laguna Seca, Monterey, California</p>
              <p>Date: 09.09.2001</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: LMP900, LMP675, GTS, GT</p>
              <p>Circuit Length: 3.602 km</p>
              <p>Laps Completed: 120</p>
              <p>Distance Covered: 432.240 km</p>
              <p>
                Number of cars entered: 29 (9 LMP900, 3 LMP675, 5 GTS, 12 GT)
              </p>
              <p>
                Number of cars finished: 20 (5 LMP900, 1 LMP675, 4 GTS, 10 GT)
              </p>
              <p>
                Pole Position: #1 Audi Sport North America, Audi R8, Tom
                Kristensen(DEN), Rinaldo Capello(ITA), 1.15,238
              </p>
              <p>
                Overall Winner: #2 Audi Sport North America, Audi R8, Frank
                Biela(DEU), Emanuele Pirro(ITA), 2:45.20,303
              </p>
              <p>
                GTS Winner: #26 Konrad Team Saleen, Saleen S7-R, Terry
                Borcheller(USA), Franz Konrad(AUT), +8 Laps
              </p>
              <p>
                GT Winner: #42 BMW Motorsport, BMW M3 GTR, Jörg Müller(DEU), JJ
                Lehto(FIN), +10 Laps
              </p>
              <p>
                LMP675 Winner: #5 Dick Barbour Racing, Reynard 01Q - Judd,
                Didier de Radigues(BEL), Milka Duno(VEN), +72 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">4th Annual Audi Petit Le Mans</p>
              <p>Road Atlanta, Braselton, Georgia</p>
              <p>Date: 06.10.2001</p>
              <p>Series: ALMS, ELMS</p>
              <p>Race Format: 1000 Miles or 10 Hours</p>
              <p>Classes: LMP900, LMP675, GTS, GT</p>
              <p>Circuit Length: 4.088 km</p>
              <p>Laps Completed: 394</p>
              <p>Distance Covered: 1610.672 km</p>
              <p>
                Number of cars entered: 43 (10 LMP900, 6 LMP675, 9 GTS, 18 GT)
              </p>
              <p>
                Number of cars finished: 25 (6 LMP900, 3 LMP675, 5 GTS, 11 GT)
              </p>
              <p>
                Pole Position: #1 Audi Sport North America, Audi R8, Tom
                Kristensen(DEN), Rinaldo Capello(ITA), 1.10,917
              </p>
              <p>
                Overall Winner: #2 Audi Sport North America, Audi R8, Frank
                Biela(DEU), Emanuele Pirro(ITA), 9:15.57,574
              </p>
              <p>
                GTS Winner: #4 Corvette Racing, Chevrolet Corvette C5-R, Andy
                Pilgrim(USA), Kelly Collins(USA), Franck Freon(FRA), +32 Laps
              </p>
              <p>
                LMP675 Winner: #57 Dick Barbour Racing, Reynard 01Q - Judd,
                Milka Duno(VEN), Scott Maxwell(CAN), John Graham(CAN), +33 Laps
              </p>
              <p>
                GT Winner: #6 Prototype Technology Group, BMW M3 GTR, Boris
                Said(USA), Hans-Joachim Stuck(DEU), Bill Auberlen(USA), +34 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">Grand Prix of Charlotte</p>
              <p>Lowe's Motor Speedway, Concord, North Carolina</p>
              <p>Date: 21.10.2001</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: LMP900, LMP675, GTS, GT</p>
              <p>Circuit Length: 3.621 km</p>
              <p>Laps Completed: 0</p>
              <p>Distance Covered: - km</p>
              <p>
                Race cancelled due to planned expansion for the series in 2002{" "}
                <a
                  href="https://web.archive.org/web/20011230105744fw_/http://www.professionalsportscar.com/news/081401c.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  announced
                </a>{" "}
                in August
              </p>
            </li>
            <li>
              <p className="font-bold">Le Mans Series Race of Champions</p>
              <p>Sepang International Circuit, Kuala Lumpur, Malaysia</p>
              <p>Date: 11.11.2001</p>
              <p>Series: APLMS, ALMS</p>
              <p>Race Format: 6 Hours</p>
              <p>Classes: LMP900, LMP675, GTS, GT</p>
              <p>Circuit Length: 5.543 km</p>
              <p>Laps Completed: 0</p>
              <p>Distance Covered: - km</p>
              <p>
                <a
                  href="https://us.motorsport.com/alms/news/aplms-le-mans-series-race-of-champions-postponed/1100366/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Postponment
                </a>{" "}
                of the event until January 11-13 first announced in late
                september due to the terror attacks of September 11th, then{" "}
                <a
                  href="https://us.motorsport.com/alms/news/aplms-malaysian-race-of-champions-officially-canceled/1100406/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  cancelled
                </a>{" "}
                a month later for the same reason
              </p>
            </li>
            <li>
              <p className="font-bold">APLMS Race at Adelaide</p>
              <p>Adelaide Street Circuit, Adelaide, Australia</p>
              <p>Date: 02.12.2001</p>
              <p>Series: APLMS, ALMS, ELMS</p>
              <p>Race Format: 6 Hours</p>
              <p>Classes: LMP900, LMP675, GTS, GT</p>
              <p>Circuit Length: 3.780 km</p>
              <p>Laps Completed: 0</p>
              <p>Distance Covered: - km</p>
              <p>
                Race{" "}
                <a
                  href="https://web.archive.org/web/20011230140429fw_/http://www.professionalsportscar.com/news/022301d.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  cancelled
                </a>{" "}
                in February by the South Australia government despite success of
                2000 event, the organizer tried to find an alternative venue,
                but ran out of time and the event as a whole was{" "}
                <a
                  href="https://us.motorsport.com/alms/news/aplms-australia-out-as-site-of-eason-ending-event/1100374/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  cancelled
                </a>{" "}
                in June
              </p>
            </li>
          </ol>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h2>Season Totals</h2>
          <div>
            <p>Number of Races: 14</p>
            <p>Total Distance Covered: 13497.302 km</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h2>Misc Links</h2>
          <ul>
            <li>
              <a
                href="https://web.archive.org/web/20011230111211fw_/http://www.professionalsportscar.com/news/031601e.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bob Wollek dies during Sebring build-up
              </a>
            </li>
            <li>
              <a
                href="https://web.archive.org/web/20011230105212fw_/http://www.professionalsportscar.com/news/042501a.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Michele Alboreto killed in Audi testing accident
              </a>
            </li>
            <li>
              <a
                href="https://web.archive.org/web/20011230105212fw_/http://www.professionalsportscar.com/news/043001a.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tyre failure reason for accident
              </a>
            </li>
            <li>
              <a
                href="https://web.archive.org/web/20020621113343fw_/http://www.professionalsportscar.com/news/052001c.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Audi wins at Jarama
              </a>
            </li>
            <li>
              <a
                href="https://web.archive.org/web/20011230111446fw_/http://www.professionalsportscar.com/news/071601a.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Winning Pescarolo excluded from Estoril race
              </a>
            </li>
            <li>
              <a
                href="https://web.archive.org/web/20011230111446fw_/http://www.professionalsportscar.com/news/071901c.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pescarolo appeals Estoril exclusion
              </a>
            </li>
            <li>
              <a
                href="https://web.archive.org/web/20011230105744fw_/http://www.professionalsportscar.com/news/082101b.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Estoril exclusion overturned, Pescarolo reinstated as winner
              </a>
            </li>
            <li>
              <a
                href="https://web.archive.org/web/20011230105744fw_/http://www.professionalsportscar.com/news/080501d.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Johansson Audi dominates Most race
              </a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
