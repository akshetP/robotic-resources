"use client";

import ResourceSection from "@/app/components/ResourceSection";
import { rosResources } from "@/app/data/ros";

export default function RosPage() {
  return (
    <ResourceSection
      id="ros"
      title="ROS Resources"
      description="University courses and community collections for the classic Robot Operating System."
      icon="/icons/ros.svg"
      items={rosResources.map((item) => ({
        title: item.title,
        href: item.href,
        type: item.type ?? "Resource",
      }))}
      filters={["Course", "Repo"]}
    />
  );
}
