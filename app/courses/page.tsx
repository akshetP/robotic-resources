import type { Metadata } from "next";
import { TopicPageShell } from "@/app/components/TopicPageShell";
import RoboticsCourses from "@/app/freelearning/free";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Free University Robotics Courses";
const description =
  "Free robotics courses from MIT, Stanford, QUT Robot Academy, Freiburg, Berkeley, and Duckietown.";

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path: "/courses",
});

export default function CoursesRoute() {
  return (
    <TopicPageShell
      title={title}
      description={description}
      answer="You can learn serious robotics theory without tuition fees. Start with MIT OCW or Stanford introductions, then specialise with QUT Robot Academy, Freiburg mobile robotics, or the Duckietown self-driving MOOC."
      related={[
        { href: "/youtube", label: "Lecture playlists" },
        { href: "/books", label: "Books" },
        { href: "/ros2", label: "ROS 2 resources" },
      ]}
    >
      <RoboticsCourses embed />
    </TopicPageShell>
  );
}
