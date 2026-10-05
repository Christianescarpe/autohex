import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router';
import { findService, SERVICES } from '../data/services';
import { LOCATIONS } from '../data/locations';
import { SITE } from '../data/site';
import { Reveal, usePageMeta } from '../components/Reveal';
import ContactForm from '../components/ContactForm';
import Marquee from '../components/Marquee';
import RichText from '../components/RichText';

const STEPS = [
  { n: '01', t: 'Message or Call', d: 'Tell us your vehicle make, model, year, and symptoms. We reply fast — 24 hours a day, 7 days a week.' },
  { n: '02', t: 'Diagnostic Assessment', d: 'We verify the fault with dealer-level scanners and oscilloscope checks before giving an honest, upfront quotation.' },
  { n: '03', t: 'Precision Repair & Tuning', d: 'Board-level repair, custom ECU remapping, or online module coding — with a complete backup of original files.' },
  { n: '04', t: 'Road Test & Verification', d: 'Live data logging under load, verification scan, and after-sales support so you drive away with complete confidence.' },
];

const REVIEWS = [
  {
    quote: 'Kinuha nila yung limp mode ng truck ko na dalawang shop na ang hindi maayos. Solid ang diagnostics.',
    who: 'Commercial Fleet Operator, Oton',
  },
  {
    quote: 'Napa-remap ko yung pickup ko — mas malakas humatak at mas tipid sa diesel. Highly recommended sa lahat.',
    who: 'Diesel Pickup Owner, Iloilo City',
  },
  {
    quote: 'ECU na sabi ng casa ay palitan ng 80k+, na-repair nila sa board level. Malaking tipid. Salamat Autohex!',
    who: 'SUV Owner, Guimbal',
  },
];

export default function ServicePage() {
  const { slug } = useParams();
  const service = findService(slug);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  usePageMeta(
    service ? service.metaTitle : 'Service | Autohex Iloilo',
    service?.metaDesc
  );

  if (!service) return <Navigate to="/services" replace />;

  const others = SERVICES.filter((s) => s.slug !== service.slug);

  const tickerItems = [
    service.name,
    'Open 24 Hours',
    'Dealer-Level Diagnostics',
    'Safe Software Backup',
    'C1 Road, Abilay Sur, Oton',
    'Cars • Trucks • Heavy Equipment',
  ];

  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative flex min-h-[85svh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.imageAlt || service.name}
            className="h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(10,6,5,0.55) 0%, rgba(10,6,5,0.4) 40%, rgba(10,6,5,0.98) 100%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(90deg, rgba(10,6,5,0.88) 0%, transparent 65%)' }}
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-36 md:px-8 md:pb-24">
          <Reveal>
            <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-[var(--light)]">
              <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-red" />
              <Link to="/services" className="hover:text-red transition-colors">Services</Link>
              <span className="text-red">/</span>
              <span className="text-[var(--white)]">{service.name}</span>
            </p>
          </Reveal>

          <Reveal delay={1}>
            <h1
              className="font-display max-w-5xl uppercase leading-[0.95] text-[var(--white)]"
              style={{ fontSize: 'clamp(2.6rem, 7vw, 6.2rem)' }}
            >
              {service.h1}
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <div className="mt-6 max-w-3xl text-base leading-relaxed text-[var(--light)] md:text-lg">
              <RichText content={service.intro} />
            </div>
          </Reveal>

          <Reveal delay={3}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={SITE.messenger}
                target="_blank"
                rel="noreferrer"
                className="bg-red px-7 py-3.5 text-center text-sm font-bold uppercase tracking-[0.14em] text-white transition-transform hover:-translate-y-0.5"
              >
                Message Us on Messenger
              </a>
              <a
                href={SITE.phoneHref}
                className="border px-7 py-3.5 text-center text-sm font-bold uppercase tracking-[0.14em] text-[var(--light)] transition-colors hover:border-red hover:text-red"
                style={{ borderColor: 'var(--line)' }}
              >
                Call {SITE.phone}
              </a>
              <a
                href={SITE.googleMaps}
                target="_blank"
                rel="noreferrer"
                className="border px-7 py-3.5 text-center text-sm font-bold uppercase tracking-[0.14em] text-[var(--light)] transition-colors hover:border-red hover:text-red"
                style={{ borderColor: 'var(--line)' }}
              >
                Directions (Oton)
              </a>
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              Open 24/7 • C1 Road, Abilay Sur, Oton, Iloilo • Fast Assessment
            </p>
          </Reveal>
        </div>
      </section>

      {/* MARQUEE TICKER */}
      <Marquee items={tickerItems} />

      <div className="stripe-thin" />

      {/* QUICK HIGHLIGHTS / PILLARS */}
      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div
            className="border p-6 transition-colors hover:border-red"
            style={{ borderColor: 'var(--line)', background: 'var(--bg-tinted)' }}
          >
            <p className="font-display text-2xl text-red">01</p>
            <h3 className="font-display mt-2 text-lg uppercase tracking-wide text-[var(--white)]">
              Common Signs
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-[var(--light)]">
              {service.symptoms.map((s) => (
                <li key={s} className="flex gap-2">
                  <span className="text-red font-bold">▸</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="border p-6 transition-colors hover:border-red"
            style={{ borderColor: 'var(--line)', background: 'var(--bg-tinted)' }}
          >
            <p className="font-display text-2xl text-red">02</p>
            <h3 className="font-display mt-2 text-lg uppercase tracking-wide text-[var(--white)]">
              What Is Included
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-[var(--light)]">
              {service.includes.map((s) => (
                <li key={s} className="flex gap-2">
                  <span className="text-red font-bold">▸</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="border p-6 transition-colors hover:border-red"
            style={{ borderColor: 'var(--line)', background: 'var(--bg-tinted)' }}
          >
            <p className="font-display text-2xl text-red">03</p>
            <h3 className="font-display mt-2 text-lg uppercase tracking-wide text-[var(--white)]">
              Vehicle Coverage
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-[var(--light)]">
              {service.vehicles}
            </p>
            <div className="mt-6 border-t pt-4" style={{ borderColor: 'var(--line)' }}>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Target Search Intent</p>
              <p className="mt-1 text-sm font-semibold text-[var(--white)]">{service.searchIntent}</p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT + STICKY SIDEBAR */}
      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
        <div className="grid gap-14 lg:grid-cols-3">
          {/* LEFT 2 COLUMNS: DETAILED SECTIONS & FAQS */}
          <div className="space-y-16 lg:col-span-2">
            {service.sections.map((sec, idx) => (
              <Reveal key={sec.heading} delay={idx % 2 === 0 ? 0 : 1}>
                <div className="content-block">
                  <h2
                    className="font-display uppercase tracking-wide text-[var(--white)]"
                    style={{ fontSize: 'clamp(1.6rem, 3.2vw, 2.4rem)' }}
                  >
                    {sec.heading}
                  </h2>
                  <div className="line-grow bg-red mb-6 mt-4 h-1 w-20" />

                  <div className="space-y-4 text-base leading-relaxed text-[var(--light)]">
                    {sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>
                        <RichText content={p} />
                      </p>
                    ))}
                  </div>

                  {sec.lists.length > 0 && (
                    <ul className="mt-6 space-y-3 border-l-2 border-red pl-5">
                      {sec.lists.map((item, lIdx) => (
                        <li key={lIdx} className="text-sm leading-relaxed text-[var(--light)]">
                          <RichText content={item} />
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}

            {/* FAQS SECTION */}
            {service.faqs && service.faqs.length > 0 && (
              <div className="border-t pt-14" style={{ borderColor: 'var(--line)' }}>
                <Reveal>
                  <p className="text-xs font-bold uppercase tracking-[0.26em] text-red">
                    Common Inquiries
                  </p>
                  <h2
                    className="font-display mt-2 uppercase tracking-wide text-[var(--white)]"
                    style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}
                  >
                    Frequently Asked Questions
                  </h2>
                  <div className="line-grow bg-red mb-8 mt-4 h-1 w-20" />
                </Reveal>

                <div className="space-y-4">
                  {service.faqs.map((faq, fIdx) => {
                    const isOpen = openFaq === fIdx;
                    return (
                      <div
                        key={fIdx}
                        className="border transition-colors"
                        style={{
                          borderColor: isOpen ? 'var(--red)' : 'var(--line)',
                          background: 'var(--bg-tinted)',
                        }}
                      >
                        <button
                          type="button"
                          onClick={() => setOpenFaq(isOpen ? null : fIdx)}
                          className="flex w-full items-center justify-between gap-4 p-5 text-left"
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
                            className="border-t px-5 pb-5 pt-3 text-sm leading-relaxed text-[var(--light)]"
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
            )}
          </div>

          {/* RIGHT COLUMN: STICKY CONVERSION SIDEBAR */}
          <aside className="space-y-8">
            <div
              className="border p-6 lg:sticky lg:top-28"
              style={{ borderColor: 'var(--line)', background: 'var(--bg-tinted)' }}
            >
              <div className="flex items-center justify-between border-b pb-4" style={{ borderColor: 'var(--line)' }}>
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[var(--light)]">
                  <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-red" />
                  {SITE.hours}
                </p>
                <span className="text-xs uppercase tracking-wider text-red font-bold">Oton, Iloilo</span>
              </div>

              <h3 className="font-display mt-5 text-2xl uppercase leading-tight text-[var(--white)]">
                Request an Assessment
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                Send your vehicle details, year, and symptoms. We give an honest evaluation before any work begins.
              </p>

              <div className="mt-6">
                <ContactForm compact />
              </div>

              <div className="mt-6 space-y-3 border-t pt-5" style={{ borderColor: 'var(--line)' }}>
                <a
                  href={SITE.messenger}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-red block w-full py-3 text-center text-xs font-bold uppercase tracking-[0.16em] text-white transition-transform hover:-translate-y-0.5"
                >
                  Direct Facebook Messenger
                </a>
                <a
                  href={SITE.phoneHref}
                  className="block w-full border py-3 text-center text-xs font-bold uppercase tracking-[0.16em] text-[var(--light)] transition-colors hover:border-red hover:text-red"
                  style={{ borderColor: 'var(--line)' }}
                >
                  Call {SITE.phone}
                </a>
              </div>

              <div className="mt-6 border-t pt-4 text-xs text-[var(--muted)]" style={{ borderColor: 'var(--line)' }}>
                <p className="font-semibold text-[var(--light)]">Workshop Location:</p>
                <p className="mt-1">{SITE.address}</p>
                <a
                  href={SITE.googleMaps}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-red underline hover:text-white"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* 4-STEP PROCESS (HOMEPAGE DESIGN) */}
      <section style={{ background: 'var(--bg-tinted)' }}>
        <div className="stripe-thin" />
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-red">
              Transparent Workflow
            </p>
            <h2
              className="font-display mt-2 uppercase leading-[1.02] text-[var(--white)]"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)' }}
            >
              How It Works
            </h2>
            <div className="line-grow bg-red mb-12 mt-4 h-1 w-20" />
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <div
                key={step.n}
                className="border p-6 transition-all hover:border-red"
                style={{ borderColor: 'var(--line)', background: 'var(--bg)' }}
              >
                <span className="font-display text-3xl text-red">{step.n}</span>
                <h3 className="font-display mt-3 text-lg uppercase tracking-wide text-[var(--white)]">
                  {step.t}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--light)]">
                  {step.d}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="stripe-thin" />
      </section>

      {/* REVIEWS SECTION (HOMEPAGE DESIGN) */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <Reveal>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-red">
                Verified Customer Feedback
              </p>
              <h2
                className="font-display mt-2 uppercase text-[var(--white)]"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
              >
                Real Results in Iloilo
              </h2>
            </div>
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold uppercase tracking-[0.16em] text-red hover:underline"
            >
              View all 2,000+ Facebook reviews →
            </a>
          </div>
          <div className="line-grow bg-red mb-10 mt-4 h-1 w-20" />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {REVIEWS.map((rev, i) => (
            <div
              key={i}
              className="border p-6"
              style={{ borderColor: 'var(--line)', background: 'var(--bg-tinted)' }}
            >
              <p className="font-display text-2xl text-red leading-none">“</p>
              <p className="mt-2 text-sm italic leading-relaxed text-[var(--light)]">
                {rev.quote}
              </p>
              <p className="mt-4 text-xs font-bold uppercase tracking-wider text-[var(--white)]">
                — {rev.who}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICE AREAS COVERED */}
      <section style={{ background: 'var(--bg-tinted)' }}>
        <div className="stripe-thin" />
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
          <h2 className="font-display text-xl uppercase tracking-wide text-[var(--white)]">
            Service Available Across Iloilo
          </h2>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Vehicle owners from across Panay visit our Oton facility via C1 Road:
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="border px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--light)] transition-colors hover:border-red hover:text-red"
                style={{ borderColor: 'var(--line)', background: 'var(--bg)' }}
              >
                {loc.name} →
              </Link>
            ))}
          </div>
        </div>
        <div className="stripe-thin" />
      </section>

      {/* RELATED SERVICES LIST */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <h2 className="font-display text-xl uppercase tracking-wide text-[var(--white)]">
          Explore Other Automotive Services
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="border p-5 transition-all hover:border-red hover:-translate-y-0.5"
              style={{ borderColor: 'var(--line)', background: 'var(--bg-tinted)' }}
            >
              <span className="font-display text-base uppercase tracking-wide text-[var(--white)] hover:text-red">
                {s.name}
              </span>
              <p className="mt-2 text-xs text-[var(--muted)] line-clamp-2">{s.short}</p>
              <span className="mt-4 block font-display text-xs text-red uppercase tracking-wider">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
