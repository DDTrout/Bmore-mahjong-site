import React from "react";

const logoSrc = "/BMM LOGO.png";
const registrationUrl = "https://forms.gle/o1Hwyrj5sqdB4cM27";

const popUpEvents = [
  {
    name: "Harford Vineyard & Winery",
    logo: "/Harford Vineyard Logo.png",
    location: "Forest Hill, Maryland",
    date: "Sunday, October 4, 2026",
  },
  {
    name: "Joanna's Cafe",
    logo: "/Joannas Cafe Logo.png",
    location: "Dundalk, Maryland",
    date: "Tuesday, October 27, 2026",
  },
];

function VenueLogo({ src, alt, size = "monthly" }) {
  const sizing = size === "popup" ? "h-24 w-32 sm:h-28 sm:w-36" : "h-20 w-24 sm:h-24 sm:w-28";

  return (
    <div className={`${sizing} flex shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-black/10 bg-white p-2.5 shadow-[0_12px_30px_rgba(0,0,0,0.28)] ring-1 ring-white/10`}>
      <img src={src} alt={alt} className="h-full w-full object-contain" />
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
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f9c400]">Events</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Come play with us.</h2>
          </div>
          <p className="max-w-xl text-[#fff7df]/70">Join us for recurring monthly Mahjong gatherings or special pop-up events around Baltimore and beyond.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-[2rem] border border-[#f9c400]/40 bg-[#f9c400]/10 p-7">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f9c400]">Monthly Events</p>
            <div className="mt-3 flex items-end gap-2">
              <span className="text-5xl font-black">$25</span>
              <span className="pb-1 text-[#fff7df]/65">per person</span>
            </div>
            <p className="mt-4 leading-8 text-[#fff7df]/75">
              Registration and payment are required to reserve a seat. Tickets include a seat at an intro, guided play, or open play table, one drink, one raffle ticket for Mahjong prizes, and a fun Mahjong experience.
            </p>
            <a href={registrationUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center justify-center rounded-full bg-[#f9c400] px-7 py-3 font-black text-black transition hover:scale-[1.02]">
              Register & Pay for Monthly Events ↗
            </a>
          </div>

          <div className="rounded-[2rem] border border-[#d90416]/45 bg-[#d90416]/15 p-7">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ff6b78]">Pop-Up Events</p>
            <div className="mt-3 flex items-end gap-2">
              <span className="text-5xl font-black">$35</span>
              <span className="pb-1 text-[#fff7df]/65">per person</span>
            </div>
            <p className="mt-4 leading-8 text-[#fff7df]/75">
              Special Mahjong experiences hosted at featured local venues. Check the upcoming pop-ups below for dates and venue details.
            </p>
            <a href={registrationUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center justify-center rounded-full bg-[#d90416] px-7 py-3 font-black text-white shadow-lg shadow-[#d90416]/20 transition hover:scale-[1.02]">
              Register & Pay for Pop-Up Events ↗
            </a>
          </div>
        </div>

        <div className="mt-12 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f9c400]">Monthly Events</p>
            <h3 className="mt-2 text-3xl font-black">Our recurring tables</h3>
          </div>
          <span className="hidden rounded-full border border-[#f9c400]/30 px-4 py-2 text-sm font-black text-[#f9c400] sm:inline">$25 per person</span>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-[#f9c400]/25 bg-white/5 p-7 shadow-xl">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <VenueLogo src="/Peabody Logo.png" alt="Peabody Heights Brewery logo" />
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f9c400]">2nd Monday of each month</p>
                  <h4 className="mt-2 text-2xl font-black">Peabody Heights Brewery</h4>
                </div>
              </div>
              <span className="w-fit rounded-full bg-[#f9c400] px-4 py-2 text-sm font-black text-black">6:00 PM – 8:30 PM</span>
            </div>
            <p className="mt-5 leading-8 text-[#fff7df]/78">
              Intro to American Mahjong and guided play American Mahjong tables.
            </p>
            <div className="mt-5 rounded-2xl bg-black/35 p-5">
              <p className="font-black text-[#f9c400]">Location</p>
              <p className="mt-2 text-[#fff7df]/75">401 East 30th Street<br />Baltimore, MD 21218</p>
            </div>
          </article>

          <article className="rounded-[2rem] border border-[#f9c400]/25 bg-white/5 p-7 shadow-xl">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <VenueLogo src="/Blue Pit Logo.png" alt="Blue Pit BBQ logo" />
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f9c400]">2nd Thursday of each month</p>
                  <h4 className="mt-2 text-2xl font-black">Blue Pit BBQ</h4>
                </div>
              </div>
              <span className="w-fit rounded-full bg-[#f9c400] px-4 py-2 text-sm font-black text-black">6:00 PM – 8:30 PM</span>
            </div>
            <p className="mt-5 leading-8 text-[#fff7df]/78">
              Intro to American Mahjong and guided play American Mahjong tables.
            </p>
            <div className="mt-5 rounded-2xl bg-black/35 p-5">
              <p className="font-black text-[#f9c400]">Location</p>
              <p className="mt-2 text-[#fff7df]/75">1601 Union Ave<br />Baltimore, MD 21211</p>
            </div>
          </article>

          <article className="rounded-[2rem] border border-[#f9c400]/25 bg-white/5 p-7 shadow-xl lg:col-span-2">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <VenueLogo src="/Union Craft Logo.png" alt="Union Craft Brewing logo" />
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f9c400]">3rd Tuesday of each month</p>
                  <h4 className="mt-2 text-2xl font-black">Union Craft Brewing</h4>
                </div>
              </div>
              <span className="w-fit rounded-full bg-[#f9c400] px-4 py-2 text-sm font-black text-black">6:00 PM – 8:30 PM</span>
            </div>
            <p className="mt-5 leading-8 text-[#fff7df]/78">
              Intro to American Mahjong and guided play American Mahjong tables.
            </p>
            <div className="mt-5 rounded-2xl bg-black/35 p-5">
              <p className="font-black text-[#f9c400]">Location</p>
              <p className="mt-2 text-[#fff7df]/75">1700 W 41st St<br />Baltimore, MD 21211</p>
            </div>
          </article>
        </div>

        <div className="mt-16 rounded-[2rem] border border-[#d90416]/35 bg-gradient-to-br from-[#d90416]/15 to-white/[0.03] p-7 md:p-9">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#ff6b78]">Pop-Up Events</p>
              <h3 className="mt-2 text-3xl font-black md:text-4xl">Upcoming pop-ups</h3>
              <p className="mt-3 max-w-2xl leading-7 text-[#fff7df]/70">Special $35 Mahjong events at featured local venues. Register using the same Bmore Mahjong registration form used for monthly events.</p>
            </div>
            <span className="w-fit rounded-full bg-[#d90416] px-5 py-2 text-sm font-black text-white">$35 per person</span>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {popUpEvents.map((event) => (
              <article key={event.name} className="flex flex-col gap-5 rounded-[1.5rem] border border-white/10 bg-black/30 p-6 shadow-xl sm:flex-row sm:items-center">
                <VenueLogo src={event.logo} alt={`${event.name} logo`} size="popup" />
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#ff6b78]">Upcoming Pop-Up</p>
                  <h4 className="mt-1 text-xl font-black">{event.name}</h4>
                  <p className="mt-2 text-sm text-[#fff7df]/60">{event.location}</p>
                  <p className="mt-2 text-base font-black text-[#fff7df]">{event.date}</p>
                  <p className="mt-1 text-sm font-semibold text-[#fff7df]/70">Event time coming soon</p>
                </div>
              </article>
            ))}
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
