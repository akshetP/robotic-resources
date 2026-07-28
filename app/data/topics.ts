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
    href: "#project",
    icon: "/icons/project.svg",
    count: 13,
    links: [
      { label: "Duckietown", href: "#project" },
      { label: "NASA Rover", href: "#project" },
      { label: "Mini Pupper", href: "#project" },
    ],
  },
  {
    id: "repository",
    title: "Learning Repositories",
    description: "Curated GitHub lists for papers, courses, and robotics code.",
    href: "#repository",
    icon: "/icons/repository.svg",
    count: 15,
    links: [
      { label: "PythonRobotics", href: "#repository" },
      { label: "Awesome Robotics", href: "#repository" },
    ],
  },
  {
    id: "ros",
    title: "ROS Resources",
    description: "University courses and community guides for classic ROS.",
    href: "#ros",
    icon: "/icons/ros.svg",
    count: 8,
    links: [
      { label: "Delft OCW", href: "#ros" },
      { label: "ETH Zürich", href: "#ros" },
      { label: "awesome-ros", href: "#ros" },
    ],
  },
  {
    id: "ros2",
    title: "ROS 2 Resources",
    description: "Beginner playlists and Autoware paths for modern ROS 2.",
    href: "#ros2",
    icon: "/icons/ros.svg",
    count: 5,
    links: [
      { label: "Humble crash course", href: "#ros2" },
      { label: "Autoware", href: "#ros2" },
    ],
  },
  {
    id: "youtube",
    title: "YouTube & Playlists",
    description: "Channels and lecture series covering theory to hardware.",
    href: "#youtube",
    icon: "/icons/mdi_youtube.svg",
    count: 20,
    links: [
      { label: "Channels", href: "#youtube" },
      { label: "Playlists", href: "#youtube" },
    ],
  },
  {
    id: "course",
    title: "University Courses",
    description: "Free courses from MIT, Stanford, QUT, and more.",
    href: "#course",
    icon: "/icons/streamline_class-lesson-solid.svg",
    count: 5,
    links: [
      { label: "MIT OCW", href: "#course" },
      { label: "Stanford", href: "#course" },
    ],
  },
  {
    id: "book",
    title: "Books",
    description: "Foundational ROS and robotics texts available online.",
    href: "#book",
    icon: "/icons/icon-park-solid_bookshelf.svg",
    count: 6,
    links: [
      { label: "Gentle Introduction", href: "#book" },
      { label: "ROS by Example", href: "#book" },
    ],
  },
  {
    id: "simulator",
    title: "Simulators",
    description: "Gazebo, Isaac Sim, Webots, MuJoCo, and industrial tools.",
    href: "#simulator",
    icon: "/icons/ix_project-simulation.svg",
    count: 20,
    links: [
      { label: "Gazebo", href: "#simulator" },
      { label: "Isaac Sim", href: "#simulator" },
      { label: "MuJoCo", href: "#simulator" },
    ],
  },
];

export const navLinks = [
  { label: "Browse", href: "#browse" },
  { label: "Projects", href: "#project" },
  { label: "ROS", href: "#ros" },
  { label: "ROS 2", href: "#ros2" },
  { label: "Learn", href: "#youtube" },
  { label: "FAQ", href: "#faq" },
];
