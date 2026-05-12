import { CaseCard } from "@/components/CaseCard";

export default function HomePage() {
  return (
    <main className="flex w-full flex-1 bg-[var(--s-page-background)]">
      <div className="flex w-full flex-1 px-[var(--s-grid-system-margin)] py-10">
        <div className="flex w-full flex-1 items-stretch gap-[var(--s-section-to-section-gap)] max-[1200px]:flex-col">
          <section className="flex min-w-0 basis-[408px] grow flex-col gap-[var(--s-section-to-title-gap)] max-w-[800px] text-[var(--s-section-text)] max-[1199px]:basis-auto">
            <h1 className="text-[length:var(--s-typography-headline-h1size)] font-normal leading-[var(--s-typography-headline-h1line)]">
              Hey, I’m Svetlana.
            </h1>
            <p className="text-[length:var(--s-typography-callout-callout-size)] font-normal leading-[var(--s-typography-callout-callout-line)]">
              Product designer backed by 9 years in software engineering. I design complex B2B systems where ambiguity is high, constraints are real, and structure doesn&apos;t exist yet.
            </p>
          </section>

          <section className="grid h-full min-w-0 basis-[896px] grow auto-rows-fr grid-cols-2 gap-[var(--s-section-to-subsection-gap)] max-[900px]:grid-cols-1">
            <CaseCard
              className="h-full"
              tags={["B2B2C", "Marketplace"]}
              title="Building a marketplace that connects parents with kids’ party venues"
              focusText="Defined and designed the core experience for a new marketplace from 0 to 1 and  evolved it post-launch."
              href="/cases/kids-party-marketplace"
            />
            <CaseCard
              className="h-full"
              tags={["R&D", "AI"]}
              title="Turning a failing mood tracker into a reflection-driven product concept"
              focusText="Diagnosed why engagement collapsed and reframed the product around meaningful reflection. Defined an AI output quality framework to guide design decisions."
              href="/cases/reflection-driven-mood-tracker"
            />
            <CaseCard
              className="h-full"
              tags={["B2B", "SaaS"]}
              title="Structuring design decisions and actionable workflows in a data-heavy platform"
              focusText="Designed complex data workflows within strict technical and UI constraints. Introduced functional documentation that improved delivery across the team."
              href="/cases/data-heavy-workflows"
            />
            <CaseCard
              className="h-full"
              tags={["Leadership", "Culture"]}
              title="Building a design function from zero in a service company"
              focusText="Joined as the company's first designer. Built processes, grew a junior designer to mid-level, and made design a trusted part of delivery."
              href="/cases/leadership-and-culture"
            />
          </section>
        </div>
      </div>
    </main>
  );
}

