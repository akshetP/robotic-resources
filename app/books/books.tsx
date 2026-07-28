"use client";

import ResourceSection from "@/app/components/ResourceSection";
import { Books } from "./components/objects";

export default function RoboticsBooks() {
  const items = Books.map((book) => ({
    title: book.displayName,
    href: book.href,
    type: "Book",
  }));

  return (
    <ResourceSection
      id="book"
      title="Books to Learn Robotics"
      description="Foundational ROS and robotics texts available as free PDFs and downloads."
      icon="/icons/icon-park-solid_bookshelf.svg"
      items={items}
    />
  );
}
