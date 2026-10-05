import { Link } from 'react-router';
import Marquee from '../components/Marquee';
import Gauge from '../components/Gauge';
import ContactForm from '../components/ContactForm';
import { Reveal, usePageMeta } from '../components/Reveal';
import { LOCATIONS } from '../data/locations';
import { SITE } from '../data/site';
import { HOME_PAGE } from '../data/sheetContent';
import RichText from '../components/RichText';

const TICKER = [
  'ECU Remapping',
  'DPF • EGR • AdBlue',
  'Module Repair',
  'Diagnostics & Coding',
  'Immo Off',
  'ABS • BCM • TCM • EPS',
  'Auto Electrical Repair',
  'Diesel Engine Diagnostics',
  'Car Repair',
  'Preventive Maintenance',
  'Open 24 Hours',
];

const STEPS_FROM_SHEET = [
  {
    n: '01',
    t: 'Message with vehicle details',
    d: 'Include the make, model, year, engine, transmission, location, and symptoms.',
  },
  {
    n: '02',
    t: 'Agree on the assessment',
    d: 'Confirm vehicle support, appointment availability, initial charges, and what records or keys to bring.',
  },
  {
    n: '03',
    t: 'Review the proposed work',
    d: 'Discuss the findings, quotation, and any repair, remapping, or programming needed before giving authorization.',
  },
  {
    n: '04',
    t: 'Confirm verification & collection',
    d: 'Ask how the completed work will be checked, what documentation will be provided, and whether follow-up is recommended. Timing depends on the fault, required parts, and supported procedure, so confirm collection before arranging your return journey.',
  },
];

const CORE_SERVICES_TEXT = [
  {
    slug: 'ecu-remapping',
    title: 'ECU Remapping and Chip Tuning',
    desc: 'Explore [ECU remapping in Iloilo](/services/ecu-remapping/) for a supported vehicle and a clear driving goal. Discuss throttle response, usable performance and your normal load or journey pattern. Existing faults should be investigated first. Power gains and fuel savings depend on the engine, condition, calibration and use; no fixed percentage applies to every vehicle.',
  },
  {
    slug: 'ecu-repair',
    title: 'ECU Repair, Cloning and Programming Enquiries',
    desc: 'A suspected engine-computer fault needs evidence before a replacement is purchased. Read about [ECU repair assessment](/services/ecu-repair/) and send previous test findings, safely obtained label photographs and repair history. Ask whether repair, replacement, cloning or programming is supported for your particular controller, and whether the complete vehicle is needed for assessment.',
  },
  {
    slug: 'automotive-diagnostics',
    title: 'Computer Diagnostics and Coding',
    desc: 'A warning code is a starting point, not a complete diagnosis. Our [automotive diagnostics page](/services/automotive-diagnostics/) explains how symptoms, stored information and relevant checks help guide the next step. Describe when the fault occurs and whether it followed servicing, water exposure, battery work or an earlier programming attempt. Confirm system coverage before booking.',
  },
  {
    slug: 'dpf-egr-adblue',
    title: 'DPF, EGR and AdBlue Concerns',
    desc: 'Reduced power or an emissions warning calls for the correct model-specific assessment. Explore [DPF, EGR and AdBlue services](/services/dpf-egr-adblue/) to prepare your enquiry. Share the exact dashboard message and previous work. The aim is to investigate the cause and discuss supported options for correct operation, rather than treating a hidden warning as proof of repair.',
  },
  {
    slug: 'module-repair-programming',
    title: 'ABS, BCM, TCM, EPS, Airbag and Cluster Enquiries',
    desc: 'Different modules control different vehicle functions, and each requires its own compatibility checks. Visit [module repair and programming](/services/module-repair-programming/) to describe the affected system. Ask which controllers and procedures are supported. For braking, steering or restraint-system concerns, a cleared warning alone does not establish that the required safety repair is complete.',
  },
  {
    slug: 'immo-dtc-solutions',
    title: 'Immobilizer and DTC Solutions',
    desc: 'If a security message appears or a trouble code keeps returning, review [IMMO and DTC diagnosis](/services/immo-dtc-solutions/). Explain whether the engine cranks, which keys are available and what has already been tried. Security-related work requires appropriate ownership or authorization evidence. Begin with legitimate fault assessment and preservation of the vehicle’s intended functions.',
  },
];

const COMPLEMENTARY_SERVICES = [
  {
    slug: 'auto-electrical-repair',
    name: 'Auto Electrical Repair',
    desc: 'For starting, charging or wiring symptoms, battery drain, and sensor harness faults.',
  },
  {
    slug: 'diesel-engine-diagnostics',
    name: 'Diesel Engine Diagnostics',
    desc: 'For common-rail injector issues, smoke, boost pressure, and rough running.',
  },
  {
    slug: 'car-repair',
    name: 'Car Repair',
    desc: 'For mechanical repairs, brake systems, cooling, suspension, and driveline maintenance.',
  },
  {
    slug: 'preventive-maintenance',
    name: 'Preventive Maintenance',
    desc: 'For scheduled care, fluid flushes, filters, and computerized health checks.',
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

export default function Home() {
  usePageMeta(
    HOME_PAGE.metaTitle || 'ECU Tuning, Remapping & Module Repair | Autohex Oton, Iloilo',
    HOME_PAGE.metaDesc || 'ECU remapping, module repair, diagnostics & programming in Oton, Iloilo. DPF, EGR, AdBlue, immo off. Cars, trucks & heavy equipment. Open 24 hours.'
  );

  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-dash.jpg"
            alt="Vehicle dashboard at night"
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

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-24">
          <Reveal>
            <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-[var(--light)]">
              <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-red" />
              {SITE.hours} • Oton, Iloilo
            </p>
          </Reveal>

          <Reveal delay={1}>
            <p className="font-display text-xl uppercase tracking-widest text-red md:text-2xl">
              Your engine, unlocked.
            </p>
            <h1
              className="font-display mt-2 max-w-5xl uppercase leading-[0.95] text-[var(--white)]"
              style={{ fontSize: 'clamp(2.5rem, 7.5vw, 6.5rem)' }}
            >
              ECU Tuning, Remapping and Module Repair in Oton, Iloilo
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-[var(--light)] md:text-lg">
              Better driving starts with understanding your vehicle. Autohex ECU Tuning & Remapping focuses on automotive software, electronics and repair enquiries in Oton, Iloilo. Whether you want to explore a remap, investigate a warning light or discuss a controller fault, tell us what your vehicle is doing. Enquiries can cover cars, trucks and heavy equipment, with support confirmed for the exact model and system. Start with your vehicle details and the problem you want to solve, then discuss the appropriate assessment before authorizing work.
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
                Message Us on Facebook
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
                Directions (C1 Road, Oton)
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MARQUEE */}
      <Marquee items={TICKER} />

      {/* GAUGES / STATS */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-12 sm:grid-cols-3">
          <Reveal><Gauge label="Potential power gain*" value="+30%" /></Reveal>
          <Reveal delay={1}><Gauge label="Potential fuel savings*" value="15%" /></Reveal>
          <Reveal delay={2}><Gauge label="Hours open daily" value="24/7" /></Reveal>
        </div>
        <p className="mt-8 text-center text-xs" style={{ color: 'rgba(203,198,185,0.5)' }}>
          *Power gains and fuel savings depend on the engine, condition, calibration and use; no fixed percentage applies to every vehicle.
        </p>
      </section>

      {/* SECTION 1: WHAT WE DO (FULL CONTENT FROM SHEET) */}
      <section style={{ background: 'var(--bg-tinted)' }}>
        <div className="stripe-thin" />
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-red">Core Capabilities</p>
            <h2
              className="font-display max-w-4xl uppercase leading-[1.02] text-[var(--white)]"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            >
              What we do: ECU tuning, diagnostics and electronic repair
            </h2>
            <div className="line-grow bg-red mt-6 h-1 w-24" />
          </Reveal>

          {/* 6 Core Categories with Sheet Copy */}
          <div className="mt-12 space-y-8">
            {CORE_SERVICES_TEXT.map((item, i) => (
              <Reveal key={item.slug} delay={(i % 2) as 0 | 1}>
                <div
                  className="border p-6 md:p-8 transition-colors hover:border-red"
                  style={{ borderColor: 'var(--line)', background: 'var(--bg)' }}
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-display text-base text-red">0{i + 1}</span>
                        <h3 className="font-display text-xl uppercase tracking-wide text-[var(--white)] md:text-2xl">
                          {item.title}
                        </h3>
                      </div>
                      <div className="mt-3 text-sm leading-relaxed text-[var(--light)] md:text-base">
                        <RichText content={item.desc} />
                      </div>
                    </div>
                    <Link
                      to={`/services/${item.slug}`}
                      className="inline-flex items-center gap-2 whitespace-nowrap text-xs font-bold uppercase tracking-[0.16em] text-red hover:underline md:self-center"
                    >
                      View Service Guide →
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Complementary Services Callout from Sheet */}
          <div className="mt-16 border-t pt-12" style={{ borderColor: 'var(--line)' }}>
            <Reveal>
              <h3 className="font-display text-2xl uppercase tracking-wide text-[var(--white)]">
                Need help beyond the six core categories?
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--light)] md:text-base">
                Ask about <Link to="/services/auto-electrical-repair" className="text-red font-semibold hover:underline">auto electrical repair</Link> for starting, charging or wiring symptoms; <Link to="/services/diesel-engine-diagnostics" className="text-red font-semibold hover:underline">diesel engine diagnostics</Link> for poor running; <Link to="/services/car-repair" className="text-red font-semibold hover:underline">car repair</Link> for mechanical concerns; and <Link to="/services/preventive-maintenance" className="text-red font-semibold hover:underline">preventive maintenance</Link> for scheduled care. Confirm the exact work available before arranging a visit or buying parts.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {COMPLEMENTARY_SERVICES.map((s, idx) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="border p-5 transition-all hover:border-red hover:-translate-y-0.5"
                  style={{ borderColor: 'var(--line)', background: 'var(--bg)' }}
                >
                  <span className="font-display text-xs text-red">0{idx + 7}</span>
                  <h4 className="font-display mt-2 text-lg uppercase tracking-wide text-[var(--white)]">
                    {s.name}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">
                    {s.desc}
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

      {/* SECTION 2: WHY CHOOSE A DIAGNOSIS-LED APPROACH */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
        <Reveal>
          <div className="img-grade aspect-[4/5]">
            <img src="/images/engine-night.jpg" alt="Tuned engine bay at night" loading="lazy" />
          </div>
        </Reveal>
        <div className="flex flex-col justify-center">
          <Reveal>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-red">Honest Standards</p>
            <h2
              className="font-display uppercase leading-[1.02] text-[var(--white)]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
            >
              Why choose a diagnosis-led approach?
            </h2>
            <div className="line-grow bg-red mt-6 h-1 w-24" />
          </Reveal>
          <Reveal delay={1}>
            <div className="mt-6 text-base leading-relaxed text-[var(--light)]">
              <p>
                Vehicle electronics, software and mechanical condition need to be considered together. Start by explaining the problem, then ask what findings support the proposed work. Discuss the assessment charge and repair estimate before authorizing the job.
              </p>
              <p className="mt-4">
                Where programming is involved, ask whether the original data can be backed up and what recovery options apply to that specific system. Clear scope, compatibility checks and agreed verification give you a more useful basis for deciding than a broad promise that every change is reversible.
              </p>
            </div>

            <ul className="mt-8 space-y-4">
              {[
                ['Integrated Electronics & Mechanicals', 'Sensors, software maps, and physical engine health evaluated as one unified system.'],
                ['Agreed Verification', 'Transparent test data and bench testing before you authorize or accept the vehicle.'],
                ['Safe Calibration Backup', 'Original software retained to ensure recovery options apply to your specific system.'],
                ['Open 24 Hours Daily', 'Always reachable on C1 Road for urgent roadside limp mode, no-start, and electronic faults.'],
              ].map(([t, d]) => (
                <li key={t} className="border-l-2 border-red pl-5">
                  <h3 className="font-display text-base uppercase tracking-wide text-[var(--white)]">{t}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--muted)]">{d}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* SECTION 3: HOW IT WORKS: FROM FIRST MESSAGE TO COLLECTION */}
      <section style={{ background: 'var(--bg-tinted)' }}>
        <div className="stripe-thin" />
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

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS_FROM_SHEET.map((s, i) => (
              <Reveal key={s.n} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <div
                  className="flex h-full flex-col justify-between border p-7 transition-all hover:border-red"
                  style={{ borderColor: 'var(--line)', background: 'var(--bg)' }}
                >
                  <div>
                    <span className="font-display text-4xl text-red">{s.n}</span>
                    <h3 className="font-display mt-4 text-lg uppercase tracking-wide text-[var(--white)]">
                      {s.t}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--light)]">
                      {s.d}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: IN THE SHOP: UNDERSTAND THE WORK BEHIND THE SERVICE */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-red">Technical Rigor</p>
          <h2
            className="font-display uppercase leading-[1.02] text-[var(--white)]"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
          >
            In the shop: understand the work behind the service
          </h2>
          <div className="line-grow bg-red mt-6 h-1 w-24" />
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-[var(--light)]">
            Diagnostics, calibration work and module assessment involve different tasks. When discussing a job, ask which checks or procedures are relevant to your vehicle and how the findings will be explained. Photographs and documented examples can help show the work involved, but your own vehicle still needs its own assessment. A similar-looking fault on another car does not establish the same repair.
          </p>
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
                <figcaption
                  className="absolute bottom-0 left-0 z-10 w-full p-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--light)]"
                  style={{ background: 'linear-gradient(0deg, rgba(10,6,5,0.85), transparent)' }}
                >
                  {cap}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION 5: CUSTOMER EXPERIENCES AND WORKSHOP UPDATES */}
      <section style={{ background: 'var(--bg-tinted)' }}>
        <div className="stripe-thin" />
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-red">Workshop Track Record</p>
            <h2
              className="font-display uppercase leading-[1.02] text-[var(--white)]"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            >
              Customer experiences and workshop updates
            </h2>
            <div className="line-grow bg-red mt-6 h-1 w-24" />
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-[var(--light)]">
              Visit the <a href={SITE.facebook} target="_blank" rel="noreferrer" className="text-red font-semibold underline">Autohex Facebook page</a> for available workshop posts and customer feedback. Look for examples relevant to your vehicle and ask about the context behind a repair or tuning result. An individual customer’s experience is useful background, but it should not be treated as a promised outcome for another engine, controller or fault.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.who} delay={(i % 3) as 0 | 1 | 2}>
                <blockquote
                  className="flex h-full flex-col justify-between border p-7"
                  style={{ borderColor: 'var(--line)', background: 'var(--bg)' }}
                >
                  <p className="text-base leading-relaxed text-[var(--light)]">“{r.quote}”</p>
                  <footer className="mt-5">
                    <div className="text-red text-sm tracking-[0.2em]">★★★★★</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.18em] text-[var(--white)] font-bold">
                      {r.who}
                    </div>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noreferrer"
                className="inline-block border px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[var(--light)] transition-colors hover:border-red hover:text-red"
                style={{ borderColor: 'var(--line)' }}
              >
                Follow Autohex on Facebook ({SITE.followers} followers) →
              </a>
              <span className="text-xs text-[var(--muted)]">
                {SITE.rating} on Facebook Community
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 6: BASED IN OTON, WELCOMING ENQUIRIES FROM AROUND ILOILO */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-red">Panay Island Reach</p>
          <h2
            className="font-display uppercase leading-[1.02] text-[var(--white)]"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
          >
            Based in Oton, welcoming enquiries from around Iloilo
          </h2>
          <div className="line-grow bg-red mt-6 h-1 w-24" />
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-[var(--light)]">
            <p>
              Find visit-planning information for{' '}
              <Link to="/locations/oton" className="text-red font-semibold hover:underline">Oton</Link>,{' '}
              <Link to="/locations/leganes" className="text-red font-semibold hover:underline">Leganes</Link>,{' '}
              <Link to="/locations/pavia" className="text-red font-semibold hover:underline">Pavia</Link>,{' '}
              <Link to="/locations/tigbauan" className="text-red font-semibold hover:underline">Tigbauan</Link>,{' '}
              <Link to="/locations/guimbal" className="text-red font-semibold hover:underline">Guimbal</Link>,{' '}
              <Link to="/locations/san-miguel" className="text-red font-semibold hover:underline">San Miguel</Link>,{' '}
              <Link to="/locations/santa-barbara" className="text-red font-semibold hover:underline">Santa Barbara</Link> and{' '}
              <Link to="/locations/iloilo-city" className="text-red font-semibold hover:underline">Iloilo City</Link>, including{' '}
              <Link to="/locations/iloilo-city/mandurriao" className="text-red font-semibold hover:underline">Mandurriao</Link>.
              These service-area pages help prepare an enquiry; they do not represent separate branches in each location.
            </p>
            <p>
              Request the current workshop pin and receiving arrangements before travelling. Your route depends on the starting barangay and current road conditions. If the vehicle overheats, stalls or has a serious braking concern, discuss suitable transport. Collection, towing and mobile attendance need separate confirmation.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-3">
          {LOCATIONS.map((l) => (
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

      {/* SECTION 7: GET A QUOTE: TELL US WHAT YOUR VEHICLE IS DOING */}
      <section style={{ background: 'var(--bg-tinted)' }}>
        <div className="stripe" />
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
          <div>
            <Reveal>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-red">Inquiries & Quotes</p>
              <h2
                className="font-display uppercase leading-[1.02] text-[var(--white)]"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.6rem)' }}
              >
                Get a quote: tell us what your vehicle is doing
              </h2>
              <div className="line-grow bg-red mt-6 h-1 w-24" />

              <div className="mt-6 space-y-4 text-sm leading-relaxed text-[var(--light)]">
                <p>
                  Contact Autohex at <a href={SITE.phoneHref} className="text-red font-semibold">{SITE.phone}</a> or <a href={`mailto:${SITE.email}`} className="text-red font-semibold">{SITE.email}</a>. The workshop address is <a href={SITE.googleMaps} target="_blank" rel="noreferrer" className="text-red underline font-semibold">{SITE.address}</a>. Confirm current opening hours and your appointment before setting off, particularly for an evening visit or a vehicle arriving by transport.
                </p>
                <p>
                  <a href={SITE.messenger} target="_blank" rel="noreferrer" className="text-red font-semibold underline">Message Autohex on Messenger</a> with warning photographs, previous scan reports and recent repair details. Describe the symptom rather than guessing which component has failed. Ask about the assessment fee, supported service and next available appointment.
                </p>
                <p className="font-medium text-[var(--white)]">
                  Not sure which service to choose? Say whether the vehicle starts, how it behaves and when the problem began. That is enough to begin a useful conversation about what should happen next.
                </p>
              </div>
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
                    {SITE.address} — View Google Maps Location
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
                Send an Online Inquiry
              </h3>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
