import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <main className="flex w-full flex-1 bg-[var(--s-page-background)]">
      <div className="flex w-full flex-1 items-center justify-center px-[var(--s-grid-system-margin)] py-10">
        <section className="flex w-full max-w-[800px] -translate-y-[6vh] flex-col items-center gap-[var(--s-section-to-subsection-gap)] text-center text-[var(--s-section-text)]">
          <p className="text-[length:var(--s-typography-headline-h1size)] font-normal leading-[var(--s-typography-headline-h1line)]">
            404
          </p>
          <h2 className="text-[length:var(--s-typography-headline-h2size)] font-normal leading-[var(--s-typography-headline-h2line)]">
            Page not found
          </h2>
          <p className="text-[length:var(--s-typography-paragraph-base-size)] font-normal leading-[var(--s-typography-paragraph-base-line)]">
            The page you are looking for does not exist or may have been moved.
          </p>
          <div>
            <Button href="/" variant="primary">
              Back to Home
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
