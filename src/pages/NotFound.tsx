import { Link } from 'react-router';
import { usePageMeta } from '../components/Reveal';

export default function NotFound() {
  usePageMeta('Page not found | Autohex Iloilo');
  return (
    <main className="flex min-h-[70svh] flex-col items-center justify-center px-5 pt-24 text-center">
      <p className="font-display text-red" style={{ fontSize: 'clamp(4rem, 12vw, 9rem)' }}>404</p>
      <h1 className="font-display mt-2 text-2xl uppercase tracking-wide text-[var(--white)]">
        Wrong turn
      </h1>
      <p className="mt-3 max-w-md text-sm">
        This page doesn't exist — but your ECU problem still does. Let's get you back on the road.
      </p>
      <Link
        to="/"
        className="bg-red mt-8 px-8 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-white transition-transform hover:-translate-y-0.5"
      >
        Back to home
      </Link>
    </main>
  );
}
