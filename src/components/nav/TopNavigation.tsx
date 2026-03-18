import Link from "next/link";

import { Button } from "@/components/Button";

type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type TopNavigationProps = {
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
    href: "https://docs.google.com/document/d/1v0znohRMub3ZiYR5rlRHCKAXu_BJAcsJjdW1TXlub1s/edit?tab=t.0",
    external: true
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/svetlana-zhevlakova/",
    external: true
  }
];

export function TopNavigation({
  className,
  items = defaultItems,
  ctaHref = "mailto:zhevlakova.design@gmail.com"
}: TopNavigationProps) {
  return (
    <header
      className={cx(
        "w-full px-[var(--s-grid-system-margin)] py-5",
        className
      )}
      data-name="Top navigation"
    >
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between">
        <Link
          href="/"
          className="w-[41px] text-[36px] font-light leading-none text-[var(--s-button-link-default-text)]"
          aria-label="Home"
        >
          SZ
        </Link>

        <nav className="flex items-center gap-10">
          {items.map((item) => (
            <Button
              key={item.href}
              variant="link"
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer noopener" : undefined}
            >
              {item.label}
            </Button>
          ))}
          <Button variant="primary" href={ctaHref}>
            Contact me
          </Button>
        </nav>
      </div>
    </header>
  );
}

