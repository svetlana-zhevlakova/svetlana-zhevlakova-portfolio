import Link from "next/link";

import type { CaseMeta } from "@/config/cases";

type CaseNavProps = {
  cases: CaseMeta[];
  currentSlug: string;
  className?: string;
};

function cx(...values: Array<string | undefined | null | false>) {
  return values.filter(Boolean).join(" ");
}

export function CaseNav({ cases, currentSlug, className }: CaseNavProps) {
  return (
    <nav
      className={cx(
        "flex w-full items-center justify-between gap-4 border-b border-[var(--s-card-default-border)] pb-5",
        className
      )}
      aria-label="Case studies"
    >
      <div className="text-[length:var(--s-typography-caption-caption-size)] font-normal leading-[var(--s-typography-caption-caption-line)] text-[var(--s-section-caption)]">
        Case studies
      </div>
      <ul className="flex flex-wrap items-center gap-4 text-[length:var(--s-typography-paragraph-small-size)] leading-[var(--s-typography-paragraph-small-line)]">
        {cases.map((c) => {
          const isActive = c.slug === currentSlug;
          return (
            <li key={c.slug}>
              <Link
                href={`/cases/${c.slug}`}
                className={cx(
                  "inline-flex items-center gap-2 whitespace-nowrap rounded-[var(--s-tag-radius)] px-[var(--s-tag-horizontal-padding)] py-[var(--s-tag-vertical-padding)] transition-colors",
                  isActive
                    ? "bg-[var(--s-card-hover-background)] text-[var(--s-card-hover-text)]"
                    : "bg-[var(--s-tag-background)] text-[var(--s-tag-text)] hover:bg-[var(--s-card-hover-background)] hover:text-[var(--s-card-hover-text)]"
                )}
              >
                <span className="truncate">{c.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

