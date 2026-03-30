"use client";

import { useState } from "react";

import { Button } from "@/components/Button";
import { IconButton } from "@/components/IconButton";
import { LogoButton } from "@/components/LogoButton";

type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type HeaderProps = {
  className?: string;
  items?: NavItem[];
  ctaHref?: string;
};

function cx(...values: Array<string | undefined | null | false>) {
  return values.filter(Boolean).join(" ");
}

const defaultItems: NavItem[] = [
  { label: "About", href: "/about" },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1mI6zGP9Q7OZ3uX5Gx-Jk6IMT3T-Dcetn/view?usp=sharing",
    external: true
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/svetlana-zhevlakova/",
    external: true
  }
];

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

function trackHeaderClick(label: string, destination: string) {
  if (typeof window === "undefined") return;

  const gtag = (window as Window & {
    gtag?: (
      command: "event",
      action: string,
      params?: Record<string, string>
    ) => void;
  }).gtag;

  gtag?.("event", "header_click", {
    event_category: "navigation",
    event_label: label,
    destination_url: destination
  });
}

export function Header({
  className,
  items = defaultItems,
  ctaHref = "mailto:zhevlakova.design@gmail.com"
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={cx(
        "fixed inset-x-0 top-0 z-50 w-full bg-[rgba(255,255,255,0.78)] px-[var(--s-grid-system-margin)] py-5 backdrop-blur-md",
        className
      )}
      data-name="Header"
    >
      <div className="relative flex w-full items-center justify-between">
        <LogoButton href="/" aria-label="Home" />

        <nav className="hidden items-center gap-10 min-[1280px]:flex" aria-label="Primary">
          {items.map((item) => (
            <Button
              key={item.href}
              variant="link"
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer noopener" : undefined}
              onClick={
                item.label === "Resume" || item.label === "LinkedIn"
                  ? () => trackHeaderClick(item.label, item.href)
                  : undefined
              }
            >
              {item.label}
            </Button>
          ))}
          <Button
            variant="primary"
            href={ctaHref}
            onClick={() => trackHeaderClick("Contact me", ctaHref)}
          >
            Contact me
          </Button>
        </nav>

        <IconButton
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={handleMenuToggle}
          variant={isMenuOpen ? "Variant2" : "Default"}
          icon={isMenuOpen ? <CloseIcon /> : undefined}
          className="relative z-50 bg-[rgba(255,255,255,0.8)] min-[1280px]:hidden"
        />

        {isMenuOpen ? (
          <nav
            className="fixed inset-0 z-40 flex items-start justify-center bg-[rgba(255,255,255,0.78)] px-[var(--s-grid-system-margin)] pt-[100px] backdrop-blur-xl min-[1280px]:hidden"
            aria-label="Mobile navigation"
          >
            <div className="flex w-full max-w-[360px] flex-col items-center gap-4 rounded-[var(--s-card-radius)] bg-[rgba(255,255,255,0.78)] p-4">
              {items.map((item) => (
                <Button
                  key={`mobile-${item.href}`}
                  variant="link"
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer noopener" : undefined}
                  onClick={() => {
                    if (item.label === "Resume" || item.label === "LinkedIn") {
                      trackHeaderClick(item.label, item.href);
                    }
                    handleMenuClose();
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                variant="primary"
                href={ctaHref}
                onClick={() => {
                  trackHeaderClick("Contact me", ctaHref);
                  handleMenuClose();
                }}
              >
                Contact me
              </Button>
            </div>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
