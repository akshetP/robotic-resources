"use client";

import ResourceSection from "@/app/components/ResourceSection";
import { Simulators } from "./components/objects";

export default function RoboticsSimulators({ embed = false }: { embed?: boolean }) {
  const items = Simulators.map((sim) => ({
    title: sim.displayName,
    href: sim.href,
    type: "Simulator",
  }));

  return (
    <ResourceSection
      embed={embed}
      id="simulator"
      title="Robotic Simulators"
      description="From Gazebo and Isaac Sim to MuJoCo, Webots, and industrial suites."
      icon="/icons/ix_project-simulation.svg"
      items={items}
      altBackground
    />
  );
}
