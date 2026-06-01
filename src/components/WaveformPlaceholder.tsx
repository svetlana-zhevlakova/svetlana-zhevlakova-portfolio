"use client";

import { motion } from "framer-motion";

const DELAYS = [0, 0.2, 0.4, 0.6, 0.8];

export function WaveformPlaceholder() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
      <div className="flex h-[22px] items-end gap-[4px]">
        {DELAYS.map((delay, i) => (
          <motion.span
            key={i}
            className="block w-[3px] rounded-full bg-[var(--s-section-caption)]"
            animate={{ height: ["6px", "22px", "6px"] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay }}
            style={{ height: "6px" }}
          />
        ))}
      </div>
      <p className="text-[length:var(--s-typography-paragraph-base-size)] text-[var(--s-section-caption)]">
        Animation coming soon
      </p>
    </div>
  );
}
