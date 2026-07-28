"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/public/variant/variant";

export type LibraryItem = {
  title: string;
  href: string;
  type: string;
  icon?: string;
};

type ResourceSectionProps = {
  id: string;
  title: string;
  description: string;
  icon: string;
  items: LibraryItem[];
  filters?: string[];
  moreHref?: string;
  moreLabel?: string;
  altBackground?: boolean;
};

export default function ResourceSection({
  id,
  title,
  description,
  icon,
  items,
  filters,
  moreHref,
  moreLabel = "Find more",
  altBackground = false,
}: ResourceSectionProps) {
  const allFilters = filters?.length ? ["All", ...filters] : [];
  const [active, setActive] = useState(allFilters[0] ?? "All");

  const visible = useMemo(() => {
    if (!filters?.length || active === "All") return items;
    return items.filter((item) => item.type === active);
  }, [active, filters, items]);

  return (
    <section
      id={id}
      className={`scroll-mt-24 py-16 md:py-20 ${altBackground ? "bg-[var(--surface-alt)]" : ""}`}
    >
      <div className="section-shell">
        <motion.div
          variants={fadeIn("up", 0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mb-8 flex flex-col gap-6 md:mb-10 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--accent-soft)]">
                <Image src={icon} alt="" width={26} height={26} />
              </div>
              <span className="type-chip">{visible.length} resources</span>
            </div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl">
              {title}
            </h2>
            <p className="mt-3 text-[var(--muted)]">{description}</p>
          </div>

          {allFilters.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {allFilters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActive(filter)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active === filter
                      ? "bg-[var(--accent)] text-white"
                      : "border border-[var(--border)] bg-white text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          )}
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {visible.map((item) => (
            <Link
              key={`${item.href}-${item.title}`}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="resource-card group"
            >
              <div className="mb-3 flex items-start justify-between gap-3">
                <span className="type-chip">{item.type}</span>
                {item.icon && (
                  <Image src={item.icon} alt="" width={28} height={28} className="shrink-0" />
                )}
              </div>
              <h3 className="text-base font-medium leading-snug text-[var(--foreground)] group-hover:text-[var(--accent)]">
                {item.title}
              </h3>
              <span className="mt-4 inline-flex items-center gap-1 text-sm text-[var(--muted)] transition-colors group-hover:text-[var(--accent)]">
                Open
                <span aria-hidden>→</span>
              </span>
            </Link>
          ))}

          {moreHref && (
            <Link
              href={moreHref}
              target="_blank"
              rel="noopener noreferrer"
              className="resource-card items-center justify-center border-dashed bg-[var(--accent-soft)]/40 text-center"
            >
              <span className="font-medium text-[var(--accent)]">{moreLabel} →</span>
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}
