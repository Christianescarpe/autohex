import { Link } from 'react-router';
import { SERVICES } from '../data/services';
import { Reveal, usePageMeta } from '../components/Reveal';
import Marquee from '../components/Marquee';

export default function ServicesIndex() {
  usePageMeta(
    'Services — ECU Remapping, Module Repair, Diagnostics & Mechanical Care | Autohex Iloilo',
    'Explore Autohex services: ECU remapping, board-level ECU repair, computer diagnostics, DPF/EGR/AdBlue, module coding, auto electrical, diesel diagnostics, and preventive maintenance in Oton, Iloilo. Open 24 hours.'
  );

  const coreServices = SERVICES.slice(0, 6);
  const additionalServices = SERVICES.slice(6);

  return (
    <main>
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-36 md:px-8">
        <Reveal>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-red">Comprehensive Automotive Capabilities</p>
          <h1 className="font-display uppercase leading-[0.98] text-[var(--white)]" style={{ fontSize: 'clamp(2.6rem, 7vw, 6rem)' }}>
            Software, Electronics<br />& Mechanical Specialists
          </h1>
          <div className="line-grow bg-red mt-6 h-1 w-24" />
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-[var(--light)]">
            Cars, trucks, and heavy machinery. From board-level micro-soldering and custom ECU remapping to electrical fault-tracing and scheduled engine maintenance — we apply dealer-grade diagnostic precision to every job.
          </p>
        </Reveal>
      </section>

      <Marquee items={['ECU Remap', 'ABS • BCM • TCM', 'Diagnostics & Coding', 'DPF • EGR • AdBlue', 'Auto Electrical', 'Diesel Diagnostics', 'Car Repair', 'Maintenance']} />

      {/* CORE ELECTRONICS & CALIBRATION */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.26em] text-red">Core Specializations</p>
          <h2 className="font-display mt-2 uppercase text-[var(--white)]" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Electronics, Modules & Software Calibration
          </h2>
          <div className="line-grow bg-red mb-12 mt-4 h-1 w-20" />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {coreServices.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 2) as 0 | 1}>
              <Link
                to={`/services/${s.slug}`}
                className="group block border transition-colors hover:border-red"
                style={{ borderColor: 'var(--line)', background: 'var(--bg-tinted)' }}
              >
                <div className="img-grade aspect-[16/9]">
                  <img src={s.image} alt={s.name} loading="lazy" />
                </div>
                <div className="p-6">
                  <span className="font-display text-sm text-red">0{i + 1}</span>
                  <h3 className="font-display mt-1 text-xl uppercase tracking-wide text-[var(--light)] transition-colors group-hover:text-red md:text-2xl">
                    {s.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{s.short}</p>
                  <span className="mt-4 inline-block text-xs font-bold uppercase tracking-[0.16em] text-red">
                    Explore service & FAQs →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* ADDITIONAL MECHANICAL, ELECTRICAL & MAINTENANCE */}
        <div className="mt-24 border-t pt-16" style={{ borderColor: 'var(--line)' }}>
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-red">Complementary Scope</p>
            <h2 className="font-display mt-2 uppercase text-[var(--white)]" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Electrical, Mechanical & Preventive Care
            </h2>
            <div className="line-grow bg-red mb-12 mt-4 h-1 w-20" />
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {additionalServices.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 2) as 0 | 1}>
                <Link
                  to={`/services/${s.slug}`}
                  className="group block border transition-colors hover:border-red"
                  style={{ borderColor: 'var(--line)', background: 'var(--bg-tinted)' }}
                >
                  <div className="img-grade aspect-[16/9]">
                    <img src={s.image} alt={s.name} loading="lazy" />
                  </div>
                  <div className="p-6">
                    <span className="font-display text-sm text-red">0{coreServices.length + i + 1}</span>
                    <h3 className="font-display mt-1 text-xl uppercase tracking-wide text-[var(--light)] transition-colors group-hover:text-red md:text-2xl">
                      {s.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{s.short}</p>
                    <span className="mt-4 inline-block text-xs font-bold uppercase tracking-[0.16em] text-red">
                      Explore service & FAQs →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
