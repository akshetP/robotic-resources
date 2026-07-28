import type { Metadata } from "next";
import Link from "next/link";
import { GuideArticle } from "@/app/components/GuideArticle";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const guide = siteConfig.guides[1];

export const metadata: Metadata = buildPageMetadata({
  title: guide.title,
  description: guide.description,
  path: guide.path,
  type: "article",
});

export default function SimulatorsComparedPage() {
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
          Choose <strong>Gazebo</strong> or <strong>Webots</strong> to learn
          ROS&nbsp;2 as a beginner. Choose <strong>NVIDIA Isaac Sim</strong>{" "}
          when you need GPU-heavy perception, synthetic data, or advanced
          digital-twin workflows.
        </p>
      </section>

      <h2 className="font-display text-2xl font-semibold">Comparison</h2>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[32rem] border-collapse text-left text-sm sm:text-base">
          <thead>
            <tr className="border-b border-[var(--border)]">
              <th className="py-2 pr-3 font-semibold">Simulator</th>
              <th className="py-2 pr-3 font-semibold">Best for</th>
              <th className="py-2 pr-3 font-semibold">ROS 2 fit</th>
              <th className="py-2 font-semibold">Beginner-friendly</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[var(--border)]">
              <td className="py-3 pr-3 font-medium">Gazebo</td>
              <td className="py-3 pr-3">ROS learning, robots in worlds</td>
              <td className="py-3 pr-3">Excellent</td>
              <td className="py-3">High</td>
            </tr>
            <tr className="border-b border-[var(--border)]">
              <td className="py-3 pr-3 font-medium">Webots</td>
              <td className="py-3 pr-3">Education, cross-platform setups</td>
              <td className="py-3 pr-3">Very good</td>
              <td className="py-3">High</td>
            </tr>
            <tr className="border-b border-[var(--border)]">
              <td className="py-3 pr-3 font-medium">Isaac Sim</td>
              <td className="py-3 pr-3">Perception, synthetic data, GPU</td>
              <td className="py-3 pr-3">Strong (advanced)</td>
              <td className="py-3">Medium / advanced</td>
            </tr>
            <tr>
              <td className="py-3 pr-3 font-medium">MuJoCo</td>
              <td className="py-3 pr-3">Physics, RL, research control</td>
              <td className="py-3 pr-3">Indirect / via bridges</td>
              <td className="py-3">Medium</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="font-display text-2xl font-semibold">When to pick each</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Gazebo:</strong> default companion for most ROS&nbsp;2
          tutorials and mobile robots.
        </li>
        <li>
          <strong>Webots:</strong> polished education workflows and easier
          installs on varied machines.
        </li>
        <li>
          <strong>Isaac Sim:</strong> after you are comfortable with ROS&nbsp;2
          basics and need photorealistic or AI-heavy simulation.
        </li>
      </ul>

      <p>
        Browse the full list on the{" "}
        <Link href="/simulators" className="text-[var(--accent)] underline">
          robotic simulators
        </Link>{" "}
        page, then return to the{" "}
        <Link href="/guides/start-ros2" className="text-[var(--accent)] underline">
          ROS 2 learning path
        </Link>
        .
      </p>
    </GuideArticle>
  );
}
