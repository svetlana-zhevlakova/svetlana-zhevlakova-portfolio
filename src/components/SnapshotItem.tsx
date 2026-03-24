import * as React from "react";

export type SnapshotItemProps = {
  title: string;
  content: React.ReactNode;
  className?: string;
};

function cx(...values: Array<string | undefined | null | false>) {
  return values.filter(Boolean).join(" ");
}

export function SnapshotItem({ title, content, className }: SnapshotItemProps) {
  return (
    <div
      className={cx(
        "inline-flex w-[390px] max-w-full items-start gap-[var(--s-section-to-title-gap)] text-[length:var(--s-typography-paragraph-base-size)] font-normal leading-[var(--s-typography-paragraph-base-line)]",
        className
      )}
      data-name="Snapshot / Item"
    >
      <span className="shrink-0 text-[var(--s-section-caption)]">{title}:</span>
      <span className="text-[var(--s-section-text)]">{content}</span>
    </div>
  );
}
