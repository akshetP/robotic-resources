export type ResourceItem = {
  title: string;
  href: string;
  type?: string;
};

export const rosResources: ResourceItem[] = [
  {
    title: "Delft University of Technology, Netherlands",
    href: "https://ocw.tudelft.nl/courses/hello-real-world-ros-robot-operating-system/",
    type: "Course",
  },
  {
    title: "ETH Zürich, Switzerland",
    href: "https://rsl.ethz.ch/education-students/lectures/ros.html",
    type: "Course",
  },
  {
    title: "Purdue University, USA",
    href: "https://web.ics.purdue.edu/~rvoyles/Classes/ROSprogramming/index.html",
    type: "Course",
  },
  {
    title: "Universitat Politècnica de Catalunya, Barcelona",
    href: "https://sir.upc.edu/projects/rostutorials/",
    type: "Course",
  },
  {
    title: "University of Belgrade, Serbia",
    href: "https://automatika.etf.bg.ac.rs/sr/13e054trs",
    type: "Course",
  },
  {
    title: "University of Washington, USA",
    href: "https://github.com/cse481sp17/cse481c/wiki",
    type: "Course",
  },
  {
    title: "Companies working with ROS",
    href: "https://github.com/vmayoral/ros-robotics-companies",
    type: "Repo",
  },
  {
    title: "awesome-ros",
    href: "https://github.com/ps-micro/awesome-ros",
    type: "Repo",
  },
];
