export type Topic = {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: string;
  count: number;
  links: { label: string; href: string }[];
};

export const topics: Topic[] = [
  {
    id: "project",
    title: "Open Source Projects",
    description: "Buildable robots and platforms from Duckietown to NASA’s rover.",
    href: "/projects",
    icon: "/icons/project.svg",
    count: 13,
    links: [
      { label: "Duckietown", href: "/projects" },
      { label: "NASA Rover", href: "/projects" },
      { label: "Mini Pupper", href: "/projects" },
    ],
  },
  {
    id: "repository",
    title: "Learning Repositories",
    description: "Curated GitHub lists for papers, courses, and robotics code.",
    href: "/repositories",
    icon: "/icons/repository.svg",
    count: 15,
    links: [
      { label: "PythonRobotics", href: "/repositories" },
      { label: "Awesome Robotics", href: "/repositories" },
    ],
  },
  {
    id: "ros",
    title: "ROS Resources",
    description: "University courses and community guides for classic ROS.",
    href: "/ros",
    icon: "/icons/ros.svg",
    count: 8,
    links: [
      { label: "Delft OCW", href: "/ros" },
      { label: "ETH Zürich", href: "/ros" },
      { label: "awesome-ros", href: "/ros" },
    ],
  },
  {
    id: "ros2",
    title: "ROS 2 Resources",
    description: "Beginner playlists and Autoware paths for modern ROS 2.",
    href: "/ros2",
    icon: "/icons/ros.svg",
    count: 5,
    links: [
      { label: "Humble crash course", href: "/ros2" },
      { label: "Autoware", href: "/ros2" },
    ],
  },
  {
    id: "youtube",
    title: "YouTube & Playlists",
    description: "Channels and lecture series covering theory to hardware.",
    href: "/youtube",
    icon: "/icons/mdi_youtube.svg",
    count: 20,
    links: [
      { label: "Channels", href: "/youtube" },
      { label: "Playlists", href: "/youtube" },
    ],
  },
  {
    id: "course",
    title: "University Courses",
    description: "Free courses from MIT, Stanford, QUT, and more.",
    href: "/courses",
    icon: "/icons/streamline_class-lesson-solid.svg",
    count: 5,
    links: [
      { label: "MIT OCW", href: "/courses" },
      { label: "Stanford", href: "/courses" },
    ],
  },
  {
    id: "book",
    title: "Books",
    description: "Foundational ROS and robotics texts available online.",
    href: "/books",
    icon: "/icons/icon-park-solid_bookshelf.svg",
    count: 6,
    links: [
      { label: "Gentle Introduction", href: "/books" },
      { label: "ROS by Example", href: "/books" },
    ],
  },
  {
    id: "simulator",
    title: "Simulators",
    description: "Gazebo, Isaac Sim, Webots, MuJoCo, and industrial tools.",
    href: "/simulators",
    icon: "/icons/ix_project-simulation.svg",
    count: 20,
    links: [
      { label: "Gazebo", href: "/simulators" },
      { label: "Isaac Sim", href: "/simulators" },
      { label: "MuJoCo", href: "/simulators" },
    ],
  },
];

export const navLinks = [
  { label: "Browse", href: "/#browse" },
  { label: "Projects", href: "/projects" },
  { label: "ROS 2", href: "/ros2" },
  { label: "Guides", href: "/guides" },
  { label: "Simulators", href: "/simulators" },
  { label: "FAQ", href: "/faq" },
];
