import Link from "next/link";
import * as React from "react";

type CommonProps = {
  className?: string;
  initials?: string;
  state?: "default" | "hover";
};

type LogoButtonAsButtonProps = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className"> & {
    href?: never;
  };

type LogoButtonAsLinkProps = CommonProps &
  Omit<React.ComponentProps<typeof Link>, "children" | "className" | "href"> & {
    href: string;
  };

export type LogoButtonProps = LogoButtonAsButtonProps | LogoButtonAsLinkProps;

function cx(...values: Array<string | undefined | null | false>) {
  return values.filter(Boolean).join(" ");
}

function isLinkProps(p: LogoButtonProps): p is LogoButtonAsLinkProps {
  return typeof (p as LogoButtonAsLinkProps).href === "string";
}

export function LogoButton(props: LogoButtonProps) {
  const { className, initials = "SZ", state = "default" } = props;
  const isForcedHover = state === "hover";
  const classes = cx(
    "inline-flex size-[52px] items-center justify-center rounded-[var(--p-raduis-radius-full)] p-[8px]",
    "text-[28px] font-normal leading-[28px]",
    "font-[family-name:var(--p-typography-font-font-family)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--p-info-color-focus-ring-default)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--s-page-background)]",
    isForcedHover
      ? "bg-[var(--s-button-primary-hover-background)] text-[var(--s-button-primary-hover-text)]"
      : "bg-[var(--s-button-primary-default-background)] text-[var(--s-button-primary-default-text)] hover:bg-[var(--s-button-primary-hover-background)] hover:text-[var(--s-button-primary-hover-text)]",
    className
  );

  const content = (
    <span aria-hidden="true" className="whitespace-nowrap">
      {initials}
    </span>
  );

  if (isLinkProps(props)) {
    const {
      href,
      className: _className,
      initials: _initials,
      state: _state,
      ...linkProps
    } = props;

    return (
      <Link href={href} className={classes} {...linkProps}>
        {content}
      </Link>
    );
  }

  const {
    className: _className,
    initials: _initials,
    state: _state,
    type = "button",
    ...buttonProps
  } = props;

  return (
    <button
      type={type}
      className={classes}
      {...buttonProps}
    >
      {content}
    </button>
  );
}
