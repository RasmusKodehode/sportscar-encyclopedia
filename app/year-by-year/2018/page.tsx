import Image from "next/image";

export default function OneEight() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full flex-col items-center justify-start lg:py-12 lg:px-16 bg-white gap-8 py-4 px-6">
        <h1>2018 Season</h1>
        <div className="flex flex-col gap-2 w-full">
          <h2>Series and Regulation News</h2>
          <ul></ul>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h2>Manufacturer News</h2>
          <ul>
            <li>
              <a
                href="https://www.dailysportscar.com/2016/11/17/br-engineering-dallara-and-art-grand-prix-combine-for-new-for-2018-br1-lmp1-l-programme.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                BR, Dallara, ART to build new LMP1-L car for 2018
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
          <ol className="flex flex-col gap-4"></ol>
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
