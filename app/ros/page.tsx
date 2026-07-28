import type { Metadata } from "next";
import { TopicPageShell } from "@/app/components/TopicPageShell";
import RosPage from "./ros";
import { buildPageMetadata } from "@/lib/metadata";

const title = "ROS Resources";
const description =
  "Classic Robot Operating System courses and guides from Delft, ETH Zürich, Purdue, UPC Barcelona, Belgrade, and Washington.";

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path: "/ros",
});

export default function RosRoute() {
  return (
    <TopicPageShell
      title={title}
      description={description}
      answer="Classic ROS remains useful for many university courses and legacy stacks. This collection gathers trusted university ROS courses and community repos; new learners who are not locked into ROS 1 should prefer ROS 2 Humble."
      related={[
        { href: "/ros2", label: "ROS 2 resources" },
        { href: "/guides/start-ros2", label: "Start ROS 2 guide" },
        { href: "/books", label: "ROS books" },
      ]}
    >
      <RosPage embed />
    </TopicPageShell>
  );
}
