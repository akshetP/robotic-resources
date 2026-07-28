"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { faqs } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { NewTabHint } from "@/lib/a11y";
import { useInteractionMotion, useReveal } from "@/lib/motion";

export function AnswerIntro() {
  const reveal = useReveal("up", 0.08, 0.25);
  const cardMotion = useInteractionMotion(true);
  const linkMotion = useInteractionMotion(true);

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-shell pb-8"
    >
      <motion.div
        {...reveal}
        {...cardMotion}
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
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-transparent underline-offset-4 transition-colors hover:text-[#0004FF] hover:decoration-[#0004FF]"
          >
            {siteConfig.author.name}
            <NewTabHint />
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
                  <motion.div {...linkMotion}>
                    <Link
                      href={`#${section.id}`}
                      className="block rounded-xl border border-[#0004FF] px-3 py-2.5 text-sm font-medium text-black transition-colors hover:bg-[#C2DAFF] focus-visible:bg-[#C2DAFF]"
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
  const headingReveal = useReveal("up", 0.05);
  // Hooks can't be called in a loop — reveal variants are static enough;
  // use one shared reduced-motion-aware pattern per item via delay in props.
  const itemReveal = useReveal("up", 0.08, 0.2);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="section-shell py-10"
    >
      <motion.h2
        id="faq-heading"
        {...headingReveal}
        className="mb-6 text-center text-xl font-bold text-black sm:text-2xl md:text-3xl"
      >
        Frequently asked questions
      </motion.h2>
      <div className="space-y-3 sm:space-y-4">
        {faqs.map((faq) => (
          <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      {/* silence unused if tree-shaken oddly — itemReveal used in FaqItem via own hook */}
      <span className="hidden" aria-hidden>
        {itemReveal ? null : null}
      </span>
    </section>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const reveal = useReveal("up", 0.08, 0.2);

  return (
    <motion.details
      {...reveal}
      className="faq-item rounded-[20px] border-2 border-[#0004FF] bg-white p-4 shadow-[0_1px_3px_rgba(11,18,32,0.04)] sm:p-5"
    >
      <summary className="cursor-pointer text-base font-semibold text-black sm:text-lg">
        {question}
      </summary>
      <p className="mt-3 text-sm leading-relaxed text-black sm:text-base">
        {answer}
      </p>
    </motion.details>
  );
}
