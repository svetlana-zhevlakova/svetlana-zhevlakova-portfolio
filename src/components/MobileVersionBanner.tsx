"use client";

import { useState } from "react";

import { IconButton } from "@/components/IconButton";

function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M6.75806 17.243L12.0011 12L17.2441 17.243M17.2441 6.75699L12.0001 12L6.75806 6.75699"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MobileVersionBanner() {
  const [isClosed, setIsClosed] = useState(false);

  if (isClosed) return null;

  return (
    <div className="w-full bg-[var(--p-primary-color-primary100)] px-[var(--s-grid-system-margin)] py-2 text-[var(--s-section-text)] min-[1280px]:hidden">
      <div className="flex items-start justify-between gap-2">
      <p className="text-[length:var(--p-typography-size-font-size14)] font-normal leading-[var(--p-typography-line-height-line-height14)]">
        Mobile version of this portfolio is in progress. You may notice some issues.
      </p>
        <IconButton
          aria-label="Close mobile version notice"
          icon={<CloseIcon />}
          onClick={() => setIsClosed(true)}
          className="h-auto shrink-0 bg-transparent p-0"
        />
      </div>
    </div>
  );
}
