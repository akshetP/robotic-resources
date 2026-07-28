"use client";

import Image from "next/image";
import { ResourceTile } from "@/app/components/Interactive";

export type ProjectItem = {
  id: string;
  name: string;
  icon: string;
  href: string;
  description?: string;
};

export const projects: ProjectItem[] = [
  { id: "1", name: "Mini Pupper", icon: "/images/projects/minipupper.svg", href: "https://minipupperdocs.readthedocs.io/en/latest/index.html" },
  { id: "2", name: "Open-Source Rover by NASA Jet Propulsion Laboratory", icon: "/images/projects/nasa.svg", href: "https://github.com/nasa-jpl/open-source-rover#getting-started" },
  { id: "3", name: "OpenPodCar", icon: "/images/projects/openpodcar.svg", href: "https://github.com/OpenPodcar/OpenPodcar" },
  { id: "4", name: "EROS - 1", icon: "/images/projects/pens-eros.svg", href: "https://github.com/PENS-EROS" },
  { id: "5", name: "F1TENTH", icon: "/images/projects/roboracer.svg", href: "https://f1tenth.readthedocs.io/en/main/" },
  { id: "6", name: "The Autoware Foundation", icon: "/images/projects/Autoware.svg", href: "https://github.com/autowarefoundation" },
  { id: "7", name: "machinascript-for-robots", icon: "/images/projects/babycommando.svg", href: "https://github.com/babycommando/machinascript-for-robots" },
  { id: "8", name: "Duckietown", icon: "/images/projects/duckietown.svg", href: "https://github.com/duckietown" },
  { id: "9", name: "Robot-Overlord-App", icon: "/images/projects/MarginallyClever.svg", href: "https://github.com/marginallyclever/robot-overlord-app" },
  { id: "10", name: "ROSbloX", icon: "/images/projects/ROSblo.svg", href: "https://rosblox.github.io/" },
  { id: "11", name: "andino", icon: "/images/projects/andio.svg", href: "https://github.com/Ekumen-OS/andino" },
  { id: "12", name: "The Open Motion Planning Library", icon: "/images/projects/ompl.svg", href: "https://ompl.kavrakilab.org/" },
  { id: "13", name: "TortoiseBot", icon: "/images/projects/tortoisebot.svg", href: "https://github.com/rigbetellabs/tortoisebot" },
];

export const ProjectCard: React.FC<{ project: ProjectItem; className?: string }> = ({
  project,
}) => {
  return (
    <ResourceTile href={project.href}>
      <Image
        src={project.icon}
        width={48}
        height={48}
        alt=""
        className="mb-1 h-8 w-8 object-contain sm:h-10 sm:w-10 md:h-12 md:w-12"
      />
      <div
        className={`font-medium leading-tight text-black ${
          project.id === "2" ? "text-[10px] sm:text-xs" : "text-xs sm:text-sm"
        }`}
      >
        {project.name}
      </div>
    </ResourceTile>
  );
};

export const FindMoreCard: React.FC<{ className?: string }> = () => {
  return (
    <ResourceTile href="https://www.openrobothardware.org/linkedprojects/">
      <Image
        src="/images/projects/Vector.svg"
        width={30}
        height={30}
        alt=""
        className="mb-2 h-6 w-6 md:h-8 md:w-8"
      />
      <div className="px-1 text-xs font-medium leading-tight text-black sm:text-sm">
        Find more projects here
      </div>
    </ResourceTile>
  );
};
