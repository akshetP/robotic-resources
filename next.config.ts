import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/freelearning",
        destination: "/courses",
        permanent: true,
      },
      {
        source: "/simulator",
        destination: "/simulators",
        permanent: true,
      },
      {
        source: "/project",
        destination: "/projects",
        permanent: true,
      },
      {
        source: "/repository",
        destination: "/repositories",
        permanent: true,
      },
      {
        source: "/book",
        destination: "/books",
        permanent: true,
      },
      {
        source: "/course",
        destination: "/courses",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
