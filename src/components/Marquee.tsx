export default function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y py-4" style={{ borderColor: 'var(--line)', background: 'var(--bg-tinted)' }}>
      <div className="marquee-track">
        {row.map((item, i) => (
          <span
            key={i}
            className="font-display flex items-center whitespace-nowrap px-6 text-lg uppercase tracking-[0.12em] text-[var(--light)] md:text-xl"
          >
            {item}
            <span className="text-red mx-6 text-sm">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
