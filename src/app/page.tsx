import { CaseCard } from "@/components/CaseCard";

export default function HomePage() {
  return (
    <main className="flex w-full flex-1 bg-[var(--s-page-background)]">
      <div className="flex w-full flex-1 px-[var(--s-grid-system-margin)] py-10">
        <div className="flex w-full flex-1 items-stretch gap-[var(--s-section-to-section-gap)] max-[1200px]:flex-col">
          <section className="flex min-w-0 basis-[408px] grow flex-col gap-[var(--s-section-to-title-gap)] max-w-[800px] text-[var(--s-section-text)]">
            <h1 className="text-[length:var(--s-typography-headline-h1size)] font-normal leading-[var(--s-typography-headline-h1line)]">
              Hey, I’m Svetlana.
            </h1>
            <p className="text-[length:var(--s-typography-callout-callout-size)] font-normal leading-[var(--s-typography-callout-callout-line)]">
              I shape experiences for teams and users in complex B2B and B2B2C
              products, creating structured, scalable solutions that focus on key
              priorities.
            </p>
          </section>

          <section className="grid h-full min-w-0 basis-[896px] grow auto-rows-fr grid-cols-2 gap-[var(--s-section-to-subsection-gap)] max-[900px]:grid-cols-1">
            <CaseCard
              className="h-full"
              tags={["B2B2C", "Marketplace"]}
              title="Building a marketplace that connects parents with kids’ party venues"
              focusText="MVP design / prototyping."
              href="/cases/kids-party-marketplace"
            />
            <CaseCard
              className="h-full"
              tags={["R&D", "AI"]}
              title="Turning a failing mood tracker into a reflection-driven product concept"
              focusText="Engagement loops / reflective check-ins / LLM evaluation framework."
              href="/cases/reflection-driven-mood-tracker"
            />
            <CaseCard
              className="h-full"
              tags={["B2B", "SaaS"]}
              title="Designing actionable workflows in a data-heavy platform"
              focusText="Admin dashboard / complex data tables / delivery process improvements."
              href="/cases/data-heavy-workflows"
            />
            <CaseCard
              className="h-full"
              tags={["Leadership", "Culture"]}
              title="Establishing design function & mentorship in a service company"
              focusText="Team autonomy / high-quality delivery."
            />
          </section>
        </div>
      </div>
    </main>
  );
}

