import Image from "next/image";

export default function OneThree() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full flex-col items-center justify-start lg:py-12 lg:px-16 bg-white gap-8 py-4 px-6">
        <h1>2013 Season</h1>
        <div className="flex flex-col gap-2">
          <h2>Series and Regulation News</h2>
          <ul>
            <li>
              The big news going into the new year was the{" "}
              <a
                href="https://archive2.dailysportscar.com/viewArticle.cfm@articleUID=066EF7FF-C2EB-A9DC-AC2369A8F11610E5.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                announcement of ALMS and Grand-Am merging
              </a>{" "}
              in 2014. The two series split ahead of 1998 due to conflicts
              regarding the future direction of the championship and had been
              competing against each other since then, but this meant from 2014
              onwards sportscar racing in North America would again be run under
              one organization.
            </li>
            <li>
              For its 2nd season the WEC{" "}
              <a
                href="https://archive2.dailysportscar.com/viewArticle.cfm@articleUID=0CDAF3C9-D7CE-ACB5-F2168104426FDDBC.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                released a new calendar
              </a>{" "}
              with Silverstone becoming the season opener instead of the joint
              event at Sebring with ALMS, and COTA became the replacement US
              race, ran alongside ALMS.
            </li>
            <li>
              ALMS went into its final season with a{" "}
              <a
                href="https://archive2.dailysportscar.com/viewArticle.cfm@articleUID=76918107-0791-93FF-29285EB382E085B4.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                slightly updated calendar
              </a>
              , now running a few events together with Grand-Am in preparation
              for the merger, but the calendar also saw a new race at COTA
              together with the WEC, that would replace Mid-Ohio.
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2>Manufacturer News</h2>
          <ul>
            <li>
              Audi rolled out an{" "}
              <a
                href="https://archive2.dailysportscar.com/viewArticle.cfm@articleUID=B515C222-081B-5A4B-908FDCF284E5B08F.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                updated version
              </a>{" "}
              of the R18 E-Tron Quattro, now also with a{" "}
              <a
                href="https://archive2.dailysportscar.com/viewArticle.cfm@articleUID=42BE358B-B9DA-35B6-0DA05A7FB57B64AC.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                long-tail variant
              </a>
              , taking the car one final time to{" "}
              <a
                href="https://archive2.dailysportscar.com/viewArticle.cfm@articleUID=5D5C7B78-BB3B-B6F0-8F1E3571582F0913.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sebring alongside the 2012-spec car
              </a>
              , before competing in the full WEC season.
            </li>
            <li>
              Toyota too went into its 2nd season with a{" "}
              <a
                href="https://archive2.dailysportscar.com/viewArticle.cfm@articleUID=F3721068-9526-83C4-2F4BC82FAE9DD8B0.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                heavily updated TS030 Hybrid
              </a>
              , however the team initially only{" "}
              <a
                href="https://archive2.dailysportscar.com/viewArticle.cfm@articleUID=4B19239F-96CC-9288-11EF2BBC336574CE.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                committed to running 1 car
              </a>{" "}
              for the full WEC campaign with a 2nd car for Le Mans which would
              eventually compete in most of the remaining races.
            </li>
            <li>
              After a difficult 2012 where{" "}
              <a
                href="https://archive2.dailysportscar.com/viewArticle.cfm@articleUID=504271BB-EB72-042A-48099E1705686C22.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                financial issues
              </a>{" "}
              due to certain investors forced the team to abandon their WEC
              campaign, combined with a poor showing from the new Pescarolo 03
              saw{" "}
              <a
                href="https://archive2.dailysportscar.com/viewArticle.cfm@articleUID=21976256-E3FD-47AD-B82DC6C370822A3F.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                the team enter liquidation
              </a>{" "}
              in January. It marked the final end of the road for Henri
              Pescarolo and his racing team just two short years on from the
              previous heroic turnaround.
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
                  <td rowSpan={11}>
                    <strong>Audi Sport Team Joest</strong>
                  </td>
                  <td rowSpan={11}>Audi R18 E-Tron Quattro</td>
                  <td rowSpan={4}>1</td>
                  <td>Benoit Treluyer(FRA)</td>
                  <td>
                    Sebring, Silverstone, Spa, Le Mans, Interlagos, COTA, Fuji,
                    Shanghai, Bahrain
                  </td>
                </tr>
                <tr>
                  <td>Marcel Fässler(CHE)</td>
                  <td>
                    Sebring, Silverstone, Spa, Le Mans, Interlagos, COTA, Fuji,
                    Shanghai, Bahrain
                  </td>
                </tr>
                <tr>
                  <td>Oliver Jarvis(GBR)</td>
                  <td>Sebring</td>
                </tr>
                <tr>
                  <td>Andre Lotterer(DEU)</td>
                  <td>
                    Silverstone, Spa, Le Mans, Interlagos, COTA, Fuji, Shanghai,
                    Bahrain
                  </td>
                </tr>
                <tr>
                  <td rowSpan={4}>2</td>
                  <td>Allan McNish(GBR)</td>
                  <td>
                    Sebring, Silverstone, Spa, Le Mans, Interlagos, COTA, Fuji,
                    Shanghai, Bahrain
                  </td>
                </tr>
                <tr>
                  <td>Tom Kristensen(DEN)</td>
                  <td>
                    Sebring, Silverstone, Spa, Le Mans, Interlagos, COTA, Fuji,
                    Shanghai, Bahrain
                  </td>
                </tr>
                <tr>
                  <td>Lucas di Grassi(BRA)</td>
                  <td>Sebring</td>
                </tr>
                <tr>
                  <td>Loïc Duval(FRA)</td>
                  <td>
                    Silverstone, Spa, Le Mans, Interlagos, COTA, Fuji, Shanghai,
                    Bahrain
                  </td>
                </tr>
                <tr>
                  <td rowSpan={3}>3</td>
                  <td>Marc Gene(ESP)</td>
                  <td>Spa, Le Mans</td>
                </tr>
                <tr>
                  <td>Lucas di Grassi(BRA)</td>
                  <td>Spa, Le Mans</td>
                </tr>
                <tr>
                  <td>Oliver Jarvis(GBR)</td>
                  <td>Spa, Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={6}>
                    <strong>Toyota Racing</strong>
                  </td>
                  <td rowSpan={6}>Toyota TS030 Hybrid</td>
                  <td rowSpan={3}>7</td>
                  <td>Alexander Wurz(AUT)</td>
                  <td>Silverstone, Spa, Le Mans, Fuji, Shanghai, Bahrain</td>
                </tr>
                <tr>
                  <td>Nicolas Lapierre(FRA)</td>
                  <td>Silverstone, Spa, Le Mans, Fuji, Shanghai, Bahrain</td>
                </tr>
                <tr>
                  <td>Kazuki Nakajima(JAP)</td>
                  <td>Spa, Le Mans, Fuji, Bahrain</td>
                </tr>
                <tr>
                  <td rowSpan={3}>8</td>
                  <td>Sebastien Buemi(CHE)</td>
                  <td>
                    Silverstone, Spa, Le Mans, Interlagos, COTA, Fuji, Shanghai,
                    Bahrain
                  </td>
                </tr>
                <tr>
                  <td>Stephane Sarrazin(FRA)</td>
                  <td>
                    Silverstone, Spa, Le Mans, Interlagos, COTA, Fuji, Shanghai,
                    Bahrain
                  </td>
                </tr>
                <tr>
                  <td>Anthony Davidson(GBR)</td>
                  <td>
                    Silverstone, Spa, Le Mans, Interlagos, COTA, Fuji, Shanghai,
                    Bahrain
                  </td>
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
                61st Annual Mobil 1 12 Hours of Sebring
              </p>
              <p>Sebring International Raceway, Sebring, Florida</p>
              <p>Date: 16.03.2013</p>
              <p>Series: ALMS</p>
              <p>Race Format: 12 Hours</p>
              <p>Classes: P1, P2, PC, GT, GTC</p>
              <p>Circuit Length: 6.019 km</p>
              <p>Laps Completed: 364</p>
              <p>Distance Covered: 2190.916 km</p>
              <p>
                Number of cars entered: 42 (7 P1, 5 P2, 7 PC, 12 GT, 11 GTC)
              </p>
              <p>
                Number of cars finished: 37 (5 P1, 5 P2, 7 PC, 10 GT, 10 GTC)
              </p>
              <p>
                Pole Position: #1 Audi Sport Team Joest, Audi R18 E-Tron
                Quattro, Benoit Treluyer(FRA), Marcel Fässler(CHE), Oliver
                Jarvis(GBR), 1.43,886
              </p>
              <p>
                Overall Winner: #1 Audi Sport Team Joest, Audi R18 E-Tron
                Quattro, Benoit Treluyer(FRA), Marcel Fässler(CHE), Oliver
                Jarvis(GBR), 12:00.11,638
              </p>
              <p>
                P2 Winner: #551 Level 5 Motorsports, HPD ARX-03b, Marino
                Franchitti(GBR), Ryan Briscoe(AUS), Scott Tucker(USA), +18 Laps
              </p>
              <p>
                PC Winner: #52 PR1/Mathiasen Motorsports, Oreca FLM09 -
                Chevrolet, David Cheng(CHN), David Ostella(CAN), Mike
                Guasch(USA), +28 Laps
              </p>
              <p>
                GT Winner: #4 Corvette Racing, Chevrolet Corvette C6 ZR1, Oliver
                Gavin(GBR), Tommy Milner(USA), Richard Westbrook(GBR), +31 Laps
              </p>
              <p>
                GTC Winner: #22 Alex Job Racing, Porsche 997 GT3 Cup, Jeroen
                Bleekemolen(NED), Cooper MacNeil(USA), Dion von Moltke(ZAF), +49
                Laps
              </p>
            </li>
            <li>
              <p className="font-bold">6 Hours of Silverstone</p>
              <p>Silverstone Circuit, Silverstone, Great Britain</p>
              <p>Date: 14.04.2013</p>
              <p>Series: WEC</p>
              <p>Race Format: 6 Hours</p>
              <p>Classes: LMP1, LMP2, LMGTE-Pro, LMGTE-Am</p>
              <p>Circuit Length: 5.891 km</p>
              <p>Laps Completed: 197</p>
              <p>Distance Covered: 1160.527 km</p>
              <p>
                Number of cars entered: 31 (7 LMP1, 10 LMP2, 6 LMGTE-Pro, 8
                LMGTE-Am)
              </p>
              <p>
                Number of cars finished: 28 (6 LMP1, 8 LMP2, 6 LMGTE-Pro, 8
                LMGTE-Am)
              </p>
              <p>
                Pole Position: #7 Toyota Racing, Toyota TS030 Hybrid, Alexander
                Wurz(AUT), Nicolas Lapierre(FRA), 1.48,021
              </p>
              <p>
                Overall Winner: #2 Audi Sport Team Joest, Audi R18 E-Tron
                Quattro, Allan McNish(GBR), Tom Kristensen(DEN), Loïc
                Duval(FRA), 6:00.01,686
              </p>
              <p>
                LMP2 Winner: #25 Delta-ADR, Oreca 03 - Nissan, Antonio
                Pizzonia(BRA), James Walker(GBR), Tor Graves(THA), +13 Laps
              </p>
              <p>
                LMGTE-Pro Winner: #97 Aston Martin Racing, Aston Martin Vantage
                GTE, Darren Turner(GBR), Stefan Mücke(DEU), Bruno Senna(BRA),
                +26 Laps
              </p>
              <p>
                LMGTE-Am Winner: #95 Aston Martin Racing, Aston Martin Vantage
                GTE, Allan Simonsen(DEN), Christoffer Nygaard(DEN), Kristian
                Poulsen(DEN), +28 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">
                Tequila Patron American Le Mans Series at Long Beach
              </p>
              <p>Long Beach Street Circuit, Long Beach, California</p>
              <p>Date: 20.04.2013</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours</p>
              <p>Classes: P1, P2, PC, GT, GTC</p>
              <p>Circuit Length: 3.167 km</p>
              <p>Laps Completed: 80</p>
              <p>Distance Covered: 253.360 km</p>
              <p>
                Number of cars entered: 33 (3 P1, 4 P2, 6 PC, 10 GT, 10 GTC)
              </p>
              <p>
                Number of cars finished: 29 (2 P1, 4 P2, 5 PC, 10 GT, 8 GTC)
              </p>
              <p>
                Pole Position: #12 Rebellion Racing, Lola B12/60 - Toyota, Neel
                Jani(CHE), Nick Heidfeld(DEU), 1.12,600
              </p>
              <p>
                Overall Winner: #6 Muscle Milk Pickett Racing, HPD ARX-03a,
                Lucas Luhr(DEU), Klaus Graf(DEU), 2:00.23,577
              </p>
              <p>
                PC Winner: #05 CORE Autosport, Oreca FLM09 - Chevrolet, Colin
                Braun(USA), Jon Bennett(USA), +1 Lap
              </p>
              <p>
                P2 Winner: #01 Extreme Speed Motorsports, HPD ARX-03b, Scott
                Sharp(USA), Guy Cosmo(USA), +1 Lap
              </p>
              <p>
                GT Winner: #55 BMW Team RLL, BMW Z4 GTE, Bill Auberlen(USA),
                Maxime Martin(BEL), +2 Laps
              </p>
              <p>
                GTC Winner: #30 NGT Motorsport, Porsche 997 GT3 Cup, Sean
                Edwards(GBR), Henrique Cisneros(USA), +5 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">WEC 6 Heures de Spa-Francorchamps</p>
              <p>Circuit de Spa-Francorchamps, Stavelot, Belgium</p>
              <p>Date: 04.05.2013</p>
              <p>Series: WEC</p>
              <p>Race Format: 6 Hours</p>
              <p>Classes: LMP1, LMP2, LMGTE-Pro, LMGTE-Am</p>
              <p>Circuit Length: 7.004 km</p>
              <p>Laps Completed: 168</p>
              <p>Distance Covered: 1176.672 km</p>
              <p>
                Number of cars entered: 35 (8 LMP1, 11 LMP2, 7 LMGTE-Pro, 10
                LMGTE-Am)
              </p>
              <p>
                Number of cars finished: 31 (7 LMP1, 9 LMP2, 6 LMGTE-Pro, 10
                LMGTE-Am)
              </p>
              <p>
                Pole Position: #1 Audi Sport Team Joest, Audi R18 E-Tron
                Quattro, Andre Lotterer(DEU), Benoit Treluyer(FRA), Marcel
                Fässler(CHE), 1.59,961
              </p>
              <p>
                Overall Winner: #1 Audi Sport Team Joest, Audi R18 E-Tron
                Quattro, Andre Lotterer(DEU), Benoit Treluyer(FRA), Marcel
                Fässler(CHE), 6:00.55,971
              </p>
              <p>
                LMP2 Winner: #49 Pecom Racing, Oreca 03 - Nissan, Nicolas
                Minassian(FRA), Pierre Kaffer(DEU), Luis Perez Companc(ARG), +11
                Laps
              </p>
              <p>
                LMGTE-Pro Winner: #51 AF Corse, Ferrari 458 Italia GT2,
                Gianmaria Bruni(ITA), Giancarlo Fisichella(ITA), +19 Laps
              </p>
              <p>
                LMGTE-Am Winner: #81 8 Star Motorsports, Ferrari 458 Italia GT2,
                Rui Aguas(POR), Matteo Malucelli(ITA), Vincente Potoliccio(VEN),
                +21 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">American Le Mans Monterey</p>
              <p>Mazda Raceway Laguna Seca, Monterey, California</p>
              <p>Date: 11.05.2013</p>
              <p>Series: ALMS</p>
              <p>Race Format: 4 Hours</p>
              <p>Classes: P1, P2, PC, GT, GTC</p>
              <p>Circuit Length: 3.602 km</p>
              <p>Laps Completed: 150</p>
              <p>Distance Covered: 540.300 km</p>
              <p>
                Number of cars entered: 36 (4 P1, 4 P2, 7 PC, 11 GT, 10 GTC)
              </p>
              <p>Number of cars finished: 30 (2 P1, 3 P2, 7 PC, 9 GT, 9 GTC)</p>
              <p>
                Pole Position: #12 Rebellion Racing, Lola B12/60 - Toyota, Neel
                Jani(CHE), Nick Heidfeld(DEU), 1.13,429
              </p>
              <p>
                Overall Winner: #6 Muscle Milk Pickett Racing, HPD ARX-03a,
                Lucas Luhr(DEU), Klaus Graf(DEU), 3:59.05,504
              </p>
              <p>
                P2 Winner: #551 Level 5 Motorsports, HPD ARX-03b, Marino
                Franchitti(GBR), Scott Tucker(USA), +4 Laps
              </p>
              <p>
                PC Winner: #52 PR1/Mathiasen Motorsports, Oreca FLM09 -
                Chevrolet, Luis Diaz(MEX), Mike Guasch(USA), +5 Laps
              </p>
              <p>
                GT Winner: #3 Corvette Racing, Chevrolet Corvette C6 ZR1, Jan
                Magnussen(DEN), Antonio Garcia(ESP), +8 Laps
              </p>
              <p>
                GTC Winner: #30 NGT Motorsport, Porsche 997 GT3 Cup, Nick
                Tandy(GBR), Henrique Cisneros(USA), +13 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">
                81<sup>e</sup> 24 Heures du Mans
              </p>
              <p>Circuit de la Sarthe, Le Mans, France</p>
              <p>Date: 22-23.06.2013</p>
              <p>Series: WEC</p>
              <p>Race Format: 24 Hours</p>
              <p>Classes: LMP1, LMP2, LMGTE-Pro, LMGTE-Am</p>
              <p>Circuit Length: 13.629 km</p>
              <p>Laps Completed: 348</p>
              <p>Distance Covered: 4742.892 km</p>
              <p>
                Number of cars entered: 56 (8 LMP1, 22 LMP2, 12 LMGTE-Pro, 14
                LMGTE-Am)
              </p>
              <p>
                Number of cars finished: 41 (8 LMP1, 12 LMP2, 10 LMGTE-Pro, 11
                LMGTE-Am)
              </p>
              <p>
                Pole Position: #2 Audi Sport Team Joest, Audi R18 E-Tron
                Quattro, Allan McNish(GBR), Tom Kristensen(DEN), Loïc
                Duval(FRA), 3.22,349
              </p>
              <p>
                Overall Winner: #2 Audi Sport Team Joest, Audi R18 E-Tron
                Quattro, Allan McNish(GBR), Tom Kristensen(DEN), Loïc
                Duval(FRA), 24:01.16,436
              </p>
              <p>
                LMP2 Winner: #35 OAK Racing, OAK Morgan - Nissan, Bertrand
                Baguette(BEL), Martin Plowman(GBR), Ricardo Gonzalez(MEX), +19
                Laps
              </p>
              <p>
                LMGTE-Pro Winner: #92 Porsche AG Team Manthey, Porsche 911 RSR,
                Marc Lieb(DEU), Romain Dumas(FRA), Richard Lietz(AUT), +33 Laps
              </p>
              <p>
                LMGTE-Am Winner: #76 IMSA Performance Matmut, Porsche 997
                GT3-RSR, Jean-Karl Vernay(FRA), Christophe Bourret(FRA), Raymond
                Narac(FRA), +42 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">American Le Mans Northeast Grand Prix</p>
              <p>Lime Rock Park, Lakeville, Connecticut</p>
              <p>Date: 06.07.2013</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: P1, P2, PC, GT, GTC</p>
              <p>Circuit Length: 2.372 km</p>
              <p>Laps Completed: 184</p>
              <p>Distance Covered: 436.448 km</p>
              <p>Number of cars entered: 33 (3 P1, 4 P2, 7 PC, 11 GT, 8 GTC)</p>
              <p>Number of cars finished: 28 (2 P1, 4 P2, 7 PC, 9 GT, 6 GTC)</p>
              <p>
                Pole Position: #6 Muscle Milk Pickett Racing, HPD ARX-03c, Lucas
                Luhr(DEU), Klaus Graf(DEU), 0.44,396
              </p>
              <p>
                Overall Winner: #6 Muscle Milk Pickett Racing, HPD ARX-03c,
                Lucas Luhr(DEU), Klaus Graf(DEU), 2:45.41,407
              </p>
              <p>
                P2 Winner: #551 Level 5 Motorsports, HPD ARX-03b, Ryan
                Briscoe(AUS), Scott Tucker(USA), +6 Laps
              </p>
              <p>
                PC Winner: #9 RSR Racing, Oreca FLM09 - Chevrolet, Bruno
                Junqueira(BRA), Duncan Ende(USA), +7 Laps
              </p>
              <p>
                GT Winner: #56 BMW Team RLL, BMW Z4 GTE, John Edwards(USA), Dirk
                Müller(DEU), +12 Laps
              </p>
              <p>
                GTC Winner: #45 Flying Lizard Motorsports, Porsche 997 GT3 Cup,
                Spencer Pumpelly(USA), Nelson Canache Jr(VEN), +20 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">Mobil 1 SportsCar Grand Prix</p>
              <p>Canadian Tire Motorsport Park, Bowmanville, Ontario</p>
              <p>Date: 21.07.2013</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: P1, P2, PC, GT, GTC</p>
              <p>Circuit Length: 3.957 km</p>
              <p>Laps Completed: 132</p>
              <p>Distance Covered: 522.324 km</p>
              <p>Number of cars entered: 32 (3 P1, 4 P2, 7 PC, 10 GT, 8 GTC)</p>
              <p>
                Number of cars finished: 30 (2 P1, 4 P2, 6 PC, 10 GT, 8 GTC)
              </p>
              <p>
                Pole Position: #6 Muscle Milk Pickett Racing, HPD ARX-03c, Lucas
                Luhr(DEU), Klaus Graf(DEU), 1.05,871
              </p>
              <p>
                Overall Winner: #6 Muscle Milk Pickett Racing, HPD ARX-03c,
                Lucas Luhr(DEU), Klaus Graf(DEU), 2:46.11,793
              </p>
              <p>
                P2 Winner: #551 Level 5 Motorsports, HPD ARX-03b, Marino
                Franchitti(GBR), Scott Tucker(USA), +4 Laps
              </p>
              <p>
                PC Winner: #05 CORE Autosport, Oreca FLM09 - Chevrolet, Colin
                Braun(USA), Jon Bennett(USA), +7 Laps
              </p>
              <p>
                GT Winner: #4 Corvette Racing, Chevrolet Corvette C6 ZR1, Oliver
                Gavin(GBR), Tommy Milner(USA), +9 Laps
              </p>
              <p>
                GTC Winner: #22 Alex Job Racing, Porsche 997 GT3 Cup, Jeroen
                Bleekemolen(NED), Cooper MacNeil(USA), +18 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">
                Orion Energy Systems 245 at Road America
              </p>
              <p>Road America, Elkhart Lake, Wisconsin</p>
              <p>Date: 11.08.2013</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: P1, P2, PC, GT, GTC</p>
              <p>Circuit Length: 6.477 km</p>
              <p>Laps Completed: 67</p>
              <p>Distance Covered: 433.959 km</p>
              <p>Number of cars entered: 33 (3 P1, 4 P2, 7 PC, 11 GT, 8 GTC)</p>
              <p>
                Number of cars finished: 29 (3 P1, 3 P2, 7 PC, 10 GT, 6 GTC)
              </p>
              <p>
                Pole Position: #6 Muscle Milk Pickett Racing, HPD ARX-03c, Lucas
                Luhr(DEU), Klaus Graf(DEU), 1.51,460
              </p>
              <p>
                Overall Winner: #6 Muscle Milk Pickett Racing, HPD ARX-03c,
                Lucas Luhr(DEU), Klaus Graf(DEU), 2:46.40,847
              </p>
              <p>
                PC Winner: #9 RSR Racing, Oreca FLM09 - Chevrolet, Bruno
                Junqueira(BRA), Duncan Ende(USA), +19,788
              </p>
              <p>
                P2 Winner: #551 Level 5 Motorsports, HPD ARX-03b, Simon
                Pagenaud(FRA), Scott Tucker(USA), +32,650
              </p>
              <p>
                GT Winner: #91 SRT Motorsports, SRT Viper GTS-R, Dominik
                Farnbacher(DEU), Marc Goosens(BEL), +2 Laps
              </p>
              <p>
                GTC Winner: #45 Flying Lizard Motorsports, Porsche 997 GT3 Cup,
                Spencer Pumpelly(USA), Nelson Canache Jr(VEN), +5 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">Grand Prix of Baltimore</p>
              <p>Baltimore Street Circuit, Baltimore, Maryland</p>
              <p>Date: 31.08.2013</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours</p>
              <p>Classes: P1, P2, PC, GT, GTC</p>
              <p>Circuit Length: 3.283 km</p>
              <p>Laps Completed: 41</p>
              <p>Distance Covered: 134.603 km</p>
              <p>Number of cars entered: 32 (2 P1, 4 P2, 6 PC, 11 GT, 9 GTC)</p>
              <p>Number of cars finished: 20 (2 P1, 2 P2, 3 PC, 7 GT, 6 GTC)</p>
              <p>
                Pole Position: #6 Muscle Milk Pickett Racing, HPD ARX-03c, Lucas
                Luhr(DEU), Klaus Graf(DEU), 1.25,290
              </p>
              <p>
                Overall Winner: #6 Muscle Milk Pickett Racing, HPD ARX-03c,
                Lucas Luhr(DEU), Klaus Graf(DEU), 1:31.38,287
              </p>
              <p>
                P2 Winner: #552 Level 5 Motorsports, HPD ARX-03b, Marino
                Franchitti(GBR), Guy Cosmo(USA), <em>Scott Tucker(USA)</em>,
                +31,160
              </p>
              <p>
                GT Winner: #3 Corvette Racing, Chevrolet Corvette C6 ZR1, Jan
                Magnussen(DEN), Antonio Garcia(ESP), +41,530
              </p>
              <p>
                PC Winner: #18 Performance Tech Motorsport, Oreca FLM09 -
                Chevrolet, Tristan Nunez(USA), Charlie Shears(USA), +1.07,281
              </p>
              <p>
                GTC Winner: #44 Flying Lizard Motorsports, Porsche 997 GT3 Cup,
                Dion von Moltke(ZAF), Seth Neiman(USA), +2 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">6 Hours of São Paulo</p>
              <p>Autodromo Jose Carlos Pace, Interlagos, Brazil</p>
              <p>Date: 01.09.2013</p>
              <p>Series: WEC</p>
              <p>Race Format: 6 Hours</p>
              <p>Classes: LMP1, LMP2, LMGTE-Pro, LMGTE-Am</p>
              <p>Circuit Lenghth: 4.309 km</p>
              <p>Laps Completed: 235</p>
              <p>Distance Covered: 1012.615 km</p>
              <p>
                Number of cars entered: 28 (4 LMP1, 9 LMP2, 7 LMGTE-Pro, 8
                LMGTE-Am)
              </p>
              <p>
                Number of cars finished: 20 (3 LMP1, 6 LMP2, 5 LMGTE-Pro, 6
                LMGTE-Am)
              </p>
              <p>
                Pole Position: #1 Audi Sport Team Joest, Audi R18 E-Tron
                Quattro, Andre Lotterer(DEU), Benoit Treluyer(FRA), Marcel
                Fässler(CHE), 1.21,303
              </p>
              <p>
                Overall Winner: #1 Audi Sport Team Joest, Audi R18 E-Tron
                Quattro, Andre Lotterer(DEU), Benoit Treluyer(FRA), Marcel
                Fässler(CHE), 6:01.26,209
              </p>
              <p>
                LMP2 Winner: #26 G-Drive Racing, Oreca 03 - Nissan, Mike
                Conway(GBR), John Martin(AUS), Roman Rusinov(RUS), +13 Laps
              </p>
              <p>
                LMGTE-Pro Winner: #51 AF Corse, Ferrari 458 Italia GT2,
                Gianmaria Bruni(ITA), Giancarlo Fisichella(ITA), +23 Laps
              </p>
              <p>
                LMGTE-Am Winner: #96 Aston Martin Racing, Aston Martin Vantage
                GTE, Jamie Campbell-Walter(GBR), Stuart Hall(GBR), +27 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">International Sports Car Weekend</p>
              <p>Circuit of the Americas, Austin, Texas</p>
              <p>Date: 21.09.2013</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: P1, P2, PC, GT, GTC</p>
              <p>Circuit Length: 5.513 km</p>
              <p>Laps Completed: 83</p>
              <p>Distance Covered: 457.579 km</p>
              <p>Number of cars entered: 33 (3 P1, 4 P2, 8 PC, 11 GT, 7 GTC)</p>
              <p>Number of cars finished: 27 (2 P1, 4 P2, 6 PC, 8 GT, 7 GTC)</p>
              <p>
                Pole Position: #6 Muscle Milk Pickett Racing, HPD ARX-03c, Lucas
                Luhr(DEU), Klaus Graf(DEU), 2.07,851
              </p>
              <p>
                Overall winner: #6 Muscle Milk Pickett Racing, HPD ARX-03c,
                Lucas Luhr(DEU), Klaus Graf(DEU), 2:45.05,710
              </p>
              <p>
                P2 Winner: #551 Level 5 Motorsports, HPD ARX-03b, Ryan
                Briscoe(AUS), Scott Tucker(USA), +3 Laps
              </p>
              <p>
                PC Winner: #8 BAR1 Motorsports, Oreca FLM09 - Chevrolet, Kyle
                Marcelli(CAN), Chris Cumming(CAN), +4 Laps
              </p>
              <p>
                GT Winner: #3 Corvette Racing, Chevrolet Corvette C6 ZR1, Jan
                Magnussen(DEN), Antonio Garcia(ESP), +5 Laps
              </p>
              <p>
                GTC Winner: #66 TRG, Porsche 997 GT3 Cup, Damien Faulkner(IRE),
                Ben Keating(USA), +11 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">6 Hours of Circuit of the Americas</p>
              <p>Circuit of the Americas, Austin, Texas</p>
              <p>Date: 22.09.2013</p>
              <p>Series: WEC</p>
              <p>Race Format: 6 Hours</p>
              <p>Classes: LMP1, LMP2, LMGTE-Pro, LMGTE-Am</p>
              <p>Circuit Length: 5.513 km</p>
              <p>Laps Completed: 187</p>
              <p>Distance Covered: 1030.931 km</p>
              <p>
                Number of cars entered: 28 (4 LMP1, 9 LMP2, 7 LMGTE-Pro, 8
                LMGTE-Am)
              </p>
              <p>
                Number of cars finished: 25 (4 LMP1, 8 LMP2, 5 LMGTE-Pro, 8
                LMGTE-Am)
              </p>
              <p>
                Pole Position: #2 Audi Sport Team Joest, Audi R18 E-Tron
                Quattro, Allan McNish(GBR), Tom Kristensen(DEN), Loïc
                Duval(FRA), 1.48,355
              </p>
              <p>
                Overall Winner: #2 Audi Sport Team Joest, Audi R18 E-Tron
                Quattro, Allan McNish(GBR), Tom Kristensen(DEN), Loïc
                Duval(FRA), 6:00.31,331
              </p>
              <p>
                LMP2 Winner: #26 G-Drive Racing, Oreca 03 - Nissan, Mike
                Conway(GBR), John Martin(AUS), Roman Rusinov(RUS), +9 Laps
              </p>
              <p>
                LMGTE-Pro Winner: #99 Aston Martin Racing, Aston Martin Vantage
                GTE, Bruno Senna(BRA), Frederic Makowiecki(FRA), +20 Laps
              </p>
              <p>
                LMGTE-Am Winner: #96 Aston Martin Racing, Aston Martin Vantage
                GTE, Jamie Campbell-Walter(GBR), Stuart Hall(GBR), +22 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">Oak Tree Grand Prix at VIR</p>
              <p>Virginia International Raceway, Alton, Virginia</p>
              <p>Date: 05.10.2013</p>
              <p>Series: ALMS</p>
              <p>Race Format: 2 Hours 45 minutes</p>
              <p>Classes: P1, P2, PC, GT, GTC</p>
              <p>Circuit Length: 5.248 km</p>
              <p>Laps Completed: 84</p>
              <p>Distance Covered: 440.832 km</p>
              <p>Number of cars entered: 32 (3 P1, 4 P2, 6 PC, 11 GT, 8 GTC)</p>
              <p>Number of cars finished: 27 (2 P1, 3 P2, 6 PC, 9 GT, 7 GTC)</p>
              <p>
                Pole Position: #16 Dyson Racing Team, Lola B12/60 - Mazda, Guy
                Smith(GBR), Johnny Mowlem(GBR), 1.35,965
              </p>
              <p>
                Overall Winner: #6 Muscle Milk Pickett Racing, HPD ARX-03c,
                Lucas Luhr(DEU), Klaus Graf(DEU), 2:46.11,675
              </p>
              <p>
                P2 Winner: #551 Level 5 Motorsports, HPD ARX-03b, Ryan
                Briscoe(AUS), Scott Tucker(USA), +1 Lap
              </p>
              <p>
                PC Winner: #8 BAR1 Motorsports, Oreca FLM09 - Chevrolet, Kyle
                Marcelli(CAN), Chris Cumming(CAN), +3 Laps
              </p>
              <p>
                GT Winner: #62 Risi Competizione, Ferrari 458 Italia GT2,
                Olivier Beretta(MCO), Matteo Malucelli(ITA), +4 Laps
              </p>
              <p>
                GTC Winner: #66 TRG, Porsche 997 GT3 Cup, Damien Faulkner(IRE),
                Ben Keating(USA), +9 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">16th Annual Petit Le Mans</p>
              <p>Road Atlanta, Braselton, Georgia</p>
              <p>Date: 19.10.2013</p>
              <p>Series: ALMS</p>
              <p>Race Format: 1000 Miles or 10 Hours</p>
              <p>Classes: P1, P2, PC, GT, GTC</p>
              <p>Circuit Length: 4.088 km</p>
              <p>Laps Completed: 394</p>
              <p>Distance Covered: 1610.672 km</p>
              <p>Number of cars entered: 34 (4 P1, 4 P2, 7 PC, 11 GT, 8 GTC)</p>
              <p>
                Number of cars finished: 26 (1 P1, 4 P2, 5 PC, 10 GT, 6 GTC)
              </p>
              <p>
                Pole Position: #12 Rebellion Racing, Lola B12/60 - Toyota, Neel
                Jani(CHE), Nick Heidfeld(DEU), Nicolas Prost(FRA), 1.09,254
              </p>
              <p>
                Overall Winner: #12 Rebellion Racing, Lola B12/60 - Toyota, Neel
                Jani(CHE), Nick Heidfeld(DEU), Nicolas Prost(FRA), 9:37.05,851
              </p>
              <p>
                P2 Winner: #551 Level 5 Motorsports, HPD ARX-03b, Marino
                Franchitti(GBR), Ryan Briscoe(AUS), Scott Tucker(USA), +6 Laps
              </p>
              <p>
                PC Winner: #8 BAR1 Motorsports, Oreca FLM09 - Chevrolet, Stefan
                Johansson(SWE), Kyle Marcelli(CAN), Chris Cumming(CAN), +14 Laps
              </p>
              <p>
                GT Winner: #17 Team Falken Tire, Porsche 997 GT3-RSR, Wolf
                Henzler(DEU), Bryan Sellers(USA), Nick Tandy(GBR), +19 Laps
              </p>
              <p>
                GTC Winner: #45 Flying Lizard Motorsports, Porsche 997 GT3 Cup,
                Spencer Pumpelly(USA), Madison Snow(USA), Nelson Canache
                Jr(VEN), +37 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">6 Hours of Fuji</p>
              <p>Fuji International Speedway, Oyama, Japan</p>
              <p>Date: 20.10.2013</p>
              <p>Series: WEC</p>
              <p>Race Format: 6 Hours</p>
              <p>Classes: LMP1, LMP2, LMGTE-Pro, LMGTE-Am</p>
              <p>Circuit Length: 4.563 km</p>
              <p>Laps Completed: 16</p>
              <p>Distance Covered: 73.008 km</p>
              <p>
                Number of cars entered: 29 (5 LMP1, 10 LMP2, 6 LMGTE-Pro, 8
                LMGTE-Am)
              </p>
              <p>
                Number of cars finished: 29 (5 LMP1, 10 LMP2, 6 LMGTE-Pro, 8
                LMGTE-Am)
              </p>
              <p>
                Pole Position: #1 Audi Sport Team Joest, Audi R18 E-Tron
                Quattro, Andre Lotterer(DEU), Benoit Treluyer(FRA), Marcel
                Fässler(CHE), 1.26,577
              </p>
              <p>
                Overall Winner: #7 Toyota Racing, Toyota TS030 Hybrid, Alexander
                Wurz(AUT), Nicolas Lapierre(FRA), Kazuki Nakajima(JAP),
                2:56.05,785
              </p>
              <p>
                LMP2 Winner: #35 OAK Racing, OAK Morgan - Nissan, Bertrand
                Baguette(BEL), Martin Plowman(GBR), Ricardo Gonzalez(MEX),
                +6,131
              </p>
              <p>
                LMGTE-Pro Winner: #97 Aston Martin Racing, Aston Martin Vantage
                GTE, Darren Turner(GBR), Stefan Mücke(DEU), Frederic
                Makowiecki(FRA), +38,900
              </p>
              <p>
                LMGTE-Am Winner: #95 Aston Martin Racing, Aston Martin Vantage
                GTE, Bruno Senna(BRA), Christoffer Nygaard(DEN), Kristian
                Poulsen(DEN), +57,668
              </p>
            </li>
            <li>
              <p className="font-bold">6 Hours of Shanghai</p>
              <p>Shanghai International Circuit, Shanghai, China</p>
              <p>Date: 09.11.2013</p>
              <p>Series: WEC</p>
              <p>Race Format: 6 Hours</p>
              <p>Classes: LMP1, LMP2, LMGTE-Pro, LMGTE-Am</p>
              <p>Circuit Length: 5.451 km</p>
              <p>Laps Completed: 190</p>
              <p>Distance Covered: 1035.690 km</p>
              <p>
                Number of cars entered: 28 (5 LMP1, 9 LMP2, 6 LMGTE-Pro, 8
                LMGTE-Am)
              </p>
              <p>
                Number of cars finished: 23 (4 LMP1, 7 LMP2, 6 LMGTE-Pro, 6
                LMGTE-Am)
              </p>
              <p>
                Pole Position: #7 Toyota Racing, Toyota TS030 Hybrid, Alexander
                Wurz(AUT), Nicolas Lapierre(FRA), 1.48,013
              </p>
              <p>
                Overall Winner: #1 Audi Sport Team Joest, Audi R18 E-Tron
                Quattro, Andre Lotterer(DEU), Benoit Treluyer(FRA), Marcel
                Fässler(CHE), 6:01.33,343
              </p>
              <p>
                LMP2 Winner: #26 G-Drive Racing, Oreca 03 - Nissan, Mike
                Conway(GBR), John Martin(AUS), Roman Rusinov(RUS), +13 Laps
              </p>
              <p>
                LMGTE-Pro Winner: #97 Aston Martin Racing, Aston Martin Vantage
                GTE, Darren Turner(GBR), Stefan Mücke(DEU), +21 Laps
              </p>
              <p>
                LMGTE-Am Winner: #81 8 Star Motorsports, Ferrari 458 Italia GT2,
                Davide Rigon(ITA), Rui Aguas(POR), Vincente Potoliccio(VEN), +24
                Laps
              </p>
            </li>
            <li>
              <p className="font-bold">6 Hours of Bahrain</p>
              <p>Bahrain International Circuit, Sakhir, Bahrain</p>
              <p>Date: 30.11.2013</p>
              <p>Series: WEC</p>
              <p>Race Format: 6 Hours</p>
              <p>Classes: LMP1, LMP2, LMGTE-Pro, LMGTE-Am</p>
              <p>Circuit Length: 5.412 km</p>
              <p>Laps Completed: 199</p>
              <p>Distance Covered: 1076.988 km</p>
              <p>
                Number of cars entered: 28 (5 LMP1, 9 LMP2, 6 LMGTE-Pro, 8
                LMGTE-Am)
              </p>
              <p>
                Number of cars finished: 19 (2 LMP1, 7 LMP2, 4 LMGTE-Pro, 6
                LMGTE-Am)
              </p>
              <p>
                Pole Position: #7 Toyota Racing, Toyota TS030 Hybrid, Alexander
                Wurz(AUT), Nicolas Lapierre(FRA), Kazuki Nakajima(JAP), 1.42,449
              </p>
              <p>
                Overall Winner: #8 Toyota Racing, Toyota TS030 Hybrid, Sebastien
                Buemi(CHE), Stephane Sarrazin(FRA), Anthony Davidson(GBR),
                6:01.15,303
              </p>
              <p>
                LMP2 Winner: #26 G-Drive Racing, Oreca 03 - Nissan, Mike
                Conway(GBR), John Martin(AUS), Roman Rusinov(RUS), +15 Laps
              </p>
              <p>
                LMGTE-Pro Winner: #51 AF Corse, Ferrari 458 Italia GT2,
                Gianmaria Bruni(ITA), Toni Vilander(FIN), +24 Laps
              </p>
              <p>
                LMGTE-Am Winner: #95 Aston Martin Racing, Aston Martin Vantage
                GTE, Nicki Thiim(DEN), Christoffer Nygaard(DEN), Kristian
                Poulsen(DEN), +26 Laps
              </p>
            </li>
          </ol>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h2>Season Totals</h2>
          <div>
            <p>Number of Races: 18</p>
            <p>Total Distance Covered: 18330.316 km</p>
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
