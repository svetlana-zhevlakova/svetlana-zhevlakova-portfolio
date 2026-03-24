import Link from "next/link";
import * as React from "react";

import { Tag } from "@/components/Tag";

export type CaseCardProps = {
  title: string;
  focusText: string;
  tags: string[];
  href?: string;
  className?: string;
};

function cx(...values: Array<string | undefined | null | false>) {
  return values.filter(Boolean).join(" ");
}

const cardBase =
  "group w-full max-w-[748px] overflow-hidden rounded-[var(--s-card-radius)] border border-solid px-[var(--s-card-horizontal-padding)] py-[var(--s-card-vertical-padding)]";

const cardColors =
  "border-[var(--s-card-default-border)] bg-[var(--s-card-default-background)] text-[var(--s-card-default-text)] hover:border-[var(--s-card-hover-border)] hover:bg-[var(--s-card-hover-background)] hover:text-[var(--s-card-hover-text)]";

const stackGap =
  "flex h-full min-h-0 flex-col items-start gap-[var(--s-card-to-elementgap)]";
const titleGap =
  "flex min-h-0 flex-1 flex-col items-start gap-[var(--s-card-to-titlegap)]";

export function CaseCard({
  title,
  focusText,
  tags,
  href,
  className
}: CaseCardProps) {
  const Inner = (
    <div className={cx(stackGap)}>
      <div className={cx("w-full", titleGap)}>
        <div className="flex items-start gap-[var(--s-card-to-titlegap)]">
          {tags.slice(0, 2).map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
        <h3 className="w-full flex-1 text-[length:var(--s-typography-headline-h2size)] font-normal leading-[var(--s-typography-headline-h2line)]">
          {title}
        </h3>
      </div>

      <div className="w-full shrink-0 text-[length:var(--s-typography-paragraph-base-size)] font-normal leading-[var(--s-typography-paragraph-base-line)] text-[var(--s-section-text)]">
        {focusText}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cx(cardBase, cardColors, "block h-[200px]", className)}
      >
        {Inner}
      </Link>
    );
  }

  return <div className={cx(cardBase, cardColors, "h-[200px]", className)}>{Inner}</div>;
}

