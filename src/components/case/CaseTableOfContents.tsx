"use client";

import { useEffect, useRef, useState } from "react";

import { ContentItemGlass } from "@/components/ContentItemGlass";

type TocItem = {
  id: string;
  label: string;
};

type CaseTableOfContentsProps = {
  items: TocItem[];
  className?: string;
};

function cx(...values: Array<string | undefined | null | false>) {
  return values.filter(Boolean).join(" ");
}

export function CaseTableOfContents({ items, className }: CaseTableOfContentsProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const [isInContrastZone, setIsInContrastZone] = useState(false);
  const lockedIdRef = useRef<string | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const unlockScrollSpy = () => {
      lockedIdRef.current = null;
    };

    const updateActiveFromScroll = () => {
      if (lockedIdRef.current) {
        setActiveId(lockedIdRef.current);
        return;
      }

      const OPTICAL_CENTER_RATIO = 0.30;
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

  useEffect(() => {
    let frame: number | null = null;

    const updateContrastMode = () => {
      const navEl = navRef.current;
      if (!navEl) return;

      const navRect = navEl.getBoundingClientRect();
      const zones = document.querySelectorAll<HTMLElement>("[data-toc-contrast-zone='true']");

      let overlaps = false;
      zones.forEach((zone) => {
        if (overlaps) return;
        const zoneRect = zone.getBoundingClientRect();
        const intersects =
          navRect.left < zoneRect.right &&
          navRect.right > zoneRect.left &&
          navRect.top < zoneRect.bottom &&
          navRect.bottom > zoneRect.top;
        if (intersects) overlaps = true;
      });

      setIsInContrastZone(overlaps);
    };

    const scheduleContrastUpdate = () => {
      if (frame !== null) return;
      frame = window.requestAnimationFrame(() => {
        frame = null;
        updateContrastMode();
      });
    };

    scheduleContrastUpdate();
    window.addEventListener("scroll", scheduleContrastUpdate, { passive: true });
    window.addEventListener("resize", scheduleContrastUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleContrastUpdate);
      window.removeEventListener("resize", scheduleContrastUpdate);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      aria-label="Case table of contents"
      className={cx(
        "fixed left-[calc(var(--s-grid-system-margin)-var(--s-content-item-horizontal-padding))] top-1/2 z-30 hidden w-fit max-w-[300px] -translate-y-1/2 flex-col gap-1 min-[1280px]:flex",
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
            tone={isInContrastZone ? "contrast" : "default"}
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
