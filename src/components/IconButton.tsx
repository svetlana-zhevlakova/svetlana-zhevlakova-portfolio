import * as React from "react";

type IconButtonVariant = "Default" | "Variant2";

export type IconButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "className"
> & {
  className?: string;
  variant?: IconButtonVariant;
  icon?: React.ReactNode;
};

function cx(...values: Array<string | undefined | null | false>) {
  return values.filter(Boolean).join(" ");
}

function MenuIcon() {
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
        d="M3 5H21M3 12H21M3 19H21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconButton({
  className,
  variant = "Default",
  icon,
  type = "button",
  ...buttonProps
}: IconButtonProps) {
  const iconColorClass =
    variant === "Variant2"
      ? "text-[var(--s-button-link-hover-icon)]"
      : "text-[var(--s-button-link-default-icon)]";

  return (
    <button
      type={type}
      className={cx(
        "inline-flex h-[44px] items-center justify-center rounded-[var(--s-button-radius)] px-[var(--s-button-horizontal-padding)] py-[var(--s-button-vertical-padding)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--p-info-color-focus-ring-default)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--s-page-background)]",
        className
      )}
      {...buttonProps}
    >
      <span className={cx("inline-flex size-6 items-center justify-center", iconColorClass)}>
        {icon ?? <MenuIcon />}
      </span>
    </button>
  );
}
