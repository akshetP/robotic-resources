import type { Metadata } from "next";
import { TopicPageShell } from "@/app/components/TopicPageShell";
import RoboticsRepositories from "./repo";
import { buildPageMetadata } from "@/lib/metadata";

const title = "GitHub Repositories to Learn Robotics";
const description =
  "Curated GitHub repos and awesome lists for robotics coursework, PythonRobotics, machine learning for robots, and research papers.";

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path: "/repositories",
});

export default function RepositoriesRoute() {
  return (
    <TopicPageShell
      title={title}
      description={description}
      answer="Use these curated GitHub repositories, such as PythonRobotics and awesome robotics lists, to study algorithms, course notes, and machine-learning-for-robotics material alongside hands-on projects."
      related={[
        { href: "/projects", label: "Open-source projects" },
        { href: "/courses", label: "University courses" },
        { href: "/ros", label: "ROS resources" },
      ]}
    >
      <RoboticsRepositories embed />
    </TopicPageShell>
  );
}
