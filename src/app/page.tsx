import { CaseCard } from "@/components/CaseCard";
import { SlideshowMedia } from "@/components/SlideshowMedia";
import { CarouselMedia } from "@/components/CarouselMedia";

export default function HomePage() {
  return (
    <main className="flex w-full flex-1 bg-[var(--s-page-background)]">
      <div className="mx-auto flex w-full max-w-[1920px] flex-1 px-[var(--s-grid-system-margin)] py-10">
        <div className="flex w-full flex-1 items-stretch gap-[var(--s-section-to-section-gap)] max-[1200px]:flex-col">

          <section className="flex min-w-0 basis-auto grow flex-col gap-[var(--s-section-to-title-gap)] max-w-[800px] text-[var(--s-section-text)] min-[1200px]:basis-[408px] min-[1200px]:sticky min-[1200px]:top-[132px] min-[1200px]:self-start">
            <h1 className="text-[length:var(--s-typography-headline-h2size)] font-normal leading-[var(--s-typography-headline-h2line)]">
              Hey, I&apos;m Svetlana.
            </h1>
            <p className="text-[length:var(--s-typography-callout-callout-size)] font-normal leading-[var(--s-typography-callout-callout-line)]">
              Product designer backed by 9 years in software engineering. I design complex B2B systems where ambiguity is high, constraints are real, and structure doesn&apos;t exist yet.
            </p>
          </section>

          <section className="flex min-w-0 basis-[896px] grow flex-col [&>*:first-child]:pt-0">
            <CaseCard
              tags={["B2B2C", "Marketplace"]}
              title="Building a marketplace that connects parents with kids' party venues"
              description="Defined and designed the core experience for a new marketplace from 0 to 1 and evolved it post-launch."
              role="Product Designer"
              team="Dev team, Project Manager, Business Owners"
              href="/cases/kids-party-marketplace"
              media={
                <CarouselMedia
                  images={[
                    { src: "/cases/kids-party-marketplace/animation-1.png", width: 1440, height: 900 },
                    { src: "/cases/kids-party-marketplace/animation-2.png", width: 1440, height: 900 },
                    { src: "/cases/kids-party-marketplace/animation-3.png", width: 1440, height: 900 },
                    { src: "/cases/kids-party-marketplace/animation-4.png", width: 1440, height: 900 },
                    { src: "/cases/kids-party-marketplace/animation-5.png", width: 1440, height: 900 },
                  ]}
                />
              }
            />
            <CaseCard
              tags={["R&D", "AI"]}
              title="Turning a failing mood tracker into a reflection-driven product concept"
              description="Diagnosed why engagement collapsed and reframed the product around meaningful reflection. Defined an AI output quality framework to guide design decisions."
              role="Product Designer"
              team="Independent research project"
              href="/cases/reflection-driven-mood-tracker"
              media={
                <SlideshowMedia
                  images={[
                    { src: "/cases/reflection-driven-mood-tracker/hero-1.png", width: 960, height: 1052 },
                    { src: "/cases/reflection-driven-mood-tracker/hero-2.png", width: 960, height: 1404 },
                    { src: "/cases/reflection-driven-mood-tracker/hero-3.png", width: 2560, height: 2776 },
                  ]}
                />
              }
            />
            <CaseCard
              tags={["B2B", "SaaS"]}
              title="Structuring design decisions and actionable workflows in a data-heavy platform"
              description="Designed complex data workflows within strict technical and UI constraints. Introduced functional documentation that improved delivery across the team."
              role="Product Designer"
              team="Dev team, Project Manager, Business Owners"
              href="/cases/data-heavy-workflows"
              media={
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-[length:var(--s-typography-paragraph-base-size)] text-[var(--s-section-caption)]">
                    Animation coming soon
                  </p>
                </div>
              }
            />
            <CaseCard
              tags={["Leadership", "Culture"]}
              title="Building a design function from zero in a service company"
              description="Joined as the company's first designer. Built processes, grew a junior designer to mid-level, and made design a trusted part of delivery."
              role="Design Lead"
              team="Junior Designer, Dev team, Management"
              href="/cases/leadership-and-culture"
              media={
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-[length:var(--s-typography-paragraph-base-size)] text-[var(--s-section-caption)]">
                    Animation coming soon
                  </p>
                </div>
              }
            />
          </section>

        </div>
      </div>
    </main>
  );
}
