import Image from "next/image";

import { CASES } from "@/config/cases";
import { Body } from "@/components/Body";
import { CaseHeader } from "@/components/CaseHeader";
import { SectionReflection } from "@/components/SectionReflection";
import { BackNavigation } from "@/components/case/BackNavigation";
import { CaseTableOfContents } from "@/components/case/CaseTableOfContents";
import { NextCaseNavigation } from "@/components/case/NextCaseNavigation";
import { ScrollAutoplayVideo } from "@/components/case/ScrollAutoplayVideo";

const currentCase = CASES[0];
const nextCase = CASES[1];
const HERO_1_SRC = "/cases/kids-party-marketplace/hero-1.png";
const HERO_2_SRC = "/cases/kids-party-marketplace/hero-2.png";
const HERO_3_SRC = "/cases/kids-party-marketplace/hero-3.png";
const MOBILE_FLOW_VIDEO_SRC = "/cases/kids-party-marketplace/mobile-flow.mov";
const MOBILE_FLOW_VIDEO_FALLBACK_SRC = "/cases/kids-party-marketplace/mobile-flow.mp4";
const ADMIN_CALENDAR_1_SRC = "/cases/kids-party-marketplace/admin-calendar-1.png";
const ADMIN_CALENDAR_2_SRC = "/cases/kids-party-marketplace/admin-calendar-2.png";
const TOC_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "problem-framing", label: "Problem framing" },
  { id: "design-strategy", label: "Design strategy" },
  { id: "key-flow-1", label: "Flow: Booking" },
  { id: "key-flow-2", label: "Flow: Admin calendar" },
  { id: "outcome", label: "Outcome" },
  { id: "reflections-and-learnings", label: "Learnings" }
];

export default function KidsPartyMarketplaceCasePage() {
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
            callout="How I scoped and designed the core MVP experience for a marketplace connecting parents with kids’ party venues."
          />
          <Body
            variant="snapshot"
            snapshotItems={[
              { title: "Role", content: "Product Designer" },
              { title: "Stage", content: "Early-stage product → MVP" },
              { title: "Platforms", content: "Mobile and Desktop Web" },
              { title: "Year", content: "2024 - 2025" }
            ]}
          />
        </section>

        <section
          data-toc-contrast-zone="true"
          className="h-[600px] w-full max-w-[1301px] overflow-hidden rounded-[var(--s-card-radius)] bg-[var(--s-media-section-background)] p-3 max-[1279px]:h-auto"
        >
          <div className="grid h-full w-full grid-cols-[721px_266px_266px] gap-3 max-[1279px]:grid-cols-2">
            <div className="relative h-full overflow-hidden rounded-[var(--s-media-section-image-radius)] max-[1279px]:col-span-2 max-[1279px]:aspect-[1442/1152] max-[1279px]:h-auto">
              <Image
                src={HERO_1_SRC}
                alt="Marketplace desktop listing and map views"
                fill
                sizes="(min-width: 1280px) 721px, 100vw"
                className="rounded-[var(--s-media-section-image-radius)] object-cover"
              />
            </div>
            <div className="relative h-full overflow-hidden rounded-[var(--s-media-section-image-radius)] max-[1279px]:aspect-[532/1152] max-[1279px]:h-auto">
              <Image
                src={HERO_2_SRC}
                alt="Marketplace mobile browse experience"
                fill
                sizes="(min-width: 1280px) 266px, 50vw"
                className="rounded-[var(--s-media-section-image-radius)] object-cover"
              />
            </div>
            <div className="relative h-full overflow-hidden rounded-[var(--s-media-section-image-radius)] max-[1279px]:aspect-[532/1152] max-[1279px]:h-auto">
              <Image
                src={HERO_3_SRC}
                alt="Marketplace mobile venue details screen"
                fill
                sizes="(min-width: 1280px) 266px, 50vw"
                className="rounded-[var(--s-media-section-image-radius)] object-cover"
              />
            </div>
          </div>
        </section>

        <section id="problem-framing" className="flex w-full max-w-[800px] scroll-mt-[120px] flex-col gap-[var(--s-section-to-subsection-gap)]">
          <CaseHeader variant="h2" title="An Entire Market With No Product" tags={["Problem framing"]} />
          <Body
            variant="text"
            text="Parents in Kuwait struggled to find and compare kids' party venues. They had to visit multiple websites and contact each venue individually to check availability. Venue owners managed bookings manually across calendars and spreadsheets, making it hard to keep track of requests and availability. The market was an empty field with no similar products or direct competitors. The marketplace aimed to connect parents and venues, streamline workflows, and validate a new business opportunity."
          />
        </section>

        <section id="design-strategy" className="flex w-full max-w-[800px] scroll-mt-[120px] flex-col gap-[var(--s-section-to-subsection-gap)]">
          <CaseHeader
            variant="h2"
            title="Designing For Validated Bookings, Not A Full Marketplace"
            tags={["Design strategy"]}
          />
          <Body
            variant="text"
            text="The MVP goal was to prove that parents complete bookings, not to build a fully automated platform. I focused on designing only what was necessary to support this, while keeping the product scalable for future iterations."
          />
        </section>

        <section id="key-flow-1" className="flex w-full max-w-[800px] scroll-mt-[120px] flex-col gap-[var(--s-section-to-subsection-gap)]">
          <CaseHeader variant="h2" title="Mobile Booking Flow" tags={["Key flow"]} />
          <Body
            variant="text"
            text="The mobile booking experience was the most complex and high-risk part of the MVP, where drop-off was most likely. Parents needed to configure a party by selecting date, duration, number of guests, and add-ons, while clearly understanding the total price. I focused design effort on this flow, simplifying it into sequential steps and introducing progressive price updates to build clarity and trust."
          />
          <div className="flex w-full justify-center">
            <div className="relative h-[600px] w-[276px] overflow-hidden rounded-[var(--s-card-radius)] border border-[var(--s-media-section-border)]">
              <ScrollAutoplayVideo
                className="size-full rounded-[var(--s-card-radius)] object-contain"
                threshold={0.6}
                sources={[
                  { src: MOBILE_FLOW_VIDEO_SRC },
                  { src: MOBILE_FLOW_VIDEO_FALLBACK_SRC, type: "video/mp4" }
                ]}
              />
            </div>
          </div>
        </section>

        <section id="key-flow-2" className="flex w-full max-w-[800px] scroll-mt-[120px] flex-col gap-[var(--s-section-to-subsection-gap)]">
          <CaseHeader variant="h2" title="Admin Calendar & Booking Management" tags={["Key flow"]} />
          <Body
            variant="text"
            text="For venue admins, I designed a calendar-based dashboard to make availability and required actions visible at a glance. I focused design effort on booking and availability flows, ensuring admins could quickly understand what needed attention and respond to requests. To stay within budget, I accepted scope reductions and introduced a simplified table view prioritizing unconfirmed bookings."
          />
          <div className="grid w-full grid-cols-1 gap-[var(--s-section-to-subsection-gap)]">
            <div className="relative h-[499px] w-full overflow-hidden rounded-[var(--s-card-radius)] border border-[var(--s-media-section-border)] max-[1279px]:aspect-[1596/998] max-[1279px]:h-auto">
              <Image
                src={ADMIN_CALENDAR_1_SRC}
                alt="Admin calendar view"
                fill
                sizes="(max-width: 1279px) 100vw, 800px"
                className="rounded-[var(--s-card-radius)] object-cover"
              />
            </div>
            <div className="relative h-[499px] w-full overflow-hidden rounded-[var(--s-card-radius)] border border-[var(--s-media-section-border)] max-[1279px]:aspect-[2880/1800] max-[1279px]:h-auto">
              <Image
                src={ADMIN_CALENDAR_2_SRC}
                alt="Admin booking management view"
                fill
                sizes="(max-width: 1279px) 100vw, 800px"
                className="rounded-[var(--s-card-radius)] object-cover"
              />
            </div>
          </div>
        </section>

        <section id="outcome" className="flex w-full max-w-[800px] scroll-mt-[120px] flex-col gap-[var(--s-section-to-subsection-gap)]">
          <CaseHeader variant="h2" title="From Idea To Validated Product" tags={["Outcome"]} />
          <Body
            variant="text"
            text="Delivered an MVP that moved the idea into the market and enabled real booking validation. Early usage led to new feature requests, confirming product value and creating a clear path for further growth."
          />
        </section>

        <div id="reflections-and-learnings" className="w-full max-w-[800px] scroll-mt-[120px]">
        <SectionReflection
          amount={3}
          items={[
            {
              title: "Validate Early",
              content:
                "Early prototyping of the booking flow helped reduce drop-off risk and align on interaction logic before development."
            },
            {
              title: "Prioritization",
              content:
                "I pushed back on adding more content to listing cards and learned that restraint is essential to preserve fast scanning and clear decision-making in marketplaces."
            },
            {
              title: "Role Separation Matters",
              content:
                "Combining parent and admin experiences early reduced development effort but introduced subtle design challenges. I learned that separating roles upfront helps avoid unnecessary complexity later."
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

