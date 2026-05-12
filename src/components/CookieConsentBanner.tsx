"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";

import { Button } from "@/components/Button";

const STORAGE_KEY = "analytics-notice-dismissed";
const IS_PRODUCTION = process.env.NODE_ENV === "production";

export function CookieConsentBanner() {
  const [dismissed, setDismissed] = useState<boolean | null>(null);

  useEffect(() => {
    setDismissed(!!window.localStorage.getItem(STORAGE_KEY));
  }, []);

  const handleDismiss = () => {
    window.localStorage.setItem(STORAGE_KEY, "1");
    setDismissed(true);
  };

  return (
    <>
      {IS_PRODUCTION ? (
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

      {dismissed === false ? (
        <div className="fixed inset-x-0 bottom-0 z-50 px-[var(--s-grid-system-margin)] pb-4">
          <div className="mx-auto flex w-full max-w-[900px] items-center justify-between gap-4 rounded-[var(--s-card-radius)] border border-[var(--s-media-section-border)] bg-[var(--s-page-background)] px-5 py-4 text-[var(--s-section-text)] max-[1279px]:flex-col max-[1279px]:items-start">
            <p className="text-[length:var(--s-typography-paragraph-small-size)] font-normal leading-[var(--s-typography-paragraph-small-line)]">
              I use analytics to understand how visitors use this portfolio and to improve it. Read more in the{" "}
              <Link href="/privacy-policy" className="underline underline-offset-2">
                Privacy Policy
              </Link>
              .
            </p>
            <Button variant="primary" onClick={handleDismiss} className="shrink-0">
              OK
            </Button>
          </div>
        </div>
      ) : null}
    </>
  );
}
