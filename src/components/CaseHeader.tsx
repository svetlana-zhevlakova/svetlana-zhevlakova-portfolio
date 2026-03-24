import * as React from "react";

import { Tag } from "@/components/Tag";

export type CaseHeaderProps = {
  variant?: "h1" | "h2";
  title: string;
  tags?: string[];
  callout?: React.ReactNode;
  className?: string;
};

function cx(...values: Array<string | undefined | null | false>) {
  return values.filter(Boolean).join(" ");
}

export function CaseHeader({
  variant = "h1",
  title,
  tags = [],
  callout,
  className
}: CaseHeaderProps) {
  const isH1 = variant === "h1";
  const shownTags = isH1 ? tags.slice(0, 2) : tags.slice(0, 1);

  return (
    <div
      className={cx(
        "flex w-[800px] max-w-full flex-col items-start",
        isH1 ? "gap-[var(--s-section-to-subsection-gap)]" : "",
        className
      )}
      data-name="Case Header"
    >
      <div className="flex w-full flex-col items-start gap-[var(--s-section-to-title-gap)]">
        <div
          className={cx(
            "flex items-start",
            isH1
              ? "gap-[var(--s-card-to-titlegap)]"
              : "gap-[var(--p-spacing-space0)]"
          )}
        >
          {shownTags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        {isH1 ? (
          <h1 className="w-full text-[length:var(--s-typography-headline-h1size)] font-normal leading-[var(--s-typography-headline-h1line)] text-[var(--s-section-text)]">
            {title}
          </h1>
        ) : (
          <h2 className="w-full text-[length:var(--s-typography-headline-h2size)] font-normal leading-[var(--s-typography-headline-h2line)] text-[var(--s-section-text)]">
            {title}
          </h2>
        )}
      </div>

      {isH1 && callout ? (
        <div className="w-full">
          <p className="w-full text-[length:var(--s-typography-callout-callout-size)] font-normal leading-[var(--s-typography-callout-callout-line)] text-[var(--s-section-text)]">
            {callout}
          </p>
        </div>
      ) : null}
    </div>
  );
}
