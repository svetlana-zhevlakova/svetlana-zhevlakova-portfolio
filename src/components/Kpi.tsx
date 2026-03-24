import * as React from "react";

export type KpiProps = {
  title: React.ReactNode;
  content: React.ReactNode;
  icon?: React.ReactNode | null;
  showIcon?: boolean;
  className?: string;
};

function cx(...values: Array<string | undefined | null | false>) {
  return values.filter(Boolean).join(" ");
}

function PlaceholderIcon() {
  return (
    <span
      aria-hidden="true"
      className="inline-block size-6 rounded-[var(--p-raduis-radius-full)] border border-[var(--s-kpi-default-text)]"
    />
  );
}

export function Kpi({
  title,
  content,
  icon = null,
  showIcon = true,
  className
}: KpiProps) {
  return (
    <div
      className={cx(
        "flex w-[400px] max-w-full flex-col items-start gap-[var(--s-card-to-elementgap)] overflow-hidden rounded-[var(--s-card-radius)] border border-solid px-[var(--s-card-horizontal-padding)] py-[var(--s-card-vertical-padding)]",
        "border-[var(--s-kpi-default-border)] bg-[var(--s-kpi-default-background)]",
        className
      )}
      data-name="KPI"
    >
      {showIcon ? (
        <span className="inline-flex size-6 shrink-0 items-center justify-center">
          {icon ?? <PlaceholderIcon />}
        </span>
      ) : null}

      <div className="flex w-full flex-col items-start gap-[var(--s-card-to-titlegap)] text-[var(--s-kpi-default-text)]">
        <h3 className="w-full text-[length:var(--s-typography-title-title-size)] font-semibold leading-[var(--s-typography-title-title-line)]">
          {title}
        </h3>
        <p className="w-full text-[length:var(--s-typography-paragraph-base-size)] font-normal leading-[var(--s-typography-paragraph-base-line)]">
          {content}
        </p>
      </div>
    </div>
  );
}
