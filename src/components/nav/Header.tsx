import { Button } from "@/components/Button";
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
    href: "https://docs.google.com/document/d/1v0znohRMub3ZiYR5rlRHCKAXu_BJAcsJjdW1TXlub1s/edit?tab=t.0",
    external: true
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/svetlana-zhevlakova/",
    external: true
  }
];

export function Header({
  className,
  items = defaultItems,
  ctaHref = "mailto:zhevlakova.design@gmail.com"
}: HeaderProps) {
  return (
    <header
      className={cx("w-full px-[var(--s-grid-system-margin)] py-5", className)}
      data-name="Header"
    >
      <div className="flex w-full items-center justify-between">
        <LogoButton href="/" aria-label="Home" />

        <nav className="flex items-center gap-10" aria-label="Primary">
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
