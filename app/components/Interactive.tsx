"use client";

import { forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import Link from "next/link";
import type { ReactNode, ComponentProps } from "react";
import { NewTabHint } from "@/lib/a11y";
import {
  hoverLift,
  spring,
  staggerContainer,
  staggerItem,
  tapPress,
  useInteractionMotion,
  usePrefersReducedMotion,
} from "@/lib/motion";

export { hoverLift, tapPress, staggerContainer };

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
  const interaction = useInteractionMotion(lift);

  return (
    <motion.div className="h-full w-full" {...interaction}>
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
  const reduced = usePrefersReducedMotion();
  const interaction = useInteractionMotion(true);

  return (
    <motion.div
      className="h-full"
      variants={reduced ? undefined : staggerItem}
      {...interaction}
    >
      <Link
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={`interactive-tile group ${className}`}
      >
        <span className="interactive-tile__shine" aria-hidden />
        {children}
        {isExternal ? <NewTabHint /> : null}
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

export const MotionButton = forwardRef<HTMLButtonElement, MotionButtonProps>(
  function MotionButton({ children, className = "", ...props }, ref) {
    const interaction = useInteractionMotion(true);

    return (
      <motion.button
        ref={ref}
        className={className}
        {...interaction}
        {...props}
      >
        {children}
      </motion.button>
    );
  },
);
