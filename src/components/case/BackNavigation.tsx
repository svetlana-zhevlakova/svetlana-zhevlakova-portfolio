import Link from "next/link";
import * as React from "react";

export type BackNavigationProps = {
  href?: string;
  label?: string;
  className?: string;
  icon?: React.ReactNode;
};

function cx(...values: Array<string | undefined | null | false>) {
  return values.filter(Boolean).join(" ");
}

function ArrowLeftIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="size-4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.99992 12.6667L5.33325 8.00002L9.99992 3.33335"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BackNavigation({
  href = "/#cases",
  label = "Back to case studies",
  className,
  icon
}: BackNavigationProps) {
  return (
    <div className={cx("flex w-[800px] max-w-full flex-col items-start", className)}>
      <Link
        href={href}
        className={cx(
          "group relative inline-flex flex-col items-center py-[var(--s-button-vertical-padding)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--p-info-color-focus-ring-default)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--s-page-background)]"
        )}
      >
        <span
          className={cx(
            "inline-flex items-center justify-center gap-[var(--s-button-to-hover-mark)]",
            "text-[length:var(--s-typography-paragraph-base-size)] font-normal leading-[var(--s-typography-paragraph-base-line)]",
            "text-[var(--s-button-link-default-text)] group-hover:text-[var(--s-button-link-hover-text)]"
          )}
        >
          <span className="inline-flex shrink-0">{icon ?? <ArrowLeftIcon />}</span>
          <span>{label}</span>
        </span>
        <span
          aria-hidden="true"
          className={cx(
            "absolute bottom-[3px] h-px rounded-[var(--p-raduis-radius-full)] bg-[var(--s-button-link-hover-border)] transition-all duration-200",
            "left-1/2 w-0 -translate-x-1/2 group-hover:left-0 group-hover:right-0 group-hover:w-auto group-hover:translate-x-0"
          )}
        />
      </Link>
    </div>
  );
}
