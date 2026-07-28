import Link from "next/link";
import type { ReactNode } from "react";
import { buildArticleJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

type GuideArticleProps = {
  title: string;
  description: string;
  path: string;
  children: ReactNode;
};

export function GuideArticle({
  title,
  description,
  path,
  children,
}: GuideArticleProps) {
  const article = buildArticleJsonLd({ title, description, path });

  return (
    <main id="main-content" className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
      />
      <article className="section-shell section-pad max-w-3xl">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
          Guide · Updated {siteConfig.dateModified}
        </p>
        <h1 className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
          {description}
        </p>
        <p className="mt-3 text-sm text-[var(--muted)]">
          By{" "}
          <Link
            href={siteConfig.author.url}
            className="underline underline-offset-2 hover:text-[var(--accent)]"
          >
            {siteConfig.author.name}
          </Link>
        </p>
        <div className="prose-guide mt-10 space-y-6 text-base leading-relaxed text-[var(--foreground)] sm:text-lg">
          {children}
        </div>
        <nav
          aria-label="More guides"
          className="mt-12 border-t border-[var(--border)] pt-8"
        >
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
            More guides
          </h2>
          <ul className="space-y-2">
            {siteConfig.guides
              .filter((guide) => guide.path !== path)
              .map((guide) => (
                <li key={guide.path}>
                  <Link
                    href={guide.path}
                    className="font-medium text-[var(--accent)] underline-offset-2 hover:underline"
                  >
                    {guide.title}
                  </Link>
                </li>
              ))}
            <li>
              <Link
                href="/"
                className="font-medium text-[var(--accent)] underline-offset-2 hover:underline"
              >
                Back to the library
              </Link>
            </li>
          </ul>
        </nav>
      </article>
    </main>
  );
}
