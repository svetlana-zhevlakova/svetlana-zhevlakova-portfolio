import * as React from "react";

import { Body } from "@/components/Body";
import { CaseHeader } from "@/components/CaseHeader";

type SnapshotEntry = {
  title: string;
  content: React.ReactNode;
};

export type SectionContentProps = {
  title: string;
  tags?: string[];
  callout?: React.ReactNode;
  snapshotItems?: SnapshotEntry[];
  className?: string;
};

function cx(...values: Array<string | undefined | null | false>) {
  return values.filter(Boolean).join(" ");
}

export function SectionContent({
  title,
  tags = [],
  callout,
  snapshotItems = [],
  className
}: SectionContentProps) {
  return (
    <section
      className={cx(
        "flex w-[800px] max-w-full flex-col items-start gap-[var(--s-section-to-subsection-gap)]",
        className
      )}
      data-name="Section / Content"
    >
      <CaseHeader variant="h1" title={title} tags={tags} callout={callout} />
      <Body variant="snapshot" snapshotItems={snapshotItems} />
    </section>
  );
}
