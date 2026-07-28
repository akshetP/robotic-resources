"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { socialLinks } from "@/app/home/components/objects";
import { topics } from "@/app/data/topics";
import { siteConfig } from "@/lib/site";
import { fadeIn } from "@/public/variant/variant";

export default function Footer() {
  const half = Math.ceil(topics.length / 2);
  const left = topics.slice(0, half);
  const right = topics.slice(half);

  return (
    <footer className="mt-8 border-t border-[var(--border)] bg-white">
      <motion.div
        variants={fadeIn("up", 0.05)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="section-shell py-14"
      >
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link
              href="#home"
              className="font-display text-xl font-semibold text-[var(--foreground)] transition-colors hover:text-[var(--accent)]"
            >
              {siteConfig.name}
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              {siteConfig.description}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-2">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="icon-btn h-9 w-9"
                >
                  <Image src={link.icon} alt="" width={18} height={18} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
              Browse
            </h2>
            <ul className="space-y-2.5">
              {left.map((topic) => (
                <li key={topic.id}>
                  <Link href={topic.href} className="footer-link">
                    {topic.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
              Learn
            </h2>
            <ul className="space-y-2.5">
              {right.map((topic) => (
                <li key={topic.id}>
                  <Link href={topic.href} className="footer-link">
                    {topic.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="#faq" className="footer-link">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
              About
            </h2>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href={siteConfig.author.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  {siteConfig.author.name}
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.muflih.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  Developed by Mohammed Muflih
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-[var(--border)] pt-6 text-sm text-[var(--muted)] md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {siteConfig.name} by{" "}
            <Link
              href={siteConfig.author.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-[var(--accent)]"
            >
              {siteConfig.author.name}
            </Link>
          </p>
          <p className="text-xs md:text-sm">Built for roboticists at every level.</p>
        </div>
      </motion.div>
    </footer>
  );
}
