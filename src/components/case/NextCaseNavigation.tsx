import * as React from "react";

import { Button } from "@/components/Button";

export type NextCaseNavigationProps = {
  title: string;
  href: string;
  caption?: string;
  ctaLabel?: string;
  className?: string;
};

function cx(...values: Array<string | undefined | null | false>) {
  return values.filter(Boolean).join(" ");
}

function ArrowRightIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="size-4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 3.33331L10.6667 7.99998L6 12.6666"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function NextCaseNavigation({
  title,
  href,
  caption = "Next case study",
  ctaLabel = "View case study",
  className
}: NextCaseNavigationProps) {
  return (
    <section
      className={cx(
        "w-full py-[var(--s-grid-system-vertical-padding)]",
        className
      )}
      data-name="Next case navigation"
    >
      <div className="mx-auto flex w-full max-w-[800px] flex-col items-start gap-[var(--s-section-to-subsection-gap)]">
        <div className="flex w-full flex-col items-start gap-[var(--s-section-to-title-gap)]">
          <p className="text-[length:var(--s-typography-caption-caption-size)] font-normal leading-[var(--s-typography-caption-caption-line)] text-[var(--s-section-caption)]">
            {caption}
          </p>
          <h2 className="w-full text-[length:var(--s-typography-headline-h2size)] font-normal leading-[var(--s-typography-headline-h2line)] text-[var(--s-section-text)]">
            {title}
          </h2>
        </div>

        <Button variant="primary" href={href} rightIcon={<ArrowRightIcon />}>
          {ctaLabel}
        </Button>
      </div>
    </section>
  );
}
