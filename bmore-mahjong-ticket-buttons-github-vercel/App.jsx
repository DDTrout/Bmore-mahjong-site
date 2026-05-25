import React from "react";

const logoSrc = "/BMM LOGO.png";
const ticketUrl = "https://docs.google.com/forms/d/e/1FAIpQLSe3fkvrORXBi9bv9yYEx8yP_zYFXOUXewz4Ssa90LYAlSAVow/viewform";

const eventFlyers = [
  { src: "/blue-pit-flyer.png", alt: "Bmore Mahjong night flyer at Blue Pit BBQ" },
  { src: "/peabody-flyer.png", alt: "Bmore Mahjong night flyer at Peabody Heights Brewery" },
  { src: "/union-craft-flyer.png", alt: "Bmore Mahjong night flyer at Union Craft Brewing" },
  { src: "/go-skate-flyer.png", alt: "Bmore Mahjong Go Skateboarding Day flyer" },
];

function FlyerCarousel() {
  return (
    <div className="mt-10 rounded-[2rem] border border-[#f9c400]/25 bg-white/5 p-5 shadow-2xl">
      <div className="mb-5 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f9c400]">Event Flyers</p>
          <h3 className="mt-2 text-2xl font-black tracking-tight">Swipe through what is coming up.</h3>
        </div>
        <p className="text-sm font-semibold text-[#fff7df]/60">Scroll sideways to view each flyer.</p>
      </div>
      <div className="flex snap-x gap-5 overflow-x-auto pb-4">
        {eventFlyers.map((flyer) => (
          <div key={flyer.src} className="min-w-[280px] snap-center sm:min-w-[420px] lg:min-w-[520px]">
            <img
              src={flyer.src}
              alt={flyer.alt}
              className="h-[360px] w-full rounded-[1.5rem] border border-white/10 bg-black object-contain shadow-xl sm:h-[430px] lg:h-[500px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] text-[#fff7df]">
      <div className="fixed inset-0 pointer-events-none opacity-25">
        <div className="absolute -top-28 -left-28 h-96 w-96 rounded-full bg-[#f9c400] blur-3xl" />
        <div className="absolute top-1/4 -right-24 h-96 w-96 rounded-full bg-[#d90416] blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-[#f7d45a] blur-3xl" />
      </div>

      <header className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="#top" className="flex items-center gap-3">
          <img src={logoSrc} alt="Bmore Mahjong logo" className="h-14 w-14 rounded-full object-cover ring-2 ring-[#f9c400]" />
          <span className="text-xl font-black tracking-tight">Bmore Mahjong</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-[#fff7df]/80 md:flex">
          <a href="#about" className="hover:text-[#f9c400]">About</a>
          <a href="#events" className="hover:text-[#f9c400]">Events</a>
          <a href={ticketUrl} target="_blank" rel="noreferrer" className="rounded-full bg-[#f9c400] px-5 py-2 font-black text-black shadow-lg shadow-[#f9c400]/20 transition hover:scale-[1.03]">Tickets</a>
          <a href="#history" className="hover:text-[#f9c400]">History</a>
          <a href="#connect" className="hover:text-[#f9c400]">Connect</a>
        </nav>
      </header>

      <section id="top" className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-[1.1fr_.9fr] md:py-24">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#f9c400]/40 bg-[#f9c400]/10 px-4 py-2 text-sm font-bold text-[#f9c400]">
            ✨ American Mahjong in Baltimore & beyond
          </div>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            Mahjong is for everyone—
            <span className="text-[#f9c400]">not just your grandma.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#fff7df]/82 md:text-xl">
            Welcome to Bmore Mahjong, your go-to hub for all things American mahjong in Baltimore and beyond. We host welcoming events that bring people together across Charm City—one tile, one table, and one new connection at a time.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#events" className="rounded-full bg-[#f9c400] px-7 py-4 text-center font-black text-black shadow-lg shadow-[#f9c400]/20 transition hover:scale-[1.02]">
              See Upcoming Events
            </a>
            <a href="#connect" className="rounded-full border border-[#fff7df]/25 px-7 py-4 text-center font-black text-[#fff7df] transition hover:border-[#d90416] hover:bg-[#d90416]/20">
              Follow the Vibes
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#f9c400] via-[#d90416] to-[#111] opacity-70 blur-xl" />
          <div className="relative rounded-[2rem] border border-[#fff7df]/15 bg-black/70 p-6 shadow-2xl">
            <img src={logoSrc} alt="Bmore Mahjong logo" className="mx-auto w-full max-w-md rounded-[1.5rem] object-contain" />
          </div>
        </div>
      </section>

      <section id="about" className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] bg-[#fff7df] p-8 text-black md:col-span-2">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#d90416]">About Us</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">A table for everyone.</h2>
            <p className="mt-5 text-lg leading-8 text-black/75">
              We are passionate about hosting American Mahjong events and showing players of all ages, backgrounds, and experience levels just how fun, social, and engaging this game can be. Whether you are a total beginner or looking to sharpen your skills in a fun environment with outstanding people, you are in the right place.
            </p>
            <p className="mt-4 text-lg leading-8 text-black/75">
              Mahjong is not just your grandma’s game, it is for everyone. And we are here to prove it by creating community-centered events in and around Charm City.
            </p>
          </div>
          <div className="rounded-[2rem] border border-[#f9c400]/35 bg-[#f9c400]/10 p-8">
            <div className="text-4xl">🤝</div>
            <h3 className="mt-5 text-2xl font-black">Community connection</h3>
            <p className="mt-3 leading-7 text-[#fff7df]/75">
              New players, seasoned players, neighbors, friends, and curious drop-ins—Bmore Mahjong is here to help Baltimore gather, learn, laugh, and play.
            </p>
          </div>
        </div>
      </section>

      <section id="events" className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f9c400]">Upcoming Events</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Come play with us.</h2>
          </div>
          <p className="max-w-xl text-[#fff7df]/70">Upcoming pop-ups plus recurring monthly events with intro, guided play, and open play tables for every skill level.</p>
        </div>

        <article className="overflow-hidden rounded-[2rem] border border-[#fff7df]/15 bg-[#111] shadow-2xl">
          <div className="grid md:grid-cols-[.85fr_1.15fr]">
            <div className="bg-[#f9c400] p-8 text-black">
              <div className="rounded-[1.5rem] bg-black/85 p-6 text-[#fff7df]">
                <h3 className="text-4xl font-black leading-none">Skate. Mahjong. Music. Food. Fun.</h3>
                <div className="mt-6 grid grid-cols-2 gap-3 text-sm font-bold">
                  <span>🛹 Skate</span>
                  <span>🀄 Mahjong</span>
                  <span>🎵 Music</span>
                  <span>🍽️ Food</span>
                </div>
              </div>
            </div>
            <div className="p-8 md:p-10">
              <p className="text-xl font-bold text-[#f9c400]">Join Bmore Mahjong for Go Skateboarding Day at Hazelwood Skatepark!</p>
              <p className="mt-4 leading-8 text-[#fff7df]/78">
                We are bringing the tiles to the park. Come hang with us and stop by our tent for a <strong className="text-[#fff7df]">FREE intro to American Mahjong</strong> plus guided gameplay. Whether you have never played or just want to jump in, we have got you covered.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-white/5 p-4"><div className="mb-2 text-xl">📍</div><strong>Hazelwood Park</strong><br /><span className="text-sm text-[#fff7df]/65">4924 Hazelwood Ave, Baltimore, MD 21206</span></div>
                <div className="rounded-2xl bg-white/5 p-4"><div className="mb-2 text-xl">📅</div><strong>June 21st</strong><br /><span className="text-sm text-[#fff7df]/65">Go Skateboarding Day</span></div>
                <div className="rounded-2xl bg-white/5 p-4"><div className="mb-2 text-xl">⏰</div><strong>12–6 PM</strong><br /><span className="text-sm text-[#fff7df]/65">All are welcome</span></div>
              </div>
              <p className="mt-6 rounded-2xl border border-[#f9c400]/30 bg-[#f9c400]/10 p-5 font-bold text-[#fff7df]">
                Come for the skating, stay for the vibes. Let’s build community one tile at a time. No experience needed.
              </p>
            </div>
          </div>
        </article>

        <div className="mt-10">
          <div className="mb-6">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f9c400]">Monthly Events</p>
            <h3 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">Reserve your seat at the table.</h3>
            <p className="mt-4 max-w-3xl leading-8 text-[#fff7df]/75">
              Registration and payment are required to reserve a seat. Tickets are <strong className="text-[#fff7df]">$25 per person</strong> and include a seat at an intro, guided play, or open play table, one drink, one raffle ticket for Mahjong prizes, and a fun, engaging, entertaining, welcoming Mahjong experience that will have you coming back each month. Check our social media pages for special pop-ups in your area.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-[2rem] border border-[#f9c400]/25 bg-white/5 p-7 shadow-xl">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f9c400]">2nd Monday of each month</p>
                  <h4 className="mt-2 text-2xl font-black">Peabody Heights Brewery</h4>
                </div>
                <span className="rounded-full bg-[#f9c400] px-4 py-2 text-sm font-black text-black">6:00 PM – 8:30 PM</span>
              </div>
              <p className="mt-5 leading-8 text-[#fff7df]/78">
                Intro to American Mahjong and guided play American Mahjong tables.
              </p>
              <div className="mt-5 rounded-2xl bg-black/35 p-5">
                <p className="font-black text-[#f9c400]">Location</p>
                <p className="mt-2 text-[#fff7df]/75">401 East 30th Street<br />Baltimore, MD 21218</p>
              </div>
              <a href={ticketUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#f9c400] px-6 py-3 font-black text-black shadow-lg shadow-[#f9c400]/20 transition hover:scale-[1.02] sm:w-auto">
                Get Tickets ↗
              </a>
            </article>

            <article className="rounded-[2rem] border border-[#f9c400]/25 bg-white/5 p-7 shadow-xl">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f9c400]">2nd Thursday of each month</p>
                  <h4 className="mt-2 text-2xl font-black">Blue Pit BBQ</h4>
                </div>
                <span className="rounded-full bg-[#f9c400] px-4 py-2 text-sm font-black text-black">6:00 PM – 8:30 PM</span>
              </div>
              <p className="mt-5 leading-8 text-[#fff7df]/78">
                Intro to American Mahjong and guided play American Mahjong tables.
              </p>
              <div className="mt-5 rounded-2xl bg-black/35 p-5">
                <p className="font-black text-[#f9c400]">Location</p>
                <p className="mt-2 text-[#fff7df]/75">1601 Union Ave<br />Baltimore, MD 21211</p>
              </div>
              <a href={ticketUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#f9c400] px-6 py-3 font-black text-black shadow-lg shadow-[#f9c400]/20 transition hover:scale-[1.02] sm:w-auto">
                Get Tickets ↗
              </a>
            </article>

            <article className="rounded-[2rem] border border-[#f9c400]/25 bg-white/5 p-7 shadow-xl">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f9c400]">3rd Tuesday of each month</p>
                  <h4 className="mt-2 text-2xl font-black">Union Craft Brewing</h4>
                </div>
                <span className="rounded-full bg-[#f9c400] px-4 py-2 text-sm font-black text-black">6:00 PM – 8:30 PM</span>
              </div>
              <p className="mt-5 leading-8 text-[#fff7df]/78">
                Intro to American Mahjong and guided play American Mahjong tables.
              </p>
              <div className="mt-5 rounded-2xl bg-black/35 p-5">
                <p className="font-black text-[#f9c400]">Location</p>
                <p className="mt-2 text-[#fff7df]/75">1700 W 41st St<br />Baltimore, MD 21211</p>
              </div>
              <a href={ticketUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#f9c400] px-6 py-3 font-black text-black shadow-lg shadow-[#f9c400]/20 transition hover:scale-[1.02] sm:w-auto">
                Get Tickets ↗
              </a>
            </article>
          </div>

          <FlyerCarousel />

          <div className="mt-6 rounded-[2rem] border border-[#d90416]/40 bg-[#d90416]/15 p-7 text-center">
            <h4 className="text-2xl font-black">Get your ticket today — we have your seat waiting.</h4>
            <p className="mx-auto mt-3 max-w-3xl leading-8 text-[#fff7df]/75">
              Each ticket includes a seat at an intro, guided play, or open play table, one drink, one raffle ticket for Mahjong prizes, and a fun Mahjong experience.
            </p>
            <a href={ticketUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center justify-center rounded-full bg-[#f9c400] px-8 py-4 font-black text-black shadow-lg shadow-[#f9c400]/20 transition hover:scale-[1.02]">
              Register & Pay for Monthly Events ↗
            </a>
          </div>
        </div>
      </section>

      <section id="history" className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2rem] bg-[#d90416] p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#fff7df]/80">Learn the roots</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight">History of American Mahjong</h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-[#fff7df]/85">
                Want to know how American Mahjong became the game we play today? Explore the National Mah Jongg League for history, resources, and official card information.
              </p>
            </div>
            <a href="https://www.nationalmahjonggleague.org/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#fff7df] px-7 py-4 font-black text-black transition hover:scale-[1.02]">
              National Mah Jongg League ↗
            </a>
          </div>
        </div>
      </section>

      <section id="connect" className="relative mx-auto max-w-7xl px-6 py-16 pb-24">
        <div className="rounded-[2rem] border border-[#fff7df]/15 bg-white/5 p-8 md:p-10">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f9c400]">Connect</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Follow, watch, message, play.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            <a href="https://www.youtube.com/@BmoreMahjong" target="_blank" rel="noreferrer" className="rounded-2xl bg-[#111] p-5 transition hover:-translate-y-1 hover:bg-[#d90416]"><div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f9c400] text-sm font-black text-black">YT</div><h3 className="mt-4 font-black">YouTube</h3><p className="text-sm text-[#fff7df]/65">Videos & content</p></a>
            <a href="https://www.instagram.com/bmoremahjong/" target="_blank" rel="noreferrer" className="rounded-2xl bg-[#111] p-5 transition hover:-translate-y-1 hover:bg-[#d90416]"><div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f9c400] text-sm font-black text-black">IG</div><h3 className="mt-4 font-black">Instagram</h3><p className="text-sm text-[#fff7df]/65">Event updates</p></a>
            <a href="https://www.facebook.com/profile.php?id=61570779807266" target="_blank" rel="noreferrer" className="rounded-2xl bg-[#111] p-5 transition hover:-translate-y-1 hover:bg-[#d90416]"><div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f9c400] text-sm font-black text-black">FB</div><h3 className="mt-4 font-black">Facebook</h3><p className="text-sm text-[#fff7df]/65">Community posts</p></a>
            <a href="mailto:bmoremahjong@gmail.com" className="rounded-2xl bg-[#111] p-5 transition hover:-translate-y-1 hover:bg-[#d90416]"><div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f9c400] text-sm font-black text-black">@</div><h3 className="mt-4 font-black">Email</h3><p className="text-sm text-[#fff7df]/65">bmoremahjong@gmail.com</p></a>
          </div>
        </div>
      </section>
    </main>
  );
}
