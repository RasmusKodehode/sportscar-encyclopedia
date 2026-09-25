import Image from "next/image";

export default function ZeroSix() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full flex-col items-center justify-start lg:py-12 lg:px-16 bg-white gap-8 py-4 px-6">
        <h1>2006 Season</h1>
        <div className="flex flex-col gap-2">
          <h2>Series and Regulation News</h2>
          <ul>
            <li>
              <a
                href="http://archive.dailysportscar.com/subscribers/news/alms/2005alms/alms684.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                ALMS released a new calendar
              </a>
              , with Sonoma and the spring race at Road Atlanta being replaced
              by a race at the new Miller Motorsports Park in Utah, and a new
              street circuit in Houston Texas, run together with Champ Car.
            </li>
            <li>
              <a
                href="http://archive.dailysportscar.com/subscribers/news/lmes/2005lmes/lmes_387.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                LMES continued with a 5-race calendar
              </a>{" "}
              with a few shuffled dates, as well as switching the British round
              from Silverstone to Donington Park. The series also underwent a
              slight rebranding, and became known simply as the Le Mans Series.
            </li>
            <li>
              Work conducted by the people behind Team Goh culminated in the{" "}
              <a
                href="http://archive.dailysportscar.com/subscribers/news/other/2005other/other999_023.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                debut of the new ACO-backed Japan Le Mans Challenge
              </a>
              , organizing 3 1000 km races in Japan, in an effort to get
              japanese teams interested in international sportscar racing.
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2>Manufacturer News</h2>
          <ul>
            <li>
              After spending 3 years developing the successor to the R8, in 2006{" "}
              <a
                href="http://archive.dailysportscar.com/subscribers/news/lemans/2005lemans/lemans730.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Audi revealed the R10 TDI
              </a>{" "}
              . The Audi factory team also returned,{" "}
              <a
                href="http://archive.dailysportscar.com/subscribers/news/alms/2006alms/alms764.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                cooperating with Champion Racing in ALMS and team Joest at Le
                Mans
              </a>
              . With IMSA still allowing older cars to compete, it also gave
              them the opportunity to take a single R8 on a farewell tour over
              the first few ALMS rounds while the R10s were testing for Le Mans.
            </li>
            <li>
              After debuting in the ALMS season finale in 2005, Porsche went
              into the first full season with the RS Spyder. The team focused on
              competing solely in ALMS, as the ACO did not welcome factory teams
              in the LMP2 class at Le Mans.
            </li>
            <li>
              Pescarolo continued racing in Europe with its C60 Hybrid after a
              successful 2005-season, again{" "}
              <a
                href="http://archive.dailysportscar.com/subscribers/news/lemans/2006lemans/lemans784.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                fielding 1 car for the LMS season
              </a>
              , and a second car for Le Mans.
            </li>
            <li>
              Courage spent 2005 developing a new car, and debuted the LC70 for
              2006. The factory team formed a partnership with Mugen who
              delivered engines, while privateers also operated the car with
              different engine configurations. The team completed the LMS season
              with 1 car for the season opener, before adding a 2nd car for Spa.
            </li>
            <li>
              Zytek continued into their 3rd season, but were forced to{" "}
              <a
                href="http://archive.dailysportscar.com/subscribers/news/lemans/2006lemans/lemans756.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                update the car for the Hybrid LMP1 rules
              </a>
              . The team again competed in the LMS from Spa onwards with the
              updated 06S, before bringing the car across the Atlantic for the
              final ALMS rounds.
            </li>
            <li>
              After purchasing and running the DBA 03S in 2004 and 2005 the
              Hybrid regulations forced Creation Autosportif to update the car.
              The team partnered with KWM which consisted of people who worked
              on the original Reynard design to create the CA06/H with the
              latest Judd engine. The team completed the LMS season, Le Mans and
              the final two rounds in ALMS.
            </li>
            <li>
              Lister went into 2006 with plans to complete the full LMS season
              with the Storm LMP Hybrid, but it announced at Le Mans that
              development of the car would cease and the team skipped
              Nurburgring to bring the final updates to Donington.
            </li>
            <li>
              Giovanni Lavaggi announced his intention to build his own Le Mans
              prototype and become the first driver-constructor in modern
              history. The Lavaggi LS1 made its debut at Jarama for the LMS
              finale.
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
                  <td rowSpan={6}>Audi R10 TDI</td>
                  <td rowSpan={3}>1</td>
                  <td>Frank Biela(DEU)</td>
                  <td>
                    Sebring, Utah, Portland, Road America, Mosport, Petit Le
                    Mans, Laguna Seca
                  </td>
                </tr>
                <tr>
                  <td>Emanuele Pirro(ITA)</td>
                  <td>
                    Sebring, Utah, Portland, Road America, Mosport, Petit Le
                    Mans, Laguna Seca
                  </td>
                </tr>
                <tr>
                  <td>Marco Werner(DEU)</td>
                  <td>Sebring, Petit Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={3}>2</td>
                  <td>Rinaldo Capello(ITA)</td>
                  <td>
                    Sebring, Utah, Portland, Road America, Mosport, Petit Le
                    Mans, Laguna Seca
                  </td>
                </tr>
                <tr>
                  <td>Allan McNish(GBR)</td>
                  <td>
                    Sebring, Utah, Portland, Road America, Mosport, Petit Le
                    Mans, Laguna Seca
                  </td>
                </tr>
                <tr>
                  <td>Tom Kristensen(DEN)</td>
                  <td>Sebring</td>
                </tr>
                <tr>
                  <td rowSpan={2}>Audi R8</td>
                  <td rowSpan={2}>2</td>
                  <td>Rinaldo Capello(ITA)</td>
                  <td>Houston, Mid-Ohio, Lime Rock</td>
                </tr>
                <tr>
                  <td>Allan McNish(GBR)</td>
                  <td>Houston, Mid-Ohio, Lime Rock</td>
                </tr>
                <tr>
                  <td rowSpan={6}>
                    <strong>Audi Sport Team Joest</strong>
                  </td>
                  <td rowSpan={6}>Audi R10 TDI</td>
                  <td rowSpan={3}>7</td>
                  <td>Rinaldo Capello(ITA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Allan McNish(GBR)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Tom Kristensen(DEN)</td>
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
                  <td>Marco Werner(DEU)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={9}>
                    <strong>Penske Motorsports</strong>
                  </td>
                  <td rowSpan={9}>Porsche RS Spyder</td>
                  <td rowSpan={4}>6</td>
                  <td>Lucas Luhr(DEU)</td>
                  <td>Sebring, Houston, Mid-Ohio, Lime Rock, Utah, Portland</td>
                </tr>
                <tr>
                  <td>Sascha Maassen(DEU)</td>
                  <td>
                    Sebring, Houston, Mid-Ohio, Lime Rock, Utah, Portland, Road
                    America, Mosport, Petit Le Mans, Laguna Seca
                  </td>
                </tr>
                <tr>
                  <td>Emmanuel Collard(FRA)</td>
                  <td>Sebring, Petit Le Mans</td>
                </tr>
                <tr>
                  <td>Timo Bernhard(DEU)</td>
                  <td>Road America, Mosport, Petit Le Mans, Laguna Seca</td>
                </tr>
                <tr>
                  <td rowSpan={5}>7</td>
                  <td>Timo Bernhard(DEU)</td>
                  <td>Sebring, Houston, Mid-Ohio, Lime Rock, Utah, Portland</td>
                </tr>
                <tr>
                  <td>Romain Dumas(FRA)</td>
                  <td>
                    Sebring, Houston, Mid-Ohio, Lime Rock, Utah, Portland, Road
                    America, Mosport, Petit Le Mans, Laguna Seca
                  </td>
                </tr>
                <tr>
                  <td>Patrick Long(USA)</td>
                  <td>Sebring</td>
                </tr>
                <tr>
                  <td>Lucas Luhr(DEU)</td>
                  <td>Road America, Mosport, Petit Le Mans, Laguna Seca</td>
                </tr>
                <tr>
                  <td>Mike Rockenfeller(DEU)</td>
                  <td>Petit Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={9}>
                    <strong>Pescarolo Sport</strong>
                  </td>
                  <td rowSpan={9}>Pescarolo C60 Hybrid</td>
                  <td rowSpan={6}>17</td>
                  <td>Emmanuel Collard(FRA)</td>
                  <td>Istanbul, Spa, Nurburgring, Donington, Jarama</td>
                </tr>
                <tr>
                  <td>Jean-Christophe Boullion(FRA)</td>
                  <td>Istanbul, Spa, Nurburgring, Donington, Jarama</td>
                </tr>
                <tr>
                  <td>Eric Helary(FRA)</td>
                  <td>Le Mans, Nurburgring</td>
                </tr>
                <tr>
                  <td>Franck Montagny(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Sebastien Loeb(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Didier Andre(FRA)</td>
                  <td>Donington, Jarama</td>
                </tr>
                <tr>
                  <td rowSpan={3}>16</td>
                  <td>Emmanuel Collard(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Eric Comas(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Nicolas Minassian(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={7}>
                    <strong>Courage Competition</strong>
                  </td>
                  <td rowSpan={7}>Courage LC70</td>
                  <td rowSpan={3}>13</td>
                  <td>Jean-Marc Gounon(FRA)</td>
                  <td>Istanbul, Le Mans</td>
                </tr>
                <tr>
                  <td>Shinji Nakano(JAP)</td>
                  <td>
                    Istanbul, Spa, Le Mans, Nurburgring, Donington, Jarama
                  </td>
                </tr>
                <tr>
                  <td>Haruki Kurosawa(JAP)</td>
                  <td>
                    Istanbul, Spa, Le Mans, Nurburgring, Donington, Jarama
                  </td>
                </tr>
                <tr>
                  <td rowSpan={4}>12</td>
                  <td>Jean-Marc Gounon(FRA)</td>
                  <td>Spa, Nurburgring, Donington, Jarama</td>
                </tr>
                <tr>
                  <td>Alexander Frei(CHE)</td>
                  <td>Spa, Le Mans, Nurburgring, Donington, Jarama</td>
                </tr>
                <tr>
                  <td>Gregor Fisken(GBR)</td>
                  <td>Le Mans, Nurburgring, Donington, Jarama</td>
                </tr>
                <tr>
                  <td>Sam Hancock(GBR)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={4}>
                    <strong>Lister Storm Racing</strong>
                  </td>
                  <td rowSpan={4}>Lister Storm LMP Hybrid</td>
                  <td rowSpan={4}>6</td>
                  <td>Justin Keen(GBR)</td>
                  <td>Istanbul, Donington</td>
                </tr>
                <tr>
                  <td>Jens Møller(DEN)</td>
                  <td>Istanbul, Spa, Le Mans, Donington</td>
                </tr>
                <tr>
                  <td>Nicolas Kiesa(DEN)</td>
                  <td>Istanbul, Spa, Le Mans</td>
                </tr>
                <tr>
                  <td>Gavin Pickering(GBR)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={9}>
                    <strong>Creation Autosportif</strong>
                  </td>
                  <td rowSpan={9}>Creation CA06/H</td>
                  <td rowSpan={4}>9</td>
                  <td>Nicolas Minassian(FRA)</td>
                  <td>
                    Istanbul, <em>Spa</em>, Nurburgring, Jarama
                  </td>
                </tr>
                <tr>
                  <td>Guiseppe Gabbiani(ITA)</td>
                  <td>
                    Istanbul, <em>Spa</em>, Le Mans, Nurburgring, Donington,
                    Jarama
                  </td>
                </tr>
                <tr>
                  <td>Felipe Ortiz(CHE)</td>
                  <td>
                    Istanbul, <em>Spa</em>, Le Mans, Nurburgring, Donington,
                    Jarama
                  </td>
                </tr>
                <tr>
                  <td>Jamie Campbell-Walter(GBR)</td>
                  <td>Le Mans, Donington</td>
                </tr>
                <tr>
                  <td rowSpan={2}>10</td>
                  <td>Nicolas Minassian(FRA)</td>
                  <td>Donington</td>
                </tr>
                <tr>
                  <td>Kevin McGarrity(GBR)</td>
                  <td>Donington</td>
                </tr>
                <tr>
                  <td rowSpan={3}>88</td>
                  <td>Nicolas Minassian(FRA)</td>
                  <td>Petit Le Mans, Laguna Seca</td>
                </tr>
                <tr>
                  <td>Harold Primat(CHE)</td>
                  <td>Petit Le Mans, Laguna Seca</td>
                </tr>
                <tr>
                  <td>Jamie Campbell-Walter(GBR)</td>
                  <td>Petit Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={8}>
                    <strong>Zytek Engineering</strong>
                  </td>
                  <td rowSpan={8}>Zytek 06S</td>
                  <td rowSpan={5}>2</td>
                  <td>John Nielsen(DEN)</td>
                  <td>Spa, Le Mans</td>
                </tr>
                <tr>
                  <td>Casper Elgaard(DEN)</td>
                  <td>Spa, Le Mans</td>
                </tr>
                <tr>
                  <td>Philip Andersen(DEN)</td>
                  <td>Spa, Le Mans</td>
                </tr>
                <tr>
                  <td>Stefan Johansson(SWE)</td>
                  <td>Nurburgring, Donington</td>
                </tr>
                <tr>
                  <td>Hideki Noda(JAP)</td>
                  <td>Nurburgring, Donington</td>
                </tr>
                <tr>
                  <td rowSpan={3}>15</td>
                  <td>Stefan Johansson(SWE)</td>
                  <td>Petit Le Mans, Laguna Seca</td>
                </tr>
                <tr>
                  <td>Johnny Mowlem(GBR)</td>
                  <td>Petit Le Mans, Laguna Seca</td>
                </tr>
                <tr>
                  <td>Haruki Kurosawa(JAP)</td>
                  <td>Petit Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={2}>
                    <strong>Scuderia Lavaggi</strong>
                  </td>
                  <td rowSpan={2}>Lavaggi LS1</td>
                  <td rowSpan={2}>3</td>
                  <td>Giovanni Lavaggi(ITA)</td>
                  <td>Jarama</td>
                </tr>
                <tr>
                  <td>Xavier Pompidou(FRA)</td>
                  <td>Jarama</td>
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
                54th Annual Mobil 1 12 Hours of Sebring
              </p>
              <p>Sebring International Raceway, Sebring, Florida</p>
              <p>Date: 18.03.2006</p>
              <p>Series: ALMS</p>
              <p>Race Format: 12 Hours</p>
              <p>Classes: P1, P2, GT1, GT2</p>
              <p>Circuit Length: 6.019 km</p>
              <p>Laps Completed: 349</p>
              <p>Distance Covered: 2100.631 km</p>
              <p>Number of cars entered: 35 (6 P1, 7 P2, 6 GT1, 16 GT2)</p>
              <p>Number of cars finished: 19 (2 P1, 3 P2, 5 GT1, 9 GT2)</p>
              <p>
                Pole Position: #2 Audi Sport North America, Audi R10 TDI,
                Rinaldo Capello(ITA), Allan McNish(GBR), Tom Kristensen(DEN),
                1.45,828
              </p>
              <p>
                Overall Winner: #2 Audi Sport North America, Audi R10 TDI,
                Rinaldo Capello(ITA), Allan McNish(GBR), Tom Kristensen(DEN),
                12:01.56,561
              </p>
              <p>
                P2 Winner: #37 Intersport Racing, Lola B05/40 - AER, Jon
                Field(USA), Clint Field(USA), Liz Halliday(USA), +4 Laps
              </p>
              <p>
                GT1 Winner: #4 Corvette Racing, Chevrolet Corvette C6.R, Oliver
                Gavin(GBR), Olivier Beretta(MCO), Jan Magnussen(DEN), +11 Laps
              </p>
              <p>
                GT2 Winner: #50 Multimatic Motorsports Team Panoz, Panoz
                Esperante GT-LM, David Brabham(AUS), Scott Maxwell(CAN),
                Sebastien Bourdais(FRA), +29 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">1000 km of Istanbul</p>
              <p>Intercity Istanbul Park, Istanbul, Turkey</p>
              <p>Date: 09.04.2006</p>
              <p>Series: LMS</p>
              <p>Race Format: 1000 km or 6 Hours</p>
              <p>Classes: LMP1, LMP2, LMGT1, LMGT2</p>
              <p>Circuit Length: 5.338 km</p>
              <p>Laps Completed: 134</p>
              <p>Distance Covered: 715.292 km</p>
              <p>
                Number of cars entered: 37 (7 LMP1, 8 LMP2, 7 LMGT1, 15 LMGT2)
              </p>
              <p>
                Number of cars finished: 26 (3 LMP1, 6 LMP2, 5 LMGT1, 12 LMGT2)
              </p>
              <p>
                Pole Position: #17 Pescarolo Sport, Pescarolo C60 Hybrid,
                Emmanuel Collard(FRA), Jean-Chrisophe Boullion(FRA), 1.40,266
              </p>
              <p>
                Overall Winner: #17 Pescarolo Sport, Pescarolo C60 Hybrid,
                Emmanuel Collard(FRA), Jean-Chrisophe Boullion(FRA), 4:01.42,625
              </p>
              <p>
                LMP2 Winner: #32 Barazi-Epsilon, Courage C65 - AER, Michael
                Vergers(NED), Juan Barazi(DEN), Jean-Phillipe Belloc(FRA), +6
                Laps
              </p>
              <p>
                LMGT1 Winner: #50 Aston Martin Racing Larbre, Aston Martin DBR9,
                Pedro Lamy(POR), Gabriele Gardel(CHE), Vincent Vosse(BEL), +9
                Laps
              </p>
              <p>
                LMGT2 Winner: #97 GPC Sport, Ferrari F430 GTC, Luca Drudi(ITA),
                Gabrio Rosa(ITA), Fabrizio de Simone(ITA), +15 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">Lone Star Grand Prix</p>
              <p>Reliant Park Street Circuit, Houston, Texas</p>
              <p>Date: 12.05.2006</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: P1, P2, GT1, GT2</p>
              <p>Circuit Length: 2.720 km</p>
              <p>Laps Completed: 143</p>
              <p>Distance Covered: 388.960 km</p>
              <p>Number of cars entered: 23 (4 P1, 5 P2, 5 GT1, 9 GT2)</p>
              <p>Number of cars finished: 16 (3 P1, 3 P2, 4 GT1, 6 GT2)</p>
              <p>
                Pole Position: #16 Dyson Racing, Lola B06/10 - AER, James
                Weaver(GBR), Butch Leitzinger(USA), 1.04,459
              </p>
              <p>
                Overall Winner: #2 Audi Sport North America, Audi R8, Rinaldo
                Capello(ITA), Allan McNish(GBR), 2:45.16,938
              </p>
              <p>
                GT1 Winner: #4 Corvette Racing, Chevrolet Corvette C6.R, Oliver
                Gavin(GBR), Olivier Beretta(MCO), +5 Laps
              </p>
              <p>
                GT2 Winner: #23 Alex Job Racing, Porsche 911 GT3-RSR, Mike
                Rockenfeller(DEU), Klaus Graf(DEU), +9 Laps
              </p>
              <p>
                P2 Winner: #37 Intersport Racing, Lola B05/40 - AER, Clint
                Field(USA), Liz Halliday(USA), +14 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">1000 km of Spa</p>
              <p>Circuit de Spa-Francorchamps, Stavelot, Belgium</p>
              <p>Date: 14.05.2006</p>
              <p>Series: LMS</p>
              <p>Race Format: 1000 km or 6 Hours</p>
              <p>Classes: LMP1, LMP2, LMGT1, LMGT2</p>
              <p>Circuit Length: 6.976 km</p>
              <p>Laps Completed: 134</p>
              <p>Distance Covered: 934.784 km</p>
              <p>
                Number of cars entered: 47 (9 LMP1, 11 LMP2, 9 LMGT1, 18 LMGT2)
              </p>
              <p>
                Number of cars finished: 25 (3 LMP1, 5 LMP2, 6 LMGT1, 11 LMGT2)
              </p>
              <p>
                Pole Position: #5 Swiss Spirit, Courage LC70 - Judd, Harold
                Primat(CHE), Marcel Fässler(CHE), 2.19,538
              </p>
              <p>
                Overall Winner: #17 Pescarolo Sport, Pescarolo C60 Hybrid,
                Emmanuel Collard(FRA), Jean-Chrisophe Boullion(FRA), 6:01.35,407
              </p>
              <p>
                LMP2 Winner: #39 Chamberlain-Synergy Motorsport/ASM Team
                Portugal, Lola B05/40 - AER, Miguel Angel Castro(ESP), Angel
                Burgueno(ESP), Miguel Amaral(POR), +2 Laps
              </p>
              <p>
                LMGT1 Winner: #55 Team Oreca, Saleen S7-R, Stephane
                Ortelli(MCO), Soheil Ayari(FRA), +5 Laps
              </p>
              <p>
                LMGT2 Winner: #76 Autorlando Sport, Porsche 911 GT3-RSR, Marc
                Lieb(DEU), Joël Camathias(CHE), +11 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">American Le Mans at Mid-Ohio</p>
              <p>Mid-Ohio Sports Car Course, Lexington, Ohio</p>
              <p>Date: 21.05.2006</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: P1, P2, GT1, GT2</p>
              <p>Circuit Length: 3.634 km</p>
              <p>Laps Completed: 119</p>
              <p>Distance Covered: 432.446 km</p>
              <p>Number of cars entered: 22 (4 P1, 5 P2, 4 GT1, 9 GT2)</p>
              <p>Number of cars finished: 19 (3 P1, 5 P2, 4 GT1, 7 GT2)</p>
              <p>
                Pole Position: #6 Penske Motorsports, Porsche RS Spyder, Sascha
                Maassen(DEU), Lucas Luhr(DEU), 1.12,815
              </p>
              <p>
                Overall Winner: #7 Penske Motorsports, Porsche RS Spyder, Timo
                Bernhard(DEU), Romain Dumas(FRA), 2:45.52,293
              </p>
              <p>
                P1 Winner: #2 Audi Sport North America, Audi R8, Rinaldo
                Capello(ITA), Allan McNish(GBR), +7,303
              </p>
              <p>
                GT1 Winner: #4 Corvette Racing, Chevrolet Corvette C6.R, Oliver
                Gavin(GBR), Olivier Beretta(MCO), +3 Laps
              </p>
              <p>
                GT2 Winner: #45 Flying Lizard Motorsports, Porsche 911 GT3-RSR,
                Wolf Henzler(DEU), Johannes van Overbeek(USA), +8 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">
                74<sup>e</sup> 24 Heures du Mans
              </p>
              <p>Circuit de la Sarthe, Le Mans, France</p>
              <p>Date: 17-18.06.2006</p>
              <p>Series: Standalone Event</p>
              <p>Race Format: 24 Hours</p>
              <p>Classes: LMP1, LMP2, LMGT1, LMGT2</p>
              <p>Circuit Length: 13.650 km</p>
              <p>Laps Completed: 380</p>
              <p>Distance Covered: 5187.000 km</p>
              <p>
                Number of cars entered: 50 (12 LMP1, 12 LMP2, 12 LMGT1, 14
                LMGT2)
              </p>
              <p>
                Number of cars finished: 25 (6 LMP1, 6 LMP2, 7 LMGT1, 6 LMGT2)
              </p>
              <p>
                Pole Position: #7 Audi Sport Team Joest, Audi R10 TDI, Rinaldo
                Capello(ITA), Allan McNish(GBR), Tom Kristensen(DEN), 3.30,466
              </p>
              <p>
                Overall Winner: #8 Audi Sport Team Joest, Audi R10 TDI, Frank
                Biela(DEU), Emanuele Pirro(ITA), Marco Werner(DEU), 24:04.27,325
              </p>
              <p>
                LMGT1 Winner: #64 Corvette Racing, Chevrolet Corvette C6.R,
                Oliver Gavin(GBR), Olivier Beretta(MCO), Jan Magnussen(DEN), +25
                Laps
              </p>
              <p>
                LMP2 Winner: #25 Ray Malloc Ltd, MG-Lola EX-264 - AER, Mike
                Newton(GBR), Thomas Erdos(BRA), Andy Wallace(GBR), +37 Laps
              </p>
              <p>
                LMGT2 Winner: #81 Team LNT, Panoz Esperante GT-LM, Lawrence
                Tomlinson(GBR), Tom Kimber-Smith(GBR), Richard Dean(GBR), +59
                Laps
              </p>
            </li>
            <li>
              <p className="font-bold">
                American Le Mans New England Grand Prix
              </p>
              <p>Lime Rock Park, Lakeville, Connecticut</p>
              <p>Date: 01.07.2006</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: P1, P2, GT1, GT2</p>
              <p>Circuit Length: 2.478 km</p>
              <p>Laps Completed: 177</p>
              <p>Distance Covered: 438.606 km</p>
              <p>Number of cars entered: 24 (5 P1, 5 P2, 4 GT1, 10 GT2)</p>
              <p>Number of cars finished: 17 (2 P1, 2 P2, 4 GT1, 9 GT2)</p>
              <p>
                Pole Position: #7 Penske Motorsports, Porsche RS Spyder, Timo
                Bernhard(DEU), Romain Dumas(FRA), 0.45,588
              </p>
              <p>
                Overall Winner: #2 Audi Sport North America, Audi R8, Rinaldo
                Capello(ITA), Allan McNish(GBR), 2:45.46,554
              </p>
              <p>
                P2 Winner: #7 Penske Motorsports, Porsche RS Spyder, Timo
                Bernhard(DEU), Romain Dumas(FRA), +11,812
              </p>
              <p>
                GT1 Winner: #009 Aston Martin Racing, Aston Martin DBR9, Pedro
                Lamy(POR), Stephane Sarrazin(FRA), +11 Laps
              </p>
              <p>
                GT2 Winner: #31 Petersen Motorsports/White Lightning Racing,
                Porsche 911 GT3-RSR, Jörg Bergmeister(DEU), Patrick Long(USA),{" "}
                <em>Michael Petersen(USA)</em>, +15 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">
                Larry H. Miller Dealerships Utah Grand Prix
              </p>
              <p>Miller Motorsports Park, Grantsville, Utah</p>
              <p>Date: 15.07.2006</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: P1, P2, GT1, GT2</p>
              <p>Circuit Length: 7.220 km</p>
              <p>Laps Completed: 65</p>
              <p>Distance Covered: 469.300 km</p>
              <p>Number of cars entered: 22 (6 P1, 3 P2, 4 GT1, 9 GT2)</p>
              <p>Number of cars finished: 21 (5 P1, 3 P2, 4 GT1, 9 GT2)</p>
              <p>
                Pole Position: #1 Audi Sport North America, Audi R10 TDI, Frank
                Biela(DEU), Emanuele Pirro(ITA), 2.21,554
              </p>
              <p>
                Overall Winner: #1 Audi Sport North America, Audi R10 TDI, Frank
                Biela(DEU), Emanuele Pirro(ITA), 2:46.00,377
              </p>
              <p>
                P2 Winner: #6 Penske Motorsports, Porsche RS Spyder, Sascha
                Maassen(DEU), Lucas Luhr(DEU), +0,318
              </p>
              <p>
                GT1 Winner: #007 Aston Martin Racing, Aston Martin DBR9, Darren
                Turner(GBR), Tomas Enge(CZE), +3 Laps
              </p>
              <p>
                GT2 Winner: #62 Risi Competizione, Ferrari F430 GTC, Jaime
                Melo(BRA), Mika Salo(FIN), +6 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">
                Internationales ADAC 1000 km-Rennen Nürburgring
              </p>
              <p>Nürburgring, Nürburg, Germany</p>
              <p>Date: 16.07.2006</p>
              <p>Series: LMS</p>
              <p>Race Format: 1000 km or 6 Hours</p>
              <p>Classes: LMP1, LMP2, LMGT1, LMGT2</p>
              <p>Circuit Length: 5.137 km</p>
              <p>Laps Completed: 189</p>
              <p>Distance Covered: 970.893 km</p>
              <p>
                Number of cars entered: 44 (9 LMP1, 11 LMP2, 6 LMGT1, 18 LMGT2)
              </p>
              <p>
                Number of cars finished: 36 (8 LMP1, 8 LMP2, 4 LMGT1, 16 LMGT2)
              </p>
              <p>
                Pole Position: #9 Creation Autosportif, Creation CA06/H, Nicolas
                Minassian(FRA), Guiseppe Gabbiani(ITA), Felipe Ortiz(CHE),
                1.44,850
              </p>
              <p>
                Overall Winner: #17 Pescarolo Sport, Pescarolo C60 Hybrid,
                Emmanuel Collard(FRA), Jean-Chrisophe Boullion(FRA), Eric
                Helary(FRA), 6:00.26,030
              </p>
              <p>
                LMP2 Winner: #40 ASM Team Racing for Portugal, Lola B05/40 -
                AER, Miguel Amaral(POR), Angel Burgueno(ESP), Miguel Angel
                Castro(ESP), +6 Laps
              </p>
              <p>
                LMGT1 Winner: #50 Aston Martin Racing Larbre, Aston Martin DBR9,
                Pedro Lamy(POR), Gabriele Gardel(CHE), Vincent Vosse(BEL), +12
                Laps
              </p>
              <p>
                LMGT2 Winner: #83 GPC Sport, Ferrari F430 GTC, Stefano
                Zonca(ITA), Andrea Belicchi(ITA), Marco Cioci(ITA), +18 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">Portland Grand Prix</p>
              <p>Portland International Raceway, Portland, Oregon</p>
              <p>Date: 22.07.2006</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: P1, P2, GT1, GT2</p>
              <p>Circuit Length: 3.161 km</p>
              <p>Laps Completed: 142</p>
              <p>Distance Covered: 448.862 km</p>
              <p>Number of cars entered: 22 (6 P1, 3 P2, 4 GT1, 9 GT2)</p>
              <p>Number of cars finished: 21 (6 P1, 2 P2, 4 GT1, 9 GT2)</p>
              <p>
                Pole Position: #16 Dyson Racing, Lola B06/10 - AER, James
                Weaver(GBR), Butch Leitzinger(USA), 1.03,101
              </p>
              <p>
                Overall Winner: #2 Audi Sport North America, Audi R10 TDI,
                Rinaldo Capello(ITA), Allan McNish(GBR), 2:45.08,847
              </p>
              <p>
                P2 Winner: #37 Intersport Racing, Lola B05/40 - AER, Clint
                Field(USA), Liz Halliday(USA), <em>Jon Field(USA)</em>, +7 Laps
              </p>
              <p>
                GT1 Winner: #4 Corvette Racing, Chevrolet Corvette C6.R, Oliver
                Gavin(GBR), Olivier Beretta(MCO), +9 Laps
              </p>
              <p>
                GT2 Winner: #62 Risi Competizione, Ferrari F430 GTC, Jaime
                Melo(BRA), Mika Salo(FIN), +14 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">Generac 500 at Road America</p>
              <p>Road America, Elkhart Lake, Wisconsin</p>
              <p>Date: 20.08.2006</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: P1, P2, GT1, GT2</p>
              <p>Circuit Length: 6.477 km</p>
              <p>Laps Completed: 76</p>
              <p>Distance Covered: 492.252 km</p>
              <p>Number of cars entered: 23 (6 P1, 3 P2, 4 GT1, 10 GT2)</p>
              <p>Number of cars finished: 21 (5 P1, 3 P2, 4 GT1, 9 GT2)</p>
              <p>
                Pole Position: #2 Audi Sport North America, Audi R10 TDI,
                Rinaldo Capello(ITA), Allan McNish(GBR), 1.49,181
              </p>
              <p>
                Overall Winner: #1 Audi Sport North America, Audi R10 TDI, Frank
                Biela(DEU), Emanuele Pirro(ITA), 2:45.32,115
              </p>
              <p>
                P2 Winner: #6 Penske Motorsports, Porsche RS Spyder, Sascha
                Maassen(DEU), Timo Bernhard(DEU), +27,374
              </p>
              <p>
                GT1 Winner: #3 Corvette Racing, Chevrolet Corvette C6.R, Ron
                Fellows(CAN), Johnny O'Connell(USA), +2 Laps
              </p>
              <p>
                GT2 Winner: #31 Petersen Motorsports/White Lightning Racing,
                Porsche 911 GT3-RSR, Jörg Bergmeister(DEU), Patrick Long(USA),{" "}
                <em>Michael Petersen(USA)</em>, +5 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">1000 km of Donington</p>
              <p>Donington Park, Leicestershire, Great Britain</p>
              <p>Date: 27.08.2006</p>
              <p>Series: LMS</p>
              <p>Race Format: 1000 km or 6 Hours</p>
              <p>Classes: LMP1, LMP2, LMGT1, LMGT2</p>
              <p>Circuit Length: 4.020 km</p>
              <p>Laps Completed: 249</p>
              <p>Distance Covered: 1000.980 km</p>
              <p>
                Number of cars entered: 41 (10 LMP1, 10 LMP2, 6 LMGT1, 15 LMGT2)
              </p>
              <p>
                Number of cars finished: 22 (5 LMP1, 5 LMP2, 5 LMGT1, 7 LMGT2)
              </p>
              <p>
                Pole Position: #12 Courage Competition, Courage LC70 - Mugen,
                Jean-Marc Gounon(FRA), Gregor Fisken(GBR), Alexander Frei(CHE),
                1.20,756
              </p>
              <p>
                Overall Winner: #17 Pescarolo Sport, Pescarolo C60 Hybrid,
                Emmanuel Collard(FRA), Jean-Chrisophe Boullion(FRA), Didier
                Andre(FRA), 5:59.26,921
              </p>
              <p>
                LMP2 Winner: #25 Ray Mallock Ltd, MG-Lola EX264 - AER, Thomas
                Erdos(BRA), Mike Newton(GBR), +10 Laps
              </p>
              <p>
                LMGT1 Winner: #63 Team Modena, Aston Martin DBR9, Antonio
                Garcia(ESP), Peter Hardman(GBR), +16 Laps
              </p>
              <p>
                LMGT2 Winner: #81 Team LNT, Panoz Esperante GT-LM, Warren
                Hughes(GBR), Robert Bell(GBR), +25 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">Grand Prix of Mosport</p>
              <p>Mosport International Raceway, Bowmanville, Ontario</p>
              <p>Date: 03.09.2006</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: P1, P2, GT1, GT2</p>
              <p>Circuit Length: 3.957 km</p>
              <p>Laps Completed: 133</p>
              <p>Distance Covered: 526.281 km</p>
              <p>Number of cars entered: 22 (5 P1, 3 P2, 4 GT1, 10 GT2)</p>
              <p>Number of cars finished: 19 (4 P1, 3 P2, 4 GT1, 8 GT2)</p>
              <p>
                Pole Position: #16 Dyson Racing, Lola B06/10 - AER, James
                Weaver(GBR), Butch Leitzinger(USA), 1.06,843
              </p>
              <p>
                Overall Winner: #2 Audi Sport North America, Audi R10 TDI,
                Rinaldo Capello(ITA), Allan McNish(GBR), 2:45.00,142
              </p>
              <p>
                P2 Winner: #7 Penske Motorsports, Porsche RS Spyder, Romain
                Dumas(FRA), Lucas Luhr(DEU), +2 Laps
              </p>
              <p>
                GT1 Winner: #009 Aston Martin Racing, Aston Martin DBR9, Pedro
                Lamy(POR), Stephane Sarrazin(FRA), +9 Laps
              </p>
              <p>
                GT2 Winner: #62 Risi Competizione, Ferrari F430 GTC, Stephane
                Ortelli(MCO), Johnny Mowlem(GBR), +17 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">1000 km of Monza</p>
              <p>Autodromo Nazionale di Monza, Monza, Italy</p>
              <p>Date: 24.09.2006</p>
              <p>Series: LMS</p>
              <p>Race Format: 1000 km or 6 Hours</p>
              <p>Classes: LMP1, LMP2, LMGT1, LMGT2</p>
              <p>Circuit Length: 5.793 km</p>
              <p>Laps Completed: 0</p>
              <p>Distance Covered: - km</p>
              <p>
                <a
                  href="http://archive.dailysportscar.com/subscribers/news/lmes/2006lmes/lmes_438.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Race cancelled due to noise complaints
                </a>
                ,{" "}
                <a
                  href="http://archive.dailysportscar.com/subscribers/news/lmes/2006lmes/lmes_454.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jarama announced as the replacement
                </a>
              </p>
            </li>
            <li>
              <p className="font-bold">1000 km of Jarama</p>
              <p>
                Circuito Permanente del Jarama, San Sebastian de los Reyes,
                Spain
              </p>
              <p>Date: 24.09.2006</p>
              <p>Series: LMS</p>
              <p>Race Format: 1000 km or 6 Hours</p>
              <p>Classes: LMP1, LMP2, LMGT1, LMGT2</p>
              <p>Circuit Length: 3.850 km</p>
              <p>Laps Completed: 237</p>
              <p>Distance Covered: 912.450 km</p>
              <p>
                Number of cars entered: 37 (7 LMP1, 9 LMP2, 6 LMGT1, 15 LMGT2)
              </p>
              <p>
                Number of cars finished: 24 (5 LMP1, 5 LMP2, 5 LMGT1, 9 LMGT2)
              </p>
              <p>
                Pole Position: #17 Pescarolo Sport, Pescarolo C60 Hybrid,
                Emmanuel Collard(FRA), Jean-Chrisophe Boullion(FRA), Didier
                Andre(FRA), 1.23,242
              </p>
              <p>
                Overall Winner: #17 Pescarolo Sport, Pescarolo C60 Hybrid,
                Emmanuel Collard(FRA), Jean-Chrisophe Boullion(FRA), Didier
                Andre(FRA), 6:01.01,399
              </p>
              <p>
                LMP2 Winner: #40 ASM Team Racing for Portugal, Lola B05/40 -
                AER, Miguel Amaral(POR), Angel Burgueno(ESP), Miguel Angel
                Castro(ESP), +4 Laps
              </p>
              <p>
                LMGT1 Winner: #55 Team Oreca, Saleen S7-R, Stephane
                Ortelli(MCO), Soheil Ayari(FRA), +11 Laps
              </p>
              <p>
                LMGT2 Winner: #81 Team LNT, Panoz Esperante GT-LM, Warren
                Hughes(GBR), Robert Bell(GBR), +23 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">9th Annual Petit Le Mans</p>
              <p>Road Atlanta, Braselton, Georgia</p>
              <p>Date: 30.09.2006</p>
              <p>Series: ALMS</p>
              <p>Race Format: 1000 Miles or 10 Hours</p>
              <p>Classes: P1, P2, GT1, GT2</p>
              <p>Circuit Length: 4.088 km</p>
              <p>Laps Completed: 394</p>
              <p>Distance Covered: 1610.672 km</p>
              <p>Number of cars entered: 28 (8 P1, 6 P2, 4 GT1, 10 GT2)</p>
              <p>Number of cars finished: 19 (4 P1, 4 P2, 4 GT1, 7 GT2)</p>
              <p>
                Pole Position: #88 Creation Autosportif, Creation CA06/H,
                Nicolas Minassian(FRA), Jamie Campbell-Walter(GBR), Harold
                Primat(CHE), 1.10,829
              </p>
              <p>
                Overall Winner: #2 Audi Sport North America, Audi R10 TDI,
                Rinaldo Capello(ITA), Allan McNish(GBR), 9:16.49,835
              </p>
              <p>
                P2 Winner: #6 Penske Motorsports, Porsche RS Spyder, Sascha
                Maassen(DEU), Timo Bernhard(DEU), Emmanuel Collard(FRA), +8 Laps
              </p>
              <p>
                GT1 Winner: #007 Aston Martin Racing, Aston Martin DBR9, Darren
                Turner(GBR), Tomas Enge(CZE), +20 Laps
              </p>
              <p>
                GT2 Winner: #31 Petersen Motorsports/White Lightning Racing,
                Porsche 911 GT3-RSR, Jörg Bergmeister(DEU), Patrick Long(USA),
                Nicklas Jönsson(SWE), +38 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">Monterey Sports Car Championships</p>
              <p>Mazda Raceway Laguna Seca, Monterey, California</p>
              <p>Date: 21.10.2006</p>
              <p>Series: ALMS</p>
              <p>Race Format: 4 Hours</p>
              <p>Classes: P1, P2, GT1, GT2</p>
              <p>Circuit Length: 3.602 km</p>
              <p>Laps Completed: 159</p>
              <p>Distance Covered: 572.718 km</p>
              <p>Number of cars entered: 27 (6 P1, 7 P2, 4 GT1, 10 GT2)</p>
              <p>Number of cars finished: 21 (5 P1, 5 P2, 4 GT1, 7 GT2)</p>
              <p>
                Pole Position: #15 Zytek Engineering, Zytek 06S, Johnny
                Mowlem(GBR), Stefan Johansson(SWE), 1.13,731
              </p>
              <p>
                Overall Winner: #2 Audi Sport North America, Audi R10 TDI,
                Rinaldo Capello(ITA), Allan McNish(GBR), 4:00.45,954
              </p>
              <p>
                P2 Winner: #7 Penske Motorsports, Porsche RS Spyder, Romain
                Dumas(FRA), Lucas Luhr(DEU), +1.03,968
              </p>
              <p>
                GT1 Winner: #009 Aston Martin Racing, Aston Martin DBR9, Pedro
                Lamy(POR), Stephane Sarrazin(FRA), +6 Laps
              </p>
              <p>
                GT2 Winner: #62 Risi Competizione, Ferrari F430 GTC, Mika
                Salo(FIN), Stephane Ortelli(MCO), +10 Laps
              </p>
            </li>
          </ol>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h2>Season Totals</h2>
          <div>
            <p>Number of Races: 16</p>
            <p>Total Distance Covered: 17202.127 km</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h2>Misc Links</h2>
          <ul>
            <li>
              News also came in 2005 that{" "}
              <a
                href="http://archive.dailysportscar.com/subscribers/news/lemans/2005lemans/lemans685.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Peugeot would also join LMP1 in 2007
              </a>{" "}
              with their own diesel-powered prototype.
            </li>
            <li>Istanbul race shortened to 4 hours due to fuel shortage</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
