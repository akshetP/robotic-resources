export const siteConfig = {
  name: "Get Into Robotics",
  shortName: "Get Into Robotics",
  title: "Get Into Robotics: Free ROS & Robotics Library",
  description:
    "Free curated robotics library: open-source projects, ROS & ROS 2 tutorials, courses, books, and simulators like Gazebo and Isaac Sim.",
  url: "https://www.resourcesforrobotics.com",
  locale: "en_GB",
  language: "en-GB",
  dateModified: "2026-07-28",
  author: {
    name: "Akshet Patel",
    url: "https://akshetpatel.com/",
    sameAs: [
      "https://twitter.com/Akshet9",
      "https://linkedin.com/in/akshetpatel",
      "https://github.com/akshetP",
      "https://www.youtube.com/@akshetpatel",
      "https://www.facebook.com/akshet.patel.14/",
    ],
  },
  keywords: [
    "robotics resources",
    "learn robotics",
    "ROS tutorials",
    "ROS 2",
    "ROS2",
    "open source robotics",
    "robotics GitHub",
    "robot simulators",
    "robotics courses",
    "robotics books",
    "Gazebo",
    "Isaac Sim",
    "Autoware",
    "Duckietown",
    "get into robotics",
  ],
  ogImage: {
    url: "/images/og-default.png",
    width: 1200,
    height: 630,
    alt: "Get Into Robotics: free curated robotics resources library",
  },
  sections: [
    {
      id: "home",
      path: "/",
      title: "Home",
      description: "Overview of the Get Into Robotics curated resource library.",
    },
    {
      id: "project",
      path: "/projects",
      title: "Open Source Robotics Projects",
      description:
        "GitHub repositories and open-source robot platforms including Duckietown, TortoiseBot, NASA JPL Open Source Rover, Autoware, and F1TENTH.",
    },
    {
      id: "repository",
      path: "/repositories",
      title: "Repositories to Learn Robotics",
      description:
        "Curated GitHub repositories covering robotics coursework, PythonRobotics, machine learning for robotics, and awesome lists.",
    },
    {
      id: "ros",
      path: "/ros",
      title: "ROS Resources",
      description:
        "Robot Operating System learning materials from Delft, ETH Zürich, Purdue, UPC Barcelona, Belgrade, and Washington.",
    },
    {
      id: "ros2",
      path: "/ros2",
      title: "ROS 2 Resources",
      description:
        "ROS 2 tutorials for Foxy and Humble, Autoware self-driving courses, and beginner crash courses.",
    },
    {
      id: "youtube",
      path: "/youtube",
      title: "YouTube Channels & Playlists",
      description:
        "Robotics YouTube channels and university playlists for mathematics, manipulation, dynamics, and underactuated robotics.",
    },
    {
      id: "course",
      path: "/courses",
      title: "Free University Courses",
      description:
        "Free robotics courses from MIT, Stanford, QUT Robot Academy, Freiburg, Berkeley, and Duckietown.",
    },
    {
      id: "book",
      path: "/books",
      title: "Books to Learn Robotics",
      description:
        "Recommended ROS and robotics books including Programming Robots with ROS and A Gentle Introduction to ROS.",
    },
    {
      id: "simulator",
      path: "/simulators",
      title: "Robotic Simulators",
      description:
        "Robot simulation tools including Gazebo, NVIDIA Isaac Sim, Webots, CoppeliaSim, MuJoCo, and AWS RoboMaker.",
    },
  ],
  guides: [
    {
      path: "/guides/start-ros2",
      title: "How to start learning ROS 2",
      description:
        "A practical 2026 path to learn ROS 2: Humble tutorials, a simulator, and curated playlists from Get Into Robotics.",
    },
    {
      path: "/guides/simulators-compared",
      title: "Gazebo vs Webots vs Isaac Sim",
      description:
        "Compare Gazebo, Webots, and NVIDIA Isaac Sim for beginners and advanced robotics workflows.",
    },
    {
      path: "/guides/beginner-projects",
      title: "Best open-source robotics projects for beginners",
      description:
        "Beginner-friendly open-source robots and platforms: Duckietown, TortoiseBot, Mini Pupper, NASA rover, and more.",
    },
  ],
} as const;

export type SiteSection = (typeof siteConfig.sections)[number];
export type SiteGuide = (typeof siteConfig.guides)[number];
