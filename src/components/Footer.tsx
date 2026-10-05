import { Link } from 'react-router';
import { SITE } from '../data/site';
import { SERVICES } from '../data/services';
import { LOCATIONS } from '../data/locations';

const FbIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.9h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
  </svg>
);
const PinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
  </svg>
);
const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.4 11.4 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
  </svg>
);

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-panel)' }}>
      <div className="stripe" />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-4 md:px-8">
        <div>
          <img
            src="/images/autohex-logo.png"
            alt="Autohex logo"
            className="mb-5 h-14 w-auto rounded-sm bg-white/95 px-2 py-1"
          />
          <p className="text-sm leading-relaxed">
            Automotive Software, Electronics & Module Repair Specialist. Cars • Trucks • Heavy
            Equipment. Open 24 hours in Oton, Iloilo.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook page"
              className="flex h-10 w-10 items-center justify-center border text-[var(--light)] transition-colors hover:border-red hover:text-red"
              style={{ borderColor: 'var(--line)' }}
            >
              <FbIcon />
            </a>
            <a
              href={SITE.googleMaps}
              target="_blank"
              rel="noreferrer"
              aria-label="Google Maps listing"
              className="flex h-10 w-10 items-center justify-center border text-[var(--light)] transition-colors hover:border-red hover:text-red"
              style={{ borderColor: 'var(--line)' }}
            >
              <PinIcon />
            </a>
            <a
              href={SITE.phoneHref}
              aria-label="Call us"
              className="flex h-10 w-10 items-center justify-center border text-[var(--light)] transition-colors hover:border-red hover:text-red"
              style={{ borderColor: 'var(--line)' }}
            >
              <PhoneIcon />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display mb-5 text-sm uppercase tracking-[0.2em] text-[var(--light)]">
            Services
          </h4>
          <ul className="space-y-2.5 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="transition-colors hover:text-red">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display mb-5 text-sm uppercase tracking-[0.2em] text-[var(--light)]">
            Areas We Serve
          </h4>
          <ul className="space-y-2.5 text-sm">
            {LOCATIONS.map((l) => (
              <li key={l.slug}>
                <Link to={`/locations/${l.slug}`} className="transition-colors hover:text-red">
                  {l.name}, {l.region}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display mb-5 text-sm uppercase tracking-[0.2em] text-[var(--light)]">
            Contact
          </h4>
          <ul className="space-y-3 text-sm">
            <li>{SITE.address}</li>
            <li>
              <a href={SITE.phoneHref} className="hover:text-red">{SITE.phone}</a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-red">{SITE.email}</a>
            </li>
            <li className="flex items-center gap-2">
              <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-red" />
              {SITE.hours}
            </li>
          </ul>
        </div>
      </div>
      <div
        className="border-t py-5 text-center text-xs uppercase tracking-[0.18em]"
        style={{ borderColor: 'var(--line)' }}
      >
        © {new Date().getFullYear()} {SITE.fullName} • Oton, Iloilo, Philippines
      </div>
    </footer>
  );
}
