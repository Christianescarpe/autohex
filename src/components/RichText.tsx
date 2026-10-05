import React from 'react';
import { Link } from 'react-router';

interface RichTextProps {
  content: string;
  className?: string;
}

export default function RichText({ content, className = '' }: RichTextProps) {
  if (!content) return null;

  // Function to parse inline markdown (links and bold)
  const parseInline = (text: string): React.ReactNode[] => {
    // Regex matching [label](url) and **bold**
    const tokens: React.ReactNode[] = [];
    const regex = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|__([^_]+)__/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        tokens.push(text.slice(lastIndex, match.index));
      }

      if (match[1] && match[2]) {
        // Link match
        const label = match[1];
        let url = match[2].trim();

        // Normalize trailing slashes for react-router
        if (url.startsWith('/') && url.length > 1 && url.endsWith('/')) {
          url = url.slice(0, -1);
        }

        if (url.startsWith('/')) {
          tokens.push(
            <Link
              key={match.index}
              to={url}
              className="text-red font-semibold underline underline-offset-4 hover:text-[var(--white)] transition-colors"
            >
              {label}
            </Link>
          );
        } else {
          tokens.push(
            <a
              key={match.index}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="text-red font-semibold underline underline-offset-4 hover:text-[var(--white)] transition-colors"
            >
              {label}
            </a>
          );
        }
      } else if (match[3] || match[4]) {
        // Bold match
        const boldText = match[3] || match[4];
        tokens.push(
          <strong key={match.index} className="text-[var(--white)] font-bold">
            {boldText}
          </strong>
        );
      }

      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      tokens.push(text.slice(lastIndex));
    }

    return tokens;
  };

  return <span className={className}>{parseInline(content)}</span>;
}
