import Image from "next/image";

const PHOTO_SRC = "/me.jpg";

export default function AboutPage() {
  return (
    <main className="flex w-full flex-1 bg-[var(--s-page-background)]">
      <div className="flex w-full flex-1 px-[var(--s-grid-system-margin)] py-10">
        <section className="flex w-full flex-1 items-start gap-[var(--s-section-to-section-gap)] max-[1279px]:flex-col">
          <div className="relative h-[624px] w-[418px] shrink-0 overflow-hidden rounded-[var(--s-media-section-image-radius)] max-[1279px]:aspect-[1224/1828] max-[1279px]:h-auto max-[1279px]:w-full">
            <Image
              src={PHOTO_SRC}
              alt="Portrait of Svetlana Zhevlakova"
              fill
              sizes="(min-width: 1280px) 418px, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="flex h-[624px] w-[896px] max-w-full flex-col items-start justify-between max-[1279px]:h-auto max-[1279px]:w-full max-[1279px]:gap-[var(--s-section-to-subsection-gap)]">
            <div className="w-full max-w-[800px] text-[var(--s-section-text)]">
              <div className="flex flex-col gap-[var(--s-section-to-subsection-gap)]">
                <div className="flex flex-col gap-[var(--s-section-to-title-gap)]">
                <h1 className="text-[length:var(--s-typography-headline-h1size)] font-normal leading-[var(--s-typography-headline-h1line)]">
                  Hey, I’m Svetlana.
                </h1>
                <p className="text-[length:var(--s-typography-callout-callout-size)] font-normal leading-[var(--s-typography-callout-callout-line)]">
                  I design scalable products by navigating complexity and creating
                  structure in complex systems.
                </p>
              </div>
            </div>
            </div>

            <div className="flex w-full max-w-[800px] flex-col gap-[var(--s-section-to-subsection-gap)] text-[var(--s-section-text)]">
              <AboutBlock
                title="Product Designer At Scale, Driving Clarity And Faster Delivery"
                body="I design and evolve B2B and B2B2C products with complex data models and multi-role flows. I apply scalable UX patterns to bring structure, enable actionable workflows, and accelerate delivery."
              />
              <AboutBlock
                title="Technical Fluency In Complex Systems"
                body="With a background in software engineering, I understand product architecture and data models. I design with pragmatic judgment, shaping solutions that account for technical constraints from the start."
              />
              <AboutBlock
                title="Team & Culture Leader"
                body="I mentored a junior designer toward system-level thinking through structured critiques and pair design. I led hiring, introduced a skill framework, and aligned design with product and business strategy."
              />
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

