import Image from "next/image";

export default function OneFive() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full flex-col items-center justify-start lg:py-12 lg:px-16 bg-white gap-8 py-4 px-6">
        <h1>2015 Season</h1>
        <div className="flex flex-col gap-2">
          <h2>Series and Regulation News</h2>
          <ul>
            <li>
              With the LMP1-L class continuing to suffer with a lack of entries,
              for 2015 the{" "}
              <a
                href="https://www.dailysportscar.com/2015/01/07/whats-new-in-2015-part-five-major-changes-in-major-championships.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                LMP1 class was once again merged
              </a>{" "}
              into a single class.
            </li>
            <li>
              The WEC presented an{" "}
              <a
                href="https://www.dailysportscar.com/2014/10/10/2015-fia-world-endurance-championship-calendar-published-nurburgring-added-brazil-dropped.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                updated calendar for 2015
              </a>{" "}
              with Nurburgring joining the calendar, replacing Interlagos which
              dropped off due to planned construction work.
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2>Manufacturer News</h2>
          <ul>
            <li>
              <a
                href="https://www.dailysportscar.com/2014/05/23/nissan-gt-r-lm-nismo-lmp1-targets-2015-le-mans-and-wec-wins.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nissan announced their LMP1 program
              </a>{" "}
              at Le Mans 2014. The{" "}
              <a
                href="https://www.dailysportscar.com/2015/02/02/nissan-reveals-le-mans-challenger-during-super-bowl.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nissan GT-R LM Nismo was revealed
              </a>{" "}
              with a{" "}
              <a
                href="https://www.dailysportscar.com/2015/02/02/the-nissan-gt-r-lm-nismo-tech-spec-ben-bowlby-qa.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                revolutionary front-engine FWD layout
              </a>{" "}
              and a flywheel-based hybrid system. The team was set to run 2 cars
              for the full season and 3 cars for Le Mans, however issues during
              testing forced the team to{" "}
              <a
                href="https://www.dailysportscar.com/2015/03/17/nissan-delay-start-to-wec-lmp1-campaign-gt-r-lm-to-debut-at-le-mans.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                abandon the start of the season
              </a>
              , instead aiming for a Le Mans debut.
            </li>
            <li>
              After a promising fiest season Porsche rolled out a{" "}
              <a
                href="https://www.dailysportscar.com/2015/03/26/porsches-2015-919-hybrid-launch-details.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                heavily updated 919 Hybrid
              </a>{" "}
              for 2015. The car featured updated aero and updated hybrid system
              to move the car to the top 8MJ category. The team returned for an
              unchanged lineup of 2 cars for the full season, as well as adding
              a{" "}
              <a
                href="https://www.dailysportscar.com/2014/11/24/porsche-confirm-third-919-hybrid-for-2015-le-mans.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                3rd car for Spa and Le Mans
              </a>
              .
            </li>
            <li>
              Audi revealed a{" "}
              <a
                href="https://www.dailysportscar.com/2015/03/19/behind-closed-doors-at-audi-sports-neuberg-eyrie-and-unveiling-the-2015-r18.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                heavily updated R18 E-Tron Quattro
              </a>{" "}
              for 2015,{" "}
              <a
                href="https://www.dailysportscar.com/2015/03/19/introducing-the-2015-audi-r18-e-tron-quattro.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                featuring a new aero-package
              </a>{" "}
              and updates to maximise the engine and hybrid system. The team
              continued with 2 cars for the WEC season and 3 cars for Spa and Le
              Mans.
            </li>
            <li>
              Toyota returned for a second season with an{" "}
              <a
                href="https://www.dailysportscar.com/2015/03/26/53325.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                updated TS040 Hybrid
              </a>
              , focusing on aero updates, but keeping the same powertrain from
              2014. The team continued with 2 cars for the full season, but
              unlike the rest did not add a 3rd car for Le Mans.
            </li>
            <li>
              ByKolles{" "}
              <a
                href="https://www.dailysportscar.com/2015/01/22/bykolles-racing-announces-lmp1-entry-into-2015-fia-wec.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                announced their return to LMP1
              </a>
              , after splitting with Lotus going into 2015. The team{" "}
              <a
                href="https://www.dailysportscar.com/2015/03/10/bykolles-launch-new-look-confirm-trummer-liuzzi-kaffer.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                rebranded their 2014 car
              </a>{" "}
              for Silverstone, before revealing a{" "}
              <a
                href="https://www.dailysportscar.com/2015/05/01/bykolles-with-new-look-clm.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                heavily updated CLM P1/01
              </a>{" "}
              for Spa.
            </li>
            <li>
              Oak Racing continued work on an LMP1-L car,{" "}
              <a
                href="https://www.dailysportscar.com/2014/10/14/fuji-notes-2-lmp-privateers-present-and-future-first-wec-win-for-ligier.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                still looking for a partner
              </a>{" "}
              to provide resources. Ahead of 2015 the team set a goal to find a
              partner in time to set up a{" "}
              <a
                href="https://www.dailysportscar.com/2014/11/29/oak-racing-lmp1-plans-progress-2016-targeted.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                program for 2016
              </a>
              .
            </li>
            <li>
              With Perrinn unable to put a program together for 2014 and
              deciding to go open source in order to find a backer, late in 2014
              the team agreed a deal with{" "}
              <a
                href="https://www.dailysportscar.com/2014/10/20/brazil-lmp1-team-back-perrinn-crowdfunding-effort.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                a Brazillian team for a Le Mans LMP1 effort
              </a>
              , initially aiming for a 2016 debut.
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
                    <strong>Audi Sport Team Joest</strong>
                  </td>
                  <td rowSpan={9}>Audi R18 E-Tron Quattro</td>
                  <td rowSpan={3}>7</td>
                  <td>Andre Lotterer(DEU)</td>
                  <td>
                    Silverstone, Spa, Le Mans, Nurburgring, COTA, Fuji,
                    Shanghai, Bahrain
                  </td>
                </tr>
                <tr>
                  <td>Benoit Treluyer(FRA)</td>
                  <td>
                    Silverstone, Spa, Le Mans, Nurburgring, COTA, Fuji,
                    Shanghai, Bahrain
                  </td>
                </tr>
                <tr>
                  <td>Marcel Fässler(CHE)</td>
                  <td>
                    Silverstone, Spa, Le Mans, Nurburgring, COTA, Fuji,
                    Shanghai, Bahrain
                  </td>
                </tr>
                <tr>
                  <td rowSpan={3}>8</td>
                  <td>Loïc Duval(FRA)</td>
                  <td>
                    Silverstone, Spa, Le Mans, Nurburgring, COTA, Fuji,
                    Shanghai, Bahrain
                  </td>
                </tr>
                <tr>
                  <td>Lucas di Grassi(BRA)</td>
                  <td>
                    Silverstone, Spa, Le Mans, Nurburgring, COTA, Fuji,
                    Shanghai, Bahrain
                  </td>
                </tr>
                <tr>
                  <td>Oliver Jarvis(GBR)</td>
                  <td>
                    Silverstone, Spa, Le Mans, Nurburgring, COTA, Fuji,
                    Shanghai, Bahrain
                  </td>
                </tr>
                <tr>
                  <td rowSpan={3}>9</td>
                  <td>Marco Bonanomi(ITA)</td>
                  <td>Spa, Le Mans</td>
                </tr>
                <tr>
                  <td>Filipe Albuquerque(POR)</td>
                  <td>Spa, Le Mans</td>
                </tr>
                <tr>
                  <td>Rene Rast(DEU)</td>
                  <td>Spa, Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={6}>
                    <strong>Toyota Racing</strong>
                  </td>
                  <td rowSpan={6}>Toyota TS040 Hybrid</td>
                  <td rowSpan={3}>1</td>
                  <td>Sebastien Buemi(CHE)</td>
                  <td>
                    Silverstone, Spa, Le Mans, Nurburgring, COTA, Fuji,
                    Shanghai, Bahrain
                  </td>
                </tr>
                <tr>
                  <td>Anthony Davidson(GBR)</td>
                  <td>
                    Silverstone, Spa, Le Mans, Nurburgring, COTA, Fuji,
                    Shanghai, Bahrain
                  </td>
                </tr>
                <tr>
                  <td>Kazuki Nakajima(JAP)</td>
                  <td>
                    Silverstone, <em>Spa</em>, Le Mans, Nurburgring, COTA, Fuji,
                    Shanghai, Bahrain
                  </td>
                </tr>
                <tr>
                  <td rowSpan={3}>2</td>
                  <td>Alexander Wurz(AUT)</td>
                  <td>
                    Silverstone, Spa, Le Mans, Nurburgring, COTA, Fuji,
                    Shanghai, Bahrain
                  </td>
                </tr>
                <tr>
                  <td>Stephane Sarrazin(FRA)</td>
                  <td>
                    Silverstone, Spa, Le Mans, Nurburgring, COTA, Fuji,
                    Shanghai, Bahrain
                  </td>
                </tr>
                <tr>
                  <td>Mike Conway(GBR)</td>
                  <td>
                    Silverstone, Spa, Le Mans, Nurburgring, COTA, Fuji,
                    Shanghai, Bahrain
                  </td>
                </tr>
                <tr>
                  <td rowSpan={9}>
                    <strong>Porsche Team</strong>
                  </td>
                  <td rowSpan={9}>Porsche 919 Hybrid</td>
                  <td rowSpan={3}>17</td>
                  <td>Timo Bernhard(DEU)</td>
                  <td>
                    Silverstone, Spa, Le Mans, Nurburgring, COTA, Fuji,
                    Shanghai, Bahrain
                  </td>
                </tr>
                <tr>
                  <td>Brendon Hartley(NZE)</td>
                  <td>
                    Silverstone, Spa, Le Mans, Nurburgring, COTA, Fuji,
                    Shanghai, Bahrain
                  </td>
                </tr>
                <tr>
                  <td>Mark Webber(AUS)</td>
                  <td>
                    Silverstone, Spa, Le Mans, Nurburgring, COTA, Fuji,
                    Shanghai, Bahrain
                  </td>
                </tr>
                <tr>
                  <td rowSpan={3}>18</td>
                  <td>Marc Lieb(DEU)</td>
                  <td>
                    Silverstone, Spa, Le Mans, Nurburgring, COTA, Fuji,
                    Shanghai, Bahrain
                  </td>
                </tr>
                <tr>
                  <td>Romain Dumas(FRA)</td>
                  <td>
                    Silverstone, Spa, Le Mans, Nurburgring, COTA, Fuji,
                    Shanghai, Bahrain
                  </td>
                </tr>
                <tr>
                  <td>Neel Jani(CHE)</td>
                  <td>
                    Silverstone, Spa, Le Mans, Nurburgring, COTA, Fuji,
                    Shanghai, Bahrain
                  </td>
                </tr>
                <tr>
                  <td rowSpan={3}>19</td>
                  <td>Nico Hülkenberg(DEU)</td>
                  <td>Spa, Le Mans</td>
                </tr>
                <tr>
                  <td>Nick Tandy(GBR)</td>
                  <td>Spa, Le Mans</td>
                </tr>
                <tr>
                  <td>Earl Bamber(NZE)</td>
                  <td>Spa, Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={5}>
                    <strong>Team ByKolles</strong>
                  </td>
                  <td rowSpan={5}>CLM P1/01</td>
                  <td rowSpan={5}>4</td>
                  <td>Simon Trummer(CHE)</td>
                  <td>
                    Silverstone, Spa, Le Mans, Nurburgring, COTA, Fuji,
                    Shanghai, Bahrain
                  </td>
                </tr>
                <tr>
                  <td>Vitantonio Liuzzi(ITA)</td>
                  <td>Silverstone, Spa</td>
                </tr>
                <tr>
                  <td>Christian Klien(AUT)</td>
                  <td>Silverstone, Spa</td>
                </tr>
                <tr>
                  <td>Pierre Kaffer(DEU)</td>
                  <td>Le Mans, Nurburgring, COTA, Fuji, Shanghai, Bahrain</td>
                </tr>
                <tr>
                  <td>Tiago Monteiro(POR)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={9}>
                    <strong>Nissan Motorsports</strong>
                  </td>
                  <td rowSpan={9}>Nissan GT-R LM Nismo</td>
                  <td rowSpan={3}>23</td>
                  <td>Jann Mardenborough(GBR)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Max Chilton(GBR)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Olivier Pla(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={3}>22</td>
                  <td>Alex Buncombe(GBR)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Harry Tincknell(GBR)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Michael Krumm(DEU)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={3}>21</td>
                  <td>Tsugio Matsuda(JAP)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Lucas Ordoñez(ESP)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Mark Shulzhitskiy(RUS)</td>
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
              <p className="font-bold">6 Hours of Silverstone</p>
              <p>Silverstone Circuit, Silverstone, Great Britain</p>
              <p>Date: 12.04.2015</p>
              <p>Series: WEC</p>
              <p>Race Format: 6 Hours</p>
              <p>Classes: LMP1, LMP2, LMGTE-Pro, LMGTE-Am</p>
              <p>Circuit Length: 5.891 km</p>
              <p>Laps Completed: 201</p>
              <p>Distance Covered: 1184.091 km</p>
              <p>
                Number of cars entered: 29 (7 LMP1, 8 LMP2, 7 LMGTE-Pro, 7
                LMGTE-Am)
              </p>
              <p>
                Number of cars finished: 25 (5 LMP1, 6 LMP2, 7 LMGTE-Pro, 7
                LMGTE-Am)
              </p>
              <p>
                Pole Position: #17 Porsche Team, Porsche 919 Hybrid, Timo
                Bernhard(DEU), Brendon Hartley(NZE), Mark Webber(AUS), 1.39,721
              </p>
              <p>
                Overall Winner: #7 Audi Sport Team Joest, Audi R18 E-Tron
                Quattro, Andre Lotterer(DEU), Benoit Treluyer(FRA), Marcel
                Fässler(CHE), 6:00.30,876
              </p>
              <p>
                LMP2 Winner: #26 G-Drive Racing, Ligier JS P2 - Nissan, Sam
                Bird(GBR), Roman Rusinov(RUS), Julien Canal(FRA), +16 Laps
              </p>
              <p>
                LMGTE-Pro Winner: #51 AF Corse, Ferrari 458 Italia GT2,
                Gianmaria Bruni(ITA), Toni Vilander(FIN), +29 Laps
              </p>
              <p>
                LMGTE-Am Winner: #98 Aston Martin Racing, Aston Martin V8
                Vantage GTE, Pedro Lamy(POR), Mathias Lauda(AUT), Paul Dalla
                Lana(CAN), +33 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">WEC 6 Heures de Spa-Francorchamps</p>
              <p>Circuit de Spa-Francorchamps, Stavelot, Belgium</p>
              <p>Date: 02.05.2015</p>
              <p>Series: WEC</p>
              <p>Race Format: 6 Hours</p>
              <p>Classes: LMP1, LMP2, LMGTE-Pro, LMGTE-Am</p>
              <p>Circuit Length: 7.004 km</p>
              <p>Laps Completed: 176</p>
              <p>Distance Covered: 1232.704 km</p>
              <p>
                Number of cars entered: 34 (9 LMP1, 10 LMP2, 7 LMGTE-Pro, 8
                LMGTE-Am)
              </p>
              <p>
                Number of cars finished: 31 (8 LMP1, 10 LMP2, 7 LMGTE-Pro, 6
                LMGTE-Am)
              </p>
              <p>
                Pole Position: #17 Porsche Team, Porsche 919 Hybrid, Timo
                Bernhard(DEU), Brendon Hartley(NZE), Mark Webber(AUS), 1.54,767
              </p>
              <p>
                Overall Winner: #7 Audi Sport Team Joest, Audi R18 E-Tron
                Quattro, Andre Lotterer(DEU), Benoit Treluyer(FRA), Marcel
                Fässler(CHE), 6:01.08,896
              </p>
              <p>
                LMP2 Winner: #38 Jota Sport, Gibson 015S - Nissan, Harry
                Tincknell(GBR), Mitch Evans(NZE), Simon Dolan(GBR), +15 Laps
              </p>
              <p>
                LMGTE-Pro Winner: #99 Aston Martin Racing, Aston Martin V8
                Vantage GTE, Alex MacDowall(GBR), Richie Stanaway(NZE), Fernando
                Rees(BRA), +25 Laps
              </p>
              <p>
                LMGTE-Am Winner: #98 Aston Martin Racing, Aston Martin V8
                Vantage GTE, Pedro Lamy(POR), Mathias Lauda(AUT), Paul Dalla
                Lana(CAN), +28 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">
                83<sup>e</sup> 24 Heures du Mans
              </p>
              <p>Circuit de la Sarthe, Le Mans, France</p>
              <p>Date: 13-14.06.2015</p>
              <p>Series: WEC</p>
              <p>Race Format: 24 Hours</p>
              <p>Classes: LMP1, LMP2, LMGTE-Pro, LMGTE-Am</p>
              <p>Circuit Length: 13.629 km</p>
              <p>Laps Completed: 395</p>
              <p>Distance Covered: 5383.455 km</p>
              <p>
                Number of cars entered: 56 (14 LMP1, 19 LMP2, 9 LMGTE-Pro, 14
                LMGTE-Am)
              </p>
              <p>
                Number of cars finished: 37 (10 LMP1, 13 LMP2, 6 LMGTE-Pro, 8
                LMGTE-Am)
              </p>
              <p>
                Pole Position: #18 Porsche Team, Porsche 919 Hybrid, Marc
                Lieb(DEU), Romain Dumas(FRA), Neel Jani(CHE), 3.16,887
              </p>
              <p>
                Overall Winner: #19 Porsche Team, Porsche 919 Hybrid, Nico
                Hülkenberg(DEU), Nick Tandy(GBR), Earl Bamber(NZE), 24:00.42,784
              </p>
              <p>
                LMP2 Winner: #47 KCMG, Oreca 05 - Nissan, Nicolas Lapierre(FRA),
                Richard Bradley(GBR), Matthew Howson(GBR), +37 Laps
              </p>
              <p>
                LMGTE-Pro Winner: #64 Corvette Racing, Chevrolet Corvette C7.R,
                Oliver Gavin(GBR), Tommy Milner(USA), Jordan Taylor(USA), +58
                Laps
              </p>
              <p>
                LMGTE-Am Winner: #72 SMP Racing, Ferrari 458 Italia GT2, Andrea
                Bertolini(ITA), Viktor Shaytar(RUS), Aleksey Basov(RUS), +63
                Laps
              </p>
            </li>
            <li>
              <p className="font-bold">6 Hours of Nürburgring</p>
              <p>Nürburgring, Nürburg, Germany</p>
              <p>Date: 30.08.2015</p>
              <p>Series: WEC</p>
              <p>Race Format: 6 Hours</p>
              <p>Classes: LMP1, LMP2, LMGTE-Pro, LMGTE-Am</p>
              <p>Circuit Length: 5.137 km</p>
              <p>Laps Completed: 203</p>
              <p>Distance Covered: 1042.811 km</p>
              <p>
                Number of cars entered: 31 (9 LMP1, 8 LMP2, 7 LMGTE-Pro, 7
                LMGTE-Am)
              </p>
              <p>
                Number of cars finished: 30 (8 LMP1, 8 LMP2, 7 LMGTE-Pro, 7
                LMGTE-Am)
              </p>
              <p>
                Pole Position: #18 Porsche Team, Porsche 919 Hybrid, Marc
                Lieb(DEU), Romain Dumas(FRA), Neel Jani(CHE), 1.36,473
              </p>
              <p>
                Overall Winner: #17 Porsche Team, Porsche 919 Hybrid, Timo
                Bernhard(DEU), Brendon Hartley(NZE), Mark Webber(AUS),
                6:01.16,966
              </p>
              <p>
                LMP2 Winner: #47 KCMG, Oreca 05 - Nissan, Nick Tandy(GBR),
                Richard Bradley(GBR), Matthew Howson(GBR), +18 Laps
              </p>
              <p>
                LMGTE-Pro Winner: #91 Porsche Team Manthey, Porsche 911 RSR,
                Richard Lietz(AUT), Michael Christensen(DEN), +27 Laps
              </p>
              <p>
                LMGTE-Am Winner: #72 SMP Racing, Ferrari 458 Italia GT2, Andrea
                Bertolini(ITA), Viktor Shaytar(RUS), Aleksey Basov(RUS), +30
                Laps
              </p>
            </li>
            <li>
              <p className="font-bold">6 Hours of Circuit of the Americas</p>
              <p>Circuit of the Americas, Austin, Texas</p>
              <p>Date: 19.09.2015</p>
              <p>Series: WEC</p>
              <p>Race Format: 6 Hours</p>
              <p>Classes: LMP1, LMP2, LMGTE-Pro, LMGTE-Am</p>
              <p>Circuit Length: 5.513 km</p>
              <p>Laps Completed: 185</p>
              <p>Distance Covered: 1019.905 km</p>
              <p>
                Number of cars entered: 31 (9 LMP1, 8 LMP2, 7 LMGTE-Pro, 7
                LMGTE-Am)
              </p>
              <p>
                Number of cars finished: 29 (8 LMP1, 7 LMP2, 7 LMGTE-Pro, 7
                LMGTE-Am)
              </p>
              <p>
                Pole Position: #18 Porsche Team, Porsche 919 Hybrid, Marc
                Lieb(DEU), Romain Dumas(FRA), Neel Jani(CHE), 1.46,211
              </p>
              <p>
                Overall Winner: #17 Porsche Team, Porsche 919 Hybrid, Timo
                Bernhard(DEU), Brendon Hartley(NZE), Mark Webber(AUS),
                6:00.12,228
              </p>
              <p>
                LMP2 Winner: #26 G-Drive Racing, Ligier JS P2 - Nissan, Sam
                Bird(GBR), Roman Rusinov(RUS), Julien Canal(FRA), +15 Laps
              </p>
              <p>
                LMGTE-Pro Winner: #91 Porsche Team Manthey, Porsche 911 RSR,
                Richard Lietz(AUT), Michael Christensen(DEN), +23 Laps
              </p>
              <p>
                LMGTE-Am Winner: #72 SMP Racing, Ferrari 458 Italia GT2, Andrea
                Bertolini(ITA), Viktor Shaytar(RUS), Aleksey Basov(RUS), +26
                Laps
              </p>
            </li>
            <li>
              <p className="font-bold">6 Hours of Fuji</p>
              <p>Fuji International Speedway, Oyama, Japan</p>
              <p>Date: 11.10.2015</p>
              <p>Series: WEC</p>
              <p>Race Format: 6 Hours</p>
              <p>Classes: LMP1, LMP2, LMGTE-Pro, LMGTE-Am</p>
              <p>Circuit Length: 4.563 km</p>
              <p>Laps Completed: 216</p>
              <p>Distance Covered: 985.608 km</p>
              <p>
                Number of cars entered: 31 (9 LMP1, 8 LMP2, 7 LMGTE-Pro, 7
                LMGTE-Am)
              </p>
              <p>
                Number of cars finished: 30 (9 LMP1, 7 LMP2, 7 LMGTE-Pro, 7
                LMGTE-Am)
              </p>
              <p>
                Pole Position: #17 Porsche Team, Porsche 919 Hybrid, Timo
                Bernhard(DEU), Brendon Hartley(NZE), Mark Webber(AUS), 1.22,763
              </p>
              <p>
                Overall Winner: #17 Porsche Team, Porsche 919 Hybrid, Timo
                Bernhard(DEU), Brendon Hartley(NZE), Mark Webber(AUS),
                6:00.25,737
              </p>
              <p>
                LMP2 Winner: #26 G-Drive Racing, Ligier JS P2 - Nissan, Sam
                Bird(GBR), Roman Rusinov(RUS), Julien Canal(FRA), +18 Laps
              </p>
              <p>
                LMGTE-Pro Winner: #51 AF Corse, Ferrari 458 Italia GT2,
                Gianmaria Bruni(ITA), Toni Vilander(FIN), +23 Laps
              </p>
              <p>
                LMGTE-Am Winner: #77 Dempsey-Proton Racing, Porsche 911 RSR,
                Patrick Long(USA), Marco Seefried(DEU), Patrick Dempsey(USA),
                +29 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">6 Hours of Shanghai</p>
              <p>Shanghai International Circuit, Shanghai, China</p>
              <p>Date: 01.11.2015</p>
              <p>Series: WEC</p>
              <p>Race Format: 6 Hours</p>
              <p>Classes: LMP1, LMP2, LMGTE-Pro, LMGTE-Am</p>
              <p>Circuit Length: 5.451 km</p>
              <p>Laps Completed: 169</p>
              <p>Distance Covered: 921.219 km</p>
              <p>
                Number of cars entered: 31 (9 LMP1, 9 LMP2, 6 LMGTE-Pro, 7
                LMGTE-Am)
              </p>
              <p>
                Number of cars finished: 28 (8 LMP1, 7 LMP2, 6 LMGTE-Pro, 7
                LMGTE-Am)
              </p>
              <p>
                Pole Position: #17 Porsche Team, Porsche 919 Hybrid, Timo
                Bernhard(DEU), Brendon Hartley(NZE), Mark Webber(AUS), 1.42,719
              </p>
              <p>
                Overall Winner: #17 Porsche Team, Porsche 919 Hybrid, Timo
                Bernhard(DEU), Brendon Hartley(NZE), Mark Webber(AUS),
                6:00.07,725
              </p>
              <p>
                LMP2 Winner: #36 Signatech Alpine, Alpine A450b, Tom
                Dillmann(FRA), Paul-Loup Chatin(FRA), Nelson Panciatici(FRA),
                +15 Laps
              </p>
              <p>
                LMGTE-Pro Winner: #91 Porsche Team Manthey, Porsche 911 RSR,
                Richard Lietz(AUT), Michael Christensen(DEN), +18 Laps
              </p>
              <p>
                LMGTE-Am Winner: #83 AF Corse, Ferrari 458 Italia GT2, Emmanuel
                Collard(FRA), Rui Aguas(POR), Francois Perrodo(FRA), +23 Laps
              </p>
            </li>
            <li>
              <p className="font-bold">Bapco 6 Hours of Bahrain</p>
              <p>Bahrain International Circuit, Sakhir, Bahrain</p>
              <p>Date: 21.11.2015</p>
              <p>Series: WEC</p>
              <p>Race Format: 6 Hours</p>
              <p>Classes: LMP1, LMP2, LMGTE-Pro, LMGTE-Am</p>
              <p>Circuit Length: 5.412 km</p>
              <p>Laps Completed: 199</p>
              <p>Distance Covered: 1076.988 km</p>
              <p>
                Number of cars entered: 32 (9 LMP1, 9 LMP2, 7 LMGTE-Pro, 7
                LMGTE-Am)
              </p>
              <p>
                Number of cars finished: 32 (9 LMP1, 9 LMP2, 7 LMGTE-Pro, 7
                LMGTE-Am)
              </p>
              <p>
                Pole Position: #17 Porsche Team, Porsche 919 Hybrid, Timo
                Bernhard(DEU), Brendon Hartley(NZE), Mark Webber(AUS), 1.39,736
              </p>
              <p>
                Overall Winner: #18 Porsche Team, Porsche 919 Hybrid, Marc
                Lieb(DEU), Romain Dumas(FRA), Neel Jani(CHE), 6:00.52,843
              </p>
              <p>
                LMP2 Winner: #26 G-Drive Racing, Ligier JS P2 - Nissan, Sam
                Bird(GBR), Roman Rusinov(RUS), Julien Canal(FRA), +16 Laps
              </p>
              <p>
                LMGTE-Pro Winner: #92 Porsche Team Manthey, Porsche 911 RSR,
                Patrick Pilet(FRA), Frederic Makowiecki(FRA), +26 Laps
              </p>
              <p>
                LMGTE-Am Winner: #98 Aston Martin Racing, Aston Martin V8
                Vantage GTE, Pedro Lamy(POR), Mathias Lauda(AUT), Paul Dalla
                Lana(CAN), +29 Laps
              </p>
            </li>
          </ol>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h2>Season Totals</h2>
          <div>
            <p>Number of Races: 8</p>
            <p>Total Distance Covered: 12846.781 km</p>
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
