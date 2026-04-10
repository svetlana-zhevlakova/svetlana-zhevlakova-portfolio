import Link from "next/link";
import * as React from "react";

type ContentItemGlassState = "Default" | "Hover" | "Active";

type BaseProps = {
  label: React.ReactNode;
  state?: ContentItemGlassState;
  tone?: "default" | "contrast";
  className?: string;
};

type ContentItemGlassAsLinkProps = BaseProps &
  Omit<React.ComponentProps<typeof Link>, "className" | "href" | "children"> & {
    href: string;
  };

type ContentItemGlassAsButtonProps = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: never;
  };

export type ContentItemGlassProps = ContentItemGlassAsLinkProps | ContentItemGlassAsButtonProps;

function cx(...values: Array<string | undefined | null | false>) {
  return values.filter(Boolean).join(" ");
}

function DotIcon({ isContrast = false }: { isContrast?: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <circle
        cx="8"
        cy="8"
        r="3"
        fill={
          isContrast
            ? "var(--s-content-item-contrast-active-icon)"
            : "var(--s-content-item-active-icon)"
        }
        style={{ transition: "fill 450ms ease-out" }}
      />
    </svg>
  );
}

function isLinkProps(p: ContentItemGlassProps): p is ContentItemGlassAsLinkProps {
  return typeof (p as ContentItemGlassAsLinkProps).href === "string";
}

export function ContentItemGlass(props: ContentItemGlassProps) {
  const { label, state = "Default", tone = "default", className } = props;

  const isDefault = state === "Default";
  const isActive = state === "Active";

  const isContrast = tone === "contrast";

  const rootClassName = cx(
    "group relative inline-flex w-fit max-w-full min-w-0 items-center gap-[var(--s-content-item-to-active-mark)] rounded-[var(--s-content-item-radius)] px-[var(--s-content-item-horizontal-padding)] py-[var(--s-content-item-vertical-padding)]",
    "transition-colors duration-500 ease-out",
    "backdrop-blur-md",
    isContrast
      ? "bg-[var(--s-content-item-contrast-background)]"
      : "bg-[var(--s-content-item-default-background)]",
    isActive
      ? isContrast
        ? "text-[var(--s-content-item-contrast-active-text)]"
        : "text-[var(--s-content-item-active-text)]"
      : isContrast
        ? "text-[var(--s-content-item-contrast-default-text)] hover:text-[var(--s-content-item-contrast-hover-text)]"
        : "text-[var(--s-content-item-default-text)] hover:text-[var(--s-content-item-hover-text)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--p-info-color-focus-ring-default)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--s-page-background)]",
    className
  );

  const labelClassName =
    "whitespace-nowrap text-left text-[length:var(--s-typography-paragraph-small-size)] leading-[var(--s-typography-paragraph-small-line)] font-normal text-current";

  const content = (
    <>
      <span className={labelClassName}>{label}</span>
      {isActive ? <DotIcon isContrast={isContrast} /> : null}
      {!isActive ? (
        <span
          aria-hidden="true"
          className={cx(
            "absolute bottom-[var(--s-content-item-to-hover-mark)] left-[var(--s-content-item-horizontal-padding)] right-[var(--s-content-item-horizontal-padding)] h-px origin-center scale-x-0 rounded-[var(--p-raduis-radius-full)] transition-transform duration-200 group-hover:scale-x-100",
            "transition-colors duration-500 ease-out",
            isContrast
              ? "bg-[var(--s-content-item-contrast-hover-border)]"
              : "bg-[var(--s-content-item-hover-border)]"
          )}
        />
      ) : null}
    </>
  );

  if (isLinkProps(props)) {
    const { href, label: _label, state: _state, className: _className, ...linkProps } = props;
    return (
      <Link href={href} className={rootClassName} {...linkProps}>
        {content}
      </Link>
    );
  }

  const { label: _label, state: _state, className: _className, type = "button", ...buttonProps } =
    props;

  return (
    <button type={type} className={rootClassName} {...buttonProps}>
      {content}
    </button>
  );
}
