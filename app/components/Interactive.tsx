"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import Link from "next/link";
import type { ReactNode, ComponentProps } from "react";

const spring = { type: "spring" as const, stiffness: 420, damping: 24, mass: 0.6 };

export const hoverLift = { y: -4, scale: 1.03 };
export const tapPress = { scale: 0.96, y: 0 };

type MotionLinkProps = ComponentProps<typeof Link> & {
  children: ReactNode;
  className?: string;
  lift?: boolean;
};

export function MotionLink({
  children,
  className = "",
  lift = true,
  ...props
}: MotionLinkProps) {
  return (
    <motion.div
      className="h-full w-full"
      whileHover={lift ? hoverLift : undefined}
      whileTap={tapPress}
      transition={spring}
    >
      <Link className={className} {...props}>
        {children}
      </Link>
    </motion.div>
  );
}

type ResourceTileProps = {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
};

export function ResourceTile({
  href,
  children,
  className = "",
  external = true,
}: ResourceTileProps) {
  const isExternal = external && href.startsWith("http");

  return (
    <motion.div
      className="h-full"
      variants={{
        hidden: { opacity: 0, y: 18, scale: 0.96 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { type: "spring", stiffness: 320, damping: 24 },
        },
      }}
      whileHover={hoverLift}
      whileTap={tapPress}
      transition={spring}
    >
      <Link
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={`interactive-tile group ${className}`}
      >
        <span className="interactive-tile__shine" aria-hidden />
        {children}
        <span className="interactive-tile__arrow" aria-hidden>
          →
        </span>
      </Link>
    </motion.div>
  );
}

type MotionButtonProps = HTMLMotionProps<"button"> & {
  children: ReactNode;
};

export function MotionButton({
  children,
  className = "",
  ...props
}: MotionButtonProps) {
  return (
    <motion.button
      whileHover={hoverLift}
      whileTap={tapPress}
      transition={spring}
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.045, delayChildren: 0.06 },
  },
};
