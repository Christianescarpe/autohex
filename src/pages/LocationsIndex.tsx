import { Link } from 'react-router';
import { LOCATIONS } from '../data/locations';
import { SITE } from '../data/site';
import { Reveal, usePageMeta } from '../components/Reveal';

export default function LocationsIndex() {
  usePageMeta(
    'Areas We Serve — Oton, Iloilo City & Nearby Towns | Autohex',
    'Autohex serves Oton, Leganes, Tigbauan, Guimbal, Pavia, San Miguel, Santa Barbara, Iloilo City and Mandurriao with ECU remapping, module repair and diagnostics. Open 24 hours.'
  );

  return (
    <main>
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-36 md:px-8">
        <Reveal>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-red">Areas we serve</p>
          <h1 className="font-display uppercase leading-[0.98] text-[var(--white)]" style={{ fontSize: 'clamp(2.6rem, 7vw, 6rem)' }}>
            All of Iloilo.<br />One shop. 24 hours.
          </h1>
          <div className="line-grow bg-red mt-6 h-1 w-24" />
          <p className="mt-6 max-w-2xl text-base leading-relaxed">
            Our shop is on {SITE.address} — but our customers come from all over the province.
            Message us first and we'll be ready when you arrive.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3" style={{ background: 'var(--line)' }}>
          {LOCATIONS.map((l, i) => (
            <Reveal key={l.slug} delay={(i % 3) as 0 | 1 | 2}>
              <Link
                to={`/locations/${l.slug}`}
                className="group flex h-full flex-col justify-between p-7 transition-colors"
                style={{ background: 'var(--bg)' }}
              >
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-red">{l.region}</span>
                  <h2 className="font-display mt-2 text-2xl uppercase tracking-wide text-[var(--light)] transition-colors group-hover:text-red">
                    {l.name}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed">{l.blurb}</p>
                </div>
                <span className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-red">
                  ECU services in {l.name} →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
