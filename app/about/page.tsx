import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full flex-col items-center justify-start lg:py-12 lg:px-16 bg-white gap-8 py-4 px-6">
        <h1>About this project</h1>
        <div className="flex flex-col gap-2">
          <p>
            This project started in the summer of 2022 as a byproduct of
            excitement of the prospect of the amount of new cars announced for
            the new LMH/LMDh regulations starting in 2023. The starting point of
            1999 was selected as that was considered the start of the modern Le
            Mans Prototype following years of a fractured sportscar landscape.
            In creating this project I would move through season by season,
            first collecting the race info for each race, before watching the
            available broadcast to collect notes on how the race evolved. For
            the early seasons this was relatively straight-forward as ALMS had
            posted their broadcasts to youtube, but it proved more challenging
            for the LMES/LMS, and a few years of the WEC where broadcasts
            weren't publically available. In these instances I would comb
            through any available written race reviews to create my notes. I had
            to use the same process for several editions of the 24h of Le Mans,
            as broadcasts for a lot of the early years were missing. Progress
            slowed as information became more difficult to find, and in 2025 it
            ground to a halt as I started a new job which took up most of my
            time.
          </p>
        </div>
      </main>
    </div>
  );
}
