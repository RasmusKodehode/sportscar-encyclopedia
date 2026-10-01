import Image from "next/image";

export default function OneSix() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full flex-col items-center justify-start lg:py-12 lg:px-16 bg-white gap-8 py-4 px-6">
        <h1>2016 Season</h1>
        <div className="flex flex-col gap-2">
          <h2>Series and Regulation News</h2>
          <ul>
            <li></li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2>Manufacturer News</h2>
          <ul>
            <li></li>
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
            <li>
              <p className="font-bold">6 Hours of Silverstone</p>
              <p>Silverstone Circuit, Silverstone, Great Britain</p>
              <p>Date: 17.04.2016</p>
            </li>
            <li>
              <p className="font-bold">WEC 6 Heures de Spa-Francorchamps</p>
              <p>Circuit de Spa-Francorchamps, Stavelot, Belgium</p>
              <p>Date: 07.05.2016</p>
            </li>
            <li>
              <p className="font-bold">
                84<sup>e</sup> 24 Heures du Mans
              </p>
              <p>Circuit de la Sarthe, Le Mans, France</p>
              <p>Date: 18-19.06.2016</p>
            </li>
            <li>
              <p className="font-bold">6 Hours of Nürburgring</p>
              <p>Nürburgring, Nürburg, Germany</p>
              <p>Date: 24.07.2016</p>
            </li>
            <li>
              <p className="font-bold">6 Hours of Mexico</p>
              <p>Autodromo Hermanos Rodriguez, Mexico City, Mexico</p>
              <p>Date: 03.09.2016</p>
            </li>
            <li>
              <p className="font-bold">6 Hours of Circuit of the Americas</p>
              <p>Circuit of the Americas, Austin, Texas</p>
              <p>Date: 17.09.2016</p>
            </li>
            <li>
              <p className="font-bold">6 Hours of Fuji</p>
              <p>Fuji International Speedway, Oyama, Japan</p>
              <p>Date: 16.10.2016</p>
            </li>
            <li>
              <p className="font-bold">6 Hours of Shanghai</p>
              <p>Shanghai International Circuit, Shanghai, China</p>
              <p>Date: 06.11.2016</p>
            </li>
            <li>
              <p className="font-bold">6 Hours of Bahrain</p>
              <p>Bahrain International Circuit, Sakhir, Bahrain</p>
              <p>Date: 19.11.2016</p>
            </li>
          </ol>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h2>Season Totals</h2>
          <div>
            <p>Number of Races: </p>
            <p>Total Distance Covered:  km</p>
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
