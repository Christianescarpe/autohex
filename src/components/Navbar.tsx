import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { SITE } from '../data/site';
import { SERVICES } from '../data/services';
import { LOCATIONS } from '../data/locations';

const ChevronDown = ({ className = 'h-3.5 w-3.5' }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </svg>
);

export default function Navbar() {
  const [openMobile, setOpenMobile] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'services' | 'locations' | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const loc = useLocation();
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const coreServices = SERVICES.slice(0, 6);
  const additionalServices = SERVICES.slice(6);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setOpenMobile(false);
    setActiveDropdown(null);
    setMobileServicesOpen(false);
    setMobileLocationsOpen(false);
    window.scrollTo(0, 0);
  }, [loc.pathname]);

  const handleMouseEnter = (menu: 'services' | 'locations') => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const isServicesActive = loc.pathname.startsWith('/services');
  const isLocationsActive = loc.pathname.startsWith('/locations');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md shadow-2xl' : ''
      }`}
      style={{
        background: scrolled ? 'rgba(10,6,5,0.92)' : 'rgba(10,6,5,0.7)',
        borderBottom: scrolled ? '1px solid var(--line)' : '1px solid rgba(229,222,216,0.1)',
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/images/autohex-logo.png"
            alt="Autohex — ECU Repair, Remap, Diagnostic, Programming"
            className="h-10 w-auto rounded-sm bg-white/95 px-2 py-1 md:h-12"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-7 lg:flex">
          {/* HOME */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-[13px] font-semibold uppercase tracking-[0.18em] transition-colors ${
                isActive ? 'text-red' : 'text-[var(--light)] hover:text-red'
              }`
            }
          >
            Home
          </NavLink>

          {/* SERVICES DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('services')}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center gap-1">
              <Link
                to="/services"
                className={`text-[13px] font-semibold uppercase tracking-[0.18em] transition-colors flex items-center gap-1.5 py-2 ${
                  isServicesActive || activeDropdown === 'services'
                    ? 'text-red'
                    : 'text-[var(--light)] hover:text-red'
                }`}
              >
                Services
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    activeDropdown === 'services' ? 'rotate-180 text-red' : ''
                  }`}
                />
              </Link>
            </div>

            {/* MEGA DROPDOWN PANEL */}
            {activeDropdown === 'services' && (
              <div
                className="absolute left-1/2 -translate-x-1/2 top-full w-[640px] pt-2"
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className="rounded-sm border p-6 shadow-2xl backdrop-blur-xl"
                  style={{
                    background: 'rgba(14, 10, 9, 0.98)',
                    borderColor: 'var(--line)',
                  }}
                >
                  <div className="grid grid-cols-2 gap-8">
                    {/* CORE ELECTRONICS */}
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-red border-b pb-2" style={{ borderColor: 'var(--line)' }}>
                        Electronics & Software
                      </p>
                      <ul className="mt-3 space-y-2">
                        {coreServices.map((s) => (
                          <li key={s.slug}>
                            <Link
                              to={`/services/${s.slug}`}
                              className="group block text-[13px] text-[var(--light)] hover:text-white transition-colors py-1"
                            >
                              <span className="font-semibold block group-hover:text-red transition-colors">
                                {s.name}
                              </span>
                              <span className="text-[11px] text-[var(--muted)] line-clamp-1">
                                {s.short}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* MECHANICAL & MAINTENANCE */}
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-red border-b pb-2" style={{ borderColor: 'var(--line)' }}>
                        Mechanical & Electrical
                      </p>
                      <ul className="mt-3 space-y-2">
                        {additionalServices.map((s) => (
                          <li key={s.slug}>
                            <Link
                              to={`/services/${s.slug}`}
                              className="group block text-[13px] text-[var(--light)] hover:text-white transition-colors py-1"
                            >
                              <span className="font-semibold block group-hover:text-red transition-colors">
                                {s.name}
                              </span>
                              <span className="text-[11px] text-[var(--muted)] line-clamp-1">
                                {s.short}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 border-t pt-4" style={{ borderColor: 'var(--line)' }}>
                        <Link
                          to="/services"
                          className="font-display inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-red hover:underline"
                        >
                          View All 10 Services Overview →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* AREAS WE SERVE DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('locations')}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center gap-1">
              <Link
                to="/locations"
                className={`text-[13px] font-semibold uppercase tracking-[0.18em] transition-colors flex items-center gap-1.5 py-2 ${
                  isLocationsActive || activeDropdown === 'locations'
                    ? 'text-red'
                    : 'text-[var(--light)] hover:text-red'
                }`}
              >
                Areas We Serve
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    activeDropdown === 'locations' ? 'rotate-180 text-red' : ''
                  }`}
                />
              </Link>
            </div>

            {/* LOCATIONS DROPDOWN PANEL */}
            {activeDropdown === 'locations' && (
              <div
                className="absolute left-1/2 -translate-x-1/2 top-full w-[540px] pt-2"
                onMouseEnter={() => handleMouseEnter('locations')}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className="rounded-sm border p-6 shadow-2xl backdrop-blur-xl"
                  style={{
                    background: 'rgba(14, 10, 9, 0.98)',
                    borderColor: 'var(--line)',
                  }}
                >
                  <div className="flex items-center justify-between border-b pb-2" style={{ borderColor: 'var(--line)' }}>
                    <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-red">
                      Iloilo Town Guides & Routes
                    </p>
                    <span className="text-[11px] text-[var(--muted)]">Workshop: C1 Road, Oton</span>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
                    {LOCATIONS.map((l) => (
                      <Link
                        key={l.slug}
                        to={`/locations/${l.slug}`}
                        className="group flex flex-col py-1 text-[13px] text-[var(--light)] hover:text-white transition-colors"
                      >
                        <span className="font-semibold group-hover:text-red transition-colors flex items-center gap-1">
                          <span>{l.name}</span>
                          {l.slug === 'oton' && (
                            <span className="text-[9px] font-bold uppercase tracking-wider bg-red/20 text-red px-1.5 py-0.5 rounded">
                              Base
                            </span>
                          )}
                        </span>
                        <span className="text-[11px] text-[var(--muted)] line-clamp-1">
                          {l.drive}
                        </span>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-5 border-t pt-4 flex items-center justify-between" style={{ borderColor: 'var(--line)' }}>
                    <Link
                      to="/locations"
                      className="font-display text-xs uppercase tracking-wider text-red hover:underline"
                    >
                      View All 9 Coverage Towns →
                    </Link>
                    <a
                      href={SITE.googleMaps}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[11px] text-[var(--muted)] hover:text-white"
                    >
                      Google Maps Pin ↗
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* CONTACT */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-[13px] font-semibold uppercase tracking-[0.18em] transition-colors ${
                isActive ? 'text-red' : 'text-[var(--light)] hover:text-red'
              }`
            }
          >
            Contact
          </NavLink>

          {/* GET A QUOTE CTA */}
          <a
            href={SITE.messenger}
            target="_blank"
            rel="noreferrer"
            className="bg-red px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.14em] text-white transition-transform hover:-translate-y-0.5 shadow-lg"
          >
            Get a Quote
          </a>
        </nav>

        {/* MOBILE BURGER BUTTON */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpenMobile(!openMobile)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span className={`h-0.5 w-6 bg-[var(--light)] transition-transform duration-200 ${openMobile ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 bg-[var(--light)] transition-opacity duration-200 ${openMobile ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-[var(--light)] transition-transform duration-200 ${openMobile ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* MOBILE DRAWER */}
      {openMobile && (
        <nav
          className="border-t max-h-[85vh] overflow-y-auto lg:hidden"
          style={{ background: 'rgba(10,6,5,0.98)', borderColor: 'var(--line)' }}
        >
          <div className="flex flex-col px-6 py-5 space-y-2">
            {/* HOME */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `border-b py-3 text-sm font-bold uppercase tracking-[0.18em] ${
                  isActive ? 'text-red' : 'text-[var(--light)]'
                }`
              }
              style={{ borderColor: 'var(--line)' }}
            >
              Home
            </NavLink>

            {/* SERVICES ACCORDION ON MOBILE */}
            <div className="border-b py-2" style={{ borderColor: 'var(--line)' }}>
              <div className="flex items-center justify-between py-2">
                <Link
                  to="/services"
                  className={`text-sm font-bold uppercase tracking-[0.18em] ${
                    isServicesActive ? 'text-red' : 'text-[var(--light)]'
                  }`}
                >
                  Services
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="p-2 text-red font-display text-lg"
                  aria-label="Expand services"
                >
                  {mobileServicesOpen ? '−' : '+'}
                </button>
              </div>

              {mobileServicesOpen && (
                <div className="pl-3 pb-3 space-y-2.5 pt-1 border-l-2 border-red mt-1">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--muted)]">
                    Electronics & Software:
                  </p>
                  {coreServices.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className="block text-xs font-medium text-[var(--light)] hover:text-red py-0.5"
                    >
                      ▸ {s.name}
                    </Link>
                  ))}

                  <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--muted)] pt-2">
                    Mechanical & Electrical:
                  </p>
                  {additionalServices.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className="block text-xs font-medium text-[var(--light)] hover:text-red py-0.5"
                    >
                      ▸ {s.name}
                    </Link>
                  ))}

                  <Link
                    to="/services"
                    className="block text-xs font-bold uppercase tracking-wider text-red pt-2"
                  >
                    View All Services Page →
                  </Link>
                </div>
              )}
            </div>

            {/* AREAS WE SERVE ACCORDION ON MOBILE */}
            <div className="border-b py-2" style={{ borderColor: 'var(--line)' }}>
              <div className="flex items-center justify-between py-2">
                <Link
                  to="/locations"
                  className={`text-sm font-bold uppercase tracking-[0.18em] ${
                    isLocationsActive ? 'text-red' : 'text-[var(--light)]'
                  }`}
                >
                  Areas We Serve
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}
                  className="p-2 text-red font-display text-lg"
                  aria-label="Expand locations"
                >
                  {mobileLocationsOpen ? '−' : '+'}
                </button>
              </div>

              {mobileLocationsOpen && (
                <div className="pl-3 pb-3 space-y-2 pt-1 border-l-2 border-red mt-1">
                  {LOCATIONS.map((l) => (
                    <Link
                      key={l.slug}
                      to={`/locations/${l.slug}`}
                      className="block text-xs font-medium text-[var(--light)] hover:text-red py-0.5"
                    >
                      ▸ {l.name} ({l.region})
                    </Link>
                  ))}
                  <Link
                    to="/locations"
                    className="block text-xs font-bold uppercase tracking-wider text-red pt-2"
                  >
                    View All Locations Page →
                  </Link>
                </div>
              )}
            </div>

            {/* CONTACT */}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `border-b py-3 text-sm font-bold uppercase tracking-[0.18em] ${
                  isActive ? 'text-red' : 'text-[var(--light)]'
                }`
              }
              style={{ borderColor: 'var(--line)' }}
            >
              Contact
            </NavLink>

            {/* QUOTE BUTTON */}
            <a
              href={SITE.messenger}
              target="_blank"
              rel="noreferrer"
              className="bg-red mt-4 px-5 py-3 text-center text-sm font-bold uppercase tracking-[0.14em] text-white block shadow-lg"
            >
              Get a Quote on Messenger
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
