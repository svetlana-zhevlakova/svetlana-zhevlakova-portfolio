import Link from "next/link";

import { CASES } from "@/config/cases";
import { Tag } from "@/components/Tag";

const CURRENT_SLUG = "data-heavy-workflows";
const currentCase = CASES[2];
const nextCase = CASES[0];

export default function DataHeavyWorkflowsCasePage() {
  return (
    <main className="w-full bg-[var(--s-page-background)]">
      <div className="mx-auto w-full max-w-[1440px] px-[var(--s-grid-system-margin)] py-10">
        <section className="mx-auto flex w-full max-w-[800px] flex-col gap-[var(--s-section-to-section-gap)]">          {/* Title & tags */}
          <header className="flex flex-col gap-[var(--s-section-to-subsection-gap)]">
            <div className="flex items-start gap-[var(--s-card-to-titlegap)]">
              {currentCase.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
            <h1 className="text-[length:var(--s-typography-headline-h1size)] font-normal leading-[var(--s-typography-headline-h1line)] text-[var(--s-section-text)]">
              {currentCase.title}
            </h1>
          </header>

          {/* Intro paragraph (partial content for now) */}
          <section className="flex flex-col gap-[var(--s-section-to-title-gap)] text-[var(--s-section-text)]">
            <p className="text-[length:var(--s-typography-paragraph-base-size)] leading-[var(--s-typography-paragraph-base-line)]">
              In this project I focused on turning dense operational data into
              actionable workflows. The challenge was to design views and flows
              that let teams quickly understand what needs attention and move
              work forward, without overwhelming them with raw tables and
              configuration screens.
            </p>
          </section>

          {/* Snapshot grid (Role/Platforms/Stage/Year) */}
          <section className="grid grid-cols-[repeat(2,minmax(0,1fr))] gap-x-4 gap-y-4 text-[var(--s-section-text)] max-[700px]:grid-cols-1">
            <SnapshotItem label="Role" value="Product Designer (platform)" />
            <SnapshotItem label="Platforms" value="Desktop Web" />
            <SnapshotItem label="Stage" value="Mature B2B SaaS product" />
            <SnapshotItem label="Year" value="2024" />
          </section>

          {/* Bottom navigation */}
          <section className="flex w-full items-center justify-between pt-[var(--s-section-to-section-gap)] text-[length:var(--s-typography-paragraph-base-size)] leading-[var(--s-typography-paragraph-base-line)]">
            <Link
              href="/#cases"
              className="inline-flex items-center gap-2 text-[var(--s-button-link-default-text)] hover:text-[var(--s-button-link-hover-text)]"
            >
              <span aria-hidden="true">←</span>
              <span>Back to case studies</span>
            </Link>

            <Link
              href={`/cases/${nextCase.slug}`}
              className="inline-flex items-center gap-2 text-[var(--s-button-link-default-text)] hover:text-[var(--s-button-link-hover-text)]"
            >
              <span>Next case study</span>
              <span aria-hidden="true">→</span>
            </Link>
          </section>
        </section>
      </div>
    </main>
  );
}

type SnapshotItemProps = {
  label: string;
  value: string;
};

function SnapshotItem({ label, value }: SnapshotItemProps) {
  return (
    <div className="flex flex-col gap-1">
      <div className="text-[length:var(--s-typography-caption-caption-size)] leading-[var(--s-typography-caption-caption-line)] text-[var(--s-section-caption)]">
        {label}
      </div>
      <div className="text-[length:var(--s-typography-paragraph-base-size)] leading-[var(--s-typography-paragraph-base-line)] text-[var(--s-section-text)]">
        {value}
      </div>
    </div>
  );
}

