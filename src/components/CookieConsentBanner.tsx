"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";

const STORAGE_KEY = "cookie-consent";
const ACCEPTED = "accepted";
const REJECTED = "rejected";
const IS_PRODUCTION = process.env.NODE_ENV === "production";

export function CookieConsentBanner() {
  const [consent, setConsent] = useState<string | null>(null);

  useEffect(() => {
    setConsent(window.localStorage.getItem(STORAGE_KEY));
  }, []);

  const handleAccept = () => {
    window.localStorage.setItem(STORAGE_KEY, ACCEPTED);
    setConsent(ACCEPTED);
  };

  const handleReject = () => {
    window.localStorage.setItem(STORAGE_KEY, REJECTED);
    setConsent(REJECTED);
  };

  const shouldShowBanner =
    IS_PRODUCTION && consent !== ACCEPTED && consent !== REJECTED;
  const shouldLoadTrackingScripts = IS_PRODUCTION && consent === ACCEPTED;

  return (
    <>
      {shouldLoadTrackingScripts ? (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-3DRE6NK9YZ"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3DRE6NK9YZ');
            `}
          </Script>
          <Script
            src="https://t.contentsquare.net/uxa/9396a242225f6.js"
            strategy="afterInteractive"
          />
        </>
      ) : null}

      {shouldShowBanner ? (
        <div className="fixed inset-x-0 bottom-0 z-50 px-[var(--s-grid-system-margin)] pb-4">
          <div className="mx-auto flex w-full max-w-[900px] items-start justify-between gap-4 rounded-[var(--s-card-radius)] border border-[var(--s-media-section-border)] bg-[var(--s-page-background)] px-5 py-4 text-[var(--s-section-text)] shadow-md max-[800px]:flex-col">
            <p className="text-[length:var(--s-typography-paragraph-base-size)] font-normal leading-[var(--s-typography-paragraph-base-line)]">
              Hi, it&apos;s Svetlana. I use cookies and analytics to understand how visitors use
              this portfolio and to improve it. You can read more in the{" "}
              <Link href="/privacy-policy" className="underline underline-offset-2">
                Privacy Policy
              </Link>
              .
            </p>
            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={handleReject}
                className="rounded-[var(--s-button-radius)] border border-[var(--s-media-section-border)] px-[var(--s-button-horizontal-padding)] py-[var(--s-button-vertical-padding)] text-[length:var(--s-typography-paragraph-base-size)] leading-[var(--s-typography-paragraph-base-line)] text-[var(--s-section-text)]"
              >
                Reject
              </button>
              <button
                type="button"
                onClick={handleAccept}
                className="rounded-[var(--s-button-radius)] bg-[var(--s-button-primary-default-background)] px-[var(--s-button-horizontal-padding)] py-[var(--s-button-vertical-padding)] text-[length:var(--s-typography-paragraph-base-size)] leading-[var(--s-typography-paragraph-base-line)] text-[var(--s-button-primary-default-text)]"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
