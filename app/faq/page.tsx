import type { Metadata } from "next";
import { FaqSection } from "@/app/components/AeoContent";
import { TopicPageShell } from "@/app/components/TopicPageShell";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Robotics FAQ",
  description:
    "Frequently asked questions about Get Into Robotics, learning ROS vs ROS 2, choosing simulators, and free robotics courses.",
  path: "/faq",
});

export default function FaqRoute() {
  return (
    <TopicPageShell
      title="Frequently asked questions"
      description="Short answers about the library, ROS 2 learning paths, simulators, and how resources are chosen."
      answer="Get Into Robotics is a free curated robotics library. Start with ROS 2 Humble plus Gazebo or Webots unless a course still requires classic ROS, and use the guides for step-by-step paths."
      related={[
        { href: "/about", label: "About & curation" },
        { href: "/guides/start-ros2", label: "Start ROS 2" },
        { href: "/", label: "Browse library" },
      ]}
    >
      <FaqSection hideHeading />
    </TopicPageShell>
  );
}
