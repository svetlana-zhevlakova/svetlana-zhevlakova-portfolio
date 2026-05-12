import Image from "next/image";

import { CASES } from "@/config/cases";
import { Body } from "@/components/Body";
import { CaseHeader } from "@/components/CaseHeader";
import { SectionReflection } from "@/components/SectionReflection";
import { BackNavigation } from "@/components/case/BackNavigation";
import { CaseTableOfContents } from "@/components/case/CaseTableOfContents";
import { NextCaseNavigation } from "@/components/case/NextCaseNavigation";
import { ScrollAutoplayVideo } from "@/components/case/ScrollAutoplayVideo";

const currentCase = CASES[1];
const nextCase = CASES[2];
const HERO_1_SRC = "/cases/reflection-driven-mood-tracker/hero-1.png";
const HERO_2_SRC = "/cases/reflection-driven-mood-tracker/hero-2.png";
const HERO_3_SRC = "/cases/reflection-driven-mood-tracker/hero-3.png";
const CORE_LOOP_VIDEO_SRC = "/cases/reflection-driven-mood-tracker/core-loop-flow.mov";
const CORE_LOOP_VIDEO_FALLBACK_SRC = "/cases/reflection-driven-mood-tracker/core-loop-flow.mp4";
const TOC_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "problem-framing", label: "Problem framing" },
  { id: "design-strategy", label: "Design strategy" },
  { id: "key-flow", label: "Flow: Check-in to Insight" },
  { id: "design-evaluation", label: "Design evaluation" },
  { id: "outcome", label: "Outcome" },
  { id: "reflections-and-learnings", label: "Learnings" }
];

export default function ReflectionDrivenMoodTrackerCasePage() {
  return (
    <main className="w-full bg-[var(--s-page-background)]">
      <CaseTableOfContents items={TOC_ITEMS} />
      <div className="flex w-full flex-col items-center gap-[var(--s-section-to-section-gap)] px-[var(--s-grid-system-margin)] py-[var(--s-grid-system-vertical-padding)]">
        <BackNavigation />

        <section id="overview" className="flex w-full max-w-[800px] scroll-mt-[120px] flex-col gap-[var(--s-section-to-subsection-gap)]">
          <CaseHeader
            variant="h1"
            title={currentCase.title}
            tags={currentCase.tags}
            callout="How I reframed an AI mood tracker from repetitive logging into meaningful reflection, defined a framework to evaluate AI output quality, and designed personalized dashboards that made each interaction actually useful."
          />
          <Body
            variant="snapshot"
            snapshotItems={[
              { title: "Role", content: "Product Designer" },
              { title: "Stage", content: "R&D, Post-V0" },
              { title: "Platforms", content: "Chrome Extension, Web" },
              { title: "Year", content: "2025" }
            ]}
          />
        </section>

        <section
          data-toc-contrast-zone="true"
          className="h-[600px] w-full max-w-[1307px] overflow-hidden rounded-[var(--s-card-radius)] bg-[var(--s-media-section-background)] p-3 max-[1279px]:h-auto"
        >
          <div className="grid h-full w-full grid-cols-[334px_394px_531px] gap-3 max-[1279px]:grid-cols-2 max-[1279px]:items-start">
            <div className="relative h-[366px] overflow-hidden rounded-[var(--s-media-section-image-radius)] max-[1279px]:aspect-[668/732] max-[1279px]:h-auto">
              <Image
                src={HERO_1_SRC}
                alt="Mood check-in interface"
                fill
                sizes="(min-width: 1280px) 334px, 50vw"
                className="rounded-[var(--s-media-section-image-radius)] object-cover"
              />
            </div>
            <div className="relative h-full overflow-hidden rounded-[var(--s-media-section-image-radius)] max-[1279px]:aspect-[788/1152] max-[1279px]:h-auto">
              <Image
                src={HERO_2_SRC}
                alt="Insights dashboard detail"
                fill
                sizes="(min-width: 1280px) 394px, 50vw"
                className="rounded-[var(--s-media-section-image-radius)] object-cover"
              />
            </div>
            <div className="relative h-full overflow-hidden rounded-[var(--s-media-section-image-radius)] max-[1279px]:col-span-2 max-[1279px]:aspect-[1062/1152] max-[1279px]:h-auto">
              <Image
                src={HERO_3_SRC}
                alt="Analytics and trends dashboard"
                fill
                sizes="(min-width: 1280px) 531px, 100vw"
                className="rounded-[var(--s-media-section-image-radius)] object-cover"
              />
            </div>
          </div>
        </section>

        <section id="problem-framing" className="flex w-full max-w-[800px] scroll-mt-[120px] flex-col gap-[var(--s-section-to-subsection-gap)]">
          <CaseHeader variant="h2" title="When Tracking Feels Pointless, Users Leave" tags={["Problem framing"]} />
          <Body
            variant="text"
            text="The initial version of the product saw strong early adoption, but engagement dropped sharply by week three. The problem wasn't technical: users were asked to log their mood repeatedly but got almost nothing in return. The only feedback was a basic mood chart that was hard to find, offering no interpretation or meaningful insight. Each interaction ended with a random 'fun' GIF, which caused confusion and even undermined trust in a sensitive context. Without clear value or understanding, there was no reason for users to keep participating, making long-term engagement unsustainable."
          />
        </section>

        <section id="design-strategy" className="flex w-full max-w-[800px] scroll-mt-[120px] flex-col gap-[var(--s-section-to-subsection-gap)]">
          <CaseHeader variant="h2" title="Designing For Reflection, Not Just Logging" tags={["Design strategy"]} />
          <Body
            variant="text"
            text="I approached the redesign as a strategic reset, turning the product from a daily mood tracker into a reflection-driven system where insight is the main experience. I defined a conceptual framework for AI output quality with four dimensions: relevance to context, emotional appropriateness, novelty, and subtle actionability. We didn't implement testing, but this framework guided design choices around prompt structure, content personalization, and the insights dashboard to ensure the product delivered meaningful reflections instead of raw data."
          />
        </section>

        <section id="key-flow" className="flex w-full max-w-[800px] scroll-mt-[120px] flex-col gap-[var(--s-section-to-subsection-gap)]">
          <CaseHeader variant="h2" title="Core Loop For Reflection And Insight" tags={["Key flow"]} />
          <Body
            variant="text"
            text="Redesigned the core experience to prioritize meaningful reflection over raw data. Check-ins were reduced to three context-aware moments per week to improve compliance and trend reliability, with emotional state reframed as 'Vital' to remove judgment and self-censorship. Each entry offered immediate trend context and optional attribution to influencers, embedding reflection into the loop. Insights became the primary output through a personal dashboard that highlighted patterns, directional change, and historical trends, with AI acting as a translation layer to interpret data rather than automate it."
          />
          <div className="flex w-full justify-center">
            <div className="relative h-[404px] w-[499px] max-w-full overflow-hidden rounded-[var(--s-card-radius)] border border-[var(--s-media-section-border)]">
              <ScrollAutoplayVideo
                className="size-full rounded-[var(--s-card-radius)] object-contain"
                threshold={0.6}
                sources={[
                  { src: CORE_LOOP_VIDEO_SRC },
                  { src: CORE_LOOP_VIDEO_FALLBACK_SRC, type: "video/mp4" }
                ]}
              />
            </div>
          </div>
        </section>

        <section id="design-evaluation" className="flex w-full max-w-[800px] scroll-mt-[120px] flex-col gap-[var(--s-section-to-subsection-gap)]">
          <CaseHeader
            variant="h2"
            title="LLM Evaluation Framework For Meaningful Feedback"
            tags={["Design evaluation"]}
          />
          <Body
            variant="text"
            text={
              <>
                <p>
                  To make AI-generated reflections genuinely valuable, I defined a conceptual
                  evaluation framework focused on output quality rather than technical metrics. I
                  identified four dimensions critical to user trust and engagement:
                </p>
                <ul>
                  <li>Relevance: Aligns with the user&apos;s actual mood and context</li>
                  <li>
                    Emotional appropriateness: Responds sensitively without invalidating feelings
                  </li>
                  <li>Novelty: Avoids repetition and fatigue across entries</li>
                  <li>Subtle actionability: Suggests reflection without pressure</li>
                </ul>
                <p>
                  This framework guided design decisions around prompt structure, personalization,
                  and dashboard presentation. It allowed us to reason about AI behavior, anticipate
                  low-value outputs, and ensure the system could support long-term engagement even
                  without live testing.
                </p>
              </>
            }
          />
        </section>

        <section id="outcome" className="flex w-full max-w-[800px] scroll-mt-[120px] flex-col gap-[var(--s-section-to-subsection-gap)]">
          <CaseHeader
            variant="h2"
            title="Insights-Driven Redesign To Boost Engagement"
            tags={["Outcome"]}
          />
          <Body
            variant="text"
            text="The redesign established a clear V2 concept focused on driving meaningful engagement. We started with hypotheses about what would make mood tracking valuable and used AI to validate these ideas within the concept, shaping how reflections and insights could work in practice. The project clarified why the original product failed to retain users and produced a concrete framework for future design decisions around reflection-driven interactions."
          />
        </section>

        <div id="reflections-and-learnings" className="w-full max-w-[800px] scroll-mt-[120px]">
        <SectionReflection
          amount={4}
          items={[
            {
              title: "Immediate Value",
              content: "Users stay engaged only when every check-in provides clear insight."
            },
            {
              title: "AI as Translator",
              content:
                "AI should interpret and clarify user input, guiding reflection without pressure."
            },
            {
              title: "Meaningful Novelty",
              content:
                "Variation keeps the experience engaging; repetition causes fatigue."
            },
            {
              title: "Reframe for Impact",
              content:
                "In R&D, redefining the problem often matters more than interface refinement."
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

