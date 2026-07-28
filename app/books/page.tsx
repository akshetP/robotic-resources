import type { Metadata } from "next";
import { TopicPageShell } from "@/app/components/TopicPageShell";
import RoboticsBooks from "./books";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Books to Learn Robotics";
const description =
  "Recommended ROS and robotics books, including Programming Robots with ROS and A Gentle Introduction to ROS.";

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path: "/books",
});

export default function BooksRoute() {
  return (
    <TopicPageShell
      title={title}
      description={description}
      answer="These books cover ROS fundamentals and broader robotics practice. Several titles are available as free PDFs or open downloads; always check each publisher’s licence before redistributing."
      related={[
        { href: "/ros", label: "ROS courses" },
        { href: "/ros2", label: "ROS 2 resources" },
        { href: "/courses", label: "University courses" },
      ]}
    >
      <RoboticsBooks embed />
    </TopicPageShell>
  );
}
