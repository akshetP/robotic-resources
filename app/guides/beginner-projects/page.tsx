import type { Metadata } from "next";
import Link from "next/link";
import { GuideArticle } from "@/app/components/GuideArticle";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const guide = siteConfig.guides[2];

export const metadata: Metadata = buildPageMetadata({
  title: guide.title,
  description: guide.description,
  path: guide.path,
  type: "article",
});

export default function BeginnerProjectsGuidePage() {
  return (
    <GuideArticle
      title={guide.title}
      description={guide.description}
      path={guide.path}
    >
      <section className="rounded-[20px] border-2 border-[var(--accent)] bg-white p-5 sm:p-6">
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
          Quick answer
        </h2>
        <p>
          Beginners should start with well-documented educational platforms
          such as <strong>Duckietown</strong>, <strong>TortoiseBot</strong>, or{" "}
          <strong>andino</strong>, then progress to richer builds like Mini
          Pupper or the NASA JPL Open Source Rover.
        </p>
      </section>

      <h2 className="font-display text-2xl font-semibold">
        How we ranked these
      </h2>
      <p>
        Priority goes to clear documentation, active communities, manageable
        hardware cost bands, and a path into ROS or ROS&nbsp;2, not novelty
        demos with no learning ladder.
      </p>

      <h2 className="font-display text-2xl font-semibold">
        Starter shortlist
      </h2>
      <ol className="list-decimal space-y-4 pl-5">
        <li>
          <strong>Duckietown</strong>: education ecosystem for autonomy and AI
          robotics with courses and simulation options.
        </li>
        <li>
          <strong>TortoiseBot</strong>: learner-friendly, cost-conscious ROS
          mobile robot for first hardware loops.
        </li>
        <li>
          <strong>andino</strong>: open diff-drive platform aimed at education
          and low-cost applications.
        </li>
        <li>
          <strong>Mini Pupper</strong>: quadruped learning path with ROS and
          vision-oriented docs.
        </li>
        <li>
          <strong>NASA JPL Open Source Rover</strong>: ambitious build-it
          yourself rover once you want a longer mechanical project.
        </li>
      </ol>

      <h2 className="font-display text-2xl font-semibold">What to do next</h2>
      <ol className="list-decimal space-y-2 pl-5">
        <li>
          Pick one platform and complete its “hello world” bring-up guide.
        </li>
        <li>
          Pair it with the{" "}
          <Link href="/guides/start-ros2" className="text-[var(--accent)] underline">
            ROS 2 learning path
          </Link>{" "}
          if the stack is ROS&nbsp;2-based.
        </li>
        <li>
          Explore the full catalogue on{" "}
          <Link href="/projects" className="text-[var(--accent)] underline">
            open-source projects
          </Link>
          .
        </li>
      </ol>
    </GuideArticle>
  );
}
