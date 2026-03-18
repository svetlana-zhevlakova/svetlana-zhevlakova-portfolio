import Image from "next/image";

const PHOTO_SRC = "/me.jpg"; // update if your filename/path is different

export default function AboutPage() {
  return (
    <main className="w-full bg-[var(--s-page-background)]">
      <div className="mx-auto w-full max-w-[1440px] px-[var(--s-grid-system-margin)] py-10">
        <section className="flex w-full flex-[1_0_0] items-start gap-[var(--s-section-to-section-gap)] max-[1100px]:flex-col">
          {/* Photo */}
          <div className="relative h-[624px] w-[418px] shrink-0 overflow-hidden max-[1100px]:mx-auto max-[1100px]:h-[320px] max-[1100px]:w-[214px]">
            <Image
              src={PHOTO_SRC}
              alt="Portrait of Svetlana Zhevlakova"
              fill
              sizes="(min-width: 1100px) 418px, 214px"
              className="object-cover"
              priority
            />
          </div>

          {/* Text content */}
          <div className="flex h-[624px] w-[896px] max-w-full flex-col items-start justify-between max-[1100px]:h-auto max-[1100px]:gap-[var(--s-section-to-subsection-gap)]">
            {/* Intro */}
            <div className="flex max-w-[var(--s-section-max-width)] flex-col gap-[var(--s-section-to-subsection-gap)]">
              <div className="flex flex-col gap-[var(--s-section-to-title-gap)] text-[var(--s-section-text)]">
                <h1 className="text-[length:var(--s-typography-headline-h1size)] font-normal leading-[var(--s-typography-headline-h1line)]">
                  Hey, I’m Svetlana.
                </h1>
                <p className="text-[length:var(--s-typography-callout-callout-size)] font-normal leading-[var(--s-typography-callout-callout-line)]">
                  I design scalable products by navigating complexity and creating
                  structure in complex systems.
                </p>
              </div>
            </div>

            {/* 2x2 blocks */}
            <div className="flex w-full flex-col gap-[var(--s-section-to-subsection-gap)]">
              <div className="grid grid-cols-[repeat(2,minmax(0,1fr))] gap-x-5 gap-y-5 max-[900px]:grid-cols-1">
                <AboutBlock
                  title="Product designer at scale"
                  body="I design and evolve B2B and B2B2C products with complex data models, multi-role flows, and scalable UX patterns. I focus on clarity and actionable solutions, especially when working within real constraints of scope, time, and technical complexity."
                />
                <AboutBlock
                  title="User-focused pragmatist with technical fluency"
                  body="I design with pragmatic judgment, clarifying what matters most in a given context and shaping solutions that are structurally sound. Backed by almost a decade as a software engineer, I translate ambition into simple, working solutions grounded in real-world constraints."
                />
                <AboutBlock
                  title="Team & culture leader"
                  body="I mentored a junior designer through structured critiques and pair-design sessions, helping them think beyond screens and toward systems. I actively connect design work with product and engineering strategy to ensure alignment and shared ownership."
                />
                <AboutBlock
                  title="Hiring & organizational contributor"
                  body="I led hiring for a design role and created initiatives that strengthened design visibility across the company. From introducing skill frameworks to launching a company-wide Design Digest, I worked to embed design into broader business conversations."
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

type AboutBlockProps = {
  title: string;
  body: string;
};

function AboutBlock({ title, body }: AboutBlockProps) {
  return (
    <article className="flex flex-col gap-[var(--s-section-to-title-gap)] text-[var(--s-section-text)]">
      <h2 className="text-[length:var(--s-typography-headline-h3size)] font-semibold leading-[var(--s-typography-headline-h3line)]">
        {title}
      </h2>
      <p className="text-[length:var(--s-typography-paragraph-base-size)] font-normal leading-[var(--s-typography-paragraph-base-line)]">
        {body}
      </p>
    </article>
  );
}

