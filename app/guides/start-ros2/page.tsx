import type { Metadata } from "next";
import Link from "next/link";
import { GuideArticle } from "@/app/components/GuideArticle";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const guide = siteConfig.guides[0];

export const metadata: Metadata = buildPageMetadata({
  title: guide.title,
  description: guide.description,
  path: guide.path,
  type: "article",
});

export default function StartRos2GuidePage() {
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
          To start learning ROS&nbsp;2 in 2026: install ROS&nbsp;2 Humble,
          follow a beginner Humble playlist, practise publisher/subscriber
          nodes, then move into Gazebo or Webots before joining a larger
          project such as Autoware or Duckietown.
        </p>
      </section>

      <h2 className="font-display text-2xl font-semibold">
        Why ROS 2 (not classic ROS)?
      </h2>
      <p>
        ROS&nbsp;2 is the modern Robot Operating System stack with stronger
        networking, security, and long-term support. Unless a specific
        university course still requires ROS&nbsp;1, new learners should start
        with ROS&nbsp;2 Humble.
      </p>

      <h2 className="font-display text-2xl font-semibold">
        A five-step learning path
      </h2>
      <ol className="list-decimal space-y-3 pl-5">
        <li>
          Install ROS&nbsp;2 Humble on Ubuntu (or use a maintained Docker
          image if you need isolation).
        </li>
        <li>
          Complete a beginner Humble crash course or playlist from the{" "}
          <Link href="/ros2" className="text-[var(--accent)] underline">
            ROS 2 resources
          </Link>{" "}
          list.
        </li>
        <li>
          Recreate the demos yourself: create a package, write a publisher and
          subscriber, and inspect topics with the CLI.
        </li>
        <li>
          Practise in a simulator—start with{" "}
          <Link href="/simulators" className="text-[var(--accent)] underline">
            Gazebo or Webots
          </Link>
          .
        </li>
        <li>
          Apply skills on a small open-source robot or autonomy stack from the{" "}
          <Link href="/projects" className="text-[var(--accent)] underline">
            projects library
          </Link>
          .
        </li>
      </ol>

      <h2 className="font-display text-2xl font-semibold">
        Recommended next links
      </h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <Link href="/ros2" className="text-[var(--accent)] underline">
            Curated ROS 2 playlists
          </Link>
        </li>
        <li>
          <Link
            href="/guides/simulators-compared"
            className="text-[var(--accent)] underline"
          >
            Gazebo vs Webots vs Isaac Sim
          </Link>
        </li>
        <li>
          <Link href="/books" className="text-[var(--accent)] underline">
            ROS books
          </Link>
        </li>
      </ul>
    </GuideArticle>
  );
}
