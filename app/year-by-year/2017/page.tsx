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
            </li>
            <li>
              <a
                href="https://www.dailysportscar.com/2016/08/05/rebellion-drops-to-one-car-for-rest-of-16-will-return-to-lmp1-in-17.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rebellion shifts resources to 2017 LMP1-L regs
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
            <li></li>
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
