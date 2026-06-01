"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import { Tag } from "@/components/Tag";

export type CaseCardProps = {
  title: string;
  description: string;
  tags: string[];
  role?: string;
  team?: string;
  coverImage?: string;
  media?: React.ReactNode;
  href?: string;
  className?: string;
};

function cx(...values: Array<string | undefined | null | false>) {
  return values.filter(Boolean).join(" ");
}

const snapshotRow =
  "flex gap-[var(--s-card-to-titlegap)] items-start w-full text-[length:var(--s-typography-paragraph-base-size)] font-normal leading-[var(--s-typography-paragraph-base-line)]";

const STIFFNESS = 0.1;
const DAMPING = 0.72;

function useBubbleSpring() {
  const targetRef = React.useRef({ x: 0, y: 0 });
  const springRef = React.useRef({ x: 0, y: 0, vx: 0, vy: 0 });
  const rafRef = React.useRef<number | null>(null);
  const [pos, setPos] = React.useState({ x: 0, y: 0 });

  const start = React.useCallback(() => {
    const tick = () => {
      const t = targetRef.current;
      const s = springRef.current;
      s.vx += (t.x - s.x) * STIFFNESS;
      s.vy += (t.y - s.y) * STIFFNESS;
      s.vx *= DAMPING;
      s.vy *= DAMPING;
      s.x += s.vx;
      s.y += s.vy;
      setPos({ x: s.x, y: s.y });
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  const stop = React.useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  const setTarget = React.useCallback((x: number, y: number) => {
    targetRef.current = { x, y };
  }, []);

  const teleport = React.useCallback((x: number, y: number) => {
    springRef.current = { x, y, vx: 0, vy: 0 };
    targetRef.current = { x, y };
    setPos({ x, y });
  }, []);

  return { pos, setTarget, teleport, start, stop };
}

export function CaseCard({ href, className, title, description, tags, role, team, coverImage, media }: CaseCardProps) {
  const [hovered, setHovered] = React.useState(false);
  const { pos, setTarget, teleport, start, stop } = useBubbleSpring();

  const computeTarget = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const offset = 48;
    const edgeThreshold = 100;
    return {
      x: x + (x > rect.width - edgeThreshold ? -offset : offset),
      y: y + (y > rect.height - edgeThreshold ? -offset : offset),
    };
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    const { x, y } = computeTarget(e);
    teleport(x, y);
    setHovered(true);
    start();
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { x, y } = computeTarget(e);
    setTarget(x, y);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    stop();
  };

  const bubble = (
    <div
      className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--s-button-primary-default-background)] px-[var(--s-button-horizontal-padding)] py-[var(--s-button-vertical-padding)] text-[length:var(--s-typography-paragraph-base-size)] font-normal leading-[var(--s-typography-paragraph-base-line)] text-[var(--s-button-primary-default-text)] whitespace-nowrap transition-opacity duration-150"
      style={{
        left: pos.x,
        top: pos.y,
        opacity: hovered ? 1 : 0,
      }}
    >
      Open case
    </div>
  );

  const content = (
    <div className="flex w-full flex-col gap-[var(--s-card-to-elementgap)] items-start">
      <div className="flex w-full flex-col gap-[var(--s-card-to-titlegap)] items-start">
        <div className="flex gap-[var(--s-card-to-titlegap)] items-start">
          {tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        <h3 className="w-full text-[length:var(--s-typography-headline-h1size)] font-normal leading-[var(--s-typography-headline-h1line)] text-[var(--s-card-default-text)]">
          {title}
        </h3>

        <p className="w-full text-[length:var(--s-typography-paragraph-base-size)] font-normal leading-[var(--s-typography-paragraph-base-line)] text-[var(--s-card-default-text)]">
          {description}
        </p>

        {role && (
          <div className={snapshotRow}>
            <span className="shrink-0 text-[var(--s-section-caption)]">Role:</span>
            <span className="text-[var(--s-section-text)]">{role}</span>
          </div>
        )}

        {team && (
          <div className={snapshotRow}>
            <span className="shrink-0 text-[var(--s-section-caption)]">Team:</span>
            <span className="text-[var(--s-section-text)]">{team}</span>
          </div>
        )}
      </div>

      <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-[var(--s-media-section-image-radius)] bg-[var(--s-media-section-background)] min-[1200px]:aspect-auto min-[1200px]:h-[calc(100vh-450px)]">
        {media ?? (coverImage && (
          <Image src={coverImage} alt={title} fill className="object-cover" />
        ))}
      </div>
    </div>
  );

  const handlers = {
    onMouseEnter: handleMouseEnter,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  };

  if (href) {
    return (
      <Link
        href={href}
        className={cx("relative block w-full py-[calc(var(--s-section-to-section-gap)/2)]", className)}
        {...handlers}
      >
        {content}
        {bubble}
      </Link>
    );
  }

  return (
    <div className={cx("relative w-full", className)} {...handlers}>
      {content}
      {bubble}
    </div>
  );
}
