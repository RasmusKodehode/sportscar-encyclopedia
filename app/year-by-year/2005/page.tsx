import Image from "next/image";

export default function ZeroFive() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full flex-col items-center justify-start lg:py-12 lg:px-16 bg-white gap-8 py-4 px-6">
        <h1>2005 Season</h1>
        <div className="flex flex-col gap-2">
          <h2>Series and Regulation News</h2>
          <ul>
            <li>
              With the ageing Audi R8 still being competitive, the ACO announced
              that 2005 would be the last year that cars built to the old LMP900
              and LMP675 rules would be permitted to race, and the cars were
              also handicapped with more ballast and less power than the newer
              LMP1 machines. Manufacturers were given the opportunity to update
              older cars with LMP1-spec bodywork, known as Hybrid LMP1, and cars
              running in this spec would not get the extra handicap.
            </li>
            <li>
              <a
                href="http://archive.dailysportscar.com/subscribers/news/alms/2004alms/alms446.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Older generation LMP900 cars would still be allowed to race in
                ALMS
              </a>
              , with IMSA not enforcing the new rules yet, allowing older cars
              to compete alongside newer LMP1 cars.
            </li>
            <li>
              The FIA and ACO also revised the classes for GT-cars, with LMGTS
              and LMGT replaced by LMGT1 and LMGT2. The new classes were
              designed to more tightly control and balance the cars, with
              specific laptime requirements set. The new structure meant new
              cars would have to be homologated by the FIA before being allowed
              to compete.
            </li>
            <li>
              The schedule for the 24h of Le Mans was adjusted after discussions
              between IMSA and the ACO who were finding it challenging to
              schedule races early in the season with the mandatory test day
              being a month before the race forcing both ALMS and LMES to
              effectively take a long break to allow teams to race at Le Mans.
              In 2005 the test day was moved to 2 weeks before the race,
              allowing more flexibility for ALMS to schedule more races early in
              the season.
            </li>
            <li>
              IMSA focused on concistency in the{" "}
              <a
                href="http://archive.dailysportscar.com/subscribers/news/alms/2004alms/alms479.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                ALMS calendar
              </a>
              , keeping all events from 2004 as well as adding the return of a
              sprint event at Road Atlanta. they also took advantage of the Le
              Mans test day being moved to reschedule Mid-Ohio to May, before Le
              Mans.
            </li>
            <li>
              LMES also focused on steady growth after a successful first
              season, keeping the 4 events from 2004, and{" "}
              <a
                href="http://archive.dailysportscar.com/subscribers/news/lmes/2005lmes/lmes_261.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                adding a fifth round at the new Istanbul Park
              </a>
              .
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2>Manufacturer News</h2>
          <ul>
            <li>
              In the US, Champion Racing continued racing their two R8s, also
              competing at Le Mans. Audi Sport Team UK and Team Goh chose not to
              continue beyond 2004, with Team Oreca taking over one of the R8s
              to compete in the LMES and Le Mans.
            </li>
            <li>
              After racing the C60 in 2004, Pescarolo{" "}
              <a
                href="http://archive.dailysportscar.com/subscribers/news/lemans/2005lemans/lemans621.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                updated the car for 2005
              </a>{" "}
              to the new hybrid regulations that meant the car avoided the
              handicaps imposed on the old LMP900 cars. The team raced 1 of the
              new C60 Hybrids in the LMES, with a 2nd car joining for Le Mans.
            </li>
            <li>
              Having tested the new LMP2-spec C65 in 2004 Courage's factory team
              moved back to LMP1 for 2005, racing an upgraded C60 for the new
              hybrid regulations.
            </li>
            <li>
              The Zytek factory team expanded their program for 2005 after new{" "}
              <a
                href="http://archive.dailysportscar.com/subscribers/news/lemans/2005lemans/lemans596.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                investment from Essex Invest
              </a>
              . The team used the 2004-car with the new restrictions from the
              ACO, competing in the full LMES season as well as{" "}
              <a
                href="http://archive.dailysportscar.com/subscribers/news/alms/2005alms/alms676.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                selected ALMS races
              </a>
              .
            </li>
            <li>
              With the sponsorship from Essex Invest moving to Zytek, it left
              Lister with a reduced budget for 2005. The team started at Spa,
              but by the Silverstone round the team debuted a new Hybrid version
              of the car in the hope that it would be more competitive.
            </li>
            <li>
              Porsche{" "}
              <a
                href="http://archive.dailysportscar.com/subscribers/news/alms/2005alms/alms630.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                announced its return to sportscar racing
              </a>{" "}
              with the new RS Spyder, built for the LMP2 regulations. Porsche
              partnered with Penske Motorsport to run the cars as a factory
              team, testing throughout 2005 and initially planning to debut at
              Petit Le Mans before that was delayed to the final round at Laguna
              Seca.
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
                  <td rowSpan={9}>
                    <strong>ADT Champion Racing</strong>
                  </td>
                  <td rowSpan={9}>Audi R8</td>
                  <td rowSpan={3}>1</td>
                  <td>JJ Lehto(FIN)</td>
                  <td>
                    Sebring, Road Atlanta, Mid-Ohio, Lime Rock, Sonoma,
                    Portland, Road America, Mosport, Petit Le Mans, Laguna Seca
                  </td>
                </tr>
                <tr>
                  <td>Marco Werner(DEU)</td>
                  <td>
                    Sebring, Road Atlanta, Mid-Ohio, Lime Rock, Sonoma,
                    Portland, Road America, Mosport, Petit Le Mans, Laguna Seca
                  </td>
                </tr>
                <tr>
                  <td>Tom Kristensen(DEN)</td>
                  <td>Sebring</td>
                </tr>
                <tr>
                  <td rowSpan={3}>2</td>
                  <td>Frank Biela(DEU)</td>
                  <td>
                    Sebring, Road Atlanta, Mid-Ohio, Le Mans, Lime Rock, Sonoma,
                    Portland, Road America, Mosport, Petit Le Mans, Laguna Seca
                  </td>
                </tr>
                <tr>
                  <td>Emanuele Pirro(ITA)</td>
                  <td>
                    Sebring, Road Atlanta, Mid-Ohio, Le Mans, Lime Rock, Sonoma,
                    Portland, Road America, Mosport, Petit Le Mans, Laguna Seca
                  </td>
                </tr>
                <tr>
                  <td>Allan McNish(GBR)</td>
                  <td>Sebring, Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={3}>3</td>
                  <td>JJ Lehto(FIN)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Marco Werner(DEU)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Tom Kristensen(DEN)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={4}>
                    <strong>Audi PlayStation Team Oreca</strong>
                  </td>
                  <td rowSpan={4}>Audi R8</td>
                  <td rowSpan={4}>4</td>
                  <td>Stephane Ortelli(MCO)</td>
                  <td>Spa, Le Mans, Silverstone, Nurburgring, Istanbul</td>
                </tr>
                <tr>
                  <td>Jean-Marc Gounon(FRA)</td>
                  <td>Spa, Le Mans</td>
                </tr>
                <tr>
                  <td>Franck Montagny(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Allan McNish(GBR)</td>
                  <td>Silverstone, Nurburgring, Istanbul</td>
                </tr>
                <tr>
                  <td rowSpan={9}>
                    <strong>Pescarolo Sport</strong>
                  </td>
                  <td rowSpan={9}>Pescarolo C60 Hybrid</td>
                  <td rowSpan={6}>17</td>
                  <td>Emmanuel Collard(FRA)</td>
                  <td>Spa, Monza, Silverstone, Nurburgring, Istanbul</td>
                </tr>
                <tr>
                  <td>Jean-Christophe Boullion(FRA)</td>
                  <td>Spa, Monza, Silverstone, Nurburgring, Istanbul</td>
                </tr>
                <tr>
                  <td>Eric Comas(FRA)</td>
                  <td>Spa</td>
                </tr>
                <tr>
                  <td>Soheil Ayari(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Eric Helary(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Sebastien Loeb(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={3}>16</td>
                  <td>Emmanuel Collard(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Jean-Christophe Boullion(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Eric Comas(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={9}>
                    <strong>Courage Competition</strong>
                  </td>
                  <td rowSpan={9}>Courage C60 Hybrid</td>
                  <td rowSpan={6}>13</td>
                  <td>Jonathan Cochet(FRA)</td>
                  <td>Spa, Le Mans, Silverstone, Nurburgring</td>
                </tr>
                <tr>
                  <td>Christian Vann(GBR)</td>
                  <td>Spa, Monza, Silverstone, Nurburgring</td>
                </tr>
                <tr>
                  <td>Alexander Frei(CHE)</td>
                  <td>Spa, Monza, Silverstone, Nurburgring, Istanbul</td>
                </tr>
                <tr>
                  <td>Shinji Nakano(JAP)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Bruce Jouanny(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Jean-Marc Gounon(FRA)</td>
                  <td>Monza, Istanbul</td>
                </tr>
                <tr>
                  <td rowSpan={3}>12</td>
                  <td>Christian Vann(GBR)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Alexander Frei(CHE)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Dominik Schwager(DEU)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={4}>
                    <strong>Zytek Engineering</strong>
                  </td>
                  <td rowSpan={4}>Zytek 04S</td>
                  <td rowSpan={4}>15</td>
                  <td>John Nielsen(DEN)</td>
                  <td>Spa</td>
                </tr>
                <tr>
                  <td>Casper Elgaard(DEN)</td>
                  <td>Spa, Istanbul</td>
                </tr>
                <tr>
                  <td>Hayanari Shimoda(JAP)</td>
                  <td>
                    Spa, Mid-Ohio, Monza, Silverstone, Nurburgring, Petit Le
                    Mans, Laguna Seca, Istanbul
                  </td>
                </tr>
                <tr>
                  <td>Tom Chilton(GBR)</td>
                  <td>
                    Mid-Ohio, Monza, Silverstone, Nurburgring, Petit Le Mans,
                    Laguna Seca, Istanbul
                  </td>
                </tr>
                <tr>
                  <td rowSpan={5}>
                    <strong>Lister Racing</strong>
                  </td>
                  <td rowSpan={3}>Lister Storm LMP</td>
                  <td rowSpan={3}>6</td>
                  <td>Justin Keen(GBR)</td>
                  <td>Spa</td>
                </tr>
                <tr>
                  <td>Jens Møller(DEN)</td>
                  <td>Spa</td>
                </tr>
                <tr>
                  <td>Jan Magnussen(DEN)</td>
                  <td>Spa</td>
                </tr>
                <tr>
                  <td rowSpan={2}>Lister Storm LMP Hybrid</td>
                  <td rowSpan={2}>6</td>
                  <td>Justin Keen(GBR)</td>
                  <td>Silverstone</td>
                </tr>
                <tr>
                  <td>Jens Møller(DEN)</td>
                  <td>Silverstone</td>
                </tr>
                <tr>
                  <td rowSpan={2}>
                    <strong>Penske Motorsports</strong>
                  </td>
                  <td rowSpan={2}>Porsche RS Spyder</td>
                  <td rowSpan={2}>6</td>
                  <td>Lucas Luhr(DEU)</td>
                  <td>Laguna Seca</td>
                </tr>
                <tr>
                  <td>Sascha Maassen(DEU)</td>
                  <td>Laguna Seca</td>
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
                53rd Annual Mobil 1 12 Hours of Sebring
              </p>
              <p>Sebring International Raceway, Sebring, Florida</p>
              <p>Date: 19.03.2005</p>
              <p>Series: ALMS</p>
              <p>Race Format: 12 Hours</p>
              <p>Classes: P1, P2, GT1, GT2</p>
              <p>Circuit Length: 6.019 km</p>
              <p>Laps Completed: 361</p>
              <p>Distance Covered: 2172.859 km</p>
              <p>Number of cars entered: 38 (6 P1, 5 P2, 10 GT1, 17 GT2)</p>
              <p>Number of cars finished: 17 (3 P1, 1 P2, 7 GT1, 6 GT2)</p>
              <p>
                Pole Position: #1 ADT Champion Racing, Audi R8, JJ Lehto(FIN),
                Marco Werner(DEU), Tom Kristensen(DEN), 1.49,723
              </p>
              <p>
                Overall Winner: #1 ADT Champion Racing, Audi R8, JJ Lehto(FIN),
                Marco Werner(DEU), Tom Kristensen(DEN), 12:01.49,211
              </p>
              <p>
                GT1 Winner: #57 Aston Martin Racing, Aston Martin DBR9, Darren
                Turner(GBR), David Brabham(AUS), Stephane Ortelli(MCO), +23 Laps
              </p>
              <p>
                GT2 Winner: #31 Petersen Motorsport/White Lightning Racing,
                Porsche 911 GT3-RSR, Lucas Luhr(DEU), Jörg Bergmeister(DEU),
                Patrick Long(USA), +40 Laps
              </p>
              <p>
                P2 Winner: #10 Miracle Motorsports, Courage C65 - AER, Jeff
                Bucknum(USA), Chris McMurry(USA), Ian James(USA), +50 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">1000 km of Spa</p>
              <p>Circuit de Spa-Francorchamps, Stavelot, Belgium</p>
              <p>Date: 17.04.2005</p>
              <p>Series: LMES</p>
              <p>Race Format: 1000 km or 6 Hours</p>
              <p>Classes: LMP1, LMP2, LMGT1, LMGT2</p>
              <p>Circuit Length: 6.976 km</p>
              <p>Laps Completed: 132</p>
              <p>Distance Covered: 920.832 km</p>
              <p>
                Number of cars entered: 47 (10 LMP1, 12 LMP2, 9 LMGT1, 16 LMGT2)
              </p>
              <p>
                Number of cars finished: 22 (4 LMP1, 6 LMP2, 3 LMGT1, 9 LMGT2)
              </p>
              <p>
                Pole Position: #17 Pescarolo Sport, Pescarolo C60 Hybrid,
                Emmanuel Collard(FRA), Jean-Chrisophe Boullion(FRA), Eric
                Comas(FRA), 2.21,076
              </p>
              <p>
                Overall Winner: #15 Zytek Engineering, Zytek 04S, John
                Nielsen(DEN), Casper Elgaard(DEN), Hayanari Shimoda(JAP),
                6:00.48,389
              </p>
              <p>
                LMP2 Winner: #39 Chamberlain-Synergy Motorsport, Lola B05/40 -
                AER, Bob Berridge(GBR), Gareth Evans(GBR), Peter Owen(GBR), +8
                Laps
              </p>
              <p>
                LMGT1 Winner: #52 BMS Scuderia Italia, Ferrari 550-GTS
                Maranello, Fabrizio Gollin(ITA), Matteo Cressoni(ITA), Miguel
                Ramos(POR), +9 Laps
              </p>
              <p>
                LMGT2 Winner: #81 Team LNT, TVR Tuscan T400R, Warren
                Hughes(GBR), Jonny Kane(GBR), <em>Lawrence Tomlinson(GBR)</em>,
                +12 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">Sportsbook.com Grand Prix of Atlanta</p>
              <p>Road Atlanta, Braselton, Georgia</p>
              <p>Date: 17.04.2005</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: P1, P2, GT1, GT2</p>
              <p>Circuit Length: 4.088 km</p>
              <p>Laps Completed: 112</p>
              <p>Distance Covered: 457.856 km</p>
              <p>Number of cars entered: 24 (4 P1, 4 P2, 6 GT1, 10 GT2)</p>
              <p>Number of cars finished: 22 (3 P1, 3 P2, 6 GT1, 10 GT2)</p>
              <p>
                Pole Position: #16 Dyson Racing, MG-Lola EX257, James
                Weaver(GBR), Butch Leitzinger(USA), 1.11,241
              </p>
              <p>
                Overall Winner: #1 ADT Champion Racing, Audi R8, JJ Lehto(FIN),
                Marco Werner(DEU), 2:45.27,420
              </p>
              <p>
                P2 Winner: #37 Telesis Intersport Racing, Lola B05/40 - AER, Jon
                Field(USA), Clint Field(USA), +4 Laps
              </p>
              <p>
                GT1 Winner: #3 Corvette Racing, Chevrolet Corvette C6.R, Ron
                Fellows(CAN), Johnny O'Connell(USA), +4 Laps
              </p>
              <p>
                GT2 Winner: #50 Panoz Motor Sports, Panoz Esperante GT-LM, Bill
                Auberlen(USA), Robin Liddell(GBR), +7 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">American Le Mans at Mid-Ohio</p>
              <p>Mid-Ohio Sports Car Course, Lexington, Ohio</p>
              <p>Date: 22.05.2005</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: P1, P2, GT1, GT2</p>
              <p>Circuit Length: 3.634 km</p>
              <p>Laps Completed: 117</p>
              <p>Distance Covered: 425.178 km</p>
              <p>Number of cars entered: 24 (5 P1, 4 P2, 6 GT1, 9 GT2)</p>
              <p>Number of cars finished: 17 (4 P1, 0 P2, 6 GT1, 7 GT2)</p>
              <p>
                Pole Position: #15 Zytek Engineering, Zytek 04S, Tom
                Chilton(GBR), Hayanari Shimoda(JAP), 1.11,333
              </p>
              <p>
                Overall Winner: #16 Dyson Racing, MG-Lola EX257, James
                Weaver(GBR), Butch Leitzinger(USA), 2:46.05,925
              </p>
              <p>
                GT1 Winner: #3 Corvette Racing, Chevrolet Corvette C6.R, Ron
                Fellows(CAN), Johnny O'Connell(USA), +5 Laps
              </p>
              <p>
                GT2 Winner: #23 Alex Job Racing, Porsche 911 GT3-RSR, Timo
                Bernhard(DEU), Romain Dumas(FRA), +8 Laps
              </p>
              <p>
                P2 Winner: #8 B-K Motorsports, Courage C65 - Mazda, Guy
                Cosmo(USA), James Bach(USA), +12 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">
                73<sup>e</sup> 24 Heures du Mans
              </p>
              <p>Circuit de la Sarthe, Le Mans, France</p>
              <p>Date: 18-19.06.2005</p>
              <p>Series: Standalone Event</p>
              <p>Race Format: 24 Hours</p>
              <p>Classes: LMP1, LMP2, LMGT1, LMGT2</p>
              <p>Circuit Length: 13.650 km</p>
              <p>Laps Completed: 370</p>
              <p>Distance Covered: 5050.500 km</p>
              <p>
                Number of cars entered: 49 (13 LMP1, 13 LMP2, 9 LMGT1, 14 LMGT2)
              </p>
              <p>
                Number of cars finished: 24 (8 LMP1, 4 LMP2, 5 LMGT1, 7 LMGT2)
              </p>
              <p>
                Pole Position: #16 Pescarolo Sport, Pescarolo C60 Hybrid,
                Emmanuel Collard(FRA), Jean-Chrisophe Boullion(FRA), Eric
                Comas(FRA), 3.34,715
              </p>
              <p>
                Overall Winner: #3 ADT Champion Racing, Audi R8, JJ Lehto(FIN),
                Marco Werner(DEU), Tom Kristensen(DEN), 24:01.30,901
              </p>
              <p>
                LMGT1 Winner: #64 Corvette Racing, Chevrolet Corvette C6.R,
                Oliver Gavin(GBR), Olivier Beretta(MCO), Jan Magnussen(DEN), +21
                Laps
              </p>
              <p>
                LMGT2 Winner: #71 Alex Job Racing/BAM! Motorsport, Porsche 911
                GT3-RSR, Mike Rockenfeller(DEU), Marc Lieb(DEU), Leo
                Hindery(USA), +38 Laps
              </p>
              <p>
                LMP2 Winner: #25 Ray Mallock Ltd., MG-Lola EX264 - Judd, Thomas
                Erdos(BRA), Mike Newton(GBR), Warren Hughes(GBR), +65 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">New England Grand Prix</p>
              <p>Lime Rock Park, Lakeville, Connecticut</p>
              <p>Date: 04.07.2005</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: P1, P2, GT1, GT2</p>
              <p>Circuit Length: 2.478 km</p>
              <p>Laps Completed: 165</p>
              <p>Distance Covered: 408.870 km</p>
              <p>Number of cars entered: 22 (4 P1, 3 P2, 6 GT1, 9 GT2)</p>
              <p>Number of cars finished: 19 (2 P1, 3 P2, 5 GT1, 9 GT2)</p>
              <p>
                Pole Position: #1 ADT Champion Racing, Audi R8, JJ Lehto(FIN),
                Marco Werner(DEU), 0.46,753
              </p>
              <p>
                Overall Winner: #1 ADT Champion Racing, Audi R8, JJ Lehto(FIN),
                Marco Werner(DEU), 2:45.48,079
              </p>
              <p>
                GT1 Winner: #4 Corvette Racing, Chevrolet Corvette C6.R, Oliver
                Gavin(GBR), Olivier Beretta(MCO), +6 Laps
              </p>
              <p>
                GT2 Winner: #23 Alex Job Racing, Porsche 911 GT3-RSR, Timo
                Bernhard(DEU), Romain Dumas(FRA), +11 Laps
              </p>
              <p>
                P2 Winner: #10 Miracle Motorsports, Courage C65 - AER, Jeff
                Bucknum(USA), Chris McMurry(USA), +11 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">1000 km di Monza</p>
              <p>Autodromo Nazionale di Monza, Monza, Italy</p>
              <p>Date: 10.07.2005</p>
              <p>Series: LMES</p>
              <p>Race Format: 1000 km or 6 Hours</p>
              <p>Classes: LMP1, LMP2, LMGT1, LMGT2</p>
              <p>Circuit Length: 5.793 km</p>
              <p>Laps Completed: 173</p>
              <p>Distance Covered: 1002.189 km</p>
              <p>
                Number of cars entered: 44 (8 LMP1, 12 LMP2, 10 LMGT1, 14 LMGT2)
              </p>
              <p>
                Number of cars finished: 24 (7 LMP1, 4 LMP2, 6 LMGT1, 7 LMGT2)
              </p>
              <p>
                Pole Position: #15 Zytek Engineering, Zytek 04S, Tom
                Chilton(GBR), Hayanari Shimoda(JAP), 1.37,938
              </p>
              <p>
                Overall Winner: #17 Pescarolo Sport, Pescarolo C60 Hybrid,
                Emmanuel Collard(FRA), Jean-Chrisophe Boullion(FRA), 5:02.32,220
              </p>
              <p>
                LMP2 Winner: #36 Paul Belmondo Racing, Courage C65 - Ford, Karim
                Ojjeh(SAU), Claude-Yves Gosselin(FRA), Vincent Vosse(BEL), +8
                Laps
              </p>
              <p>
                LMGT1 Winner: #51 BMS Scuderia Italia, Ferrari 550-GTS
                Maranello, Christian Pescatori(ITA), Michele Bartyan(ITA), Toni
                Seiler(CHE), +15 Laps
              </p>
              <p>
                LMGT2 Winner: #90 Sebah Automotive, Porsche 911 GT3-R, Xavier
                Pompidou(FRA), Marc Lieb(DEU), +22 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">Infineon Grand Prix of Sonoma</p>
              <p>Infineon Raceway, Sonoma, California</p>
              <p>Date: 17.07.2005</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: P1, P2, GT1, GT2</p>
              <p>Circuit Length: 4.072 km</p>
              <p>Laps Completed: 111</p>
              <p>Distance Covered: 451.992 km</p>
              <p>Number of cars entered: 24 (5 P1, 3 P2, 6 GT1, 10 GT2)</p>
              <p>Number of cars finished: 19 (4 P1, 3 P2, 4 GT1, 8 GT2)</p>
              <p>
                Pole Position: #20 Dyson Racing, MG-Lola EX257, Chris
                Dyson(USA), Andy Wallace(GBR), 1.21,688
              </p>
              <p>
                Overall Winner: #2 ADT Champion Racing, Audi R8, Emanuele
                Pirro(ITA), Frank Biela(DEU), 2:46.10,805
              </p>
              <p>
                P2 Winner: #37 Intersport Racing, Lola B05/40 - AER, Clint
                Field(USA), Liz Halliday(GBR), +6 Laps
              </p>
              <p>
                GT1 Winner: #3 Corvette Racing, Chevrolet Corvette C6.R, Ron
                Fellows(CAN), Johnny O'Connell(USA), +7 Laps
              </p>
              <p>
                GT2 Winner: #23 Alex Job Racing, Porsche 911 GT3-RSR, Timo
                Bernhard(DEU), Romain Dumas(FRA), +11 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">American Le Mans Portland Grand Prix</p>
              <p>Portland International Raceway, Portland, Oregon</p>
              <p>Date: 30.07.2005</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: P1, P2, GT1, GT2</p>
              <p>Circuit Length: 3.161 km</p>
              <p>Laps Completed: 137</p>
              <p>Distance Covered: 433.057 km</p>
              <p>Number of cars entered: 23 (5 P1, 3 P2, 6 GT1, 9 GT2)</p>
              <p>Number of cars finished: 18 (3 P1, 2 P2, 5 GT1, 8 GT2)</p>
              <p>
                Pole Position: #20 Dyson Racing, MG-Lola EX257, Chris
                Dyson(USA), Andy Wallace(GBR), 1.02,712
              </p>
              <p>
                Overall Winner: #2 ADT Champion Racing, Audi R8, Emanuele
                Pirro(ITA), Frank Biela(DEU), 2:45.06,409
              </p>
              <p>
                P2 Winner: #37 Intersport Racing, Lola B05/40 - AER, Clint
                Field(USA), Gregor Fisken(GBR), +5 Laps
              </p>
              <p>
                GT1 Winner: #4 Corvette Racing, Chevrolet Corvette C6.R, Oliver
                Gavin(GBR), Olivier Beretta(MCO), +6 Laps
              </p>
              <p>
                GT2 Winner: #23 Alex Job Racing, Porsche 911 GT3-RSR, Timo
                Bernhard(DEU), Romain Dumas(FRA), +12 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">1000 km of Silverstone</p>
              <p>Silverstone Circuit, Silverstone, Great Britain</p>
              <p>Date: 13.08.2005</p>
              <p>Series: LMES</p>
              <p>Race Format: 1000 km or 6 Hours</p>
              <p>Classes: LMP1, LMP2, LMGT1, LMGT2</p>
              <p>Circuit Length: 5.141 km</p>
              <p>Laps Completed: 151</p>
              <p>Distance Covered: 776.291 km</p>
              <p>
                Number of cars entered: 48 (11 LMP1, 12 LMP2, 10 LMGT1, 15
                LMGT2)
              </p>
              <p>
                Number of cars finished: 35 (8 LMP1, 8 LMP2, 8 LMGT1, 11 LMGT2)
              </p>
              <p>
                Pole Position: #7 Creation Autosportif, DBA 03S - Judd, Nicolas
                Minassian(FRA), Jamie Campbell-Walter(GBR), 1.34,562
              </p>
              <p>
                Overall Winner: #4 Audi PlayStation Team Oreca, Audi R8, Allan
                McNish(GBR), Stephane Ortelli(MCO), 5:51.09,527
              </p>
              <p>
                LMP2 Winner: #36 Paul Belmondo Racing, Courage C65 - Ford, Karim
                Ojjeh(SAU), Claude-Yves Gosselin(FRA), Vincent Vosse(BEL), +8
                Laps
              </p>
              <p>
                LMGT1 Winner: #67 MenX, Ferrari 550-GTS Maranello, Robert
                Pergl(CZE), Jaroslav Janis(CZE), Peter Kox(NED), +8 Laps
              </p>
              <p>
                LMGT2 Winner: #90 Sebah Automotive, Porsche 911 GT3-R, Xavier
                Pompidou(FRA), Marc Lieb(DEU), +10 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">Generac 500 at Road America</p>
              <p>Road America, Elkhart Lake, Wisconsin</p>
              <p>Date: 21.08.2005</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: P1, P2, GT1, GT2</p>
              <p>Circuit Length: 6.477 km</p>
              <p>Laps Covered: 72</p>
              <p>Distance Covered: 466.344 km</p>
              <p>Number of cars entered: 24 (5 P1, 4 P2, 6 GT1, 9 GT2)</p>
              <p>Number of cars finished: 20 (5 P1, 2 P2, 4 GT1, 9 GT2)</p>
              <p>
                Pole Position: #16 Dyson Racing, MG-Lola EX257, James
                Weaver(GBR), Butch Leitzinger(USA), 1.53,052
              </p>
              <p>
                Overall Winner: #2 ADT Champion Racing, Audi R8, Emanuele
                Pirro(ITA), Frank Biela(DEU), 2:45.06,441
              </p>
              <p>
                GT1 Winner: #4 Corvette Racing, Chevrolet Corvette C6.R, Oliver
                Gavin(GBR), Olivier Beretta(MCO), +1 Lap
              </p>
              <p>
                P2 Winner: #10 Miracle Motorsports, Courage C65 - AER, Jeff
                Bucknum(USA), Chris McMurry(USA), <em>John Macaluso(USA)</em>,
                +3 Laps
              </p>
              <p>
                GT2 Winner: #31 Petersen Motorsport/White Lightning Racing,
                Porsche 911 GT3-RSR, Jörg Bergmeister(DEU), Patrick Long(USA),{" "}
                <em>Michael Petersen(USA)</em>, +3 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">Internationales ADAC 1000 km-Rennen</p>
              <p>Nürburgring, Nürburg, Germany</p>
              <p>Date: 04.09.2005</p>
              <p>Series: LMES</p>
              <p>Race Format: 1000 km or 6 Hours</p>
              <p>Classes: LMP1, LMP2, LMGT1, LMGT2</p>
              <p>Circuit Length: 5.137 km</p>
              <p>Laps Completed: 193</p>
              <p>Distance Covered: 991.441 km</p>
              <p>
                Number of cars entered: 44 (9 LMP1, 11 LMP2, 9 LMGT1, 15 LMGT2)
              </p>
              <p>
                Number of cars finished: 32 (9 LMP1, 7 LMP2, 7 LMGT1, 9 LMGT2)
              </p>
              <p>
                Pole Position: #15 Zytek Engineering, Zytek 04S, Tom
                Chilton(GBR), Hayanari Shimoda(JAP), 1.44,275
              </p>
              <p>
                Overall Winner: #15 Zytek Engineering, Zytek 04S, Tom
                Chilton(GBR), Hayanari Shimoda(JAP), 6:01.06,739
              </p>
              <p>
                LMP2 Winner: #27 Horag Lista Racing, Lola B05/40 - Judd, Eric
                van de Poele(BEL), Didier Theys(BEL), +9 Laps
              </p>
              <p>
                LMGT1 Winner: #62 Cirtek Motorsport, Aston Martin DBR9, Darren
                Turner(GBR), Robert Bell(GBR), <em>Frederic Dor(CHE)</em>, +14
                Laps
              </p>
              <p>
                LMGT2 Winner: #90 Sebah Automotive, Porsche 911 GT3-R, Xavier
                Pompidou(FRA), Marc Lieb(DEU), +23 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">Grand Prix of Mosport</p>
              <p>Mosport International Raceway, Bowmanville, Ontario</p>
              <p>Date: 04.09.2005</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 30 minutes</p>
              <p>Classes: P1, P2, GT1, GT2</p>
              <p>Circuit Length: 3.957 km</p>
              <p>Laps Completed: 127</p>
              <p>Distance Covered: 502.539 km</p>
              <p>Number of cars entered: 22 (4 P1, 4 P2, 5 GT1, 9 GT2)</p>
              <p>Number of cars finished: 17 (4 P1, 3 P2, 5 GT1, 5 GT2)</p>
              <p>
                Pole Position: #20 Dyson Racing, MG-Lola EX257, Chris
                Dyson(USA), Andy Wallace(GBR), 1.07,682
              </p>
              <p>
                Overall Winner: #16 Dyson Racing, MG-Lola EX257, James
                Weaver(GBR), Butch Leitzinger(USA), 2:31.04,796
              </p>
              <p>
                P2 Winner: #37 Intersport Racing, Lola B05/40 - AER, Clint
                Field(USA), Liz Halliday(GBR), <em>Jon Field(USA)</em>, +7 Laps
              </p>
              <p>
                GT1 Winner: #4 Corvette Racing, Chevrolet Corvette C6.R, Oliver
                Gavin(GBR), Olivier Beretta(MCO), +8 Laps
              </p>
              <p>
                GT2 Winner: #31 Petersen Motorsport/White Lightning Racing,
                Porsche 911 GT3-RSR, Jörg Bergmeister(DEU), Patrick Long(USA),{" "}
                <em>Michael Petersen(USA)</em>, +17 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">8th Annual Petit Le Mans</p>
              <p>Road Atlanta, Braselton, Georgia</p>
              <p>Date: 01.10.2005</p>
              <p>Series: ALMS</p>
              <p>Race Format: 1000 Miles or 10 Hours</p>
              <p>Classes: P1, P2, GT1, GT2</p>
              <p>Circuit Length: 4.088 km</p>
              <p>Laps Completed: 394</p>
              <p>Distance Covered: 1610.672 km</p>
              <p>Number of cars entered: 31 (6 P1, 8 P2, 7 GT1, 10 GT2)</p>
              <p>Number of cars finished: 19 (4 P1, 3 P2, 6 GT1, 6 GT2)</p>
              <p>
                Pole Position: #15 Zytek Engineering, Zytek 04S, Tom
                Chilton(GBR), Hayanari Shimoda(JAP), 1.10,781
              </p>
              <p>
                Overall Winner: #2 ADT Champion Racing, Audi R8, Emanuele
                Pirro(ITA), Frank Biela(DEU), 9:16.20,630
              </p>
              <p>
                GT1 Winner: #4 Corvette Racing, Chevrolet Corvette C6.R, Oliver
                Gavin(GBR), Olivier Beretta(MCO), Jan Magnussen(DEN), +15 Laps
              </p>
              <p>
                P2 Winner: #37 Intersport Racing, Lola B05/40 - AER, Clint
                Field(USA), Jon Field(USA), Liz Halliday(GBR), +19 Laps
              </p>
              <p>
                GT2 Winner: #31 Petersen Motorsport/White Lightning Racing,
                Porsche 911 GT3-RSR, Jörg Bergmeister(DEU), Patrick Long(USA),{" "}
                <em>Craig Stanton(USA)</em>, +30 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">Monterey Sports Car Championships</p>
              <p>Mazda Raceway Laguna Seca, Monterey, California</p>
              <p>Date: 16.10.2005</p>
              <p>Series: ALMS</p>
              <p>Race Format: 4 Hours</p>
              <p>Classes: P1, P2, GT1, GT2</p>
              <p>Circuit Length: 3.602 km</p>
              <p>Laps Completed: 164</p>
              <p>Distance Covered: 590.728 km</p>
              <p>Number of cars entered: 28 (6 P1, 5 P2, 7 GT1, 10 GT2)</p>
              <p>Number of cars finished: 24 (6 P1, 5 P2, 5 GT1, 8 GT2)</p>
              <p>
                Pole Position: #15 Zytek Engineering, Zytek 04S, Tom
                Chilton(GBR), Hayanari Shimoda(JAP), 1.14,185
              </p>
              <p>
                Overall Winner: #15 Zytek Engineering, Zytek 04S, Tom
                Chilton(GBR), Hayanari Shimoda(JAP), 3:59.57,347
              </p>
              <p>
                P2 Winner: #6 Penske Motorsports, Porsche RS Spyder, Lucas
                Luhr(DEU), Sascha Maassen(DEU), +1 Lap
              </p>
              <p>
                GT1 Winner: #4 Corvette Racing, Chevrolet Corvette C6.R, Oliver
                Gavin(GBR), Olivier Beretta(MCO), +6 Laps
              </p>
              <p>
                GT2 Winner: #31 Petersen Motorsport/White Lightning Racing,
                Porsche 911 GT3-RSR, Jörg Bergmeister(DEU), Patrick Long(USA),{" "}
                <em>Michael Petersen(USA)</em>, +13 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">1000 km of Istanbul</p>
              <p>Intercity Istanbul Park, Istanbul, Turkey</p>
              <p>Date: 13.11.2005</p>
              <p>Series: LMES</p>
              <p>Race Format: 1000 km or 6 Hours</p>
              <p>Classes: LMP1, LMP2, LMGT1, LMGT2</p>
              <p>Circuit Length: 5.338 km</p>
              <p>Laps Completed: 173</p>
              <p>Distance Covered: 923.474 km</p>
              <p>
                Number of cars entered: 34 (8 LMP1, 10 LMP2, 6 LMGT1, 10 LMGT2)
              </p>
              <p>
                Number of cars finished: 25 (8 LMP1, 6 LMP2, 6 LMGT1, 5 LMGT2)
              </p>
              <p>
                Pole Position: #17 Pescarolo Sport, Pescarolo C60 Hybrid,
                Emmanuel Collard(FRA), Jean-Chrisophe Boullion(FRA), 1.39,359
              </p>
              <p>
                Overall Winner: #17 Pescarolo Sport, Pescarolo C60 Hybrid,
                Emmanuel Collard(FRA), Jean-Chrisophe Boullion(FRA), 6:01.32,594
              </p>
              <p>
                LMP2 Winner: #25 Ray Mallock Ltd., MG-Lola EX264 - MG, Thomas
                Erdos(BRA), Mike Newton(GBR), +9 Laps
              </p>
              <p>
                LMGT1 Winner: #51 BMS Scuderia Italia, Ferrari 550-GTS
                Maranello, Christian Pescatori(ITA), Michele Bartyan(ITA), Toni
                Seiler(CHE), +12 Laps
              </p>
              <p>
                LMGT2 Winner: #93 Scuderia Ecosse, Ferrari 360 Modena GTC,
                Andrew Kirkaldy(GBR), Nathan Kinch(GBR), +17 Laps
              </p>
            </li>
          </ol>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h2>Season Totals</h2>
          <div>
            <p>Number of Races: 16</p>
            <p>Total Distance Covered: 17184.822 km</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h2>Misc Links</h2>
          <ul>
            <li>
              <a
                href="http://archive.dailysportscar.com/subscribers/news/alms/2005alms/alms584.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                IMSA allowed Maserati to run in the GT1 class in ALMS with the
                MC12
              </a>
            </li>
            <li>
              <a
                href="http://archive.dailysportscar.com/subscribers/news/alms/2005alms/alms611.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Aston Martin protests Maserati at Sebring
              </a>
            </li>
            <li>
              #15 Zytek excluded from Nurburgring quali, #7 Creation inherits
              pole
            </li>
            <li>
              Mosport race shortened due to fuel shortage caused by hurricane
              Katrina
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
