"use client";

import { ResourceTile } from "@/app/components/Interactive";

interface Courses {
  name: string;
  displayName: string;
  href: string;
}

export const Courses: Courses[] = [
  { name: "self-driving cars with duckietown", displayName: "Self-Driving Cars with Duckietown", href: "https://duckietown.com/mooc/" },
  { name: "introduction robotics by massachusetts institute of technology", displayName: "Introduction Robotics by Massachusetts Institute of Technology", href: "https://ocw.mit.edu/courses/2-12-introduction-to-robotics-fall-2005/" },
  { name: "OUT", displayName: "QUT Robot Academy by QUT (Queensland University of Technology)", href: "https://robotacademy.net.au/" },
  { name: "intro to robot by standford", displayName: "Introduction to Robotics by Standford University", href: "https://see.stanford.edu/Course/CS223A" },
  { name: "introduction to mobile robotics", displayName: "Introduction to Mobile Robotics by the University of Freiburg", href: "http://ais.informatik.uni-freiburg.de/teaching/ss16/robotics/index_en.php" },
];

export const CourseCard: React.FC<{
  repo: Courses;
  isMobile?: boolean;
  className?: string;
}> = ({ repo }) => {
  return (
    <ResourceTile href={repo.href}>
      <h3 className="text-xs font-medium leading-tight text-black sm:text-sm">
        {repo.displayName}
      </h3>
    </ResourceTile>
  );
};
