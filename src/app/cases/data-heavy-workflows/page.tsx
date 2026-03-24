import Image from "next/image";

import { CASES } from "@/config/cases";
import { Body } from "@/components/Body";
import { CaseHeader } from "@/components/CaseHeader";
import { SectionReflection } from "@/components/SectionReflection";
import { BackNavigation } from "@/components/case/BackNavigation";
import { NextCaseNavigation } from "@/components/case/NextCaseNavigation";

const currentCase = CASES[2];
const nextCase = CASES[3];
const HERO_1_SRC = "/cases/data-heavy-workflows/hero-1.png";
const HERO_2_SRC = "/cases/data-heavy-workflows/hero-2.png";
const HERO_3_SRC = "/cases/data-heavy-workflows/hero-3.png";
const HERO_4_SRC = "/cases/data-heavy-workflows/hero-4.png";
const DASHBOARD_1_SRC = "/cases/data-heavy-workflows/dashboard-1.png";
const DASHBOARD_2_SRC = "/cases/data-heavy-workflows/dashboard-2.png";
const DASHBOARD_3_SRC = "/cases/data-heavy-workflows/dashboard-3.png";
const CUSTOM_PROPERTIES_1_SRC = "/cases/data-heavy-workflows/custom-properties-1.png";
const CUSTOM_PROPERTIES_2_SRC = "/cases/data-heavy-workflows/custom-properties-2.png";
const CUSTOM_PROPERTIES_3_SRC = "/cases/data-heavy-workflows/custom-properties-3.png";
const CUSTOM_PROPERTIES_4_SRC = "/cases/data-heavy-workflows/custom-properties-4.png";

export default function DataHeavyWorkflowsCasePage() {
  return (
    <main className="w-full bg-[var(--s-page-background)]">
      <div className="flex w-full flex-col items-center gap-[var(--s-section-to-section-gap)] px-[var(--s-grid-system-margin)] py-[var(--s-grid-system-vertical-padding)]">
        <BackNavigation />

        <section className="flex w-full max-w-[800px] flex-col gap-[var(--s-section-to-subsection-gap)]">
          <CaseHeader
            variant="h1"
            title={currentCase.title}
            tags={currentCase.tags}
            callout="How I transformed dense operational requirements into clear admin workflows, designed scalable data-management patterns, and improved delivery through structured collaboration."
          />
          <Body
            variant="snapshot"
            snapshotItems={[
              { title: "Role", content: "Product Designer" },
              { title: "Stage", content: "Mature B2B SaaS product" },
              { title: "Platforms", content: "Desktop Web" },
              { title: "Year", content: "2024" }
            ]}
          />
        </section>

        <section className="w-full max-w-[1352px] overflow-hidden rounded-[var(--s-card-radius)] bg-[var(--s-media-section-background)] p-3">
          <div className="grid w-full grid-cols-2 gap-3 max-[1100px]:grid-cols-2 max-[700px]:grid-cols-1">
            <HeroImage src={HERO_1_SRC} alt="Data-heavy workflows hero image one" />
            <HeroImage src={HERO_2_SRC} alt="Data-heavy workflows hero image two" />
            <HeroImage src={HERO_3_SRC} alt="Data-heavy workflows hero image three" />
            <HeroImage src={HERO_4_SRC} alt="Data-heavy workflows hero image four" />
          </div>
        </section>

        <section className="flex w-full max-w-[800px] flex-col gap-[var(--s-section-to-subsection-gap)]">
          <CaseHeader
            variant="h2"
            title="From Brief Requirements to an Actionable Admin Dashboard"
            tags={["Problem framing"]}
          />
          <Body
            variant="text"
            text="The product handled complex operational data across multiple teams, but existing workflows were fragmented and difficult to scan. Stakeholders needed fast decisions, while operators needed precision and traceability. I reframed the requirements into role-specific dashboard tasks and introduced a structure that surfaced priorities, reduced ambiguity, and supported quicker execution."
          />
          <div className="grid w-full grid-cols-1 gap-[var(--s-section-to-subsection-gap)]">
            <MediaImage src={DASHBOARD_1_SRC} alt="Admin dashboard overview" />
            <MediaImage src={DASHBOARD_2_SRC} alt="Admin dashboard detailed table" />
            <MediaImage src={DASHBOARD_3_SRC} alt="Admin dashboard workflow states" />
          </div>
        </section>

        <section className="flex w-full max-w-[800px] flex-col gap-[var(--s-section-to-subsection-gap)]">
          <CaseHeader
            variant="h2"
            title="Designing for Dynamic, Scalable Data Management"
            tags={["Design strategy"]}
          />
          <Body
            variant="text"
            text="I designed for variability in schema, permissions, and operational states, so the system remained usable as complexity grew. The approach prioritized reusable interaction patterns, predictable table behavior, and clear configuration paths. This made high-density data easier to manage while keeping the interface extensible for future requirements."
          />
          <div className="grid w-full grid-cols-1 gap-[var(--s-section-to-subsection-gap)]">
            <MediaImage src={CUSTOM_PROPERTIES_1_SRC} alt="Custom properties configuration one" />
            <MediaImage src={CUSTOM_PROPERTIES_2_SRC} alt="Custom properties configuration two" />
            <MediaImage src={CUSTOM_PROPERTIES_3_SRC} alt="Custom properties configuration three" />
            <MediaImage src={CUSTOM_PROPERTIES_4_SRC} alt="Custom properties configuration four" />
          </div>
        </section>

        <section className="flex w-full max-w-[800px] flex-col gap-[var(--s-section-to-subsection-gap)]">
          <CaseHeader variant="h2" title="Outcome: Clearer Operations, Faster Delivery" tags={["Outcome"]} />
          <Body
            variant="text"
            text="The redesigned workflows made complex data easier to interpret and act on. Teams could prioritize work faster, handle exceptions with less friction, and maintain consistency across changing requirements. The system-level patterns also improved design-development handoff and enabled more confident iteration."
          />
        </section>

        <SectionReflection
          amount={4}
          items={[
            {
              title: "Structure Enables Speed",
              content:
                "Clear information hierarchy reduced cognitive load and shortened decision cycles."
            },
            {
              title: "Patterns Over One-Offs",
              content:
                "Reusable interaction patterns made the product easier to scale and maintain."
            },
            {
              title: "Design-Dev Alignment Matters",
              content:
                "Shared workflow logic improved handoff quality and reduced implementation drift."
            },
            {
              title: "Model for Change",
              content:
                "Designing for variability upfront prevented costly rework as requirements evolved."
            }
          ]}
        />

        <NextCaseNavigation
          title={nextCase.title}
          href={`/cases/${nextCase.slug}`}
        />
      </div>
    </main>
  );
}

type HeroImageProps = {
  src: string;
  alt: string;
};

function HeroImage({ src, alt }: HeroImageProps) {
  return (
    <div className="relative h-[320px] overflow-hidden rounded-[var(--s-media-section-image-radius)] max-[1100px]:h-[280px] max-[700px]:h-[240px]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw"
        className="rounded-[var(--s-media-section-image-radius)] object-cover"
      />
    </div>
  );
}

type MediaImageProps = {
  src: string;
  alt: string;
};

function MediaImage({ src, alt }: MediaImageProps) {
  return (
    <div className="relative h-[499px] w-full overflow-hidden rounded-[var(--s-card-radius)] border border-[var(--s-media-section-border)]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="800px"
        className="rounded-[var(--s-card-radius)] object-cover"
      />
    </div>
  );
}

