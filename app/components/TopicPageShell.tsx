import Link from "next/link";
import type { ReactNode } from "react";

type TopicPageShellProps = {
  title: string;
  description: string;
  answer: string;
  updated?: string;
  children: ReactNode;
  related?: { href: string; label: string }[];
};

export function TopicPageShell({
  title,
  description,
  answer,
  updated = "2026-07-28",
  children,
  related = [],
}: TopicPageShellProps) {
  return (
    <main id="main-content" className="flex-1">
      <header className="section-shell section-pad pb-8 md:pb-10">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
          Get Into Robotics
        </p>
        <h1 className="font-display max-w-4xl text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
          {description}
        </p>
        <p className="mt-3 text-xs text-[var(--muted)]">Updated {updated}</p>
        <div className="mt-8 max-w-3xl rounded-[20px] border-2 border-[var(--accent)] bg-white p-5 sm:p-6">
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
            Quick answer
          </h2>
          <p className="text-base leading-relaxed text-[var(--foreground)] sm:text-lg">
            {answer}
          </p>
        </div>
      </header>

      {children}

      {related.length > 0 ? (
        <nav
          aria-label="Related pages"
          className="section-shell border-t border-[var(--border)] py-10"
        >
          <h2 className="mb-4 font-display text-xl font-semibold text-[var(--foreground)]">
            Related
          </h2>
          <ul className="flex flex-wrap gap-3">
            {related.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="btn-secondary px-4 py-2 text-sm"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </main>
  );
}
