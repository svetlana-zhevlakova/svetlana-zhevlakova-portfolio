import Image from "next/image";

import { CASES } from "@/config/cases";
import { Body } from "@/components/Body";
import { CaseHeader } from "@/components/CaseHeader";
import { SectionReflection } from "@/components/SectionReflection";
import { BackNavigation } from "@/components/case/BackNavigation";
import { CaseTableOfContents } from "@/components/case/CaseTableOfContents";
import { NextCaseNavigation } from "@/components/case/NextCaseNavigation";

const nextCase = CASES[0];
const HERO_1_SRC = "/cases/leadership-and-culture/hero-1.png";
const TOC_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "problem-framing", label: "Problem framing" },
  { id: "strategy", label: "Strategy" },
  { id: "key-actions", label: "Key actions" },
  { id: "outcome", label: "Outcome" },
  { id: "reflections-and-learnings", label: "Learnings" }
];

export default function LeadershipAndCultureCasePage() {
  return (
    <main className="w-full bg-[var(--s-page-background)]">
      <CaseTableOfContents items={TOC_ITEMS} />
      <div className="flex w-full flex-col items-center gap-[var(--s-section-to-section-gap)] px-[var(--s-grid-system-margin)] py-[var(--s-grid-system-vertical-padding)]">
        <BackNavigation />

        <section id="overview" className="flex w-full max-w-[800px] scroll-mt-[120px] flex-col gap-[var(--s-section-to-subsection-gap)]">
          <CaseHeader
            variant="h1"
            title="Establishing Design Function & Mentorship in a Service Company"
            tags={["Leadership", "Culture"]}
            callout="How I built a design function from scratch in a fast-paced, data-heavy environment, set up clear workflows, mentored a junior into a reliable contributor, and made design a consistent, trusted part of product delivery."
          />
          <Body
            variant="snapshot"
            snapshotItems={[
              {
                title: "Role",
                content: "Lead Product Designer & First Design Function"
              },
              { title: "Team", content: "Solo designer growing into a small team" },
              { title: "Year", content: "2023 - 2025" }
            ]}
          />
        </section>

        <section
          data-toc-contrast-zone="true"
          className="h-[547px] w-full max-w-[1352px] overflow-hidden rounded-[var(--s-card-radius)] bg-[var(--s-media-section-background)] p-3 max-[1279px]:h-auto"
        >
          <div className="relative h-[523px] w-full overflow-hidden rounded-[var(--s-media-section-image-radius)] max-[1279px]:aspect-[2656/1046] max-[1279px]:h-auto">
            <Image
              src={HERO_1_SRC}
              alt="Design task completion trend chart"
              fill
              sizes="(max-width: 1279px) 100vw, 1328px"
              className="rounded-[var(--s-media-section-image-radius)] object-cover"
            />
          </div>
        </section>

        <section id="problem-framing" className="flex w-full max-w-[800px] scroll-mt-[120px] flex-col gap-[var(--s-section-to-subsection-gap)]">
          <CaseHeader
            variant="h2"
            title="No Framework for Design in the Company"
            tags={["Problem framing"]}
          />
          <Body
            variant="text"
            text="I stepped into a company without a design function, working across diverse client projects while balancing hands-on delivery with system building. There were no established processes for how the team collaborated with designers, leading to unclear expectations and inconsistent ways of working. The challenge was to introduce structure and maintain high design quality in a fast-paced environment where speed often outweighed process."
          />
        </section>

        <section id="strategy" className="flex w-full max-w-[800px] scroll-mt-[120px] flex-col gap-[var(--s-section-to-subsection-gap)]">
          <CaseHeader
            variant="h2"
            title="Strategy vs Tactics: Shaping a Sustainable Design Function"
            tags={["Strategy"]}
          />
          <Body
            variant="text"
            text="My strategic vision focused on building a sustainable design function within the company and elevating the reputation of design both internally and with clients. The goal was for every designer to deliver high-quality work reliably, without the lead designer becoming a bottleneck. My tactical vision was to transform design from a collection of isolated tasks into a stable, predictable process with clear quality standards, consistent workflows, transparent communication, and the development of designers into autonomous contributors."
          />
        </section>

        <section id="key-actions" className="flex w-full max-w-[800px] scroll-mt-[120px] flex-col gap-[var(--s-section-to-subsection-gap)]">
          <CaseHeader
            variant="h2"
            title="Collaborating With People To Drive Culture And Processes"
            tags={["Key actions"]}
          />
          <Body
            variant="text"
            text="I began by taking on managerial responsibilities while continuing to work hands-on, balancing execution with system building."
          />
          <Body
            variant="subsection"
            heading="Process & Tools"
            text="In a data-heavy, rapidly growing SaaS product, I reorganized the Figma workspace and introduced functional requirement documentation for complex features, capturing edge cases and constraints upfront. Pre-sprint review sessions, scope clarifications, and lightweight ideation practices became routine. These measures reduced confusion, minimized rework, and improved alignment across the team."
          />
          <Body
            variant="subsection"
            heading="Mentorship & Team Development"
            text="I created a matrix of competencies and conducted regular 1-on-1s with the junior designer to review progress and define next steps. Through critique sessions and pair-design exercises, I moved from directive support to guided autonomy as confidence and capability grew."
          />
          <Body
            variant="subsection"
            heading="Culture & Internal Branding"
            text="I actively participated in client communication from the start, setting clear expectations and presenting design rationale. I initiated adoption of an existing design system with a roadmap toward a company-specific system, while highlighting team achievements to strengthen design's credibility across PM and engineering."
          />
        </section>

        <section id="outcome" className="flex w-full max-w-[800px] scroll-mt-[120px] flex-col gap-[var(--s-section-to-subsection-gap)]">
          <CaseHeader
            variant="h2"
            title="From Zero To Functioning Design Discipline"
            tags={["Outcome"]}
          />
          <Body
            variant="text"
            text="I established a functioning design discipline in a company without a formal design function. The junior designer grew into a reliable middle-level contributor with ownership and autonomy. Reorganized processes and lightweight pre-sprint practices enabled the team to manage complexity while maintaining quality, and client-facing design communication helped strengthen design's reputation internally and externally."
          />
        </section>

        <div id="reflections-and-learnings" className="w-full max-w-[800px] scroll-mt-[120px]">
        <SectionReflection
          amount={2}
          items={[
            {
              title: "Design Strategy & Business Connection",
              content:
                "Aligning design with business goals is essential. Limited authority and time taught me the importance of advocating for design's strategic impact."
            },
            {
              title: "Autonomy & Ownership",
              content:
                "Pushing the designer to take responsibility and ownership created a reliable contributor and reduced dependency on constant oversight."
            },
            {
              title: "System Building Under Pressure",
              content:
                "Even in fast-paced delivery contexts, lightweight process investments pay off through consistency and quality."
            },
            {
              title: "Trust Through Clarity",
              content:
                "Clear communication with stakeholders made design decisions easier to align and implement."
            }
          ]}
        />
        </div>

        <NextCaseNavigation
          title={nextCase.title}
          href={`/cases/${nextCase.slug}`}
        />
      </div>
    </main>
  );
}
