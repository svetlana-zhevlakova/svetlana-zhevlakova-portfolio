"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import * as React from "react";

export type CarouselImage = { src: string; width: number; height: number };

type Slot = "center" | "left-1" | "right-1" | "left-2" | "right-2";

function getSlot(i: number, center: number, n: number): Slot {
  if (i === center) return "center";
  if (i === (center - 1 + n) % n) return "left-1";
  if (i === (center + 1) % n) return "right-1";
  if (i === (center - 2 + n) % n) return "left-2";
  return "right-2";
}

const SLOT_PROPS: Record<Slot, {
  x: string; scale: number; z: number; blur: number; overlay: number;
}> = {
  "center":  { x: "0%",   scale: 1,    z: 10, blur: 0, overlay: 0    },
  "left-1":  { x: "-20%", scale: 0.84, z: 8,  blur: 0, overlay: 0.01 },
  "right-1": { x: "20%",  scale: 0.84, z: 8,  blur: 0, overlay: 0.01 },
  "left-2":  { x: "-32%", scale: 0.72, z: 5,  blur: 0, overlay: 0.02 },
  "right-2": { x: "32%",  scale: 0.72, z: 5,  blur: 0, overlay: 0.02 },
};

const SHADOW = "0px 10px 10px -5px rgba(0,0,0,0.04), 0px 20px 25px -5px rgba(0,0,0,0.10)";
const EASE = [0.25, 0.46, 0.45, 0.94] as const;
const TRANSITION = { duration: 0.65, ease: EASE };

export function CarouselMedia({ images }: { images: CarouselImage[] }) {
  const [centerIdx, setCenterIdx] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Start/stop cycling based on visibility
  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let timer: ReturnType<typeof setInterval> | null = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !timer) {
          timer = setInterval(
            () => setCenterIdx(i => (i - 1 + images.length) % images.length),
            1800
          );
        } else if (!entry.isIntersecting && timer) {
          clearInterval(timer);
          timer = null;
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timer) clearInterval(timer);
    };
  }, [images.length]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 flex items-center justify-center overflow-hidden"
    >
      {images.map((img, i) => {
        const s = SLOT_PROPS[getSlot(i, centerIdx, images.length)];
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{ zIndex: s.z }}
            animate={{ x: s.x, scale: s.scale }}
            transition={TRANSITION}
          >
            <motion.div
              className="relative overflow-hidden rounded-[12px]"
              animate={{ filter: `blur(${s.blur}px)` }}
              transition={TRANSITION}
              style={{ boxShadow: SHADOW }}
            >
              <Image
                src={img.src}
                alt=""
                width={img.width}
                height={img.height}
                className="block w-auto"
                style={{ height: "clamp(240px, calc(88vh - 396px), 460px)" }}
                priority={i === 0}
              />
              <div
                className="absolute inset-0 rounded-[12px] bg-black"
                style={{
                  opacity: s.overlay,
                  transition: `opacity ${TRANSITION.duration}s cubic-bezier(${EASE.join(",")})`,
                }}
              />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
