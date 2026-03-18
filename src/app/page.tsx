import { CaseCard } from "@/components/CaseCard";

export default function HomePage() {
  return (
    <main className="w-full bg-[var(--s-page-background)]">
      <div className="mx-auto w-full max-w-[1440px] px-[var(--s-grid-system-margin)] py-10">
        <div className="flex w-full items-start justify-center gap-[var(--s-section-to-section-gap)] max-[1100px]:flex-col">
          <section className="flex min-w-0 max-w-[var(--s-section-max-width)] flex-1 flex-col gap-[var(--s-section-to-title-gap)] text-[var(--s-section-text)]">
            <h1 className="text-[length:var(--s-typography-headline-h1size)] font-normal leading-[var(--s-typography-headline-h1line)]">
              Hey, I’m Svetlana.
            </h1>
            <p className="text-[length:var(--s-typography-callout-callout-size)] font-normal leading-[var(--s-typography-callout-callout-line)]">
              I shape experiences for teams and users in complex B2B and B2B2C
              products, creating structured, scalable solutions that focus on key
              priorities.
            </p>
          </section>

          <section className="flex w-[896px] max-w-full flex-col items-center justify-end gap-[var(--s-section-to-subsection-gap)]">
            <CaseCard
              tags={["B2B2C", "Marketplace"]}
              title="Building a marketplace that connects parents with kids’ party venues"
              focusText="Booking configuration / pricing transparency / venue admin tools."
              href="/cases/kids-party-marketplace"
            />
            <CaseCard
              tags={["R&D", "AI"]}
              title="Turning a failing mood tracker into a reflection-driven product concept"
              focusText="Engagement loops / reflective check-ins / AI-supported insights."
              href="/cases/reflection-driven-mood-tracker"
            />
            <CaseCard
              tags={["B2B", "SaaS"]}
              title="Designing actionable workflows in a data-heavy platform"
              focusText="Admin dashboard / complex data tables / delivery process improvements / design mentorship."
              href="/cases/data-heavy-workflows"
            />
          </section>
        </div>
      </div>
    </main>
  );
}

