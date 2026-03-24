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
            callout="How I turned ambiguous, data-heavy requests into buildable solutions by defining rules and constraints upfront, aligning design with backend realities, enforcing consistent patterns, and introducing functional documentation that scaled delivery."
          />
          <Body
            variant="snapshot"
            snapshotItems={[
              { title: "Role", content: "Product Designer" },
              { title: "Stage", content: "Existing product (incremental improvement)" },
              { title: "Platforms", content: "Desktop Web" },
              { title: "Year", content: "2023 - 2025" }
            ]}
          />
        </section>

        <section className="h-[858px] w-full max-w-[1352px] overflow-hidden rounded-[var(--s-card-radius)] bg-[var(--s-media-section-background)] p-3 max-[1400px]:h-auto">
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
            title="Fragmentation in a Data-Heavy Product"
            tags={["Problem framing"]}
          />
          <Body
            variant="text"
            text={
              <>
                <p>
                  The core challenge was imposing structure on ambiguous requests, aligning
                  solutions with technical constraints, and preventing the system from becoming
                  increasingly inconsistent as it scaled.
                </p>
                <p>
                  The product was evolving into a complex, data-heavy system with no established
                  process for grooming design work or aligning design decisions with architecture
                  and development constraints. Features were defined as short Jira tickets with
                  minimal requirements, and the interface relied on large tables, permission-based
                  logic, and an expanding data model, where small changes could break existing
                  workflows. All solutions had to fit within strict Ant Design patterns and
                  backend limitations.
                </p>
              </>
            }
          />
        </section>

        <section className="flex w-full max-w-[800px] flex-col gap-[var(--s-section-to-subsection-gap)]">
          <CaseHeader
            variant="h2"
            title="Turning Fragmentation into Scalable Design"
            tags={["Design strategy"]}
          />
          <Body
            variant="text"
            text={
              <>
                <p>
                  To handle ambiguity and system complexity, I focused on introducing structure
                  before and during design:
                </p>
                <ul>
                  <li>
                    Breaking down ambiguous requests: I interpreted high-level tickets into clearer
                    goals, user flows, and system-level questions, surfacing missing requirements,
                    edge cases, and dependencies early.
                  </li>
                  <li>
                    Designing with system constraints in mind: I aligned early with backend
                    capabilities and existing UI patterns, applying the best solution given
                    technical and product realities, and relied on table-based structures already
                    used across the product.
                  </li>
                  <li>
                    Defining rules before interface: I ensured data types, validation, and
                    constraints were clear before designing the UI.
                  </li>
                  <li>
                    Prioritizing consistency: I evaluated new patterns against existing ones and
                    moved toward unified solutions to reduce long-term complexity.
                  </li>
                  <li>
                    Introducing upfront alignment: I structured lightweight functional requirements
                    and aligned early with Product and Engineering to reduce ambiguity and rework.
                  </li>
                </ul>
              </>
            }
          />
        </section>

        <section className="flex w-full max-w-[800px] flex-col gap-[var(--s-section-to-subsection-gap)]">
          <CaseHeader
            variant="h2"
            title="From Brief Requirements to an Actionable Admin Dashboard"
            tags={["Key feature"]}
          />
          <Body
            variant="text"
            text={
              <>
                <p>
                  Challenge: Creating a completely new data view from just two short Jira
                  paragraphs, under strict Ant Design constraints, with no precedent in the
                  product. The main difficulty was defining a usable structure from very limited
                  input.
                </p>
                <ul>
                  <li>
                    Task-oriented focus: Highlighted priority areas for Admins using expandable
                    cards and structured tables, ensuring users could complete tasks without
                    hunting through multiple pages.
                  </li>
                  <li>
                    Consistency with existing patterns: Expanded views relied on table-based
                    structures already used in the product, reducing learning friction and
                    maintaining UI consistency.
                  </li>
                  <li>
                    Actionable workflows: Designed interactions that allowed Admins to take action
                    directly from the dashboard, including the ability to hide irrelevant apps,
                    balancing flexibility with control.
                  </li>
                  <li>
                    Managing structural discrepancies: Identified differences between table and list
                    patterns in the product and moved toward a unified approach where feasible,
                    preventing long-term fragmentation.
                  </li>
                </ul>
              </>
            }
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
            tags={["Key feature"]}
          />
          <Body
            variant="text"
            text={
              <>
                <p>
                  Challenge: Expanding the core Apps table to support dynamic customer-defined
                  properties while preserving usability, consistency, and system stability. This
                  required handling large, flexible tables, permission-based logic, and a growing
                  data model, with minimal requirements and no prior precedent.
                </p>
                <ul>
                  <li>
                    Data-first approach: Focused on clearly defining data types, validation rules,
                    and constraints before designing UI, ensuring dynamic properties could be safely
                    added without breaking workflows.
                  </li>
                  <li>
                    Separation of responsibilities: Distinguished between Admin setup and General
                    User usage, maintaining clarity and preventing configuration errors from
                    affecting day-to-day tasks.
                  </li>
                  <li>
                    Scalability and control: Designed mechanisms for users to manage visible columns
                    and handle flexible content, supporting large and evolving datasets without
                    compromising layout stability.
                  </li>
                  <li>
                    Consistency with existing structures: Ensured new dynamic properties integrated
                    with table-based patterns already present in the product, avoiding new UI
                    paradigms and reducing long-term complexity.
                  </li>
                </ul>
              </>
            }
          />
          <div className="grid w-full grid-cols-1 gap-[var(--s-section-to-subsection-gap)]">
            <MediaImage src={CUSTOM_PROPERTIES_1_SRC} alt="Custom properties configuration one" />
            <MediaImage src={CUSTOM_PROPERTIES_2_SRC} alt="Custom properties configuration two" />
            <MediaImage src={CUSTOM_PROPERTIES_3_SRC} alt="Custom properties configuration three" />
            <MediaImage src={CUSTOM_PROPERTIES_4_SRC} alt="Custom properties configuration four" />
          </div>
        </section>

        <section className="flex w-full max-w-[800px] flex-col gap-[var(--s-section-to-subsection-gap)]">
          <CaseHeader variant="h2" title="Delivering Value at Scale" tags={["Outcome"]} />
          <Body
            variant="text"
            text={
              <ul>
                <li>
                  Delivered a task-oriented Admin dashboard that allowed users to complete actions
                  directly from a single control point, reducing friction and cognitive load.
                </li>
                <li>
                  Enabled dynamic Custom Properties in tables while maintaining layout stability,
                  system consistency, and clear separation between Admin setup and General User
                  usage.
                </li>
                <li>
                  Introduced functional requirement documentation for complex features, improving
                  alignment with Product and Engineering, reducing rework, and clarifying
                  constraints across future sprints.
                </li>
                <li>
                  Unified table-based patterns and identified structural discrepancies, preventing
                  long-term fragmentation and establishing a foundation for scalable feature
                  expansion.
                </li>
              </ul>
            }
          />
        </section>

        <SectionReflection
          amount={4}
          items={[
            {
              title: "Pragmatism over perfection",
              content:
                "Shipping actionable, structurally sound solutions mattered more than pursuing ideal UI that backend constraints could not support."
            },
            {
              title: "Structure before screens",
              content: "Defining rules, constraints, and edge cases upfront prevented rework and improved delivery quality."
            },
            {
              title: "Process scales with team size",
              content:
                "Introducing functional requirement documentation and aligning early with Product and Engineering reduced ambiguity, improved collaboration, and enabled future designers to deliver independently."
            },
            {
              title: "System-level thinking is critical",
              content:
                "Designing in a complex, evolving product requires balancing user needs, technical constraints, and long-term consistency."
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
    <div className="relative h-[411px] overflow-hidden rounded-[var(--s-media-section-image-radius)] max-[1100px]:h-[320px] max-[700px]:h-[240px]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 658px"
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

