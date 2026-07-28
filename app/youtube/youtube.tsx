"use client";

import ResourceSection from "@/app/components/ResourceSection";
import { YoutubeChannel, YoutubePlaylist } from "./components/objects";

export default function RoboticsYoutube({ embed = false }: { embed?: boolean }) {
  const items = [
    ...YoutubeChannel.map((item) => ({
      title: item.displayName,
      href: item.href,
      type: "Channel",
    })),
    ...YoutubePlaylist.map((item) => ({
      title: item.displayName,
      href: item.href,
      type: "Playlist",
    })),
  ];

  return (
    <ResourceSection
      embed={embed}
      id="youtube"
      title="YouTube Channels & Playlists"
      description="Creators and lecture series covering robotics theory, ROS, and hardware builds."
      icon="/icons/mdi_youtube.svg"
      items={items}
      filters={["Channel", "Playlist"]}
    />
  );
}
