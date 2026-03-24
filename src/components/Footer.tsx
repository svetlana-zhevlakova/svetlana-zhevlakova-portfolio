export type FooterProps = {
  className?: string;
  name?: string;
  year?: string | number;
};

function cx(...values: Array<string | undefined | null | false>) {
  return values.filter(Boolean).join(" ");
}

export function Footer({
  className,
  name = "Svetlana Zhevlakova",
  year = new Date().getFullYear()
}: FooterProps) {
  return (
    <footer
      className={cx(
        "w-full whitespace-nowrap px-[var(--s-grid-system-margin)] py-5 text-[var(--s-section-text)]",
        className
      )}
      data-name="Footer"
    >
      <div className="flex w-full items-center justify-between text-[length:var(--s-typography-caption-caption-size)] font-normal leading-[var(--s-typography-caption-caption-line)]">
        <div>{name}</div>
        <div>{year}</div>
      </div>
    </footer>
  );
}

