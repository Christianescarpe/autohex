import { useState, type FormEvent } from 'react';
import { SITE } from '../data/site';
import { SERVICES } from '../data/services';

export default function ContactForm({ compact = false }: { compact?: boolean }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(SERVICES[0].name);
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const buildMessage = () =>
    `Hi Autohex! I'm ${name || '[name]'} (${phone || '[phone]'}). I'm interested in: ${service}. ${message}`;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry: ${service} — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nService: ${service}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const messengerUrl = `${SITE.messenger}?ref=${encodeURIComponent(buildMessage())}`;

  return (
    <div>
      {sent && (
        <p className="mb-4 border-l-4 border-red bg-[var(--bg-panel)] px-4 py-3 text-sm text-[var(--light)]">
          Your email app should have opened with a pre-filled message. Prefer chat?{' '}
          <a href={SITE.messenger} target="_blank" rel="noreferrer" className="text-red underline">
            Message us on Facebook instead
          </a>{' '}
          — we reply fast, 24 hours.
        </p>
      )}
      <form onSubmit={handleSubmit} className={compact ? 'space-y-4' : 'grid gap-4 md:grid-cols-2'}>
        <input
          className="field"
          placeholder="Your name *"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="field"
          placeholder="Phone / mobile number *"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <select
          className={`field ${compact ? '' : 'md:col-span-2'}`}
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
          <option value="Other">Other / not sure</option>
        </select>
        <textarea
          className={`field ${compact ? '' : 'md:col-span-2'} min-h-[120px]`}
          placeholder="Vehicle make / model / year + what's the problem?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className={`flex flex-col gap-3 sm:flex-row ${compact ? '' : 'md:col-span-2'}`}>
          <button
            type="submit"
            className="bg-red flex-1 px-6 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-white transition-transform hover:-translate-y-0.5"
          >
            Send via Email
          </button>
          <a
            href={messengerUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 border px-6 py-3.5 text-center text-sm font-bold uppercase tracking-[0.14em] text-[var(--light)] transition-colors hover:border-red hover:text-red"
            style={{ borderColor: 'var(--line)' }}
          >
            Send via Messenger
          </a>
        </div>
        <p className={`text-xs ${compact ? '' : 'md:col-span-2'}`} style={{ color: 'rgba(203,198,185,0.55)' }}>
          Fastest response: call {SITE.phone} — open 24 hours.
        </p>
      </form>
    </div>
  );
}
