"use client";

import ResourceSection from "@/app/components/ResourceSection";
import { projects } from "./components/objects";

export default function Projects({ embed = false }: { embed?: boolean }) {
  const items = projects.map((project) => ({
    title: project.name,
    href: project.href,
    type: "Project",
    icon: project.icon,
  }));

  return (
    <ResourceSection
      embed={embed}
      id="project"
      title="Open Source Robotics Projects"
      description="Hands-on platforms and robots you can build, fork, and learn from."
      icon="/icons/project.svg"
      items={items}
      moreHref="https://www.openrobothardware.org/linkedprojects/"
      moreLabel="Find more projects"
    />
  );
}
