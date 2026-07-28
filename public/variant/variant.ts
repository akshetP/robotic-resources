import type { Variants } from "framer-motion";

export const fadeIn = (
  direction: "up" | "down" | "left" | "right",
  delay: number,
): Variants => {
  const isUp = direction === "up";
  const isDown = direction === "down";
  const isLeft = direction === "left";
  const isRight = direction === "right";

  return {
    hidden: {
      y: isUp ? 28 : isDown ? -28 : 0,
      x: isLeft ? 28 : isRight ? -28 : 0,
      scale: 0.96,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 260,
        damping: 24,
        delay,
      },
    },
  };
};

export const scaleIn = (delay = 0): Variants => ({
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 22,
      delay,
    },
  },
});

export const slideMenu = {
  hidden: { opacity: 0, height: 0 },
  show: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.2, ease: [0.4, 0, 1, 1] as const },
  },
};
