"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/public/variant/variant";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-20 md:pt-24 md:pb-28"
    >
      <div className="section-shell relative">
        <motion.p
          variants={fadeIn("up", 0.05)}
          initial="hidden"
          animate="show"
          className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[var(--accent)] sm:mb-5 sm:text-sm"
        >
          Curated by{" "}
          <Link
            href="https://akshetpatel.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-[var(--accent)]/30 underline-offset-4 transition-colors hover:decoration-[var(--accent)]"
          >
            Akshet Patel
          </Link>
        </motion.p>

        <motion.h1
          variants={fadeIn("up", 0.12)}
          initial="hidden"
          animate="show"
          className="font-display max-w-4xl text-4xl leading-[1.05] font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl md:text-7xl"
        >
          Get Into Robotics
        </motion.h1>

        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--muted)] sm:mt-6 sm:text-lg md:text-xl"
        >
          Get Into Robotics is a free curated robotics resources library for
          every level of roboticist: open-source projects, ROS and ROS&nbsp;2
          guides, university courses, books, and simulators in one place.
        </motion.p>

        <motion.div
          variants={fadeIn("up", 0.28)}
          initial="hidden"
          animate="show"
          className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10"
        >
          <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.96 }}>
            <Link href="#browse" className="btn-primary pulse-ring">
              Browse resources
            </Link>
          </motion.div>
          <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.96 }}>
            <Link href="#ros2" className="btn-secondary">
              Explore ROS 2
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
