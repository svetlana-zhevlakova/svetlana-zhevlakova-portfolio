"use client";

import { useEffect, useRef, useState } from "react";

import { ContentItemGlass } from "@/components/ContentItemGlass";

type TocItem = {
  id: string;
  label: string;
};

type CaseTableOfContentsGlassProps = {
  items: TocItem[];
  className?: string;
};

function cx(...values: Array<string | undefined | null | false>) {
  return values.filter(Boolean).join(" ");
}

export function CaseTableOfContentsGlass({ items, className }: CaseTableOfContentsGlassProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const lockedIdRef = useRef<string | null>(null);

  useEffect(() => {
    const unlockScrollSpy = () => {
      lockedIdRef.current = null;
    };

    const updateActiveFromScroll = () => {
      if (lockedIdRef.current) {
        setActiveId(lockedIdRef.current);
        return;
      }

      const OPTICAL_CENTER_RATIO = 0.3;
      const anchorY = window.innerHeight * OPTICAL_CENTER_RATIO;
      let nextActiveId = items[0]?.id ?? "";

      for (const item of items) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= anchorY) {
          nextActiveId = item.id;
        }
      }

      setActiveId(nextActiveId);
    };

    updateActiveFromScroll();
    window.addEventListener("scroll", updateActiveFromScroll, { passive: true });
    window.addEventListener("resize", updateActiveFromScroll);
    window.addEventListener("wheel", unlockScrollSpy, { passive: true });
    window.addEventListener("touchstart", unlockScrollSpy, { passive: true });
    window.addEventListener("pointerdown", unlockScrollSpy);
    window.addEventListener("keydown", unlockScrollSpy);

    return () => {
      window.removeEventListener("scroll", updateActiveFromScroll);
      window.removeEventListener("resize", updateActiveFromScroll);
      window.removeEventListener("wheel", unlockScrollSpy);
      window.removeEventListener("touchstart", unlockScrollSpy);
      window.removeEventListener("pointerdown", unlockScrollSpy);
      window.removeEventListener("keydown", unlockScrollSpy);
    };
  }, [items]);

  return (
    <nav
      aria-label="Case table of contents glass"
      className={cx(
        "fixed left-[var(--s-grid-system-margin)] top-1/2 z-30 hidden w-fit max-w-[300px] -translate-y-1/2 flex-col gap-0 min-[1500px]:flex",
        className
      )}
    >
      {items.map((item) => {
        const hash = `#${item.id}`;
        const isActive = activeId === item.id;
        return (
          <ContentItemGlass
            key={item.id}
            href={hash}
            label={item.label}
            state={isActive ? "Active" : "Default"}
            onClick={() => {
              lockedIdRef.current = item.id;
              setActiveId(item.id);
            }}
            className="max-w-full"
          />
        );
      })}
    </nav>
  );
}
