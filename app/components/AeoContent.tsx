"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { faqs } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { fadeIn } from "@/public/variant/variant";

export function AnswerIntro() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-shell pb-8"
    >
      <motion.div
        variants={fadeIn("up", 0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        whileHover={{ y: -2 }}
        className="rounded-[20px] border-2 border-[#0004FF] bg-white p-5 shadow-[0_1px_3px_rgba(11,18,32,0.04)] transition-shadow duration-300 hover:shadow-[0_2px_8px_rgba(11,18,32,0.06)] sm:p-6 md:p-8"
      >
        <h2
          id="about-heading"
          className="mb-3 text-xl font-bold text-black sm:text-2xl md:text-3xl"
        >
          What is Get Into Robotics?
        </h2>
        <p className="mb-4 text-sm leading-relaxed text-black sm:text-base md:text-lg">
          <strong>Get Into Robotics</strong> is a free curated robotics
          resources library by{" "}
          <Link
            href={siteConfig.author.url}
            className="underline decoration-transparent underline-offset-4 transition-colors hover:text-[#0004FF] hover:decoration-[#0004FF]"
          >
            {siteConfig.author.name}
          </Link>
          . It gathers open-source robot projects, ROS and ROS&nbsp;2
          tutorials, GitHub learning repositories, YouTube channels,
          university courses, books, and robot simulators so beginners and
          experienced roboticists can find high-quality material in one place.
        </p>
        <p className="mb-6 text-sm leading-relaxed text-black sm:text-base md:text-lg">
          Use the sections below to jump straight to projects, ROS resources,
          free courses, books, or simulators such as Gazebo, Webots, and NVIDIA
          Isaac Sim.
        </p>
        <nav aria-label="Resource categories">
          <ul className="grid gap-2 sm:grid-cols-2 md:grid-cols-4">
            {siteConfig.sections
              .filter((section) => section.id !== "home")
              .map((section) => (
                <li key={section.id}>
                  <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                    <Link
                      href={`#${section.id}`}
                      className="block rounded-xl border border-[#0004FF] px-3 py-2.5 text-sm font-medium text-black transition-colors hover:bg-[#C2DAFF]"
                    >
                      {section.title}
                    </Link>
                  </motion.div>
                </li>
              ))}
          </ul>
        </nav>
      </motion.div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="section-shell py-10"
    >
      <motion.h2
        id="faq-heading"
        variants={fadeIn("up", 0.05)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-6 text-center text-xl font-bold text-black sm:text-2xl md:text-3xl"
      >
        Frequently asked questions
      </motion.h2>
      <div className="space-y-3 sm:space-y-4">
        {faqs.map((faq, index) => (
          <motion.details
            key={faq.question}
            variants={fadeIn("up", 0.04 + index * 0.03)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="faq-item rounded-[20px] border-2 border-[#0004FF] bg-white p-4 shadow-[0_1px_3px_rgba(11,18,32,0.04)] sm:p-5"
          >
            <summary className="cursor-pointer text-base font-semibold text-black sm:text-lg">
              {faq.question}
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-black sm:text-base">
              {faq.answer}
            </p>
          </motion.details>
        ))}
      </div>
    </section>
  );
}
