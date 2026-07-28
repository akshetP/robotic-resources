"use client";

import ResourceSection from "@/app/components/ResourceSection";
import { Books } from "./components/objects";

export default function RoboticsBooks({ embed = false }: { embed?: boolean }) {
  const items = Books.map((book) => ({
    title: book.displayName,
    href: book.href,
    type: "Book",
  }));

  return (
    <ResourceSection
      embed={embed}
      id="book"
      title="Books to Learn Robotics"
      description="Foundational ROS and robotics texts available as free PDFs and downloads."
      icon="/icons/icon-park-solid_bookshelf.svg"
      items={items}
    />
  );
}
