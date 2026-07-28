import type { Metadata } from "next";
import { TopicPageShell } from "@/app/components/TopicPageShell";
import RoboticsYoutube from "./youtube";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Robotics YouTube Channels & Playlists";
const description =
  "Robotics YouTube channels and university lecture playlists covering maths, manipulation, dynamics, and underactuated robotics.";

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path: "/youtube",
});

export default function YoutubeRoute() {
  return (
    <TopicPageShell
      title={title}
      description={description}
      answer="Video is often the fastest way to absorb robotics maths and hardware intuition. This list mixes creator channels with university lecture series so you can pair visual learning with the ROS 2 and course sections."
      related={[
        { href: "/courses", label: "University courses" },
        { href: "/ros2", label: "ROS 2 playlists" },
        { href: "/guides/start-ros2", label: "ROS 2 guide" },
      ]}
    >
      <RoboticsYoutube embed />
    </TopicPageShell>
  );
}
