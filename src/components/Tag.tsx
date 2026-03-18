import * as React from "react";

type TagProps = {
  children: React.ReactNode;
  className?: string;
};

function cx(...values: Array<string | undefined | null | false>) {
  return values.filter(Boolean).join(" ");
}

export function Tag({ children, className }: TagProps) {
  return (
    <div
      className={cx(
        "inline-flex items-center justify-center rounded-[var(--s-tag-radius)] border border-solid border-[var(--s-tag-border)] bg-[var(--s-tag-background)] px-[var(--s-tag-horizontal-padding)] py-[var(--s-tag-vertical-padding)]",
        className
      )}
      data-name="Tag"
    >
      <span className="whitespace-nowrap text-[length:var(--s-typography-paragraph-small-size)] font-normal leading-[var(--s-typography-paragraph-small-line)] text-[var(--s-tag-text)]">
        {children}
      </span>
    </div>
  );
}

