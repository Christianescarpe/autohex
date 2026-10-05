import { SITE } from '../data/site';
import { Reveal, usePageMeta } from '../components/Reveal';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  usePageMeta(
    'Contact Autohex — 24-Hour ECU Shop in Oton, Iloilo',
    'Contact Autohex for ECU remapping, module repair and diagnostics. Call +63 910 567 4999, message us on Facebook, or visit C1 Road, Abilay Sur, Oton. Open 24 hours.'
  );

  return (
    <main>
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-36 md:px-8">
        <Reveal>
          <p className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-red">
            <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-red" />
            {SITE.hours} — Contact
          </p>
          <h1 className="font-display uppercase leading-[0.98] text-[var(--white)]" style={{ fontSize: 'clamp(2.6rem, 7vw, 6rem)' }}>
            Talk to a specialist
          </h1>
          <div className="line-grow bg-red mt-6 h-1 w-24" />
        </Reveal>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-14 md:grid-cols-5 md:px-8 md:py-20">
        <div className="md:col-span-2">
          <Reveal>
            <ul className="space-y-8">
              <li>
                <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-red">Call / Text</h3>
                <a href={SITE.phoneHref} className="font-display mt-2 block text-2xl text-[var(--white)] hover:text-red md:text-3xl">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-red">Facebook — fastest response</h3>
                <a href={SITE.facebook} target="_blank" rel="noreferrer" className="mt-2 block text-base text-[var(--light)] underline decoration-red underline-offset-4 hover:text-red">
                  facebook.com/AutohexEcuTuningRemapping
                </a>
                <a href={SITE.messenger} target="_blank" rel="noreferrer" className="bg-red mt-4 inline-block px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white transition-transform hover:-translate-y-0.5">
                  Open Messenger
                </a>
              </li>
              <li>
                <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-red">Email</h3>
                <a href={`mailto:${SITE.email}`} className="mt-2 block text-base text-[var(--light)] hover:text-red">
                  {SITE.email}
                </a>
              </li>
              <li>
                <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-red">Shop</h3>
                <a href={SITE.googleMaps} target="_blank" rel="noreferrer" className="mt-2 block text-base leading-relaxed text-[var(--light)] hover:text-red">
                  {SITE.address}
                  <span className="mt-1 block text-xs uppercase tracking-[0.16em] text-red">
                    Open in Google Maps →
                  </span>
                </a>
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={1} className="md:col-span-3">
          <div className="border p-6 md:p-9" style={{ borderColor: 'var(--line)', background: 'var(--bg-tinted)' }}>
            <h2 className="font-display text-xl uppercase tracking-wide text-[var(--white)]">
              Send an inquiry
            </h2>
            <p className="mt-2 mb-6 text-sm">
              Include your vehicle's make, model, year and the symptoms — the more detail, the
              faster and more accurate our quote.
            </p>
            <ContactForm />
          </div>
        </Reveal>
      </section>
    </main>
  );
}
