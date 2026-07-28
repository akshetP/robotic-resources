import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Robotics Learning Guides",
  description:
    "Answer-first guides for learning ROS 2, comparing robot simulators, and choosing beginner open-source robotics projects.",
  path: "/guides",
});

export default function GuidesIndexPage() {
  return (
    <main id="main-content" className="section-shell section-pad max-w-3xl flex-1">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
        Guides · Updated {siteConfig.dateModified}
      </p>
      <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
        Robotics learning guides
      </h1>
      <p className="mt-4 text-lg text-[var(--muted)]">
        Short, citation-friendly paths that sit on top of the curated resource
        library.
      </p>
      <ul className="mt-10 space-y-6">
        {siteConfig.guides.map((guide) => (
          <li
            key={guide.path}
            className="rounded-[20px] border border-[var(--border)] bg-white p-5"
          >
            <h2 className="font-display text-xl font-semibold">
              <Link
                href={guide.path}
                className="text-[var(--foreground)] hover:text-[var(--accent)]"
              >
                {guide.title}
              </Link>
            </h2>
            <p className="mt-2 text-[var(--muted)]">{guide.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
