"use client";

import { useReducedMotion, type Variants } from "framer-motion";
import { fadeIn } from "@/public/variant/variant";

export const hoverLift = { y: -4, scale: 1.03 };
export const tapPress = { scale: 0.96, y: 0 };
export const spring = {
  type: "spring" as const,
  stiffness: 420,
  damping: 24,
  mass: 0.6,
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.045, delayChildren: 0.06 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 320, damping: 24 },
  },
};

export function usePrefersReducedMotion() {
  return Boolean(useReducedMotion());
}

/** Enter animation via whileInView — no-ops when reduced motion is on. */
export function useReveal(
  direction: "up" | "down" | "left" | "right" = "up",
  delay = 0.08,
  amount: number = 0.2,
) {
  const reduced = usePrefersReducedMotion();
  if (reduced) return { initial: false as const };
  return {
    variants: fadeIn(direction, delay),
    initial: "hidden" as const,
    whileInView: "show" as const,
    viewport: { once: true, amount },
  };
}

/** Enter animation via animate (hero / above-fold). */
export function useRevealAnimate(
  direction: "up" | "down" | "left" | "right" = "up",
  delay = 0.08,
) {
  const reduced = usePrefersReducedMotion();
  if (reduced) return { initial: false as const };
  return {
    variants: fadeIn(direction, delay),
    initial: "hidden" as const,
    animate: "show" as const,
  };
}

/** Stagger parent for resource grids. */
export function useStagger(amount: number = 0.12) {
  const reduced = usePrefersReducedMotion();
  if (reduced) return { initial: false as const };
  return {
    variants: staggerContainer,
    initial: "hidden" as const,
    whileInView: "show" as const,
    viewport: { once: true, amount },
  };
}

/** Hover / tap / focus lift — disabled under reduced motion. */
export function useInteractionMotion(lift = true) {
  const reduced = usePrefersReducedMotion();
  if (reduced || !lift) {
    return { transition: spring };
  }
  return {
    whileHover: hoverLift,
    whileTap: tapPress,
    whileFocus: hoverLift,
    transition: spring,
  };
}
