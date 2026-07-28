"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/public/variant/variant";
import { topics } from "@/app/data/topics";
import { staggerContainer } from "./Interactive";

export default function TopicHub() {
  return (
    <section id="browse" className="scroll-mt-24 pb-16 sm:pb-20 md:pb-28">
      <div className="section-shell">
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-8 max-w-2xl md:mb-10"
        >
          <h2 className="font-display text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl md:text-4xl">
            Find answers by topic
          </h2>
          <p className="mt-3 text-sm text-[var(--muted)] sm:text-base">
            Browse the library by category. Each section opens curated links for
            projects, ROS, learning paths, and tools.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4"
        >
          {topics.map((topic) => (
            <motion.div
              key={topic.id}
              variants={{
                hidden: { opacity: 0, y: 18, scale: 0.96 },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { type: "spring", stiffness: 320, damping: 24 },
                },
              }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href={topic.href} className="resource-card group h-full">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-soft)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-4deg]">
                  <Image src={topic.icon} alt="" width={28} height={28} />
                </div>
                <div className="mb-1 flex items-start justify-between gap-2">
                  <h3 className="font-display text-base font-semibold text-[var(--foreground)] sm:text-lg">
                    {topic.title}
                  </h3>
                  <span className="type-chip shrink-0">{topic.count}</span>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-[var(--muted)]">
                  {topic.description}
                </p>
                <ul className="mb-5 space-y-1.5">
                  {topic.links.map((link) => (
                    <li
                      key={link.label}
                      className="flex items-center gap-2 text-sm text-[var(--foreground)]/80"
                    >
                      <span className="text-[var(--accent)] transition-transform group-hover:translate-x-0.5">
                        ↳
                      </span>
                      {link.label}
                    </li>
                  ))}
                </ul>
                <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-[var(--accent)]">
                  Show all
                  <span
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
