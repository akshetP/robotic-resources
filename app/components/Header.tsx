"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/app/data/topics";
import { socialLinks } from "@/app/home/components/objects";
import { MotionButton } from "./Interactive";
import { slideMenu } from "@/public/variant/variant";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/85 backdrop-blur-xl transition-[border-color,box-shadow,background-color] duration-300 ${
        scrolled
          ? "border-[var(--border)] shadow-[0_1px_4px_rgba(11,18,32,0.06)]"
          : "border-transparent"
      }`}
    >
      <div className="section-shell flex items-center justify-between gap-3 py-3">
        <motion.div whileHover={{ x: 2 }} whileTap={{ scale: 0.97 }}>
          <Link
            href="#home"
            className="font-display text-base font-semibold tracking-tight text-[var(--foreground)] transition-colors hover:text-[var(--accent)] sm:text-lg md:text-xl"
            onClick={() => setOpen(false)}
          >
            Get Into Robotics
          </Link>
        </motion.div>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          {socialLinks.slice(0, 3).map((link) => (
            <motion.div
              key={link.label}
              whileHover={{ y: -2, scale: 1.06 }}
              whileTap={{ scale: 0.92 }}
            >
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="icon-btn h-9 w-9"
              >
                <Image src={link.icon} alt="" width={18} height={18} />
              </Link>
            </motion.div>
          ))}
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.96 }}>
            <Link href="#browse" className="btn-primary ml-1 px-4 py-2">
              Browse
            </Link>
          </motion.div>
        </div>

        <MotionButton
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-white text-[var(--accent)] lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            animate={open ? { rotate: 90 } : { rotate: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            {open ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </motion.svg>
        </MotionButton>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            key="mobile-nav"
            variants={slideMenu}
            initial="hidden"
            animate="show"
            exit="exit"
            className="overflow-hidden border-t border-[var(--border)] bg-white lg:hidden"
          >
            <ul className="section-shell flex flex-col gap-1 py-3 !px-4">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * index }}
                >
                  <Link
                    href={link.href}
                    className="nav-link block w-full py-3 text-base text-[var(--foreground)]"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <li className="mt-2 flex flex-wrap gap-2 border-t border-[var(--border)] pt-3">
                {socialLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="icon-btn"
                    onClick={() => setOpen(false)}
                  >
                    <Image src={link.icon} alt="" width={18} height={18} />
                  </Link>
                ))}
              </li>
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
