import Image from "next/image";

export default function Circuits() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full flex-col items-center justify-start lg:py-12 lg:px-16 bg-white gap-8 py-4 px-6">
        <h1>The Circuits</h1>
        <div className="flex flex-col gap-2">
          <h2>Overview</h2>
          <p>
            This is a list of all circuits to have featured on the calendar for
            sportscar racing, both ALMS and its short lived sister series,
            LMES/LMS, WEC and other non-championship races. Circuits are also
            listed where events were planned but not run (noted under "Races
            Cancelled"). The lap record is the fastest lap ever recorded by a
            sportscar in an official session.
          </p>
          <p>
            The circuits included are all the locations and layouts to have
            either hosted or were supposed to host races in the series covered.
            Listed is the name or reference to the layout and circuit length, as
            well as the number of races ran there, and the number of times a
            race there was cancelled. The lap record listed is the fastest lap
            at any point in the weekend (usually from qualifying). In the era of
            average times in qualifying the lap record is the single fastest
            lap.
          </p>
        </div>
        <div className="flex flex-col gap-8 w-full">
          <h2>List of Circuits and Layouts</h2>
          <div className="flex flex-col gap-1">
            <h3>Sebring International Raceway, Sebring, Florida</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p>Layout: Grand Prix</p>
                <p>Circuit Length: 6.019 km</p>
                <p>Races Hosted: 15 (1999-2013)</p>
                <p>Races Cancelled: 0</p>
                <p>Lap Record: 1.43,195 (2008)</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3>Road Atlanta, Braselton, Georgia</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p>Layout: Grand Prix</p>
                <p>Circuit Length: 4.088 km</p>
                <p>Races Hosted: 18 (1999-2013)</p>
                <p>Races Cancelled: 0</p>
                <p>Lap Record: 1.06,242 (2008)</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3>Circuit de la Sarthe, Le Mans, France</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p>Layout: Circuit des 24 Heures (1999-2001)</p>
                <p>Circuit Length: 13.605 km</p>
                <p>Races Hosted: 3 (1999-2001)</p>
                <p>Races Cancelled: 0</p>
                <p>Lap Record: 3.29,930 (1999)</p>
              </li>
              <li>
                <p>Layout: Circuit des 24 Heures (2002-2005)</p>
                <p>Circuit Length: 13.650 km</p>
                <p>Races Hosted: 4 (2002-2005)</p>
                <p>Races Cancelled: 0</p>
                <p>Lap Record: 3.29,905 (2002)</p>
              </li>
              <li>
                <p>Layout: Bugatti Circuit (2002-2005)</p>
                <p>Circuit Length: 4.180 km</p>
                <p>Races Hosted: 1 (2003)</p>
                <p>Races Cancelled: 0</p>
                <p>Lap Record: 1.27,775 (2003)</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3>Mosport Park, Bowmanville, Ontario</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p>Layout: Grand Prix</p>
                <p>Circuit Length: 3.957 km</p>
                <p>Races Hosted: 15 (1999-2013)</p>
                <p>Races Cancelled: 0</p>
                <p>Lap Record: 1.04,094 (2008)</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3>Sonoma Raceway, Sonoma, California</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p>Layout: Sports Car Course</p>
                <p>Circuit Length: 4.056 km</p>
                <p>Races Hosted: 3 (1999-2001)</p>
                <p>Races Cancelled: 0</p>
                <p>Lap Record: 1.20,683 (2000)</p>
              </li>
              <li>
                <p>Layout: Extended Sports Car Course</p>
                <p>Circuit Length: 4.072 km</p>
                <p>Races Hosted: 4 (2002-2005)</p>
                <p>Races Cancelled: 0</p>
                <p>Lap Record: 1.21,688 (2005)</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3>Portland International Raceway, Portland, Oregon</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p>Layout: Grand Prix</p>
                <p>Circuit Length: 3.129 km</p>
                <p>Races Hosted: 4 (1999-2001, 2004)</p>
                <p>Races Cancelled: 0</p>
                <p>Lap Record: 1.04,121 (2001)</p>
              </li>
              <li>
                <p>Layout: Grand Prix w/ paved chicane runoff</p>
                <p>Circuit Length: 3.161 km</p>
                <p>Races Hosted: 2 (2005-2006)</p>
                <p>Races Cancelled: 0</p>
                <p>Lap Record: 1.02,712 (2005)</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3>Laguna Seca Raceway, Monterey, California</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p>Layout: Grand Prix</p>
                <p>Circuit Length: 3.602 km</p>
                <p>Races Hosted: 15 (1999-2013)</p>
                <p>Races Cancelled: 0</p>
                <p>Lap Record: 1.10,103 (2008)</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3>Fuji International Speedway, Oyama, Japan</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p>Layout: Grand Prix 90s</p>
                <p>Circuit Length: 4.469 km</p>
                <p>Races Hosted: 1 (1999)</p>
                <p>Races Cancelled: 1 (2000)</p>
                <p>Lap Record: 1.16,349 (1999)</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3>Las Vegas Motor Speedway, Las Vegas, Nevada</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p>Layout: Road Course</p>
                <p>Circuit Length: 3.621 km</p>
                <p>Races Hosted: 2 (1999-2000)</p>
                <p>Races Cancelled: 0</p>
                <p>Lap Record: 1.06,628 (2000)</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3>San Diego Street Circuit, San Diego, California</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p>Layout: 1999/2000 ALMS version</p>
                <p>Circuit Length: 2.462 km</p>
                <p>Races Hosted: 0</p>
                <p>Races Cancelled: 1 (2000)</p>
                <p>Lap Record: N/A</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3>Charlotte Motor Speedway, Concord, North Carolina</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p>Layout: Road Course</p>
                <p>Circuit Length: 3.621 km</p>
                <p>Races Hosted: 1 (2000)</p>
                <p>Races Cancelled: 1 (2001)</p>
                <p>Lap Record: 1.04,096 (2000)</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3>Silverstone Circuit, Silverstone, Great Britain</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p>Layout: Bridge Grand Prix Circuit</p>
                <p>Circuit Length: 5.141 km</p>
                <p>Races Hosted: 6 (2000, 2004-2005, 2007-2009)</p>
                <p>Races Cancelled: 0</p>
                <p>Lap Record: 1.30,359 (2008)</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3>Nürburgring, Nürburg, Germany</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p>Layout: Original Grand Prix Strecke</p>
                <p>Circuit Length: 4.556 km</p>
                <p>Races Hosted: 1 (2000)</p>
                <p>Races Cancelled: 0</p>
                <p>Lap Record: 1.27,938 (2000)</p>
              </li>
              <li>
                <p>Layout: Grand Prix Strecke w/o F1 chicane</p>
                <p>Circuit Length: 5.137 km</p>
                <p>Races Hosted: 7 (2004-2009, 2015)</p>
                <p>Races Cancelled: 0</p>
                <p>Lap Record: 1.36,192 (2015)</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3>Texas Motor Speedway, Fort Worth, Texas</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p>Layout: Road Course</p>
                <p>Circuit Length: 3.740 km</p>
                <p>Races Hosted: 2 (2000-2001)</p>
                <p>Races Cancelled: 0</p>
                <p>Lap Record: 1.12,716 (2000)</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3>Adelaide Street Circuit, Adelaide, Australia</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p>Layout: F1 Grand Prix Circuit</p>
                <p>Circuit Length: 3.780 km</p>
                <p>Races Hosted: 1 (2000)</p>
                <p>Races Cancelled: 1 (2001)</p>
                <p>Lap Record: 1.23,804 (2000)</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3>Donington Park, Leicestershire, Great Britain</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p>Layout: Grand Prix</p>
                <p>Circuit Length: 4.020 km</p>
                <p>Races Hosted: 2 (2001, 2006)</p>
                <p>Races Cancelled: 0</p>
                <p>Lap Record: 1.20,756 (2006)</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3>
              Circuito Permanente del Jarama, San Sebastian de los Reyes, Spain
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p>Layout: Grand Prix</p>
                <p>Circuit Length: 3.850 km</p>
                <p>Races Hosted: 2 (2001, 2006)</p>
                <p>Races Cancelled: 0</p>
                <p>Lap Record: 1.22,285 (2001)</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3>Autodromo Fernanda Pires da Silva, Estoril, Portugal</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p>Layout: Grand Prix</p>
                <p>Circuit Length: 4.182 km</p>
                <p>Races Hosted: 2 (2001, 2011)</p>
                <p>Races Cancelled: 0</p>
                <p>Lap Record: 1.28,876 (2001)</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3>Salzburgring, Plainfeld, Austria</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p>Layout: Grand Prix</p>
                <p>Circuit Length: 4.241 km</p>
                <p>Races Hosted: 0</p>
                <p>Races Cancelled: 1 (2001)</p>
                <p>Lap Record: N/A</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3>Autodrom Most, Most, Czech Republic</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p>Layout: Grand Prix</p>
                <p>Circuit Length: 4.149 km</p>
                <p>Races Hosted: 1 (2001)</p>
                <p>Races Cancelled: 0</p>
                <p>Lap Record: 1.18,110 (2001)</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3>Circuit Mont-Tremblant, Mont-Tremblant, Quebec</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p>Layout: Grand Prix</p>
                <p>Circuit Length: 4.260 km</p>
                <p>Races Hosted: 0</p>
                <p>Races Cancelled: 1 (2001)</p>
                <p>Lap Record: N/A</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3>Mid-Ohio Sports Car Course, Lexington, Ohio</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p>Layout: Grand Prix</p>
                <p>Circuit Length: 3.634 km</p>
                <p>Races Hosted: 11 (2001-2002, 2004-2012)</p>
                <p>Races Cancelled: 0</p>
                <p>Lap Record: 1.07,969 (2008)</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3>
              Autodromo di Vallelunga Piero Taruffi, Campagnano di Roma, Italy
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p>Layout: Grand Prix Short</p>
                <p>Circuit Length: 3.222 km</p>
                <p>Races Hosted: 1 (2001)</p>
                <p>Races Cancelled: 0</p>
                <p>Lap Record: 1.06,987 (2001)</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3>Sepang International Circuit, Kuala Lumpur, Malaysia</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p>Layout: Grand Prix</p>
                <p>Circuit Length: 5.543 km</p>
                <p>Races Hosted: 0</p>
                <p>Races Cancelled: 2 (2001-2002)</p>
                <p>Lap Record: N/A</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3>Road America, Elkhart Lake, Wisconsin</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p>Layout: Grand Prix</p>
                <p>Circuit Length: 6.477 km</p>
                <p>Races Hosted: 12 (2002-2013)</p>
                <p>Races Cancelled: 0</p>
                <p>Lap Record: 1.46,935 (2008)</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3>RFK Memorial Stadium Circuit, Washington D.C.</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p>Layout: Grand Prix</p>
                <p>Circuit Length: 2.673 km</p>
                <p>Races Hosted: 1 (2002)</p>
                <p>Races Cancelled: 1 (2003)</p>
                <p>Lap Record: 1.03,287 (2002)</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3>Circuit Trois-Rivieres, Trois-Rivieres, Quebec</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p>Layout: Grand Prix</p>
                <p>Circuit Length: 2.448 km</p>
                <p>Races Hosted: 2 (2002-2003)</p>
                <p>Races Cancelled: 0</p>
                <p>Lap Record: 0.57,740 (2003)</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3>Bayfront Park Street Circuit, Miami, Florida</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p>Layout: 2002-Version</p>
                <p>Circuit Length: 2.232 km</p>
                <p>Races Hosted: 1 (2002)</p>
                <p>Races Cancelled: 0</p>
                <p>Lap Record: 1.03,873 (2002)</p>
              </li>
              <li>
                <p>Layout: 2003-Version</p>
                <p>Circuit Length: 1.851 km</p>
                <p>Races Hosted: 1 (2003)</p>
                <p>Races Cancelled: 0</p>
                <p>Lap Record: 0.47,848 (2003)</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3>Autodromo Hermanos Rodriguez, Mexico City, Mexico</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p>Layout: 2002-2003 CART version</p>
                <p>Circuit Length: 4.484 km</p>
                <p>Races Hosted: 0</p>
                <p>Races Cancelled: 1 (2003)</p>
                <p>Lap Record: N/A</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3>Autodromo Nazionale di Monza, Monza, Italy</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p>Layout: Grand Prix</p>
                <p>Circuit Length: 5.793 km</p>
                <p>Races Hosted: 4 (2004-2005, 2007-2008)</p>
                <p>Races Cancelled: 1 (2006)</p>
                <p>Lap Record: 1.31,470 (2008)</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3>Lime Rock Park, Lakeville, Connecticut</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p>Layout: Original Circuit with old chicane</p>
                <p>Circuit Length: 2.478 km</p>
                <p>Races Hosted: 4 (2004-2007)</p>
                <p>Races Cancelled: 0</p>
                <p>Lap Record: 0.44,659 (2007)</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3>Circuit de Spa-Francorchamps, Stavelot, Belgium</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p>Layout: Endurance (2004-2006)</p>
                <p>Circuit Length: 6.976 km</p>
                <p>Races Hosted: 3 (2004-2006)</p>
                <p>Races Cancelled: 0</p>
                <p>Lap Record: 2.05,964 (2004)</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3>Intercity Istanbul Park, Istanbul, Turkey</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p>Layout: Grand Prix</p>
                <p>Circuit Length: 5.338 km</p>
                <p>Races Hosted: 2 (2005-2006)</p>
                <p>Races Cancelled: 0</p>
                <p>Lap Record: 1.39,359 (2005)</p>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
