import type { Metadata } from "next";
import { TopicPageShell } from "@/app/components/TopicPageShell";
import Projects from "./project";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Open Source Robotics Projects";
const description =
  "Hands-on open-source robots and platforms to build and fork: Duckietown, NASA JPL rover, Autoware, F1TENTH, Mini Pupper, and more.";

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path: "/projects",
});

export default function ProjectsRoute() {
  return (
    <TopicPageShell
      title={title}
      description={description}
      answer="Get Into Robotics features beginner-friendly and research-grade open-source robots (including Duckietown, TortoiseBot, NASA JPL Open Source Rover, Autoware, and Mini Pupper) so you can learn by building rather than only reading theory."
      related={[
        { href: "/guides/beginner-projects", label: "Beginner projects guide" },
        { href: "/ros2", label: "ROS 2 resources" },
        { href: "/simulators", label: "Simulators" },
      ]}
    >
      <Projects embed />
    </TopicPageShell>
  );
}
