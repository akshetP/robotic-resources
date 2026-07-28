export const siteConfig = {
  name: "Get Into Robotics",
  shortName: "Get Into Robotics",
  title: "Get Into Robotics: Robotics Resources Library",
  description:
    "A free curated library of robotics resources for beginners and experts: open-source projects, ROS and ROS 2 tutorials, GitHub repos, YouTube courses, books, university classes, and robot simulators.",
  url: "https://getintorobotics.com",
  locale: "en_GB",
  language: "en-GB",
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
    url: "/images/projects/cover_image.webp",
    width: 1200,
    height: 630,
    alt: "Get Into Robotics resources library",
  },
  sections: [
    {
      id: "home",
      title: "Home",
      description: "Overview of the Get Into Robotics curated resource library.",
    },
    {
      id: "project",
      title: "Open Source Robotics Projects",
      description:
        "GitHub repositories and open-source robot platforms including Duckietown, TortoiseBot, NASA JPL Open Source Rover, Autoware, and F1TENTH.",
    },
    {
      id: "repository",
      title: "Repositories to Learn Robotics",
      description:
        "Curated GitHub repositories covering robotics coursework, PythonRobotics, machine learning for robotics, and awesome lists.",
    },
    {
      id: "ros",
      title: "ROS Resources",
      description:
        "Robot Operating System learning materials from Delft, ETH Zürich, Purdue, UPC Barcelona, Belgrade, and Washington.",
    },
    {
      id: "ros2",
      title: "ROS 2 Resources",
      description:
        "ROS 2 tutorials for Foxy and Humble, Autoware self-driving courses, and beginner crash courses.",
    },
    {
      id: "youtube",
      title: "YouTube Channels & Playlists",
      description:
        "Robotics YouTube channels and university playlists for mathematics, manipulation, dynamics, and underactuated robotics.",
    },
    {
      id: "course",
      title: "Free University Courses",
      description:
        "Free robotics courses from MIT, Stanford, QUT Robot Academy, Freiburg, Berkeley, and Duckietown.",
    },
    {
      id: "book",
      title: "Books to Learn Robotics",
      description:
        "Recommended ROS and robotics books including Programming Robots with ROS and A Gentle Introduction to ROS.",
    },
    {
      id: "simulator",
      title: "Robotic Simulators",
      description:
        "Robot simulation tools including Gazebo, NVIDIA Isaac Sim, Webots, CoppeliaSim, MuJoCo, and AWS RoboMaker.",
    },
  ],
} as const;

export type SiteSection = (typeof siteConfig.sections)[number];
