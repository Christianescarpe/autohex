import { useEffect, useRef, useState } from 'react';

export default function Gauge({ label, value }: { label: string; value: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // ticks from -120deg to 120deg
  const ticks = Array.from({ length: 25 }, (_, i) => -120 + i * 10);

  return (
    <div ref={ref} className={inView ? 'in-view' : ''}>
      <svg viewBox="0 0 200 130" className="w-full max-w-[240px]">
        {ticks.map((deg, i) => {
          const rad = ((deg - 90) * Math.PI) / 180;
          const x1 = 100 + 78 * Math.cos(rad);
          const y1 = 100 + 78 * Math.sin(rad);
          const x2 = 100 + (i % 4 === 0 ? 62 : 70) * Math.cos(rad);
          const y2 = 100 + (i % 4 === 0 ? 62 : 70) * Math.sin(rad);
          const hot = deg > 40;
          return (
            <line
              key={deg}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={hot ? 'var(--red)' : 'rgba(233,231,226,0.5)'}
              strokeWidth={i % 4 === 0 ? 2.5 : 1.2}
            />
          );
        })}
        <line
          className="needle"
          x1="100"
          y1="100"
          x2="100"
          y2="30"
          stroke="var(--red)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="100" cy="100" r="7" fill="var(--red)" />
        <circle cx="100" cy="100" r="3" fill="#0a0605" />
      </svg>
      <div className="mt-2 text-center">
        <div className="font-display text-3xl text-[var(--white)] md:text-4xl">{value}</div>
        <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.22em]">{label}</div>
      </div>
    </div>
  );
}
