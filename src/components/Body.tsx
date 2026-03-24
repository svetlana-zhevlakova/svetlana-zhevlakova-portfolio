import * as React from "react";

import { SnapshotItem } from "@/components/SnapshotItem";

type SnapshotEntry = {
  title: string;
  content: React.ReactNode;
};

export type BodyProps = {
  variant?: "text" | "subsection" | "snapshot";
  text?: React.ReactNode;
  heading?: React.ReactNode;
  snapshotItems?: SnapshotEntry[];
  className?: string;
};

function cx(...values: Array<string | undefined | null | false>) {
  return values.filter(Boolean).join(" ");
}

export function Body({
  variant = "text",
  text,
  heading,
  snapshotItems = [],
  className
}: BodyProps) {
  const resolvedText =
    text ??
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et finibus sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum sit amet turpis eget purus lobortis imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut augue tortor. Pellentesque viverra sem vel turpis facilisis, eget varius elit ullamcorper. In sed diam quis neque tincidunt auctor. Nullam id ante quam. Nulla maximus erat eu quam convallis, vitae luctus est molestie.";

  if (variant === "snapshot") {
    const items =
      snapshotItems.length > 0
        ? snapshotItems
        : Array.from({ length: 4 }, () => ({ title: "Title", content: "Content" }));

    return (
      <div
        className={cx(
          "flex w-[800px] max-w-full flex-col items-start gap-[var(--s-section-to-title-gap)]",
          className
        )}
      >
        {items.map((item, index) => (
          <SnapshotItem
            key={`${item.title}-${index}`}
            title={item.title}
            content={item.content}
            className="w-full"
          />
        ))}
      </div>
    );
  }

  if (variant === "subsection") {
    return (
      <div
        className={cx(
          "flex w-[800px] max-w-full flex-col items-start gap-[var(--s-section-to-title-gap)]",
          className
        )}
      >
        <h3 className="w-full text-[length:var(--s-typography-headline-h3size)] font-semibold leading-[var(--s-typography-headline-h3line)] text-[var(--s-section-text)]">
          {heading ?? "Lorem ipsum dolor sit amet"}
        </h3>
        <p className="w-full text-[length:var(--s-typography-paragraph-base-size)] font-normal leading-[var(--s-typography-paragraph-base-line)] text-[var(--s-section-text)]">
          {resolvedText}
        </p>
      </div>
    );
  }

  return (
    <div className={cx("w-[800px] max-w-full", className)}>
      <p className="w-full text-[length:var(--s-typography-paragraph-base-size)] font-normal leading-[var(--s-typography-paragraph-base-line)] text-[var(--s-section-text)]">
        {resolvedText}
      </p>
    </div>
  );
}
