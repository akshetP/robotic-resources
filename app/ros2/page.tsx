import type { Metadata } from "next";
import { TopicPageShell } from "@/app/components/TopicPageShell";
import Ros2Page from "./ros2";
import { buildPageMetadata } from "@/lib/metadata";

const title = "ROS 2 Resources";
const description =
  "ROS 2 Foxy and Humble tutorials, crash courses, and Autoware self-driving playlists for modern robotics middleware.";

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path: "/ros2",
});

export default function Ros2Route() {
  return (
    <TopicPageShell
      title={title}
      description={description}
      answer="Start with a ROS 2 Humble beginner playlist or crash course, then practise nodes and topics in Gazebo or Webots. This page groups the playlists Get Into Robotics recommends for that path, including Autoware materials for autonomy."
      related={[
        { href: "/guides/start-ros2", label: "Full ROS 2 learning path" },
        { href: "/simulators", label: "Simulators" },
        { href: "/ros", label: "Classic ROS" },
      ]}
    >
      <Ros2Page embed />
    </TopicPageShell>
  );
}
