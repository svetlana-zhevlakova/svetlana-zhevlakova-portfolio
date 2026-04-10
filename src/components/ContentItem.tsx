import Link from "next/link";
import * as React from "react";

type ContentItemState = "Default" | "Hover" | "Active";

type BaseProps = {
  label: React.ReactNode;
  state?: ContentItemState;
  className?: string;
};

type ContentItemAsLinkProps = BaseProps &
  Omit<React.ComponentProps<typeof Link>, "className" | "href" | "children"> & {
    href: string;
  };

type ContentItemAsButtonProps = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: never;
  };

export type ContentItemProps = ContentItemAsLinkProps | ContentItemAsButtonProps;

function cx(...values: Array<string | undefined | null | false>) {
  return values.filter(Boolean).join(" ");
}

function DotIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0 text-[var(--s-content-item-active-icon)]"
    >
      <path
        d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
        fill="currentColor"
      />
    </svg>
  );
}

function isLinkProps(p: ContentItemProps): p is ContentItemAsLinkProps {
  return typeof (p as ContentItemAsLinkProps).href === "string";
}

export function ContentItem(props: ContentItemProps) {
  const { label, state = "Default", className } = props;

  const isActive = state === "Active";

  const rootClassName = cx(
    "group relative inline-flex w-fit max-w-full min-w-0 items-center gap-[var(--s-content-item-to-active-mark)] rounded-[var(--s-content-item-radius)] px-[var(--s-content-item-horizontal-padding)] py-[var(--s-content-item-vertical-padding)] text-[length:var(--s-typography-paragraph-small-size)] font-normal leading-[var(--s-typography-paragraph-small-line)]",
    "bg-[var(--s-content-item-default-background)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--p-info-color-focus-ring-default)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--s-page-background)]",
    isActive
      ? "text-[var(--s-content-item-active-text)]"
      : "text-[var(--s-content-item-default-text)] hover:text-[var(--s-content-item-hover-text)]",
    className
  );

  const content = (
    <>
      <span className="whitespace-nowrap text-left">{label}</span>
      {isActive ? <DotIcon /> : null}
      {!isActive ? (
        <span
          aria-hidden="true"
          className={cx(
            "absolute bottom-[var(--s-content-item-to-hover-mark)] left-[var(--s-content-item-horizontal-padding)] right-[var(--s-content-item-horizontal-padding)] h-px origin-center scale-x-0 rounded-[var(--p-raduis-radius-full)] bg-[var(--s-content-item-hover-border)] transition-transform duration-200 group-hover:scale-x-100"
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
