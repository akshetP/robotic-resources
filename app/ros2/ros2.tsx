"use client";

import ResourceSection from "@/app/components/ResourceSection";
import { ros2Resources } from "@/app/data/ros2";

export default function Ros2Page() {
  return (
    <ResourceSection
      id="ros2"
      title="ROS 2 Resources"
      description="Playlists and crash courses to get productive with modern ROS 2."
      icon="/icons/ros.svg"
      items={ros2Resources.map((item) => ({
        title: item.title,
        href: item.href,
        type: item.type ?? "Resource",
      }))}
      filters={["Playlist", "Video"]}
      altBackground
    />
  );
}
