"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { socialLinks, resourceCards } from "./components/objects";
import { NewTabHint, withNewTabLabel } from "@/lib/a11y";
import {
  staggerContainer,
  staggerItem,
  useInteractionMotion,
  usePrefersReducedMotion,
  useRevealAnimate,
} from "@/lib/motion";

export default function Home() {
  const titleReveal = useRevealAnimate("up", 0.05);
  const socialReveal = useRevealAnimate("up", 0.12);
  const reduced = usePrefersReducedMotion();
  const iconMotion = useInteractionMotion(true);

  const gridProps = reduced
    ? { initial: false as const }
    : {
        variants: staggerContainer,
        initial: "hidden" as const,
        animate: "show" as const,
      };

  return (
    <div className="section-pad relative overflow-hidden">
      <div className="section-shell relative">
        <motion.h1
          {...titleReveal}
          className="font-display mx-auto mb-8 max-w-4xl text-center text-2xl font-medium leading-tight text-black sm:text-3xl md:mb-12 md:text-4xl lg:text-5xl"
        >
          Robotics Resources by{" "}
          <Link
            href="https://akshetpatel.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-[var(--accent)]/30 underline-offset-4 transition-colors duration-300 hover:text-[#0004FF] hover:decoration-[#0004FF]"
          >
            Akshet Patel
            <NewTabHint />
          </Link>
        </motion.h1>

        <div className="mx-auto flex max-w-4xl flex-col gap-5 md:gap-6">
          <motion.div
            {...socialReveal}
            className="rounded-xl border-2 border-[#0004FF] bg-white p-3 shadow-[0_1px_3px_rgba(11,18,32,0.04)] sm:p-4"
          >
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
              {socialLinks.map((link) => (
                <motion.div key={link.label} {...iconMotion}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={withNewTabLabel(link.label)}
                    className="icon-btn h-11 w-11 rounded-lg"
                  >
                    <Image
                      src={link.icon}
                      alt=""
                      width={28}
                      height={28}
                      className="h-6 w-6 sm:h-7 sm:w-7"
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            id="browse"
            {...gridProps}
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4"
          >
            {resourceCards.map((card) => (
              <motion.div
                key={card.href + card.title}
                variants={reduced ? undefined : staggerItem}
              >
                <Link
                  href={card.href}
                  className="home-tile group h-full min-h-[5.75rem] sm:min-h-[7.5rem] md:min-h-[9rem]"
                >
                  <span className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--accent-soft)] transition-transform duration-300 group-hover:scale-110 group-focus-visible:scale-110 sm:h-11 sm:w-11">
                    <Image
                      src={card.icon}
                      width={28}
                      height={28}
                      alt=""
                      className="h-5 w-5 sm:h-6 sm:w-6"
                    />
                  </span>
                  <h3 className="text-[11px] font-medium leading-tight text-gray-800 sm:text-xs md:text-sm">
                    {card.title}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
