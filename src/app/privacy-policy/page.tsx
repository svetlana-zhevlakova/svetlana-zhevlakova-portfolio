export default function PrivacyPolicyPage() {
  return (
    <main className="w-full flex-1 bg-[var(--s-page-background)]">
      <div className="mx-auto flex w-full max-w-[800px] flex-col gap-[var(--s-section-to-subsection-gap)] px-[var(--s-grid-system-margin)] py-[var(--s-grid-system-vertical-padding)] text-[var(--s-section-text)]">
        <h1 className="text-[length:var(--s-typography-headline-h1size)] font-normal leading-[var(--s-typography-headline-h1line)]">
          Privacy Policy
        </h1>
        <p className="text-[length:var(--s-typography-paragraph-base-size)] font-normal leading-[var(--s-typography-paragraph-base-line)]">
          This portfolio website uses Google Analytics and Hotjar to understand visitor
          interactions and improve the website experience. These tools collect data such as page
          views, clicks, and device information. No personal data like name, email, or address is
          collected automatically. IP addresses are anonymized. Data is used for analytics purposes
          only and is not sold to third parties.
        </p>
      </div>
    </main>
  );
}
