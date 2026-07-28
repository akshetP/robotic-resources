"use client";

import { ResourceTile } from "@/app/components/Interactive";

interface Repository {
  name: string;
  displayName: string;
  href: string;
}

export const Repositories: Repository[] = [
  { name: "robotics_resources", displayName: "Robotics Resources", href: "https://github.com/addy1997/Robotics-Resources" },
  { name: "awesome-mobile-robotics", displayName: "Awesome Mobile Robotics", href: "https://github.com/mathiasmantelli/awesome-mobile-robotics" },
  { name: "awesome-robotics", displayName: "Awesome Robotics", href: "https://github.com/kiloreux/awesome-robotics" },
  { name: "pythonrobotics", displayName: "PythonRobotics", href: "https://github.com/AtsushiSakai/PythonRobotics" },
  { name: "dynamic-robot-localization", displayName: "Dynamic Robot Localization", href: "https://github.com/carlosmccosta/dynamic_robot_localization" },
  { name: "robotics-and-machine-vision-resources", displayName: "Robotics And Machine Vision Resources", href: "https://github.com/ColinShaw/robotics-and-machine-vision-resources" },
  { name: "books-courses-software", displayName: "Books, Courses & Software", href: "https://github.com/kiloreux/awesome-robotics" },
  { name: "robotics-courses", displayName: "Robotics Courses", href: "https://github.com/mithi/robotics-coursework" },
  { name: "awesome-machine-learning-for-robotics", displayName: "Awesome Machine Learning for Robotics", href: "https://github.com/Phylliade/awesome-machine-learning-robotics" },
  { name: "machine-learning-for-robotics", displayName: "Machine Learning for Robotics", href: "https://github.com/Phylliade/awesome-machine-learning-robotics" },
  { name: "introduction-to-robotics-and-perception", displayName: "Introduction to Robotics and Perception", href: "https://github.com/gtbook/robotics" },
  { name: "robot-framework", displayName: "Robot Framework", href: "https://github.com/robotframework/robotframework" },
  { name: "robotics-research-papers", displayName: "Robotics Research Papers", href: "https://github.com/ColinShaw/robotics-and-machine-vision-resources#interesting-and-relevant-articles" },
  { name: "learn-robotics-beginner-moderate-advanced", displayName: "Learn Robotics - Beginner, Moderate & Advanced", href: "https://github.com/kfupmRoboticsClub/learn-Robotics/tree/main" },
  { name: "robotics-resources", displayName: "Robotics Resources", href: "https://github.com/addy1997/Robotics-Resources" },
];

export const RepositoryCard: React.FC<{
  repo: Repository;
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
