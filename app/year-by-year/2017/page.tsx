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
