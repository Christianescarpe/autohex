import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router';
import { findLocation, LOCATIONS } from '../data/locations';
import { SERVICES } from '../data/services';
import { SITE } from '../data/site';
import { Reveal, usePageMeta } from '../components/Reveal';
import ContactForm from '../components/ContactForm';
import Marquee from '../components/Marquee';
import Gauge from '../components/Gauge';
import RichText from '../components/RichText';

const STEPS = [
  {
    n: '01',
    t: 'Message with vehicle details',
    d: 'Include make, model, year, engine, transmission, location, and symptoms. 24 hours a day, 7 days a week.',
  },
  {
    n: '02',
    t: 'Agree on the assessment',
    d: 'Confirm vehicle support, appointment availability, initial charges, and what records or keys to bring.',
  },
  {
    n: '03',
    t: 'Review the proposed work',
    d: 'Discuss findings, quotation, and any repair, remapping, or programming needed before giving authorization.',
  },
  {
    n: '04',
    t: 'Confirm verification & collection',
    d: 'Road and load testing, post-work verification scan, full documentation, and after-sales support before your return journey.',
  },
];

const REVIEWS = [
  {
    quote: 'Kinuha nila yung limp mode ng truck ko na dalawang shop na ang hindi maayos. Solid.',
    who: 'Commercial Fleet Operator, Oton',
  },
  {
    quote: 'Napa-remap ko yung pickup ko — mas malakas humatak at mas tipid sa diesel. Highly recommended.',
    who: 'Diesel Pickup Owner, Iloilo City',
  },
  {
    quote: 'ECU na sabi ng casa ay palitan na, na-repair nila sa board level. Makapal ang tipid. Salamat Autohex!',
    who: 'SUV Owner, Guimbal',
  },
];

export default function LocationPage() {
  const { slug, city } = useParams();
  // Handle /locations/iloilo-city/mandurriao or /locations/:slug
  const activeSlug = slug === 'mandurriao' || city === 'iloilo-city' ? (slug || 'mandurriao') : slug;
  const loc = findLocation(activeSlug);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  usePageMeta(
    loc ? loc.metaTitle : 'Location | Autohex Iloilo',
    loc?.metaDesc
  );

  if (!loc) return <Navigate to="/locations" replace />;

  const coreServices = SERVICES.slice(0, 6);
  const additionalServices = SERVICES.slice(6);
  const otherLocations = LOCATIONS.filter((l) => l.slug !== loc.slug);

  const tickerItems = [
    `Serving ${loc.name}`,
    'ECU Remapping',
    'Module Repair',
    'Diagnostics & Coding',
    'DPF • EGR • AdBlue',
    'Auto Electrical',
    'Diesel Diagnostics',
    'Car Repair',
    'Preventive Maintenance',
    'Open 24 Hours',
  ];

  return (
    <main>
      {/* 1. HERO SECTION (SAME AS HOMEPAGE) */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-dash.jpg"
            alt={`Automotive repair for ${loc.name}`}
            className="h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(10,6,5,0.55) 0%, rgba(10,6,5,0.35) 40%, rgba(10,6,5,0.96) 100%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(90deg, rgba(10,6,5,0.88) 0%, transparent 60%)' }}
          />
        </div>

        {/* Large Outlined Name Background Accent */}
        <div
          className="pointer-events-none absolute -right-10 top-24 hidden select-none md:block opacity-20"
          aria-hidden
        >
          <span className="font-display text-outline uppercase text-[var(--light)]" style={{ fontSize: '13rem', lineHeight: 1 }}>
            {loc.name}
          </span>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-24">
          <Reveal>
            <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-[var(--light)]">
              <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-red" />
              {SITE.hours} • Serving {loc.name}, Iloilo
            </p>
          </Reveal>

          <Reveal delay={1}>
            <p className="font-display text-xl uppercase tracking-widest text-red md:text-2xl">
              Your engine, unlocked in {loc.name}
            </p>
            <h1
              className="font-display mt-2 max-w-5xl uppercase leading-[0.95] text-[var(--white)]"
              style={{ fontSize: 'clamp(2.5rem, 7.5vw, 6.5rem)' }}
            >
              {loc.h1}
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <div className="mt-6 max-w-3xl text-base leading-relaxed text-[var(--light)] md:text-lg">
              <RichText content={loc.intro} />
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-red">
              Travel Orientation: {loc.drive}
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={SITE.messenger}
                target="_blank"
                rel="noreferrer"
                className="bg-red px-8 py-4 text-center text-sm font-bold uppercase tracking-[0.14em] text-white transition-transform hover:-translate-y-0.5"
              >
                Inquire for {loc.name}
              </a>
              <a
                href={SITE.phoneHref}
                className="border px-8 py-4 text-center text-sm font-bold uppercase tracking-[0.14em] text-[var(--light)] transition-colors hover:border-red hover:text-red"
                style={{ borderColor: 'rgba(233,231,226,0.4)' }}
              >
                Call {SITE.phone}
              </a>
              <a
                href={SITE.googleMaps}
                target="_blank"
                rel="noreferrer"
                className="border px-8 py-4 text-center text-sm font-bold uppercase tracking-[0.14em] text-[var(--light)] transition-colors hover:border-red hover:text-red"
                style={{ borderColor: 'rgba(233,231,226,0.4)' }}
              >
                Directions from {loc.name}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. MARQUEE TICKER (SAME AS HOMEPAGE) */}
      <Marquee items={tickerItems} />

      {/* 3. GAUGES / STATS (SAME AS HOMEPAGE) */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-12 sm:grid-cols-3">
          <Reveal><Gauge label="Potential power gain*" value="+30%" /></Reveal>
          <Reveal delay={1}><Gauge label="Potential fuel savings*" value="15%" /></Reveal>
          <Reveal delay={2}><Gauge label="Hours open daily" value="24/7" /></Reveal>
        </div>
        <p className="mt-8 text-center text-xs" style={{ color: 'rgba(203,198,185,0.5)' }}>
          *Direct access from {loc.name} ({loc.drive}). Power and economy calibrations depend on vehicle condition and journey load.
        </p>
      </section>

      {/* 4. SERVICES SHOWCASE (SAME AS HOMEPAGE) */}
      <section style={{ background: 'var(--bg-tinted)' }}>
        <div className="stripe-thin" />
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-red">Available for {loc.name}</p>
            <h2
              className="font-display max-w-3xl uppercase leading-[1.02] text-[var(--white)]"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            >
              Every module. Every fault. One shop.
            </h2>
            <div className="line-grow bg-red mt-6 h-1 w-24" />
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[var(--light)]">
              ECU tuning, diagnostics, and electronic repair for vehicles from {loc.name}. From board-level restoration to emissions solutions, our C1 Road facility handles cars, pickups, fleet trucks, and heavy machinery.
            </p>
          </Reveal>

          {/* Core Services List */}
          <div className="mt-12">
            {coreServices.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) as 0 | 1 | 2}>
                <Link to={`/services/${s.slug}`} className="service-row group flex items-center justify-between gap-4 py-6">
                  <div className="flex items-baseline gap-5">
                    <span className="font-display text-sm text-red">0{i + 1}</span>
                    <div>
                      <h3 className="font-display text-xl uppercase tracking-wide text-[var(--light)] transition-colors group-hover:text-red md:text-2xl">
                        {s.name}
                      </h3>
                      <p className="mt-1 max-w-xl text-sm text-[var(--muted)]">{s.short}</p>
                    </div>
                  </div>
                  <span className="font-display hidden text-2xl text-red transition-transform group-hover:translate-x-1 md:block">
                    →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Complementary Services Grid */}
          <div className="mt-16 border-t pt-12" style={{ borderColor: 'var(--line)' }}>
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-red">
              Complementary Mechanical & Maintenance Services
            </p>
            <h3 className="font-display mt-2 text-2xl uppercase tracking-wide text-[var(--white)] md:text-3xl">
              Complete Automotive Care for {loc.name}
            </h3>
            <p className="mt-2 max-w-2xl text-sm text-[var(--muted)]">
              Auto electrical repair for starting/charging issues, diesel engine diagnostics, car repair, and scheduled preventive maintenance:
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {additionalServices.map((s, idx) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="border p-5 transition-all hover:border-red hover:-translate-y-0.5"
                  style={{ borderColor: 'var(--line)', background: 'var(--bg)' }}
                >
                  <span className="font-display text-xs text-red">0{coreServices.length + idx + 1}</span>
                  <h4 className="font-display mt-2 text-lg uppercase tracking-wide text-[var(--white)]">
                    {s.name}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-[var(--muted)] line-clamp-3">
                    {s.short}
                  </p>
                  <span className="mt-4 block font-display text-xs text-red uppercase tracking-wider">
                    Learn more →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. LOCAL GUIDE & TECHNICAL SECTIONS (FROM THE SHEET - SAME 2-COL DESIGN AS HOMEPAGE) */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
        <Reveal>
          <div className="img-grade aspect-[4/5]">
            <img src="/images/engine-night.jpg" alt={`Diagnostics and repair for ${loc.name}`} loading="lazy" />
          </div>
        </Reveal>
        <div className="flex flex-col justify-center">
          <Reveal>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-red">{loc.name} Local Context</p>
            <h2 className="font-display uppercase leading-[1.02] text-[var(--white)]" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
              {loc.sections[0] ? loc.sections[0].heading : `Serving ${loc.name} Motorists`}
            </h2>
            <div className="line-grow bg-red mt-6 h-1 w-24" />
          </Reveal>
          <Reveal delay={1}>
            <div className="mt-6 text-base leading-relaxed text-[var(--light)] space-y-4">
              {loc.sections[0] && loc.sections[0].paragraphs.map((p, pIdx) => (
                <p key={pIdx}>
                  <RichText content={p} />
                </p>
              ))}
            </div>

            <ul className="mt-8 space-y-6">
              {[
                [`${loc.name} Route & Travel`, loc.drive],
                ['Evidence Before Repair', 'Diagnostic scans and waveform checks confirm whether a fault is electrical, software, or mechanical.'],
                ['Safe File Backups', 'Original calibration data preserved on every ECU remapping and module programming job.'],
                ['Open 24 Hours Daily', 'Drop by anytime on C1 Road, Abilay Sur, Oton — or message in advance for priority bay intake.'],
              ].map(([t, d]) => (
                <li key={t} className="border-l-2 border-red pl-5">
                  <h3 className="font-display text-lg uppercase tracking-wide text-[var(--light)]">{t}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">{d}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ADDITIONAL SECTIONS FROM THE SHEET (IF ANY) */}
      {loc.sections.length > 1 && (
        <section style={{ background: 'var(--bg-tinted)' }}>
          <div className="stripe-thin" />
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
            <div className="grid gap-12 md:grid-cols-2">
              {loc.sections.slice(1).map((sec, sIdx) => (
                <Reveal key={sec.heading} delay={(sIdx % 2) as 0 | 1}>
                  <div
                    className="border p-8 h-full transition-colors hover:border-red"
                    style={{ borderColor: 'var(--line)', background: 'var(--bg)' }}
                  >
                    <h3 className="font-display text-xl uppercase tracking-wide text-[var(--white)] md:text-2xl">
                      {sec.heading}
                    </h3>
                    <div className="line-grow bg-red my-4 h-1 w-16" />
                    <div className="space-y-3 text-sm leading-relaxed text-[var(--light)]">
                      {sec.paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>
                          <RichText content={p} />
                        </p>
                      ))}
                    </div>
                    {sec.lists.length > 0 && (
                      <ul className="mt-5 space-y-2 border-l-2 border-red pl-4 text-xs leading-relaxed text-[var(--muted)]">
                        {sec.lists.map((li, lIdx) => (
                          <li key={lIdx}>
                            <RichText content={li} />
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="stripe-thin" />
        </section>
      )}

      {/* 6. 4-STEP PROCESS (SAME AS HOMEPAGE) */}
      <section>
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-red">Transparent Workflow</p>
            <h2
              className="font-display uppercase leading-[1.02] text-[var(--white)]"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            >
              How it works: from first message to collection
            </h2>
            <div className="line-grow bg-red mt-6 h-1 w-24" />
          </Reveal>
          <div className="mt-12 grid gap-px md:grid-cols-4" style={{ background: 'var(--line)' }}>
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <div className="h-full p-7" style={{ background: 'var(--bg)' }}>
                  <span className="font-display text-4xl text-red">{s.n}</span>
                  <h3 className="font-display mt-4 text-lg uppercase tracking-wide text-[var(--light)]">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. GALLERY (SAME AS HOMEPAGE) */}
      <section style={{ background: 'var(--bg-tinted)' }}>
        <div className="stripe-thin" />
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-red">In the shop</p>
            <h2 className="font-display uppercase leading-[1.02] text-[var(--white)]" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
              Work speaks louder
            </h2>
            <div className="line-grow bg-red mt-6 h-1 w-24" />
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              ['/images/diagnostics-laptop.jpg', 'Diagnostics & live data analysis'],
              ['/images/red-engine.jpg', 'Performance and economy remaps'],
              ['/images/truck-mechanics.jpg', 'Commercial trucks & heavy equipment'],
              ['/images/engine-rebuild.jpg', 'Board-level module inspection'],
            ].map(([src, cap], i) => (
              <Reveal key={src} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <figure className="img-grade aspect-[4/5]">
                  <img src={src} alt={cap} loading="lazy" />
                  <figcaption className="absolute bottom-0 left-0 z-10 w-full p-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--light)]" style={{ background: 'linear-gradient(0deg, rgba(10,6,5,0.85), transparent)' }}>
                    {cap}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-6 text-sm text-[var(--muted)]">
              Real jobs, posted weekly —{' '}
              <a href={SITE.facebook} target="_blank" rel="noreferrer" className="text-red underline">
                follow us on Facebook ({SITE.followers} followers)
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* 8. REVIEWS (SAME AS HOMEPAGE) */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-red">Customer reviews</p>
          <h2 className="font-display uppercase leading-[1.02] text-[var(--white)]" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
            100% recommended on Facebook
          </h2>
          <div className="line-grow bg-red mt-6 h-1 w-24" />
        </Reveal>
        <div className="mt-12 grid gap-px md:grid-cols-3" style={{ background: 'var(--line)' }}>
          {REVIEWS.map((r, i) => (
            <Reveal key={r.who} delay={(i % 3) as 0 | 1 | 2}>
              <blockquote className="flex h-full flex-col justify-between p-7" style={{ background: 'var(--bg-tinted)' }}>
                <p className="text-base leading-relaxed text-[var(--light)]">“{r.quote}”</p>
                <footer className="mt-5">
                  <div className="text-red text-sm tracking-[0.2em]">★★★★★</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.18em] text-[var(--white)] font-bold">{r.who}</div>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <a
            href={SITE.facebook}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block border px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[var(--light)] transition-colors hover:border-red hover:text-red"
            style={{ borderColor: 'var(--line)' }}
          >
            Read all reviews on Facebook →
          </a>
        </Reveal>
      </section>

      {/* 9. TOWN SPECIFIC FAQS (FROM SHEET) */}
      {loc.faqs && loc.faqs.length > 0 && (
        <section style={{ background: 'var(--bg-tinted)' }}>
          <div className="stripe-thin" />
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
            <Reveal>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-red">
                Questions from {loc.name} drivers
              </p>
              <h2
                className="font-display uppercase leading-[1.02] text-[var(--white)]"
                style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
              >
                Frequently Asked Questions
              </h2>
              <div className="line-grow bg-red mt-6 h-1 w-24 mb-10" />
            </Reveal>

            <div className="space-y-4 max-w-4xl">
              {loc.faqs.map((faq, fIdx) => {
                const isOpen = openFaq === fIdx;
                return (
                  <div
                    key={fIdx}
                    className="border transition-colors"
                    style={{
                      borderColor: isOpen ? 'var(--red)' : 'var(--line)',
                      background: 'var(--bg)',
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : fIdx)}
                      className="flex w-full items-center justify-between gap-4 p-6 text-left"
                    >
                      <span className="font-display text-base uppercase tracking-wide text-[var(--white)] md:text-lg">
                        {faq.q}
                      </span>
                      <span className="font-display text-xl text-red">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    {isOpen && (
                      <div
                        className="border-t px-6 pb-6 pt-4 text-sm leading-relaxed text-[var(--light)]"
                        style={{ borderColor: 'var(--line)' }}
                      >
                        <RichText content={faq.a} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="stripe-thin" />
        </section>
      )}

      {/* 10. AREAS WE SERVE (SAME AS HOMEPAGE) */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-red">Areas we serve</p>
          <h2 className="font-display uppercase leading-[1.02] text-[var(--white)]" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
            Based in Oton. Serving all of Iloilo.
          </h2>
          <div className="line-grow bg-red mt-6 h-1 w-24" />
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-[var(--muted)]">
            Explore guides and travel directions for other neighboring towns across Iloilo:
          </p>
        </Reveal>
        <div className="mt-10 flex flex-wrap gap-3">
          {otherLocations.map((l) => (
            <Link
              key={l.slug}
              to={`/locations/${l.slug}`}
              className="border px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--light)] transition-colors hover:border-red hover:text-red"
              style={{ borderColor: 'var(--line)', background: 'var(--bg-tinted)' }}
            >
              {l.name} →
            </Link>
          ))}
        </div>
      </section>

      {/* 11. CONTACT / GET A QUOTE (SAME AS HOMEPAGE) */}
      <section style={{ background: 'var(--bg-tinted)' }}>
        <div className="stripe" />
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
          <div>
            <Reveal>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-red">Get a quote in {loc.name}</p>
              <h2 className="font-display uppercase leading-[1.02] text-[var(--white)]" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.6rem)' }}>
                Tell us what your vehicle is doing
              </h2>
              <div className="line-grow bg-red mt-6 h-1 w-24" />
              <p className="mt-6 max-w-md text-sm leading-relaxed text-[var(--light)]">
                Travelling from {loc.name}? {loc.drive}. Describe your symptoms, warning lights, or performance goals and we will confirm an appointment slot before you depart.
              </p>
            </Reveal>
            <Reveal delay={1}>
              <ul className="mt-8 space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <span className="text-red font-display text-lg">☏</span>
                  <a href={SITE.phoneHref} className="text-[var(--light)] hover:text-red">{SITE.phone}</a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red font-display text-lg">@</span>
                  <a href={`mailto:${SITE.email}`} className="text-[var(--light)] hover:text-red">{SITE.email}</a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red font-display text-lg">⌖</span>
                  <a href={SITE.googleMaps} target="_blank" rel="noreferrer" className="text-[var(--light)] hover:text-red">
                    {SITE.address} — see on Google Maps
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-red" />
                  <span className="text-xs uppercase tracking-wider text-[var(--light)] font-bold">{SITE.hours}</span>
                </li>
              </ul>
            </Reveal>
          </div>
          <Reveal delay={2}>
            <div className="border p-6 md:p-8" style={{ borderColor: 'var(--line)', background: 'var(--bg)' }}>
              <h3 className="font-display text-xl uppercase tracking-wide text-[var(--white)] mb-4">
                Inquire for {loc.name}
              </h3>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
