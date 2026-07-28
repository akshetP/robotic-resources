"use client";

import ResourceSection from "@/app/components/ResourceSection";
import { Repositories } from "./components/objects";

export default function RoboticsRepositories({ embed = false }: { embed?: boolean }) {
  const items = Repositories.map((repo) => ({
    title: repo.displayName,
    href: repo.href,
    type: "Repo",
  }));

  return (
    <ResourceSection
      embed={embed}
      id="repository"
      title="GitHub Repositories to Learn Robotics"
      description="Awesome lists, courseware, papers, and codebases for deeper study."
      icon="/icons/repository.svg"
      items={items}
      altBackground
    />
  );
}
