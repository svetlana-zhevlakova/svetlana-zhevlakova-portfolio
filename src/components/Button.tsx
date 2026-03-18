import Link from "next/link";
import * as React from "react";

type ButtonVariant = "primary" | "link";

type CommonProps = {
  variant?: ButtonVariant;
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

type ButtonAsButtonProps = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: never;
  };

type ButtonAsLinkProps = CommonProps &
  Omit<React.ComponentProps<typeof Link>, "className" | "href"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

function cx(...values: Array<string | undefined | null | false>) {
  return values.filter(Boolean).join(" ");
}

const wrapperBase =
  "group relative inline-flex flex-col items-center whitespace-nowrap py-[var(--s-button-vertical-padding)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--p-info-color-focus-ring-default)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--s-page-background)] disabled:pointer-events-none disabled:opacity-50";

const contentBase =
  "inline-flex items-center justify-center gap-[4px] text-[length:var(--s-typography-paragraph-base-size)] leading-[var(--s-typography-paragraph-base-line)] font-normal";

const variants: Record<
  ButtonVariant,
  { wrapper: string; content: string; underline?: boolean }
> = {
  primary: {
    wrapper:
      "justify-center rounded-[var(--s-button-radius)] bg-[var(--s-button-primary-default-background)] px-[var(--s-button-horizontal-pading)] hover:bg-[var(--s-button-primary-hover-background)]",
    content:
      "gap-[0px] text-[color:var(--s-button-primary-default-text)] group-hover:text-[color:var(--s-button-primary-hover-text)]",
    underline: false
  },
  link: {
    wrapper: "justify-center",
    content:
      "gap-[var(--s-button-to-hover-mark)] text-[color:var(--s-button-link-default-text)] group-hover:text-[color:var(--s-button-link-hover-text)]",
    underline: true
  }
};

export function Button(props: ButtonProps) {
  const { variant = "primary", className, leftIcon, rightIcon, ...rest } = props;

  const v = variants[variant];
  const wrapperClasses = cx(wrapperBase, v.wrapper, className);
  const contentClasses = cx(contentBase, v.content);

  const content = (
    <>
      <span className={contentClasses}>
        {leftIcon ? (
          <span
            aria-hidden="true"
            className={cx(
              "inline-flex size-4 shrink-0",
              variant === "primary"
                ? "text-[var(--s-button-primary-default-icon)] group-hover:text-[var(--s-button-primary-hover-icon)]"
                : "text-[var(--s-button-link-default-icon)] group-hover:text-[var(--s-button-link-hover-icon)]"
            )}
          >
            {leftIcon}
          </span>
        ) : null}
        <span>{props.children}</span>
        {rightIcon ? (
          <span
            aria-hidden="true"
            className={cx(
              "inline-flex size-4 shrink-0",
              variant === "primary"
                ? "text-[var(--s-button-primary-default-icon)] group-hover:text-[var(--s-button-primary-hover-icon)]"
                : "text-[var(--s-button-link-default-icon)] group-hover:text-[var(--s-button-link-hover-icon)]"
            )}
          >
            {rightIcon}
          </span>
        ) : null}
      </span>
      {variant === "link" ? (
        <span
          aria-hidden="true"
          className={cx(
            "absolute bottom-[3px] h-px rounded-[var(--p-raduis-radius-full)] bg-[var(--s-button-link-hover-border)] transition-all duration-200",
            "left-1/2 w-0 -translate-x-1/2 group-hover:left-0 group-hover:right-0 group-hover:w-auto group-hover:translate-x-0"
          )}
        />
      ) : null}
    </>
  );

  if ("href" in rest) {
    const { href, ...linkProps } = rest;
    return (
      <Link href={href} {...linkProps} className={wrapperClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button {...rest} className={wrapperClasses}>
      {content}
    </button>
  );
}

