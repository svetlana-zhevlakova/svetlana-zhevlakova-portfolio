import * as React from "react";

import { Kpi } from "@/components/Kpi";

type ReflectionItem = {
  title: React.ReactNode;
  content: React.ReactNode;
};

export type SectionReflectionProps = {
  amount?: 2 | 3 | 4;
  title?: React.ReactNode;
  items?: ReflectionItem[];
  className?: string;
};

function cx(...values: Array<string | undefined | null | false>) {
  return values.filter(Boolean).join(" ");
}

const fallbackItems: ReflectionItem[] = [
  { title: "Title", content: "Some content." },
  { title: "Title", content: "Some content." },
  { title: "Title", content: "Some content." },
  { title: "Title", content: "Some content." }
];

export function SectionReflection({
  amount = 4,
  title = "Learnings",
  items = fallbackItems,
  className
}: SectionReflectionProps) {
  const clampedAmount = Math.max(2, Math.min(amount, 4));
  const visibleItems = items.slice(0, clampedAmount);
  const isThree = clampedAmount === 3;

  return (
    <section
      className={cx(
        "flex w-[800px] max-w-full flex-col items-start justify-center gap-[var(--s-section-to-subsection-gap)]",
        className
      )}
      data-name="Section Reflection"
    >
      <h2 className="text-[length:var(--s-typography-headline-h2size)] font-normal leading-[var(--s-typography-headline-h2line)] text-[var(--s-section-text)]">
        {title}
      </h2>

      <div className="grid w-full grid-cols-2 gap-[var(--s-section-to-subsection-gap)] max-[900px]:grid-cols-1">
        {visibleItems.map((item, index) => (
          <Kpi
            key={index}
            title={item.title}
            content={item.content}
            showIcon={false}
            className={cx(
              "w-full",
              isThree && index === 2 ? "col-span-2 max-[900px]:col-span-1" : ""
            )}
          />
        ))}
      </div>
    </section>
  );
}
