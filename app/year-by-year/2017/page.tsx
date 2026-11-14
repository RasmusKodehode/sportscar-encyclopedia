import Image from "next/image";

export default function OneSeven() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full flex-col items-center justify-start lg:py-12 lg:px-16 bg-white gap-8 py-4 px-6">
        <h1>2017 Season</h1>
        <div className="flex flex-col gap-2 w-full">
          <h2>Series and Regulation News</h2>
          <ul>
            <li>
              <a
                href="https://www.dailysportscar.com/2016/03/25/imsa-dpis-at-le-mans-lmp2-lmp1-non-hybrid-or.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                IMSA DPi revealed - could they go to Le Mans?
              </a>
              <a
                href="https://www.dailysportscar.com/2016/06/18/dpi-conversion-talks-shift-to-p1-privateer-for-le-mans.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                DPi more likely to fit into LMP1-L but disagreements remain
              </a>
            </li>
            <li>
              <a
                href="https://www.dailysportscar.com/2016/06/01/wec-moving-closer-to-cota-exit-indy-under-consideration.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                FIA WEC could abandon COTA for Indy?
              </a>
            </li>
            <li>
              <a
                href="https://www.dailysportscar.com/2016/06/16/aco-outlines-the-future-of-prototype-racing.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                LMP1-H aero tweaked, LMP1-L updated for 2017
              </a>
              <a
                href="https://www.dailysportscar.com/2016/06/24/le-mans-dates-and-wec-lmp1-privateer-changes-approved-by-fia.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                LMP1-L changes approved
              </a>
            </li>
            <li>
              <a
                href="https://www.dailysportscar.com/2016/08/31/fia-wec-calendar-updates.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Speculation about COTA
              </a>
            </li>
            <li>
              <a
                href="https://www.dailysportscar.com/2016/09/22/2017-wec-calendar-revealed.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                2017 calendar revealed
              </a>
              <a
                href="https://www.dailysportscar.com/2016/09/28/2017-fia-wec-calendar-confirmed.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Calendar Confirmed
              </a>
            </li>
            <li>
              <a
                href="https://www.dailysportscar.com/2016/11/09/neveu-fillon-and-owen-jones-on-the-future-of-lmp1.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Changes must be considered to reduce cost of LMP1
              </a>
              <a
                href="https://www.dailysportscar.com/2016/11/20/lmp1-h-regulations-frozen-until-2020.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                LMP1-H regs frozen until the end of 2019
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h2>Manufacturer News</h2>
          <ul>
            <li>
              <a
                href="https://www.racecar-engineering.com/news/bmw-eyes-2017-lmp1-programme/"
                target="_blank"
                rel="noopener noreferrer"
              >
                BMW investigating LMP1 programme
              </a>
              <a
                href="https://www.dailysportscar.com/2015/07/25/no-lmp1-on-immediate-horizon-for-bmw-but-garage-56-a-possibility.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                , but decided against it
              </a>
              <a
                href="https://www.dailysportscar.com/2016/09/27/bmw-to-return-to-le-mans-in-2018.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                BMW enters LMGTE-Pro instead
              </a>
            </li>
            <li>
              <a
                href="https://www.dailysportscar.com/2015/07/10/strakka-announce-lmp1-project-for-2017-switch-to-gibson-for-remainder-of-2015.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Strakka announces LMP1 project for 2017
              </a>
              ,
              <a href="https://www.dailysportscar.com/2015/11/03/proposed-new-strakka-and-greaves-lmp1-privateer-programmes-hit-the-buffers.html">
                However the project was parked by November
              </a>
            </li>
            <li>
              <a
                href="https://www.dailysportscar.com/2015/11/26/smp-racing-and-the-br01-the-way-forward.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                BR Engineering could build a new LMP1 car following new LMP2
                regs
              </a>
            </li>
            <li>
              <a
                href="https://www.dailysportscar.com/2016/06/04/peugeot-lmp1-there-is-no-programme.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                No Peugeot return
              </a>
            </li>
            <li>
              <a
                href="https://www.dailysportscar.com/2016/06/10/choose-adess-considering-the-possibility-of-producing-an-lmp1-chassis.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Adess considering LMP1-L chassis
              </a>
            </li>
            <li>
              <a
                href="https://www.dailysportscar.com/2016/06/17/does-audi-driver-status-hint-at-2017-plan.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Maybe no 3rd Audi again for 2017
              </a>
              <a
                href="https://www.dailysportscar.com/2016/10/16/ullrich-avoids-audi-rumour-looks-to-first-fuji-win.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Roumors about Audi exit after 2017, but Dr. Ullrich remains
                optimistic
              </a>
              <a
                href="https://www.dailysportscar.com/2016/10/19/149683.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Roumuors about Audi exiting LMP1 after 2017
              </a>
              <a
                href="https://www.dailysportscar.com/2016/10/26/audi-to-end-lmp1-programme-at-end-of-2016-season.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Audi quits LMP1 after 2016
              </a>
            </li>
            <li>
              <a
                href="https://www.dailysportscar.com/2016/08/05/rebellion-drops-to-one-car-for-rest-of-16-will-return-to-lmp1-in-17.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rebellion shifts resources to 2017 LMP1-L regs
              </a>
              <a
                href="https://www.dailysportscar.com/2016/10/06/rebellion-switches-to-lmp2-for-2017.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Switches to LMP2 for 2017
              </a>
            </li>
            <li>
              <a
                href="https://www.dailysportscar.com/2016/08/08/renaultalpine-pondering-future-programmes.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Alpine still pondering LMP1
              </a>
              <a
                href="https://www.dailysportscar.com/2016/09/02/menezes-alpines-future-is-definitely-in-lmp2.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                LMP2 is still the focus
              </a>
              <a
                href="https://www.dailysportscar.com/2016/11/01/renault-sport-on-the-future-of-the-rs-01-why-renault-isnt-coming-to-lmp1.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                No Renault LMP1 project for the forseeable future
              </a>
            </li>
            <li>
              <a
                href="https://www.dailysportscar.com/2016/08/31/bykolles-set-to-return-to-lmp1-privateer-class-in-2017.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                ByKolles set to return with new car for 2017
              </a>
            </li>
            <li>
              <a
                href="https://www.dailysportscar.com/2016/10/15/vasselon-i-would-say-audi-will-be-there-in-2018.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Toyota planning big updates for 2017
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h2>The Teams</h2>
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th scope="col">Team</th>
                  <th scope="col">Car</th>
                  <th scope="col">Nr.</th>
                  <th scope="col">Drivers</th>
                  <th scope="col">Rd.</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h2>Calendar</h2>
          <ol className="flex flex-col gap-4">
            <li>
              <p className="font-bold">6 Hours of Silverstone</p>
              <p>Silverstone Circuit, Silverstone, Great Britain</p>
              <p>Date: 16.04.2017</p>
            </li>
            <li>
              <p className="font-bold">WEC 6 Hours of Spa-Francorchamps</p>
              <p>Circuit de Spa-Francorchamps, Stavelot, Belgium</p>
              <p>Date: 06.05.2017</p>
            </li>
            <li>
              <p className="font-bold">
                85<sup>e</sup> 24 Heures du Mans
              </p>
              <p>Circuit de la Sarthe, Le Mans, France</p>
              <p>Date: 17-18.06.2017</p>
            </li>
            <li>
              <p className="font-bold">6 Hours of Nürburgring</p>
              <p>Nürburgring, Nürburg, Germany</p>
              <p>Date: 16.07.2017</p>
            </li>
            <li>
              <p className="font-bold">6 Hours of Mexico</p>
              <p>Autodromo Hermanos Rodriguez, Mexico City, Mexico</p>
              <p>Date: 03.09.2017</p>
            </li>
            <li>
              <p className="font-bold">6 Hours of Circuit of the Americas</p>
              <p>Circuit of the Americas, Austin, Texas</p>
              <p>Date: 16.09.2017</p>
            </li>
            <li>
              <p className="font-bold">6 Hours of Fuji</p>
              <p>Fuji International Speedway, Oyama, Japan</p>
              <p>Date: 15.10.2017</p>
            </li>
            <li>
              <p className="font-bold">6 Hours of Shanghai</p>
              <p>Shanghai International Circuit, Shanghai, China</p>
              <p>Date: 05.11.2017</p>
            </li>
            <li>
              <p className="font-bold">6 Hours of Bahrain</p>
              <p>Bahrain International Circuit, Sakhir, Bahrain</p>
              <p>Date: 18.11.2017</p>
            </li>
          </ol>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h2>Season Totals</h2>
          <div>
            <p>Number of Races: </p>
            <p>Total Distance Covered: km</p>
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
