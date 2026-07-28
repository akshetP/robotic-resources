import type { Metadata } from "next";
import { TopicPageShell } from "@/app/components/TopicPageShell";
import RoboticsSimulators from "@/app/simulator/sim";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Robotic Simulators";
const description =
  "Robot simulation tools including Gazebo, NVIDIA Isaac Sim, Webots, CoppeliaSim, MuJoCo, and industrial suites.";

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path: "/simulators",
});

export default function SimulatorsRoute() {
  return (
    <TopicPageShell
      title={title}
      description={description}
      answer="Beginners usually start with Gazebo or Webots for ROS 2 practice. Choose NVIDIA Isaac Sim or MuJoCo when you need GPU-heavy perception, reinforcement learning, or advanced physics—then compare options in the simulator guide."
      related={[
        { href: "/guides/simulators-compared", label: "Simulator comparison" },
        { href: "/ros2", label: "ROS 2 resources" },
        { href: "/projects", label: "Open-source projects" },
      ]}
    >
      <RoboticsSimulators embed />
    </TopicPageShell>
  );
}
