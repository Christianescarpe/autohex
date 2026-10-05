import { useEffect, useRef, type ReactNode } from 'react';

export function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in-view');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    const fallback = setTimeout(() => el.classList.add('in-view'), 1400);
    return () => {
      obs.disconnect();
      clearTimeout(fallback);
    };
  }, []);
  return (
    <div ref={ref} className={`reveal ${delay ? `reveal-d${delay}` : ''} ${className}`}>
      {children}
    </div>
  );
}

export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    document.title = title;
    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', description);
    }
  }, [title, description]);
}
