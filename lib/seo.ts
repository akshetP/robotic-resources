import { siteConfig } from "./site";

export const faqs = [
  {
    question: "What is Get Into Robotics?",
    answer:
      "Get Into Robotics is a free curated robotics resources library by Akshet Patel. It collects open-source robot projects, ROS and ROS 2 tutorials, GitHub learning repositories, YouTube channels, university courses, books, and robot simulators so beginners and experienced roboticists can find high-quality learning material in one place.",
  },
  {
    question: "Who is Get Into Robotics for?",
    answer:
      "The library is for students, hobbyists, researchers, and engineers who want to learn robotics or deepen their ROS / ROS 2 skills. Sections are organised by resource type so both absolute beginners and advanced practitioners can jump to projects, courses, books, or simulators.",
  },
  {
    question: "What is the best way to start learning ROS 2?",
    answer:
      "Start with beginner ROS 2 Humble tutorials, then practise in a simulator like Gazebo or Webots. Get Into Robotics groups ROS 2 playlists, university materials, and simulator links so you can follow that path without hunting across the web.",
  },
  {
    question: "Which open-source robotics projects are featured?",
    answer:
      "Featured projects include Duckietown, TortoiseBot, NASA JPL Open Source Rover, Autoware, F1TENTH, andino, Mini Pupper, OpenPodCar, ROSbloX, and the Open Motion Planning Library (OMPL), among others.",
  },
  {
    question: "Which robot simulators should beginners try?",
    answer:
      "Beginners commonly start with Gazebo (Open Robotics), Webots, or CoppeliaSim. For advanced simulation and AI robotics workflows, NVIDIA Isaac Sim and MuJoCo are widely used. Get Into Robotics lists these alongside industrial tools such as ABB RobotStudio and RoboDK.",
  },
  {
    question: "Is Get Into Robotics free to use?",
    answer:
      "Yes. The curated resource lists on getintorobotics.com are free to browse. Individual third-party courses, books, or tools may have their own licences or pricing.",
  },
] as const;

export function buildWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    publisher: { "@id": `${siteConfig.url}/#person` },
    author: { "@id": `${siteConfig.url}/#person` },
  };
}

export function buildPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: siteConfig.author.name,
    url: siteConfig.author.url,
    sameAs: [...siteConfig.author.sameAs],
    jobTitle: "Robotics Engineer & Educator",
    knowsAbout: [
      "Robotics",
      "ROS",
      "ROS 2",
      "Robot Operating System",
      "Open source robotics",
    ],
  };
}

export function buildWebPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${siteConfig.url}/#webpage`,
    url: siteConfig.url,
    name: siteConfig.title,
    description: siteConfig.description,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: {
      "@type": "Thing",
      name: "Robotics education resources",
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${siteConfig.url}${siteConfig.ogImage.url}`,
    },
    inLanguage: siteConfig.language,
    author: { "@id": `${siteConfig.url}/#person` },
    creator: { "@id": `${siteConfig.url}/#person` },
  };
}

export function buildItemListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${siteConfig.url}/#resource-sections`,
    name: "Robotics resource categories",
    description:
      "Curated categories of robotics learning resources on Get Into Robotics.",
    numberOfItems: siteConfig.sections.filter((s) => s.id !== "home").length,
    itemListElement: siteConfig.sections
      .filter((section) => section.id !== "home")
      .map((section, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: section.title,
        url: `${siteConfig.url}/#${section.id}`,
        description: section.description,
      })),
  };
}

export function buildFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteConfig.url}/#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
    ],
  };
}

export function getAllJsonLdGraphs() {
  return [
    buildWebsiteJsonLd(),
    buildPersonJsonLd(),
    buildWebPageJsonLd(),
    buildItemListJsonLd(),
    buildFaqJsonLd(),
    buildBreadcrumbJsonLd(),
  ];
}
