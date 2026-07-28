"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/public/variant/variant";
import { staggerContainer } from "./Interactive";
import type { ReactNode } from "react";

type SectionFrameProps = {
  id?: string;
  icon: string;
  title: string;
  children: ReactNode;
  tinted?: boolean;
  subtitle?: string;
};

export default function SectionFrame({
  id,
  icon,
  title,
  children,
  tinted = false,
  subtitle,
}: SectionFrameProps) {
  return (
    <section
      id={id}
      className={`section-pad relative overflow-hidden ${tinted ? "section-tint" : ""}`}
    >
      <div className="section-shell relative">
        <motion.header
          variants={fadeIn("up", 0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mb-8 flex flex-col items-center text-center md:mb-12"
        >
          <motion.div
            whileHover={{ rotate: -6, scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
            className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 shadow-[0_1px_2px_rgba(11,18,32,0.04)] ring-1 ring-[var(--accent)]/15 md:mb-5 md:h-16 md:w-16"
          >
            <Image
              src={icon}
              width={40}
              height={40}
              alt=""
              className="h-7 w-7 md:h-10 md:w-10"
            />
          </motion.div>
          <h2 className="font-display max-w-3xl text-xl font-bold leading-tight text-[var(--foreground)] sm:text-2xl md:text-3xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-2 max-w-xl text-sm text-[var(--muted)] md:text-base">
              {subtitle}
            </p>
          ) : null}
        </motion.header>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="resource-grid"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
