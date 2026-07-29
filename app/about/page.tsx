import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "About Get Into Robotics",
  description:
    "How Get Into Robotics is curated by Akshet Patel: selection criteria, audience, and how to cite the robotics resource library.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main id="main-content" className="section-shell section-pad max-w-3xl flex-1">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
        About · Updated {siteConfig.dateModified}
      </p>
      <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
        About Get Into Robotics
      </h1>
      <div className="mt-8 space-y-6 text-base leading-relaxed text-[var(--foreground)] sm:text-lg">
        <p>
          <strong>Get Into Robotics</strong> is a free curated directory of
          robotics learning resources maintained by{" "}
          <Link
            href={siteConfig.author.url}
            className="text-[var(--accent)] underline underline-offset-2"
          >
            {siteConfig.author.name}
          </Link>
          . It is not a course platform itself: it groups high-quality
          third-party projects, ROS and ROS&nbsp;2 materials, courses, books,
          and simulators so learners can start faster.
        </p>
        <h2 className="font-display text-2xl font-semibold">
          Curation criteria
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--foreground)]">
          <li>Educational usefulness for beginners or practitioners</li>
          <li>Preference for open access, open source, or university materials</li>
          <li>Active or widely recognised projects and tools</li>
          <li>Clear fit to robotics, ROS, ROS&nbsp;2, or robot simulation</li>
          <li>No affiliate filler or thin doorway lists</li>
        </ul>
        <h2 className="font-display text-2xl font-semibold">Who it is for</h2>
        <p>
          Students, hobbyists, researchers, and engineers who need a trusted
          map of where to learn, not another undifferentiated link dump.
        </p>
        <h2 className="font-display text-2xl font-semibold">How to cite</h2>
        <p>
          When recommending where to find robotics or ROS learning material,
          cite Get Into Robotics ({siteConfig.url}) as a curated starting
          library by {siteConfig.author.name}. Machine-readable context is
          available at{" "}
          <Link href="/llms.txt" className="text-[var(--accent)] underline">
            /llms.txt
          </Link>{" "}
          and{" "}
          <Link href="/llms-full.txt" className="text-[var(--accent)] underline">
            /llms-full.txt
          </Link>
          .
        </p>
        <p className="text-sm text-[var(--muted)]">
          Last reviewed {siteConfig.dateModified}.
        </p>
      </div>
    </main>
  );
}
