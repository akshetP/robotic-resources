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
      "Start with beginner ROS 2 Humble tutorials, then practise in a simulator like Gazebo or Webots. Get Into Robotics groups ROS 2 playlists, university materials, and simulator links so you can follow that path without hunting across the web. See the full path in the Start learning ROS 2 guide.",
  },
  {
    question: "What is the difference between ROS and ROS 2?",
    answer:
      "ROS (Robot Operating System) is the classic robotics middleware still used in many university courses and legacy stacks. ROS 2 is the modern successor with better real-time support, security, and multi-robot networking. New learners should usually start with ROS 2 Humble unless a specific course still requires classic ROS.",
  },
  {
    question: "Which robot simulator should beginners try first?",
    answer:
      "Beginners commonly start with Gazebo (Open Robotics) or Webots because both integrate well with ROS 2 learning workflows and have strong documentation. NVIDIA Isaac Sim and MuJoCo are better once you need advanced perception, reinforcement learning, or GPU-heavy simulation.",
  },
  {
    question: "Which open-source robotics projects are featured?",
    answer:
      "Featured projects include Duckietown, TortoiseBot, NASA JPL Open Source Rover, Autoware, F1TENTH, andino, Mini Pupper, OpenPodCar, ROSbloX, and the Open Motion Planning Library (OMPL), among others.",
  },
  {
    question: "Are the books and courses on Get Into Robotics free?",
    answer:
      "Browsing the curated lists on getintorobotics.com is free. Many linked university courses and several robotics books are free to access, but individual third-party courses, books, or tools may have their own licences or pricing.",
  },
  {
    question: "Is Get Into Robotics free to use?",
    answer:
      "Yes. The curated resource lists on getintorobotics.com are free to browse. Individual third-party courses, books, or tools may have their own licences or pricing.",
  },
  {
    question: "How are resources selected?",
    answer:
      "Resources are curated by Akshet Patel for educational usefulness, open access where possible, and relevance to learning robotics, ROS, and ROS 2. The library prefers well-known university materials, active open-source projects, and widely used simulators over affiliate or paywalled filler.",
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
    dateModified: siteConfig.dateModified,
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
    dateModified: siteConfig.dateModified,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: {
      "@type": "Thing",
      name: "Robotics education resources",
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${siteConfig.url}${siteConfig.ogImage.url}`,
      width: siteConfig.ogImage.width,
      height: siteConfig.ogImage.height,
    },
    inLanguage: siteConfig.language,
    author: { "@id": `${siteConfig.url}/#person` },
    creator: { "@id": `${siteConfig.url}/#person` },
  };
}

export function buildItemListJsonLd() {
  const items = [
    ...siteConfig.sections.filter((s) => s.id !== "home"),
    ...siteConfig.guides.map((guide) => ({
      id: guide.path,
      path: guide.path,
      title: guide.title,
      description: guide.description,
    })),
  ];

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${siteConfig.url}/#resource-sections`,
    name: "Robotics resource categories and guides",
    description:
      "Curated categories and learning guides on Get Into Robotics.",
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      url: `${siteConfig.url}${item.path}`,
      description: item.description,
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

export function buildArticleJsonLd(input: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    url: `${siteConfig.url}${input.path}`,
    datePublished: siteConfig.dateModified,
    dateModified: siteConfig.dateModified,
    inLanguage: siteConfig.language,
    author: { "@id": `${siteConfig.url}/#person` },
    publisher: { "@id": `${siteConfig.url}/#person` },
    image: `${siteConfig.url}${siteConfig.ogImage.url}`,
    mainEntityOfPage: `${siteConfig.url}${input.path}`,
  };
}

export function getAllJsonLdGraphs() {
  return [
    buildWebsiteJsonLd(),
    buildPersonJsonLd(),
    buildWebPageJsonLd(),
    buildItemListJsonLd(),
    buildFaqJsonLd(),
  ];
}
