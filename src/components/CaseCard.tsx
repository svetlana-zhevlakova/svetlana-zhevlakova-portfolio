import Link from "next/link";
import * as React from "react";

import { Tag } from "@/components/Tag";

export type CaseCardProps = {
  title: string;
  focusLabel?: string;
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

const stackGap = "flex flex-col items-start gap-[var(--s-card-to-elementgap)]";
const titleGap = "flex flex-col items-start gap-[var(--s-card-to-titlegap)]";

export function CaseCard({
  title,
  focusLabel = "Focus",
  focusText,
  tags,
  href,
  className
}: CaseCardProps) {
  const Inner = (
    <div className={cx(stackGap)}>
      <div className="flex items-start gap-[var(--s-card-to-titlegap)]">
        {tags.slice(0, 2).map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>

      <div className={cx("w-full", titleGap)}>
        <h3 className="w-full text-[length:var(--s-typography-headline-h2size)] font-normal leading-[var(--s-typography-headline-h2line)]">
          {title}
        </h3>

        <div className="flex w-full flex-col items-start gap-1">
          <div className="text-[length:var(--s-typography-caption-caption-size)] font-normal leading-[var(--s-typography-caption-caption-line)] text-[var(--s-section-caption)]">
            {focusLabel}
          </div>
          <div className="text-[length:var(--s-typography-paragraph-base-size)] font-normal leading-[var(--s-typography-paragraph-base-line)] text-[var(--s-section-text)]">
            {focusText}
          </div>
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cx(cardBase, cardColors, "block", className)}
      >
        {Inner}
      </Link>
    );
  }

  return <div className={cx(cardBase, cardColors, className)}>{Inner}</div>;
}

