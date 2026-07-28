"use client";

import ResourceSection from "@/app/components/ResourceSection";
import { Courses } from "./components/objects";

export default function RoboticsCourses() {
  const items = Courses.map((course) => ({
    title: course.displayName,
    href: course.href,
    type: "Course",
  }));

  return (
    <ResourceSection
      id="course"
      title="Free University Courses"
      description="Open courses from MIT, Stanford, QUT, Freiburg, and Duckietown."
      icon="/icons/streamline_class-lesson-solid.svg"
      items={items}
      altBackground
    />
  );
}
