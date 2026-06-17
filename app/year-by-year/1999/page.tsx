import Image from "next/image";

export default function NinetyNine() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full flex-col items-center justify-start py-12 px-16 bg-white gap-4">
        <h1>1999 Season</h1>
        <div className="flex flex-col gap-2">
          <h2>Series and Regulation News</h2>
          <ul className="list-disc list-inside">
            <li>
              Following the class restructuring from the ACO, teams running in
              the old LMGT1 class had a choice of class for 1999.
            </li>
            <li>
              For the inaugural season of the ALMS an{" "}
              <a
                href="https://web.archive.org/web/19991126085346/http://www.americanlemans.com/pages/news99/sched981105.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                8-race calendar was announced
              </a>
              , including the season opening 12h of Sebring and the 2nd running
              of the Petit Le Mans, with other events around circuits in North
              America as well as a{" "}
              <a
                href="https://web.archive.org/web/19991126085346/http://www.americanlemans.com/pages/news99/snd981105.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                new street race in San Diego
              </a>{" "}
              to finish the season.
            </li>
            <li>
              As part of the process of expanding sportscar racing across the
              world, the ACO planned a non-championship Le Mans-style race in
              Japan to gauge the interest in Asia for an ALMS-type series.
              Toyota and Nissan both sent a car each to the race, but neither of
              the other teams chose to compete there.
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2>Manufacturer News</h2>
          <ul className="list-disc list-inside">
            <li>
              Mercedes took the CLK-LM and updated it to LMGTP regulations,
              becoming the CLR.
            </li>
            <li>
              Toyota did the same, requiring only minor updates to their GT-One.
            </li>
            <li>
              Nissan chose to modify the R390 to become the open-cockpit R391
              for the LMP-class.
            </li>
            <li>
              Porsche started work on a new car for the LMP-class. The LMP2000
              was initially supposed to debut in 1999, but discussions over
              which engine to use delayed the project to 2000, and then it was
              cancelled in the spring of 1999 due to internal politics.
            </li>
            <li>
              BMW modified their V12 LM from 1998 built for the previous year's
              LMP regulations into the V12 LMR to race in the new LMP class,
              bringing the cars to Sebring for the ALMS season opener, and
              competing in the remaining races after Le Mans.
            </li>
            <li>
              Audi joined the sportscar scene with two newly developed cars, the
              R8R for the LMP class, and the R8C for the LMGTP class. The R8R
              was designed and built by Dallara in Italy and operated with the
              help of Joest Racing, whereas the R8C was designed by Racing
              Technology Norfolk in the UK and operated by Audi Sport Team
              UK.Audi brought the R8R to Sebring as preparation for Le Mans, but
              didn't compete in any other races that season. With the
              developement of the R8C starting later, that car was only sent to
              Le Mans.
            </li>
            <li>
              Panoz also designed the new LMP-1 Roadster-S, a front-engined
              open-cockpit LMP based on the old Esperante GTR-1. It debuted at
              the second ALMS race at Road Atlanta and then completed the rest
              of the season in addition to Le Mans.
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2>The Teams</h2>
          <div>
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
                  <td rowSpan={15}>
                    <strong>BMW Motorsport</strong>
                  </td>
                  <td rowSpan={15}>BMW V12 LMR</td>
                  <td rowSpan={4}>42</td>
                  <td>JJ Lehto(FIN)</td>
                  <td>
                    Sebring, <em>Mosport</em>, Sonoma, Portland, Petit Le Mans,
                    Laguna Seca, Las Vegas
                  </td>
                </tr>
                <tr>
                  <td>Jörg Müller(DEU)</td>
                  <td>
                    Sebring, <em>Mosport</em>, Petit Le Mans
                  </td>
                </tr>
                <tr>
                  <td>Tom Kristensen(DEN)</td>
                  <td>Sebring</td>
                </tr>
                <tr>
                  <td>Steve Soper(GBR)</td>
                  <td>Sonoma, Portland, Laguna Seca, Las Vegas</td>
                </tr>
                <tr>
                  <td rowSpan={5}>43</td>
                  <td>Joachim Winkelhock(DEU)</td>
                  <td>
                    Sebring, <em>Mosport</em>, Sonoma, Portland, Petit Le Mans,
                    Laguna Seca, Las Vegas
                  </td>
                </tr>
                <tr>
                  <td>Pierluigi Martini(ITA)</td>
                  <td>Sebring</td>
                </tr>
                <tr>
                  <td>Yannick Dalmas(FRA)</td>
                  <td>Sebring</td>
                </tr>
                <tr>
                  <td>Bill Auberlen(USA)</td>
                  <td>
                    <em>Mosport</em>, Sonoma, Portland, Petit Le Mans, Laguna
                    Seca, Las Vegas
                  </td>
                </tr>
                <tr>
                  <td>Steve Soper(GBR)</td>
                  <td>Petit Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={3}>15</td>
                  <td>Joachim Winkelhock(DEU)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Pierluigi Martini(ITA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Yannick Dalmas(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={3}>17</td>
                  <td>JJ Lehto(FIN)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Jörg Müller(DEU)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Tom Kristensen(DEN)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={19}>
                    <strong>Panoz Motor Sports</strong>
                  </td>
                  <td rowSpan={6}>Panoz Esperante GTR-1</td>
                  <td rowSpan={3}>1</td>
                  <td>David Brabham(AUS)</td>
                  <td>Sebring</td>
                </tr>
                <tr>
                  <td>Eric Bernard(FRA)</td>
                  <td>Sebring</td>
                </tr>
                <tr>
                  <td>Klaus Graf(DEU)</td>
                  <td>
                    <em>Sebring</em>
                  </td>
                </tr>
                <tr>
                  <td rowSpan={3}>2</td>
                  <td>Johnny O'Connell(USA)</td>
                  <td>Sebring, Road Atlanta</td>
                </tr>
                <tr>
                  <td>Jan Magnussen(DEN)</td>
                  <td>Sebring, Road Atlanta</td>
                </tr>
                <tr>
                  <td>John Nielsen(DEN)</td>
                  <td>Sebring</td>
                </tr>
                <tr>
                  <td rowSpan={13}>Panoz LMP-1 Roadster-S</td>
                  <td rowSpan={3}>1</td>
                  <td>David Brabham(AUS)</td>
                  <td>
                    Road Atlanta, Mosport, Sonoma, Portland, Petit Le Mans,
                    Laguna Seca, Las Vegas
                  </td>
                </tr>
                <tr>
                  <td>Eric Bernard(FRA)</td>
                  <td>
                    Road Atlanta, Mosport, Sonoma, Portland, Petit Le Mans,
                    Laguna Seca, Las Vegas
                  </td>
                </tr>
                <tr>
                  <td>Andy Wallace(GBR)</td>
                  <td>Petit Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={4}>2</td>
                  <td>Johnny O'Connell(USA)</td>
                  <td>
                    Mosport, Sonoma, Portland, Petit Le Mans, Laguna Seca, Las
                    Vegas
                  </td>
                </tr>
                <tr>
                  <td>Jan Magnussen(DEN)</td>
                  <td>
                    Mosport, Sonoma, Portland, Petit Le Mans, Laguna Seca, Las
                    Vegas
                  </td>
                </tr>
                <tr>
                  <td>Memo Gidley(USA)</td>
                  <td>Petit Le Mans</td>
                </tr>
                <tr>
                  <td>Klaus Graf(DEU)</td>
                  <td>
                    <em>Laguna Seca</em>
                  </td>
                </tr>
                <tr>
                  <td rowSpan={3}>11</td>
                  <td>Johnny O'Connell(USA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Jan Magnussen(DEN)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Max Angelelli(ITA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={3}>12</td>
                  <td>David Brabham(AUS)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Eric Bernard(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Butch Leitzinger(USA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={12}>
                    <strong>Audi Sport Team Joest</strong>
                  </td>
                  <td rowSpan={12}>Audi R8R</td>
                  <td rowSpan={3}>77</td>
                  <td>Michele Alboreto(ITA)</td>
                  <td>Sebring</td>
                </tr>
                <tr>
                  <td>Rinaldo Capello(ITA)</td>
                  <td>Sebring</td>
                </tr>
                <tr>
                  <td>Stefan Johansson(SWE)</td>
                  <td>Sebring</td>
                </tr>
                <tr>
                  <td rowSpan={3}>78</td>
                  <td>Perry McCarthy(GBR)</td>
                  <td>Sebring</td>
                </tr>
                <tr>
                  <td>Frank Biela(DEU)</td>
                  <td>Sebring</td>
                </tr>
                <tr>
                  <td>Emanuele Pirro(ITA)</td>
                  <td>Sebring</td>
                </tr>
                <tr>
                  <td rowSpan={3}>7</td>
                  <td>Michele Alboreto(ITA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Rinaldo Capello(ITA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Laurent Aïello(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={3}>8</td>
                  <td>Didier Theys(BEL)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Frank Biela(DEU)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Emanuele Pirro(ITA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={6}>
                    <strong>Audi Sport Team UK</strong>
                  </td>
                  <td rowSpan={6}>Audi R8C</td>
                  <td rowSpan={3}>9</td>
                  <td>Stefan Johansson(SWE)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Stephane Ortelli(MCO)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Christian Abt(DEU)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={3}>10</td>
                  <td>James Weaver(GBR)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Andy Wallace(GBR)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Perry McCarthy(GBR)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={9}>
                    <strong>AMG-Mercedes</strong>
                  </td>
                  <td rowSpan={9}>Mercedes-Benz CLR</td>
                  <td rowSpan={3}>4</td>
                  <td>Mark Webber(AUS)</td>
                  <td>
                    <em>Le Mans</em>
                  </td>
                </tr>
                <tr>
                  <td>Jean-Marc Gounon(FRA)</td>
                  <td>
                    <em>Le Mans</em>
                  </td>
                </tr>
                <tr>
                  <td>Marcel Tiemann(DEU)</td>
                  <td>
                    <em>Le Mans</em>
                  </td>
                </tr>
                <tr>
                  <td rowSpan={3}>5</td>
                  <td>Christophe Bouchut(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Nick Heidfeld(DEU)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Peter Dumbreck(GBR)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={3}>6</td>
                  <td>Bernd Schneider(DEU)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Franck Lagorce(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Pedro Lamy(POR)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={12}>
                    <strong>Toyota Motorsports</strong>
                  </td>
                  <td rowSpan={12}>Toyota GT-One</td>
                  <td rowSpan={6}>1</td>
                  <td>Martin Brundle(GBR)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Emmanuel Collard(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Vincenzo Sospiri(ITA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Ukyo Katayama(JAP)</td>
                  <td>Fuji</td>
                </tr>
                <tr>
                  <td>Keiichi Tsuchiya(JAP)</td>
                  <td>Fuji</td>
                </tr>
                <tr>
                  <td>Toshio Suzuki(JAP)</td>
                  <td>Fuji</td>
                </tr>
                <tr>
                  <td rowSpan={3}>2</td>
                  <td>Thierry Boutsen(BEL)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Ralf Kelleners(DEU)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Allan McNish(GBR)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={3}>3</td>
                  <td>Ukyo Katayama(JAP)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Keiichi Tsuchiya(JAP)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Toshio Suzuki(JAP)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={8}>
                    <strong>Nissan Motorsports</strong>
                  </td>
                  <td rowSpan={8}>Nissan R391</td>
                  <td rowSpan={3}>22</td>
                  <td>Michael Krumm(DEU)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Satoshi Motoyama(JAP)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td>Eric Comas(FRA)</td>
                  <td>Le Mans</td>
                </tr>
                <tr>
                  <td rowSpan={5}>23</td>
                  <td>Aguri Suzuki(JAP)</td>
                  <td>
                    <em>Le Mans</em>
                  </td>
                </tr>
                <tr>
                  <td>Eric van de Poele(BEL)</td>
                  <td>
                    <em>Le Mans</em>
                  </td>
                </tr>
                <tr>
                  <td>Masami Kageyama(JAP)</td>
                  <td>
                    <em>Le Mans</em>, Fuji
                  </td>
                </tr>
                <tr>
                  <td>Satoshi Motoyama(JAP)</td>
                  <td>Fuji</td>
                </tr>
                <tr>
                  <td>Eric Comas(FRA)</td>
                  <td>Fuji</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
            <h2>Calendar</h2>
        </div>
      </main>
    </div>
  );
}
